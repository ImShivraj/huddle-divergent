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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @huddle01/divergent-av */ \"./node_modules/@huddle01/divergent-av/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const client = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentAVClient)();\n    const store = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore)();\n    const [userToCall, setToId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const callerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    // const user = useDivergentStore(state => state.user);\n    // console.log(user)  \n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (store.micState.stream) userRef.current.srcObject = store.micState.stream;\n    }, [\n        store.micState.stream\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (store.callerStream) callerRef.current.srcObject = store.callerStream;\n    }, [\n        store.callerStream\n    ]);\n    const login = async ()=>{\n        await client.init(\"wallet\");\n    };\n    const dial = async ()=>{\n        await client.dial(userToCall);\n    };\n    const end = async ()=>{\n        await client.end();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Huddle Divergent test\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"test huddle01 divergent\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"App-link\",\n                style: {\n                    width: \"200px\",\n                    height: \"40px\",\n                    borderRadius: \"20px\",\n                    position: \"absolute\",\n                    right: 0\n                },\n                onClick: login,\n                children: \"Connect with Huddle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" Logged in User: \",\n                    store.user.uid,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                style: {\n                    width: \"400px\",\n                    height: \"40px\"\n                },\n                onChange: (e)=>setToId(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: dial,\n                children: \"Call\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: end,\n                children: \"END CALL for CALLER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            store.callerSignal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"Call from \",\n                    store.callerUid,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>client.answer(),\n                        children: \"Accept\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>client.end(),\n                        children: \"End\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                playsInline: true,\n                ref: userRef,\n                muted: true,\n                autoPlay: true,\n                style: {\n                    width: \"300px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                playsInline: true,\n                ref: callerRef,\n                autoPlay: true,\n                style: {\n                    width: \"300px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"gx9PVsij7bJhuE/+X8fb+pfBScs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentAVClient,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBVUE7UUFFNUJFLHdFQUFvQkE7UUFDckJELHFFQUFpQkE7OztLQUxUSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyB1c2VEaXZlcmdlbnRTdG9yZSwgdXNlRGl2ZXJnZW50QVZDbGllbnQsIERpdmVyZ2VudEFWQ2xpZW50UHJvdmlkZXIsIGdldERpdmVyZ2VudEFWQ2xpZW50IH0gZnJvbSBcIkBodWRkbGUwMS9kaXZlcmdlbnQtYXZcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKVxyXG5cclxuICBjb25zdCBjbGllbnQgPSB1c2VEaXZlcmdlbnRBVkNsaWVudCgpXHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VEaXZlcmdlbnRTdG9yZSgpO1xyXG4gIGNvbnN0IFt1c2VyVG9DYWxsLCBzZXRUb0lkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB1c2VyUmVmID0gdXNlUmVmPGFueT4oKTtcclxuICBjb25zdCBjYWxsZXJSZWYgPSB1c2VSZWY8YW55PigpO1xyXG5cclxuICAvLyBjb25zdCB1c2VyID0gdXNlRGl2ZXJnZW50U3RvcmUoc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgLy8gY29uc29sZS5sb2codXNlcikgIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0b3JlLm1pY1N0YXRlLnN0cmVhbSkgdXNlclJlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0b3JlLm1pY1N0YXRlLnN0cmVhbTtcclxuICB9LCBbc3RvcmUubWljU3RhdGUuc3RyZWFtXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdG9yZS5jYWxsZXJTdHJlYW0pIGNhbGxlclJlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0b3JlLmNhbGxlclN0cmVhbTtcclxuICB9LCBbc3RvcmUuY2FsbGVyU3RyZWFtXSk7XHJcbiAgXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjbGllbnQuaW5pdChcIndhbGxldFwiKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlhbCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNsaWVudC5kaWFsKHVzZXJUb0NhbGwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjbGllbnQuZW5kKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IdWRkbGUgRGl2ZXJnZW50IHRlc3Q8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ0ZXN0IGh1ZGRsZTAxIGRpdmVyZ2VudFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8Q29ubmVjdEJ1dHRvbiAvPlxyXG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgPHA+Q29ubmVjdGVkIHdpdGggdGhlIGFkZHJlc3M6IHthZGRyZXNzfTwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD48L3A+XHJcbiAgICAgICl9ICovfVxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nQXBwLWxpbmsnIHN0eWxlPXt7d2lkdGg6XCIyMDBweFwiLCBoZWlnaHQ6XCI0MHB4XCIsIGJvcmRlclJhZGl1czpcIjIwcHhcIixwb3NpdGlvbjonYWJzb2x1dGUnLCByaWdodDowfX0gb25DbGljaz17bG9naW59PkNvbm5lY3Qgd2l0aCBIdWRkbGU8L2J1dHRvbj5cclxuICAgICAgPGgyPiBMb2dnZWQgaW4gVXNlcjoge3N0b3JlLnVzZXIudWlkfSA8L2gyPlxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHN0eWxlPXt7d2lkdGg6XCI0MDBweFwiLCBoZWlnaHQ6XCI0MHB4XCJ9fSBvbkNoYW5nZT17KGUpID0+IHNldFRvSWQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RpYWx9PkNhbGw8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlbmR9PkVORCBDQUxMIGZvciBDQUxMRVI8L2J1dHRvbj5cclxuXHJcbiAgICAgIHtzdG9yZS5jYWxsZXJTaWduYWwgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgQ2FsbCBmcm9tIHtzdG9yZS5jYWxsZXJVaWR9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2xpZW50LmFuc3dlcigpfT5BY2NlcHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2xpZW50LmVuZCgpfT5FbmQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9eycgJ31cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIHJlZj17dXNlclJlZn0gbXV0ZWQgYXV0b1BsYXkgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcgfX0gLz5cclxuICAgICAgPHZpZGVvIHBsYXlzSW5saW5lIHJlZj17Y2FsbGVyUmVmfSBhdXRvUGxheSBzdHlsZT17eyB3aWR0aDogJzMwMHB4JyB9fSAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsInVzZUFjY291bnQiLCJ1c2VEaXZlcmdlbnRTdG9yZSIsInVzZURpdmVyZ2VudEFWQ2xpZW50IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIb21lIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwiY2xpZW50Iiwic3RvcmUiLCJ1c2VyVG9DYWxsIiwic2V0VG9JZCIsInVzZXJSZWYiLCJjYWxsZXJSZWYiLCJtaWNTdGF0ZSIsInN0cmVhbSIsImN1cnJlbnQiLCJzcmNPYmplY3QiLCJjYWxsZXJTdHJlYW0iLCJsb2dpbiIsImluaXQiLCJkaWFsIiwiZW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInJpZ2h0Iiwib25DbGljayIsImgyIiwidXNlciIsInVpZCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2FsbGVyU2lnbmFsIiwiY2FsbGVyVWlkIiwiYW5zd2VyIiwiYnIiLCJ2aWRlbyIsInBsYXlzSW5saW5lIiwicmVmIiwibXV0ZWQiLCJhdXRvUGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});