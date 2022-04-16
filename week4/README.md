# Web 4주차 워크북

# 핵심 키워드 🎯

- DOM과 JavaScript
- querySelector
- appendChild
- insertAdjacentHTML

# 4주차 수업 후기 📢

- 4주차 **수업을 듣고 서로 느낀 점을 이야기해주세요!**
- **핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?
서로 이야기해주세요!**

# 실습 체크리스트✅

- document
    - [ ]  getElementsByTagName, getElementsByClassName, getElementById 를 사용하여 코드를 아래에 작성해주세요
    
    ```
  // getElementsByTagName
  const $bodys= document.getElementsByTagName("body");
  console.log($bodys[0].innerText);
  
  // getElementsByClassName
  const $cityDiv = document.getElementsByClassName("city");

  // getElementsById
    ```
    - **주의점 : 클래스와 태그는 하나 이상의 값이 들어있을수 있으므로 elements의 s를 까먹지 말아야한다!**
    - [ ]  innerText : 태그를 제외하고 지정된 변수 안에 있는 모든 텍스트값을 추출 or 대입 가능
    - [ ]  spread operator : 나열된 데이터를 처리할때 유용한 연산자, 특히 배열을 컨트롤할때 자주 사용한다.
    - [ ]  Array.from : 유사배열을 배열로 변환해준다.
  
- element
    - [ ]  classList : 태그에 클래스를 지정 또는 삭제할 수 있게 해주는 api
    - [ ]  setAttribute : 태그에 속성값을 지정해주는 api
    - [ ]  appendChild : 해당 요소를 부모의 자식요소 맨 뒤로 보낸다.
    - [ ]  insertAdjacentHTML : 부모를 기준으로 위치를 지정시켜 자식요소를 위치시킨다.

- insertAdjacentHTMl의 position parmameter : beforebegin, afterbegin, beforeend, afterend

# !주의사항

1. **과제 피드백 기반 진행입니다** - 한명씩 본인의 **과제를 발표**하는 시간 그리고 해온 **과제에 대한 피드백**을 하는 시간 (ex:전 이렇게 생각해서 이런 부분 다르게 해왔는데 저것도 괜찮은 것 같아요!)이 **무조건 기반**이 되어야 합니다!
2. 부가적으로 **워크북에서 제공되는 키워드 혹은 강의에서 들은 디테일 적인 부분**에서 더 토의해봐도 좋을 것 같습니다

# 논의해보면 좋은 것들 🔥

- JavaScript가 브라우저에서 동작하는 원리에 대해서 알아보기
- JavaScript가 HTML을 제어하는 과정에 대해서 알아보기
- appendChild와 insertAdjecentHTML의 차이 알아보기