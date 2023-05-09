export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const visibleElement = (target, isVisible) => {
  const elements = setElements(target);

  elements.forEach((element) => {
    element.style.display = isVisible ? "block" : "none";
  });
};

export const createElement = (tagName, tagText = "") => {
  const $create = document.createElement(tagName);
  $create.innerText = tagText;

  return $create;
};

export const combineElement = (elements) => {
  const $fragment = document.createDocumentFragment();
  elements.forEach((element) => $fragment.append(element));

  return $fragment;
};
