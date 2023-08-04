"use strict";
exports.__esModule = true;
var createLightbulbsElements_js_1 = require("../../utils/createLightbulbsElements.js");
var lightBulbs = [
    {
        id: 0,
        color: "yellow",
        status: false
    },
    {
        id: 1,
        color: "red",
        status: false
    },
    {
        id: 2,
        color: "blue",
        status: false
    },
    {
        id: 3,
        color: "green",
        status: false
    },
    {
        id: 4,
        color: "white",
        status: false
    },
];
var headerElement = document.querySelector("header");
var widthPage = document.documentElement.clientWidth;
// function createLightbulbsElements(width: number, arr: ILightBulbs[]) {
//   const countLightBulbs = Math.floor((width / 50) / arr.length);
//   let i = 0;
//   while(i < countLightBulbs) {
//     arr.forEach((el, index) => {
//       const boxLightBuildElement = document.createElement("div");
//       const wireElement = document.createElement("div");
//       const holderElement = document.createElement("div");
//       const circleElement = document.createElement("div");
//       if (index % 2 === 0) {
//         boxLightBuildElement.classList.add("header__boxLightBuild");
//         wireElement.classList.add("header__wire");
//         wireElement.classList.add("header__wire_long");
//         holderElement.classList.add("header__holder");
//         circleElement.classList.add("header__circle");
//         circleElement.style.backgroundColor = el.color;
//         headerElement?.prepend(boxLightBuildElement);
//         boxLightBuildElement.append(wireElement);
//         boxLightBuildElement.append(holderElement);
//         boxLightBuildElement.append(circleElement);
//       } else {
//         boxLightBuildElement.classList.add("header__boxLightBuild");
//         wireElement.classList.add("header__wire");
//         holderElement.classList.add("header__holder");
//         circleElement.classList.add("header__circle");
//         circleElement.style.backgroundColor = el.color;
//         headerElement?.prepend(boxLightBuildElement);
//         boxLightBuildElement.append(wireElement);
//         boxLightBuildElement.append(holderElement);
//         boxLightBuildElement.append(circleElement);
//       }
//     });
//     i++;
//   };
// };
(0, createLightbulbsElements_js_1.createLightbulbsElements)(widthPage, lightBulbs, headerElement);
function removeChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    ;
}
;
window.addEventListener("resize", function () {
    var currentWithPage = document.documentElement.clientWidth;
    if (headerElement !== null) {
        removeChilds(headerElement);
        (0, createLightbulbsElements_js_1.createLightbulbsElements)(currentWithPage, lightBulbs, headerElement);
    }
});
