// setItem : local Storage에 정보를 저장할 때 사용하는 메소드

localStorage.setItem('name', 'awarduuu'); // key, value
localStorage.setItem('age', 25);
// 로컬스토리지에 저장되는 value들은 모두 문자열로 저장된다.

// getItem : local Storage에서 정보를 가져올 때 사용하는 메소드

const result = localStorage.getItem('age');
console.log(typeof result);

const travel = {
    destination : ['paris', 'newyork'],
    days: 30,
    hotel: undefined,
    isAvailable: true,
};

// localStorage.setItem('travel', travel);

// **특수경우 value가 object인 경우 로컬 스토리지에 문자열로 저장되지 않는다!!**

// 그래서 문자열로 바꾸어주는 함수인 JSON.stringify와 JSON.parse를 사용한다.

//JSON.stringify
// object를 문자열형태로 바꾸어 저장
localStorage.setItem('travel', JSON.stringify(travel));

//JSON.parse
// 꺼낼때는 다시 object로 바꾸기
const data = JSON.parse(localStorage.getItem('travel'));

console.log(data);

// removeItem, clear

localStorage.removeItem('name'); // 로컬 스토리지에서 해당 키를 가진 정보 삭제

localStorage.clear(); // 로컬 스토리지 모든 정보 삭제