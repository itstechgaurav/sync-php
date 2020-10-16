const WebSocket = require('ws');
const watch = require('node-watch');

function server(options) {
    const wss = new WebSocket.Server({ port: options.port })
    wss.on('connection', ws => {
        watch(options.watch, { recursive: true }, (...args) => {
            onFileChange(...args, ws)
        });
    })
    return wss;
}

function onFileChange(event, filename, ws) {
    const ext = filename.split('.').pop();
    if(!ext) return;
    const validChanges = ['html', 'css', 'js', 'php'];
    if(validChanges.includes(ext)) ws.send('reload') 
}



module.exports = server;