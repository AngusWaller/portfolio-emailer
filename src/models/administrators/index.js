// const uuid = require('uuid');
// const dynamoose = require('../../services/dynamoose');
//
// const adminSchema = dynamoose.schema(
//   {
//     // Schema
//     id: {
//       type: String,
//       hashKey: true,
//       index: true,
//       default: uuid.v4(),
//     },
//     ip: String,
//   },
//   {
//     // Options
//     timestamps: {
//       createdAt: 'created',
//       updatedAt: 'last_updated',
//     },
//   });
//
//
// module.exports = dynamoose.schema('administrator', adminSchema);
