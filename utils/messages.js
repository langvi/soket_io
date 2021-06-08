const moment = require('moment');

function formatMessage(username, text, isAdmin) {
  return {
    username,
    text,
    isAdmin,
    timeDate: new Date().toISOString,
    time:moment().format('h:mm a')
  };
}

module.exports = formatMessage;
