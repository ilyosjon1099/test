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
})(["max-width:100%;max-height:100%;object-fit:cover;overflow:hidden;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiV3JhcHBlckNhcmQiLCJHcmlkQ29udGFpbmVyIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwidGl0bGUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJjb2xvckJnIiwiVGFnTGlzdCIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdFQUFUO0FBT0EsSUFBTUMsV0FBVyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvR0FBakI7QUFPQSxJQUFNRSxhQUFhLEdBQUdGLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDZOQU9mLFVBQUNHLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBlLENBQW5CO0FBY0EsSUFBTUMsUUFBUSxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnSkFPVixVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FQVSxDQUFkO0FBV0EsSUFBTUUsWUFBWSxHQUFHUixxRUFBSDtBQUFBO0FBQUE7QUFBQSw2RUFBbEI7QUFRQSxJQUFNUyxXQUFXLEdBQUdULG9FQUFIO0FBQUE7QUFBQTtBQUFBLDBGQUtULFVBQUNHLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNPLEtBQU4sR0FBYyxNQUFkLEdBQXVCLFFBQW5DO0FBQUEsQ0FMUyxDQUFqQjtBQVFBLElBQU1DLEVBQUUsR0FBR1gsb0VBQUg7QUFBQTtBQUFBO0FBQUEsMEVBQVI7QUFRQSxJQUFNWSxLQUFLLEdBQUdaLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9JQUFYO0FBVUEsSUFBTWEsUUFBUSxHQUFHYixtRUFBSDtBQUFBO0FBQUE7QUFBQSxpUkFhVixVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FiVSxDQUFkO0FBbUJBLElBQU1RLFdBQVcsR0FBR2Qsb0VBQUg7QUFBQTtBQUFBO0FBQUEsaUZBQWpCO0FBT0EsSUFBTWUsYUFBYSxHQUFHZixtRUFBSDtBQUFBO0FBQUE7QUFBQSxxSUFJVixVQUFDRyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDYSxPQUFOLEdBQWdCLFNBQWhCLEdBQTRCLFNBQXhDO0FBQUEsQ0FKVSxDQUFuQjtBQVlBLElBQU1DLE9BQU8sR0FBR2pCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHNHQUFiO0FBT0EsSUFBTWtCLEdBQUcsR0FBR2xCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHVDQUFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwNjRhM2Y0YTFkN2I5ZDkxOWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDVweCAyNXB4IDIwcHggMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBwYWRkaW5nOiAzcmVtO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICByb3ctZ2FwOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogbWF4LXdpZHRoOiAyOTBweDsgKi9cbiAgbWF4LWhlaWdodDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICM5Y2M5ZTM7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjOWNjOWUzO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gKHByb3BzLnRpdGxlID8gXCIycmVtXCIgOiBcIjEuNXJlbVwiKX07XG5gO1xuXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiA3cHggYXV0bztcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjZDBiYjU3O1xuYDtcblxuZXhwb3J0IGNvbnN0IEludHJvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDE3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICNkY2UzZTc7XG4gIGZvbnQtZmFtaWx5OiBcIkRyb2lkIFNlcmlmXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZTRlNmU3O1xuICBmb250LXN0eWxlOiAycmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDE0NXB4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICNkNGMwYzA7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwLjdyZW0gMS43cmVtO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbG9yQmcgPyBcIiMyNGEwZWRcIiA6IFwiIzExMUEyNFwiKX07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGFnTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDEwcHggMnJlbSAycmVtIDJyZW07XG4gIGdhcDogMjBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuYDtcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXG4gIGNvbG9yOiAjZDhiZmJmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9