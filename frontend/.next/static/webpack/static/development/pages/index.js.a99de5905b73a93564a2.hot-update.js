webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Data.js":
/*!****************************!*\
  !*** ./components/Data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Data; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrapContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrapContext */ "./components/ScrapContext.js");
var _jsxFileName = "C:\\dev\\scrapcity\\scrapcity\\frontend\\components\\Data.js";



function Data() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ScrapContext__WEBPACK_IMPORTED_MODULE_1__["ScrapContext"]),
      scraps = _useContext.scraps;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Your Data: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, scraps.twitter.map(function (scrap) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: scrap.Date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, scrap.count);
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.a99de5905b73a93564a2.hot-update.js.map