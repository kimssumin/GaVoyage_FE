export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const createElement = (tagName, tagText = '') => {
  const $create = document.createElement(tagName);
  $create.innerText = tagText;

  return $create;
};

export const combineElement = (elements) => {
  const $fragment = document.createDocumentFragment();
  elements.forEach((element) => $fragment.append(element));

  return $fragment;
};

export const getParameterByName = (name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
