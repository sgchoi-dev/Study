var 제목 = document.querySelector("#title");
var findLink = document.querySelector(".link");
var btn = document.querySelector("#button");
if (findLink instanceof HTMLAnchorElement) {
    findLink.href = "http://kakao.com";
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    // btn에 addEventListener 가능하면 {} 실행, 아니면 undefined 반환
});
// narrowing 방법5개
// 1
//if (제목 != null) {
//  제목.innerHTML = "반가워요";
//}
// 2 - 가장 많이 쓰는 방법
//if (제목 instanceof Element) {
//  제목.innerHTML = "반가워요";
//}
// 3 as 사용 (100% 확신시 써야함)
// let 제목 = document.querySelector("#title") as Element;
// //  제목.innerHTML = "반가워요";
// 4 ?. -> 1. 제목에 innerHTML이 있으면 출력해주고, 없으면 undefined 반환 (optional chaining 신문법)
//if(제목?.innerHTML != undefined){
//  제목.innerHTML = "반가워요";
//}
// 5. tsconfig.json 내의 stricNullChecks 값을 false 로 바꾼다.
