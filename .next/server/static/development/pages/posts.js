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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/common/Footer/footer.less":
/*!**********************************************!*\
  !*** ./components/common/Footer/footer.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/common/Footer/index.tsx":
/*!********************************************!*\
  !*** ./components/common/Footer/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.less */ "./components/common/Footer/footer.less");
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_less__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container footer--container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "socials"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://vk.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/social-vk.png",
    alt: "https://vk.com"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://instagram.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/social-insta.png",
    alt: "https://instagram.com"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://facebook.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/social-fb.png",
    alt: "https://facebook.com"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contacts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "address"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/contacts-address.png",
    alt: "\u0410\u0434\u0440\u0435\u0441"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0443\u043B. \u0423\u0440\u0430\u043B\u044C\u0441\u043A\u0430\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0434.3 \u043A\u043E\u0440\u043F\u0443\u0441 1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "phone"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/contacts-phone.png",
    alt: "\u0410\u0434\u0440\u0435\u0441"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "(812)-02-05"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "(812)-02-06"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "email"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/contacts-email.png",
    alt: "\u0410\u0434\u0440\u0435\u0441"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:nerudmhdf@mail.ru"
  }, "nerudmhdf@mail.ru")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright"
  }, "\xA9 2018")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/common/Header/header.less":
/*!**********************************************!*\
  !*** ./components/common/Header/header.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/common/Header/index.tsx":
/*!********************************************!*\
  !*** ./components/common/Header/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainNav */ "./components/common/MainNav/index.tsx");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.less */ "./components/common/Header/header.less");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_less__WEBPACK_IMPORTED_MODULE_3__);





var Header = function Header(_ref) {
  var onToggleMobileNav = _ref.onToggleMobileNav;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header--inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header--logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/images/logo_01.png",
    alt: "logo"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header--right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header--nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainNav__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header--search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/search.svg",
    alt: "search"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header--burger",
    onClick: onToggleMobileNav,
    onKeyDown: onToggleMobileNav,
    role: "button",
    tabIndex: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/menu.svg",
    alt: "menu"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/common/MainNav/index.tsx":
/*!*********************************************!*\
  !*** ./components/common/MainNav/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./components/common/utils.js");
/* harmony import */ var _mainNav_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainNav.less */ "./components/common/MainNav/mainNav.less");
/* harmony import */ var _mainNav_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mainNav_less__WEBPACK_IMPORTED_MODULE_3__);





var renderNav = function renderNav(items) {
  return items && items.map(function (item) {
    return item.children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      key: item.name,
      item: item,
      parent: true
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      key: item.name,
      item: item
    });
  });
};

var NavItem = function NavItem(_ref) {
  var item = _ref.item,
      parent = _ref.parent;
  var renderedChildren = renderNav(item.children);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mainnav--parentli"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: item.route
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "mainnav--parentli--link"
  }, item.name)), parent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mainnav--inner"
  }, renderedChildren));
};

NavItem.defaultProps = {
  item: {},
  parent: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mainnav"
  }, renderNav(_utils__WEBPACK_IMPORTED_MODULE_2__["nav"]));
});

/***/ }),

/***/ "./components/common/MainNav/mainNav.less":
/*!************************************************!*\
  !*** ./components/common/MainNav/mainNav.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/common/MobileNav/index.tsx":
/*!***********************************************!*\
  !*** ./components/common/MobileNav/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./components/common/utils.js");
/* harmony import */ var _mobileNav_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobileNav.less */ "./components/common/MobileNav/mobileNav.less");
/* harmony import */ var _mobileNav_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mobileNav_less__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var renderNav = function renderNav(items) {
  return items && items.map(function (item) {
    return item.children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      key: item.name,
      item: item,
      parent: true
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      key: item.name,
      item: item
    });
  });
};

var NavItem = function NavItem(_ref) {
  var _ref$item = _ref.item,
      item = _ref$item === void 0 ? {} : _ref$item,
      _ref$parent = _ref.parent,
      parent = _ref$parent === void 0 ? false : _ref$parent;
  var renderedChildren = renderNav(item.children);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "MobileNavParentli"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: item.route
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "MobileNavParentliLink"
  }, item.name)), parent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "MobileNavInner"
  }, renderedChildren));
};

var MobileNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileNav, _React$Component);

  function MobileNav() {
    _classCallCheck(this, MobileNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(MobileNav).apply(this, arguments));
  }

  _createClass(MobileNav, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _utils__WEBPACK_IMPORTED_MODULE_2__["canUseDOM"] && document.body.classList.remove('locked');
    }
  }, {
    key: "render",
    value: function render() {
      var onToggleMobileNav = this.props.onToggleMobileNav;
      var dynamicStyle = {
        top: this.props.show ? '0' : '-100vh'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobileNav--container",
        style: dynamicStyle,
        onScroll: function onScroll() {
          return undefined;
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "close",
        onClick: onToggleMobileNav,
        onKeyDown: onToggleMobileNav,
        role: "button",
        tabIndex: 0
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/icons/close.svg",
        alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "MobileNav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "MobileNavUl"
      }, renderNav(_utils__WEBPACK_IMPORTED_MODULE_2__["nav"]))));
    }
  }]);

  return MobileNav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

/***/ }),

/***/ "./components/common/MobileNav/mobileNav.less":
/*!****************************************************!*\
  !*** ./components/common/MobileNav/mobileNav.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/common/Page/index.tsx":
/*!******************************************!*\
  !*** ./components/common/Page/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./components/common/utils.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./components/common/Header/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer */ "./components/common/Footer/index.tsx");
/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MobileNav */ "./components/common/MobileNav/index.tsx");
/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PageHeader */ "./components/common/PageHeader/index.tsx");
/* harmony import */ var _page_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.less */ "./components/common/Page/page.less");
/* harmony import */ var _page_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_less__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Page)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showMenu: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleMobileNav", function () {
      var showMenu = _this.state.showMenu;

      _this.setState({
        showMenu: !showMenu
      }, function () {
        if (showMenu) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["canUseDOM"] && document.body.classList.remove('locked');
        } else {
          _utils__WEBPACK_IMPORTED_MODULE_1__["canUseDOM"] && document.body.classList.add('locked');
        }
      });
    });

    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          customStyles = _this$props.customStyles,
          header = _this$props.header,
          title = _this$props.title,
          subtitle = _this$props.subtitle;
      var showMenu = this.state.showMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page",
        style: customStyles
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pageTop"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onToggleMobileNav: this.handleToggleMobileNav
      }), header && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: title,
        subtitle: subtitle
      }), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MobileNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onToggleMobileNav: this.handleToggleMobileNav,
        show: showMenu
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Page, "defaultProps", {
  header: true
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/common/Page/page.less":
/*!******************************************!*\
  !*** ./components/common/Page/page.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/common/PageHeader/index.tsx":
/*!************************************************!*\
  !*** ./components/common/PageHeader/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pageHeader_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageHeader.less */ "./components/common/PageHeader/pageHeader.less");
/* harmony import */ var _pageHeader_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pageHeader_less__WEBPACK_IMPORTED_MODULE_1__);



var PageHeader = function PageHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page--header container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, subtitle));
};

/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./components/common/PageHeader/pageHeader.less":
/*!******************************************************!*\
  !*** ./components/common/PageHeader/pageHeader.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/common/utils.js":
/*!************************************!*\
  !*** ./components/common/utils.js ***!
  \************************************/
/*! exports provided: nav, canUseDOM, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nav", function() { return nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
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
  route: '/3d'
}, {
  name: 'Статьи',
  route: '/posts'
}, {
  name: 'Сервис-центр',
  route: '/service'
}, {
  name: 'Аренда',
  route: '/rent'
}, {
  name: 'О нас',
  route: '/about'
}];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./components/posts/PostItem/index.tsx":
/*!*********************************************!*\
  !*** ./components/posts/PostItem/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configuration_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration/app.config */ "./configuration/app.config.js");
/* harmony import */ var _posts_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.less */ "./components/posts/posts.less");
/* harmony import */ var _posts_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_posts_less__WEBPACK_IMPORTED_MODULE_3__);





var PostItem = function PostItem(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-item--card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "post/".concat(post.id),
    href: "/post?id=".concat(post.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "".concat(_configuration_app_config__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "thumbnail/700/210/crop/best/").concat(post.cover)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "post/".concat(post.id),
    href: "/post?id=".concat(post.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, post.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "post/".concat(post.id),
    href: "/post?id=".concat(post.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, post.subtitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "post/".concat(post.id),
    href: "/post?id=".concat(post.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-item--excerpt",
    dangerouslySetInnerHTML: {
      __html: post.excerpt
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostItem);

/***/ }),

/***/ "./components/posts/PostList/index.tsx":
/*!*********************************************!*\
  !*** ./components/posts/PostList/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PostItem */ "./components/posts/PostItem/index.tsx");
/* harmony import */ var _posts_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.less */ "./components/posts/posts.less");
/* harmony import */ var _posts_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_posts_less__WEBPACK_IMPORTED_MODULE_3__);





var PostList = function PostList(_ref) {
  var posts = _ref.posts;
  var renderedPosts = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(posts, function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: post.id,
      post: post
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "posts--container"
  }, renderedPosts);
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./components/posts/posts.less":
/*!*************************************!*\
  !*** ./components/posts/posts.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/posts.tsx ***!
  \*************************/
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
/* harmony import */ var _components_common_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Page */ "./components/common/Page/index.tsx");
/* harmony import */ var _actions_postsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/postsActions */ "./actions/postsActions.ts");
/* harmony import */ var _components_posts_PostList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/posts/PostList */ "./components/posts/PostList/index.tsx");


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
  var posts = state.posts;
  return {
    posts: posts.data
  };
};

var Posts =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Posts, _React$Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, _getPrototypeOf(Posts).apply(this, arguments));
  }

  _createClass(Posts, [{
    key: "render",
    value: function render() {
      var posts = this.props.posts;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "\u0421\u0442\u0430\u0442\u044C\u0438"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_posts_PostList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        posts: posts
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var reduxStore, posts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reduxStore = _ref.reduxStore;
                _context.next = 3;
                return reduxStore.dispatch(Object(_actions_postsActions__WEBPACK_IMPORTED_MODULE_4__["loadPosts"])());

              case 3:
                posts = _context.sent;
                return _context.abrupt("return", {
                  posts: posts
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

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Posts));

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/posts.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/posts.tsx */"./pages/posts.tsx");


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

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

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
//# sourceMappingURL=posts.js.map