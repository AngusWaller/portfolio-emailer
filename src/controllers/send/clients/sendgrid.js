const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = ({
  to, from, subject, contents,
}) => {
  const msg = {
    to,
    from,
    subject,
    html: contents,
  };
  sgMail.send(msg);
};
