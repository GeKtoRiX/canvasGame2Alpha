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

module.exports = __webpack_require__.p + "072d51bcc9c09311d4c2.png";

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfffe4c371f5e11d372b.png";

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffab39d3487de561be1a.png";

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
      y: center.y - 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.size = {
      width: 30,
      height: 30
    };
    this.color = "blue";
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      canvas.fillStyle = this.color;
      canvas.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
      canvas.fill();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.size.height + this.velocity.y < htmlCanvas.height) {
        this.velocity.y += globalGravity;
      } else {
        this.velocity.y = 0;
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
      y: y - Math.random() * 350
    };
    this.size = {
      width: Math.random() * 250 + 100,
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
  var getObjHillsNum = 3;
  var XGenObj = 0;
  var YGenObj = htmlCanvas.height - imgHills.height + 10; //

  for (var i = 0; i < getObjHillsNum; i++) {
    genericObjects.push(new GenericObjects({
      x: XGenObj,
      y: YGenObj,
      img: imgHills
    }));
    XGenObj += imgHills.width;
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

    XPlatform += 200;
  }
}

function animate() {
  requestAnimationFrame(animate);
  canvas.clearRect(0, 0, htmlCanvas.width, htmlCanvas.height);
  genericObjects.forEach(function (object) {
    object.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < htmlCanvas.width / 2) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 300) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffSet += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      genericObjects.forEach(function (object) {
        object.position.x -= 3;
      });
    } else if (keys.left.pressed) {
      scrollOffSet -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      genericObjects.forEach(function (object) {
        object.position.x += 3;
      });
    }
  }

  platforms.forEach(function (platform) {
    if ( // Сравнение высоты квадрата с поверхностью платформы.
    player.position.y + player.size.height <= platform.position.y && // Сравнение высоты квадрата с поверхностью платформы с учетом ускорения.
    player.position.y + player.size.height + player.velocity.y >= platform.position.y && // Позиция сравнения правого края квадрата с левым краем платформы.
    player.position.x + player.size.width >= platform.position.x && // Позиция сравнения левого края квадрата с правым краем платформы.
    player.position.x <= platform.position.x + platform.size.width) {
      player.velocity.y = 0;
    }
  });

  if (scrollOffSet >= 4950) {
    console.log("You win!");
  }
}

init();
animate();
window.addEventListener("keydown", function (_ref3) {
  var code = _ref3.code;

  switch (code) {
    case "KeyA":
      console.log("leftDown");
      keys.left.pressed = true;
      break;

    case "KeyD":
      console.log("rightDown");
      keys.right.pressed = true;
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
      break;

    case "KeyD":
      console.log("rightUp");
      keys.right.pressed = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0E5QyxNQUFBQSxJQUFJLENBQUNHLElBQUwsQ0FBVUQsT0FBVixHQUFvQixLQUFwQjtBQUNBOztBQUNGLFNBQUssTUFBTDtBQUNFMkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBOUMsTUFBQUEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsS0FBckI7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRTJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBOztBQUNGO0FBQ0VELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQTtBQWpCSjtBQW1CRCxDQXBCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL2NhbnZhcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9zcmMvbWFpbi5jc3M/ZDA2OCIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhbnZhcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhbnZhcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FudmFzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2FudmFzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NhbnZhcy8uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QseURBQTJDO0VBQzNDLDRCQUEyQjtFQUMzQixzQkFBc0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9iYWNrZ3JvdW5kLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4vaW1nL2JhY2tncm91bmQucG5nXCI7XHJcbmltcG9ydCBoaWxscyBmcm9tIFwiLi9pbWcvaGlsbHMucG5nXCI7XHJcbmltcG9ydCBwbGF0Zm9ybSBmcm9tIFwiLi9pbWcvcGxhdGZvcm0ucG5nXCI7XHJcblxyXG5jb25zdCBodG1sQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbmNvbnN0IGNhbnZhcyA9IGh0bWxDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuaHRtbENhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gNDtcclxuaHRtbENhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gIGh0bWxDYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDQ7XHJcbiAgaHRtbENhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0O1xyXG4gIGluaXQoKTtcclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xyXG4gIG1vdXNlLnggPSBldmVudC5jbGllbnRYO1xyXG4gIG1vdXNlLnkgPSBldmVudC5jbGllbnRZO1xyXG59KTtcclxuY29uc3QgY2VudGVyID0ge1xyXG4gIHg6IGh0bWxDYW52YXMud2lkdGggLyAyLFxyXG4gIHk6IGh0bWxDYW52YXMuaGVpZ2h0IC8gMixcclxufTtcclxudmFyIG1vdXNlID0ge1xyXG4gIHg6IGh0bWxDYW52YXMud2lkdGggLyAyLFxyXG4gIHk6IGh0bWxDYW52YXMuaGVpZ2h0IC8gMixcclxufTtcclxuY29uc3QgZ2xvYmFsR3Jhdml0eSA9IDAuNTtcclxuLy8g0J/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Lgg0YHQvtCx0YvRgtC40LkgdHJ1ZSBmYWxzZSDQvdCwINC60L3QvtC/0LrQsNGFIGF3ZC5cclxuY29uc3Qga2V5cyA9IHtcclxuICByaWdodDoge1xyXG4gICAgcHJlc3NlZDogZmFsc2UsXHJcbiAgfSxcclxuICBsZWZ0OiB7XHJcbiAgICBwcmVzc2VkOiBmYWxzZSxcclxuICB9LFxyXG4gIHRvcDoge1xyXG4gICAgcHJlc3NlZDogZmFsc2UsXHJcbiAgfSxcclxuICBkb3duOiB7XHJcbiAgICBwcmVzc2VkOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgIHg6IDUwLFxyXG4gICAgICB5OiBjZW50ZXIueSAtIDEwMCxcclxuICAgIH07XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29sb3IgPSBgYmx1ZWA7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgY2FudmFzLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICBjYW52YXMuZmlsbFJlY3QoXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNpemUud2lkdGgsXHJcbiAgICAgIHRoaXMuc2l6ZS5oZWlnaHRcclxuICAgICk7XHJcbiAgICBjYW52YXMuZmlsbCgpO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDxcclxuICAgICAgaHRtbENhbnZhcy5oZWlnaHRcclxuICAgICkge1xyXG4gICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gZ2xvYmFsR3Jhdml0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmNsYXNzIFBsYXRmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcih7IHgsIHksIGltZyB9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICB4OiB4LFxyXG4gICAgICB5OiB5IC0gTWF0aC5yYW5kb20oKSAqIDM1MCxcclxuICAgIH07XHJcbiAgICB0aGlzLnNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBNYXRoLnJhbmRvbSgpICogMjUwICsgMTAwLFxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgIH07XHJcbiAgICB0aGlzLmltZyA9IGltZztcclxuICB9XHJcbiAgZHJhdygpIHtcclxuICAgIGNhbnZhcy5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1nLFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zaXplLndpZHRoLFxyXG4gICAgICB0aGlzLnNpemUuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5jbGFzcyBHZW5lcmljT2JqZWN0cyB7XHJcbiAgY29uc3RydWN0b3IoeyB4LCB5LCBpbWcgfSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcclxuICAgICAgeDogeCxcclxuICAgICAgeTogeSxcclxuICAgIH07XHJcbiAgICB0aGlzLnNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBpbWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogaW1nLmhlaWdodCxcclxuICAgIH07XHJcbiAgICB0aGlzLmltZyA9IGltZztcclxuICB9XHJcbiAgZHJhdygpIHtcclxuICAgIGNhbnZhcy5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1nLFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zaXplLndpZHRoLFxyXG4gICAgICB0aGlzLnNpemUuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4vLyBIVE1MINC40LfQvtCx0YDQsNC20LXQvdC40Y8uXHJcbmNvbnN0IGltZ0JhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcclxuaW1nQmFja2dyb3VuZC5zcmMgPSBiYWNrZ3JvdW5kO1xyXG5jb25zdCBpbWdIaWxscyA9IG5ldyBJbWFnZSgpO1xyXG5pbWdIaWxscy5zcmMgPSBoaWxscztcclxuY29uc3QgaW1nUGxhdGZvcm0gPSBuZXcgSW1hZ2UoKTtcclxuaW1nUGxhdGZvcm0uc3JjID0gcGxhdGZvcm07XHJcbi8vINCY0LPRgNC+0LosINCc0LDRgdGB0LjQsiDQv9C70YTRgtC+0YDQvCDQuCDRgdGC0LDRgtC40YfQtdGB0LrQvtCz0L4g0L7QutGA0YPQttC10L3QuNGPINC4INC/0L7QtNGB0YfQtdGC0LAg0L7Rh9C60L7QsiDQv9GA0L7QutGA0YPRgtC60LguXHJcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcclxubGV0IHBsYXRmb3JtcyA9IFtdO1xyXG5sZXQgZ2VuZXJpY09iamVjdHMgPSBbXTtcclxubGV0IHNjcm9sbE9mZlNldCA9IDA7XHJcbi8vINCh0L7Qt9C00LDQvdC40LUg0LLQstC+0LTQvdGL0YUg0LTQsNC90L3Ri9GFINC40LPRgNGLLlxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IGdldE9iakhpbGxzTnVtID0gMztcclxuICBsZXQgWEdlbk9iaiA9IDA7XHJcbiAgbGV0IFlHZW5PYmogPSBodG1sQ2FudmFzLmhlaWdodCAtIGltZ0hpbGxzLmhlaWdodCArIDEwO1xyXG4gIC8vXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRPYmpIaWxsc051bTsgaSsrKSB7XHJcbiAgICBnZW5lcmljT2JqZWN0cy5wdXNoKFxyXG4gICAgICBuZXcgR2VuZXJpY09iamVjdHMoeyB4OiBYR2VuT2JqLCB5OiBZR2VuT2JqLCBpbWc6IGltZ0hpbGxzIH0pXHJcbiAgICApO1xyXG4gICAgWEdlbk9iaiArPSBpbWdIaWxscy53aWR0aDtcclxuICB9XHJcbiAgLy8g0JLQstC+0LTQvdGL0LUg0LTQsNC90L3Ri9C1INC00LvRjyDQv9C70LDRgtGE0L7RgNC8LlxyXG4gIGNvbnN0IHBsYXRmb3JtTnVtID0gMzA7XHJcbiAgbGV0IFhQbGF0Zm9ybSA9IDA7XHJcbiAgbGV0IFlQbGF0Zm9ybSA9IGh0bWxDYW52YXMuaGVpZ2h0IC0gMTAwO1xyXG4gIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCx0LvQvtC60L7QsiDQv9C70LDRgtGE0L7RgNC80YsuIDEtMTAwLzQuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF0Zm9ybU51bTsgaSsrKSB7XHJcbiAgICBpZiAoaSAlIDIgPT09IDAgJiYgaSA+IDEpIHtcclxuICAgICAgcGxhdGZvcm1zLnNwbGljZShpIC0gMSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGF0Zm9ybXMucHVzaChcclxuICAgICAgICBuZXcgUGxhdGZvcm0oeyB4OiBYUGxhdGZvcm0sIHk6IFlQbGF0Zm9ybSwgaW1nOiBpbWdQbGF0Zm9ybSB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgWFBsYXRmb3JtICs9IDIwMDtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgY2FudmFzLmNsZWFyUmVjdCgwLCAwLCBodG1sQ2FudmFzLndpZHRoLCBodG1sQ2FudmFzLmhlaWdodCk7XHJcbiAgZ2VuZXJpY09iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBvYmplY3QuZHJhdygpO1xyXG4gIH0pO1xyXG4gIHBsYXRmb3Jtcy5mb3JFYWNoKChwbGF0Zm9ybSkgPT4ge1xyXG4gICAgcGxhdGZvcm0uZHJhdygpO1xyXG4gIH0pO1xyXG4gIHBsYXllci51cGRhdGUoKTtcclxuXHJcbiAgaWYgKGtleXMucmlnaHQucHJlc3NlZCAmJiBwbGF5ZXIucG9zaXRpb24ueCA8IGh0bWxDYW52YXMud2lkdGggLyAyKSB7XHJcbiAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDU7XHJcbiAgfSBlbHNlIGlmIChrZXlzLmxlZnQucHJlc3NlZCAmJiBwbGF5ZXIucG9zaXRpb24ueCA+IDMwMCkge1xyXG4gICAgcGxheWVyLnZlbG9jaXR5LnggPSAtNTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyLnZlbG9jaXR5LnggPSAwO1xyXG5cclxuICAgIGlmIChrZXlzLnJpZ2h0LnByZXNzZWQpIHtcclxuICAgICAgc2Nyb2xsT2ZmU2V0ICs9IDU7XHJcbiAgICAgIHBsYXRmb3Jtcy5mb3JFYWNoKChwbGF0Zm9ybSkgPT4ge1xyXG4gICAgICAgIHBsYXRmb3JtLnBvc2l0aW9uLnggLT0gNTtcclxuICAgICAgfSk7XHJcbiAgICAgIGdlbmVyaWNPYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIG9iamVjdC5wb3NpdGlvbi54IC09IDM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChrZXlzLmxlZnQucHJlc3NlZCkge1xyXG4gICAgICBzY3JvbGxPZmZTZXQgLT0gNTtcclxuICAgICAgcGxhdGZvcm1zLmZvckVhY2goKHBsYXRmb3JtKSA9PiB7XHJcbiAgICAgICAgcGxhdGZvcm0ucG9zaXRpb24ueCArPSA1O1xyXG4gICAgICB9KTtcclxuICAgICAgZ2VuZXJpY09iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnggKz0gMztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBsYXRmb3Jtcy5mb3JFYWNoKChwbGF0Zm9ybSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAvLyDQodGA0LDQstC90LXQvdC40LUg0LLRi9GB0L7RgtGLINC60LLQsNC00YDQsNGC0LAg0YEg0L/QvtCy0LXRgNGF0L3QvtGB0YLRjNGOINC/0LvQsNGC0YTQvtGA0LzRiy5cclxuICAgICAgcGxheWVyLnBvc2l0aW9uLnkgKyBwbGF5ZXIuc2l6ZS5oZWlnaHQgPD0gcGxhdGZvcm0ucG9zaXRpb24ueSAmJlxyXG4gICAgICAvLyDQodGA0LDQstC90LXQvdC40LUg0LLRi9GB0L7RgtGLINC60LLQsNC00YDQsNGC0LAg0YEg0L/QvtCy0LXRgNGF0L3QvtGB0YLRjNGOINC/0LvQsNGC0YTQvtGA0LzRiyDRgSDRg9GH0LXRgtC+0Lwg0YPRgdC60L7RgNC10L3QuNGPLlxyXG4gICAgICBwbGF5ZXIucG9zaXRpb24ueSArIHBsYXllci5zaXplLmhlaWdodCArIHBsYXllci52ZWxvY2l0eS55ID49XHJcbiAgICAgICAgcGxhdGZvcm0ucG9zaXRpb24ueSAmJlxyXG4gICAgICAvLyDQn9C+0LfQuNGG0LjRjyDRgdGA0LDQstC90LXQvdC40Y8g0L/RgNCw0LLQvtCz0L4g0LrRgNCw0Y8g0LrQstCw0LTRgNCw0YLQsCDRgSDQu9C10LLRi9C8INC60YDQsNC10Lwg0L/Qu9Cw0YLRhNC+0YDQvNGLLlxyXG4gICAgICBwbGF5ZXIucG9zaXRpb24ueCArIHBsYXllci5zaXplLndpZHRoID49IHBsYXRmb3JtLnBvc2l0aW9uLnggJiZcclxuICAgICAgLy8g0J/QvtC30LjRhtC40Y8g0YHRgNCw0LLQvdC10L3QuNGPINC70LXQstC+0LPQviDQutGA0LDRjyDQutCy0LDQtNGA0LDRgtCwINGBINC/0YDQsNCy0YvQvCDQutGA0LDQtdC8INC/0LvQsNGC0YTQvtGA0LzRiy5cclxuICAgICAgcGxheWVyLnBvc2l0aW9uLnggPD0gcGxhdGZvcm0ucG9zaXRpb24ueCArIHBsYXRmb3JtLnNpemUud2lkdGhcclxuICAgICkge1xyXG4gICAgICBwbGF5ZXIudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKHNjcm9sbE9mZlNldCA+PSA0OTUwKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIllvdSB3aW4hXCIpO1xyXG4gIH1cclxufVxyXG5pbml0KCk7XHJcbmFuaW1hdGUoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoeyBjb2RlIH0pID0+IHtcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgXCJLZXlBXCI6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibGVmdERvd25cIik7XHJcbiAgICAgIGtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiS2V5RFwiOlxyXG4gICAgICBjb25zb2xlLmxvZyhcInJpZ2h0RG93blwiKTtcclxuICAgICAga2V5cy5yaWdodC5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiS2V5V1wiOlxyXG4gICAgICBjb25zb2xlLmxvZyhcInRvcERvd25cIik7XHJcbiAgICAgIGlmIChwbGF5ZXIudmVsb2NpdHkueSA9PT0gMCkge1xyXG4gICAgICAgIHBsYXllci52ZWxvY2l0eS55ID0gLTE1O1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIktleVNcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJkb3duRG93blwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjb25zb2xlLmxvZyhcInVua25vd24ga2V5XCIpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoeyBjb2RlIH0pID0+IHtcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgXCJLZXlBXCI6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibGVmdFVwXCIpO1xyXG4gICAgICBrZXlzLmxlZnQucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJLZXlEXCI6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmlnaHRVcFwiKTtcclxuICAgICAga2V5cy5yaWdodC5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIktleVdcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJ0b3BVcFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiS2V5U1wiOlxyXG4gICAgICBjb25zb2xlLmxvZyhcImRvd25VcFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjb25zb2xlLmxvZyhcInVua25vd24ga2V5XCIpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGlsbHMiLCJwbGF0Zm9ybSIsImh0bWxDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJldmVudCIsIm1vdXNlIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImNlbnRlciIsImdsb2JhbEdyYXZpdHkiLCJrZXlzIiwicmlnaHQiLCJwcmVzc2VkIiwibGVmdCIsInRvcCIsImRvd24iLCJQbGF5ZXIiLCJwb3NpdGlvbiIsInZlbG9jaXR5Iiwic2l6ZSIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmaWxsIiwiZHJhdyIsIlBsYXRmb3JtIiwiaW1nIiwiTWF0aCIsInJhbmRvbSIsImRyYXdJbWFnZSIsIkdlbmVyaWNPYmplY3RzIiwiaW1nQmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiaW1nSGlsbHMiLCJpbWdQbGF0Zm9ybSIsInBsYXllciIsInBsYXRmb3JtcyIsImdlbmVyaWNPYmplY3RzIiwic2Nyb2xsT2ZmU2V0IiwiZ2V0T2JqSGlsbHNOdW0iLCJYR2VuT2JqIiwiWUdlbk9iaiIsImkiLCJwdXNoIiwicGxhdGZvcm1OdW0iLCJYUGxhdGZvcm0iLCJZUGxhdGZvcm0iLCJzcGxpY2UiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsIm9iamVjdCIsInVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==