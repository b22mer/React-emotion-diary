### react router
https://reactrouter.com/en/main/start/overview 

### google web fonts
https://fonts.google.com/

### 계속해서 렌더링이 두번씩 되었던 이유
index.js의 React.StrictMode 때문 이었다. 이 부분을 제거해주면 컴포넌트가 두번 씩 호출되지 않는다. StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구