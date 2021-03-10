const prompt = require('prompt-sync')();

const numbers = prompt('Input num : ');

const List = numbers.split(' ').map((a) => a * 1);
console.log(`Output : ${List[0] / List[1]} ${List[0] % List[1]}`);
