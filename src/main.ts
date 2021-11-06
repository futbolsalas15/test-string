import { areTherePairingCurlyBrackets } from './functions';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('input your text: ', text => {
  console.log(areTherePairingCurlyBrackets(text));
  rl.close();
});

rl.on('close', function () {
  process.exit(0);
});
