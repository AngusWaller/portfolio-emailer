
const models = require('../../models');
const emailerClients = require('./clients');
const ServerlessHelper = require('../../helpers/serverlessHelper');


module.exports = async (event, context) => {
  const helper = new ServerlessHelper(event, context);
  try {
    const sender = event.requestContext.identity.sourceIp;
    const { to, contents } = helper.body;

    const dbEmail = new models.Emails({
      sender,
      to,
      contents,
    });

    await dbEmail.save();


    return helper.respond.success({ sent: true, body: helper.body });
  } catch (e) {
    return helper.respond.error(500, e);
  }
};
