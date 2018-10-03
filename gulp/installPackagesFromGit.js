const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');
const fx = require('mkdir-recursive');
const os = require('os');
const semverTags = require('semver-tags');
const rmDir = require('rmdir-recursive').sync;
const wrench = require('wrench');
const util = require('util');

function checkVersion(options) {
  return new Promise((reslove, reject) => {
    semverTags(options, function(err, tags) {
      if (err)
        reject(err);
      reslove(tags);
    });
  })
}

(async function () {
  let missingPath =  path.join(process.cwd(), 'missing.json');
  if (!fs.existsSync(missingPath)) {
    console.warn(`Can't install, folder ${missingPath} didn't exist!`);
    return;
  }
  let missing;
  try {
    missing = fs.readFileSync(missingPath);
    missing = JSON.parse(missing);
  } catch (err) {
    console.warn(err);
    return;
  }
  let nodeModulesFolder = path.join(process.cwd(), 'node_modules');
  if (!fs.existsSync(nodeModulesFolder))
    fx.mkdirSync(nodeModulesFolder);
  for (let key in missing) {
    if (missing.hasOwnProperty(key)) {
      try {
        if (!fs.existsSync(path.join(nodeModulesFolder, key))) {
          let url = missing[key].split('#')[0];
          let version = missing[key].split('#')[1];
          if (fs.existsSync(path.join(nodeModulesFolder, key)))
            wrench.rmdirSyncRecursive(path.join(nodeModulesFolder, key));
          wrench.copyDirSyncRecursive(path.join(os.tmpdir(), 'bowerAway', key), path.join(nodeModulesFolder, key));
          if (!fs.existsSync(path.join(nodeModulesFolder, key, 'package.json')))
            execSync(`node install ${path.join(nodeModulesFolder, key)}`, {cwd: process.cwd()});
          let tags = await checkVersion({
            repoType: 'git',
            repoPath:  path.join(nodeModulesFolder, key),
            satisfies: version
          });
          if (Array.isArray(tags) && tags.length > 0) {
            let checkout = execSync(`git checkout tags/${tags[tags.length -1]} -b ${tags[tags.length -1]}`,
              {cwd: path.join(nodeModulesFolder, key), encoding: 'utf-8'});
            if (checkout && checkout.indexOf('error') !== -1 )
              console.warn(checkout);
            console.log(key, tags[tags.length -1]);
          } else if (version === '*') {
            //TODO Проверка на ветку

            console.log(key, 'master');
          } else {
            console.warn(`Не найдена подходящая версия ${key}`);
          }
          rmDir(path.join(nodeModulesFolder, key, '.git'));
        }
      } catch (err) {
        if (fs.existsSync(path.join(nodeModulesFolder, key, '.git')))
          rmDir(path.join(nodeModulesFolder, key, '.git'));
        console.warn(key, err.message);
      }
    }
  }
})();