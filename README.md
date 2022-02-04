# ✨ 사용 기술

```
React, Styled-components
```

# ✨ DEMO

# ✨ 구현 목록

## AutoComplte

![2022-02-04 16;49;55](https://user-images.githubusercontent.com/76733178/152491627-07f319d0-43f9-4d25-910b-37d54c6ae1ac.gif)

- 정규표현식을 사용하여 input의 입력 값을 대소문자 구분없이 전역 검색하도록 설정하였습니다.

```
const regex = new RegExp(`${value}`, "gi");
      array = data.filter((v) => v.match(regex));
```

- 정규표현식에 필터되는 값이 하나라도 있으면 class를 추가하여 CSS를 수정하였습니다.

<br/>

## ClickToEdit

![2022-02-04 16;54;20](https://user-images.githubusercontent.com/76733178/152492234-233fcabb-4f87-435f-ac7d-d6a0b1da002f.gif)

- 두 개의 input 값을 하나의 state 객체로 관리하였습니다.
- 하나의 이벤트를 선언하고 state를 동적으로 변경하기 위해 구현하는 과정에서 <br/>
  객체의 key값을 동적으로 할당하는데 어려움이 있었고,<br/>
  키 값에 대한 변수를 대괄호로 감싸는 방식으로 해결하였습니다.

```javascript
setInfo({ ...info, [id]: value });
```

<br/>

## Modal

![2022-02-04 16;55;40](https://user-images.githubusercontent.com/76733178/152492337-fca4a95f-494b-428b-9411-eab2fd678207.gif)

- createPortal을 사용하여 랜더링 시킬 DOM을 직접 선택하였습니다.
- Portal을 통해 부모 컴포넌트 바깥에서도 렌더링 할 수 있게 구현하였습니다.
- isOpen state로 모달 On/Off를 관리하며, isOpen이 true일 때 모달이 전체 화면을 덮도록 하였습니다.

<br/>

## Tab

![2022-02-04 16;56;18](https://user-images.githubusercontent.com/76733178/152492409-58d9df3e-822a-4052-a021-57cc43a8af11.gif)

- Tab 메뉴의 이름과 content가 들어간 배열을 선언하고, map돌며 onClick이벤트를 걸어주었습니다.
- Click 이벤트에 배열의 index를 argument로 넣어주었습니다.
- Tab 메뉴 클릭 시 class를 주어 클릭된 메뉴의 CSS 와 content가 바뀌도록 구현하였습니다.

<br/>

## Tag

![2022-02-04 16;57;01](https://user-images.githubusercontent.com/76733178/152492528-cc652da9-9e1b-48e7-b81f-d7c436cbef3f.gif)

- 기능 구현보다 CSS를 작성이 어려웠으며 input의 안에 tag가 들어가는 느낌을 표현하기 위해 찾아보다<br/>
  input의 outline 속성과 focus-within 속성을 처음 알게 되었습니다.
- mutable한 배열을 map 도는데 key값을 index로 주는 것은 위험하지만,<br/>
  태그를 항상 배열의 끝에 추가하기 때문에 key 값을 index로 주어도 배열이 재배치 됐을 때 index가 꼬이지 않았습니다.

<br/>

## Toggle

![2022-02-04 16;57;34](https://user-images.githubusercontent.com/76733178/152492607-a371d293-76d9-4ff7-a0e5-a04c44a8a2f0.gif)

- toggle의 배경색을 천천히 채우는 방법을 찾는 것이 어려웠으며,<br/>
  linear-gradient를 사용하여 배경이 한쪽에서 부터 부드럽게 채워지는 느낌을 줄 수 있었습니다.
- power 상태로 toggle의 on/off 를 관리하여 class를 주어 CSS를 변경하였습니다.

<br/>

# ✨ 설치 및 시작 방법

```
$ npm install

$ npm start
```
