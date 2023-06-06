✅3강

    👉 Chakra UI
        : 리액트에서 사용할 수 있는 컴포넌트 라이브러리이다.
        : 다양한 UI를 완성된 형태로 제공한다.

    👉Chakra UI 설치하기
        step 01. get started -> Framework Guide -> CRA 클릭

        step 02. JS Template 명령어 입력하기
            ✔️ npx create-react-app (설치할 폴더명 입력하기) --template @chakra-ui

        step 03. 실행하기
            ✔️ npm run start

        step 04. 폴더 수정하기(실습환경으로 만들기)
            ✔️ App.jsx -> 확장자 변경하기 + import/return 부분 싹 다 지우기

            ✔️ 다음 내용 추가하기
                : <ChakraProvider></ChakraProvider>;
                : <Box> Hello,React~!</Box>

            ✔️ ColorModeSwitcher.js + Logo.js + logo.svg 파일 삭제

            ✔️ 개발자 모드 -> Application -> chakra-ui-color-mode 변경가능

            ✔️ 다음 내용 추가하기
                : <Flex></Flex>
                : <Button></Button>

            ✔️Flex태그와 Button 태그에 스타일 적용하기(chakra)

---

💡Chapter02.

✅4강

    👉컴포넌트
        : 컴포넌트 단위로 코드 관리시 효율적으로 코드 관리를 할 수 있다.
        : 레고 처럼 부분부분 코드를 나눠 작성하는것 -> 나중에 App.jsx에서 합치면 된다.

        ✔️실습가이드
            step 01. box UI 5개 만들기 (컴포넌트 사용 x == 나중에 복잡한 코드 관리 어렵.)
            step 02. 컴포넌트로 나누어 box 5개 관리

✅5강

    👉Props
        : 위 예제에서 배경색과 박스명만 제외하고 box를 컨트럴 하고 싶다!
        : 부모 컴포넌트로부터 자식 컴포넌트가 받을 수 있는 데이터를 말한다.
        : 컴포넌트의 재활용성을 높일 수 있다.
        : props인자가 하나일 경우에는 ()생략이 가능하다.

        ✔️실습가이드
            step 01. components/Card.jsx에 box 디자인 넣기
            step 02. <Card /> props 내려주고 어떤 값이 들어오는지 체크하기
            step 03. props를 활용해 name과 bgColor만 다른 box 5개 만들기

    👉map()
        : 반복적으로 배열의 요소를 탐색해 새로운 배열을 생성해준다.
        : map((v,i)=>{})        // v: value, i: index

        : unique key활용 안했을 경우 에러 발생
            -> key={i}
