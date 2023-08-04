export function removeChilds(parent: HTMLElement) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};