webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/common/MobileNav/index.tsx":
/*!***********************************************!*\
  !*** ./components/common/MobileNav/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
    key: "render",
    // componentWillMount() {
    //   canUseDOM && document.body.classList.add('locked');
    // }
    // componentWillUnmount() {
    //   canUseDOM && document.body.classList.remove('locked');
    // }
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

/***/ })

})
//# sourceMappingURL=post.js.1bfb4d2a13c16fb4097c.hot-update.js.map