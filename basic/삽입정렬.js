let a = [5, 10, 66, 77, 54, 32, 11, 15];
let answer = [];

while (a.length > 0) {
  const value = a.shift();
  const index = findIndex(answer, value);
  answer.splice(index, 0, value);
}

console.log(answer);

function findIndex(arr, val) {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] > val && arr[i - 1] < val) {
      return i;
    }
  }
  return arr.length;
}
