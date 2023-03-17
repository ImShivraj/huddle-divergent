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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @huddle01/divergent-client */ \"@huddle01/divergent-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.goerli,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.arbitrum,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.hardhat\n], [\n    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: false,\n    connectors,\n    provider\n});\nconst divergentClient = (0,_huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_6__.getDivergentClient)(\"https://dg-devnet.huddle01.com\");\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.darkTheme)(),\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_6__.DivergentClientProvider, {\n                value: divergentClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\_app.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\_app.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\_app.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBR2E7QUFDK0M7QUFDaEI7QUFFbEI7QUFDaUM7QUFHekYsTUFBTSxFQUFFVSxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHUCxzREFBZUEsQ0FDMUM7SUFBQ0QsZ0RBQWE7SUFBRUEsK0NBQVk7SUFBRUEsZ0RBQWE7SUFBRUEsaURBQWM7SUFBRUEsaURBQWM7SUFBRUEsZ0RBQWE7Q0FBQyxFQUMzRjtJQUNFLHVEQUF1RDtJQUN2REksc0VBQWNBO0NBQ2Y7QUFHSCxNQUFNLEVBQUVXLFdBQVUsRUFBRSxHQUFHbEIseUVBQWlCQSxDQUFDO0lBQ3ZDbUIsU0FBUztJQUNUVDtBQUNGO0FBRUEsTUFBTVUsY0FBY2YsbURBQVlBLENBQUM7SUFDL0JnQixhQUFhLEtBQUs7SUFDbEJIO0lBQ0FQO0FBQ0Y7QUFFQSxNQUFNVyxrQkFBa0JiLDhFQUFrQkEsQ0FBQztBQUc1QixTQUFTYyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0UsOERBQUNuQiw4Q0FBV0E7UUFBQ29CLFFBQVFOO2tCQUNuQiw0RUFBQ25CLHNFQUFrQkE7WUFBQzBCLE9BQU96QixpRUFBU0E7WUFBSVEsUUFBUUE7c0JBQ2hELDRFQUFDRiwrRUFBdUJBO2dCQUFDb0IsT0FBT047MEJBQzVCLDRFQUFDRTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaW5ib3draXQtbmV4dC10c3gvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcblxyXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGdldERlZmF1bHRXYWxsZXRzLCBSYWluYm93S2l0UHJvdmlkZXIsIGRhcmtUaGVtZSB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvYWxjaGVteSc7XHJcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XHJcbmltcG9ydCB7IERpdmVyZ2VudENsaWVudFByb3ZpZGVyLCBnZXREaXZlcmdlbnRDbGllbnQgfSBmcm9tIFwiQGh1ZGRsZTAxL2RpdmVyZ2VudC1jbGllbnRcIjtcclxuXHJcblxyXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBbY2hhaW4ubWFpbm5ldCwgY2hhaW4uZ29lcmxpLCBjaGFpbi5wb2x5Z29uLCBjaGFpbi5vcHRpbWlzbSwgY2hhaW4uYXJiaXRydW0sIGNoYWluLmhhcmRoYXRdLFxyXG4gIFtcclxuICAgIC8vIGFsY2hlbXlQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuQUxDSEVNWV9JRCB9KSxcclxuICAgIHB1YmxpY1Byb3ZpZGVyKClcclxuICBdXHJcbik7XHJcblxyXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiAnTXkgUmFpbmJvd0tpdCBBcHAnLFxyXG4gIGNoYWluc1xyXG59KTtcclxuXHJcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBhdXRvQ29ubmVjdDogZmFsc2UsXHJcbiAgY29ubmVjdG9ycyxcclxuICBwcm92aWRlclxyXG59KVxyXG5cclxuY29uc3QgZGl2ZXJnZW50Q2xpZW50ID0gZ2V0RGl2ZXJnZW50Q2xpZW50KFwiaHR0cHM6Ly9kZy1kZXZuZXQuaHVkZGxlMDEuY29tXCIpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciB0aGVtZT17ZGFya1RoZW1lKCl9IGNoYWlucz17Y2hhaW5zfT5cclxuICAgICAgPERpdmVyZ2VudENsaWVudFByb3ZpZGVyIHZhbHVlPXtkaXZlcmdlbnRDbGllbnR9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9EaXZlcmdlbnRDbGllbnRQcm92aWRlcj5cclxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XHJcbiAgICA8L1dhZ21pQ29uZmlnPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwicHVibGljUHJvdmlkZXIiLCJEaXZlcmdlbnRDbGllbnRQcm92aWRlciIsImdldERpdmVyZ2VudENsaWVudCIsImNoYWlucyIsInByb3ZpZGVyIiwibWFpbm5ldCIsImdvZXJsaSIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwiaGFyZGhhdCIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsImRpdmVyZ2VudENsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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

/***/ "@huddle01/divergent-client":
/*!*********************************************!*\
  !*** external "@huddle01/divergent-client" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@huddle01/divergent-client");;

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