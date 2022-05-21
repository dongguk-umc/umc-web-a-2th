// fetch, axios

// 1. fetch : fetch(url, options)

const result = [];

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => data.map(item => result.push(item)))
// .catch(error => console.log(error));
//
// console.log(result);


// async await 으로 데이터 get 요청
// const dataFetch = async () => {
//     // await을 통해 promise가 아닌 형태의 response를 받아옴
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // json으로 변환
//     const data = await response.json();
//     // return
//     return data;
// }
//
// const dataResult = dataFetch();
//
// console.log(dataResult);

// 2. axios

// axios.get("https://jsonplaceholder.typicode.com/users")
// .then(response => console.log(response.data));

const dataFetch = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;
    return response;
}

const dataResult = dataFetch();

console.log(dataResult);