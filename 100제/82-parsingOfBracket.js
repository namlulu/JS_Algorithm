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
  const step = 0;

  console.log(input);

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      step += 1;
    } else if (input[i] === ')') {
      step -= 1;
    }
  }

  if (step !== 0) {
    return false;
  }

  if (step === 0) {
    return true;
  }
}
