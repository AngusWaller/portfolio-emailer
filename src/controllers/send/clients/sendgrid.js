const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendgrid = async ({
  to, from, subject, contents,
}) => {
  const msg = {
    to,
    from,
    subject,
    html: contents,
  };
  // return sgMail.send(msg);
};


module.exports = sendgrid;
