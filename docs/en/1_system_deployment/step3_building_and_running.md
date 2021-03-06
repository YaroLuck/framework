#### [Content](/docs/en/index.md)

### The previous pege: [Step 2 Core, modules and application](/step2_project_with_modules.md)

# Step 3 Building and deploying the application

For all further commands, run the command prompt as an administrator.

Go to the folder of the application - `cd c:\workspace\framework` and set the `NODE_PATH` environment variable equals to the path to the application. 

 For Windows the command is `set NODE_PATH=c:\workspace\dnt`, for Linux - `export NODE_PATH=/workspace/dnt`. `workspace` is the app directory.

## Building of the application

Building the application includes the installation of all libraries, import of all data to the DB and preparation to launch the app.  

1. The command - `npm install` installs all key dependencies, including locally the `gulp` build-tool. Please make sure that the `Gulp` version - is `4.0`. The command above also installs all libraries from the `dependencies` property in the `package.json` file.

2. Further, write the `gulp assemble` command to build the app.

**NB:** Please make sure that the `NODE_PATH` environment variable is set, the `MongoDB` is open, the `Gulp` is installed globally and locally and its version is `4.0`.

3. Before launching the app add a new user. Open `Mongo Compass` and find the `ino-user` table to delete all entries. Further, returne to the console and run the following command. 

`node bin/adduser.js --name admin --pwd 123` - adds a new admin user with the password 123.

`node bin/acl.js --u admin@local --role admin --p full` - adds right to the user.

## Start of the application

When building is over you can run the app. Please make sure that the `NODE_PATH` environment variable is set. Without it, the system will display an error that some components are missing. 

The `npm start` command starts the system. The alternative is `node bin/www` command.  

When you'll see the message that you're running the system on port `8888`, you can open the browser and type the system adress - `http://localhost:8888`.   

### The next page: [System description - schema of the main types of metadata](/docs/en/2_system_description/metadata_structure/meta_scheme.md) 
--------------------------------------------------------------------------  


 #### [Licence](/LICENSE) &ensp;  [Contact us](https://iondv.com/portal/contacts) &ensp;  [Russian](/docs/ru/1_system_deployment/step3_building_and_running.md)   &ensp;
<div><img src="https://mc.iondv.com/watch/local/docs/framework" style="position:absolute; left:-9999px;" height=1 width=1 alt="iondv metrics"></div>       



--------------------------------------------------------------------------  

Copyright (c) 2018 **LLC "ION DV"**.  
All rights reserved.  



