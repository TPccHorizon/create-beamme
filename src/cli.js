import arg from "arg";


export function cli(args) {
    let options = parseArgsIntoOptions(args);
    console.log(options);
}
