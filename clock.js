  
'use strict';

const bot = require('./index');

const config = require('./config');

async function SendMessage(message) {
    await bot.telegram.sendMessage(config.chat_id, `${message}`, { parse_mode: 'HTML'});
}

var AutoPost = function() {
  SendMessage('Test123')
}

var CronJob = require('cron').CronJob;
new CronJob({
  cronTime: "*/10 * * * *",
  onTick: AutoPost,
  start: true,
  timeZone: "Europe/Moscow"
})
