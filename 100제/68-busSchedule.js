function solution(busTimer, standTimer) {
  let answer = [];
  standTimer = standTimer.split(':').map((n) => parseInt(n, 10));
  standTimer = standTimer[0] * 60 + standTimer[1];

  for (let i in busTimer) {
    let time = busTimer[i].split(':').map((n) => parseInt(n, 10));
    time = time[0] * 60 + time[1];

    if (time < standTimer) {
      answer.push('passed away');
    } else {
      let hours = parseInt((time - standTimer) / 60, 10);
      let minutes = (time - standTimer) % 60;
      answer.push(
        String(hours).padStart(2, 0) +
          'H ' +
          String(minutes).padStart(2, 0) +
          'M'
      );
    }
  }
  return answer;
}

console.log(solution(['12:30', '13:20', '14:13'], '12:40'));
