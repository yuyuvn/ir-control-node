const PORT = process.env.PORT || 1880;

const BroadlinkServer = require('broadlink-rm-server');
const commands = require('./commands');

// /learn/command/MAC_OR_IP
// let app = BroadlinkServer(commands, true);
let app = BroadlinkServer(commands);
app.listen(PORT);

console.log('Server running, go to http://localhost:' + PORT);
