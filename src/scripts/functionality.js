const storage = window.localStorage;
if (storage.getItem('lang') === null) {
  storage.setItem('lang', 'En');
}

const keys = document.querySelectorAll('.key');
const textarea = document.body.querySelector('.keyboard-text');
const keyboard = document.body.querySelector('.keyboard');

window.addEventListener('keydown', (event) => {
  let lang = storage.getItem('lang');
  event.preventDefault();
  textarea.focus();
  const valueDataset = `value${lang}`;
  console.log(lang);
  console.log(event);
  keys.forEach(k => {
    if (k.dataset[valueDataset] === event.code) {
      k.classList.add('active');
      k.classList.remove('remove');

      if (event.shiftKey) {
        if (k.classList.contains('key-shift')) {
          k.querySelector('span').innerText.toLowerCase();
        } else {
          k.classList.add('text-transform');
        }
      }
      console.log(event.code, k);
      switch (event.code) {
        case 'Backspace':
          textarea.value = textarea.value.slice(0, -1);
          break;
        case 'Space':
          textarea.value += ' ';
          break;
        case 'Tab':
          textarea.value += '\t';
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'ControlLeft':
        case 'MetaLeft':
        case 'AltLeft':
        case 'AltRight':
        case 'ControlRight':
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
          textarea.value += '\n';
          break;

        default:
          textarea.value += k.querySelector('span').innerText;
          break;
      }
    }

    if (k.dataset[valueDataset] === 'AltLeft' && event.ctrlKey && event.altKey) {
      if (storage.getItem('lang') === 'En') {
        storage.removeItem('lang');
        storage.setItem('lang', 'Gr');
      } else if (storage.getItem('lang') === 'Gr') {
        storage.removeItem('lang');
        storage.setItem('lang', 'En');
      }
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

keyboard.addEventListener('mousedown', (event) => {
  let lang = storage.getItem('lang');
  const target = event.target.closest('.key[data-value-en]');
  const valueDataset = `value${lang}`;
  textarea.focus();
  keys.forEach(k => {
    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {
      k.classList.add('active');
      k.classList.remove('remove');

      switch (target.dataset[valueDataset]) {
        case 'Backspace':
          textarea.value = textarea.value.slice(0, -1);
          break;
        case 'Space':
          textarea.value += ' ';
          break;
        case 'Tab':
          textarea.value += '\t';
          break;
        case 'Delete':
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'ControlLeft':
        case 'MetaLeft':
        case 'AltLeft':
        case 'AltRight':
        case 'ControlRight':
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
          textarea.value += '\n';
          break;

        default:
          textarea.value += k.querySelector('span').innerText;
          break;
      }

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