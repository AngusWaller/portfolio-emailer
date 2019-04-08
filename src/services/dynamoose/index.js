
const dynamoose = require('dynamoose');
const winston = require('../winston');
const { aws: { accessKeyId, secretAccessKey, region } } = require('../../config');

const logger = winston('Dynamoose');

const initialize = () => {
  logger.info('making new config');
  dynamoose.AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region,
  });
  return dynamoose;
};

module.exports = initialize();
