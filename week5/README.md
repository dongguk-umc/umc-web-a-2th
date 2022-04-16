# Web 5주차 워크북

# 핵심 키워드 🎯

## [이벤트를 사용하는 방법 2가지]
1. 이벤트 핸들러
   - 형태 : target.이벤트이름(Ex : onclick) = 콜백함수
   - 이벤트 핸들러를 사용하면 동일한 대상, 동일한 이벤트에 한가지 콜백함수만 적용 가능
   ```
   $div.onclick = () => console.log('clicked');
   $div.onclick = () => alert('clicked'); // 뒤에 선언된함수만 적용됨
    ```

2. **addEventListner**
    - 형태 : target.addEventListner('이벤트이름', 콜백함수)
    - addEventListener를 사용하면 동일한 대상, 이벤트에 콜백함수를 중복으로 사용할 수 있다.
   ```
   // handleClick, alert 모두 적용된다.
   $div.addEventListener('click', handleClick);
   $div.addEventListener('click', ()=>alert('clicked')); 
    ```
# 5주차 수업 후기 📢

- 5주차 **수업을 듣고 서로 느낀 점을 이야기해주세요!**
  - 어월두 
    - 통신에 가장 중요한 부분인 이벤트를 잘 이해해야 비로소 프로그램을 효과적으로 개발할 수 있다는 생각이 들었다. CRUD를 통해 백엔드와의 작업을 하기 위해 많은 연습이 필요할 것 같다.
    - preventDefault()는 event가 가지고 있는 기본적인 동작들을 막아주기 때문에 초기화할때 필수적인 함수이다.
    - 
# **실습 체크리스트✅**

- [ ]  왜 $div.onClick와 같은 방식 대신 addEventListener를 사용하시는지 이해하셨나요?
- [ ]  preventDefault()를 사용하는 이유가 무엇인지 이해하셨나요?
- [ ]  addEventListener를 통해 핸들러 함수를 실행할 때, 파라미터를 넣어주려면 어떻게 해야하는지 조사하고 하단에 코드를 적어주세요.
    
    ```
   // 콜백함수 부분을 익명함수부분으로 작성한다.
   // 그 이유는 함수를 그냥 쓸 경우, JS의 특성상 함수를 맨 위로 올려 읽어오기 때문에, event가 발생하기도 전에 실행되기 때문이다. 
   target.addEventListener('event name', ()=>function(parameter))
    
    ```
    

# !주의사항

1. **과제 피드백 기반 진행입니다** - 한명씩 본인의 **과제를 발표**하는 시간 그리고 해온 **과제에 대한 피드백**을 하는 시간 (ex:전 이렇게 생각해서 이런 부분 다르게 해왔는데 저것도 괜찮은 것 같아요!)이 **무조건 기반**이 되어야 합니다!
2. 부가적으로 **워크북에서 제공되는 키워드 혹은 강의에서 들은 디테일 적인 부분**에서 더 토의해봐도 좋을 것 같습니다

# 논의해보면 좋은 것들 🔥

- addEventListener에 필요한 인자들에 대해 알아보기
- JavaScript 이벤트의 종류에 대해 조사하기