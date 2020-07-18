const PORT = process.env.PORT || 1880;
const LEARN_PORT = 1882;

const BroadlinkServer = require('broadlink-rm-server');
const commands = require('./commands');

// /learn/command/MAC_OR_IP
const learnApp = BroadlinkServer(commands, true);
const app = BroadlinkServer(commands);
app.listen(PORT);
// learnApp.listen(LEARN_PORT);

console.log('Server running, go to http://localhost:' + PORT);
