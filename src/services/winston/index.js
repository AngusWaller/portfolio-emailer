const { loggers, format, transports } = require('winston');

// This snip-it is from the winston npm, its ugly but short hand.
const myFormat = format.printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);


const logger = context => loggers.add(context, {
  format: format.combine(
    format.label({ label: context }),
    format.timestamp(),
    myFormat,
  ),
  transports: [new transports.Console()],
});


module.exports = logger;
