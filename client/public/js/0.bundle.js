(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/src/models/instrument_families.js":
/*!**************************************************!*\
  !*** ./client/src/models/instrument_families.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PubSub = __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\", 7));\n\nclass InstrumentFamilies {\n  constructor (data) {\n    this.data = data;\n  }\n\n  bindEvents() {\n    PubSub.publish('InstrumentFamilies:data-ready', this.data);\n\n    PubSub.subscribe('SelectView:change', (evt) => {\n      const selectedIndex = evt.detail;\n      this.publishFamilyDetail(selectedIndex);\n    });\n  };\n\n  publishFamilyDetail(selectedIndex) {\n    const selectedFamily = this.data[selectedIndex];\n    PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstrumentFamilies);\n\n\n//# sourceURL=webpack:///./client/src/models/instrument_families.js?");

/***/ })

}]);