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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/carousel/Arrows.tsx":
/*!****************************************!*\
  !*** ./components/carousel/Arrows.tsx ***!
  \****************************************/
/*! exports provided: RightArrow, LeftArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightArrow", function() { return RightArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftArrow", function() { return LeftArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.less */ "./components/carousel/carousel.less");
/* harmony import */ var _carousel_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel_less__WEBPACK_IMPORTED_MODULE_1__);


var RightArrow = function RightArrow(_ref) {
  var goToNextSlide = _ref.goToNextSlide,
      handleKeyDown = _ref.handleKeyDown;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrowRight",
    onClick: goToNextSlide,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/arrow-rigth.png",
    alt: "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434"
  }));
};
var LeftArrow = function LeftArrow(_ref2) {
  var goToPrevSlide = _ref2.goToPrevSlide,
      handleKeyDown = _ref2.handleKeyDown;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrowLeft",
    onClick: goToPrevSlide,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/arrow-left.png",
    alt: "\u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434"
  }));
};

/***/ }),

/***/ "./components/carousel/Carousel.tsx":
/*!******************************************!*\
  !*** ./components/carousel/Carousel.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slide */ "./components/carousel/Slide.tsx");
/* harmony import */ var _Arrows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Arrows */ "./components/carousel/Arrows.tsx");
/* harmony import */ var _carousel_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.less */ "./components/carousel/carousel.less");
/* harmony import */ var _carousel_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_less__WEBPACK_IMPORTED_MODULE_3__);
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






var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currentIndex: 0,
      translateValue: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "carousel", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "goToPrevSlide", function () {
      var images = _this.props.images;
      var currentIndex = _this.state.currentIndex;

      if (currentIndex === 0) {
        return _this.setState({
          currentIndex: images.length - 1,
          translateValue: _this.slideWidth() * -(images.length - 1)
        });
      }

      return _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + _this.slideWidth()
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "goToNextSlide", function () {
      var images = _this.props.images;
      var currentIndex = _this.state.currentIndex;

      if (currentIndex === images.length - 1) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }

      return _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this.slideWidth()
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleArrowKeys", function (event) {
      if (event.key === 'ArrowLeft') {
        _this.goToPrevSlide();
      }

      if (event.key === 'ArrowRight') {
        _this.goToNextSlide();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slideWidth", function () {
      return _this.carousel.current.clientWidth;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderPagination", function () {
      var images = _this.props.images;
      var currentIndex = _this.state.currentIndex;
      return images.map(function (image, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: idx === currentIndex ? "paginationDot" : "paginationDotActive",
          key: "pagination-dot-".concat(image.url)
        });
      });
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          arrows = _this$props.arrows,
          customStyles = _this$props.customStyles,
          images = _this$props.images,
          pagination = _this$props.pagination;
      var translateValue = this.state.translateValue;
      var carouselClass = customStyles ? customStyles.carouselStyles : 'carousel';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: carouselClass,
        ref: this.carousel
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sliderWrapper",
        style: {
          transform: "translateX(".concat(translateValue, "px)"),
          width: "".concat(100 * images.length, "%")
        }
      }, images.map(function (image) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: image.url,
          customStyles: customStyles && customStyles.slideStyles,
          image: image.url
        });
      })), arrows && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "controls"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Arrows__WEBPACK_IMPORTED_MODULE_2__["LeftArrow"], {
        goToPrevSlide: this.goToPrevSlide,
        handleKeyDown: this.handleArrowKeys
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Arrows__WEBPACK_IMPORTED_MODULE_2__["RightArrow"], {
        goToNextSlide: this.goToNextSlide,
        handleKeyDown: this.handleArrowKeys
      })), pagination && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pagination"
      }, this.renderPagination()));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Carousel, "defaultProps", {
  arrows: true,
  customStyles: null,
  pagination: true
});

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/carousel/Slide.tsx":
/*!***************************************!*\
  !*** ./components/carousel/Slide.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.less */ "./components/carousel/carousel.less");
/* harmony import */ var _carousel_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel_less__WEBPACK_IMPORTED_MODULE_1__);



var Slide = function Slide(_ref) {
  var _ref$customStyles = _ref.customStyles,
      customStyles = _ref$customStyles === void 0 ? null : _ref$customStyles,
      image = _ref.image;
  var slideStyles = {
    backgroundImage: "url(".concat(image, ")")
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: customStyles || 'slide',
    style: slideStyles
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./components/carousel/carousel.less":
/*!*******************************************!*\
  !*** ./components/carousel/carousel.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/common/Button/button.less":
/*!**********************************************!*\
  !*** ./components/common/Button/button.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/common/Button/index.tsx":
/*!********************************************!*\
  !*** ./components/common/Button/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.less */ "./components/common/Button/button.less");
/* harmony import */ var _button_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_less__WEBPACK_IMPORTED_MODULE_2__);




var Button = function Button(_ref) {
  var to = _ref.to,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: to
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button",
    role: "button",
    tabIndex: 0
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

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

/***/ "./components/main/Catalog/catalog.less":
/*!**********************************************!*\
  !*** ./components/main/Catalog/catalog.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/main/Catalog/index.tsx":
/*!*******************************************!*\
  !*** ./components/main/Catalog/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catalog_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog.less */ "./components/main/Catalog/catalog.less");
/* harmony import */ var _catalog_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_catalog_less__WEBPACK_IMPORTED_MODULE_2__);




var Catalog = function Catalog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalog"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogHeading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogHeadingInner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/icon-catalog.png",
    alt: "catalog"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogList"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/catalog/printers"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogItem"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imgContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/printers.jpg",
    alt: "3d \u041F\u0440\u0438\u043D\u0442\u0435\u0440\u044B"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogItemName"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "3d \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u044B")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/catalog/scanners"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogItem"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imgContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/scaners.jpg",
    alt: "3d \u0421\u043A\u0430\u043D\u0435\u0440\u044B"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogItemName"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "3d \u0441\u043A\u0430\u043D\u0435\u0440\u044B")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/catalog/materials"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogItem"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imgContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/materials.jpg",
    alt: "\u0420\u0430\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalogItemName"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0420\u0430\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Catalog);

/***/ }),

/***/ "./components/main/Order/index.tsx":
/*!*****************************************!*\
  !*** ./components/main/Order/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../carousel/Carousel */ "./components/carousel/Carousel.tsx");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button/index.tsx");
/* harmony import */ var _order_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.less */ "./components/main/Order/order.less");
/* harmony import */ var _order_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_order_less__WEBPACK_IMPORTED_MODULE_3__);




var images = [{
  url: '/static/images/order-slider.jpg'
}, {
  url: '/static/images/carousel-1.jpg'
}, {
  url: '/static/images/materials.jpg'
}];

var Order = function Order() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "order"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "orderHeading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "orderHeadingInner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/icon-order.png",
    alt: "order"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0417\u0430\u043A\u0430\u0436\u0438 3d \u043F\u0435\u0447\u0430\u0442\u044C")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "orderContent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "orderContentSlider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    customStyles: {
      carouselStyles: "carousel",
      slideStyles: "slide"
    },
    images: images
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "orderContentText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "3D \u043F\u0435\u0447\u0430\u0442\u044C \u0438\u0437 ABS-\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 3D-\u043C\u043E\u0434\u0435\u043B\u0438 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043B\u044E\u0431\u043E\u0439 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u0437\u0434\u0430\u043D\u0438\u044F, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F, \u0436\u0438\u043B\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u0438\u043B\u0438 \u0441\u0430\u043C\u043E\u0439 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0439 \u0448\u0435\u0441\u0442\u0435\u0440\u0435\u043D\u043A\u0438. \u041F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u043C\u043E\u0436\u0435\u0442 \u043A\u0430\u043A \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C \u043B\u0438\u0448\u044C \u043E\u0431\u0449\u0438\u0435 \u043E\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u044F, \u0442\u0430\u043A \u0438 \u0434\u0435\u0442\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0441\u0431\u043E\u0440\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/"
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./components/main/Order/order.less":
/*!******************************************!*\
  !*** ./components/main/Order/order.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/main/Promo/index.tsx":
/*!*****************************************!*\
  !*** ./components/main/Promo/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _promo_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo.less */ "./components/main/Promo/promo.less");
/* harmony import */ var _promo_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_promo_less__WEBPACK_IMPORTED_MODULE_1__);



var Promo = function Promo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "promo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "promoCarousel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/carousel-1.jpg",
    alt: "printer-1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "promoText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "promoTextInner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041F\u0440\u0438\u0431\u043B\u0438\u0436\u0430\u044F \u043E\u0431\u044A\u0451\u043C\u043D\u0443\u044E \u043F\u0435\u0447\u0430\u0442\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u041C\u043E\u0434\u0435\u043B\u044C \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u043B\u0438\u0434\u0438\u0440\u0443\u044E\u0449\u0435\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 3D \u043F\u0435\u0447\u0430\u0442\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u043E \u0440\u0435\u0432\u043E\u043B\u044E\u0446\u0438\u0438 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0434\u043B\u044F \u0430\u0434\u0434\u0438\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430, - \u043A\u043B\u044E\u0447 \u043A \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0432 \u0435\u0434\u0438\u043D\u0438\u0447\u043D\u043E\u043C \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0435."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Promo);

/***/ }),

/***/ "./components/main/Promo/promo.less":
/*!******************************************!*\
  !*** ./components/main/Promo/promo.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/main/Service/index.tsx":
/*!*******************************************!*\
  !*** ./components/main/Service/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../carousel/Carousel */ "./components/carousel/Carousel.tsx");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button/index.tsx");
/* harmony import */ var _service_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service.less */ "./components/main/Service/service.less");
/* harmony import */ var _service_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_service_less__WEBPACK_IMPORTED_MODULE_3__);




var images = [{
  url: '/static/images/order-slider.jpg'
}, {
  url: '/static/images/carousel-1.jpg'
}, {
  url: '/static/images/materials.jpg'
}];

var Service = function Service() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "serviceHeading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "serviceHeadingInner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/icon-service.png",
    alt: "service"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0421\u0435\u0440\u0432\u0438\u0441-\u0446\u0435\u043D\u0442\u0440")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "serviceContent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "serviceContentText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Lorem Ipsum Dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 3D-\u043C\u043E\u0434\u0435\u043B\u0438 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043B\u044E\u0431\u043E\u0439 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u0437\u0434\u0430\u043D\u0438\u044F, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F, \u0436\u0438\u043B\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u0438\u043B\u0438 \u0441\u0430\u043C\u043E\u0439 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0439 \u0448\u0435\u0441\u0442\u0435\u0440\u0435\u043D\u043A\u0438. \u041F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u043C\u043E\u0436\u0435\u0442 \u043A\u0430\u043A \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C \u043B\u0438\u0448\u044C \u043E\u0431\u0449\u0438\u0435 \u043E\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u044F, \u0442\u0430\u043A \u0438 \u0434\u0435\u0442\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0441\u0431\u043E\u0440\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/"
  }, "\u041C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "serviceContentSlider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    customStyles: {
      carouselStyles: "carousel",
      slideStyles: "slide"
    },
    images: images
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./components/main/Service/service.less":
/*!**********************************************!*\
  !*** ./components/main/Service/service.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/Page */ "./components/common/Page/index.tsx");
/* harmony import */ var _components_main_Promo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/Promo */ "./components/main/Promo/index.tsx");
/* harmony import */ var _components_main_Catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main/Catalog */ "./components/main/Catalog/index.tsx");
/* harmony import */ var _components_main_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/Order */ "./components/main/Order/index.tsx");
/* harmony import */ var _components_main_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/Service */ "./components/main/Service/index.tsx");







var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    header: false
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_Promo__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_Catalog__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_Order__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_Service__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");


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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map