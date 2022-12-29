function find(dirs, alias) {
    let matches = dirs.filter(entry => entry.alias === alias);
    if (matches.length === 0) return null;
    let result = matches[0];
    return {
        directory: result.directory,
        alias: result.alias,
        index: dirs.indexOf(result)
    }
}

function getNewDir(args) {
    if (args.dir) return args.dir;
    if (args.current) return process.cwd();
}

module.exports = {
    find: find,
    getNewDir: getNewDir
}
