// const xyz = require('./people'); // value becomes whatever is in exports in people.js
const { people, ages } = require('./people'); // this pulls the value of the people property from exports and puts it in a const called people.

console.log(people, ages);

const os = require('os');
console.log(os.platform(), os.homedir());