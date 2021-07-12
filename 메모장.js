const ex = [
  {
    title: '1',
    age: 16,
  },
  {
    title: '2',
    age: 16,
  },
  {
    title: '3',
    age: 16,
  },
  {
    title: '4',
    age: 16,
  },
];

function f(arr) {
  const newArr = [...arr];
  newArr[0]['title'] = '123214124124';
  console.log(ex);
}

f(ex);
