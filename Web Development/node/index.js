const supervillains = require('supervillains');

const allsuperVillainName = supervillains.all;
//=> ['Abattoir', 'Able Crown', …]
console.log(allsuperVillainName);

const mySuperVillainName = supervillains.random();
//=> 'Mud Pack'
console.log(mySuperVillainName);