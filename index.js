require("dotenv").config();

const BOT_API       = process.env.BOT_API || '';
const PORT          = process.env.PORT || 3000;
const URL           = process.env.URL || 'https://your-heroku-app.herokuapp.com';

const Telegraf  = require("telegraf");
const bot       = new Telegraf(BOT_API);


bot.start((ctx) => {
    return ctx.reply("Hey");
});

bot.hears(/selam/ig, async (ctx, next) => {
        ctx.telegram.sendPhoto(ctx.chat.id, 'https://www.ajanskirim.com/wp-content/uploads/2019/03/1525995635Merhaba.jpg', { caption:  `<b>${ctx.from.first_name}</b>`,  parse_mode: 'HTML' })
    return next();
});

bot.command('komut', async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, `<b>${ctx.from.first_name}</b>`, { parse_mode: 'HTML' })
    return next();
});


bot.use(
    require('./handlers/middlewares'),
    require('./plugin')
);


bot.telegram.getMe().then(me => {
    console.log(`Bot Başlatıldı! => ${me.username}`);
});


bot.catch((err) => {
    console.log('Error: ', err)
})

bot.launch({
  webhook: {
    domain: `${URL}`,
    port: `${PORT}`
  }
})
