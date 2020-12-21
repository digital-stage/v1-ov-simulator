webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SoundCardSimulator.tsx":
/*!*******************************************!*\
  !*** ./components/SoundCardSimulator.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/types/SocketEvents */ \"./utils/types/SocketEvents.ts\");\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/SoundCardSimulator.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar AddSoundCardForm = function AddSoundCardForm() {\n  _s();\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      socket = _useStage.socket;\n\n  var nameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var addSoundCard = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (nameRef.current && socket) {\n      var name = nameRef.current.value;\n      var payload = {\n        initial: {\n          name: name,\n          driver: 'ALSA',\n          numInputChannels: 8,\n          numOutputChannels: 4,\n          sampleRate: 44100,\n          periodSize: 2,\n          numPeriods: 2\n        }\n      };\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_2__[\"ClientDeviceEvents\"].ADD_SOUND_CARD, payload);\n    }\n  }, [socket, nameRef]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"name\",\n      ref: nameRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      onClick: function onClick(e) {\n        e.preventDefault();\n        addSoundCard();\n      },\n      children: \"ADD SOUNDCARD\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AddSoundCardForm, \"b3P7bOV7EerVDoi977ClqMkozOg=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = AddSoundCardForm;\n\nvar SoundCardSimulator = function SoundCardSimulator() {\n  _s2();\n\n  var _useStage2 = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      socket = _useStage2.socket,\n      soundCards = _useStage2.soundCards;\n\n  var removeSoundCard = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (id) {\n    if (socket) {\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_2__[\"ClientDeviceEvents\"].REMOVE_SOUND_CARD, id);\n    }\n  }, [socket]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AddSoundCardForm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: soundCards.allIds.map(function (id) {\n        return soundCards.byId[id];\n      }).map(function (soundCard) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [soundCard.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return removeSoundCard(soundCard._id);\n            },\n            children: \"DEL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s2(SoundCardSimulator, \"f3la9UNCQoeJ775x6GXcIOB7L4I=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c2 = SoundCardSimulator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoundCardSimulator);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AddSoundCardForm\");\n$RefreshReg$(_c2, \"SoundCardSimulator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb3VuZENhcmRTaW11bGF0b3IudHN4P2U2MjYiXSwibmFtZXMiOlsiQWRkU291bmRDYXJkRm9ybSIsInVzZVN0YWdlIiwic29ja2V0IiwibmFtZVJlZiIsInVzZVJlZiIsImFkZFNvdW5kQ2FyZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsIm5hbWUiLCJ2YWx1ZSIsInBheWxvYWQiLCJpbml0aWFsIiwiZHJpdmVyIiwibnVtSW5wdXRDaGFubmVscyIsIm51bU91dHB1dENoYW5uZWxzIiwic2FtcGxlUmF0ZSIsInBlcmlvZFNpemUiLCJudW1QZXJpb2RzIiwiZW1pdCIsIkNsaWVudERldmljZUV2ZW50cyIsIkFERF9TT1VORF9DQVJEIiwiZSIsInByZXZlbnREZWZhdWx0IiwiU291bmRDYXJkU2ltdWxhdG9yIiwic291bmRDYXJkcyIsInJlbW92ZVNvdW5kQ2FyZCIsImlkIiwiUkVNT1ZFX1NPVU5EX0NBUkQiLCJhbGxJZHMiLCJtYXAiLCJieUlkIiwic291bmRDYXJkIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBSUE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1ZDLDhEQUFRLEVBREU7QUFBQSxNQUNwQkMsTUFEb0IsYUFDcEJBLE1BRG9COztBQUUzQixNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLEVBQXRCO0FBRUEsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDbkMsUUFBSUgsT0FBTyxDQUFDSSxPQUFSLElBQW1CTCxNQUF2QixFQUErQjtBQUMzQixVQUFNTSxJQUFJLEdBQUdMLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkUsS0FBN0I7QUFDQSxVQUFNQyxPQUE0QixHQUFHO0FBQ2pDQyxlQUFPLEVBQUU7QUFDTEgsY0FBSSxFQUFFQSxJQUREO0FBRUxJLGdCQUFNLEVBQUUsTUFGSDtBQUdMQywwQkFBZ0IsRUFBRSxDQUhiO0FBSUxDLDJCQUFpQixFQUFFLENBSmQ7QUFLTEMsb0JBQVUsRUFBRSxLQUxQO0FBTUxDLG9CQUFVLEVBQUUsQ0FOUDtBQU9MQyxvQkFBVSxFQUFFO0FBUFA7QUFEd0IsT0FBckM7QUFXQWYsWUFBTSxDQUFDZ0IsSUFBUCxDQUFZQyw0RUFBa0IsQ0FBQ0MsY0FBL0IsRUFBK0NWLE9BQS9DO0FBQ0g7QUFDSixHQWhCK0IsRUFnQjdCLENBQUNSLE1BQUQsRUFBU0MsT0FBVCxDQWhCNkIsQ0FBaEM7QUFrQkEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUcsRUFBRUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUUsaUJBQUNrQixDQUFELEVBQU87QUFDbENBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBakIsb0JBQVk7QUFDZixPQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQWpDRDs7R0FBTUwsZ0I7VUFDZUMsc0Q7OztLQURmRCxnQjs7QUFtQ04sSUFBTXVCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUFBLG1CQUNBdEIsOERBQVEsRUFEUjtBQUFBLE1BQ3RCQyxNQURzQixjQUN0QkEsTUFEc0I7QUFBQSxNQUNkc0IsVUFEYyxjQUNkQSxVQURjOztBQUc3QixNQUFNQyxlQUFlLEdBQUduQix5REFBVyxDQUFDLFVBQUNvQixFQUFELEVBQWdCO0FBQ2hELFFBQUl4QixNQUFKLEVBQVk7QUFDUkEsWUFBTSxDQUFDZ0IsSUFBUCxDQUFZQyw0RUFBa0IsQ0FBQ1EsaUJBQS9CLEVBQWtERCxFQUFsRDtBQUNIO0FBQ0osR0FKa0MsRUFJaEMsQ0FBQ3hCLE1BQUQsQ0FKZ0MsQ0FBbkM7QUFNQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsNkJBQ0kscUVBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUEsZ0JBQ0tzQixVQUFVLENBQUNJLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUFILEVBQUU7QUFBQSxlQUFJRixVQUFVLENBQUNNLElBQVgsQ0FBZ0JKLEVBQWhCLENBQUo7QUFBQSxPQUF4QixFQUFpREcsR0FBakQsQ0FBcUQsVUFBQUUsU0FBUztBQUFBLDRCQUMzRDtBQUFBLHFCQUNLQSxTQUFTLENBQUN2QixJQURmLGVBRUk7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1pQixlQUFlLENBQUNNLFNBQVMsQ0FBQ0MsR0FBWCxDQUFyQjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEMkQ7QUFBQSxPQUE5RDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBaUJILENBMUJEOztJQUFNVCxrQjtVQUMyQnRCLHNEOzs7TUFEM0JzQixrQjtBQTJCU0EsaUZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvdW5kQ2FyZFNpbXVsYXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElUZWNrb3NDbGllbnQgZnJvbSBcInRlY2tvcy1jbGllbnQvZGlzdC9JVGVja29zQ2xpZW50XCI7XG5pbXBvcnQge0NsaWVudERldmljZUV2ZW50c30gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL1NvY2tldEV2ZW50c1wiO1xuaW1wb3J0IHtEZXZpY2V9IGZyb20gXCIuLi91dGlscy90eXBlcy9EZXZpY2VcIjtcbmltcG9ydCB7QWRkU291bmRDYXJkUGF5bG9hZH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL1NvY2tldFBheWxvYWRzXCI7XG5pbXBvcnQge1NvdW5kQ2FyZH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL1NvdW5kQ2FyZFwiO1xuaW1wb3J0IHVzZVN0YWdlIGZyb20gXCIuLi9saWJzL3VzZVN0YWdlXCI7XG5cbmNvbnN0IEFkZFNvdW5kQ2FyZEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3Qge3NvY2tldH0gPSB1c2VTdGFnZSgpO1xuICAgIGNvbnN0IG5hbWVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcblxuICAgIGNvbnN0IGFkZFNvdW5kQ2FyZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKG5hbWVSZWYuY3VycmVudCAmJiBzb2NrZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkOiBBZGRTb3VuZENhcmRQYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgIGluaXRpYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZHJpdmVyOiAnQUxTQScsXG4gICAgICAgICAgICAgICAgICAgIG51bUlucHV0Q2hhbm5lbHM6IDgsXG4gICAgICAgICAgICAgICAgICAgIG51bU91dHB1dENoYW5uZWxzOiA0LFxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVSYXRlOiA0NDEwMCxcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kU2l6ZTogMixcbiAgICAgICAgICAgICAgICAgICAgbnVtUGVyaW9kczogMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzb2NrZXQuZW1pdChDbGllbnREZXZpY2VFdmVudHMuQUREX1NPVU5EX0NBUkQsIHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfSwgW3NvY2tldCwgbmFtZVJlZl0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibmFtZVwiIHJlZj17bmFtZVJlZn0vPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYWRkU291bmRDYXJkKCk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICBBREQgU09VTkRDQVJEXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn07XG5cbmNvbnN0IFNvdW5kQ2FyZFNpbXVsYXRvciA9ICgpID0+IHtcbiAgICBjb25zdCB7c29ja2V0LCBzb3VuZENhcmRzfSA9IHVzZVN0YWdlKCk7XG5cbiAgICBjb25zdCByZW1vdmVTb3VuZENhcmQgPSB1c2VDYWxsYmFjaygoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoc29ja2V0KSB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdChDbGllbnREZXZpY2VFdmVudHMuUkVNT1ZFX1NPVU5EX0NBUkQsIGlkKTtcbiAgICAgICAgfVxuICAgIH0sIFtzb2NrZXRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxBZGRTb3VuZENhcmRGb3JtLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7c291bmRDYXJkcy5hbGxJZHMubWFwKGlkID0+IHNvdW5kQ2FyZHMuYnlJZFtpZF0pLm1hcChzb3VuZENhcmQgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c291bmRDYXJkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVNvdW5kQ2FyZChzb3VuZENhcmQuX2lkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgREVMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBTb3VuZENhcmRTaW11bGF0b3I7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SoundCardSimulator.tsx\n");

/***/ })

})