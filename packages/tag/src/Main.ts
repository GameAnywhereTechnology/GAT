const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
import { Lib } from 'lance-gg';

const PORT = process.env.POR || 3000;
const INDEX = path.join(__dirname, '../dist/index.html');

// defines routes and socket
const server = express();
server.get('/', function (req, res) { res.sendFile(INDEX); });
server.use('/', express.static(path.join(__dirname, '../dist/')));
let requestHandler = server.listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = socketIO(requestHandler);

// Game Server
import MyServerEngine from './server/GATServerEngine';
import MyGameEngine from './common/GATGameEngine';

// Game Instances
const gameEngine = new MyGameEngine({ traceLevel: Lib.Trace.TRACE_NONE});
const serverEngine = new MyServerEngine(io, gameEngine, {
    debug: {},
    updateRate: 6,
    timeoutInterval: 0 // no timeout
});

// start the game
serverEngine.start();