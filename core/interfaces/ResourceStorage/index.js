/**
 * Created by kras on 26.07.16.
 */
'use strict';

function ResourceStorage() {
  /**
   * @param {Buffer | String | {} | stream.Readable} data
   * @param {String} directory
   * @param {{}} [options]
   * @returns {Promise}
   */
  this.accept = function (data, directory, options) {
    return this._accept(data, directory, options);
  };

  /**
   * @param {String} id
   * @returns {Promise}
   */
  this.remove = function (id) {
    return this._remove(id);
  };

  /**
   * @param {String[]} ids
   * @returns {Promise}
   */
  this.fetch = function (ids) {
    return this._fetch(ids);
  };

  /**
   * @returns {Function}
   */
  this.fileMiddle = function () {
    if (typeof this._fileMiddle === 'function') {
      return this._fileMiddle();
    }
    return function (req, res, next) { next(); };
  };

  /**
   * @returns {Function}
   */
  this.shareMiddle = function () {
    if (typeof this._shareMiddle === 'function') {
      return this._shareMiddle();
    }
    return function (req, res, next) { next(); };
  };

  /**
   * @returns {Promise}
   */
  this.init = function () {
    if (typeof this._init === 'function') {
      return this._init();
    }
    return new Promise(function (resolve) {resolve();});
  };

  /**
   *
   * @param {String} id
   * @returns {Promise}
   */
  this.getDir = function (id) {
    return this._getDir(id);
  };

  /**
   *
   * @param {String} name
   * @param {String} parentDirId
   * @param {Boolean} fetch
   * @returns {Promise}
   */
  this.createDir = function (name, parentDirId, fetch) {
    return this._createDir(name, parentDirId, fetch);
  };

  /**
   *
   * @param {String} id
   * @returns {Promise}
   */
  this.removeDir = function (id) {
    return this._removeDir(id);
  };

  /**
   *
   * @param {String} dirId
   * @param {String} fileId
   * @returns {Promise}
   */
  this.putFile = function (dirId, fileId) {
    return this._putFile(dirId, fileId);
  };

  /**
   *
   * @param {String} dirId
   * @param {String} fileId
   * @returns {Promise}
   */
  this.ejectFile = function (dirId, fileId) {
    return this._ejectFile(dirId, fileId);
  };

  /**
   *
   * @param {String} id
   * @param {String} [access]
   * @returns {Promise}
   */
  this.share = function (id, access) {
    return this._share(id, access);
  };

  /**
   *
   * @param {String} id
   * @param {String} [access]
   * @returns {Promise}
   */
  this.currentShare = function (id, access) {
    return this._currentShare(id, access);
  };

  /**
   *
   * @param {String} share
   * @returns {Promise}
   */
  this.deleteShare = function (share) {
    return this._deleteShare(share);
  };

  /**
   *
   * @param {String} id
   * @param {String} access
   * @returns {Promise}
   */
  this.setShareAccess  = function (id, access) {
    return this._setShareAccess(id, access);
  };

  this.fileRoute = function () {
    if (typeof this._fileRoute === 'function') {
      return this._fileRoute();
    }
    return false;
  };

  this.shareRoute = function () {
    if (typeof this._shareRoute === 'function') {
      return this._shareRoute();
    }
    return false;
  };
}

module.exports.ResourceStorage = ResourceStorage;
module.exports.StoredFile = require('./lib/StoredFile');
