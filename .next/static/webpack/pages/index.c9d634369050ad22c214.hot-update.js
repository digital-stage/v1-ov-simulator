webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SoundCardSimulator.tsx":
/*!*******************************************!*\
  !*** ./components/SoundCardSimulator.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types/SocketEvents */ \"./utils/types/SocketEvents.ts\");\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/SoundCardSimulator.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar AddSoundCardForm = function AddSoundCardForm() {\n  _s();\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      socket = _useStage.socket;\n\n  var nameRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  var addSoundCard = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (nameRef.current && socket) {\n      var name = nameRef.current.value;\n      var payload = {\n        initial: {\n          name: name,\n          driver: 'ALSA',\n          numInputChannels: 8,\n          numOutputChannels: 4,\n          sampleRate: 44100,\n          periodSize: 2,\n          numPeriods: 2\n        }\n      };\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_3__[\"ClientDeviceEvents\"].ADD_SOUND_CARD, payload);\n    }\n  }, [socket, nameRef]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n      type: \"name\",\n      ref: nameRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      onClick: function onClick(e) {\n        e.preventDefault();\n        addSoundCard();\n      },\n      children: \"ADD SOUNDCARD\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AddSoundCardForm, \"b3P7bOV7EerVDoi977ClqMkozOg=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = AddSoundCardForm;\n\nvar SoundCardSimulator = function SoundCardSimulator() {\n  _s2();\n\n  var _useStage2 = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      device = _useStage2.device,\n      socket = _useStage2.socket,\n      soundCards = _useStage2.soundCards;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      connectedSoundCardIds = _useState[0],\n      setConnectedSoundCardIds = _useState[1];\n\n  var updateConnectedSoundCardIds = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (connectedSoundCardIds) {\n    if (socket && device) {\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_3__[\"ClientDeviceEvents\"].UPDATE_DEVICE, {\n        _id: device._id,\n        soundCardIds: connectedSoundCardIds\n      });\n    }\n  }, [socket, device]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    updateConnectedSoundCardIds(connectedSoundCardIds);\n  }, [connectedSoundCardIds, updateConnectedSoundCardIds]);\n  var removeSoundCard = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (id) {\n    if (socket) {\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_3__[\"ClientDeviceEvents\"].REMOVE_SOUND_CARD, id);\n    }\n  }, [socket]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(AddSoundCardForm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n      children: soundCards.allIds.map(function (id) {\n        return soundCards.byId[id];\n      }).map(function (soundCard) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n            htmlFor: soundCard._id,\n            children: soundCard.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n            id: soundCard._id,\n            type: \"checkbox\",\n            onChange: function onChange(e) {\n              if (e.currentTarget.checked) {\n                setConnectedSoundCardIds(function (prev) {\n                  return [].concat(Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev), [soundCard._id]);\n                });\n              } else {\n                setConnectedSoundCardIds(function (prev) {\n                  return prev.filter(function (id) {\n                    return id !== soundCard._id;\n                  });\n                });\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return removeSoundCard(soundCard._id);\n            },\n            children: \"DEL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s2(SoundCardSimulator, \"kBdoq5rmbOHphGwjWKWVyW89Pro=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c2 = SoundCardSimulator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoundCardSimulator);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AddSoundCardForm\");\n$RefreshReg$(_c2, \"SoundCardSimulator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb3VuZENhcmRTaW11bGF0b3IudHN4P2U2MjYiXSwibmFtZXMiOlsiQWRkU291bmRDYXJkRm9ybSIsInVzZVN0YWdlIiwic29ja2V0IiwibmFtZVJlZiIsInVzZVJlZiIsImFkZFNvdW5kQ2FyZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsIm5hbWUiLCJ2YWx1ZSIsInBheWxvYWQiLCJpbml0aWFsIiwiZHJpdmVyIiwibnVtSW5wdXRDaGFubmVscyIsIm51bU91dHB1dENoYW5uZWxzIiwic2FtcGxlUmF0ZSIsInBlcmlvZFNpemUiLCJudW1QZXJpb2RzIiwiZW1pdCIsIkNsaWVudERldmljZUV2ZW50cyIsIkFERF9TT1VORF9DQVJEIiwiZSIsInByZXZlbnREZWZhdWx0IiwiU291bmRDYXJkU2ltdWxhdG9yIiwiZGV2aWNlIiwic291bmRDYXJkcyIsInVzZVN0YXRlIiwiY29ubmVjdGVkU291bmRDYXJkSWRzIiwic2V0Q29ubmVjdGVkU291bmRDYXJkSWRzIiwidXBkYXRlQ29ubmVjdGVkU291bmRDYXJkSWRzIiwiVVBEQVRFX0RFVklDRSIsIl9pZCIsInNvdW5kQ2FyZElkcyIsInVzZUVmZmVjdCIsInJlbW92ZVNvdW5kQ2FyZCIsImlkIiwiUkVNT1ZFX1NPVU5EX0NBUkQiLCJhbGxJZHMiLCJtYXAiLCJieUlkIiwic291bmRDYXJkIiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJwcmV2IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFJQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDVkMsOERBQVEsRUFERTtBQUFBLE1BQ3BCQyxNQURvQixhQUNwQkEsTUFEb0I7O0FBRTNCLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sRUFBdEI7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFB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bUJBQU8sRUFBRUEsU0FBUyxDQUFDVCxHQUExQjtBQUFBLHNCQUFnQ1MsU0FBUyxDQUFDaEM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQ0ksY0FBRSxFQUFFZ0MsU0FBUyxDQUFDVCxHQURsQjtBQUVJLGdCQUFJLEVBQUMsVUFGVDtBQUdJLG9CQUFRLEVBQUUsa0JBQUFWLENBQUMsRUFBSTtBQUNYLGtCQUFJQSxDQUFDLENBQUNvQixhQUFGLENBQWdCQyxPQUFwQixFQUE2QjtBQUN6QmQsd0NBQXdCLENBQUMsVUFBQWUsSUFBSTtBQUFBLDhMQUFRQSxJQUFSLElBQWNILFNBQVMsQ0FBQ1QsR0FBeEI7QUFBQSxpQkFBTCxDQUF4QjtBQUNILGVBRkQsTUFFTztBQUNISCx3Q0FBd0IsQ0FBQyxVQUFBZSxJQUFJO0FBQUEseUJBQUlBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUFULEVBQUU7QUFBQSwyQkFBSUEsRUFBRSxLQUFLSyxTQUFTLENBQUNULEdBQXJCO0FBQUEsbUJBQWQsQ0FBSjtBQUFBLGlCQUFMLENBQXhCO0FBQ0g7QUFDSjtBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFhSTtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUcsZUFBZSxDQUFDTSxTQUFTLENBQUNULEdBQVgsQ0FBckI7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDJEO0FBQUEsT0FBOUQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQTRCSCxDQW5ERDs7SUFBTVIsa0I7VUFDbUN0QixzRDs7O01BRG5Dc0Isa0I7QUFvRFNBLGlGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Tb3VuZENhcmRTaW11bGF0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJVGVja29zQ2xpZW50IGZyb20gXCJ0ZWNrb3MtY2xpZW50L2Rpc3QvSVRlY2tvc0NsaWVudFwiO1xuaW1wb3J0IHtDbGllbnREZXZpY2VFdmVudHN9IGZyb20gXCIuLi91dGlscy90eXBlcy9Tb2NrZXRFdmVudHNcIjtcbmltcG9ydCB7RGV2aWNlfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvRGV2aWNlXCI7XG5pbXBvcnQge0FkZFNvdW5kQ2FyZFBheWxvYWR9IGZyb20gXCIuLi91dGlscy90eXBlcy9Tb2NrZXRQYXlsb2Fkc1wiO1xuaW1wb3J0IHtTb3VuZENhcmR9IGZyb20gXCIuLi91dGlscy90eXBlcy9Tb3VuZENhcmRcIjtcbmltcG9ydCB1c2VTdGFnZSBmcm9tIFwiLi4vbGlicy91c2VTdGFnZVwiO1xuXG5jb25zdCBBZGRTb3VuZENhcmRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHtzb2NrZXR9ID0gdXNlU3RhZ2UoKTtcbiAgICBjb25zdCBuYW1lUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XG5cbiAgICBjb25zdCBhZGRTb3VuZENhcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChuYW1lUmVmLmN1cnJlbnQgJiYgc29ja2V0KSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZVJlZi5jdXJyZW50LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZDogQWRkU291bmRDYXJkUGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRyaXZlcjogJ0FMU0EnLFxuICAgICAgICAgICAgICAgICAgICBudW1JbnB1dENoYW5uZWxzOiA4LFxuICAgICAgICAgICAgICAgICAgICBudW1PdXRwdXRDaGFubmVsczogNCxcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUmF0ZTogNDQxMDAsXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZFNpemU6IDIsXG4gICAgICAgICAgICAgICAgICAgIG51bVBlcmlvZHM6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoQ2xpZW50RGV2aWNlRXZlbnRzLkFERF9TT1VORF9DQVJELCBwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH0sIFtzb2NrZXQsIG5hbWVSZWZdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm5hbWVcIiByZWY9e25hbWVSZWZ9Lz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGFkZFNvdW5kQ2FyZCgpO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgQUREIFNPVU5EQ0FSRFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59O1xuXG5jb25zdCBTb3VuZENhcmRTaW11bGF0b3IgPSAoKSA9PiB7XG4gICAgY29uc3Qge2RldmljZSwgc29ja2V0LCBzb3VuZENhcmRzfSA9IHVzZVN0YWdlKCk7XG4gICAgY29uc3QgW2Nvbm5lY3RlZFNvdW5kQ2FyZElkcywgc2V0Q29ubmVjdGVkU291bmRDYXJkSWRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgICBjb25zdCB1cGRhdGVDb25uZWN0ZWRTb3VuZENhcmRJZHMgPSB1c2VDYWxsYmFjaygoY29ubmVjdGVkU291bmRDYXJkSWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICBpZiAoc29ja2V0ICYmIGRldmljZSkge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoQ2xpZW50RGV2aWNlRXZlbnRzLlVQREFURV9ERVZJQ0UsIHtcbiAgICAgICAgICAgICAgICBfaWQ6IGRldmljZS5faWQsXG4gICAgICAgICAgICAgICAgc291bmRDYXJkSWRzOiBjb25uZWN0ZWRTb3VuZENhcmRJZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3NvY2tldCwgZGV2aWNlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB1cGRhdGVDb25uZWN0ZWRTb3VuZENhcmRJZHMoY29ubmVjdGVkU291bmRDYXJkSWRzKTtcbiAgICB9LCBbY29ubmVjdGVkU291bmRDYXJkSWRzLCB1cGRhdGVDb25uZWN0ZWRTb3VuZENhcmRJZHNdKTtcblxuICAgIGNvbnN0IHJlbW92ZVNvdW5kQ2FyZCA9IHVzZUNhbGxiYWNrKChpZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KENsaWVudERldmljZUV2ZW50cy5SRU1PVkVfU09VTkRfQ0FSRCwgaWQpO1xuICAgICAgICB9XG4gICAgfSwgW3NvY2tldF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPEFkZFNvdW5kQ2FyZEZvcm0vPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtzb3VuZENhcmRzLmFsbElkcy5tYXAoaWQgPT4gc291bmRDYXJkcy5ieUlkW2lkXSkubWFwKHNvdW5kQ2FyZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtzb3VuZENhcmQuX2lkfT57c291bmRDYXJkLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzb3VuZENhcmQuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RlZFNvdW5kQ2FyZElkcyhwcmV2ID0+IFsuLi5wcmV2LCBzb3VuZENhcmQuX2lkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RlZFNvdW5kQ2FyZElkcyhwcmV2ID0+IHByZXYuZmlsdGVyKGlkID0+IGlkICE9PSBzb3VuZENhcmQuX2lkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlU291bmRDYXJkKHNvdW5kQ2FyZC5faWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBERUxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IFNvdW5kQ2FyZFNpbXVsYXRvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SoundCardSimulator.tsx\n");

/***/ })

})