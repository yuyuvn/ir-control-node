const PORT = process.env.PORT || 1880;

const BroadlinkServer = require('broadlink-rm-server');
const commands = require('./commands');

if (process.argv[process.argv.length - 1] == "learn") {
  // /learn/command/MAC_OR_IP
  const learnApp = BroadlinkServer(commands, true);
  learnApp.listen(PORT);
} else {
  const app = BroadlinkServer(commands);
  app.listen(PORT);
}

console.log('Server running, go to http://localhost:' + PORT);
