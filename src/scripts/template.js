import KEYS from './keys.json';


function createElement(name, classNames) {
  const element = document.createElement(name);
  if (Array.isArray(classNames)) {
    classNames.forEach(item => {
      element.classList.add(item);
    })
  } else {
    element.classList.add(classNames);
  }
  return element;
}

const main = createElement('main', 'main-content');

const title = createElement('h1', 'main-title');
title.innerText = 'Virtual Keyboard (RS School)';
main.append(title);

const wrapperTextarea = createElement('div', 'wrapper-textarea');
const textarea = createElement('textarea', 'keyboard-text');
textarea.setAttribute('autofocus', 'true');
wrapperTextarea.append(textarea);

const wrapperKeyboard = createElement('div', 'wrapper-keyboard');
const keyboard = createElement('div', 'keyboard');
wrapperKeyboard.append(keyboard);

for (const value in KEYS) {
  let lang = localStorage.getItem('lang');
  const line = createElement('div', 'keyboard-line');
  KEYS[value].forEach(item => {
    const key = createElement('div', item.classList);
    key.dataset.valueEn = item.datasetValueEn;
    key.dataset.valueGr = item.datasetValueGr !== undefined ? item.datasetValueGr : item.datasetValueEn;
    // key.dataset.value = item[`keyValue${lang}`];

    const keyV = createElement('span', 'key-value');
    keyV.innerText = item[`keyValue${lang}`];
    key.append(keyV);
    line.append(key);
  })
  keyboard.append(line);
}

const pDescr = createElement('p', 'description');
pDescr.innerHTML = 'Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt';

main.append(wrapperTextarea);
main.append(wrapperKeyboard);
main.append(pDescr);

document.body.append(main);