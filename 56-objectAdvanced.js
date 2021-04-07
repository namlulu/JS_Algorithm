nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

function check(nationWidth) {
  const keys = Object.keys(nationWidth).slice(1);
  const koreaValue = nationWidth['korea'];
  let answer = '';
  let store = Infinity;

  for (let i in keys) {
    const nation = keys[i];
    let diff = Math.abs(koreaValue - nationWidth[keys[i]]);
    if (store > diff) {
      store = diff;
      answer = nation;
    }
  }

  console.log(answer, store);
}

check(nationWidth);
