const uuid = require('uuid');
const dynamoose = require('../../services/dynamoose');

const outageSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      index: {
        global: true,
      },
      // Couldn't find a way to do clash-proof ID's with this ORM.
      default: uuid.v4,
    },
    mailClient: {
      required: true,
      type: String,
      trim: true,
    },
    error: {
      required: true,
      type: String,
      trim: true,
    },
  },
  {
    // Options
    timestamps: {
      createdAt: 'created',
    },
  },
);

module.exports = dynamoose.model('outage', outageSchema);
