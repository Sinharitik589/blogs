webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\next\\blog\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Index(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("right"),
      add = _useState[0],
      changeadd = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Hello I am home page"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "About")), __jsx("button", {
    onClick: function onClick() {
      console.log("id");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, add), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, data.map(function (data, index) {
    console.log(typeof data.title);
    return __jsx("li", {
      key: data.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "show/[id]",
      as: "show/".concat(data.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, data.title)));
  })));
}

_s(Index, "GCnn4Y3wupRZ9abEsKAe3KOstZE=");

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = [{
            id: "1",
            title: "one"
          }, {
            id: "2",
            title: "two"
          }, {
            id: "3",
            title: "three"
          }, {
            id: "4",
            title: "four"
          }];
          console.log(data);
          return _context.abrupt("return", {
            data: data
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJ1c2VTdGF0ZSIsImFkZCIsImNoYW5nZWFkZCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNiQyxzREFBUSxDQUFDLE9BQUQsQ0FESztBQUFBLE1BQy9CQyxHQUQrQjtBQUFBLE1BQzFCQyxTQUQwQjs7QUFFdEMsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FGRixFQUtFO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0gsR0FMSCxDQUxGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDTixJQUFELEVBQU9PLEtBQVAsRUFBaUI7QUFDekJILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQU9MLElBQUksQ0FBQ1EsS0FBeEI7QUFDQSxXQUNFO0FBQUksU0FBRyxFQUFFUixJQUFJLENBQUNTLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsV0FBWDtBQUF1QixRQUFFLGlCQUFVVCxJQUFJLENBQUNTLEVBQWYsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVQsSUFBSSxDQUFDUSxLQUFULENBREYsQ0FERixDQURGO0FBT0QsR0FUQSxDQURILENBYkYsQ0FERjtBQTRCRDs7R0E5QnVCVCxLOztLQUFBQSxLO0FBZ0N4QkEsS0FBSyxDQUFDVyxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJWLGNBRGdCLEdBQ1QsQ0FDWDtBQUNFUyxjQUFFLEVBQUUsR0FETjtBQUVFRCxpQkFBSyxFQUFFO0FBRlQsV0FEVyxFQUtYO0FBQ0VDLGNBQUUsRUFBRSxHQUROO0FBRUVELGlCQUFLLEVBQUU7QUFGVCxXQUxXLEVBU1g7QUFDRUMsY0FBRSxFQUFFLEdBRE47QUFFRUQsaUJBQUssRUFBRTtBQUZULFdBVFcsRUFhWDtBQUNFQyxjQUFFLEVBQUUsR0FETjtBQUVFRCxpQkFBSyxFQUFFO0FBRlQsV0FiVyxDQURTO0FBb0J0QkosaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBcEJzQiwyQ0FxQmY7QUFDTEEsZ0JBQUksRUFBSkE7QUFESyxXQXJCZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTgyZTM4ZmY1MjYxM2ExNGZhNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgW2FkZCwgY2hhbmdlYWRkXSA9IHVzZVN0YXRlKFwicmlnaHRcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxwPkhlbGxvIEkgYW0gaG9tZSBwYWdlPC9wPlxyXG4gICAgICA8TGluayBocmVmPVwiYWJvdXRcIj5cclxuICAgICAgICA8YT5BYm91dDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpZFwiKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2FkZH1cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2RhdGEubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGRhdGEudGl0bGUpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInNob3cvW2lkXVwiIGFzPXtgc2hvdy8ke2RhdGEuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57ZGF0YS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogXCIxXCIsXHJcbiAgICAgIHRpdGxlOiBcIm9uZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICB0aXRsZTogXCJ0d29cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjNcIixcclxuICAgICAgdGl0bGU6IFwidGhyZWVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjRcIixcclxuICAgICAgdGl0bGU6IFwiZm91clwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9