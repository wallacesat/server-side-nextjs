webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/hocs/withAnalytics.js":
/*!***********************************!*\
  !*** ./src/hocs/withAnalytics.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");






var _jsxFileName = "/Users/wallace/Documents/skylab/typescript/nextjs/src/hocs/withAnalytics.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
 // import { loadGetInitialProps } from 'next/dist/lib/utils';


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return function (Composed) {
    return (
      /*#__PURE__*/
      function (_Component) {
        Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, _Component);

        function _class() {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class);

          return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class).apply(this, arguments));
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            console.log('PAGE VIEW');
            react_ga__WEBPACK_IMPORTED_MODULE_7__["default"].initialize('ID_ANALYTICS');
            react_ga__WEBPACK_IMPORTED_MODULE_7__["default"].pageview(window.location.pathname);
          }
        }, {
          key: "render",
          value: function render() {
            return __jsx(Composed, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            }));
          }
        }], [{
          key: "getInitialProps",
          value: function getInitialProps(ctx) {
            return ctx;
          }
        }]);

        return _class;
      }(react__WEBPACK_IMPORTED_MODULE_6__["Component"])
    );
  };
});

/***/ })

})
//# sourceMappingURL=index.js.88623013e349dc43e652.hot-update.js.map