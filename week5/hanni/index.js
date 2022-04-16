const $div = document.querySelector('.container');
const $form = document.querySelector('.form');
const $input = document.querySelector('.input');
const $button = document.querySelector('.button');

//1. 이벤트 핸들러
//target.이벤트이름 = 콜백함수

$div.onclick = ()=> console.log("clicked");
$div.onclick = ()=> alert('clicked'); //동일한 이벤트가 있으면 첫번째 이벤트를 마지막 이벤트가 덮어씀

function handleClick(){
    console.log("clicked");//콜백함수
}

//2. addEventListener

$div.addEventListener('click',() => console.log('clicked'))
$div.addEventListener('click',() => alert('clicked')) 

//3.removeEventListener

$div.removeEventListener('click', handleClick)


$div.addEventListener('click', handleClick)

function handleClick(event){
    console.log(event);//
}

$input.addEventListener('change',handleChange);

function handleChange(event){
    console.log(event.target.value);
}

$form.addEventListener('submit',handleChange);

function handleSumbit(event){
    event.preventDefault() //이벤트가 가지고 있는 기본적인 동작들을 막아줌
}





