/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.png */ "./src/img/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover; }\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,yDAA2C;EAC3C,4BAA2B;EAC3B,sBAAsB,EAAA","sourcesContent":["body {\r\n  margin: 0;\r\n  background-image: url(./img/background.png);\r\n  background-repeat:no-repeat;\r\n  background-size: cover;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5231fcb75b0cad962b03.png";

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb4d6a782b9cecb2dd3e.png";

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bbc82cf263a1557a175.png";

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c67ea51444aafa9bdcd5.png";

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2f75989924952a7e49c.png";

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11514f48f22f6d8e3cf7.png";

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01e8f15e899155c68950.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }









var htmlCanvas = document.getElementById("canvas");
var canvas = htmlCanvas.getContext("2d");
htmlCanvas.width = window.innerWidth - 4;
htmlCanvas.height = window.innerHeight - 4;
window.addEventListener("resize", function () {
  htmlCanvas.width = window.innerWidth - 4;
  htmlCanvas.height = window.innerHeight - 4;
  init();
});
window.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
var center = {
  x: htmlCanvas.width / 2,
  y: htmlCanvas.height / 2
};
var mouse = {
  x: htmlCanvas.width / 2,
  y: htmlCanvas.height / 2
};
var globalGravity = 0.5; // Переключатели событий true false на кнопках awd.

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  top: {
    pressed: false
  },
  down: {
    pressed: false
  }
};

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 50,
      y: center.y - 150
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.size = {
      width: 65,
      height: 150
    };
    this.speed = 5;
    this.img = standRight;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: standRight,
        left: standLeft,
        cropWidth: 177,
        width: 66
      },
      run: {
        right: runRight,
        left: runLeft,
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSptire = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      canvas.drawImage(this.currentSptire, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 29 && this.currentSptire === this.sprites.run.right) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSptire === this.sprites.run.left) {
        this.frames = 0;
      } else if (this.frames > 59 && this.currentSptire === this.sprites.stand.left) {
        this.frames = 0;
      } else if (this.frames > 59 && this.currentSptire === this.sprites.stand.right) {
        this.frames = 0;
      }

      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.size.height + this.velocity.y < htmlCanvas.height) {
        this.velocity.y += globalGravity;
      } else {// this.velocity.y = 0;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        img = _ref.img;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y - Math.random() * 200 - 100
    };
    this.size = {
      width: Math.random() * 200 + 150,
      height: 100
    };
    this.img = img;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      canvas.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }]);

  return Platform;
}();

var GenericObjects = /*#__PURE__*/function () {
  function GenericObjects(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        img = _ref2.img;

    _classCallCheck(this, GenericObjects);

    this.position = {
      x: x,
      y: y
    };
    this.size = {
      width: img.width,
      height: img.height
    };
    this.img = img;
  }

  _createClass(GenericObjects, [{
    key: "draw",
    value: function draw() {
      canvas.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }]);

  return GenericObjects;
}(); // HTML изображения.


var standRight = new Image();
standRight.src = _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__;
var standLeft = new Image();
standLeft.src = _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__;
var runRight = new Image();
runRight.src = _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__;
var runLeft = new Image();
runLeft.src = _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_7__;
var imgBackground = new Image();
imgBackground.src = _img_background_png__WEBPACK_IMPORTED_MODULE_1__;
var imgHills = new Image();
imgHills.src = _img_hills_png__WEBPACK_IMPORTED_MODULE_2__;
var imgPlatform = new Image();
imgPlatform.src = _img_platform_png__WEBPACK_IMPORTED_MODULE_3__; // Игрок, Массив плфторм и статического окружения и подсчета очков прокрутки.

var player = new Player();
var platforms = [];
var genericObjects = [];
var scrollOffSet = 0; // Создание вводных данных игры.

function init() {
  var getObjHillsNum = 10;
  var XGenObj = 0;
  var YGenObj = htmlCanvas.height - imgHills.height + 100; //

  for (var i = 0; i < getObjHillsNum; i++) {
    genericObjects.push(new GenericObjects({
      x: XGenObj,
      y: YGenObj,
      img: imgHills
    }));
    XGenObj += imgHills.width * 2;
  } // Вводные данные для платформ.


  var platformNum = 30;
  var XPlatform = 0;
  var YPlatform = htmlCanvas.height - 100; // Добавление блоков платформы. 1-100/4.

  for (var _i = 0; _i < platformNum; _i++) {
    if (_i % 2 === 0 && _i > 1) {
      platforms.splice(_i - 1, 1);
    } else {
      platforms.push(new Platform({
        x: XPlatform,
        y: YPlatform,
        img: imgPlatform
      }));
    }

    XPlatform += 220;
  }
}

function animate() {
  requestAnimationFrame(animate);
  canvas.clearRect(0, 0, htmlCanvas.width, htmlCanvas.height); // Отрисовка окружения.

  genericObjects.forEach(function (object) {
    object.draw();
  }); // Отрисовка платформ.

  platforms.forEach(function (platform) {
    platform.draw();
  }); // Отрисовка персонажа.

  player.update(); // Движение персонажа 300 - htmlCanvas.width / 2 и параллакс платформ и заднего фона.

  if (keys.right.pressed && player.position.x < htmlCanvas.width / 2) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 300) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (object) {
        object.position.x -= player.speed * 0.66;
      });
      scrollOffSet += 5;
    } else if (keys.left.pressed) {
      scrollOffSet -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (object) {
        object.position.x += player.speed * 0.66;
      });
      scrollOffSet -= 5;
    } // console.log(scrollOffSet);

  } // Определение коллизий.


  platforms.forEach(function (platform) {
    if ( // Сравнение высоты квадрата с поверхностью платформы.
    player.position.y + player.size.height <= platform.position.y && // Сравнение высоты квадрата с поверхностью платформы с учетом ускорения.
    player.position.y + player.size.height + player.velocity.y >= platform.position.y && // Позиция сравнения правого края квадрата с левым краем платформы.
    player.position.x + player.size.width >= platform.position.x && // Позиция сравнения левого края квадрата с правым краем платформы.
    player.position.x <= platform.position.x + platform.size.width) {
      player.velocity.y = 0;
    }
  }); // Общий счет.

  if (scrollOffSet >= 4950) {
    console.log("You win!");
  } // Обновление игры.


  if (player.position.y > htmlCanvas.height) {
    platforms = [];
    genericObjects = [];
    scrollOffSet = 0;
    init();
    player.position.x = 100;
    player.position.y = 250;
  }
}

animate();
init();
window.addEventListener("keydown", function (_ref3) {
  var code = _ref3.code;

  switch (code) {
    case "KeyA":
      console.log("leftDown");
      keys.left.pressed = true;
      player.currentSptire = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.size.width = player.sprites.run.width;
      break;

    case "KeyD":
      console.log("rightDown");
      keys.right.pressed = true;
      player.currentSptire = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.size.width = player.sprites.run.width;
      break;

    case "KeyW":
      console.log("topDown");

      if (player.velocity.y === 0) {
        player.velocity.y = -15;
      }

      break;

    case "KeyS":
      console.log("downDown");
      break;

    default:
      console.log("unknown key");
      break;
  }
});
window.addEventListener("keyup", function (_ref4) {
  var code = _ref4.code;

  switch (code) {
    case "KeyA":
      console.log("leftUp");
      keys.left.pressed = false;
      player.currentSptire = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.size.width = player.sprites.stand.width;
      break;

    case "KeyD":
      console.log("rightUp");
      keys.right.pressed = false;
      player.currentSptire = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.size.width = player.sprites.stand.width;
      break;

    case "KeyW":
      console.log("topUp");
      break;

    case "KeyS":
      console.log("downUp");
      break;

    default:
      console.log("unknown key");
      break;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ3BCLE9BQVAsQ0FBZUMsS0FBZixDQUFxQjlCLEtBQXpDO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0VvRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0F0RCxNQUFBQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixLQUFyQjtBQUNBZ0MsTUFBQUEsTUFBTSxDQUFDYixhQUFQLEdBQXVCYSxNQUFNLENBQUNwQixPQUFQLENBQWVDLEtBQWYsQ0FBcUJkLEtBQTVDO0FBQ0FpQyxNQUFBQSxNQUFNLENBQUNaLGdCQUFQLEdBQTBCWSxNQUFNLENBQUNwQixPQUFQLENBQWVDLEtBQWYsQ0FBcUJFLFNBQS9DO0FBQ0FpQixNQUFBQSxNQUFNLENBQUN6QixJQUFQLENBQVl4QixLQUFaLEdBQW9CaUQsTUFBTSxDQUFDcEIsT0FBUCxDQUFlQyxLQUFmLENBQXFCOUIsS0FBekM7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRW9FLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBOztBQUNGO0FBQ0VELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQTtBQXZCSjtBQXlCRCxDQTFCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL2NhbnZhcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9zcmMvbWFpbi5jc3M/ZDA2OCIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhbnZhcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhbnZhcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FudmFzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2FudmFzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NhbnZhcy8uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QseURBQTJDO0VBQzNDLDRCQUEyQjtFQUMzQixzQkFBc0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9iYWNrZ3JvdW5kLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4vaW1nL2JhY2tncm91bmQucG5nXCI7XHJcbmltcG9ydCBoaWxscyBmcm9tIFwiLi9pbWcvaGlsbHMucG5nXCI7XHJcbmltcG9ydCBwbGF0Zm9ybSBmcm9tIFwiLi9pbWcvcGxhdGZvcm0ucG5nXCI7XHJcbmltcG9ydCBzcHJpdGVTdGFuZFJpZ2h0IGZyb20gXCIuL2ltZy9zcHJpdGVTdGFuZFJpZ2h0LnBuZ1wiO1xyXG5pbXBvcnQgc3ByaXRlU3RhbmRMZWZ0IGZyb20gXCIuL2ltZy9zcHJpdGVTdGFuZExlZnQucG5nXCI7XHJcbmltcG9ydCBzcHJpdGVSdW5SaWdodCBmcm9tIFwiLi9pbWcvc3ByaXRlUnVuUmlnaHQucG5nXCI7XHJcbmltcG9ydCBzcHJpdGVSdW5MZWZ0IGZyb20gXCIuL2ltZy9zcHJpdGVSdW5MZWZ0LnBuZ1wiO1xyXG5cclxuY29uc3QgaHRtbENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG5jb25zdCBjYW52YXMgPSBodG1sQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbmh0bWxDYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDQ7XHJcbmh0bWxDYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNDtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICBodG1sQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSA0O1xyXG4gIGh0bWxDYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNDtcclxuICBpbml0KCk7XHJcbn0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcclxuICBtb3VzZS54ID0gZXZlbnQuY2xpZW50WDtcclxuICBtb3VzZS55ID0gZXZlbnQuY2xpZW50WTtcclxufSk7XHJcbmNvbnN0IGNlbnRlciA9IHtcclxuICB4OiBodG1sQ2FudmFzLndpZHRoIC8gMixcclxuICB5OiBodG1sQ2FudmFzLmhlaWdodCAvIDIsXHJcbn07XHJcbnZhciBtb3VzZSA9IHtcclxuICB4OiBodG1sQ2FudmFzLndpZHRoIC8gMixcclxuICB5OiBodG1sQ2FudmFzLmhlaWdodCAvIDIsXHJcbn07XHJcbmNvbnN0IGdsb2JhbEdyYXZpdHkgPSAwLjU7XHJcbi8vINCf0LXRgNC10LrQu9GO0YfQsNGC0LXQu9C4INGB0L7QsdGL0YLQuNC5IHRydWUgZmFsc2Ug0L3QsCDQutC90L7Qv9C60LDRhSBhd2QuXHJcbmNvbnN0IGtleXMgPSB7XHJcbiAgcmlnaHQ6IHtcclxuICAgIHByZXNzZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgbGVmdDoge1xyXG4gICAgcHJlc3NlZDogZmFsc2UsXHJcbiAgfSxcclxuICB0b3A6IHtcclxuICAgIHByZXNzZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZG93bjoge1xyXG4gICAgcHJlc3NlZDogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgIHg6IDUwLFxyXG4gICAgICB5OiBjZW50ZXIueSAtIDE1MCxcclxuICAgIH07XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICBoZWlnaHQ6IDE1MCxcclxuICAgIH07XHJcbiAgICB0aGlzLnNwZWVkID0gNTtcclxuICAgIHRoaXMuaW1nID0gc3RhbmRSaWdodDtcclxuICAgIHRoaXMuZnJhbWVzID0gMDtcclxuICAgIHRoaXMuc3ByaXRlcyA9IHtcclxuICAgICAgc3RhbmQ6IHtcclxuICAgICAgICByaWdodDogc3RhbmRSaWdodCxcclxuICAgICAgICBsZWZ0OiBzdGFuZExlZnQsXHJcbiAgICAgICAgY3JvcFdpZHRoOiAxNzcsXHJcbiAgICAgICAgd2lkdGg6IDY2LFxyXG4gICAgICB9LFxyXG4gICAgICBydW46IHtcclxuICAgICAgICByaWdodDogcnVuUmlnaHQsXHJcbiAgICAgICAgbGVmdDogcnVuTGVmdCxcclxuICAgICAgICBjcm9wV2lkdGg6IDM0MSxcclxuICAgICAgICB3aWR0aDogMTI3Ljg3NSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U3B0aXJlID0gdGhpcy5zcHJpdGVzLnN0YW5kLnJpZ2h0O1xyXG4gICAgdGhpcy5jdXJyZW50Q3JvcFdpZHRoID0gMTc3O1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGNhbnZhcy5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuY3VycmVudFNwdGlyZSxcclxuICAgICAgdGhpcy5jdXJyZW50Q3JvcFdpZHRoICogdGhpcy5mcmFtZXMsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuY3VycmVudENyb3BXaWR0aCxcclxuICAgICAgNDAwLFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zaXplLndpZHRoLFxyXG4gICAgICB0aGlzLnNpemUuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmZyYW1lcysrO1xyXG4gICAgaWYgKHRoaXMuZnJhbWVzID4gMjkgJiYgdGhpcy5jdXJyZW50U3B0aXJlID09PSB0aGlzLnNwcml0ZXMucnVuLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMuZnJhbWVzID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVzID4gMjkgJiYgdGhpcy5jdXJyZW50U3B0aXJlID09PSB0aGlzLnNwcml0ZXMucnVuLmxlZnQpIHtcclxuICAgICAgdGhpcy5mcmFtZXMgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5mcmFtZXMgPiA1OSAmJiB0aGlzLmN1cnJlbnRTcHRpcmUgPT09IHRoaXMuc3ByaXRlcy5zdGFuZC5sZWZ0KSB7XHJcbiAgICAgIHRoaXMuZnJhbWVzID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVzID4gNTkgJiYgdGhpcy5jdXJyZW50U3B0aXJlID09PSB0aGlzLnNwcml0ZXMuc3RhbmQucmlnaHQpIHtcclxuICAgICAgdGhpcy5mcmFtZXMgPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSA8XHJcbiAgICAgIGh0bWxDYW52YXMuaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGdsb2JhbEdyYXZpdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5jbGFzcyBQbGF0Zm9ybSB7XHJcbiAgY29uc3RydWN0b3IoeyB4LCB5LCBpbWcgfSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcclxuICAgICAgeDogeCxcclxuICAgICAgeTogeSAtIE1hdGgucmFuZG9tKCkgKiAyMDAgLSAxMDAsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaXplID0ge1xyXG4gICAgICB3aWR0aDogTWF0aC5yYW5kb20oKSAqIDIwMCArIDE1MCxcclxuICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbWcgPSBpbWc7XHJcbiAgfVxyXG4gIGRyYXcoKSB7XHJcbiAgICBjYW52YXMuZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltZyxcclxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2l6ZS53aWR0aCxcclxuICAgICAgdGhpcy5zaXplLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuY2xhc3MgR2VuZXJpY09iamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHsgeCwgeSwgaW1nIH0pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgIHg6IHgsXHJcbiAgICAgIHk6IHksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaXplID0ge1xyXG4gICAgICB3aWR0aDogaW1nLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGltZy5oZWlnaHQsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbWcgPSBpbWc7XHJcbiAgfVxyXG4gIGRyYXcoKSB7XHJcbiAgICBjYW52YXMuZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltZyxcclxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2l6ZS53aWR0aCxcclxuICAgICAgdGhpcy5zaXplLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuLy8gSFRNTCDQuNC30L7QsdGA0LDQttC10L3QuNGPLlxyXG5jb25zdCBzdGFuZFJpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbnN0YW5kUmlnaHQuc3JjID0gc3ByaXRlU3RhbmRSaWdodDtcclxuY29uc3Qgc3RhbmRMZWZ0ID0gbmV3IEltYWdlKCk7XHJcbnN0YW5kTGVmdC5zcmMgPSBzcHJpdGVTdGFuZExlZnQ7XHJcbmNvbnN0IHJ1blJpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbnJ1blJpZ2h0LnNyYyA9IHNwcml0ZVJ1blJpZ2h0O1xyXG5jb25zdCBydW5MZWZ0ID0gbmV3IEltYWdlKCk7XHJcbnJ1bkxlZnQuc3JjID0gc3ByaXRlUnVuTGVmdDtcclxuXHJcbmNvbnN0IGltZ0JhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcclxuaW1nQmFja2dyb3VuZC5zcmMgPSBiYWNrZ3JvdW5kO1xyXG5jb25zdCBpbWdIaWxscyA9IG5ldyBJbWFnZSgpO1xyXG5pbWdIaWxscy5zcmMgPSBoaWxscztcclxuY29uc3QgaW1nUGxhdGZvcm0gPSBuZXcgSW1hZ2UoKTtcclxuaW1nUGxhdGZvcm0uc3JjID0gcGxhdGZvcm07XHJcbi8vINCY0LPRgNC+0LosINCc0LDRgdGB0LjQsiDQv9C70YTRgtC+0YDQvCDQuCDRgdGC0LDRgtC40YfQtdGB0LrQvtCz0L4g0L7QutGA0YPQttC10L3QuNGPINC4INC/0L7QtNGB0YfQtdGC0LAg0L7Rh9C60L7QsiDQv9GA0L7QutGA0YPRgtC60LguXHJcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcclxubGV0IHBsYXRmb3JtcyA9IFtdO1xyXG5sZXQgZ2VuZXJpY09iamVjdHMgPSBbXTtcclxubGV0IHNjcm9sbE9mZlNldCA9IDA7XHJcbi8vINCh0L7Qt9C00LDQvdC40LUg0LLQstC+0LTQvdGL0YUg0LTQsNC90L3Ri9GFINC40LPRgNGLLlxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IGdldE9iakhpbGxzTnVtID0gMTA7XHJcbiAgbGV0IFhHZW5PYmogPSAwO1xyXG4gIGxldCBZR2VuT2JqID0gaHRtbENhbnZhcy5oZWlnaHQgLSBpbWdIaWxscy5oZWlnaHQgKyAxMDA7XHJcbiAgLy9cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdldE9iakhpbGxzTnVtOyBpKyspIHtcclxuICAgIGdlbmVyaWNPYmplY3RzLnB1c2goXHJcbiAgICAgIG5ldyBHZW5lcmljT2JqZWN0cyh7IHg6IFhHZW5PYmosIHk6IFlHZW5PYmosIGltZzogaW1nSGlsbHMgfSlcclxuICAgICk7XHJcbiAgICBYR2VuT2JqICs9IGltZ0hpbGxzLndpZHRoICogMjtcclxuICB9XHJcbiAgLy8g0JLQstC+0LTQvdGL0LUg0LTQsNC90L3Ri9C1INC00LvRjyDQv9C70LDRgtGE0L7RgNC8LlxyXG4gIGNvbnN0IHBsYXRmb3JtTnVtID0gMzA7XHJcbiAgbGV0IFhQbGF0Zm9ybSA9IDA7XHJcbiAgbGV0IFlQbGF0Zm9ybSA9IGh0bWxDYW52YXMuaGVpZ2h0IC0gMTAwO1xyXG4gIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCx0LvQvtC60L7QsiDQv9C70LDRgtGE0L7RgNC80YsuIDEtMTAwLzQuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF0Zm9ybU51bTsgaSsrKSB7XHJcbiAgICBpZiAoaSAlIDIgPT09IDAgJiYgaSA+IDEpIHtcclxuICAgICAgcGxhdGZvcm1zLnNwbGljZShpIC0gMSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGF0Zm9ybXMucHVzaChcclxuICAgICAgICBuZXcgUGxhdGZvcm0oeyB4OiBYUGxhdGZvcm0sIHk6IFlQbGF0Zm9ybSwgaW1nOiBpbWdQbGF0Zm9ybSB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgWFBsYXRmb3JtICs9IDIyMDtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgY2FudmFzLmNsZWFyUmVjdCgwLCAwLCBodG1sQ2FudmFzLndpZHRoLCBodG1sQ2FudmFzLmhlaWdodCk7XHJcbiAgLy8g0J7RgtGA0LjRgdC+0LLQutCwINC+0LrRgNGD0LbQtdC90LjRjy5cclxuICBnZW5lcmljT2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIG9iamVjdC5kcmF3KCk7XHJcbiAgfSk7XHJcbiAgLy8g0J7RgtGA0LjRgdC+0LLQutCwINC/0LvQsNGC0YTQvtGA0LwuXHJcbiAgcGxhdGZvcm1zLmZvckVhY2goKHBsYXRmb3JtKSA9PiB7XHJcbiAgICBwbGF0Zm9ybS5kcmF3KCk7XHJcbiAgfSk7XHJcbiAgLy8g0J7RgtGA0LjRgdC+0LLQutCwINC/0LXRgNGB0L7QvdCw0LbQsC5cclxuICBwbGF5ZXIudXBkYXRlKCk7XHJcbiAgLy8g0JTQstC40LbQtdC90LjQtSDQv9C10YDRgdC+0L3QsNC20LAgMzAwIC0gaHRtbENhbnZhcy53aWR0aCAvIDIg0Lgg0L/QsNGA0LDQu9C70LDQutGBINC/0LvQsNGC0YTQvtGA0Lwg0Lgg0LfQsNC00L3QtdCz0L4g0YTQvtC90LAuXHJcbiAgaWYgKGtleXMucmlnaHQucHJlc3NlZCAmJiBwbGF5ZXIucG9zaXRpb24ueCA8IGh0bWxDYW52YXMud2lkdGggLyAyKSB7XHJcbiAgICBwbGF5ZXIudmVsb2NpdHkueCA9IHBsYXllci5zcGVlZDtcclxuICB9IGVsc2UgaWYgKGtleXMubGVmdC5wcmVzc2VkICYmIHBsYXllci5wb3NpdGlvbi54ID4gMzAwKSB7XHJcbiAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC1wbGF5ZXIuc3BlZWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllci52ZWxvY2l0eS54ID0gMDtcclxuICAgIGlmIChrZXlzLnJpZ2h0LnByZXNzZWQpIHtcclxuICAgICAgcGxhdGZvcm1zLmZvckVhY2goKHBsYXRmb3JtKSA9PiB7XHJcbiAgICAgICAgcGxhdGZvcm0ucG9zaXRpb24ueCAtPSBwbGF5ZXIuc3BlZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBnZW5lcmljT2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgICBvYmplY3QucG9zaXRpb24ueCAtPSBwbGF5ZXIuc3BlZWQgKiAwLjY2O1xyXG4gICAgICB9KTtcclxuICAgICAgc2Nyb2xsT2ZmU2V0ICs9IDU7XHJcbiAgICB9IGVsc2UgaWYgKGtleXMubGVmdC5wcmVzc2VkKSB7XHJcbiAgICAgIHNjcm9sbE9mZlNldCAtPSBwbGF5ZXIuc3BlZWQ7XHJcbiAgICAgIHBsYXRmb3Jtcy5mb3JFYWNoKChwbGF0Zm9ybSkgPT4ge1xyXG4gICAgICAgIHBsYXRmb3JtLnBvc2l0aW9uLnggKz0gcGxheWVyLnNwZWVkO1xyXG4gICAgICB9KTtcclxuICAgICAgZ2VuZXJpY09iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnggKz0gcGxheWVyLnNwZWVkICogMC42NjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNjcm9sbE9mZlNldCAtPSA1O1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coc2Nyb2xsT2ZmU2V0KTtcclxuICB9XHJcbiAgLy8g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDQutC+0LvQu9C40LfQuNC5LlxyXG4gIHBsYXRmb3Jtcy5mb3JFYWNoKChwbGF0Zm9ybSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAvLyDQodGA0LDQstC90LXQvdC40LUg0LLRi9GB0L7RgtGLINC60LLQsNC00YDQsNGC0LAg0YEg0L/QvtCy0LXRgNGF0L3QvtGB0YLRjNGOINC/0LvQsNGC0YTQvtGA0LzRiy5cclxuICAgICAgcGxheWVyLnBvc2l0aW9uLnkgKyBwbGF5ZXIuc2l6ZS5oZWlnaHQgPD0gcGxhdGZvcm0ucG9zaXRpb24ueSAmJlxyXG4gICAgICAvLyDQodGA0LDQstC90LXQvdC40LUg0LLRi9GB0L7RgtGLINC60LLQsNC00YDQsNGC0LAg0YEg0L/QvtCy0LXRgNGF0L3QvtGB0YLRjNGOINC/0LvQsNGC0YTQvtGA0LzRiyDRgSDRg9GH0LXRgtC+0Lwg0YPRgdC60L7RgNC10L3QuNGPLlxyXG4gICAgICBwbGF5ZXIucG9zaXRpb24ueSArIHBsYXllci5zaXplLmhlaWdodCArIHBsYXllci52ZWxvY2l0eS55ID49XHJcbiAgICAgIHBsYXRmb3JtLnBvc2l0aW9uLnkgJiZcclxuICAgICAgLy8g0J/QvtC30LjRhtC40Y8g0YHRgNCw0LLQvdC10L3QuNGPINC/0YDQsNCy0L7Qs9C+INC60YDQsNGPINC60LLQsNC00YDQsNGC0LAg0YEg0LvQtdCy0YvQvCDQutGA0LDQtdC8INC/0LvQsNGC0YTQvtGA0LzRiy5cclxuICAgICAgcGxheWVyLnBvc2l0aW9uLnggKyBwbGF5ZXIuc2l6ZS53aWR0aCA+PSBwbGF0Zm9ybS5wb3NpdGlvbi54ICYmXHJcbiAgICAgIC8vINCf0L7Qt9C40YbQuNGPINGB0YDQsNCy0L3QtdC90LjRjyDQu9C10LLQvtCz0L4g0LrRgNCw0Y8g0LrQstCw0LTRgNCw0YLQsCDRgSDQv9GA0LDQstGL0Lwg0LrRgNCw0LXQvCDQv9C70LDRgtGE0L7RgNC80YsuXHJcbiAgICAgIHBsYXllci5wb3NpdGlvbi54IDw9IHBsYXRmb3JtLnBvc2l0aW9uLnggKyBwbGF0Zm9ybS5zaXplLndpZHRoXHJcbiAgICApIHtcclxuICAgICAgcGxheWVyLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vINCe0LHRidC40Lkg0YHRh9C10YIuXHJcbiAgaWYgKHNjcm9sbE9mZlNldCA+PSA0OTUwKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIllvdSB3aW4hXCIpO1xyXG4gIH1cclxuICAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQuNCz0YDRiy5cclxuICBpZiAocGxheWVyLnBvc2l0aW9uLnkgPiBodG1sQ2FudmFzLmhlaWdodCkge1xyXG4gICAgcGxhdGZvcm1zID0gW107XHJcbiAgICBnZW5lcmljT2JqZWN0cyA9IFtdO1xyXG4gICAgc2Nyb2xsT2ZmU2V0ID0gMDtcclxuICAgIGluaXQoKTtcclxuICAgIHBsYXllci5wb3NpdGlvbi54ID0gMTAwO1xyXG4gICAgcGxheWVyLnBvc2l0aW9uLnkgPSAyNTA7XHJcbiAgfVxyXG59XHJcbmFuaW1hdGUoKTtcclxuaW5pdCgpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKHsgY29kZSB9KSA9PiB7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlIFwiS2V5QVwiOlxyXG4gICAgICBjb25zb2xlLmxvZyhcImxlZnREb3duXCIpO1xyXG4gICAgICBrZXlzLmxlZnQucHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIHBsYXllci5jdXJyZW50U3B0aXJlID0gcGxheWVyLnNwcml0ZXMucnVuLmxlZnQ7XHJcbiAgICAgIHBsYXllci5jdXJyZW50Q3JvcFdpZHRoID0gcGxheWVyLnNwcml0ZXMucnVuLmNyb3BXaWR0aDtcclxuICAgICAgcGxheWVyLnNpemUud2lkdGggPSBwbGF5ZXIuc3ByaXRlcy5ydW4ud2lkdGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIktleURcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJyaWdodERvd25cIik7XHJcbiAgICAgIGtleXMucmlnaHQucHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIHBsYXllci5jdXJyZW50U3B0aXJlID0gcGxheWVyLnNwcml0ZXMucnVuLnJpZ2h0O1xyXG4gICAgICBwbGF5ZXIuY3VycmVudENyb3BXaWR0aCA9IHBsYXllci5zcHJpdGVzLnJ1bi5jcm9wV2lkdGg7XHJcbiAgICAgIHBsYXllci5zaXplLndpZHRoID0gcGxheWVyLnNwcml0ZXMucnVuLndpZHRoO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJLZXlXXCI6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidG9wRG93blwiKTtcclxuICAgICAgaWYgKHBsYXllci52ZWxvY2l0eS55ID09PSAwKSB7XHJcbiAgICAgICAgcGxheWVyLnZlbG9jaXR5LnkgPSAtMTU7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiS2V5U1wiOlxyXG4gICAgICBjb25zb2xlLmxvZyhcImRvd25Eb3duXCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidW5rbm93biBrZXlcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICh7IGNvZGUgfSkgPT4ge1xyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSBcIktleUFcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJsZWZ0VXBcIik7XHJcbiAgICAgIGtleXMubGVmdC5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIHBsYXllci5jdXJyZW50U3B0aXJlID0gcGxheWVyLnNwcml0ZXMuc3RhbmQubGVmdDtcclxuICAgICAgcGxheWVyLmN1cnJlbnRDcm9wV2lkdGggPSBwbGF5ZXIuc3ByaXRlcy5zdGFuZC5jcm9wV2lkdGg7XHJcbiAgICAgIHBsYXllci5zaXplLndpZHRoID0gcGxheWVyLnNwcml0ZXMuc3RhbmQud2lkdGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIktleURcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJyaWdodFVwXCIpO1xyXG4gICAgICBrZXlzLnJpZ2h0LnByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgcGxheWVyLmN1cnJlbnRTcHRpcmUgPSBwbGF5ZXIuc3ByaXRlcy5zdGFuZC5yaWdodDtcclxuICAgICAgcGxheWVyLmN1cnJlbnRDcm9wV2lkdGggPSBwbGF5ZXIuc3ByaXRlcy5zdGFuZC5jcm9wV2lkdGg7XHJcbiAgICAgIHBsYXllci5zaXplLndpZHRoID0gcGxheWVyLnNwcml0ZXMuc3RhbmQud2lkdGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIktleVdcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJ0b3BVcFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiS2V5U1wiOlxyXG4gICAgICBjb25zb2xlLmxvZyhcImRvd25VcFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjb25zb2xlLmxvZyhcInVua25vd24ga2V5XCIpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGlsbHMiLCJwbGF0Zm9ybSIsInNwcml0ZVN0YW5kUmlnaHQiLCJzcHJpdGVTdGFuZExlZnQiLCJzcHJpdGVSdW5SaWdodCIsInNwcml0ZVJ1bkxlZnQiLCJodG1sQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwiZXZlbnQiLCJtb3VzZSIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJjZW50ZXIiLCJnbG9iYWxHcmF2aXR5Iiwia2V5cyIsInJpZ2h0IiwicHJlc3NlZCIsImxlZnQiLCJ0b3AiLCJkb3duIiwiUGxheWVyIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsInNpemUiLCJzcGVlZCIsImltZyIsInN0YW5kUmlnaHQiLCJmcmFtZXMiLCJzcHJpdGVzIiwic3RhbmQiLCJzdGFuZExlZnQiLCJjcm9wV2lkdGgiLCJydW4iLCJydW5SaWdodCIsInJ1bkxlZnQiLCJjdXJyZW50U3B0aXJlIiwiY3VycmVudENyb3BXaWR0aCIsImRyYXdJbWFnZSIsImRyYXciLCJQbGF0Zm9ybSIsIk1hdGgiLCJyYW5kb20iLCJHZW5lcmljT2JqZWN0cyIsIkltYWdlIiwic3JjIiwiaW1nQmFja2dyb3VuZCIsImltZ0hpbGxzIiwiaW1nUGxhdGZvcm0iLCJwbGF5ZXIiLCJwbGF0Zm9ybXMiLCJnZW5lcmljT2JqZWN0cyIsInNjcm9sbE9mZlNldCIsImdldE9iakhpbGxzTnVtIiwiWEdlbk9iaiIsIllHZW5PYmoiLCJpIiwicHVzaCIsInBsYXRmb3JtTnVtIiwiWFBsYXRmb3JtIiwiWVBsYXRmb3JtIiwic3BsaWNlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJ1cGRhdGUiLCJjb25zb2xlIiwibG9nIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=