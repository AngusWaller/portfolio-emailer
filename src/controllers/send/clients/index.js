/**
 * The intention for this folder is to load emailer clients in a completely atomic way; this style
 * of compartmentalisation will assist in management of the asset.
 *
 * We will return an array of functions as that guarantees execution order
 */


const sendgrid = require('./sendgrid');

module.exports = [
  sendgrid,
];
