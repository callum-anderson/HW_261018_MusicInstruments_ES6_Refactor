(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./client/src/views/instrument_family_view.js":
/*!****************************************************!*\
  !*** ./client/src/views/instrument_family_view.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PubSub = __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\", 7));\n\nclass InstrumentFamilyView {\n  constructor(container) {\n    this.container = container;\n  }\n\n  bindEvents() {\n    PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {\n      const instrumentFamily = evt.detail;\n      this.render(instrumentFamily);\n    });\n  };\n\n  render(family) {\n    this.container.innerHTML = '';\n\n    const familyName = this.createElement('h2', family.name);\n    this.container.appendChild(familyName);\n\n    const familyDescription = this.createElement('p', family.description);\n    this.container.appendChild(familyDescription);\n\n    const instrumentListTitle = this.createElement('h3', 'Instruments include:');\n    this.container.appendChild(instrumentListTitle);\n\n    const instrumentList = this.createInstrumentList(family.instruments);\n    this.container.appendChild(instrumentList);\n  };\n\n  createElement(elementType, text) {\n    const element = document.createElement(elementType);\n    element.textContent = text;\n    return element;\n  };\n\n  createInstrumentList(instruments) {\n    const list = document.createElement('ul');\n\n    instruments.forEach((instrument) => {\n      const listItem = document.createElement('li');\n      listItem.textContent = instrument;\n      list.appendChild(listItem);\n    });\n\n    return list;\n  };\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstrumentFamilyView);\n\n\n//# sourceURL=webpack:///./client/src/views/instrument_family_view.js?");

/***/ })

}]);