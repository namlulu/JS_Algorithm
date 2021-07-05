const input = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`;

let newInput = input.split('\n');
let numbers = [];

for (let i of newInput) {
  let j = i.split(',');
  let k = j.slice(1, j.length - 2);
  numbers.push(k.join(''));
}

let moneyOne = '';
let moneyTwo = '';
let result = [];

for (let number of numbers) {
  for (let num of number) {
    if (number != "'") {
      if (num == 3) {
        moneyOne += '1';
        moneyTwo += '2';
      } else if (num == 4) {
        moneyOne += '2';
        moneyTwo += '2';
      } else if (num == 6) {
        moneyOne += '1';
        moneyTwo += '5';
      } else {
        moneyOne += num;
        moneyTwo += '0';
      }
    }
  }
  result.push([moneyOne, moneyTwo]);
  moneyOne = '';
  moneyTwo = '';
}

console.log(result);
