'use strict';

const { Composer } = require('telegraf');

const composer = new Composer();
const Admins = require('./admin');
composer.use(Admins);

module.exports = composer;
