'use strict';

const Composer = require('telegraf/composer');

var arr= [];
module.exports = Composer.on('message', (ctx, next) => {
    if (ctx.chat.type.endsWith('group')) {
        if (!ctx.from._is_in_admin_list) {
            var from = ctx.update.message.text;
            for (i = 0; i <= 9; i++) {
                arr.push(from + i);
            }

            function dupes(arr) {
                var i, len = arr.length, unique = [], obj = {};

                for (i = 0; i < len; i++) {
                    obj[arr[i]] = 0;
                }
                for (i in obj) {
                    unique.push(i);
                }
                if (unique.length != arr.length) {
                    console.log('Dublicate message!')
                    ctx.deleteMessage()
                    arr.length = 0
                }
            }

            dupes(arr);
        }
    }
    return next();
})
