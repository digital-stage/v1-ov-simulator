webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PresetEditor.tsx":
/*!*************************************!*\
  !*** ./components/PresetEditor.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/PresetEditor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar ChannelActivator = function ChannelActivator(props) {\n  _s();\n\n  var numChannels = props.numChannels,\n      channels = props.channels;\n  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (channel) {}, [channels]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      id: \"input-\" + channelId,\n      type: \"checkbox\",\n      value: channelId\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: \"input-\" + channelId,\n      children: channelId + 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(ChannelActivator, \"y/H5GIiu8jog9Hni7mlqNguo+do=\");\n\n_c = ChannelActivator;\n\nvar PresetEditor = function PresetEditor(props) {\n  _s2();\n\n  var soundCard = props.soundCard;\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      presets = _useStage.presets;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: soundCard.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numInputChannels, \" input channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numOutputChannels, \" output channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.sampleRate, \" Hz sample rate\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: presets.bySoundCard[soundCard._id] && presets.bySoundCard[soundCard._id].map(function (id) {\n          return presets.byId[id];\n        }).map(function (preset) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [preset.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Input:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: Array.from(Array(soundCard.numInputChannels).keys()).map(function (channelId) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                        id: \"input-\" + channelId,\n                        type: \"checkbox\",\n                        value: channelId\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 55,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                        htmlFor: \"input-\" + channelId,\n                        children: channelId + 1\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 56,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Output:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: Array.from(Array(soundCard.numOutputChannels).keys()).map(function (channelId) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                        id: \"output-\" + channelId,\n                        type: \"checkbox\",\n                        value: channelId\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 68,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                        htmlFor: \"output-\" + channelId,\n                        children: channelId + 1\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 69,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, _this);\n};\n\n_s2(PresetEditor, \"ZI+ANa380MXm61R17YTaLh5v+Wc=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = PresetEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PresetEditor);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ChannelActivator\");\n$RefreshReg$(_c2, \"PresetEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmVzZXRFZGl0b3IudHN4PzgzYjEiXSwibmFtZXMiOlsiQ2hhbm5lbEFjdGl2YXRvciIsInByb3BzIiwibnVtQ2hhbm5lbHMiLCJjaGFubmVscyIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwiY2hhbm5lbCIsImNoYW5uZWxJZCIsIlByZXNldEVkaXRvciIsInNvdW5kQ2FyZCIsInVzZVN0YWdlIiwicHJlc2V0cyIsIm5hbWUiLCJudW1JbnB1dENoYW5uZWxzIiwibnVtT3V0cHV0Q2hhbm5lbHMiLCJzYW1wbGVSYXRlIiwiYnlTb3VuZENhcmQiLCJfaWQiLCJtYXAiLCJpZCIsImJ5SWQiLCJwcmVzZXQiLCJBcnJheSIsImZyb20iLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBSW5CO0FBQUE7O0FBQUEsTUFDS0MsV0FETCxHQUM4QkQsS0FEOUIsQ0FDS0MsV0FETDtBQUFBLE1BQ2tCQyxRQURsQixHQUM4QkYsS0FEOUIsQ0FDa0JFLFFBRGxCO0FBR0YsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLE9BQUQsRUFBcUIsQ0FFckQsQ0FGK0IsRUFFN0IsQ0FBQ0gsUUFBRCxDQUY2QixDQUFoQztBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBTyxRQUFFLEVBQUUsV0FBV0ksU0FBdEI7QUFBaUMsVUFBSSxFQUFDLFVBQXRDO0FBQWlELFdBQUssRUFBRUE7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBTyxhQUFPLEVBQUUsV0FBV0EsU0FBM0I7QUFBQSxnQkFBdUNBLFNBQVMsR0FBRztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQU1ILENBakJEOztHQUFNUCxnQjs7S0FBQUEsZ0I7O0FBbUJOLElBQU1RLFlB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RDs7O01BSmhCRixZO0FBMERTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJlc2V0RWRpdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U291bmRDYXJkfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvU291bmRDYXJkXCI7XG5pbXBvcnQgdXNlU3RhZ2UgZnJvbSBcIi4uL2xpYnMvdXNlU3RhZ2VcIjtcbmltcG9ydCB7dXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDaGFubmVsQWN0aXZhdG9yID0gKHByb3BzOiB7XG4gICAgbnVtQ2hhbm5lbHM6IG51bWJlcjtcbiAgICBjaGFubmVsczogbnVtYmVyW107XG4gICAgb25DaGFuZ2U6IChjaGFubmVsczogbnVtYmVyW10pID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3Qge251bUNoYW5uZWxzLCBjaGFubmVsc30gPSBwcm9wcztcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChjaGFubmVsOiBudW1iZXIpID0+IHtcblxuICAgIH0sIFtjaGFubmVsc10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD17XCJpbnB1dC1cIiArIGNoYW5uZWxJZH0gdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e2NoYW5uZWxJZH0vPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wiaW5wdXQtXCIgKyBjaGFubmVsSWR9PntjaGFubmVsSWQgKyAxfTwvbGFiZWw+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmNvbnN0IFByZXNldEVkaXRvciA9IChwcm9wczoge1xuICAgIHNvdW5kQ2FyZDogU291bmRDYXJkXG59KSA9PiB7XG4gICAgY29uc3Qge3NvdW5kQ2FyZH0gPSBwcm9wcztcbiAgICBjb25zdCB7cHJlc2V0c30gPSB1c2VTdGFnZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz57c291bmRDYXJkLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmQubnVtSW5wdXRDaGFubmVsc30gaW5wdXQgY2hhbm5lbHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAge3NvdW5kQ2FyZC5udW1PdXRwdXRDaGFubmVsc30gb3V0cHV0IGNoYW5uZWxzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmQuc2FtcGxlUmF0ZX0gSHogc2FtcGxlIHJhdGVcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtwcmVzZXRzLmJ5U291bmRDYXJkW3NvdW5kQ2FyZC5faWRdICYmIHByZXNldHMuYnlTb3VuZENhcmRbc291bmRDYXJkLl9pZF0ubWFwKGlkID0+IHByZXNldHMuYnlJZFtpZF0pLm1hcChwcmVzZXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmZyb20oQXJyYXkoc291bmRDYXJkLm51bUlucHV0Q2hhbm5lbHMpLmtleXMoKSkubWFwKChjaGFubmVsSWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17XCJpbnB1dC1cIiArIGNoYW5uZWxJZH0gdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e2NoYW5uZWxJZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wiaW5wdXQtXCIgKyBjaGFubmVsSWR9PntjaGFubmVsSWQgKyAxfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91dHB1dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KHNvdW5kQ2FyZC5udW1PdXRwdXRDaGFubmVscykua2V5cygpKS5tYXAoKGNoYW5uZWxJZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtcIm91dHB1dC1cIiArIGNoYW5uZWxJZH0gdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e2NoYW5uZWxJZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wib3V0cHV0LVwiICsgY2hhbm5lbElkfT57Y2hhbm5lbElkICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuZXhwb3J0IGRlZmF1bHQgUHJlc2V0RWRpdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PresetEditor.tsx\n");

/***/ })

})