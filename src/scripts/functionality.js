const keys = document.querySelectorAll('.key');
const textarea = document.body.querySelector('.keyboard-text');
const keyboard = document.body.querySelector('.keyboard');

window.addEventListener('keydown', (event) => {
  console.log(event.code);
  textarea.focus();
  keys.forEach(k => {
    if (k.dataset.valueEn === event.code) {
      k.classList.add('active');
      k.classList.remove('remove');
      console.log('keydown');
    } else {
      k.classList.remove('active');
    }
  })
});

window.addEventListener('keyup', (event) => {
  console.log(event.code);
  keys.forEach(k => {
    if (k.dataset.valueEn === event.code) {
      k.classList.add('remove');
      k.classList.remove('active');
      console.log('keyup');
    } else {
      k.classList.remove('remove');
    }
  })
});

keyboard.addEventListener('mousedown', (event) => {
  const target = event.target.closest('.key[data-value-en]');
  console.log(target);
  textarea.focus();
  keys.forEach(k => {
    if (k.dataset.valueEn === target.dataset.valueEn) {
      k.classList.add('active');
      k.classList.remove('remove');
      const eventCaps = new KeyboardEvent('keydown', {
        "key": "CapsLock",
        "keyCode": 20,
        "which": 20,
        "code": "CapsLock",
        "location": 0,
        "description": "caps lock",
        "unicode": "⇪"
      });
      switch (target.dataset.valueEn) {
        case 'Backspace':
          textarea.value = textarea.value.slice(0, -1);
          break;
        case 'Space':
          textarea.value += ' ';
          break;
        case 'Tab':
          textarea.value += '     ';
          break;
        case 'Del':
          break;
        case 'CapsLock':
          console.log(eventCaps);
          break;
        default:
          textarea.value += k.querySelector('span').innerText.toLowerCase();
          break;
      }

    } else {
      k.classList.remove('active');
    }
  })
});

keyboard.addEventListener('mouseup', (event) => {
  const target = event.target.closest('.key[data-value-en]');
  keys.forEach(k => {
    if (k.dataset.valueEn === target.dataset.valueEn) {
      k.classList.add('remove');
      k.classList.remove('active');
    } else {
      k.classList.remove('remove');
    }
  })
})