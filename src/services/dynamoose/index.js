const dynamoose = require('dynamoose');
const { aws: { accessKeyId, secretAccessKey, region } } = require('../../config');

dynamoose.AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

module.exports = dynamoose;
