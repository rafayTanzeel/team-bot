const winston = require('winston');

const logPath = 'src/private/server/logs/';
// winston Configuratiton
winston.add(winston.transports.File, {
  filename: logPath + 'error.log',
  level: 'error'
});

module.exports = winston;
