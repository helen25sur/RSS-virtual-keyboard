import KEYS from './keys.json';

// create localStorage
const storage = window.localStorage;
if (storage.getItem('lang') === null) {
  storage.setItem('lang', 'En');
}

const keys = document.querySelectorAll('.key');
const textarea = document.body.querySelector('.keyboard-text');
const keyboard = document.body.querySelector('.keyboard');

function behaviorKeys(forSwitch, item, event) {
  const selectStart = textarea.selectionStart;
  let textValue = textarea.value;

  if (event.shiftKey) {
    item.classList.add('text-transform');
  }

  switch (forSwitch) {
    case 'Backspace':
      textValue = textValue.substr(0, selectStart - 1) + textValue.substr(selectStart);
      textarea.value = textValue;
      textarea.selectionEnd = selectStart - 1;
      break;
    case 'Delete':
      textValue = textValue.substr(0, selectStart) + textValue.substr(selectStart + 1);
      textarea.value = textValue;
      textarea.selectionEnd = selectStart;
      break;
    case 'Space':
      textValue = `${textValue.substr(0, selectStart)}${' '}${textValue.substr(selectStart)}`;
      textarea.value = textValue;
      textarea.selectionEnd = selectStart + 1;
      break;
    case 'Tab':
      textValue = `${textValue.substr(0, selectStart)}${'\t'}${textValue.substr(selectStart)}`;
      textarea.value = textValue;
      textarea.selectionEnd = selectStart + 1;
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'ControlLeft':
    case 'MetaLeft':
    case 'AltLeft':
    case 'AltRight':
    case 'ControlRight':
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowRight':
    case 'ArrowLeft':
      textarea.value += '';
      break;
    case 'CapsLock':
      keys.forEach((keyItem) => {
        keyItem.classList.toggle('text-transform');
      });
      break;
    case 'Enter':
      textValue = `${textValue.substr(0, selectStart)}${'\n'}${textValue.substr(selectStart)}`;
      textarea.value = textValue;
      textarea.selectionEnd = selectStart + 1;
      break;
    default:
      if (item.querySelector('.special-symbol') !== null && event.shiftKey) {
        textValue = textValue.substr(0, textarea.selectionStart) + item.querySelector('.special-symbol').innerText + textValue.substr(textarea.selectionStart);
        textarea.value = textValue;
        textarea.selectionEnd = selectStart + 1;
      } else if (item.classList.contains('text-transform')) {
        textValue = textValue.substr(0, textarea.selectionStart) + item.querySelector('.key-value').innerText.toUpperCase() + textValue.substr(textarea.selectionStart);
        textarea.value = textValue;
        textarea.selectionEnd = selectStart + 1;
      } else {
        textValue = textValue.substr(0, textarea.selectionStart) + item.querySelector('.key-value').innerText + textValue.substr(textarea.selectionStart);
        textarea.value = textValue;
        textarea.selectionEnd = selectStart + 1;
      }
      break;
  }
  return textValue;
}
// keyboard's events
const defaultKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Escape', 'Numpad9', 'Numpad3', 'Numpad7', 'Numpad1'];

window.addEventListener('keydown', (event) => {
  let lang = storage.getItem('lang');
  if (!defaultKeys.includes(event.code)) {
    event.preventDefault();
  }
  textarea.focus();
  const valueDataset = `value${lang}`;
  keys.forEach((k) => {
    if (k.dataset[valueDataset] === event.code) {
      k.classList.add('active');
      k.classList.remove('remove');
      behaviorKeys(event.code, k, event);
    }

    // switcher languages
    if (k.dataset[valueDataset] === 'AltLeft' && event.ctrlKey && event.altKey) {
      if (storage.getItem('lang') === 'En') {
        storage.removeItem('lang');
        storage.setItem('lang', 'Gr');
      } else if (storage.getItem('lang') === 'Gr') {
        storage.removeItem('lang');
        storage.setItem('lang', 'En');
      }

      keys.forEach((item) => {
        lang = storage.getItem('lang');
        const kValue = item.querySelector('.key-value');
        Object.entries(KEYS).forEach((line) => {
          if (typeof line === 'object') {
            line[1].forEach((symbol) => {
              if (symbol.datasetValueEn === item.dataset.valueEn) {
                kValue.innerText = symbol[`keyValue${lang}`];
              }
            });
          }
        });
      });
    }
  });
});

window.addEventListener('keyup', (event) => {
  const lang = storage.getItem('lang');
  const valueDataset = `value${lang}`;
  keys.forEach((k) => {
    if (k.dataset[valueDataset] === event.code) {
      k.classList.add('remove');
      k.classList.remove('active');
      if (event.shiftKey) {
        k.classList.remove('text-transform');
      }
    } else {
      k.classList.remove('remove');
    }
  });
});

// mouse's events
keyboard.addEventListener('mousedown', (event) => {
  const lang = storage.getItem('lang');
  const target = event.target.closest('.key[data-value-en]');
  const valueDataset = `value${lang}`;
  textarea.focus();
  keys.forEach((k) => {
    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {
      k.classList.add('active');
      k.classList.remove('remove');

      behaviorKeys(target.dataset[valueDataset], k, event);
    } else {
      k.classList.remove('active');
    }
  });
});

keyboard.addEventListener('mouseup', (event) => {
  const lang = storage.getItem('lang');
  const valueDataset = `value${lang}`;
  const target = event.target.closest('.key[data-value-en]');
  keys.forEach((k) => {
    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {
      k.classList.add('remove');
      k.classList.remove('active');
    } else {
      k.classList.remove('remove');
    }
  });
});
