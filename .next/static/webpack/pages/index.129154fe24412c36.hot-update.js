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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @huddle01/divergent-av */ \"./node_modules/@huddle01/divergent-av/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const client = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentAVClient)();\n    const store = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore)();\n    const [userToCall, setToId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const callerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const user = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore)((state)=>state.user);\n    console.log(user);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (store.micState.stream) userRef.current.srcObject = store.micState.stream;\n    }, [\n        store.micState.stream\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (store.callerStream) callerRef.current.srcObject = store.callerStream;\n    }, [\n        store.callerStream\n    ]);\n    const login = async ()=>{\n        await client.init(\"wallet\");\n    };\n    // useEffect(() => {\n    //   login()\n    // }, [])\n    // for staring a call with a wallet\n    // const call_client = useDivergentClientContext()\n    // const dial_client = async () => {\n    //   await call_client.dial(\"0xc111Ea84c2FBF21E45d837FF32DD3399CBfeF480\")\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Huddle Divergent test\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"test huddle01 divergent\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" Logged in User: \",\n                    user.uid,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"App-link\",\n                style: {\n                    width: \"200px\"\n                },\n                onClick: login,\n                children: \"Connect with Huddle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"WtOlhYAvtww89KV++LYkRbhx8Rs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentAVClient,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore,\n        _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_2__.useDivergentStore\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDa0I7QUFFWDtBQUMrRjtBQUM5RTtBQUdyQyxTQUFTUSxPQUFPOztJQUU3QixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsWUFBVyxFQUFFLEdBQUdSLGlEQUFVQTtJQUUzQyxNQUFNUyxTQUFTUCw0RUFBb0JBO0lBQ25DLE1BQU1RLFFBQVFULHlFQUFpQkE7SUFDL0IsTUFBTSxDQUFDVSxZQUFZQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1RLFVBQVVULDZDQUFNQTtJQUN0QixNQUFNVSxZQUFZViw2Q0FBTUE7SUFFeEIsTUFBTVcsT0FBT2QseUVBQWlCQSxDQUFDZSxDQUFBQSxRQUFTQSxNQUFNRCxJQUFJO0lBQ2xERSxRQUFRQyxHQUFHLENBQUNIO0lBRVpaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTyxNQUFNUyxRQUFRLENBQUNDLE1BQU0sRUFBRVAsUUFBUVEsT0FBTyxDQUFDQyxTQUFTLEdBQUdaLE1BQU1TLFFBQVEsQ0FBQ0MsTUFBTTtJQUM5RSxHQUFHO1FBQUNWLE1BQU1TLFFBQVEsQ0FBQ0MsTUFBTTtLQUFDO0lBQzFCakIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlPLE1BQU1hLFlBQVksRUFBRVQsVUFBVU8sT0FBTyxDQUFDQyxTQUFTLEdBQUdaLE1BQU1hLFlBQVk7SUFDMUUsR0FBRztRQUFDYixNQUFNYSxZQUFZO0tBQUM7SUFFdkIsTUFBTUMsUUFBUSxVQUFZO1FBQ3hCLE1BQU1mLE9BQU9nQixJQUFJLENBQUM7SUFDcEI7SUFDQSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFNBQVM7SUFFVCxtQ0FBbUM7SUFDbkMsa0RBQWtEO0lBQ2xELG9DQUFvQztJQUNwQyx5RUFBeUU7SUFDekUsSUFBSTtJQUNKLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXNUIsMEVBQWdCOzswQkFDOUIsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUMrQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFReEIsOERBQUNDOztvQkFBRztvQkFBa0JyQixLQUFLc0IsR0FBRztvQkFBQzs7Ozs7OzswQkFDL0IsOERBQUNDO2dCQUFPWCxXQUFVO2dCQUFXWSxPQUFPO29CQUFDQyxPQUFNO2dCQUFPO2dCQUFHQyxTQUFTakI7MEJBQU87Ozs7Ozs7Ozs7OztBQUczRSxDQUFDO0dBakR1QmxCOztRQUVXTiw2Q0FBVUE7UUFFNUJFLHdFQUFvQkE7UUFDckJELHFFQUFpQkE7UUFLbEJBLHFFQUFpQkE7OztLQVZSSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyB1c2VEaXZlcmdlbnRTdG9yZSwgdXNlRGl2ZXJnZW50QVZDbGllbnQsIERpdmVyZ2VudEFWQ2xpZW50UHJvdmlkZXIsIGdldERpdmVyZ2VudEFWQ2xpZW50IH0gZnJvbSBcIkBodWRkbGUwMS9kaXZlcmdlbnQtYXZcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKVxyXG5cclxuICBjb25zdCBjbGllbnQgPSB1c2VEaXZlcmdlbnRBVkNsaWVudCgpXHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VEaXZlcmdlbnRTdG9yZSgpO1xyXG4gIGNvbnN0IFt1c2VyVG9DYWxsLCBzZXRUb0lkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB1c2VyUmVmID0gdXNlUmVmPGFueT4oKTtcclxuICBjb25zdCBjYWxsZXJSZWYgPSB1c2VSZWY8YW55PigpO1xyXG5cclxuICBjb25zdCB1c2VyID0gdXNlRGl2ZXJnZW50U3RvcmUoc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc29sZS5sb2codXNlcikgIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0b3JlLm1pY1N0YXRlLnN0cmVhbSkgdXNlclJlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0b3JlLm1pY1N0YXRlLnN0cmVhbTtcclxuICB9LCBbc3RvcmUubWljU3RhdGUuc3RyZWFtXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdG9yZS5jYWxsZXJTdHJlYW0pIGNhbGxlclJlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0b3JlLmNhbGxlclN0cmVhbTtcclxuICB9LCBbc3RvcmUuY2FsbGVyU3RyZWFtXSk7XHJcbiAgXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjbGllbnQuaW5pdChcIndhbGxldFwiKVxyXG4gIH1cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgbG9naW4oKVxyXG4gIC8vIH0sIFtdKVxyXG5cclxuICAvLyBmb3Igc3RhcmluZyBhIGNhbGwgd2l0aCBhIHdhbGxldFxyXG4gIC8vIGNvbnN0IGNhbGxfY2xpZW50ID0gdXNlRGl2ZXJnZW50Q2xpZW50Q29udGV4dCgpXHJcbiAgLy8gY29uc3QgZGlhbF9jbGllbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICBhd2FpdCBjYWxsX2NsaWVudC5kaWFsKFwiMHhjMTExRWE4NGMyRkJGMjFFNDVkODM3RkYzMkREMzM5OUNCZmVGNDgwXCIpXHJcbiAgLy8gfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IdWRkbGUgRGl2ZXJnZW50IHRlc3Q8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ0ZXN0IGh1ZGRsZTAxIGRpdmVyZ2VudFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8Q29ubmVjdEJ1dHRvbiAvPlxyXG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgPHA+Q29ubmVjdGVkIHdpdGggdGhlIGFkZHJlc3M6IHthZGRyZXNzfTwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD48L3A+XHJcbiAgICAgICl9ICovfVxyXG4gICAgICA8aDI+IExvZ2dlZCBpbiBVc2VyOiB7dXNlci51aWR9IDwvaDI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdBcHAtbGluaycgc3R5bGU9e3t3aWR0aDpcIjIwMHB4XCJ9fSBvbkNsaWNrPXtsb2dpbn0+Q29ubmVjdCB3aXRoIEh1ZGRsZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlQWNjb3VudCIsInVzZURpdmVyZ2VudFN0b3JlIiwidXNlRGl2ZXJnZW50QVZDbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJjbGllbnQiLCJzdG9yZSIsInVzZXJUb0NhbGwiLCJzZXRUb0lkIiwidXNlclJlZiIsImNhbGxlclJlZiIsInVzZXIiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtaWNTdGF0ZSIsInN0cmVhbSIsImN1cnJlbnQiLCJzcmNPYmplY3QiLCJjYWxsZXJTdHJlYW0iLCJsb2dpbiIsImluaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDIiLCJ1aWQiLCJidXR0b24iLCJzdHlsZSIsIndpZHRoIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});