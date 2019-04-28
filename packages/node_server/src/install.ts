

import * as child from 'child_process';

child.execSync('npm install');
child.execSync('node ./dist/node_server.js');
console.log("YOU DID IT MAX!");
