# 브라우저 101 강의 노트

---

## WebAPIs 이해

### Window

    * Window : 브라우저에서 현재 열려있는 전체적인 창. (Global Object)
        - DOM : Document Object Model의 약자.
        - BOM : Brower Object Model의 약자. 예→ Navigator, location, Fetch, Storage...
        - JavaScript : 예 → Array, Map, Date ..
    * Document : HTML에서 작성한 요소들이 표기되어지는 부분.
    * Navigator : 브라우저 자체에 관련된 정보들이 담겨있는 object.

### Window 사이즈 표기

    - window.screen : 모니터 사이즈
    - window.outer : 페이지를 넘어선 브라우저 전체의 사이즈
    - window.inner : 브라우저 페이지가 표기되는 것 + 스크롤바 포함 사이즈
    - documentElement.clientWidth : 스크롤바를 제외한 정말 순수 페이지의 사이즈

### 브라우저 좌표

    자료 -> (https://ko.javascript.info/coordinates)

    - Client X,Y는 브라우저 window에서 있는 좌표값에 해당해서 X,Y
    - Page X,Y는 문서의 제일 시작점부터 X,Y
    - JavaScript에서 Element.getBoundingClientRect() - bottom, right → 오른쪽고 왼쪽  X,Y축으로부터 좌표가 계산이 된다는 것.
    - CSS position : absolute - bottom, right → 브라우저에서 제일 오른쪽과 밑에서부터 지정이 됨.
