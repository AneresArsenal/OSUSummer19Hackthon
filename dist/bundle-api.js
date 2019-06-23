/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/api.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_cat_facts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/cat-facts.js */ \"./js/api/cat-facts.js\");\n/* harmony import */ var _api_jservice_trivia_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/jservice-trivia.js */ \"./js/api/jservice-trivia.js\");\n/* harmony import */ var _api_history_facts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/history-facts.js */ \"./js/api/history-facts.js\");\n\n\n //Prompt the user for which API they would like to user\n\nfunction select_api() {\n  var apiModal = document.getElementById('apiModal');\n  $('#apiModal').modal('show'); //Listen for which modal they click on\n\n  $('#apiModal').click(function (event) {\n    //Determine which API was clicked and return function to use\n    var clicked = event.target.closest('span');\n\n    switch (clicked.id) {\n      case 'cat-facts-select':\n        $('#apiModal').modal('hide');\n        return Object(_api_cat_facts_js__WEBPACK_IMPORTED_MODULE_0__[\"getCatFact\"])();\n        break;\n\n      case 'history-facts-select':\n        $('#apiModal').modal('hide');\n        return Object(_api_history_facts_js__WEBPACK_IMPORTED_MODULE_2__[\"getHistoryFact\"])();\n        break;\n\n      case 'general-trivia-select':\n        $('#apiModal').modal('hide');\n        return Object(_api_jservice_trivia_js__WEBPACK_IMPORTED_MODULE_1__[\"getTrivia\"])();\n        break;\n\n      default:\n        break;\n    }\n  });\n} //Store selection and listen for completion of pomodoro session\n\n\nvar selected_api = window.addEventListener('DOMContentLoaded', select_api);\n\n//# sourceURL=webpack:///./js/api.js?");

/***/ }),

/***/ "./js/api/cat-facts.js":
/*!*****************************!*\
  !*** ./js/api/cat-facts.js ***!
  \*****************************/
/*! exports provided: getCatFact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCatFact\", function() { return getCatFact; });\nfunction getCatFact() {\n  var baseUrl = 'https://cat-fact.herokuapp.com';\n  fetch(baseUrl + '/facts/random').then(function (response) {\n    return response.json();\n  }).then(function (response) {\n    return resolve(response.text);\n  })[\"catch\"](function (error) {\n    return console.error('Error:', error);\n  });\n}\n\n//# sourceURL=webpack:///./js/api/cat-facts.js?");

/***/ }),

/***/ "./js/api/history-facts.js":
/*!*********************************!*\
  !*** ./js/api/history-facts.js ***!
  \*********************************/
/*! exports provided: getHistoryFact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHistoryFact\", function() { return getHistoryFact; });\nfunction getHistoryFact() {\n  var baseUrl = 'http://numbersapi.com';\n  fetch(baseUrl + '/random/year').then(function (response) {\n    return response.json();\n  }).then(function (response) {\n    return resolve(response);\n  })[\"catch\"](function (error) {\n    return console.error('Error:', error);\n  });\n}\n\n//# sourceURL=webpack:///./js/api/history-facts.js?");

/***/ }),

/***/ "./js/api/jservice-trivia.js":
/*!***********************************!*\
  !*** ./js/api/jservice-trivia.js ***!
  \***********************************/
/*! exports provided: getTrivia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTrivia\", function() { return getTrivia; });\nfunction getTrivia() {\n  var baseUrl = 'http://jservice.io';\n  fetch(baseUrl + '/api/random').then(function (response) {\n    return response.json();\n  }).then(function (response) {\n    return resolve({\n      question: response.question,\n      answer: response.answer,\n      category: response.category.title\n    });\n  })[\"catch\"](function (error) {\n    return console.error('Error:', error);\n  });\n}\n\n//# sourceURL=webpack:///./js/api/jservice-trivia.js?");

/***/ })

/******/ });