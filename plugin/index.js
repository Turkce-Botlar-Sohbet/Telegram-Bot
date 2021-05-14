'use strict';

const { Telegraf: { compose } } = require('telegraf');

const config = require('../config');
const names = config.plugin || [];

const plugin = names.map(name => `./${name}`).map(require);

module.exports = compose(plugin);
