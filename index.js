const server = require('./server');

class Loadup {
    constructor(options = {
        port: 1337,
        watch: ''
    }) {

        let con = server(options)

        process.on('exit', exitMyProcesses.bind(null, con))
        process.on('SIGINT', exitMyProcesses.bind(null, con))
        process.on('SIGUSR1', exitMyProcesses.bind(null, con))
        process.on('SIGUSR2', exitMyProcesses.bind(null, con))
        process.on('uncaughtException', exitMyProcesses.bind(null, con));
    }

    apply(compiler) {
        
    }
}

function exitMyProcesses(con) {
    console.log('exiting');
    con.close();
    process.exit();
}

module.exports = Loadup;