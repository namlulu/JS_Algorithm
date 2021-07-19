const queue = require('queue');

const q = queue({
  results: [],
});

q.push('a');
q.push('b');
q.push('c');
q.push('d');
q.push('e');

console.log(q);

q.shift();

console.log(q);
