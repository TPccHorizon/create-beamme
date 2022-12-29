const conf = new (require('conf'))()
const chalk = require('chalk')

function list(args) {
    const dirs = conf.get('dirs')
    let doClear = args.clear;
    if (doClear) {
        conf.set('dirs', []);
        console.log(
            chalk.red.bold('Deleted all aliases.')
        )
    } else if (dirs && dirs.length) {
        // user has dirs saved
        printDirectories(dirs);
    } else {
        // nothing saved yet
        console.log(
            chalk.red.bold('You don\'t have registered any shortcuts yet.')
        )
    }
}

function printDirectories(dirs) {
    console.log(
        chalk.green.bold('Registered shortcuts to directories:')
    )
    dirs.forEach((entry) => {
        console.log(
            chalk.blue.bold(`${entry.alias} => ${entry.directory}`)
        )
    })
}

module.exports = list