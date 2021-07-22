// source1과 source2를 조합해서 nick과 중복되지 않는 랜덤 닉네임 출력
// 이미 사용했던 닉네임은 nick에 저장하고 모두 소진했을 경우 '종료'를 출력

// 초기 상태
const source1 = ['감자', '양파', '대파', '피망', '대추'];
const source2 = ['고래', '기린', '비버', '참새', '비둘기'];
const nick = ['감자비버', '양파비둘기', '피망고래', '대추기린'];

// 배열에서 랜덤 인덱스 추출
function makeRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function makeRandomName(srcOne, srcTwo) {
  // 모두 소진되기 전까지 반복
  while (srcOne.length > 0 && srcTwo.length > 0) {
    const randomOneIndex = makeRandomIndex(srcOne);
    const randomTwoIndex = makeRandomIndex(srcTwo);
    let maker = '';

    maker += srcOne.splice(randomOneIndex, 1);
    maker += srcTwo.splice(randomTwoIndex, 1);

    // 랜덤으로 추출해서 만든 문자가 nick에 포함되어 있을 경우, nick에 저장하고 반대 경우에 출력
    if (nick.includes(maker)) {
      nick.push(maker);
      continue;
    } else {
      console.log(maker);
    }
  }
  console.log('종료');
  console.log(`nick DB에 저장되어 있는 항목: ${nick.sort()}`);
}

makeRandomName(source1, source2);
