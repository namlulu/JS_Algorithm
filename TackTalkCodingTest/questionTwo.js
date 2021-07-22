class Content {
  // Init - 초기에 추가할 숫자
  // iterator - 반복하면서 광고 추가할 간격
  // state - 컴포넌트 상태
  // contentDOM - 컨텐츠 삽입 영역
  constructor(init, iterator, state) {
    this.init = init;
    this.iterator = iterator;
    this.state = state;
    this.contentDOM = document.querySelector('#contents');
  }

  // 불변성 유지하면서 상태 업데이트
  upDateState() {
    const changedList = [...this.state.list];

    for (let i = this.init; i < changedList.length; i += this.iterator + 1) {
      changedList.splice(i, 0, this.state.blurb);
    }

    this.state.list = changedList;
  }

  // 상태에 따른 HTML 파싱
  render() {
    this.state.list.forEach((item, index) => {
      const div = document.createElement('div');
      div.innerText = item;
      this.contentDOM.append(div);
    });
  }
}

// 인스턴스 생성
const TackTalkTestCaseOne = new Content(3, 5, {
  list: [
    '1번 컨텐츠',
    '2번 컨텐츠',
    '3번 컨텐츠',
    '4번 컨텐츠',
    '5번 컨텐츠',
    '6번 컨텐츠',
    '7번 컨텐츠',
    '8번 컨텐츠',
    '9번 컨텐츠',
    '10번 컨텐츠',
    '11번 컨텐츠',
    '12번 컨텐츠',
    '13번 컨텐츠',
    '14번 컨텐츠',
    '15번 컨텐츠',
    '16번 컨텐츠',
  ],
  blurb: '광고',
});

// 메서드 실행
TackTalkTestCaseOne.upDateState();
TackTalkTestCaseOne.render();
