self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "WrapperCard": function() { return /* binding */ WrapperCard; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["max-width:100%;max-height:100%;object-fit:cover;overflow:hidden;border-radius:;"]);
var WrapperCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__WrapperCard",
  componentId: "l76idc-1"
})(["padding:5px 25px 20px 25px;display:flex;flex-direction:column;justify-content:space-between;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-2"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));padding:3rem;column-gap:2rem;row-gap:3rem;margin-bottom:40px;@media ", "{display:flex;flex-direction:column;padding:0.5rem;padding-bottom:0;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-3"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;max-height:800px;margin:0 auto;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-4"
})(["text-align:center;z-index:20;width:100%;font-size:2rem;color:#9cc9e3;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-5"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:0.5rem 0;font-size:", ";"], function (props) {
  return props.title ? "2rem" : "1.5rem";
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-6"
})(["width:50px;height:3px;margin:7px auto;border:0;background:#d0bb57;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-7"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:\"Droid Serif\",serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-8"
})(["width:100%;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:30px;max-height:145px;@media ", "{padding:0.3rem;font-size:16px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-9"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;"]);
var ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-10"
})(["color:#d4c0c0;font-size:1.6rem;padding:0.7rem 1.7rem;background:", ";border-radius:8px;transition:0.3s;&:hover{opacity:0.8;}"], function (props) {
  return props.colorBg ? "#24a0ed" : "#111A24";
});
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-11"
})(["display:flex;justify-content:space-around;padding:10px 2rem 2rem 2rem;gap:20px;flex-wrap:wrap;"]);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-12"
})(["color:#d8bfbf;font-size:1.5rem;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiV3JhcHBlckNhcmQiLCJHcmlkQ29udGFpbmVyIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwidGl0bGUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJjb2xvckJnIiwiVGFnTGlzdCIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVGQUFUO0FBUUEsSUFBTUMsV0FBVyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvR0FBakI7QUFPQSxJQUFNRSxhQUFhLEdBQUdGLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDZOQU9mLFVBQUNHLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBlLENBQW5CO0FBY0EsSUFBTUMsUUFBUSxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnSkFPVixVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FQVSxDQUFkO0FBV0EsSUFBTUUsWUFBWSxHQUFHUixxRUFBSDtBQUFBO0FBQUE7QUFBQSw2RUFBbEI7QUFRQSxJQUFNUyxXQUFXLEdBQUdULG9FQUFIO0FBQUE7QUFBQTtBQUFBLDBGQUtULFVBQUNHLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNPLEtBQU4sR0FBYyxNQUFkLEdBQXVCLFFBQW5DO0FBQUEsQ0FMUyxDQUFqQjtBQVFBLElBQU1DLEVBQUUsR0FBR1gsb0VBQUg7QUFBQTtBQUFBO0FBQUEsMEVBQVI7QUFRQSxJQUFNWSxLQUFLLEdBQUdaLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9JQUFYO0FBVUEsSUFBTWEsUUFBUSxHQUFHYixtRUFBSDtBQUFBO0FBQUE7QUFBQSxpUkFhVixVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FiVSxDQUFkO0FBbUJBLElBQU1RLFdBQVcsR0FBR2Qsb0VBQUg7QUFBQTtBQUFBO0FBQUEsaUZBQWpCO0FBT0EsSUFBTWUsYUFBYSxHQUFHZixtRUFBSDtBQUFBO0FBQUE7QUFBQSxxSUFJVixVQUFDRyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDYSxPQUFOLEdBQWdCLFNBQWhCLEdBQTRCLFNBQXhDO0FBQUEsQ0FKVSxDQUFuQjtBQVlBLElBQU1DLE9BQU8sR0FBR2pCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHNHQUFiO0FBT0EsSUFBTWtCLEdBQUcsR0FBR2xCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHVDQUFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxOTZjZWViY2EyMGRkZjkwY2U1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXJDYXJkID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNXB4IDI1cHggMjBweCAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIHJvdy1nYXA6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoODAsIDc4LCA3OCwgMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBtYXgtd2lkdGg6IDI5MHB4OyAqL1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzljYzllMztcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICM5Y2M5ZTM7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMudGl0bGUgPyBcIjJyZW1cIiA6IFwiMS41cmVtXCIpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIciA9IHN0eWxlZC5ocmBcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW46IDdweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6IFwiRHJvaWQgU2VyaWZcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMThweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNlNGU2ZTc7XG4gIGZvbnQtc3R5bGU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWF4LWhlaWdodDogMTQ1cHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5gO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxuICBjb2xvcjogI2Q0YzBjMDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAuN3JlbSAxLjdyZW07XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMuY29sb3JCZyA/IFwiIzI0YTBlZFwiIDogXCIjMTExQTI0XCIpfTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMTBweCAycmVtIDJyZW0gMnJlbTtcbiAgZ2FwOiAyMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5gO1xuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5saWBcbiAgY29sb3I6ICNkOGJmYmY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=