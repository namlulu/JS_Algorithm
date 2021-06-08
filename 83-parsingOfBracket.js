const prompt = require('prompt-sync')();

while (1) {
  let order = Number(prompt('Input Data(1), Exit Prgram(2)'));
  if (order === 1) {
    const ex = prompt('choose Number');
    console.log(math(ex));
  } else {
    break;
  }
}

function math(e) {
  const input = e.replace(/ /g, '');
  const stack = [];
  const obj = {
    ')': '(',
    '}': '{',
  };

  console.log(input);

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{') {
      stack.push(input[i]);
    } else if (obj[input[i]]) {
      if (stack.length === 0) {
        return false;
      } else {
        let value = obj[input[i]];
        if (value != stack.pop()) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}
