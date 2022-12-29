const conf = new (require('conf'))();
const chalk = require('chalk');
const { getNewDir } = require('../utils/utils');

function add(alias, args) {
    let dirs = conf.get('dirs');

    if (!dirs) {
        dirs = [];
    }
    if (doesExist(alias, dirs)) {
        console.log(
            chalk.red.bold(`'${alias}' is already registered.`)
        )
    } else {
        let newDir = getNewDir(args);
        dirs.push({
            alias: alias,
            directory: newDir
        })

        conf.set('dirs', dirs);
        console.log(
            chalk.green.bold(`The directory ${newDir} has been saved as '${alias}'.`)
        )
    }
}

function doesExist(alias, dirs) {
    return dirs.map(dir => dir.alias)
        .filter(aliasEntry => aliasEntry === alias)
        .length > 0;

}

module.exports = add