const prompt = require('prompt-sync')();

const howTall = prompt('Input num : ');

if (howTall > 15) {
  console.log('YES');
} else {
  console.log(`NO`);
}
