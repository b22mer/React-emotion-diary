### react router
https://reactrouter.com/en/main/start/overview 

### google web fonts
https://fonts.google.com/

### 계속해서 렌더링이 두번씩 되었던 이유
index.js의 React.StrictMode 때문 이었다. 이 부분을 제거해주면 컴포넌트가 두번 씩 호출되지 않는다. StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구

### encounter twokey 버그를 발견했을때는
react 툴로 겹치는 키가 있는지 확인하고 수정해나가야한다. 

### 12월 31일을 택했을때, new Date 인자에 0 0 0 설정이 아닌, 23, 59,59 설정

### Local Storage,Session Storage, Web Storage API
브라우저에 키/벨류 쌍으로 저장

session st: 세션 한정, 즉 브라우저 또는 탭이 닫힐때까지만 데이터를 저장, 데이터를 절대 서버로 전송 x, 저장 공간 쿠기보다 큼
local st: 브라우저를 닫아도 데이터가 남아있음, 유효기간 없이 데이터를 저장, js사용하거나 브라우저 캐시또는 로컬 저장 데이터를 지워야 사라짐, 저장 공간이 제일큼

객체 저장 방식 JSON.stringify({value: 30}), 반대로 꺼내올땐  JSON.parse(localStorage.getItem("item3"));
기본적으로 로컬스토리지에 저장되는 값은 문자열로 바껴서 들어감

### 최적화 하는 방법
정적으로 코드를 하나하나 확인하는 방법도 존재하지만, React dev tools에서 하이라이트 기능을 통해 페이지를 만져가며 렌더링측면에서 불 필요한 부분이 있는지 확인해가며 수정하는게 좋다.

### 배포 전 준비
title 변경, favicon 변경, meta description content 변경, 페이지 별 title 변경, build 작업 (npm run build / npm install -g serve / serve -s build)
만약에 빌드한 주소에서 수정할 사항이 생기면 원본파일을 수정한 후 다시 빌드를 하자.

### 배포 하기
firebase 접속 => 프로젝트 만들기 => 이름 설정 (여러개를 사용할수있으니 특정 이름을 굳이 사용안해도 된다) => 애널 체크해제 => 생성 완료

호스팅 => 시작하기 => cmd 관리자 권한으로 입장하고 => npm install -g firebase-tools 설치 => "앱의 루트 디렉터리에서 다음 명령어를 실행하세요." 이때는 cmd 창에서 현재 프로젝트의 위치로 이동을 시킨다(혹은 그냥 vscode상에서 바로 해도돼!) => firebase login 입력 => 로그인 => 허용 => firebase init (여기서 중요한건 루트 디렉토리==프로젝트 폴더에서 진행!) => 첫번째 Hosting을 선택 => use exiting project => build 입력 => 다 yes => 그리고 페이지에서 콘솔로 이동 클릭 => 고급란에 firebase 호스팅의 여러 사이트지원 란에서 다른사이트 추가 선택 => 도메인 이름 정해준후 추가 =>
이후 firebase.json의 hosting 란에서 "site": "정한 도메인명" 설정 => 다시 npm run build => firebase deploy 입력 => Hosting URL이 생성됨 => 배포가 완료
(https://b22mer-project.web.app)