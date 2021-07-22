class Search {
  // db - 데이터베이스 (가짜)
  // state - 상태
  // contentDOM - 컨텐츠 삽입 영역
  constructor(db) {
    this.db = db;
    this.inputDOM = document.querySelector('input');
    this.ulDOM = document.querySelector('#result');
  }

  // 불변성 유지하면서 상태 갱신, 상태가 갱신되면 render함수 호출
  onChangeCallback(e) {
    const { value } = e.target;

    if (value === '' || !value) {
      this.clearComponent();
      return;
    }

    const foundArray = [...this.db.list].filter((item) => {
      return item.includes(value);
    });

    this.state = foundArray;
    this.render();
  }

  // 이벤트 등록 함수
  onChnageAdd() {
    this.inputDOM.addEventListener('input', this.onChangeCallback.bind(this));
  }

  // 빈 문자열일 경우 상태를 빈 값으로 갱신한다.
  clearComponent() {
    this.state = [];
    this.render();
  }

  render() {
    // 가존에 파싱된 요소 삭제
    while (this.ulDOM.hasChildNodes()) {
      this.ulDOM.removeChild(this.ulDOM.firstChild);
    }

    // 현재 상태에 따라 새롭게 파싱
    this.state.forEach((item, index) => {
      const li = document.createElement('li');
      const strong = document.createElement('strong');
      strong.innerText = item;
      li.append(strong);
      this.ulDOM.append(li);
    });
  }
}

const TackTalkTestCaseOne = new Search({
  list: [
    '서버 개발자',
    '프론트엔드 개발자',
    'iOS 개발자',
    '안드로이드 개발자',
    'QA 테스트 엔지니어',
    '머신러닝 엔지니어',
    '데이터 엔지니어',
    '보안 엔지니어',
    'CTO',
    '임베디드 개발자',
    '시스템・네트워크 관리자',
    '시스템 설계',
    'DevOps',
    'DBA',
    '영상・음성 엔지니어',
    '그래픽스 엔지니어',
    'CIO',
  ],
});

// 메서드 실행
TackTalkTestCaseOne.onChnageAdd();
