import KEYS from './keys.json';

// create localStorage
const storage = window.localStorage;
if (storage.getItem('lang') === null) {
  storage.setItem('lang', 'En');
}

const keys = document.querySelectorAll('.key');
const textarea = document.body.querySelector('.keyboard-text');
const keyboard = document.body.querySelector('.keyboard');

function behaviorKeys(forSwitch, item, textarea) {
  const selectStart = textarea.selectionStart;
  if (event.shiftKey) {
    item.classList.add('text-transform');
  } else {
    item.classList.remove('text-transform');
  }
  switch (forSwitch) {
    case 'Backspace':
      textarea.value = textarea.value.substr(0, selectStart - 1) + textarea.value.substr(selectStart);
      textarea.selectionEnd = selectStart - 1;
      break;
    case 'Delete':
      textarea.value = textarea.value.substr(0, selectStart) + textarea.value.substr(selectStart + 1);
      textarea.selectionEnd = selectStart;
      break;
    case 'Space':
      textarea.value = textarea.value.substr(0, selectStart) + ' ' + textarea.value.substr(selectStart);
      textarea.selectionEnd = selectStart + 1;
      break;
    case 'Tab':
      textarea.value = textarea.value.substr(0, selectStart) + '\t' + textarea.value.substr(selectStart);
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
      keys.forEach(keyItem => {
        keyItem.classList.toggle('text-transform');
        if (keyItem.classList.contains('text-transform')) {
          keys.forEach(key => {
            key.querySelector('span').innerText.toUpperCase();
          });
        } else {
          keys.forEach(key => {
            key.querySelector('span').innerText.toLowerCase();
          });
        }
      });
      break;
    case 'Enter':
      textarea.value = textarea.value.substr(0, textarea.selectionStart) + '\n' + textarea.value.substr(textarea.selectionStart);
      textarea.selectionEnd = selectStart + 1;
      break;

    default:
      if (item.querySelector('.special-symbol') !== null && event.shiftKey) {
        textarea.value = textarea.value.substr(0, textarea.selectionStart) + item.querySelector('.special-symbol').innerText + textarea.value.substr(textarea.selectionStart);
        textarea.selectionEnd = selectStart + 1;
      } else {
        textarea.value = textarea.value.substr(0, textarea.selectionStart) + item.querySelector('.key-value').innerText + textarea.value.substr(textarea.selectionStart);
        textarea.selectionEnd = selectStart + 1;
      }
      break;
  }
}
// keyboard's events
window.addEventListener('keydown', (event) => {
  let lang = storage.getItem('lang');
  if (event.code !== 'ArrowUp' &&
    event.code !== 'ArrowDown' &&
    event.code !== 'ArrowLeft' &&
    event.code !== 'ArrowRight') {
    event.preventDefault();
  }
  textarea.focus();
  const valueDataset = `value${lang}`;
  keys.forEach(k => {
    if (k.dataset[valueDataset] === event.code) {
      k.classList.add('active');
      k.classList.remove('remove');

      // if (event.shiftKey) {
      //   k.classList.add('text-transform');
      // }

      behaviorKeys(event.code, k, textarea);
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
      keys.forEach(item => {
        lang = storage.getItem('lang');
        for (const line in KEYS) {
          KEYS[line].forEach(symbol => {
            if (symbol['datasetValueEn'] === item.dataset.valueEn) {
              item.querySelector('.key-value').innerText = symbol[`keyValue${lang}`];
            }
          })
        }
      })
    }
  })
});

window.addEventListener('keyup', (event) => {
  let lang = storage.getItem('lang');
  const valueDataset = `value${lang}`;
  keys.forEach(k => {
    if (k.dataset[valueDataset] === event.code) {
      k.classList.add('remove');
      k.classList.remove('active');
      if (event.shiftKey) {
        k.classList.remove('text-transform');
      }
    } else {
      k.classList.remove('remove');
    }
  })
});

// mouse's events
keyboard.addEventListener('mousedown', (event) => {
  let lang = storage.getItem('lang');
  const target = event.target.closest('.key[data-value-en]');
  const valueDataset = `value${lang}`;
  textarea.focus();
  keys.forEach(k => {
    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {
      k.classList.add('active');
      k.classList.remove('remove');

      behaviorKeys(target.dataset[valueDataset], k, textarea);


    } else {
      k.classList.remove('active');
    }
  })
});

keyboard.addEventListener('mouseup', (event) => {
  let lang = storage.getItem('lang');
  const valueDataset = `value${lang}`;
  const target = event.target.closest('.key[data-value-en]');
  keys.forEach(k => {
    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {
      k.classList.add('remove');
      k.classList.remove('active');
    } else {
      k.classList.remove('remove');
    }
  })
});