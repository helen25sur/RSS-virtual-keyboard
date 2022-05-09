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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _scripts_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/template */ \"./src/scripts/template.js\");\n/* harmony import */ var _scripts_functionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/functionality */ \"./src/scripts/functionality.js\");\n\n\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/scripts/functionality.js":
/*!**************************************!*\
  !*** ./src/scripts/functionality.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.json */ \"./src/scripts/keys.json\");\n\r\n\r\n// create localStorage\r\nconst storage = window.localStorage;\r\nif (storage.getItem('lang') === null) {\r\n  storage.setItem('lang', 'En');\r\n}\r\n\r\nconst keys = document.querySelectorAll('.key');\r\nconst textarea = document.body.querySelector('.keyboard-text');\r\nconst keyboard = document.body.querySelector('.keyboard');\r\n\r\nfunction behaviorKeys(forSwitch, item, textarea) {\r\n  const selectStart = textarea.selectionStart;\r\n  if (event.shiftKey) {\r\n    item.classList.add('text-transform');\r\n  } else {\r\n    item.classList.remove('text-transform');\r\n  }\r\n  switch (forSwitch) {\r\n    case 'Backspace':\r\n      textarea.value = textarea.value.substr(0, selectStart - 1) + textarea.value.substr(selectStart);\r\n      textarea.selectionEnd = selectStart - 1;\r\n      break;\r\n    case 'Delete':\r\n      textarea.value = textarea.value.substr(0, selectStart) + textarea.value.substr(selectStart + 1);\r\n      textarea.selectionEnd = selectStart;\r\n      break;\r\n    case 'Space':\r\n      textarea.value = textarea.value.substr(0, selectStart) + ' ' + textarea.value.substr(selectStart);\r\n      textarea.selectionEnd = selectStart + 1;\r\n      break;\r\n    case 'Tab':\r\n      textarea.value = textarea.value.substr(0, selectStart) + '\\t' + textarea.value.substr(selectStart);\r\n      textarea.selectionEnd = selectStart + 1;\r\n      break;\r\n    case 'ShiftLeft':\r\n    case 'ShiftRight':\r\n    case 'ControlLeft':\r\n    case 'MetaLeft':\r\n    case 'AltLeft':\r\n    case 'AltRight':\r\n    case 'ControlRight':\r\n    case 'ArrowUp':\r\n    case 'ArrowDown':\r\n    case 'ArrowRight':\r\n    case 'ArrowLeft':\r\n      textarea.value += '';\r\n      break;\r\n    case 'CapsLock':\r\n      keys.forEach(keyItem => {\r\n        keyItem.classList.toggle('text-transform');\r\n        if (keyItem.classList.contains('text-transform')) {\r\n          keys.forEach(key => {\r\n            key.querySelector('span').innerText.toUpperCase();\r\n          });\r\n        } else {\r\n          keys.forEach(key => {\r\n            key.querySelector('span').innerText.toLowerCase();\r\n          });\r\n        }\r\n      });\r\n      break;\r\n    case 'Enter':\r\n      textarea.value = textarea.value.substr(0, textarea.selectionStart) + '\\n' + textarea.value.substr(textarea.selectionStart);\r\n      textarea.selectionEnd = selectStart + 1;\r\n      break;\r\n\r\n    default:\r\n      if (item.querySelector('.special-symbol') !== null && event.shiftKey) {\r\n        textarea.value = textarea.value.substr(0, textarea.selectionStart) + item.querySelector('.special-symbol').innerText + textarea.value.substr(textarea.selectionStart);\r\n        textarea.selectionEnd = selectStart + 1;\r\n      } else {\r\n        textarea.value = textarea.value.substr(0, textarea.selectionStart) + item.querySelector('.key-value').innerText + textarea.value.substr(textarea.selectionStart);\r\n        textarea.selectionEnd = selectStart + 1;\r\n      }\r\n      break;\r\n  }\r\n}\r\n// keyboard's events\r\nconst defaultKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Escape', 'Numpad9', 'Numpad3', 'Numpad7', 'Numpad1'];\r\n\r\nwindow.addEventListener('keydown', (event) => {\r\n  let lang = storage.getItem('lang');\r\n  if (!defaultKeys.includes(event.code)) {\r\n    event.preventDefault();\r\n  }\r\n  textarea.focus();\r\n  const valueDataset = `value${lang}`;\r\n  keys.forEach(k => {\r\n    if (k.dataset[valueDataset] === event.code) {\r\n      k.classList.add('active');\r\n      k.classList.remove('remove');\r\n\r\n      behaviorKeys(event.code, k, textarea);\r\n    }\r\n\r\n    // switcher languages\r\n    if (k.dataset[valueDataset] === 'AltLeft' && event.ctrlKey && event.altKey) {\r\n      if (storage.getItem('lang') === 'En') {\r\n        storage.removeItem('lang');\r\n        storage.setItem('lang', 'Gr');\r\n      } else if (storage.getItem('lang') === 'Gr') {\r\n        storage.removeItem('lang');\r\n        storage.setItem('lang', 'En');\r\n      }\r\n      keys.forEach(item => {\r\n        lang = storage.getItem('lang');\r\n        for (const line in _keys_json__WEBPACK_IMPORTED_MODULE_0__) {\r\n          _keys_json__WEBPACK_IMPORTED_MODULE_0__[line].forEach(symbol => {\r\n            if (symbol['datasetValueEn'] === item.dataset.valueEn) {\r\n              item.querySelector('.key-value').innerText = symbol[`keyValue${lang}`];\r\n            }\r\n          })\r\n        }\r\n      })\r\n    }\r\n  })\r\n});\r\n\r\nwindow.addEventListener('keyup', (event) => {\r\n  let lang = storage.getItem('lang');\r\n  const valueDataset = `value${lang}`;\r\n  keys.forEach(k => {\r\n    if (k.dataset[valueDataset] === event.code) {\r\n      k.classList.add('remove');\r\n      k.classList.remove('active');\r\n      if (event.shiftKey) {\r\n        k.classList.remove('text-transform');\r\n      }\r\n    } else {\r\n      k.classList.remove('remove');\r\n    }\r\n  })\r\n});\r\n\r\n// mouse's events\r\nkeyboard.addEventListener('mousedown', (event) => {\r\n  let lang = storage.getItem('lang');\r\n  const target = event.target.closest('.key[data-value-en]');\r\n  const valueDataset = `value${lang}`;\r\n  textarea.focus();\r\n  keys.forEach(k => {\r\n    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {\r\n      k.classList.add('active');\r\n      k.classList.remove('remove');\r\n\r\n      behaviorKeys(target.dataset[valueDataset], k, textarea);\r\n\r\n\r\n    } else {\r\n      k.classList.remove('active');\r\n    }\r\n  })\r\n});\r\n\r\nkeyboard.addEventListener('mouseup', (event) => {\r\n  let lang = storage.getItem('lang');\r\n  const valueDataset = `value${lang}`;\r\n  const target = event.target.closest('.key[data-value-en]');\r\n  keys.forEach(k => {\r\n    if (target !== null && k.dataset[valueDataset] === target.dataset[valueDataset]) {\r\n      k.classList.add('remove');\r\n      k.classList.remove('active');\r\n    } else {\r\n      k.classList.remove('remove');\r\n    }\r\n  })\r\n});\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/functionality.js?");

/***/ }),

/***/ "./src/scripts/template.js":
/*!*********************************!*\
  !*** ./src/scripts/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.json */ \"./src/scripts/keys.json\");\n\r\n\r\nfunction createElement(name, classNames) {\r\n  const element = document.createElement(name);\r\n  if (Array.isArray(classNames)) {\r\n    classNames.forEach(item => {\r\n      element.classList.add(item);\r\n    })\r\n  } else {\r\n    element.classList.add(classNames);\r\n  }\r\n  return element;\r\n}\r\n\r\nconst main = createElement('main', 'main-content');\r\n\r\nconst title = createElement('h1', 'main-title');\r\ntitle.innerText = 'Virtual Keyboard (RS School)';\r\nmain.append(title);\r\n\r\nconst wrapperTextarea = createElement('div', 'wrapper-textarea');\r\nconst textarea = createElement('textarea', 'keyboard-text');\r\ntextarea.setAttribute('autofocus', 'true');\r\nwrapperTextarea.append(textarea);\r\n\r\nconst wrapperKeyboard = createElement('div', 'wrapper-keyboard');\r\nconst keyboard = createElement('div', 'keyboard');\r\nwrapperKeyboard.append(keyboard);\r\n\r\nfor (const value in _keys_json__WEBPACK_IMPORTED_MODULE_0__) {\r\n  let lang = localStorage.getItem('lang');\r\n  const line = createElement('div', 'keyboard-line');\r\n  _keys_json__WEBPACK_IMPORTED_MODULE_0__[value].forEach(item => {\r\n    const key = createElement('div', item.classList);\r\n    key.dataset.valueEn = item.datasetValueEn;\r\n    key.dataset.valueGr = item.datasetValueGr !== undefined ? item.datasetValueGr : item.datasetValueEn;\r\n\r\n    const keyV = createElement('span', 'key-value');\r\n    keyV.innerText = item[`keyValue${lang}`];\r\n    if (item.additionalValue !== undefined) {\r\n      key.innerHTML += `<span class=\"special-symbol\">${item.additionalValue}</span>`;\r\n    }\r\n    key.append(keyV);\r\n    line.append(key);\r\n  })\r\n  keyboard.append(line);\r\n}\r\n\r\nconst pDescr = createElement('p', 'description');\r\npDescr.innerHTML = 'Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt';\r\n\r\nmain.append(wrapperTextarea);\r\nmain.append(wrapperKeyboard);\r\nmain.append(pDescr);\r\n\r\ndocument.body.append(main);\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/template.js?");

/***/ }),

/***/ "./src/scripts/keys.json":
/*!*******************************!*\
  !*** ./src/scripts/keys.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"firstLine\":[{\"keyValueEn\":\"`\",\"keyValueGr\":\"`\",\"datasetValueEn\":\"Backquote\",\"additionalValue\":\"~\",\"classList\":\"key\"},{\"keyValueEn\":\"1\",\"keyValueGr\":\"1\",\"datasetValueEn\":\"Digit1\",\"additionalValue\":\"!\",\"classList\":\"key\"},{\"keyValueEn\":\"2\",\"keyValueGr\":\"2\",\"datasetValueEn\":\"Digit2\",\"additionalValue\":\"@\",\"classList\":\"key\"},{\"keyValueEn\":\"3\",\"keyValueGr\":\"3\",\"datasetValueEn\":\"Digit3\",\"additionalValue\":\"#\",\"classList\":\"key\"},{\"keyValueEn\":\"4\",\"keyValueGr\":\"4\",\"datasetValueEn\":\"Digit4\",\"additionalValue\":\"$\",\"classList\":\"key\"},{\"keyValueEn\":\"5\",\"keyValueGr\":\"5\",\"datasetValueEn\":\"Digit5\",\"additionalValue\":\"%\",\"classList\":\"key\"},{\"keyValueEn\":\"6\",\"keyValueGr\":\"6\",\"datasetValueEn\":\"Digit6\",\"additionalValue\":\"^\",\"classList\":\"key\"},{\"keyValueEn\":\"7\",\"keyValueGr\":\"7\",\"datasetValueEn\":\"Digit7\",\"additionalValue\":\"&\",\"classList\":\"key\"},{\"keyValueEn\":\"8\",\"keyValueGr\":\"8\",\"datasetValueEn\":\"Digit8\",\"additionalValue\":\"*\",\"classList\":\"key\"},{\"keyValueEn\":\"9\",\"keyValueGr\":\"9\",\"datasetValueEn\":\"Digit9\",\"additionalValue\":\"(\",\"classList\":\"key\"},{\"keyValueEn\":\"0\",\"keyValueGr\":\"0\",\"datasetValueEn\":\"Digit0\",\"additionalValue\":\")\",\"classList\":\"key\"},{\"keyValueEn\":\"-\",\"keyValueGr\":\"-\",\"datasetValueEn\":\"Minus\",\"additionalValue\":\"_\",\"classList\":\"key\"},{\"keyValueEn\":\"=\",\"keyValueGr\":\"=\",\"datasetValueEn\":\"Equal\",\"additionalValue\":\"+\",\"classList\":\"key\"},{\"keyValueEn\":\"Backspace\",\"keyValueGr\":\"Backspace\",\"datasetValueEn\":\"Backspace\",\"classList\":[\"key\",\"key-backspace\"]}],\"secondLine\":[{\"keyValueEn\":\"Tab\",\"keyValueGr\":\"Tab\",\"datasetValueEn\":\"Tab\",\"classList\":[\"key\",\"key-tab\"]},{\"keyValueEn\":\"Q\",\"keyValueGr\":\";\",\"datasetValueEn\":\"KeyQ\",\"datasetValueGr\":\"Semicolon\",\"classList\":\"key\"},{\"keyValueEn\":\"W\",\"keyValueGr\":\"ς\",\"datasetValueEn\":\"KeyW\",\"datasetValueGr\":\"KeyS\",\"classList\":\"key\"},{\"keyValueEn\":\"E\",\"keyValueGr\":\"Ε\",\"datasetValueEn\":\"KeyE\",\"classList\":\"key\"},{\"keyValueEn\":\"R\",\"keyValueGr\":\"Ρ\",\"datasetValueEn\":\"KeyR\",\"classList\":\"key\"},{\"keyValueEn\":\"T\",\"keyValueGr\":\"Τ\",\"datasetValueEn\":\"KeyT\",\"classList\":\"key\"},{\"keyValueEn\":\"Y\",\"keyValueGr\":\"Υ\",\"datasetValueEn\":\"KeyY\",\"classList\":\"key\"},{\"keyValueEn\":\"U\",\"keyValueGr\":\"Θ\",\"datasetValueEn\":\"KeyU\",\"classList\":\"key\"},{\"keyValueEn\":\"I\",\"keyValueGr\":\"Ι\",\"datasetValueEn\":\"KeyI\",\"classList\":\"key\"},{\"keyValueEn\":\"O\",\"keyValueGr\":\"Ο\",\"datasetValueEn\":\"KeyO\",\"classList\":\"key\"},{\"keyValueEn\":\"P\",\"keyValueGr\":\"Π\",\"datasetValueEn\":\"KeyP\",\"classList\":\"key\"},{\"keyValueEn\":\"[\",\"keyValueGr\":\"[\",\"datasetValueEn\":\"BracketLeft\",\"additionalValue\":\"{\",\"classList\":\"key\"},{\"keyValueEn\":\"]\",\"keyValueGr\":\"]\",\"datasetValueEn\":\"BracketRight\",\"additionalValue\":\"}\",\"classList\":\"key\"},{\"keyValueEn\":\"\\\\\\\\\",\"keyValueGr\":\"\\\\\\\\\",\"datasetValueEn\":\"Backslash\",\"additionalValue\":\"|\",\"classList\":\"key\"},{\"keyValueEn\":\"Del\",\"keyValueGr\":\"Del\",\"datasetValueEn\":\"Delete\",\"classList\":[\"key\",\"key-delete\"]}],\"thirdLine\":[{\"keyValueEn\":\"Caps Lock\",\"keyValueGr\":\"Caps Lock\",\"datasetValueEn\":\"CapsLock\",\"classList\":[\"key\",\"key-caps\"]},{\"keyValueEn\":\"A\",\"keyValueGr\":\"Α\",\"datasetValueEn\":\"KeyA\",\"classList\":\"key\"},{\"keyValueEn\":\"S\",\"keyValueGr\":\"Σ\",\"datasetValueEn\":\"KeyS\",\"classList\":\"key\"},{\"keyValueEn\":\"D\",\"keyValueGr\":\"Δ\",\"datasetValueEn\":\"KeyD\",\"classList\":\"key\"},{\"keyValueEn\":\"F\",\"keyValueGr\":\"Φ\",\"datasetValueEn\":\"KeyF\",\"classList\":\"key\"},{\"keyValueEn\":\"G\",\"keyValueGr\":\"Γ\",\"datasetValueEn\":\"KeyG\",\"classList\":\"key\"},{\"keyValueEn\":\"H\",\"keyValueGr\":\"Η\",\"datasetValueEn\":\"KeyH\",\"classList\":\"key\"},{\"keyValueEn\":\"J\",\"keyValueGr\":\"Ξ\",\"datasetValueEn\":\"KeyJ\",\"classList\":\"key\"},{\"keyValueEn\":\"K\",\"keyValueGr\":\"Κ\",\"datasetValueEn\":\"KeyK\",\"classList\":\"key\"},{\"keyValueEn\":\"L\",\"keyValueGr\":\"Λ\",\"datasetValueEn\":\"KeyL\",\"classList\":\"key\"},{\"keyValueEn\":\";\",\"keyValueGr\":\";\",\"datasetValueEn\":\"Semicolon\",\"additionalValue\":\":\",\"classList\":\"key\"},{\"keyValueEn\":\"\\'\",\"keyValueGr\":\"\\'\",\"datasetValueEn\":\"Quote\",\"additionalValue\":\"\\\\\"\",\"classList\":\"key\"},{\"keyValueEn\":\"Enter\",\"keyValueGr\":\"Enter\",\"datasetValueEn\":\"Enter\",\"classList\":[\"key\",\"key-enter\"]}],\"forthLine\":[{\"keyValueEn\":\"Shift\",\"keyValueGr\":\"Shift\",\"datasetValueEn\":\"ShiftLeft\",\"classList\":[\"key\",\"key-shift\",\"key-shift-left\"]},{\"keyValueEn\":\"Z\",\"keyValueGr\":\"Ζ\",\"datasetValueEn\":\"KeyZ\",\"classList\":\"key\"},{\"keyValueEn\":\"X\",\"keyValueGr\":\"Χ\",\"datasetValueEn\":\"KeyX\",\"classList\":\"key\"},{\"keyValueEn\":\"C\",\"keyValueGr\":\"Ψ\",\"datasetValueEn\":\"KeyC\",\"classList\":\"key\"},{\"keyValueEn\":\"V\",\"keyValueGr\":\"Ω\",\"datasetValueEn\":\"KeyV\",\"classList\":\"key\"},{\"keyValueEn\":\"B\",\"keyValueGr\":\"Β\",\"datasetValueEn\":\"KeyB\",\"classList\":\"key\"},{\"keyValueEn\":\"N\",\"keyValueGr\":\"Ν\",\"datasetValueEn\":\"KeyN\",\"classList\":\"key\"},{\"keyValueEn\":\"M\",\"keyValueGr\":\"Μ\",\"datasetValueEn\":\"KeyM\",\"classList\":\"key\"},{\"keyValueEn\":\",\",\"keyValueGr\":\",\",\"datasetValueEn\":\"Comma\",\"additionalValue\":\"<\",\"classList\":\"key\"},{\"keyValueEn\":\".\",\"keyValueGr\":\".\",\"datasetValueEn\":\"Period\",\"additionalValue\":\">\",\"classList\":\"key\"},{\"keyValueEn\":\"/\",\"keyValueGr\":\"/\",\"datasetValueEn\":\"Slash\",\"additionalValue\":\"?\",\"classList\":\"key\"},{\"keyValueEn\":\"▲\",\"keyValueGr\":\"▲\",\"datasetValueEn\":\"ArrowUp\",\"classList\":[\"key\",\"key-up\"]},{\"keyValueEn\":\"Shift\",\"keyValueGr\":\"Shift\",\"datasetValueEn\":\"ShiftRight\",\"classList\":[\"key\",\"key-shift\",\"key-shift-right\"]}],\"fifthLine\":[{\"keyValueEn\":\"Ctrl\",\"keyValueGr\":\"Ctrl\",\"datasetValueEn\":\"ControlLeft\",\"classList\":[\"key\",\"key-ctrl\",\"key-ctrl-left\"]},{\"keyValueEn\":\"Win\",\"keyValueGr\":\"Win\",\"datasetValueEn\":\"MetaLeft\",\"classList\":[\"key\",\"key-win\"]},{\"keyValueEn\":\"Alt\",\"keyValueGr\":\"Alt\",\"datasetValueEn\":\"AltLeft\",\"classList\":[\"key\",\"key-alt\",\"key-alt-left\"]},{\"keyValueEn\":\" \",\"keyValueGr\":\" \",\"datasetValueEn\":\"Space\",\"classList\":[\"key\",\"key-space\"]},{\"keyValueEn\":\"Alt\",\"keyValueGr\":\"Alt\",\"datasetValueEn\":\"AltRight\",\"classList\":[\"key\",\"key-alt\",\"key-alt-right\"]},{\"keyValueEn\":\"Ctrl\",\"keyValueGr\":\"Ctrl\",\"datasetValueEn\":\"ControlRight\",\"classList\":[\"key\",\"key-ctrl\",\"key-ctrl-right\"]},{\"keyValueEn\":\"◄\",\"keyValueGr\":\"◄\",\"datasetValueEn\":\"ArrowLeft\",\"classList\":[\"key\",\"key-left\"]},{\"keyValueEn\":\"▼\",\"keyValueGr\":\"▼\",\"datasetValueEn\":\"ArrowDown\",\"classList\":[\"key\",\"key-down\"]},{\"keyValueEn\":\"►\",\"keyValueGr\":\"►\",\"datasetValueEn\":\"ArrowRight\",\"classList\":\"key\"}]}');\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/keys.json?");

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