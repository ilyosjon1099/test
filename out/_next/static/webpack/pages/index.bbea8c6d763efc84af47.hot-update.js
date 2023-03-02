self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var projects = [{
  title: 'Online mahalla',
  description: "Online-mahalla website is a responsive website built using Reactjs JS HTML CSS.",
  image: '/images/8.png',
  tags: ['HTML', 'CSS', 'Javascript', 'ReactJs'],
  source: 'https://github.com/ergashevislomjon/online-mahalla',
  visit: 'https://online-mahalla.netlify.app/',
  id: 7
}, {
  title: 'Chat AI Application',
  description: "With an elegant user interface that resembles the Chat GPT app, communication with advanced GPT 3 model API.",
  image: '/images/2.jpg',
  tags: ['React', 'JavaScript', 'Firebase'],
  source: 'https://github.com/ergashevislomjon/chat_open_ai',
  visit: 'https://chat-openai-uz.vercel.app/',
  id: 1
}, {
  title: 'Plants Website',
  description: "Responsive Plants Website Design Using HTML CSS & JavaScript .",
  image: '/images/7.png',
  tags: ['HTML', 'CSS', 'Javascript'],
  source: 'https://github.com/ergashevislomjon/Plants_website',
  visit: 'https://plants-web-uz.netlify.app/',
  id: 6
}, {
  title: 'Namoz vaqtlari',
  description: "You can find out prayer times in all regions of Uzbekistan through this site.",
  image: '/images/11.png',
  tags: ['HTML', 'CSS', 'Javascript', 'RestAPI'],
  source: 'https://github.com/ergashevislomjon/Namoz-times',
  visit: 'https://namoz-time.netlify.app/',
  id: 10
}, {
  title: 'Bookshelter',
  description: "A website to find and read books online..",
  image: '/images/9.png',
  tags: ['HTML', 'CSS', 'Javascript', 'RestAPI'],
  source: 'https://github.com/ergashevislomjon/google-books',
  visit: 'https://bookshelter-search.netlify.app/',
  id: 8
}, {
  title: 'Google Search',
  description: "A google search that doesn't differ from Google. Almost all Google search functions are available.",
  image: '/images/3.jpg',
  tags: ['React', 'Javascript', 'Tailwind'],
  source: 'https://github.com/ergashevislomjon/google-clone',
  visit: 'https://google-z.netlify.app/',
  id: 2
}, {
  title: 'Tasty Food',
  description: "Responsive Website Design Using HTML CSS And JavaScript. Website Restaurant Light/Dark mode",
  image: '/images/6.png',
  tags: ['HTML', 'CSS', 'Javascript'],
  source: 'https://github.com/ergashevislomjon/Tasty_food',
  visit: 'https://tastyfood-uz.netlify.app/',
  id: 5
}, {
  title: 'Learning Center',
  description: "Website using HTML CSS JS for learning center.",
  image: '/images/10.png',
  tags: ['HTML', 'CSS', 'Javascript', 'ReactJs'],
  source: 'https://github.com/ergashevislomjon/Learning-center',
  visit: 'https://learning-centeruz.netlify.app/',
  id: 9
}, {
  title: 'Super Fast Food Delivery Service',
  description: "Super Fast Food Delivery service website.",
  image: '/images/12.png',
  tags: ['HTML', 'CSS', 'Javascript'],
  source: 'https://github.com/ergashevislomjon/Namoz-times',
  visit: 'https://efood-uz.netlify.app/',
  id: 11
}];
var TimeLineData = [{
  year: 2021,
  text: 'Started my journey'
}, {
  year: 2021,
  text: 'Worked as a freelance developer'
}, {
  year: 2022,
  text: 'I finished the Fullstack course in Najot ta\'lim'
}, {
  year: 2022,
  text: 'I started working at Abutech company'
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQUUsaUZBRmY7QUFHSUMsT0FBSyxFQUFFLGVBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsWUFBaEIsRUFBOEIsU0FBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0RBTFY7QUFNRUMsT0FBSyxFQUFFLHFDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBV3RCO0FBQ0VOLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUMsOEdBRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsa0RBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBWHNCLEVBb0J0QjtBQUNFTixPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLGdFQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCLENBSlY7QUFLRUMsUUFBTSxFQUFFLG9EQUxWO0FBTUVDLE9BQUssRUFBRSxvQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXBCc0IsRUE2QnRCO0FBQ0VOLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQUUsK0VBRmY7QUFHSUMsT0FBSyxFQUFFLGdCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCLEVBQThCLFNBQTlCLENBSlY7QUFLRUMsUUFBTSxFQUFFLGlEQUxWO0FBTUVDLE9BQUssRUFBRSxpQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTdCc0IsRUFzQ3RCO0FBQ0VOLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSwyQ0FGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixZQUFoQixFQUE4QixTQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSxrREFMVjtBQU1FQyxPQUFLLEVBQUUseUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F0Q3NCLEVBK0N0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUUsb0dBRmY7QUFHSUMsT0FBSyxFQUFFLGVBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsa0RBTFY7QUFNRUMsT0FBSyxFQUFFLCtCQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBL0NzQixFQXdEdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLDZGQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCLENBSlY7QUFLRUMsUUFBTSxFQUFFLGdEQUxWO0FBTUVDLE9BQUssRUFBRSxtQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXhEc0IsRUFpRXRCO0FBQ0VOLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxhQUFXLEVBQUUsZ0RBRmY7QUFHSUMsT0FBSyxFQUFFLGdCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCLEVBQThCLFNBQTlCLENBSlY7QUFLRUMsUUFBTSxFQUFFLHFEQUxWO0FBTUVDLE9BQUssRUFBRSx3Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWpFc0IsRUEyRXRCO0FBQ0VOLE9BQUssRUFBRSxrQ0FEVDtBQUVFQyxhQUFXLEVBQUUsMkNBRmY7QUFHSUMsT0FBSyxFQUFFLGdCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCLENBSlY7QUFLRUMsUUFBTSxFQUFFLGlEQUxWO0FBTUVDLE9BQUssRUFBRSwrQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTNFc0IsQ0FBakI7QUF3RkEsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYmVhOGM2ZDc2M2VmYzg0YWY0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdPbmxpbmUgbWFoYWxsYScsXG4gICAgZGVzY3JpcHRpb246IFwiT25saW5lLW1haGFsbGEgd2Vic2l0ZSBpcyBhIHJlc3BvbnNpdmUgd2Vic2l0ZSBidWlsdCB1c2luZyBSZWFjdGpzIEpTIEhUTUwgQ1NTLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzgucG5nJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCcsICdSZWFjdEpzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vb25saW5lLW1haGFsbGEnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9vbmxpbmUtbWFoYWxsYS5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiA3LFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogJ0NoYXQgQUkgQXBwbGljYXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOlwiV2l0aCBhbiBlbGVnYW50IHVzZXIgaW50ZXJmYWNlIHRoYXQgcmVzZW1ibGVzIHRoZSBDaGF0IEdQVCBhcHAsIGNvbW11bmljYXRpb24gd2l0aCBhZHZhbmNlZCBHUFQgMyBtb2RlbCBBUEkuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzIuanBnJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0phdmFTY3JpcHQnLCAnRmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJnYXNoZXZpc2xvbWpvbi9jaGF0X29wZW5fYWknLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9jaGF0LW9wZW5haS11ei52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BsYW50cyBXZWJzaXRlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNwb25zaXZlIFBsYW50cyBXZWJzaXRlIERlc2lnbiBVc2luZyBIVE1MIENTUyAmIEphdmFTY3JpcHQgLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzcucG5nJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmdhc2hldmlzbG9tam9uL1BsYW50c193ZWJzaXRlJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcGxhbnRzLXdlYi11ei5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiA2LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOYW1veiB2YXF0bGFyaScsXG4gICAgZGVzY3JpcHRpb246IFwiWW91IGNhbiBmaW5kIG91dCBwcmF5ZXIgdGltZXMgaW4gYWxsIHJlZ2lvbnMgb2YgVXpiZWtpc3RhbiB0aHJvdWdoIHRoaXMgc2l0ZS5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy8xMS5wbmcnLFxuICAgICAgdGFnczogWydIVE1MJywgJ0NTUycsICdKYXZhc2NyaXB0JywgJ1Jlc3RBUEknXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJnYXNoZXZpc2xvbWpvbi9OYW1vei10aW1lcycsXG4gICAgdmlzaXQ6ICdodHRwczovL25hbW96LXRpbWUubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMTAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Jvb2tzaGVsdGVyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBIHdlYnNpdGUgdG8gZmluZCBhbmQgcmVhZCBib29rcyBvbmxpbmUuLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzkucG5nJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCcsICdSZXN0QVBJJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vZ29vZ2xlLWJvb2tzJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vYm9va3NoZWx0ZXItc2VhcmNoLm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDgsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0dvb2dsZSBTZWFyY2gnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZ29vZ2xlIHNlYXJjaCB0aGF0IGRvZXNuJ3QgZGlmZmVyIGZyb20gR29vZ2xlLiBBbG1vc3QgYWxsIEdvb2dsZSBzZWFyY2ggZnVuY3Rpb25zIGFyZSBhdmFpbGFibGUuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMy5qcGcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdKYXZhc2NyaXB0JywgJ1RhaWx3aW5kJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vZ29vZ2xlLWNsb25lJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLXoubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGFzdHkgRm9vZCcsXG4gICAgZGVzY3JpcHRpb246IFwiUmVzcG9uc2l2ZSBXZWJzaXRlIERlc2lnbiBVc2luZyBIVE1MIENTUyBBbmQgSmF2YVNjcmlwdC4gV2Vic2l0ZSBSZXN0YXVyYW50IExpZ2h0L0RhcmsgbW9kZVwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzYucG5nJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmdhc2hldmlzbG9tam9uL1Rhc3R5X2Zvb2QnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly90YXN0eWZvb2QtdXoubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogNSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTGVhcm5pbmcgQ2VudGVyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJXZWJzaXRlIHVzaW5nIEhUTUwgQ1NTIEpTIGZvciBsZWFybmluZyBjZW50ZXIuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMTAucG5nJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCcsICdSZWFjdEpzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vTGVhcm5pbmctY2VudGVyJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vbGVhcm5pbmctY2VudGVydXoubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogOSxcbiAgfSxcbiAgXG4gIHtcbiAgICB0aXRsZTogJ1N1cGVyIEZhc3QgRm9vZCBEZWxpdmVyeSBTZXJ2aWNlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJTdXBlciBGYXN0IEZvb2QgRGVsaXZlcnkgc2VydmljZSB3ZWJzaXRlLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzEyLnBuZycsXG4gICAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ0phdmFzY3JpcHQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJnYXNoZXZpc2xvbWpvbi9OYW1vei10aW1lcycsXG4gICAgdmlzaXQ6ICdodHRwczovL2Vmb29kLXV6Lm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDExLFxuICB9LFxuICBcbiAgXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXknLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJywgfSxcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiAnSSBmaW5pc2hlZCB0aGUgRnVsbHN0YWNrIGNvdXJzZSBpbiBOYWpvdCB0YVxcJ2xpbScsIH0sXG4gIHsgeWVhcjogMjAyMiwgdGV4dDogJ0kgc3RhcnRlZCB3b3JraW5nIGF0IEFidXRlY2ggY29tcGFueScsIH0sXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==