module.exports = function loadon(port) {
    const __ws = new WebSocket(`ws://localhost:${port}/`);
    __ws.onmessage = function({data}) {
        if(data === 'reload') window.location.reload();
    };
}