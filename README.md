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