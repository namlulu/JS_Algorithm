function sol(n, l) {
  //n:택배원 수, l:택배들
  let answer = 0;
  //택배원 수 만큼의 배열 생성
  let man = new Array(n).fill(0);

  //모든 택배가 상차 되었을 경우 종료
  while (l.length !== 0) {
    //택배원 수 만큼 반복
    for (let j = 0; j < man.length; j++) {
      //택배원이 배달하고있는 택배의 잔여거리가 0인경우(배송완료인경우) 택배상차
      if (man[j] == 0 && l) {
        man[j] += l.shift();
        //shift()는 배열의 첫번째 요소 삭제
      }
    }

    //택배원들 배송거리 -1 처리
    man = man.map((x) => (x = x - 1));

    //1회 반복당 1의 시간증가
    answer += 1;
  }

  //남은 택배 잔여거리 중 가장 많은 시간이 남은 택배를 더해줌
  answer += Math.max.apply(null, man);

  return answer;
}

const 배달원 = 3;
const 택배 = [1, 2, 1, 3, 3, 3];

console.log(sol(배달원, 택배));
