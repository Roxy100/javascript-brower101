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
