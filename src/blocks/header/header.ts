import { lightBulbs } from "../../consts/lightBulbs.js";
import { createLightbulbsElements } from "../../utils/createLightbulbsElements.js";
import { removeChilds } from "../../utils/removeChilds.js";

const headerElement = document.querySelector("header")!;
const widthPage = document.documentElement.clientWidth;

createLightbulbsElements(widthPage, lightBulbs, headerElement);

window.addEventListener("resize", () => {
  const currentWithPage = document.documentElement.clientWidth;

  if (headerElement !== null) {
    removeChilds(headerElement)
    createLightbulbsElements(currentWithPage, lightBulbs, headerElement)
  }
})