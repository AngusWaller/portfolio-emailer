const uuid = require('uuid');
const dynamoose = require('../../services/dynamoose');

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
    subject: {
      required: true,
      type: String,
      trim: true,
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
