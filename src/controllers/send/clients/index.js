/**
 * The intention for this folder is to load emailer clients in a completely atomic way; this style
 * of compartmentalisation will assist in management of the asset.
 */


const sendgrid = require('./sendgrid');

// We will return an array of clients (as objects have no guarantee of order)
module.exports = [
  sendgrid,
];
