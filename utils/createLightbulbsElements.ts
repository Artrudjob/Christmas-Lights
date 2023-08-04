import { ILightBulbs } from "../interface/interface";

export function createLightbulbsElements(width: number, arr: ILightBulbs[], parent: HTMLElement) {
  const countLightBulbs = Math.floor((width / 50) / arr.length);
  let i = 0;

  while(i < countLightBulbs) {
    arr.forEach((el, index) => {
      const boxLightBuildElement = document.createElement("div");
      const wireElement = document.createElement("div");
      const holderElement = document.createElement("div");
      const circleElement = document.createElement("div");

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
      } else {
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
  };
};