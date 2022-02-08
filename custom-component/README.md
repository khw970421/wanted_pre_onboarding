# 1️⃣ Toggle.js
## 🛠️ 구현한 방법 및 이유

1. 매개변수
>다양하게 사용하기 위해 width height를 매개변수로 받고 Toggle의 작동 되지않는 토글도 필요하다 생각하여 disabled 매개변수까지 3가지의 매개변수가 존재한다.

2. ToggleSwitch
>box-sizing을 border-box로 하여  콘텐츠 영역에 padding 테두리까지 포함한 박스 모델 전체 너비 값으로 사용하여 padding 영역의 계산을 쉽게 하였다.

## ❗ 구현하면서 어려웠던 점과 해결 방법

1. translate 사용
>버튼이 움직일때 position relative를 사용해 왼쪽에서 얼마 떨어진 부분을 오른쪽에서 얼마 떨어진 부분으로 만들려다가 둘다 동시에 쓰면 적용이 안되고 한쪽만 쓰려고 하면 레이아웃 문제가 발생하면서 이를 해결하기 위해 left를 기준으로  calc(100%)의 차이를 비교하였다.

## ⭐ 실행방법



https://user-images.githubusercontent.com/59253551/153022024-24f7bc79-edc7-4f2e-8d39-4145396303dd.mp4



# 2️⃣ Modal.js
## 🛠️ 구현한 방법 및 이유
1. 매개변수
>다양한 Modal 버튼을  위한 width height를 매개변수로 잡고 버튼 내의 Text와 Modal이 켜지고 나오는 Text에 대해서도 매개변수로 잡았다.

2. isModalOpen
>해당 변수의 Boolean 값에 따라 고정된 전체넓이를 가진 모달이 보일 수 있게 하였다.

3. checkModalOut
>모달 창의 회색 바깥부분에 대한 Modal을 빠져나가는 이벤트도 진행하였다.

## ❗ 구현하면서 어려웠던 점과 해결 방법

1. checkModalOut의 이벤트 
>이벤트 캡쳐링으로 Modal 바깥영역의 태그 내에 속한 모달 창 또한 클릭시 모달을 빠져나가는 것을 막기 위해 바깥영역을 클릭 했을 때 className의 체크로 불필요한 내부 이벤트를 막았다.

##  ⭐ 실행방법


https://user-images.githubusercontent.com/59253551/153022044-12b8fa85-b51d-4288-a8ce-9acea3e342ce.mp4




#  3️⃣ Tab.js
## 🛠️ 구현한 방법 및 이유
1. 매개변수
> 다양한 넓이 높이를 위한 width height를 매개변수로 받고 tab의 내용에 대한 배열을 받아 tagName과 text를 통해 누를 때마다 결과를 보여준다.

2. selectedId
>해당 변수를 통해 선택된 Id와 현재 자신의 id를 비교하여 선택된 색깔을 입힌다.

## ❗ 구현하면서 어려웠던 점과 해결 방법

1. Tab1에 대해 One, Tab2에 대해 Two, Tab3에 대해 Three 출력
> 매개변수로 주는 배열을 객체가 포함되있는 것이 아닌 간단하게 배열을 만들었어야하나 싶었고 만약 그럴려면 각각에 따라
['Tab1','Tab2','Tab3'] 배열과 ['ONE','TWO','THREE'] 배열을 각각 받는 방법은 더욱 안 좋은 코드인 것인가 고민을 하게 되었다.

## ⭐ 실행방법



https://user-images.githubusercontent.com/59253551/153022092-a87dd00e-7bd1-43b8-add6-230d68c4039a.mp4



#  4️⃣ Tag.js
## 🛠️ 구현한 방법 및 이유
1.  매개변수
>다양한 컴포넌트를 위해 width height를 매개변수로 받는다.

2. input 값 및 enter 이벤트 체크
> 키보드 enter에 대한 이벤트를 keyUp이벤트를 통해 확인하고
빈값을 입력하지 않게 값을 체크하고 입력이 완료되고 input 창으로 focus가 되어있으므로 useRef를 이용해서 focus를 유지한다.

3. filter
> 클릭된 버튼의 id를 찾아 해당 id를 가진 값을 setTagArr에서 제외시킨다.

## ❗ 구현하면서 어려웠던 점과 해결 방법

1. 구현의 의도
>Notion의 요구사항에는 넓은 곳에서 단지 3개까지만 추가 후 삭제되는 모습을 보였다.
하지만, 여러개가 추가될 경우 이를 길이에 따라 더는 추가 되지않게 막아야하는 것인지 혹은, 옆으로 길게 늘어나도 상관이 없는지에 대한 방법의 고민을 하게 되었다.
* 일단은 삭제와 추가에 제약은 없다 판단되어 overflow: scroll을 통해  옆으로 만들 수 있게 하였다. 

## ⭐ 실행방법


https://user-images.githubusercontent.com/59253551/153022124-b21ea821-1efe-45f1-89e8-6a06e2542bca.mp4





# 5️⃣ AutoComplete.js
## 🛠️ 구현한 방법 및 이유
1. 매개변수
>높이와 넓이를 매개변수로 주고 검색할 대상에 대한 배열을 매개변수로 지정했다.

2. change 이벤트와 검색 결과 click 이벤트
>검색창의 값이 변할때마다 change 이벤트로 검색 대상들을 찾아 아래에 보여주고 click 이벤트를 통해 검색한 대상을 클릭시 결과를 Input값에 처리한다.

## ❗ 구현하면서 어려웠던 점과 해결 방법
1. 레이아웃 짜기
>notion 예시처럼 길이에 맞게 아래 검색이 되게 했지만 Input 태그를 포함한 영역이 둥글게 만들지 못하고 Input태그와 검색태그를 분리해서 둥글게 하였다.

2. 검색 후 검색창 여부
>notion 예시에서는 refurbished를 눌러도 아래에 refurbished가 검색 결과로 남아있는데 이미 검색했으면 굳이 아래에는 검색 결과로 남아 있는 것은 필요 없다 판단되어 검색해서 추가시 해당 검색내용은 아래에서 없어지게 했다.

## ⭐ 실행방법



https://user-images.githubusercontent.com/59253551/153022152-28115eb9-311f-480b-9e18-161c08980c04.mp4



# 6️⃣  ClickToEdit.js
## 🛠️ 구현한 방법 및 이유

1. checkAge 함수로 나이 체크
>나이는 숫자를 입력해야하므로 숫자를 입력하지 않으면 alert 발생

2. onBlur 이벤트
>input에서 focus가 없어질때 그때의 값에 대하여 결과가 나타나게 하고 focus에 따라 box-shadow를 부여한다.

## ❗ 구현하면서 어려웠던 점과 해결 방법
* 어려웠던 부분은 다른 컴포넌트에 비해서는 없었다. 

## ⭐ 실행방법


https://user-images.githubusercontent.com/59253551/153022163-85ff4996-4168-46fc-9496-870be961c2b3.mp4



