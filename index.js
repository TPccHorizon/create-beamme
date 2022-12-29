#!/usr/bin/env node

const { program } = require('commander');
const list = require('./commands/list');
const add = require('./commands/add');
const to = require('./commands/to');
const update = require('./commands/update');
const remove = require('./commands/remove');

program
    .command('list')
    .alias('ls')
    .option('--clear', 'Deletes all aliases to any directories.')
    .description('List all directories')
    .action(list)

program
    .command('add <alias>')
    .description('Add a new directory shortcut.')
    .option('-d, --dir <dir>', 'Registers a directory with the specified alias.')
    .option('-c, --current', 'Registers the current directory with the specified alias.')
    .action(add)

program
    .command('to <alias>')
    .description('Beams you to the directory of the specified alias.')
    .action(to)

program
    .command('update <alias>')
    .alias('u')
    .description('Update the alias with a new directory.')
    .option('<dir>', 'Associates a directory to this alias.')
    .option('-c, --current', 'Associates the current dir to this alias.')
    .action(update)

program
    .command('remove <alias>')
    .alias('r')
    .description('Removes the alias and the associated directory from the registry.')
    .action(remove)

program.parse(process.argv)