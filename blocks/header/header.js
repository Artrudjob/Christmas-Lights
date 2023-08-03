"use strict";
exports.__esModule = true;
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
function createLightbulbs(width, arr) {
    var countLightBulbs = Math.floor((width / 50) / arr.length);
    var i = 0;
    while (i < countLightBulbs) {
        arr.forEach(function (el, index) {
            var boxLightBuildElement = document.createElement("div");
            var wireElement = document.createElement("div");
            var holderElement = document.createElement("div");
            var circleElement = document.createElement("div");
            if (index % 2 === 0) {
                boxLightBuildElement.classList.add("header__boxLightBuild");
                wireElement.classList.add("header__wire");
                wireElement.classList.add("header__wire_long");
                holderElement.classList.add("header__holder");
                circleElement.classList.add("header__circle");
                circleElement.style.backgroundColor = el.color;
                headerElement === null || headerElement === void 0 ? void 0 : headerElement.prepend(boxLightBuildElement);
                boxLightBuildElement.append(wireElement);
                boxLightBuildElement.append(holderElement);
                boxLightBuildElement.append(circleElement);
            }
            else {
                boxLightBuildElement.classList.add("header__boxLightBuild");
                wireElement.classList.add("header__wire");
                holderElement.classList.add("header__holder");
                circleElement.classList.add("header__circle");
                circleElement.style.backgroundColor = el.color;
                headerElement === null || headerElement === void 0 ? void 0 : headerElement.prepend(boxLightBuildElement);
                boxLightBuildElement.append(wireElement);
                boxLightBuildElement.append(holderElement);
                boxLightBuildElement.append(circleElement);
            }
        });
        i++;
    }
    ;
}
;
createLightbulbs(widthPage, lightBulbs);
