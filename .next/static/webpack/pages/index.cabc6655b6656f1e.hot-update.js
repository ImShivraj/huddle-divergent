"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @huddle01/divergent-av */ \"./node_modules/@huddle01/divergent-av/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const client = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentAVClient)();\n    const store = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore)();\n    const [userToCall, setToId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const callerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    // const user = useDivergentStore(state => state.user);\n    // console.log(user)  \n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (store.micState.stream) userRef.current.srcObject = store.micState.stream;\n    }, [\n        store.micState.stream\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (store.callerStream) callerRef.current.srcObject = store.callerStream;\n    }, [\n        store.callerStream\n    ]);\n    const login = async ()=>{\n        await client.init(\"wallet\");\n    };\n    const dial = async ()=>{\n        await client.dial(userToCall);\n    };\n    const end = async ()=>{\n        await client.end();\n    };\n    const answer = async ()=>{\n        await client.answer();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Huddle Divergent test\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"test huddle01 divergent\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"App-link\",\n                style: {\n                    width: \"200px\",\n                    height: \"40px\",\n                    fontSize: \"16px\",\n                    borderRadius: \"20px\",\n                    position: \"absolute\",\n                    right: 0\n                },\n                onClick: login,\n                children: \"Connect with Huddle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" Logged in User: \",\n                    store.user.uid,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                style: {\n                    width: \"400px\",\n                    height: \"40px\",\n                    fontSize: \"16px\"\n                },\n                onChange: (e)=>setToId(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    height: \"40px\",\n                    fontSize: \"16px\",\n                    marginLeft: \"10px\"\n                },\n                onClick: dial,\n                children: \"Call\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    height: \"40px\",\n                    fontSize: \"16px\"\n                },\n                onClick: end,\n                children: \"END CALL for CALLER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            store.callerSignal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"Call from \",\n                    store.callerUid,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: answer,\n                        children: \"Accept\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: end,\n                        children: \"End\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                playsInline: true,\n                ref: userRef,\n                muted: true,\n                autoPlay: true,\n                style: {\n                    width: \"300px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                playsInline: true,\n                ref: callerRef,\n                autoPlay: true,\n                style: {\n                    width: \"300px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"gx9PVsij7bJhuE/+X8fb+pfBScs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentAVClient,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Z0JBQVE7Ozs7OzswQkFDMUUsOERBQUNvQjtnQkFBTUMsV0FBVztnQkFBQ0MsS0FBSzdDO2dCQUFXK0MsUUFBUTtnQkFBQ3pCLE9BQU87b0JBQUVDLE9BQU87Z0JBQVE7Ozs7Ozs7Ozs7OztBQUkxRSxDQUFDO0dBdkV1Qi9COztRQUVXTiw2Q0FBVUE7UUFFNUJFLHdFQUFvQkE7UUFDckJELHFFQUFpQkE7OztLQUxUSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyB1c2VEaXZlcmdlbnRTdG9yZSwgdXNlRGl2ZXJnZW50QVZDbGllbnQsIERpdmVyZ2VudEFWQ2xpZW50UHJvdmlkZXIsIGdldERpdmVyZ2VudEFWQ2xpZW50IH0gZnJvbSBcIkBodWRkbGUwMS9kaXZlcmdlbnQtYXZcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKVxyXG5cclxuICBjb25zdCBjbGllbnQgPSB1c2VEaXZlcmdlbnRBVkNsaWVudCgpXHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VEaXZlcmdlbnRTdG9yZSgpO1xyXG4gIGNvbnN0IFt1c2VyVG9DYWxsLCBzZXRUb0lkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB1c2VyUmVmID0gdXNlUmVmPGFueT4oKTtcclxuICBjb25zdCBjYWxsZXJSZWYgPSB1c2VSZWY8YW55PigpO1xyXG5cclxuICAvLyBjb25zdCB1c2VyID0gdXNlRGl2ZXJnZW50U3RvcmUoc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgLy8gY29uc29sZS5sb2codXNlcikgIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0b3JlLm1pY1N0YXRlLnN0cmVhbSkgdXNlclJlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0b3JlLm1pY1N0YXRlLnN0cmVhbTtcclxuICB9LCBbc3RvcmUubWljU3RhdGUuc3RyZWFtXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdG9yZS5jYWxsZXJTdHJlYW0pIGNhbGxlclJlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0b3JlLmNhbGxlclN0cmVhbTtcclxuICB9LCBbc3RvcmUuY2FsbGVyU3RyZWFtXSk7XHJcbiAgXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjbGllbnQuaW5pdChcIndhbGxldFwiKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlhbCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNsaWVudC5kaWFsKHVzZXJUb0NhbGwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjbGllbnQuZW5kKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuc3dlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNsaWVudC5hbnN3ZXIoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkh1ZGRsZSBEaXZlcmdlbnQgdGVzdDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInRlc3QgaHVkZGxlMDEgZGl2ZXJnZW50XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgey8qIDxDb25uZWN0QnV0dG9uIC8+XHJcbiAgICAgIHtpc0Nvbm5lY3RlZCA/IChcclxuICAgICAgICA8cD5Db25uZWN0ZWQgd2l0aCB0aGUgYWRkcmVzczoge2FkZHJlc3N9PC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgKX0gKi99XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdBcHAtbGluaycgc3R5bGU9e3t3aWR0aDpcIjIwMHB4XCIsIGhlaWdodDpcIjQwcHhcIiwgZm9udFNpemU6XCIxNnB4XCIsIGJvcmRlclJhZGl1czpcIjIwcHhcIixwb3NpdGlvbjonYWJzb2x1dGUnLCByaWdodDowfX0gb25DbGljaz17bG9naW59PkNvbm5lY3Qgd2l0aCBIdWRkbGU8L2J1dHRvbj5cclxuICAgICAgPGgyPiBMb2dnZWQgaW4gVXNlcjoge3N0b3JlLnVzZXIudWlkfSA8L2gyPlxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHN0eWxlPXt7d2lkdGg6XCI0MDBweFwiLCBoZWlnaHQ6XCI0MHB4XCIsIGZvbnRTaXplOlwiMTZweFwifX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUb0lkKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuICAgICAgPGJ1dHRvbiBzdHlsZT17e2hlaWdodDpcIjQwcHhcIiwgZm9udFNpemU6XCIxNnB4XCIsIG1hcmdpbkxlZnQ6XCIxMHB4XCJ9fSBvbkNsaWNrPXtkaWFsfT5DYWxsPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gc3R5bGU9e3toZWlnaHQ6XCI0MHB4XCIsIGZvbnRTaXplOlwiMTZweFwifX0gb25DbGljaz17ZW5kfT5FTkQgQ0FMTCBmb3IgQ0FMTEVSPC9idXR0b24+XHJcblxyXG4gICAgICB7c3RvcmUuY2FsbGVyU2lnbmFsICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIENhbGwgZnJvbSB7c3RvcmUuY2FsbGVyVWlkfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Fuc3dlcn0+QWNjZXB0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VuZH0+RW5kPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfXsnICd9XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDx2aWRlbyBwbGF5c0lubGluZSByZWY9e3VzZXJSZWZ9IG11dGVkIGF1dG9QbGF5IHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnIH19IC8+XHJcbiAgICAgIDx2aWRlbyBwbGF5c0lubGluZSByZWY9e2NhbGxlclJlZn0gYXV0b1BsYXkgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcgfX0gLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VBY2NvdW50IiwidXNlRGl2ZXJnZW50U3RvcmUiLCJ1c2VEaXZlcmdlbnRBVkNsaWVudCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSG9tZSIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsImNsaWVudCIsInN0b3JlIiwidXNlclRvQ2FsbCIsInNldFRvSWQiLCJ1c2VyUmVmIiwiY2FsbGVyUmVmIiwibWljU3RhdGUiLCJzdHJlYW0iLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwiY2FsbGVyU3RyZWFtIiwibG9naW4iLCJpbml0IiwiZGlhbCIsImVuZCIsImFuc3dlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJidXR0b24iLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInJpZ2h0Iiwib25DbGljayIsImgyIiwidXNlciIsInVpZCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsImNhbGxlclNpZ25hbCIsImNhbGxlclVpZCIsImJyIiwidmlkZW8iLCJwbGF5c0lubGluZSIsInJlZiIsIm11dGVkIiwiYXV0b1BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});