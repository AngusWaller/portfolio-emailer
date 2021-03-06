const uuid = require('uuid');
// Opted for a constructor style class as that will allow us to have nested methods for respond.

function helperFunction(event, context) {
  this.start = new Date();
  this.request_id = uuid.v4();

  this.event = event;
  this.context = context;

  this.body = this.event.body ? JSON.parse(this.event.body) : null;
  this.query = this.event.query ? JSON.parse(this.event.query) : null;

  this.respond = {
    success: response => ({
      statusCode: 200,
      headers: { 'Content-Type': 'text/json' },
      body: response ? JSON.stringify(response) : '{}',
    }),
    error: (status = 500, response) => (
      {
        statusCode: status,
        headers: { 'Content-Type': 'text/json' },
        body: response ? JSON.stringify(response) : '{}',
      }),

  };
}


module.exports = helperFunction;
