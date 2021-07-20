let a = [5, 10, 66, 77, 54, 32, 11, 15];

function merge(arr) {
  let len = arr.length;
  let result = [];

  if (len <= 1) {
    return arr;
  }

  let mid = parseInt(len / 2);
  let groupOne = merge(arr.slice(0, mid));
  let groupTwo = merge(arr.slice(mid));

  while (groupOne.length !== 0 && groupTwo.length !== 0) {
    if (groupOne[0] < groupTwo[0]) {
      result.push(groupOne.shift());
    } else {
      result.push(groupTwo.shift());
    }
  }

  while (groupOne.length !== 0) {
    result.push(groupOne.shift());
  }

  while (groupTwo.length !== 0) {
    result.push(groupTwo.shift());
  }

  return result;
}

console.log(merge(a));
