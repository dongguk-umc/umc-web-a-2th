//GET: 기존 데이터에 접근
//Post: 기존 데이터에 새로운 데이터 추가
//Put: 기존 데이터 수정
//Delete: 데이터 삭제

// fetch,  axios

// 1. fetch : fetch(url, options)

const result = [];

// fetch("https://jsonplaceholder.typicode.com/users") //promise형태로 반환
// .then(response => response.json())
// .then(data => data.map(item => result.push(item.name)))
// .catch(error => console.log(error))

// console.log(result);

// const dataFetch = async() => {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	const data = await response.json();

// 	return data
// }

// const dataResult = dataFetch();


// 2. axios

axios.get("https://jsonplaceholder.typicode.com/users")
.then(response => console.log(response.data))



const dataFetch = async() => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;

	return response;
}

const dataResult = dataFetch();

console.log(dataResult);