webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ScrapContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrapContext */ "./components/ScrapContext.js");



var _jsxFileName = "C:\\dev\\scrapcity\\scrapcity\\frontend\\components\\Page.js";


 //custom hooks

function useScrap() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    twitter: [],
    instagram: []
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      scraps = _useState2[0],
      setScraps = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('mounting and updating');
              _context.next = 3;
              return fetch('http://localhost:1234/data');

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              data = _context.sent;
              console.log(data);
              setScraps(data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return scraps;
}

function Page(_ref2) {
  var children = _ref2.children;
  var scraps = useScrap();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ScrapContext__WEBPACK_IMPORTED_MODULE_4__["ScrapProvider"], {
    value: {
      scraps: scraps
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children));
}

/***/ })

})
//# sourceMappingURL=index.js.d88512de280650ec3b5c.hot-update.js.map