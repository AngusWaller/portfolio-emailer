const Sentry = require('@sentry/node');
const logger = require('../winston')('Sentry');
const { sentry: dsn } = require('../../config');

const initialize = () => {
  logger.info('Initializing Sentry');
  Sentry.init(dsn);
  return Sentry;
};

module.exports = initialize();
