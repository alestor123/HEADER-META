#!/usr/bin/env node
var joined = require('./App'),
chalk = require('chalk'),
figlet = require('figlet');
(async () => {
var date = await joined(process.argv[2] || 'github')
figlet(' Joined',(err,data) => {
console.log(chalk.yellowBright(data) + chalk.cyanBright.bold(`\n ${date.name} Joined Github On ${date.joined}`))
})
})();