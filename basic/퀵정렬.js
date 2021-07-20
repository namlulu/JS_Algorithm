let a = [5, 10, 66, 77, 54, 32, 11, 15];

function quick(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = [arr.shift()];
  let groupOne = [];
  let groupTwo = [];

  for (let i in arr) {
    if (arr[i] < pivot) {
      groupOne.push(arr[i]);
    } else {
      groupTwo.push(arr[i]);
    }
  }

  console.log(groupOne);
  console.log(groupTwo);
  console.log(pivot + '\n');

  return quick(groupOne).concat(pivot, quick(groupTwo));
}

console.log(quick(a));
