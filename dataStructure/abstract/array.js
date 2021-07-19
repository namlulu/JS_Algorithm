const ex = [];

ex.splice(0, 0, 'a');
ex.splice(1, 0, 'b');

delete ex[0];

console.log(ex);
