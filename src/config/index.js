module.exports = {
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  },
  email: {
    from: process.env.FROM,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
};
