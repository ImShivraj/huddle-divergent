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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @huddle01/divergent-av */ \"./node_modules/@huddle01/divergent-av/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)() //unused variable\n    ;\n    const client = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentAVClient)();\n    const store = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore)();\n    const [userToCall, setToId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [connectWith, connected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Connect With Huddle\");\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const callerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (store.micState.stream) userRef.current.srcObject = store.micState.stream;\n    }, [\n        store.micState.stream\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (store.callerStream) callerRef.current.srcObject = store.callerStream;\n    }, [\n        store.callerStream\n    ]);\n    const login = async ()=>{\n        await client.init(\"wallet\");\n        connected(\"Connected\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Huddle Divergent test\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"test huddle01 divergent\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"App-link\",\n                style: {\n                    width: \"200px\",\n                    height: \"40px\",\n                    fontSize: \"16px\",\n                    borderRadius: \"20px\",\n                    position: \"absolute\",\n                    right: 0\n                },\n                onClick: login,\n                children: connectWith\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" Logged in User: \",\n                    store.user.uid,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                style: {\n                    width: \"400px\",\n                    height: \"40px\",\n                    fontSize: \"16px\"\n                },\n                onChange: (e)=>setToId(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    height: \"40px\",\n                    fontSize: \"16px\",\n                    marginLeft: \"10px\"\n                },\n                onClick: ()=>client.dial(userToCall),\n                children: \"Call\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    height: \"40px\",\n                    fontSize: \"16px\",\n                    marginLeft: \"10px\"\n                },\n                onClick: ()=>client.end(),\n                children: \"END CALL for CALLER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            store.callerSignal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"Call from \",\n                    store.callerUid,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>client.answer(),\n                        children: \"Accept\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>client.end(),\n                        children: \"End\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                playsInline: true,\n                ref: userRef,\n                muted: true,\n                autoPlay: true,\n                style: {\n                    width: \"300px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                playsInline: true,\n                ref: callerRef,\n                autoPlay: true,\n                style: {\n                    width: \"300px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PNz/yfkMPpXZmS/hOf7R6lxJI/U=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentAVClient,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN1QjtnQkFBTUMsV0FBVztnQkFBQ0MsS0FBSzdDO2dCQUFXK0MsUUFBUTtnQkFBQzVCLE9BQU87b0JBQUVDLE9BQU87Z0JBQVE7Ozs7Ozs7Ozs7OztBQUkxRSxDQUFDO0dBM0R1QjlCOztRQUVXTiw2Q0FBVUE7UUFFNUJFLHdFQUFvQkE7UUFDckJELHFFQUFpQkE7OztLQUxUSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyB1c2VEaXZlcmdlbnRTdG9yZSwgdXNlRGl2ZXJnZW50QVZDbGllbnQsIERpdmVyZ2VudEFWQ2xpZW50UHJvdmlkZXIsIGdldERpdmVyZ2VudEFWQ2xpZW50IH0gZnJvbSBcIkBodWRkbGUwMS9kaXZlcmdlbnQtYXZcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKSAvL3VudXNlZCB2YXJpYWJsZVxyXG5cclxuICBjb25zdCBjbGllbnQgPSB1c2VEaXZlcmdlbnRBVkNsaWVudCgpXHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VEaXZlcmdlbnRTdG9yZSgpO1xyXG4gIGNvbnN0IFt1c2VyVG9DYWxsLCBzZXRUb0lkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29ubmVjdFdpdGgsIGNvbm5lY3RlZF0gPSB1c2VTdGF0ZSgnQ29ubmVjdCBXaXRoIEh1ZGRsZScpO1xyXG5cclxuICBjb25zdCB1c2VyUmVmID0gdXNlUmVmPGFueT4oKTtcclxuICBjb25zdCBjYWxsZXJSZWYgPSB1c2VSZWY8YW55PigpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdG9yZS5taWNTdGF0ZS5zdHJlYW0pIHVzZXJSZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdG9yZS5taWNTdGF0ZS5zdHJlYW07XHJcbiAgfSwgW3N0b3JlLm1pY1N0YXRlLnN0cmVhbV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RvcmUuY2FsbGVyU3RyZWFtKSBjYWxsZXJSZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdG9yZS5jYWxsZXJTdHJlYW07XHJcbiAgfSwgW3N0b3JlLmNhbGxlclN0cmVhbV0pO1xyXG4gIFxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgY2xpZW50LmluaXQoXCJ3YWxsZXRcIilcclxuICAgIGNvbm5lY3RlZChcIkNvbm5lY3RlZFwiKVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IdWRkbGUgRGl2ZXJnZW50IHRlc3Q8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ0ZXN0IGh1ZGRsZTAxIGRpdmVyZ2VudFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICB7LyogPENvbm5lY3RCdXR0b24gLz4gKi99XHJcbiBcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J0FwcC1saW5rJyBzdHlsZT17e3dpZHRoOlwiMjAwcHhcIiwgaGVpZ2h0OlwiNDBweFwiLCBmb250U2l6ZTpcIjE2cHhcIiwgYm9yZGVyUmFkaXVzOlwiMjBweFwiLHBvc2l0aW9uOidhYnNvbHV0ZScsIHJpZ2h0OjB9fSBvbkNsaWNrPXtsb2dpbn0+e2Nvbm5lY3RXaXRofTwvYnV0dG9uPlxyXG4gICAgICA8aDI+IExvZ2dlZCBpbiBVc2VyOiB7c3RvcmUudXNlci51aWR9IDwvaDI+XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgc3R5bGU9e3t3aWR0aDpcIjQwMHB4XCIsIGhlaWdodDpcIjQwcHhcIiwgZm9udFNpemU6XCIxNnB4XCJ9fSBvbkNoYW5nZT17KGUpID0+IHNldFRvSWQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxyXG4gICAgICA8YnV0dG9uIHN0eWxlPXt7aGVpZ2h0OlwiNDBweFwiLCBmb250U2l6ZTpcIjE2cHhcIiwgbWFyZ2luTGVmdDpcIjEwcHhcIn19IG9uQ2xpY2s9eygpID0+IGNsaWVudC5kaWFsKHVzZXJUb0NhbGwpfT5DYWxsPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gc3R5bGU9e3toZWlnaHQ6XCI0MHB4XCIsIGZvbnRTaXplOlwiMTZweFwiLCBtYXJnaW5MZWZ0OlwiMTBweFwifX0gb25DbGljaz17KCkgPT4gY2xpZW50LmVuZCgpfT5FTkQgQ0FMTCBmb3IgQ0FMTEVSPC9idXR0b24+XHJcbiAgICAgIFxyXG5cclxuICAgICAge3N0b3JlLmNhbGxlclNpZ25hbCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICBDYWxsIGZyb20ge3N0b3JlLmNhbGxlclVpZH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGllbnQuYW5zd2VyKCl9PkFjY2VwdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGllbnQuZW5kKCl9PkVuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX17JyAnfVxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8dmlkZW8gcGxheXNJbmxpbmUgcmVmPXt1c2VyUmVmfSBtdXRlZCBhdXRvUGxheSBzdHlsZT17eyB3aWR0aDogJzMwMHB4JyB9fSAvPlxyXG4gICAgICA8dmlkZW8gcGxheXNJbmxpbmUgcmVmPXtjYWxsZXJSZWZ9IGF1dG9QbGF5IHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnIH19IC8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlQWNjb3VudCIsInVzZURpdmVyZ2VudFN0b3JlIiwidXNlRGl2ZXJnZW50QVZDbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJjbGllbnQiLCJzdG9yZSIsInVzZXJUb0NhbGwiLCJzZXRUb0lkIiwiY29ubmVjdFdpdGgiLCJjb25uZWN0ZWQiLCJ1c2VyUmVmIiwiY2FsbGVyUmVmIiwibWljU3RhdGUiLCJzdHJlYW0iLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwiY2FsbGVyU3RyZWFtIiwibG9naW4iLCJpbml0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwicmlnaHQiLCJvbkNsaWNrIiwiaDIiLCJ1c2VyIiwidWlkIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5MZWZ0IiwiZGlhbCIsImVuZCIsImNhbGxlclNpZ25hbCIsImNhbGxlclVpZCIsImFuc3dlciIsImJyIiwidmlkZW8iLCJwbGF5c0lubGluZSIsInJlZiIsIm11dGVkIiwiYXV0b1BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});