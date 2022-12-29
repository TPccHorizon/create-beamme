const conf = new (require('conf'))();
const { find } = require('../utils/utils');
const chalk = require('chalk');

function remove(alias) {
    let dirs = conf.get('dirs')

    let directory = find(dirs, alias);
    if (directory) {
        dirs.splice(directory.index, 1)
        conf.set('dirs', dirs);
        console.log(
            chalk.green.bold(`Removed '${alias}'.`)
        )
    } else {
        console.log(
            chalk.red.bold("No such alias in the registry: " + alias)
        )
    }
}

module.exports = remove;