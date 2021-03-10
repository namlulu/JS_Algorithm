const prompt = require('prompt-sync')();
const sentence = prompt('Input sentence : ');

change(sentence);

function change(text) {
  const newArray = text.split('');
  for (let i in newArray) {
    if (newArray[i] === 'q') {
      newArray[i] = 'e';
    }
  }
  console.log(newArray.join(''));
}

// function replaceAll(str, searchStr, replaceStr) {
//     return str.split(searchStr).join(replaceStr);
//  }

// console.log(word.replace(/q/gi, 'e'));
