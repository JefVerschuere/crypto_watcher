"use strict";
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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nfunction Home() {\n    axios.get(\"https://api.nomics.com/v1/currencies/ticker?key=fef2e52bddb3338a1c392d574b1b5741df7a4b0d&ids=BTC,ETH,XRP&interval=2h,1h,1d&convert=EUR&platform-currency=ETH&per-page=100&page=1\").then((response)=>console.log(response)\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen py-2 italic\",\n        children: \"test\"\n    }, void 0, false, {\n        fileName: \"/home/jeverschue/workspace/crypto_watcher/src/pages/index.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUVmLFNBQVNDLElBQUksR0FBRztJQUM3QkYsS0FBSyxDQUNGRyxHQUFHLENBQUMsa0xBQWtMLENBQUMsQ0FDdkxDLElBQUksQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQzNDLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvRUFBb0U7a0JBQUMsTUFFbEY7Ozs7O1lBQU0sQ0FDVDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBheGlvc1xuICAgIC5nZXQoXCJodHRwczovL2FwaS5ub21pY3MuY29tL3YxL2N1cnJlbmNpZXMvdGlja2VyP2tleT1mZWYyZTUyYmRkYjMzMzhhMWMzOTJkNTc0YjFiNTc0MWRmN2E0YjBkJmlkcz1CVEMsRVRILFhSUCZpbnRlcnZhbD0yaCwxaCwxZCZjb252ZXJ0PUVVUiZwbGF0Zm9ybS1jdXJyZW5jeT1FVEgmcGVyLXBhZ2U9MTAwJnBhZ2U9MVwiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHktMiBpdGFsaWNcIj5cbiAgICAgIHRlc3RcbiAgICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiSG9tZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();