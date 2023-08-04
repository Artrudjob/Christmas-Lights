import "./index.css";
import { lightBulbs } from "./consts/lightBulbs";
import { createLightbulbsElements } from "./utils/createLightbulbsElements";
import { removeChilds } from "./utils/removeChilds";

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