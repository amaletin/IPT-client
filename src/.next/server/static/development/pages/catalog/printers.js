module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/brandActions.ts":
/*!*********************************!*\
  !*** ./actions/brandActions.ts ***!
  \*********************************/
/*! exports provided: GET_BRANDS_START, GET_BRANDS_SUCCESS, GET_BRANDS_FAIL, loadBrands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BRANDS_START", function() { return GET_BRANDS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BRANDS_SUCCESS", function() { return GET_BRANDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BRANDS_FAIL", function() { return GET_BRANDS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBrands", function() { return loadBrands; });
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/services */ "./lib/services.ts");

var GET_BRANDS_START = 'GET_BRANDS_START';
var GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS';
var GET_BRANDS_FAIL = 'GET_BRANDS_FAIL';

var getBrandsStart = function getBrandsStart() {
  return {
    type: GET_BRANDS_START
  };
};
/**
 * Async Action creator for loadind brands
 */


var loadBrands = function loadBrands() {
  return function (dispatch) {
    dispatch(getBrandsStart());
    return Object(_lib_services__WEBPACK_IMPORTED_MODULE_0__["fetchBrands"])().then(function (response) {
      return dispatch({
        type: GET_BRANDS_SUCCESS,
        data: response
      });
    }, function (error) {
      return dispatch({
        type: GET_BRANDS_FAIL,
        data: error
      });
    });
  };
};

/***/ }),

/***/ "./actions/productActions.ts":
/*!***********************************!*\
  !*** ./actions/productActions.ts ***!
  \***********************************/
/*! exports provided: GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, getProductsStart, getProductsSuccess, getProductsFail, loadProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_START", function() { return GET_PRODUCTS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_SUCCESS", function() { return GET_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_FAIL", function() { return GET_PRODUCTS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsStart", function() { return getProductsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSuccess", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsFail", function() { return getProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/services */ "./lib/services.ts");

var GET_PRODUCTS_START = 'GET_PRODUCTS_START';
var GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
var GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';
var getProductsStart = function getProductsStart() {
  return {
    type: GET_PRODUCTS_START
  };
};
var getProductsSuccess = function getProductsSuccess(data) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    data: data
  };
};
var getProductsFail = function getProductsFail(error) {
  return {
    type: GET_PRODUCTS_FAIL,
    error: error
  };
};
var loadProducts = function loadProducts(type) {
  return function (dispatch) {
    dispatch(getProductsStart());
    return Object(_lib_services__WEBPACK_IMPORTED_MODULE_0__["fetchProducts"])(type).then(function (response) {
      dispatch(getProductsSuccess(response));
    }, function (error) {
      return dispatch(getProductsFail(error));
    });
  };
};

/***/ }),

/***/ "./components/catalog/ProductFilters/index.tsx":
/*!*****************************************************!*\
  !*** ./components/catalog/ProductFilters/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_brandActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/brandActions */ "./actions/brandActions.ts");
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/components/catalog/ProductFilters/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var mapStateToProps = function mapStateToProps(state) {
  var brands = state.brands;
  return {
    brands: brands.data
  };
};

var ProductFilters =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductFilters, _React$Component);

  function ProductFilters() {
    _classCallCheck(this, ProductFilters);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductFilters).apply(this, arguments));
  }

  _createClass(ProductFilters, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch(Object(_actions_brandActions__WEBPACK_IMPORTED_MODULE_2__["loadBrands"])());
    }
  }, {
    key: "render",
    value: function render() {
      var brands = this.props.brands;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Filters \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438:", brands && brands.map(function (brand) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: "brand-".concat(brand.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, brand.name);
      }));
    }
  }]);

  return ProductFilters;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ProductFilters));

/***/ }),

/***/ "./components/catalog/ProductItem/index.tsx":
/*!**************************************************!*\
  !*** ./components/catalog/ProductItem/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productItem_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productItem.less */ "./components/catalog/ProductItem/productItem.less");
/* harmony import */ var _productItem_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productItem_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/components/catalog/ProductItem/index.tsx";



var ProductItem = function ProductItem(_ref) {
  var product = _ref.product;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _productItem_less__WEBPACK_IMPORTED_MODULE_1__["productItem"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _productItem_less__WEBPACK_IMPORTED_MODULE_1__["productItemPicture"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://3dapi.amaletin.ru".concat(product.picture),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _productItem_less__WEBPACK_IMPORTED_MODULE_1__["productItemDescription"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _productItem_less__WEBPACK_IMPORTED_MODULE_1__["productItemDescriptionName"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, product.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _productItem_less__WEBPACK_IMPORTED_MODULE_1__["productItemDescriptionPrice"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, product.price)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./components/catalog/ProductItem/productItem.less":
/*!*********************************************************!*\
  !*** ./components/catalog/ProductItem/productItem.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"productItem": "DX4t8neYCX1BK8_fsoU65",
	"productItemDescription": "IEUOMnUyAToQoBHoPQpVF",
	"productItemDescriptionName": "sM2o0Xoqibkc8tgzDBnnO",
	"productItemDescriptionPrice": "fzrbYGNh4Ik_ScuilwpNk"
};

/***/ }),

/***/ "./components/catalog/ProductList/index.tsx":
/*!**************************************************!*\
  !*** ./components/catalog/ProductList/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductItem */ "./components/catalog/ProductItem/index.tsx");
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/components/catalog/ProductList/index.tsx";



var ProductList = function ProductList(_ref) {
  var products = _ref.products;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "This is a printers pages", products && products.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: product.id,
      product: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./components/common/Footer.jsx":
/*!**************************************!*\
  !*** ./components/common/Footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.less */ "./components/common/footer.less");
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/components/common/Footer.jsx";



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: _footer_less__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_less__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_less__WEBPACK_IMPORTED_MODULE_1___default.a.socials,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://vk.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/social-vk.png",
    alt: "https://vk.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://instagram.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/social-insta.png",
    alt: "https://instagram.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://facebook.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/social-fb.png",
    alt: "https://facebook.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_less__WEBPACK_IMPORTED_MODULE_1___default.a.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_less__WEBPACK_IMPORTED_MODULE_1___default.a.address,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/contacts-address.png",
    alt: "\u0410\u0434\u0440\u0435\u0441",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u0443\u043B. \u0423\u0440\u0430\u043B\u044C\u0441\u043A\u0430\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u0434.3 \u043A\u043E\u0440\u043F\u0443\u0441 1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_less__WEBPACK_IMPORTED_MODULE_1___default.a.phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/contacts-phone.png",
    alt: "\u0410\u0434\u0440\u0435\u0441",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "(812)-02-05"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "(812)-02-06"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_less__WEBPACK_IMPORTED_MODULE_1___default.a.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/contacts-email.png",
    alt: "\u0410\u0434\u0440\u0435\u0441",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:nerudmhdf@mail.ru",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "nerudmhdf@mail.ru")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_less__WEBPACK_IMPORTED_MODULE_1___default.a.copyright,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\xA9 2018")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/common/Header.jsx":
/*!**************************************!*\
  !*** ./components/common/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainNav */ "./components/common/MainNav.jsx");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.less */ "./components/common/header.less");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_less__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/components/common/Header.jsx";






var Header = function Header(_ref) {
  var onToggleMobileNav = _ref.onToggleMobileNav;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: _header_less__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _header_less__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _header_less__WEBPACK_IMPORTED_MODULE_4___default.a['header--inner'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _header_less__WEBPACK_IMPORTED_MODULE_4___default.a['header--logo'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/images/logo_01.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _header_less__WEBPACK_IMPORTED_MODULE_4___default.a['header--right'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _header_less__WEBPACK_IMPORTED_MODULE_4___default.a['header--nav'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _header_less__WEBPACK_IMPORTED_MODULE_4___default.a['header--search'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/search.svg",
    alt: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _header_less__WEBPACK_IMPORTED_MODULE_4___default.a['header--burger'],
    onClick: onToggleMobileNav,
    onKeyDown: onToggleMobileNav,
    role: "button",
    tabIndex: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/menu.svg",
    alt: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))))));
};

Header.propTypes = {
  onToggleMobileNav: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/common/MainNav.jsx":
/*!***************************************!*\
  !*** ./components/common/MainNav.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./components/common/utils.js");
/* harmony import */ var _mainNav_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainNav.less */ "./components/common/mainNav.less");
/* harmony import */ var _mainNav_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mainNav_less__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/components/common/MainNav.jsx";






var renderNav = function renderNav(items) {
  return items && items.map(function (item) {
    // eslint-disable-line arrow-body-style
    return item.children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      key: item.name,
      item: item,
      parent: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      key: item.name,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  });
};

var NavItem = function NavItem(_ref) {
  var item = _ref.item,
      parent = _ref.parent;
  var renderedChildren = renderNav(item.children);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _mainNav_less__WEBPACK_IMPORTED_MODULE_4___default.a['mainnav--parentli'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: item.route,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _mainNav_less__WEBPACK_IMPORTED_MODULE_4___default.a['mainnav--parentli--link'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, item.name)), parent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _mainNav_less__WEBPACK_IMPORTED_MODULE_4___default.a['mainnav--inner'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, renderedChildren));
};

NavItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
  }),
  parent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NavItem.defaultProps = {
  item: {},
  parent: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _mainNav_less__WEBPACK_IMPORTED_MODULE_4___default.a.mainnav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, renderNav(_utils__WEBPACK_IMPORTED_MODULE_3__["nav"]));
});

/***/ }),

/***/ "./components/common/MobileNav.jsx":
/*!*****************************************!*\
  !*** ./components/common/MobileNav.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./components/common/utils.js");
/* harmony import */ var _mobileNav_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobileNav.less */ "./components/common/mobileNav.less");
/* harmony import */ var _mobileNav_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mobileNav_less__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/components/common/MobileNav.jsx";






var renderNav = function renderNav(items) {
  return items && items.map(function (item) {
    // eslint-disable-line arrow-body-style
    return item.children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      key: item.name,
      item: item,
      parent: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      key: item.name,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  });
};

var NavItem = function NavItem(_ref) {
  var item = _ref.item,
      parent = _ref.parent;
  var renderedChildren = renderNav(item.children);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _mobileNav_less__WEBPACK_IMPORTED_MODULE_4___default.a.MobileNavParentli,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: item.route,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _mobileNav_less__WEBPACK_IMPORTED_MODULE_4___default.a.MobileNavParentliLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, item.name)), parent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _mobileNav_less__WEBPACK_IMPORTED_MODULE_4___default.a.MobileNavInner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, renderedChildren));
};

NavItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
  }),
  parent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NavItem.defaultProps = {
  item: {},
  parent: false
};

var MobileNav = function MobileNav(_ref2) {
  var onToggleMobileNav = _ref2.onToggleMobileNav,
      show = _ref2.show;
  var dynamicStyle = {
    top: show ? '0' : '-100vh'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _mobileNav_less__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    style: dynamicStyle,
    onScroll: function onScroll() {
      return undefined;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _mobileNav_less__WEBPACK_IMPORTED_MODULE_4___default.a.close,
    onClick: onToggleMobileNav,
    onKeyDown: onToggleMobileNav,
    role: "button",
    tabIndex: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/close.svg",
    alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _mobileNav_less__WEBPACK_IMPORTED_MODULE_4___default.a.MobileNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _mobileNav_less__WEBPACK_IMPORTED_MODULE_4___default.a.MobileNavUl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, renderNav(_utils__WEBPACK_IMPORTED_MODULE_3__["nav"]))));
};

MobileNav.propTypes = {
  onToggleMobileNav: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

/***/ }),

/***/ "./components/common/Page.jsx":
/*!************************************!*\
  !*** ./components/common/Page.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/common/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/common/Footer.jsx");
/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileNav */ "./components/common/MobileNav.jsx");
/* harmony import */ var _page_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.less */ "./components/common/page.less");
/* harmony import */ var _page_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_less__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/components/common/Page.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));
    _this.state = {
      showMenu: false
    };
    _this.handleToggleMobileNav = _this.handleToggleMobileNav.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Page, [{
    key: "handleToggleMobileNav",
    value: function handleToggleMobileNav() {
      var showMenu = this.state.showMenu;
      this.setState({
        showMenu: !showMenu
      }, function () {
        document.body.classList.toggle('locked'); //eslint-disable-line
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          customStyles = _this$props.customStyles;
      var showMenu = this.state.showMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _page_less__WEBPACK_IMPORTED_MODULE_5___default.a.page,
        style: customStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _page_less__WEBPACK_IMPORTED_MODULE_5___default.a.pageTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onToggleMobileNav: this.handleToggleMobileNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MobileNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onToggleMobileNav: this.handleToggleMobileNav,
        show: showMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  customStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object //eslint-disable-line

};
Page.defaultProps = {
  children: null,
  customStyles: null
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/common/footer.less":
/*!***************************************!*\
  !*** ./components/common/footer.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer": "_227GMFfoz_QsdYiMS2u3u3",
	"container": "_2HYLlPO0HZFNLeJk0b3Esd",
	"socials": "VyY_gO1PpUr0t2OjHOT2_",
	"contacts": "_1eJ7Wf6VSOkq92AjmEqkN5",
	"address": "_3v_AIiLADzaNedI8S4IO07",
	"phone": "_1Q3r5k8_iSkTwxN7TM9Ks1",
	"email": "_2Kgtn1kZ9CKuUs3t4JVIz_"
};

/***/ }),

/***/ "./components/common/header.less":
/*!***************************************!*\
  !*** ./components/common/header.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_3H0VM4LDuwZTjy777104p8",
	"header": "_2uMVDViDhsirLN48WzOZuF",
	"header--inner": "_11sb-XvMSUb4tfqJ5Bpxuf",
	"header--logo": "UkxUdVXM9M2MnX_yHIOB-",
	"header--right": "uDOfAIjwIFqzVaN3PkyUt",
	"header--nav": "_3Md9YJvcehb5Wp8NE3WMw-",
	"header--search": "_2c3BeudMGdAK-f0Ej4Ljki",
	"header--burger": "_24s6FJ0TF6BmtDBe_80AT0"
};

/***/ }),

/***/ "./components/common/mainNav.less":
/*!****************************************!*\
  !*** ./components/common/mainNav.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"mainnav": "gC6COYWTT14rgbCWx4pWw",
	"mainnav--parentli": "_37vkqMIV5ZO0PVYsP7jZQJ",
	"mainnav--parentli--link": "_2a0yiOxZLsX7mBl32bIliq",
	"mainnav--parentli--linkfocus": "_2FqeX5LU8CiD1wTAzphPqf",
	"mainnav--inner": "_2yitZHOYAlAcgFs1SMIeJ5"
};

/***/ }),

/***/ "./components/common/mobileNav.less":
/*!******************************************!*\
  !*** ./components/common/mobileNav.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_2yk_aLoQ5XQ27C9RnoZafw",
	"close": "_1kPGnLim9-_dtcKUD-mDa3",
	"MobileNav": "_2cPfHgVBgyqrMjVtjNFaqp",
	"MobileNavUl": "DvTxWYfwULcoK8dTweCus",
	"MobileNavInner": "yT07IFGRYM7F7etZ0MD-P"
};

/***/ }),

/***/ "./components/common/page.less":
/*!*************************************!*\
  !*** ./components/common/page.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"page": "_3oYCQ7kEwnDEAQfXAnEUXX"
};

/***/ }),

/***/ "./components/common/utils.js":
/*!************************************!*\
  !*** ./components/common/utils.js ***!
  \************************************/
/*! exports provided: nav, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nav", function() { return nav; });
var nav = [{
  name: 'Каталог',
  route: '',
  children: [{
    name: '3D принтеры',
    route: '/catalog/printers'
  }, {
    name: '3D сканеры',
    route: '/catalog/scaners'
  }, {
    name: 'расходные материалы',
    route: '/catalog/materials'
  }, {
    name: '3D ручки',
    route: '/catalog/pens'
  }]
}, {
  name: '3D печать',
  route: '3d'
}, {
  name: 'Статьи',
  route: 'articles'
}, {
  name: 'Сервис-центр',
  route: 'service'
}, {
  name: 'Аренда',
  route: 'rent'
}, {
  name: 'О нас',
  route: 'about'
}];
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./configuration/app.config.js":
/*!*************************************!*\
  !*** ./configuration/app.config.js ***!
  \*************************************/
/*! exports provided: API_HOST, API_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_HOST", function() { return API_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_TOKEN", function() { return API_TOKEN; });
var API_HOST = 'https://3dapi.amaletin.ru/';
var API_TOKEN = process.env.REACT_ENV_API_TOKEN;

/***/ }),

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/*! exports provided: client, getFromAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromAPI", function() { return getFromAPI; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var directus_sdk_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! directus-sdk-javascript */ "directus-sdk-javascript");
/* harmony import */ var directus_sdk_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(directus_sdk_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configuration_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration/app.config */ "./configuration/app.config.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var client = new directus_sdk_javascript__WEBPACK_IMPORTED_MODULE_1__["RemoteInstance"]({
  url: _configuration_app_config__WEBPACK_IMPORTED_MODULE_2__["API_HOST"],
  accessToken: [_configuration_app_config__WEBPACK_IMPORTED_MODULE_2__["API_TOKEN"]]
});
var getFromAPI =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(collection, options) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.getItems(collection, options);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getFromAPI(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./lib/enums.ts":
/*!**********************!*\
  !*** ./lib/enums.ts ***!
  \**********************/
/*! exports provided: EState, EProductType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EState", function() { return EState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EProductType", function() { return EProductType; });
/**
 * Статус загрузки данных.
 */
var EState;

(function (EState) {
  EState["IDLE"] = "IDLE";
  EState["FETCHING"] = "FETCHING";
  EState["SUCCESS"] = "SUCCESS";
  EState["FAIL"] = "FAIL";
})(EState || (EState = {}));

;
var EProductType;

(function (EProductType) {
  EProductType[EProductType["PRINTER"] = 1] = "PRINTER";
  EProductType[EProductType["SCANER"] = 2] = "SCANER";
  EProductType[EProductType["PEN"] = 3] = "PEN";
  EProductType[EProductType["CONSUMABLE"] = 4] = "CONSUMABLE";
})(EProductType || (EProductType = {}));

/***/ }),

/***/ "./lib/services.ts":
/*!*************************!*\
  !*** ./lib/services.ts ***!
  \*************************/
/*! exports provided: fetchProducts, fetchBrands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBrands", function() { return fetchBrands; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/api.ts");

var fetchProducts = function fetchProducts(type) {
  return Object(_api__WEBPACK_IMPORTED_MODULE_0__["getFromAPI"])('products', {
    depth: 1,
    'filters%5Btype%5D%5B%3D%5D': type
  });
};
var fetchBrands = function fetchBrands() {
  return Object(_api__WEBPACK_IMPORTED_MODULE_0__["getFromAPI"])('brands');
};

/***/ }),

/***/ "./pages/catalog/printers.tsx":
/*!************************************!*\
  !*** ./pages/catalog/printers.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/enums */ "./lib/enums.ts");
/* harmony import */ var _components_common_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/Page */ "./components/common/Page.jsx");
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/productActions */ "./actions/productActions.ts");
/* harmony import */ var _components_catalog_ProductFilters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/catalog/ProductFilters */ "./components/catalog/ProductFilters/index.tsx");
/* harmony import */ var _components_catalog_ProductList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/catalog/ProductList */ "./components/catalog/ProductList/index.tsx");

var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/src/pages/catalog/printers.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var mapStateToProps = function mapStateToProps(state) {
  var products = state.products;
  return {
    products: products.data
  };
};

var Printers =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Printers, _React$Component);

  function Printers() {
    _classCallCheck(this, Printers);

    return _possibleConstructorReturn(this, _getPrototypeOf(Printers).apply(this, arguments));
  }

  _createClass(Printers, [{
    key: "render",
    value: function render() {
      var products = this.props.products;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "catalogLayout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_catalog_ProductFilters__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_catalog_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        products: products,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var reduxStore, products;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reduxStore = _ref.reduxStore;
                _context.next = 3;
                return reduxStore.dispatch(Object(_actions_productActions__WEBPACK_IMPORTED_MODULE_5__["loadProducts"])(_lib_enums__WEBPACK_IMPORTED_MODULE_3__["EProductType"].PRINTER));

              case 3:
                products = _context.sent;
                return _context.abrupt("return", {
                  products: products
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Printers;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Printers));

/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** multi ./pages/catalog/printers.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/catalog/printers.tsx */"./pages/catalog/printers.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "directus-sdk-javascript":
/*!******************************************!*\
  !*** external "directus-sdk-javascript" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("directus-sdk-javascript");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=printers.js.map