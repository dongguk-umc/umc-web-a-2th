const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $btn = document.querySelector('button');

// 이벤트를 사용하는 방법 : 2가지

// 1. 이벤트 핸들러
// target.이벤트이름 = 콜백함수
// * 이벤트 핸들러를 사용하면 동일한 대상에 동일한 이벤트가 있으면 뒤의 이벤트로 덮어 씌워짐
// // 예시
// $div.onclick = () => console.log('clicked');
// $div.onclick = () => alert('clicked');
//
// function handleClick () {
//     console.log('clicked')
// }
//
// // 2. addEventListener
// // * addEventListener를 사용하면 동일한 대상, 이벤트에 콜백함수를 중복으로 사용할 수 있다.
// $div.addEventListener('click', handleClick);
// $div.addEventListener('click', ()=>alert('clicked'));
//
// // 3. removeEventListener
// // lister자리에 콜백함수의 이름을 써줘야 하므로 익명함수를 add에 사용한 경우 삭제가 불가하다.
// $div.removeEventListener('click', handleClick);

// 4. event
$div.addEventListener('click', handleClick);
function handleClick (event) {
    console.log(event.target.innerText);
}

$input.addEventListener('change', handleChange);
function handleChange(event) {
     console.log(event.target.value);
}

$form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    // event가 가지고 있는 기본적인 동작들을 막아준다 -> form의 기본 동작에는 submit을 하는 작업이 내포되어있는데 그걸 막아줌
    const inputValue = $input.value;
    $input.value = ''; // 값 초기화

}