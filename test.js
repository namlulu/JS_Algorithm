function solution(dartResult) {
  const rules = ['S', 'D', 'T'];
  const options = ['*', '#'];

  let sic = [];
  let maker = [];

  for (let i = 0; i < dartResult.length; i++) {
    let element = dartResult[i];

    if (rules.includes(element)) {
      const makerString = Number(maker.join(''));

      if (element === 'S') {
        sic.push(makerString);
      } else if (element === 'D') {
        sic.push(makerString * makerString);
      } else if (element === 'T') {
        sic.push(makerString * makerString * makerString);
      }

      maker = [];
    } else if (options.includes(element)) {
      if (element === '*') {
        if (sic.length >= 2) {
          sic.splice(sic.length - 2, 1, sic[sic.length - 2] * 2);
          sic.splice(sic.length - 1, 1, sic[sic.length - 1] * 2);
        } else {
          sic.splice(sic.length - 1, 1, sic[sic.length - 1] * 2);
        }
      } else if (element === '#') {
        sic.splice(sic.length - 1, 1, sic[sic.length - 1] * -1);
      }
    } else {
      maker.push(element);
    }
  }

  return sic;
}

console.log(solution('1S2D*3T'));
console.log(solution('1T2D3D#'));
console.log(solution('1D2S3T*'));
console.log(solution('1S*2T*3S'));
