module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./actions/postsActions.ts":
/*!*********************************!*\
  !*** ./actions/postsActions.ts ***!
  \*********************************/
/*! exports provided: GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_POST_START, GET_POST_SUCCESS, GET_POST_FAIL, getPostsStart, getPostsSuccess, getPostsFail, getPostStart, getPostSuccess, getPostFail, loadPosts, loadPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_START", function() { return GET_POSTS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_SUCCESS", function() { return GET_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_FAIL", function() { return GET_POSTS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_START", function() { return GET_POST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_SUCCESS", function() { return GET_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_FAIL", function() { return GET_POST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsStart", function() { return getPostsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsSuccess", function() { return getPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsFail", function() { return getPostsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostStart", function() { return getPostStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostSuccess", function() { return getPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostFail", function() { return getPostFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPosts", function() { return loadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPost", function() { return loadPost; });
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/services */ "./lib/services.ts");

var GET_POSTS_START = 'GET_POSTS_START';
var GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
var GET_POSTS_FAIL = 'GET_POSTS_FAIL';
var GET_POST_START = 'GET_POST_START';
var GET_POST_SUCCESS = 'GET_POST_SUCCESS';
var GET_POST_FAIL = 'GET_POST_FAIL';
var getPostsStart = function getPostsStart() {
  return {
    type: GET_POSTS_START
  };
};
var getPostsSuccess = function getPostsSuccess(data) {
  return {
    type: GET_POSTS_SUCCESS,
    data: data
  };
};
var getPostsFail = function getPostsFail(error) {
  return {
    type: GET_POSTS_FAIL,
    error: error
  };
};
var getPostStart = function getPostStart() {
  return {
    type: GET_POST_START
  };
};
var getPostSuccess = function getPostSuccess(data) {
  return {
    type: GET_POST_SUCCESS,
    data: data
  };
};
var getPostFail = function getPostFail(error) {
  return {
    type: GET_POST_FAIL,
    error: error
  };
};
var loadPosts = function loadPosts() {
  return function (dispatch) {
    dispatch(getPostsStart());
    return Object(_lib_services__WEBPACK_IMPORTED_MODULE_0__["fetchPosts"])().then(function (response) {
      dispatch(getPostsSuccess(response));
    }, function (error) {
      return dispatch(getPostsFail(error));
    });
  };
};
var loadPost = function loadPost(id) {
  return function (dispatch) {
    dispatch(getPostStart());
    return Object(_lib_services__WEBPACK_IMPORTED_MODULE_0__["fetchPost"])(id).then(function (response) {
      dispatch(getPostSuccess(response.data));
    }, function (error) {
      return dispatch(getPostFail(error));
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
/*! exports provided: fetchProducts, fetchBrands, fetchPosts, fetchPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBrands", function() { return fetchBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPost", function() { return fetchPost; });
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
var fetchPosts = function fetchPosts() {
  return Object(_api__WEBPACK_IMPORTED_MODULE_0__["getFromAPI"])('posts');
};
var fetchPost = function fetchPost(id) {
  return Object(_api__WEBPACK_IMPORTED_MODULE_0__["getFromAPI"])("posts", {
    id: id
  });
};

/***/ }),

/***/ "./lib/with-redux-store.tsx":
/*!**********************************!*\
  !*** ./lib/with-redux-store.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.ts");

var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/lib/with-redux-store.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithRedux, _React$Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps(appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
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

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWithRedux).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }));
        }
      }]);

      return AppWithRedux;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
  );
});

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/with-redux-store */ "./lib/with-redux-store.tsx");
var _jsxFileName = "/Users/aleksandrmaletin/Sites/3d/pages/_app.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: reduxStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp));

/***/ }),

/***/ "./reducers/brandReducer.ts":
/*!**********************************!*\
  !*** ./reducers/brandReducer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_unionBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/unionBy */ "lodash/unionBy");
/* harmony import */ var lodash_unionBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_unionBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_brandActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/brandActions */ "./actions/brandActions.ts");
/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/enums */ "./lib/enums.ts");



var initialState = {
  data: [],
  state: _lib_enums__WEBPACK_IMPORTED_MODULE_2__["EState"].IDLE
};

var brandsReducer = function brandsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_brandActions__WEBPACK_IMPORTED_MODULE_1__["GET_BRANDS_START"]:
      return Object.assign({}, state, {
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_2__["EState"].FETCHING
      });

    case _actions_brandActions__WEBPACK_IMPORTED_MODULE_1__["GET_BRANDS_SUCCESS"]:
      var brands = action.data.data;
      return Object.assign({}, state, {
        data: lodash_unionBy__WEBPACK_IMPORTED_MODULE_0___default()(state.data, brands, 'id'),
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_2__["EState"].SUCCESS
      });

    case _actions_brandActions__WEBPACK_IMPORTED_MODULE_1__["GET_BRANDS_FAIL"]:
      console.log(action.error);
      return Object.assign({}, state, {
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_2__["EState"].FAIL
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (brandsReducer);

/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productReducer */ "./reducers/productReducer.ts");
/* harmony import */ var _uiReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiReducer */ "./reducers/uiReducer.ts");
/* harmony import */ var _brandReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brandReducer */ "./reducers/brandReducer.ts");
/* harmony import */ var _postsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postsReducer */ "./reducers/postsReducer.ts");





var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  brands: _brandReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  posts: _postsReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  products: _productReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  ui: _uiReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./reducers/postsReducer.ts":
/*!**********************************!*\
  !*** ./reducers/postsReducer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keyBy */ "lodash/keyBy");
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_postsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/postsActions */ "./actions/postsActions.ts");
/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/enums */ "./lib/enums.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./reducers/utils.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initialState = {
  current: {},
  data: [],
  state: _lib_enums__WEBPACK_IMPORTED_MODULE_3__["EState"].IDLE
};

var postsReducer = function postsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_postsActions__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS_START"]:
    case _actions_postsActions__WEBPACK_IMPORTED_MODULE_2__["GET_POST_START"]:
      return _objectSpread({}, state, {
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_3__["EState"].FETCHING
      });

    case _actions_postsActions__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS_SUCCESS"]:
      var posts = lodash_keyBy__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["processPosts"])(action.data), 'id');
      return _objectSpread({}, state, {
        data: _objectSpread({}, state.data, posts),
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_3__["EState"].SUCCESS
      });

    case _actions_postsActions__WEBPACK_IMPORTED_MODULE_2__["GET_POST_SUCCESS"]:
      var post = action.data;
      return _objectSpread({}, state, {
        current: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(post) && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["processPost"])(post),
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_3__["EState"].SUCCESS
      });

    case _actions_postsActions__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS_FAIL"]:
    case _actions_postsActions__WEBPACK_IMPORTED_MODULE_2__["GET_POST_FAIL"]:
      console.log(action.error);
      return _objectSpread({}, state, {
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_3__["EState"].FAIL
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (postsReducer);

/***/ }),

/***/ "./reducers/productReducer.ts":
/*!************************************!*\
  !*** ./reducers/productReducer.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_unionBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/unionBy */ "lodash/unionBy");
/* harmony import */ var lodash_unionBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_unionBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/productActions */ "./actions/productActions.ts");
/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/enums */ "./lib/enums.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./reducers/utils.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var initialState = {
  data: [],
  state: _lib_enums__WEBPACK_IMPORTED_MODULE_2__["EState"].IDLE
};

var productReducer = function productReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_productActions__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCTS_START"]:
      return _objectSpread({}, state, {
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_2__["EState"].FETCHING
      });

    case _actions_productActions__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCTS_SUCCESS"]:
      var products = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["processProducts"])(action.data);
      return _objectSpread({}, state, {
        data: lodash_unionBy__WEBPACK_IMPORTED_MODULE_0___default()(state.data, products, 'id'),
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_2__["EState"].SUCCESS
      });

    case _actions_productActions__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCTS_FAIL"]:
      console.log(action.error);
      return _objectSpread({}, state, {
        state: _lib_enums__WEBPACK_IMPORTED_MODULE_2__["EState"].FAIL
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ }),

/***/ "./reducers/uiReducer.ts":
/*!*******************************!*\
  !*** ./reducers/uiReducer.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/productActions */ "./actions/productActions.ts");

var initialState = {
  showLoader: false
};

var uiReducer = function uiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_productActions__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_START"]:
      return Object.assign({}, state, {
        showLoader: true
      });

    case _actions_productActions__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_SUCCESS"]:
    case _actions_productActions__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_FAIL"]:
      return Object.assign({}, state, {
        showLoader: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uiReducer);

/***/ }),

/***/ "./reducers/utils.ts":
/*!***************************!*\
  !*** ./reducers/utils.ts ***!
  \***************************/
/*! exports provided: processProducts, processPosts, processPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processProducts", function() { return processProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processPosts", function() { return processPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processPost", function() { return processPost; });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/replace */ "lodash/replace");
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configuration_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration/app.config */ "./configuration/app.config.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var processProducts = function processProducts(products) {
  return products.data.map(function (product) {
    return _objectSpread({}, product, {
      chamberHeight: product.chamber_height,
      chamberLength: product.chamber_length,
      chamberType: product.chamber_type,
      chamberWidth: product.chamber_width,
      heatedBed: product.heated_bed,
      layerResolution: product.layer_resolution,
      picture: product.picture && product.picture.data.thumbnail_url,
      type: product.type.data.id
    });
  });
};
var processPosts = function processPosts(posts) {
  return posts.data.map(function (post) {
    return processPost(post);
  });
};
var processPost = function processPost(post) {
  // console.log(post)
  return _objectSpread({}, post, {
    body: lodash_replace__WEBPACK_IMPORTED_MODULE_1___default()(post.body, 'src="/storage', "src=\"".concat(_configuration_app_config__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "storage")),
    cover: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(post.cover) && post.cover.data.name,
    cover_caption: post.cover_caption
  });
};

/***/ }),

/***/ "./store/configureStore.ts":
/*!*********************************!*\
  !*** ./store/configureStore.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.ts");




/* harmony default export */ __webpack_exports__["default"] = (function (initialStore) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["reducers"], initialStore, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./pages/_app.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.tsx */"./pages/_app.tsx");


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

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/keyBy":
/*!*******************************!*\
  !*** external "lodash/keyBy" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/keyBy");

/***/ }),

/***/ "lodash/replace":
/*!*********************************!*\
  !*** external "lodash/replace" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/replace");

/***/ }),

/***/ "lodash/unionBy":
/*!*********************************!*\
  !*** external "lodash/unionBy" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/unionBy");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map