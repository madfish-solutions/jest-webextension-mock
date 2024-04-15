const { omnibox } = require('./omnibox');
const { tabs } = require('./tabs');
const { runtime } = require('./runtime');
const { storage } = require('./storage');
const { browserAction } = require('./browserAction');
const { commands } = require('./commands');
const { notifications } = require('./notifications');
const { i18n } = require('./i18n');
const { webNavigation } = require('./webNavigation');
const { extension } = require('./extension');
const { downloads } = require('./downloads');

// Firefox specific API
const { geckoProfiler } = require('./geckoProfiler');

const chrome = {
  omnibox,
  tabs,
  runtime,
  storage,
  browserAction,
  commands,
  geckoProfiler,
  notifications,
  i18n,
  webNavigation,
  extension,
  downloads,
};

module.exports = { chrome };
