const winston = require("winston");

const buildLoggerByName = loggerName => {
  return winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: loggerName + ".log" })
    ]
  });
};

module.exports = buildLoggerByName;
