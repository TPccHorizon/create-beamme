const conf = new (require('conf'))();
const chalk = require('chalk');
const childProcess = require('child_process');
const process = require('process');
const { find } = require('../utils/utils');

function to(alias) {
    const dirs = conf.get('dirs');
    const directory = find(dirs, alias);

    if (directory) {
        beamToDir(directory.directory);
    } else {
        console.log(
            chalk.red.bold(`The alias '${alias}' is not associated to any directory.`)
        )
    }

}

function beamToDir(directory) {
    try {
        childProcess.spawn(
            // With this variable we know we use the same shell as the one that started this process
            process.env.SHELL,
            {
                cwd: directory,
                // make this process take over the terminal
                stdio: 'inherit'
            }
        )
        console.log(
            chalk.green.bold("Changed directory to:")
        )
        console.log(
            chalk.blue.bold(process.cwd())
        )
    } catch (e) {
        console.log(
            chalk.red.bold("Failed to change directory.")
        )
        console.log(e);
    }
}

module.exports = to