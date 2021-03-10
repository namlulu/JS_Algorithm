let sum = 0;

for (let i = 10; i < 21; i++) {
  const newSTring = i.toString();
  const sNumber = newSTring.split('');
  sNumber.forEach((element) => {
    sum += Number(element);
  });
}

console.log(sum);
