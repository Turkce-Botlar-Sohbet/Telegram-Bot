'use strict';

const { Composer } = require('telegraf')

const badWordsBan = [
    /pasif(\s+)?(var(\s+)?mı|arıyorum|im)/i, // pasif
    /(?:^|[^\wığüşöçĞÜŞÖÇI])[gG]+(\s+)?[aA]+(\s+)?[vVwW]+(\s+)?[aA]+(\s+)?[tT]+/i, // gavat
    /(?:^|[^\wığüşöçĞÜŞÖÇI])[aA]+(\s+)?[mM]+(\s+)?([ıIiİl]+)?(\s+)?[kKqQgGğĞ]+/i, // amk
    /(?:^|[^\wİığüşöçĞÜŞÖÇI])[mM]+(\s+)?[qkK]+/i, // mk
    /(?:^|[^\wığüşöçĞÜŞÖÇI])[aA]+(\s+)?(\.)?(\s+)?[qQ]+\b/i, // aq
].map(regex => text => regex.exec(text));

module.exports = Composer.match(badWordsBan, async (ctx, next) => {
    if (ctx.chat.type.endsWith('group')) {
            if (!ctx.from._is_in_admin_list) {

                await ctx.deleteMessage()                       //Küfürlü mesajı siler.
                //await ctx.kickChatMember(ctx.from.id)         //Kişiyi yasaklar açmak için başındaki // işareti silin.

            }
    }
    return next();
});
