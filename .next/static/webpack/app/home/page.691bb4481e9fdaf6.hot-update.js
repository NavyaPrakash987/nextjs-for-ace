"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./src/components/feed.tsx":
/*!*********************************!*\
  !*** ./src/components/feed.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Feed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../.nvm/versions/node/v18.19.1/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/scroll-area */ \"(app-pages-browser)/./src/components/ui/scroll-area.tsx\");\n/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ \"(app-pages-browser)/./src/components/panel.tsx\");\n/* harmony import */ var _app_context_usercontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/context/usercontext */ \"(app-pages-browser)/./src/app/context/usercontext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CustomScrollArea = (param)=>{\n    let { children, className = \"\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_1__.ScrollArea, {\n        className: \"h-full \".concat(className),\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_1__.ScrollBar, {}, void 0, false, {\n                fileName: \"/home/npci-admin/auth_files/ACE_app/src/components/feed.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/npci-admin/auth_files/ACE_app/src/components/feed.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_c = CustomScrollArea;\n{}function Feed() {\n    _s();\n    const { user } = (0,_app_context_usercontext__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const current_username = user === null || user === void 0 ? void 0 : user.name;\n    console;\n    // const PostsList = () => {\n    //   const [posts, setPosts] = useState([]);\n    //   useEffect(() => {\n    //       const fetchPosts = async () => {\n    //           const response = await fetch('/api/posts');\n    //           const data = await response.json();\n    //           setPosts(data);\n    //       };\n    //       fetchPosts();\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex flex-1 overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"blah blah blah blah\"\n                }, void 0, false, {\n                    fileName: \"/home/npci-admin/auth_files/ACE_app/src/components/feed.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomScrollArea, {\n                    className: \"flex-1 p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-6\",\n                        children: [\n                            \"Welcome back, \",\n                            current_username,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/npci-admin/auth_files/ACE_app/src/components/feed.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/npci-admin/auth_files/ACE_app/src/components/feed.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/npci-admin/auth_files/ACE_app/src/components/feed.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/npci-admin/auth_files/ACE_app/src/components/feed.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/npci-admin/auth_files/ACE_app/src/components/feed.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Feed, \"Q+JCVIy3JH0MXpFK+vm68eAxsAY=\", false, function() {\n    return [\n        _app_context_usercontext__WEBPACK_IMPORTED_MODULE_3__.useUser\n    ];\n});\n_c1 = Feed;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomScrollArea\");\n$RefreshReg$(_c1, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2ZlZWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJbUU7QUFFbkM7QUFDbUI7QUFHbkQsTUFBTUksbUJBQW1CO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsRUFBRTt5QkFDcEQsOERBQUNOLGtFQUFVQTtRQUFDTSxXQUFXLFVBQW9CLE9BQVZBOztZQUM5QkQ7MEJBQ0QsOERBQUNKLGlFQUFTQTs7Ozs7Ozs7Ozs7O0tBSFJHO0FBVU4sQ0FBMkQsQ0FDNUMsU0FBU0c7O0lBRXRCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLGlFQUFPQTtJQUN4QixNQUFNTSxtQkFBbUJELGlCQUFBQSwyQkFBQUEsS0FBTUUsSUFBSTtJQUNuQ0M7SUFDQSw0QkFBNEI7SUFDNUIsNENBQTRDO0lBRTVDLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsd0RBQXdEO0lBQ3hELGdEQUFnRDtJQUNoRCw0QkFBNEI7SUFFNUIsV0FBVztJQUVYLHNCQUFzQjtJQUN0QixZQUFZO0lBR1oscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztZQUFLUCxXQUFVOzs4QkFDZCw4REFBQ1E7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ1Y7b0JBQWlCRSxXQUFVOzhCQUMxQiw0RUFBQ1E7d0JBQUdSLFdBQVU7OzRCQUEwQjs0QkFBZUc7NEJBQWlCOzs7Ozs7Ozs7Ozs7OEJBd0MxRSw4REFBRVAsOENBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CO0dBckV3Qks7O1FBRUxKLDZEQUFPQTs7O01BRkZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ZlZWQudHN4P2NlODgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyRmFsbGJhY2ssIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiXG5pbXBvcnQgeyBTY3JvbGxBcmVhLCBTY3JvbGxCYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhXCJcbmltcG9ydCB7IEhlYXJ0SWNvbiwgTWVzc2FnZUNpcmNsZUljb24sIFNoYXJlSWNvbiwgVHJlbmRpbmdVcEljb24sIFVzZXJJY29uLCBBd2FyZEljb24sIFBlblRvb2xJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5pbXBvcnQgU2lkZVBhbmVsICBmcm9tIFwiLi9wYW5lbFwiXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIkAvYXBwL2NvbnRleHQvdXNlcmNvbnRleHRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IEN1c3RvbVNjcm9sbEFyZWEgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiAoXG4gIDxTY3JvbGxBcmVhIGNsYXNzTmFtZT17YGgtZnVsbCAke2NsYXNzTmFtZX1gfT5cbiAgICB7Y2hpbGRyZW59XG4gICAgPFNjcm9sbEJhciAvPlxuICA8L1Njcm9sbEFyZWE+XG4pXG5pbnRlcmZhY2UgRmVlZFByb3BzIHtcbiAgb3Blbk1vZGFsOiAoKSA9PiB2b2lkOyAvLyBFeHBsaWNpdGx5IGRlZmluZSB0aGUgdHlwZSBvZiBvcGVuTW9kYWxcbn1cblxuey8qIDxGZWVkUHJvcHM+ICAoeyBvcGVuTW9kYWwgfTogRmVlZFByb3BzKTogSlNYLkVsZW1lbnQgKi99XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkKCkge1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xuICBjb25zdCBjdXJyZW50X3VzZXJuYW1lID0gdXNlcj8ubmFtZVxuICBjb25zb2xlXG4gIC8vIGNvbnN0IFBvc3RzTGlzdCA9ICgpID0+IHtcbiAgLy8gICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3Bvc3RzJyk7XG4gIC8vICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyAgICAgICAgICAgc2V0UG9zdHMoZGF0YSk7XG4gICAgICAgICAgXG4gIC8vICAgICAgIH07XG5cbiAgLy8gICAgICAgZmV0Y2hQb3N0cygpO1xuICAvLyAgIH0sIFtdKTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxoMT5ibGFoIGJsYWggYmxhaCBibGFoPC9oMT5cbiAgICAgICAgPEN1c3RvbVNjcm9sbEFyZWEgY2xhc3NOYW1lPVwiZmxleC0xIHAtNlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNlwiPldlbGNvbWUgYmFjaywge2N1cnJlbnRfdXNlcm5hbWV9ITwvaDE+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwicGItMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFySW1hZ2Ugc3JjPXtwb3N0LmF2YXRhcn0gYWx0PXtwb3N0Lm5hbWV9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJGYWxsYmFjaz57cG9zdC5uYW1lWzBdfTwvQXZhdGFyRmFsbGJhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntwb3N0Lm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5Ae3Bvc3QudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtYmFzZVwiPntwb3N0LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAge3Bvc3QuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gYWx0PVwiUG9zdCBpbWFnZVwiIGNsYXNzTmFtZT1cIm10LTQgcm91bmRlZC1sZyB3LWZ1bGwgb2JqZWN0LWNvdmVyIGgtNjRcIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgbXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgTGlrZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUNpcmNsZUljb24gY2xhc3NOYW1lPVwiaC01IHctNSBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZUljb24gY2xhc3NOYW1lPVwiaC01IHctNSBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBTaGFyZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICkpfSBcbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvQ3VzdG9tU2Nyb2xsQXJlYT5cbiAgICAgICAgPCBTaWRlUGFuZWwgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlNjcm9sbEFyZWEiLCJTY3JvbGxCYXIiLCJTaWRlUGFuZWwiLCJ1c2VVc2VyIiwiQ3VzdG9tU2Nyb2xsQXJlYSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiRmVlZCIsInVzZXIiLCJjdXJyZW50X3VzZXJuYW1lIiwibmFtZSIsImNvbnNvbGUiLCJkaXYiLCJtYWluIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/feed.tsx\n"));

/***/ })

});