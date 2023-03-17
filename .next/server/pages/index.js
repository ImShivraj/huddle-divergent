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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaW5ib3draXQtbmV4dC10c3gvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2IxNzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @huddle01/divergent-client */ \"@huddle01/divergent-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, _huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_4__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, _huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Home() {\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const user = (0,_huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_4__.useDivergentStore)((state)=>state.user);\n    console.log(user);\n    const client = (0,_huddle01_divergent_client__WEBPACK_IMPORTED_MODULE_4__.useDivergentClient)();\n    const login = async ()=>{\n        await client.init(\"wallet\");\n    };\n    login();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Huddle Divergent test\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"test huddle01 divergent\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.ConnectButton, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Connected with the address: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" Logged in User: \",\n                    user.uid,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\patrix-1.0.0\\\\codes\\\\huddle-divergent\\\\pages\\\\index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ2tCO0FBQ1M7QUFDcEI7QUFDNkY7QUFFakgsU0FBU00sT0FBTztJQUU3QixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsWUFBVyxFQUFFLEdBQUdMLGlEQUFVQTtJQUUzQyxNQUFNTSxPQUFPTCw2RUFBaUJBLENBQUNNLENBQUFBLFFBQVNBLE1BQU1ELElBQUk7SUFDbERFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFHWixNQUFNSSxTQUFTUiw4RUFBa0JBO0lBRWpDLE1BQU1TLFFBQVEsVUFBWTtRQUN4QixNQUFNRCxPQUFPRSxJQUFJLENBQUM7SUFDcEI7SUFDQUQ7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBV2hCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRCxrREFBSUE7O2tDQUNILDhEQUFDbUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDdkIsaUVBQWFBOzs7OztZQUNiTSw0QkFDQyw4REFBQ2tCOztvQkFBRTtvQkFBNkJuQjs7Ozs7O3FDQUVoQyw4REFBQ21COzs7O29CQUNGOzBCQUNELDhEQUFDQzs7b0JBQUc7b0JBQWtCbEIsS0FBS21CLEdBQUc7b0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFHckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaW5ib3draXQtbmV4dC10c3gvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyB1c2VEaXZlcmdlbnRTdG9yZSwgdXNlRGl2ZXJnZW50Q2xpZW50LCBEaXZlcmdlbnRDbGllbnRQcm92aWRlciwgZ2V0RGl2ZXJnZW50Q2xpZW50IH0gZnJvbSBcIkBodWRkbGUwMS9kaXZlcmdlbnQtY2xpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KClcclxuXHJcbiAgY29uc3QgdXNlciA9IHVzZURpdmVyZ2VudFN0b3JlKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnNvbGUubG9nKHVzZXIpXHJcblxyXG5cclxuICBjb25zdCBjbGllbnQgPSB1c2VEaXZlcmdlbnRDbGllbnQoKVxyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNsaWVudC5pbml0KFwid2FsbGV0XCIpXHJcbiAgfVxyXG4gIGxvZ2luKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkh1ZGRsZSBEaXZlcmdlbnQgdGVzdDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInRlc3QgaHVkZGxlMDEgZGl2ZXJnZW50XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbm5lY3RCdXR0b24gLz5cclxuICAgICAge2lzQ29ubmVjdGVkID8gKFxyXG4gICAgICAgIDxwPkNvbm5lY3RlZCB3aXRoIHRoZSBhZGRyZXNzOiB7YWRkcmVzc308L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8aDE+IExvZ2dlZCBpbiBVc2VyOiB7dXNlci51aWR9IDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJDb25uZWN0QnV0dG9uIiwidXNlQWNjb3VudCIsInVzZURpdmVyZ2VudFN0b3JlIiwidXNlRGl2ZXJnZW50Q2xpZW50IiwiSG9tZSIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsInVzZXIiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnQiLCJsb2dpbiIsImluaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwicCIsImgxIiwidWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();