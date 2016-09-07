/**
 * Manage title text
 */

const messaging = require('../background/messaging');

const TITLE_PREFIX = chrome.runtime.getManifest().name;

exports.set = function (status) {
  document.title = TITLE_PREFIX + (status ? ' :: ' + status : '');
};

exports.setListeners = function () {
  messaging.on(messaging.names.LOAD_TESTS_CONFIG_DONE, data => exports.set(`config loaded`));
  messaging.on(messaging.names.RUN_TESTS_DONE, () => exports.set('done'));
};
