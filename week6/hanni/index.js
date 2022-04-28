//localStorage: 나의 local 환경의 저장공간에 정보를 저장
//setItem: localStorage에 정보를 저장할 때 사용하는 메소드
localStorage.setItem("name", "dwell");
localStorage.setItem("age", 100); //문자열 형태로만 저장됨

//getItem: localStorage에 정보를 가져올 때 사용하는 메소드
const result = localStorage.getItem("age");
console.log(typeof result);


const travel = {
  destinations: ["paris", "sydney", "taipei"],
  days: 100,
  mate: undefined,
  isAvailable: true,
};

//JSON.stringify: 문자열로 변경
localStorage.setItem("travel", JSON.stringify(travel));

//JSON.parse: 객체로 인식
const data = JSON.parse(localStorage.getItem("travel"));
console.log(data.destinations);


localStorage.removeItem("name");
localStorage.clear(); //localStorage에 저장된 모든 데이터 삭제