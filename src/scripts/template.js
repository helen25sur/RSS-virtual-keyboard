import KEYS from './keys.json';

function createElement(name, classNames) {
  const element = document.createElement(name);
  if (Array.isArray(classNames)) {
    classNames.forEach((item) => {
      element.classList.add(item);
    });
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

const lang = localStorage.lang !== undefined ? localStorage.getItem('lang') : 'En';

Object.entries(KEYS).forEach((value) => {
  const line = createElement('div', 'keyboard-line');
  value.forEach((lineKey) => {
    // console.log(lineKey);
    if (typeof lineKey === 'object') {
      Object.entries(lineKey).forEach((item) => {
        // console.log(item[1]);
        const key = createElement('div', item[1].classList);
        const kDataset = key.dataset;
        const itemValueEn = item[1].datasetValueEn;
        const itemValueGr = item[1].datasetValueGr;
        kDataset.valueEn = itemValueEn;
        kDataset.valueGr = itemValueGr !== undefined ? itemValueGr : itemValueEn;
        const keyV = createElement('span', 'key-value');
        keyV.innerText = item[1][`keyValue${lang}`];
        if (item[1].additionalValue !== undefined) {
          key.innerHTML += `<span class="special-symbol">${item[1].additionalValue}</span>`;
        }
        key.append(keyV);
        line.append(key);
      });
    }
    keyboard.append(line);
  });
});

const pDescr = createElement('p', 'description');
pDescr.innerHTML = 'Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt';

main.append(wrapperTextarea);
main.append(wrapperKeyboard);
main.append(pDescr);

document.body.append(main);
