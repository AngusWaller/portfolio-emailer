const { email: from } = require('../../config');
const logger = require('../../services/winston')('Send-Email');
const models = require('../../models');
const emailerClients = require('./clients');
const ServerlessHelper = require('../../helpers/serverlessHelper');
const Sentry = require('../../services/sentry');

module.exports = async (event, context) => {
  try {
    const helper = new ServerlessHelper(event, context);

    const sender = event.requestContext.identity.sourceIp;
    const {to, subject, contents} = helper.body;

    // For additional error analytics Sentry is used
    Sentry.configureScope((scope) => {
      scope.setUser({ip: sender});
    });

    const dbEmail = new models.Emails({
      sender,
      to,
      contents,
      subject,
    });

    throw new Error('ahhhh');

    await dbEmail.save();

    // We will use a for look as we will want to break on success

    for (let i = 0; i < emailerClients.length; i += 1) {
      try {
        const clientName = emailerClients[i].name;
        logger.info(`attempting emailer client ${clientName}`);

        /*
          Use of await in this loop is applicable as it blocks the execution of multiple async
          requests that would otherwise happen in parallel. Use of sync functions is not applicable
          in all client contexts and is therefore not ideal.
          */

        // eslint-disable-next-line
        await emailerClients[i]({
          to, from, subject, contents,
        });

        logger.info(`successfully sent with ${clientName}`);

        return helper.respond.success({sent: true, body: helper.body, client: clientName});
      } catch (e) {
        logger.error(`email client error ${emailerClients[i].name}, ${e}`);
      }
    }

    // No client was successful in sending? Return an error.
    return helper.respond.error(400, {error: 'No email client could process this request'});
  }
};
