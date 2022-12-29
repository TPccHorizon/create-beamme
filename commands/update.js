const { find, getNewDir } = require('../utils/utils');
const conf = new (require('conf'))();
const chalk = require('chalk');

function update(alias, args) {
    let dirs = conf.get('dirs');
    let newDir = getNewDir(args);

    if (dirs && dirs.length) {
        let directory = find(dirs, alias);
        if (directory) {
            directory.directory = newDir;
            dirs[directory.index] = directory;
            conf.set('dirs', dirs);
            console.log(
                chalk.green.bold(`Successfully updated alias '${alias}' to new directory ${newDir}`)
            )
        } else {
            console.log(
                chalk.red.bold(`The alias '${alias}' does not exist yet. Consider adding it with 'beam add ${alias} ${newDir}.`)
            )
        }

    }
}

module.exports = update;