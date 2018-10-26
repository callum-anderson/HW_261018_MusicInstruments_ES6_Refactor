(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/src/views/select_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/select_view.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PubSub = __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\", 7));\n\nclass SelectView {\n  constructor(element) {\n    this.element = element;\n  }\n\n  bindEvents() {\n    PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {\n      const allInstrumentFamilies = evt.detail;\n      this.populate(allInstrumentFamilies);\n    });\n\n    this.element.addEventListener('change', (evt) => {\n      const selectedIndex = evt.target.value;\n      PubSub.publish('SelectView:change', selectedIndex);\n    });\n  };\n\n  populate(instrumentFamilyData) {\n    instrumentFamilyData.forEach((familiy, index) => {\n      const option = document.createElement('option');\n      option.textContent = familiy.name;\n      option.value = index;\n      this.element.appendChild(option);\n    });\n  };\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectView);\n\n\n//# sourceURL=webpack:///./client/src/views/select_view.js?");

/***/ })

}]);