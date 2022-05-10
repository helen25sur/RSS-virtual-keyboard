/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/styles/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _scripts_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/template */ \"./src/scripts/template.js\");\n/* harmony import */ var _scripts_functionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/functionality */ \"./src/scripts/functionality.js\");\n\n\n\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/scripts/functionality.js":
/*!**************************************!*\
  !*** ./src/scripts/functionality.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.json */ \"./src/scripts/keys.json\");\n\n\n// create localStorage\nconst storage = window.localStorage;\nif (storage.getItem('lang') === null) {\n  storage.setItem('lang', 'En');\n}\n\nconst keys = document.querySelectorAll('.key');\nconst textarea = document.body.querySelector('.keyboard-text');\nconst keyboard = document.body.querySelector('.keyboard');\n\nfunction behaviorKeys(forSwitch, item, event) {\n  const selectStart = textarea.selectionStart;\n  let textValue = textarea.value;\n\n  if (event.shiftKey) {\n    item.classList.add('text-transform');\n  }\n\n  switch (forSwitch) {\n    case 'Backspace':\n      textValue = textValue.substr(0, selectStart - 1) + textValue.substr(selectStart);\n      textarea.value = textValue;\n      textarea.selectionEnd = selectStart - 1;\n      break;\n    case 'Delete':\n      textValue = textValue.substr(0, selectStart) + textValue.substr(selectStart + 1);\n      textarea.value = textValue;\n      textarea.selectionEnd = selectStart;\n      break;\n    case 'Space':\n      textValue = `${textValue.substr(0, selectStart)}${' '}${textValue.substr(selectStart)}`;\n      textarea.value = textValue;\n      textarea.selectionEnd = selectStart + 1;\n      break;\n    case 'Tab':\n      textValue = `${textValue.substr(0, selectStart)}${'\\t'}${textValue.substr(selectStart)}`;\n      textarea.value = textValue;\n      textarea.selectionEnd = selectStart + 1;\n      break;\n    case 'ShiftLeft':\n    case 'ShiftRight':\n    case 'ControlLeft':\n    case 'MetaLeft':\n    case 'AltLeft':\n    case 'AltRight':\n    case 'ControlRight':\n    case 'ArrowUp':\n    case 'ArrowDown':\n    case 'ArrowRight':\n    case 'ArrowLeft':\n      textarea.value += '';\n      break;\n    case 'CapsLock':\n      keys.forEach((keyItem) => {\n        keyItem.classList.toggle('text-transform');\n      });\n      break;\n    case 'Enter':\n      textValue = `${textValue.substr(0, selectStart)}${'\\n'}${textValue.substr(selectStart)}`;\n      textarea.value = textValue;\n      textarea.selectionEnd = selectStart + 1;\n      break;\n    default:\n      if (item.querySelector('.special-symbol') !== null && event.shiftKey) {\n        textValue = textValue.substr(0, textarea.selectionStart) + item.querySelector('.special-symbol').innerText + textValue.substr(textarea.selectionStart);\n        textarea.value = textValue;\n        textarea.selectionEnd = selectStart + 1;\n      } else if (item.classList.contains('text-transform')) {\n        textValue = textValue.substr(0, textarea.selectionStart) + item.querySelector('.key-value').innerText.toUpperCase() + textValue.substr(textarea.selectionStart);\n        textarea.value = textValue;\n        textarea.selectionEnd = selectStart + 1;\n      } else {\n        textValue = textValue.substr(0, textarea.selectionStart) + item.querySelector('.key-value').innerText + textValue.substr(textarea.selectionStart);\n        textarea.value = textValue;\n        textarea.selectionEnd = selectStart + 1;\n      }\n      break;\n  }\n  return textValue;\n}\n// keyboard's events\nconst defaultKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Escape', 'Numpad9', 'Numpad3', 'Numpad7', 'Numpad1'];\n\nwindow.addEventListener('keydown', (event) => {\n  let lang = storage.getItem('lang');\n  if (!defaultKeys.includes(event.code)) {\n    event.preventDefault();\n  }\n  textarea.focus();\n  const valueDataset = `value${lang}`;\n  keys.forEach((k) => {\n    if (k.dataset[valueDataset] === event.code) {\n      k.classList.add('active');\n      k.classList.remove('remove');\n      behaviorKeys(event.code, k, event);\n    }\n\n    // switcher languages\n    if (k.dataset[valueDataset] === 'AltLeft' && event.ctrlKey && event.altKey) {\n      if (storage.getItem('lang') === 'En') {\n        storage.removeItem('lang');\n        storage.setItem('lang', 'Gr');\n      } else if (storage.getItem('lang') === 'Gr') {\n        storage.removeItem('lang');\n        storage.setItem('lang', 'En');\n      }\n\n      keys.forEach((item) => {\n        lang = storage.getItem('lang');\n        const kValue = item.querySelector('.key-value');\n        Object.entries(_keys_json__WEBPACK_IMPORTED_MODULE_0__).forEach((line) => {\n          if (typeof line === 'object') {\n            line[1].forEach((symbol) => {\n              if (symbol.datasetValueEn === item.dataset.valueEn) {\n                kValue.innerText = symbol[`keyValue${lang}`];\n              }\n            });\n          }\n        });\n      });\n    }\n  });\n});\n\nwindow.addEventListener('keyup', (event) => {\n  const lang = storage.getItem('lang');\n  const valueDataset = `value${lang}`;\n  keys.forEach((k) => {\n    if (k.dataset[valueDataset] === event.code) {\n      k.classList.add('remove');\n      k.classList.remove('active');\n      if (event.shiftKey) {\n        k.classList.remove('text-transform');\n      }\n    } else {\n      k.classList.remove('remove');\n    }\n  });\n});\n\n// mouse's events\nkeyboard.addEventListener('mousedown', (event) => {\n  const lang = storage.getItem('lang');\n  const target = event.target.closest('.key[data-value-en]');\n  const valueDataset = `value${lang}`;\n  textarea.focus();\n  keys.forEach((k) => {\n    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {\n      k.classList.add('active');\n      k.classList.remove('remove');\n\n      behaviorKeys(target.dataset[valueDataset], k, event);\n    } else {\n      k.classList.remove('active');\n    }\n  });\n});\n\nkeyboard.addEventListener('mouseup', (event) => {\n  const lang = storage.getItem('lang');\n  const valueDataset = `value${lang}`;\n  const target = event.target.closest('.key[data-value-en]');\n  keys.forEach((k) => {\n    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {\n      k.classList.add('remove');\n      k.classList.remove('active');\n    } else {\n      k.classList.remove('remove');\n    }\n  });\n});\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/functionality.js?");

/***/ }),

/***/ "./src/scripts/template.js":
/*!*********************************!*\
  !*** ./src/scripts/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.json */ \"./src/scripts/keys.json\");\n\n\nfunction createElement(name, classNames) {\n  const element = document.createElement(name);\n  if (Array.isArray(classNames)) {\n    classNames.forEach((item) => {\n      element.classList.add(item);\n    });\n  } else {\n    element.classList.add(classNames);\n  }\n  return element;\n}\n\nconst main = createElement('main', 'main-content');\n\nconst title = createElement('h1', 'main-title');\ntitle.innerText = 'Virtual Keyboard (RS School)';\nmain.append(title);\n\nconst wrapperTextarea = createElement('div', 'wrapper-textarea');\nconst textarea = createElement('textarea', 'keyboard-text');\ntextarea.setAttribute('autofocus', 'true');\nwrapperTextarea.append(textarea);\n\nconst wrapperKeyboard = createElement('div', 'wrapper-keyboard');\nconst keyboard = createElement('div', 'keyboard');\nwrapperKeyboard.append(keyboard);\n\nconst lang = localStorage.lang !== undefined ? localStorage.getItem('lang') : 'En';\n\nObject.entries(_keys_json__WEBPACK_IMPORTED_MODULE_0__).forEach((value) => {\n  const line = createElement('div', 'keyboard-line');\n  value.forEach((lineKey) => {\n    // console.log(lineKey);\n    if (typeof lineKey === 'object') {\n      Object.entries(lineKey).forEach((item) => {\n        // console.log(item[1]);\n        const key = createElement('div', item[1].classList);\n        const kDataset = key.dataset;\n        const itemValueEn = item[1].datasetValueEn;\n        const itemValueGr = item[1].datasetValueGr;\n        kDataset.valueEn = itemValueEn;\n        kDataset.valueGr = itemValueGr !== undefined ? itemValueGr : itemValueEn;\n        const keyV = createElement('span', 'key-value');\n        keyV.innerText = item[1][`keyValue${lang}`];\n        if (item[1].additionalValue !== undefined) {\n          key.innerHTML += `<span class=\"special-symbol\">${item[1].additionalValue}</span>`;\n        }\n        key.append(keyV);\n        line.append(key);\n      });\n    }\n    keyboard.append(line);\n  });\n});\n\nconst pDescr = createElement('p', 'description');\npDescr.innerHTML = 'Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt';\n\nmain.append(wrapperTextarea);\nmain.append(wrapperKeyboard);\nmain.append(pDescr);\n\ndocument.body.append(main);\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/template.js?");

/***/ }),

/***/ "./src/scripts/keys.json":
/*!*******************************!*\
  !*** ./src/scripts/keys.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"firstLine\":[{\"keyValueEn\":\"`\",\"keyValueGr\":\"`\",\"datasetValueEn\":\"Backquote\",\"additionalValue\":\"~\",\"classList\":\"key\"},{\"keyValueEn\":\"1\",\"keyValueGr\":\"1\",\"datasetValueEn\":\"Digit1\",\"additionalValue\":\"!\",\"classList\":\"key\"},{\"keyValueEn\":\"2\",\"keyValueGr\":\"2\",\"datasetValueEn\":\"Digit2\",\"additionalValue\":\"@\",\"classList\":\"key\"},{\"keyValueEn\":\"3\",\"keyValueGr\":\"3\",\"datasetValueEn\":\"Digit3\",\"additionalValue\":\"#\",\"classList\":\"key\"},{\"keyValueEn\":\"4\",\"keyValueGr\":\"4\",\"datasetValueEn\":\"Digit4\",\"additionalValue\":\"$\",\"classList\":\"key\"},{\"keyValueEn\":\"5\",\"keyValueGr\":\"5\",\"datasetValueEn\":\"Digit5\",\"additionalValue\":\"%\",\"classList\":\"key\"},{\"keyValueEn\":\"6\",\"keyValueGr\":\"6\",\"datasetValueEn\":\"Digit6\",\"additionalValue\":\"^\",\"classList\":\"key\"},{\"keyValueEn\":\"7\",\"keyValueGr\":\"7\",\"datasetValueEn\":\"Digit7\",\"additionalValue\":\"&\",\"classList\":\"key\"},{\"keyValueEn\":\"8\",\"keyValueGr\":\"8\",\"datasetValueEn\":\"Digit8\",\"additionalValue\":\"*\",\"classList\":\"key\"},{\"keyValueEn\":\"9\",\"keyValueGr\":\"9\",\"datasetValueEn\":\"Digit9\",\"additionalValue\":\"(\",\"classList\":\"key\"},{\"keyValueEn\":\"0\",\"keyValueGr\":\"0\",\"datasetValueEn\":\"Digit0\",\"additionalValue\":\")\",\"classList\":\"key\"},{\"keyValueEn\":\"-\",\"keyValueGr\":\"-\",\"datasetValueEn\":\"Minus\",\"additionalValue\":\"_\",\"classList\":\"key\"},{\"keyValueEn\":\"=\",\"keyValueGr\":\"=\",\"datasetValueEn\":\"Equal\",\"additionalValue\":\"+\",\"classList\":\"key\"},{\"keyValueEn\":\"Backspace\",\"keyValueGr\":\"Backspace\",\"datasetValueEn\":\"Backspace\",\"classList\":[\"key\",\"key-backspace\"]}],\"secondLine\":[{\"keyValueEn\":\"Tab\",\"keyValueGr\":\"Tab\",\"datasetValueEn\":\"Tab\",\"classList\":[\"key\",\"key-tab\"]},{\"keyValueEn\":\"Q\",\"keyValueGr\":\";\",\"datasetValueEn\":\"KeyQ\",\"datasetValueGr\":\"Semicolon\",\"classList\":\"key\"},{\"keyValueEn\":\"W\",\"keyValueGr\":\"ς\",\"datasetValueEn\":\"KeyW\",\"datasetValueGr\":\"KeyW\",\"classList\":\"key\"},{\"keyValueEn\":\"E\",\"keyValueGr\":\"Ε\",\"datasetValueEn\":\"KeyE\",\"classList\":\"key\"},{\"keyValueEn\":\"R\",\"keyValueGr\":\"Ρ\",\"datasetValueEn\":\"KeyR\",\"classList\":\"key\"},{\"keyValueEn\":\"T\",\"keyValueGr\":\"Τ\",\"datasetValueEn\":\"KeyT\",\"classList\":\"key\"},{\"keyValueEn\":\"Y\",\"keyValueGr\":\"Υ\",\"datasetValueEn\":\"KeyY\",\"classList\":\"key\"},{\"keyValueEn\":\"U\",\"keyValueGr\":\"Θ\",\"datasetValueEn\":\"KeyU\",\"classList\":\"key\"},{\"keyValueEn\":\"I\",\"keyValueGr\":\"Ι\",\"datasetValueEn\":\"KeyI\",\"classList\":\"key\"},{\"keyValueEn\":\"O\",\"keyValueGr\":\"Ο\",\"datasetValueEn\":\"KeyO\",\"classList\":\"key\"},{\"keyValueEn\":\"P\",\"keyValueGr\":\"Π\",\"datasetValueEn\":\"KeyP\",\"classList\":\"key\"},{\"keyValueEn\":\"[\",\"keyValueGr\":\"[\",\"datasetValueEn\":\"BracketLeft\",\"additionalValue\":\"{\",\"classList\":\"key\"},{\"keyValueEn\":\"]\",\"keyValueGr\":\"]\",\"datasetValueEn\":\"BracketRight\",\"additionalValue\":\"}\",\"classList\":\"key\"},{\"keyValueEn\":\"\\\\\\\\\",\"keyValueGr\":\"\\\\\\\\\",\"datasetValueEn\":\"Backslash\",\"additionalValue\":\"|\",\"classList\":\"key\"},{\"keyValueEn\":\"Del\",\"keyValueGr\":\"Del\",\"datasetValueEn\":\"Delete\",\"classList\":[\"key\",\"key-delete\"]}],\"thirdLine\":[{\"keyValueEn\":\"Caps Lock\",\"keyValueGr\":\"Caps Lock\",\"datasetValueEn\":\"CapsLock\",\"classList\":[\"key\",\"key-caps\"]},{\"keyValueEn\":\"A\",\"keyValueGr\":\"Α\",\"datasetValueEn\":\"KeyA\",\"classList\":\"key\"},{\"keyValueEn\":\"S\",\"keyValueGr\":\"Σ\",\"datasetValueEn\":\"KeyS\",\"classList\":\"key\"},{\"keyValueEn\":\"D\",\"keyValueGr\":\"Δ\",\"datasetValueEn\":\"KeyD\",\"classList\":\"key\"},{\"keyValueEn\":\"F\",\"keyValueGr\":\"Φ\",\"datasetValueEn\":\"KeyF\",\"classList\":\"key\"},{\"keyValueEn\":\"G\",\"keyValueGr\":\"Γ\",\"datasetValueEn\":\"KeyG\",\"classList\":\"key\"},{\"keyValueEn\":\"H\",\"keyValueGr\":\"Η\",\"datasetValueEn\":\"KeyH\",\"classList\":\"key\"},{\"keyValueEn\":\"J\",\"keyValueGr\":\"Ξ\",\"datasetValueEn\":\"KeyJ\",\"classList\":\"key\"},{\"keyValueEn\":\"K\",\"keyValueGr\":\"Κ\",\"datasetValueEn\":\"KeyK\",\"classList\":\"key\"},{\"keyValueEn\":\"L\",\"keyValueGr\":\"Λ\",\"datasetValueEn\":\"KeyL\",\"classList\":\"key\"},{\"keyValueEn\":\";\",\"keyValueGr\":\";\",\"datasetValueEn\":\"Semicolon\",\"additionalValue\":\":\",\"classList\":\"key\"},{\"keyValueEn\":\"\\'\",\"keyValueGr\":\"\\'\",\"datasetValueEn\":\"Quote\",\"additionalValue\":\"\\\\\"\",\"classList\":\"key\"},{\"keyValueEn\":\"Enter\",\"keyValueGr\":\"Enter\",\"datasetValueEn\":\"Enter\",\"classList\":[\"key\",\"key-enter\"]}],\"forthLine\":[{\"keyValueEn\":\"Shift\",\"keyValueGr\":\"Shift\",\"datasetValueEn\":\"ShiftLeft\",\"classList\":[\"key\",\"key-shift\",\"key-shift-left\"]},{\"keyValueEn\":\"Z\",\"keyValueGr\":\"Ζ\",\"datasetValueEn\":\"KeyZ\",\"classList\":\"key\"},{\"keyValueEn\":\"X\",\"keyValueGr\":\"Χ\",\"datasetValueEn\":\"KeyX\",\"classList\":\"key\"},{\"keyValueEn\":\"C\",\"keyValueGr\":\"Ψ\",\"datasetValueEn\":\"KeyC\",\"classList\":\"key\"},{\"keyValueEn\":\"V\",\"keyValueGr\":\"Ω\",\"datasetValueEn\":\"KeyV\",\"classList\":\"key\"},{\"keyValueEn\":\"B\",\"keyValueGr\":\"Β\",\"datasetValueEn\":\"KeyB\",\"classList\":\"key\"},{\"keyValueEn\":\"N\",\"keyValueGr\":\"Ν\",\"datasetValueEn\":\"KeyN\",\"classList\":\"key\"},{\"keyValueEn\":\"M\",\"keyValueGr\":\"Μ\",\"datasetValueEn\":\"KeyM\",\"classList\":\"key\"},{\"keyValueEn\":\",\",\"keyValueGr\":\",\",\"datasetValueEn\":\"Comma\",\"additionalValue\":\"<\",\"classList\":\"key\"},{\"keyValueEn\":\".\",\"keyValueGr\":\".\",\"datasetValueEn\":\"Period\",\"additionalValue\":\">\",\"classList\":\"key\"},{\"keyValueEn\":\"/\",\"keyValueGr\":\"/\",\"datasetValueEn\":\"Slash\",\"additionalValue\":\"?\",\"classList\":\"key\"},{\"keyValueEn\":\"▲\",\"keyValueGr\":\"▲\",\"datasetValueEn\":\"ArrowUp\",\"classList\":[\"key\",\"key-up\"]},{\"keyValueEn\":\"Shift\",\"keyValueGr\":\"Shift\",\"datasetValueEn\":\"ShiftRight\",\"classList\":[\"key\",\"key-shift\",\"key-shift-right\"]}],\"fifthLine\":[{\"keyValueEn\":\"Ctrl\",\"keyValueGr\":\"Ctrl\",\"datasetValueEn\":\"ControlLeft\",\"classList\":[\"key\",\"key-ctrl\",\"key-ctrl-left\"]},{\"keyValueEn\":\"Win\",\"keyValueGr\":\"Win\",\"datasetValueEn\":\"MetaLeft\",\"classList\":[\"key\",\"key-win\"]},{\"keyValueEn\":\"Alt\",\"keyValueGr\":\"Alt\",\"datasetValueEn\":\"AltLeft\",\"classList\":[\"key\",\"key-alt\",\"key-alt-left\"]},{\"keyValueEn\":\" \",\"keyValueGr\":\" \",\"datasetValueEn\":\"Space\",\"classList\":[\"key\",\"key-space\"]},{\"keyValueEn\":\"Alt\",\"keyValueGr\":\"Alt\",\"datasetValueEn\":\"AltRight\",\"classList\":[\"key\",\"key-alt\",\"key-alt-right\"]},{\"keyValueEn\":\"Ctrl\",\"keyValueGr\":\"Ctrl\",\"datasetValueEn\":\"ControlRight\",\"classList\":[\"key\",\"key-ctrl\",\"key-ctrl-right\"]},{\"keyValueEn\":\"◄\",\"keyValueGr\":\"◄\",\"datasetValueEn\":\"ArrowLeft\",\"classList\":[\"key\",\"key-left\"]},{\"keyValueEn\":\"▼\",\"keyValueGr\":\"▼\",\"datasetValueEn\":\"ArrowDown\",\"classList\":[\"key\",\"key-down\"]},{\"keyValueEn\":\"►\",\"keyValueGr\":\"►\",\"datasetValueEn\":\"ArrowRight\",\"classList\":\"key\"}]}');\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/keys.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;