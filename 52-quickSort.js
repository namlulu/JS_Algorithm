function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(/*빈칸을 채워주세요*/){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return /*빈칸을 채워주세요*/
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));