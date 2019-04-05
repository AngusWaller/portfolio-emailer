const uuid = require('uuid');
// const { Schema, model } = require('../../services/dynamoose');
const dynamoose = require('dynamoose');

const { aws: { accessKeyId, secretAccessKey, region } } = require('../../config');

dynamoose.AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

const emailSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      index: {
        global: true,
      },
      // Couldn't find a way to do clash-proof ID's with this ORM.
      default: uuid.v4,
    },
    sender: {
      required: true,
      type: String,
      trim: true,
    },
    to: {
      required: true,
      type: String,
      trim: true,
    }, // Target Email
    contents: {
      required: true,
      type: String,
    },
    client: {
      type: String,
    },
  },
  {
    // Options
    timestamps: {
      createdAt: 'created',
      updatedAt: 'last_updated',
    },
  },
);

module.exports = dynamoose.model('email', emailSchema);
