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

/***/ "./dateDiff/js/getDateDiff.js":
/*!************************************!*\
  !*** ./dateDiff/js/getDateDiff.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var https_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://moment.github.io/luxon/es6/luxon.min.js */ \"https://moment.github.io/luxon/es6/luxon.min.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nfunction getDateDiff(dateFrom, dateTo) {\n\n  if (dateFrom < dateTo) {\n    [dateTo, dateFrom] = [dateFrom, dateTo];\n  }\n\n  const dateFromObject = https_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateFrom);\n  const dateToObject = https_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateTo);\n\n  return dateFromObject.diff(dateToObject, ['years', 'months', 'days']).toObject()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDateDiff);\n\n//\n\n\n\n});\n\n//# sourceURL=webpack://wp-1/./dateDiff/js/getDateDiff.js?");

/***/ }),

/***/ "./dateDiff/js/getHidden.js":
/*!**********************************!*\
  !*** ./dateDiff/js/getHidden.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHidden\": () => (/* binding */ getHidden)\n/* harmony export */ });\n\nfunction getHidden() {\n    const datecalc = document.querySelector('#datecalc');\n    const timer = document.querySelector('#timer');\n\n    datecalc.classList.toggle('active')\n    timer.classList.toggle('active')\n  }\n\n//# sourceURL=webpack://wp-1/./dateDiff/js/getHidden.js?");

/***/ }),

/***/ "./dateDiff/js/main.js":
/*!*****************************!*\
  !*** ./dateDiff/js/main.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _printResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printResult.js */ \"./dateDiff/js/printResult.js\");\n/* harmony import */ var _getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDateDiff.js */ \"./dateDiff/js/getDateDiff.js\");\n/* harmony import */ var _getHidden_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getHidden.js */ \"./dateDiff/js/getHidden.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.js */ \"./dateDiff/js/timer.js\");\n/* harmony import */ var _test_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../test.png */ \"./test.png\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/style.css */ \"./styles/style.css\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__]);\n_getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst form = document.getElementById('datecalc');\n\nform.onsubmit = (event) => {\n  event.preventDefault();\n\n  const formData = new FormData(event.target);\n\n  const firstDate = formData.get('firstDate');\n  const secondDate = formData.get('secondDate');\n\n  if (!firstDate || !secondDate) {\n    (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printError)('Ooopps - введите дату')\n  } else {\n    const dateDiff = (0,_getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(firstDate, secondDate);\n    (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)(dateDiff);\n  }\n};\n\n// home task 1\n\ndocument.querySelector('body').addEventListener('click', (event) => {\n  if ( (event.target.parentElement.classList.contains('switch-button')) && (event.target.classList == 'timer--btn' || 'calc--btn')) {\n    (0,_getHidden_js__WEBPACK_IMPORTED_MODULE_2__.getHidden)();\n  } else {\n    return\n  }\n});\n\n// timer\n\ndocument.getElementById(\"start\").addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  (0,_timer_js__WEBPACK_IMPORTED_MODULE_3__.startInterval)();\n});\ndocument.getElementById(\"stop\").addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  (0,_timer_js__WEBPACK_IMPORTED_MODULE_3__.stopInterval)();\n});\n\n});\n\n//# sourceURL=webpack://wp-1/./dateDiff/js/main.js?");

/***/ }),

/***/ "./dateDiff/js/printResult.js":
/*!************************************!*\
  !*** ./dateDiff/js/printResult.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printError\": () => (/* binding */ printError),\n/* harmony export */   \"printResult\": () => (/* binding */ printResult)\n/* harmony export */ });\nconst result = document.getElementById('datecalc__result');\n\nconst printError = (errorText) => {\n  result.innerText = errorText;\n}\n\nfunction printResult({years, months, days}) {\n  result.innerHTML = `Год: ${years} - Месяц: ${months} - День: ${days}`;\n}\n\n//# sourceURL=webpack://wp-1/./dateDiff/js/printResult.js?");

/***/ }),

/***/ "./dateDiff/js/timer.js":
/*!******************************!*\
  !*** ./dateDiff/js/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startInterval\": () => (/* binding */ startInterval),\n/* harmony export */   \"stopInterval\": () => (/* binding */ stopInterval)\n/* harmony export */ });\n\n\nconst timerDisplay = document.querySelector('.timer__display');\n\nlet timerInput = document.getElementById(\"time\");\n\nlet timer = null;\n\nfunction startInterval(time) {\n    time = timerInput.value;\n    timer = setInterval(function() {\n        if (time < 1) {\n          clearInterval(timer);\n          console.log(`Время вышло`);\n        } else if (time <= 5) {\n          console.log(`Осталось ${time}`);\n        }\n        timerDisplay.textContent = time;\n      --time;\n    }, 1000);\n  }\n\nfunction stopInterval() {\n    \n    clearInterval(timer);\n  }  \n\n\n//# sourceURL=webpack://wp-1/./dateDiff/js/timer.js?");

/***/ }),

/***/ "./test.png":
/*!******************!*\
  !*** ./test.png ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"test.png\");\n\n//# sourceURL=webpack://wp-1/./test.png?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wp-1/./styles/style.css?");

/***/ }),

/***/ "https://moment.github.io/luxon/es6/luxon.min.js":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dateDiff/js/main.js");
/******/ 	
/******/ })()
;