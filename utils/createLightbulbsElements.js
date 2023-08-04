"use strict";
exports.__esModule = true;
exports.createLightbulbsElements = void 0;
function createLightbulbsElements(width, arr, parent) {
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
                parent.prepend(boxLightBuildElement);
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
                parent.prepend(boxLightBuildElement);
                boxLightBuildElement.append(wireElement);
                boxLightBuildElement.append(holderElement);
                boxLightBuildElement.append(circleElement);
            }
        });
        i++;
    }
    ;
}
exports.createLightbulbsElements = createLightbulbsElements;
;
