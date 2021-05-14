'use strict';


const Admins = (ctx, next) => {
	if (ctx.chat && ['private', 'group', 'supergroup'].includes(ctx.chat.type)) {

		if (ctx.chat.id > 0) return next();

		return ctx.telegram.getChatAdministrators(ctx.chat.id)
			.then((data) => {
				if (!data || !data.length) return;
				ctx.chat._admins = data;
				ctx.from._is_in_admin_list = data.some(adm => adm.user.id === ctx.from.id);
			})
			.catch(console.log)
			.then(_ => next(ctx));
     }

};

module.exports = Admins;
