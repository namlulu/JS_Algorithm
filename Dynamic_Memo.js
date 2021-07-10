const N = 6;
const memory = Array(N + 1).fill(0);

function fibo(n) {
  if (n === 1 || n === 2) {
    memory[n] = 1;
    return 1;
  } else if (memory[n] !== 0) {
    return memory[n];
  } else {
    memory[n] = fibo(n - 2) + fibo(n - 1);
    return memory[n];
  }
}

console.log(fibo(N));
