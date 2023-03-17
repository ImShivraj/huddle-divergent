/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @huddle01/divergent-av */ \"@huddle01/divergent-av\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.goerli,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.arbitrum,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.hardhat\n], [\n    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: false,\n    connectors,\n    provider\n});\nconst divergentAVClient = (0,_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_6__.getDivergentAVClient)(\"https://dg-devnet.huddle01.com\");\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.darkTheme)(),\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_huddle01_divergent_av__WEBPACK_IMPORTED_MODULE_6__.DivergentAVClientProvider, {\n                value: divergentAVClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\_app.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\_app.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\_app.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBR2E7QUFDK0M7QUFDaEI7QUFFbEI7QUFDaUM7QUFHekYsTUFBTSxFQUFFVSxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHUCxzREFBZUEsQ0FDMUM7SUFBQ0QsZ0RBQWE7SUFBRUEsK0NBQVk7SUFBRUEsZ0RBQWE7SUFBRUEsaURBQWM7SUFBRUEsaURBQWM7SUFBRUEsZ0RBQWE7Q0FBQyxFQUMzRjtJQUNFLHVEQUF1RDtJQUN2REksc0VBQWNBO0NBQ2Y7QUFHSCxNQUFNLEVBQUVXLFdBQVUsRUFBRSxHQUFHbEIseUVBQWlCQSxDQUFDO0lBQ3ZDbUIsU0FBUztJQUNUVDtBQUNGO0FBRUEsTUFBTVUsY0FBY2YsbURBQVlBLENBQUM7SUFDL0JnQixhQUFhLEtBQUs7SUFDbEJIO0lBQ0FQO0FBQ0Y7QUFFQSxNQUFNVyxvQkFBb0JiLDRFQUFvQkEsQ0FBQztBQUdoQyxTQUFTYyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0UsOERBQUNuQiw4Q0FBV0E7UUFBQ29CLFFBQVFOO2tCQUNuQiw0RUFBQ25CLHNFQUFrQkE7WUFBQzBCLE9BQU96QixpRUFBU0E7WUFBSVEsUUFBUUE7c0JBQ2hELDRFQUFDRiw2RUFBeUJBO2dCQUFDb0IsT0FBT047MEJBQzlCLDRFQUFDRTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaW5ib3draXQtbmV4dC10c3gvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcblxyXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGdldERlZmF1bHRXYWxsZXRzLCBSYWluYm93S2l0UHJvdmlkZXIsIGRhcmtUaGVtZSB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvYWxjaGVteSc7XHJcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XHJcbmltcG9ydCB7IERpdmVyZ2VudEFWQ2xpZW50UHJvdmlkZXIsIGdldERpdmVyZ2VudEFWQ2xpZW50IH0gZnJvbSBcIkBodWRkbGUwMS9kaXZlcmdlbnQtYXZcIjtcclxuXHJcblxyXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBbY2hhaW4ubWFpbm5ldCwgY2hhaW4uZ29lcmxpLCBjaGFpbi5wb2x5Z29uLCBjaGFpbi5vcHRpbWlzbSwgY2hhaW4uYXJiaXRydW0sIGNoYWluLmhhcmRoYXRdLFxyXG4gIFtcclxuICAgIC8vIGFsY2hlbXlQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuQUxDSEVNWV9JRCB9KSxcclxuICAgIHB1YmxpY1Byb3ZpZGVyKClcclxuICBdXHJcbik7XHJcblxyXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiAnTXkgUmFpbmJvd0tpdCBBcHAnLFxyXG4gIGNoYWluc1xyXG59KTtcclxuXHJcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBhdXRvQ29ubmVjdDogZmFsc2UsXHJcbiAgY29ubmVjdG9ycyxcclxuICBwcm92aWRlclxyXG59KVxyXG5cclxuY29uc3QgZGl2ZXJnZW50QVZDbGllbnQgPSBnZXREaXZlcmdlbnRBVkNsaWVudChcImh0dHBzOi8vZGctZGV2bmV0Lmh1ZGRsZTAxLmNvbVwiKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XHJcbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgdGhlbWU9e2RhcmtUaGVtZSgpfSBjaGFpbnM9e2NoYWluc30+XHJcbiAgICAgIDxEaXZlcmdlbnRBVkNsaWVudFByb3ZpZGVyIHZhbHVlPXtkaXZlcmdlbnRBVkNsaWVudH0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L0RpdmVyZ2VudEFWQ2xpZW50UHJvdmlkZXI+XHJcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsInB1YmxpY1Byb3ZpZGVyIiwiRGl2ZXJnZW50QVZDbGllbnRQcm92aWRlciIsImdldERpdmVyZ2VudEFWQ2xpZW50IiwiY2hhaW5zIiwicHJvdmlkZXIiLCJtYWlubmV0IiwiZ29lcmxpIiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJoYXJkaGF0IiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiZGl2ZXJnZW50QVZDbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@rainbow-me/rainbowkit/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@rainbow-me/rainbowkit/dist/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@huddle01/divergent-av":
/*!*****************************************!*\
  !*** external "@huddle01/divergent-av" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@huddle01/divergent-av");;

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();