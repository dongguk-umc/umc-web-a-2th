const $body = document.getElementsByTagName("body"); //유사 배열 형태로 리턴
const $container = document.getElementsByClassName("container");
const $title = document.getElementById("title"); 
const $cityList = document.getElementById("cityList");
const $cities = $cityList.getElementsByTagName("li");
const $cityDiv = document.querySelector(".city"); //해당 조건을 만족하는 첫 번째 값



console.log($body[0].innerHTML);
console.log($container[0].innerText);
console.log($title);
//inner Text : 태그를 제외하고 body안에 있는 모든 텍스트를 나열
//inner Text : 태그를 포함해서 body안에 있는 모든 텍스트를 나열


console.log($cityList);
console.log($cities);

//배열 변환

//1. spread operator
//const newCities = {...$cities};
//console.log(newCities);
//newCities.map((city) => console.log(city.innerText));

//2.Array.from
const newCities = Array.from($cities);
newCities.map((city) => console.log(city.innerText));

//스타일  변경
$body[0].style.backgroundColor = "teal";
$cityDiv.style.color = "grey";

//3. element 추가
const worstCity = document.createElement("ul");
const worstCityDiv = document.createElement("div");
const worstCitySubTitle = document.createElement("h2");
const worstCityArr = ["Cairo", "London", "Risbon", "Sydney"];



worstCitySubTitle.innerText = "< Worst 5 >";
worstCityDiv.appendChild(worstCitySubTitle);

worstCityArr.map((city) => {
  const worstCityItem = document.createElement("li");
  worstCityItem.innerText = city;
  console.log(worstCityItem);
  worstCity.appendChild(worstCityItem); //worstCity ul에 worstCityItem을 하나씩 넣어줌
});

worstCityDiv.appendChild(worstCity);
$container[0].appendChild(worstCityDiv);

// const worstCityList = `
// <ul>
//   <li>Cairo</li>
//   <li>London</li>
//   <li>Risbon</li>
//    <li>Sydney</li>
// <ul>
// `
// $cityDiv.insertAdjacentHTML('beforeend',worstCityList);  //특정 포지션에 넣을 수 있음

// classList :클래스 추가
worstCityDiv.classList.add("city");
// worstCityDiv.classList.remove('city');

//setAttribute : 속성 추가
worstCity.setAttribute("name", "worstCity");
console.log(worstCity);