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
  title: 'MERN AI Image Generation App',
  description: "Using React, Node.js, Express & MongoDB. You can create your dream image",
  image: '/images/1.jpg',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://github.com/ergashevislomjon/image_ai',
  visit: 'https://image-ai-five.vercel.app/',
  id: 0
}, {
  title: 'Chat AI Application',
  description: "With an elegant user interface that resembles the Chat GPT app, communication with advanced GPT 3 model API.",
  image: '/images/2.jpg',
  tags: ['React', 'JavaScript', 'Firebase'],
  source: 'https://github.com/ergashevislomjon/chat_open_ai',
  visit: 'https://chat-openai-uz.vercel.app/',
  id: 1
}, {
  title: 'Google Search',
  description: "A google search that doesn't differ from Google. Almost all Google search functions are available.",
  image: '/images/3.jpg',
  tags: ['React', 'Javascript', 'Tailwind'],
  source: 'https://github.com/ergashevislomjon/google-clone',
  visit: 'https://google-z.netlify.app/',
  id: 2
}, {
  title: 'Responsive Watches E-commerce',
  description: "Watches E-commerce Website Design Using HTML CSS & JavaScript.",
  image: '/images/4.png',
  tags: ['HTML', 'CSS', 'Javascript', 'scss'],
  source: 'https://github.com/ergashevislomjon/Responsive_watches_website',
  visit: 'https://watch-ecommerce-uz.netlify.app/',
  id: 3
}, {
  title: 'Headphones website',
  description: "Responsive Landing Page Using HTML CSS & JavaScript.",
  image: '/images/5.png',
  tags: ['HTML', 'CSS', 'Javascript'],
  source: 'https://github.com/ergashevislomjon/Landing_page_headphones',
  visit: 'https://headphones-uz.netlify.app/',
  id: 4
}, {
  title: 'Tasty Food',
  description: "Responsive Website Design Using HTML CSS And JavaScript. Website Restaurant Light/Dark mode",
  image: '/images/6.png',
  tags: ['HTML', 'CSS', 'Javascript'],
  source: 'https://github.com/ergashevislomjon/Tasty_food',
  visit: 'https://tastyfood-uz.netlify.app/',
  id: 5
}, {
  title: 'Plants Website',
  description: "Responsive Plants Website Design Using HTML CSS & JavaScript .",
  image: '/images/7.png',
  tags: ['HTML', 'CSS', 'Javascript'],
  source: 'https://github.com/ergashevislomjon/Plants_website',
  visit: 'https://plants-web-uz.netlify.app/',
  id: 6
}, {
  title: 'Online mahalla',
  description: "Online-mahalla website is a responsive website built using Reactjs JS HTML CSS.",
  image: '/images/8.png',
  tags: ['HTML', 'CSS', 'Javascript', 'ReactJs'],
  source: 'https://github.com/ergashevislomjon/online-mahalla',
  visit: 'https://online-mahalla.netlify.app/',
  id: 7
}, {
  title: 'Bookshelter',
  description: "A website to find and read books online..",
  image: '/images/9.png',
  tags: ['HTML', 'CSS', 'Javascript', ''],
  source: 'https://github.com/ergashevislomjon/online-mahalla',
  visit: 'https://online-mahalla.netlify.app/',
  id: 7
}, {
  title: '',
  description: "Online-mahalla website is a responsive website built using Reactjs JS HTML CSS.",
  image: '/images/8.png',
  tags: ['HTML', 'CSS', 'Javascript', 'ReactJs'],
  source: 'https://github.com/ergashevislomjon/online-mahalla',
  visit: 'https://online-mahalla.netlify.app/',
  id: 7
}];
var TimeLineData = [{
  year: 2021,
  text: 'Started my journey'
}, {
  year: 2021,
  text: 'Worked as a freelance developer'
}, {
  year: 2022,
  text: 'I finished the Frontend course in Najot ta\'lim'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSw4QkFEVDtBQUVFQyxhQUFXLEVBQUUsMEVBRmY7QUFHSUMsT0FBSyxFQUFFLGVBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUMsOEdBRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsa0RBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUUsb0dBRmY7QUFHSUMsT0FBSyxFQUFFLGVBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsa0RBTFY7QUFNRUMsT0FBSyxFQUFFLCtCQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLCtCQURUO0FBRUVDLGFBQVcsRUFBRSxnRUFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixZQUFoQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSxnRUFMVjtBQU1FQyxPQUFLLEVBQUUseUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUsb0JBRFQ7QUFFRUMsYUFBVyxFQUFFLHNEQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCLENBSlY7QUFLRUMsUUFBTSxFQUFFLDZEQUxWO0FBTUVDLE9BQUssRUFBRSxvQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXJDc0IsRUE4Q3RCO0FBQ0VOLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFBRSw2RkFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixZQUFoQixDQUpWO0FBS0VDLFFBQU0sRUFBRSxnREFMVjtBQU1FQyxPQUFLLEVBQUUsbUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E5Q3NCLEVBdUR0QjtBQUNFTixPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLGdFQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCLENBSlY7QUFLRUMsUUFBTSxFQUFFLG9EQUxWO0FBTUVDLE9BQUssRUFBRSxvQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXZEc0IsRUFnRXRCO0FBQ0VOLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQUUsaUZBRmY7QUFHSUMsT0FBSyxFQUFFLGVBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsWUFBaEIsRUFBOEIsU0FBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0RBTFY7QUFNRUMsT0FBSyxFQUFFLHFDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBaEVzQixFQXlFdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLDJDQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCLEVBQThCLEVBQTlCLENBSlY7QUFLRUMsUUFBTSxFQUFFLG9EQUxWO0FBTUVDLE9BQUssRUFBRSxxQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXpFc0IsRUFrRnRCO0FBQ0VOLE9BQUssRUFBRSxFQURUO0FBRUVDLGFBQVcsRUFBRSxpRkFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixZQUFoQixFQUE4QixTQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSxvREFMVjtBQU1FQyxPQUFLLEVBQUUscUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FsRnNCLENBQWpCO0FBNkZBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTEzNzY0OTM0YjE5NGQ1MDFhZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnTUVSTiBBSSBJbWFnZSBHZW5lcmF0aW9uIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiVXNpbmcgUmVhY3QsIE5vZGUuanMsIEV4cHJlc3MgJiBNb25nb0RCLiBZb3UgY2FuIGNyZWF0ZSB5b3VyIGRyZWFtIGltYWdlXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMS5qcGcnLFxuICAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ1JlYWN0JywgJ05vZGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJnYXNoZXZpc2xvbWpvbi9pbWFnZV9haScsXG4gICAgdmlzaXQ6ICdodHRwczovL2ltYWdlLWFpLWZpdmUudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDaGF0IEFJIEFwcGxpY2F0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcIldpdGggYW4gZWxlZ2FudCB1c2VyIGludGVyZmFjZSB0aGF0IHJlc2VtYmxlcyB0aGUgQ2hhdCBHUFQgYXBwLCBjb21tdW5pY2F0aW9uIHdpdGggYWR2YW5jZWQgR1BUIDMgbW9kZWwgQVBJLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy8yLmpwZycsXG4gICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0JywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vY2hhdF9vcGVuX2FpJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vY2hhdC1vcGVuYWktdXoudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdHb29nbGUgU2VhcmNoJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBIGdvb2dsZSBzZWFyY2ggdGhhdCBkb2Vzbid0IGRpZmZlciBmcm9tIEdvb2dsZS4gQWxtb3N0IGFsbCBHb29nbGUgc2VhcmNoIGZ1bmN0aW9ucyBhcmUgYXZhaWxhYmxlLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzMuanBnJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YXNjcmlwdCcsICdUYWlsd2luZCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmdhc2hldmlzbG9tam9uL2dvb2dsZS1jbG9uZScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS16Lm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Jlc3BvbnNpdmUgV2F0Y2hlcyBFLWNvbW1lcmNlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJXYXRjaGVzIEUtY29tbWVyY2UgV2Vic2l0ZSBEZXNpZ24gVXNpbmcgSFRNTCBDU1MgJiBKYXZhU2NyaXB0LlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzQucG5nJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCcsICdzY3NzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vUmVzcG9uc2l2ZV93YXRjaGVzX3dlYnNpdGUnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly93YXRjaC1lY29tbWVyY2UtdXoubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSGVhZHBob25lcyB3ZWJzaXRlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNwb25zaXZlIExhbmRpbmcgUGFnZSBVc2luZyBIVE1MIENTUyAmIEphdmFTY3JpcHQuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvNS5wbmcnLFxuICAgICAgdGFnczogWydIVE1MJywgJ0NTUycsICdKYXZhc2NyaXB0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vTGFuZGluZ19wYWdlX2hlYWRwaG9uZXMnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9oZWFkcGhvbmVzLXV6Lm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDQsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Rhc3R5IEZvb2QnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc3BvbnNpdmUgV2Vic2l0ZSBEZXNpZ24gVXNpbmcgSFRNTCBDU1MgQW5kIEphdmFTY3JpcHQuIFdlYnNpdGUgUmVzdGF1cmFudCBMaWdodC9EYXJrIG1vZGVcIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy82LnBuZycsXG4gICAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ0phdmFzY3JpcHQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJnYXNoZXZpc2xvbWpvbi9UYXN0eV9mb29kJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vdGFzdHlmb29kLXV6Lm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDUsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BsYW50cyBXZWJzaXRlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNwb25zaXZlIFBsYW50cyBXZWJzaXRlIERlc2lnbiBVc2luZyBIVE1MIENTUyAmIEphdmFTY3JpcHQgLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzcucG5nJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmdhc2hldmlzbG9tam9uL1BsYW50c193ZWJzaXRlJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcGxhbnRzLXdlYi11ei5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiA2LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdPbmxpbmUgbWFoYWxsYScsXG4gICAgZGVzY3JpcHRpb246IFwiT25saW5lLW1haGFsbGEgd2Vic2l0ZSBpcyBhIHJlc3BvbnNpdmUgd2Vic2l0ZSBidWlsdCB1c2luZyBSZWFjdGpzIEpTIEhUTUwgQ1NTLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzgucG5nJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCcsICdSZWFjdEpzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vb25saW5lLW1haGFsbGEnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9vbmxpbmUtbWFoYWxsYS5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiA3LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdCb29rc2hlbHRlcicsXG4gICAgZGVzY3JpcHRpb246IFwiQSB3ZWJzaXRlIHRvIGZpbmQgYW5kIHJlYWQgYm9va3Mgb25saW5lLi5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy85LnBuZycsXG4gICAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ0phdmFzY3JpcHQnLCAnJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyZ2FzaGV2aXNsb21qb24vb25saW5lLW1haGFsbGEnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9vbmxpbmUtbWFoYWxsYS5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiA3LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiBcIk9ubGluZS1tYWhhbGxhIHdlYnNpdGUgaXMgYSByZXNwb25zaXZlIHdlYnNpdGUgYnVpbHQgdXNpbmcgUmVhY3RqcyBKUyBIVE1MIENTUy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy84LnBuZycsXG4gICAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ0phdmFzY3JpcHQnLCAnUmVhY3RKcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmdhc2hldmlzbG9tam9uL29ubGluZS1tYWhhbGxhJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vb25saW5lLW1haGFsbGEubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogNyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMjIsIHRleHQ6ICdJIGZpbmlzaGVkIHRoZSBGcm9udGVuZCBjb3Vyc2UgaW4gTmFqb3QgdGFcXCdsaW0nLCB9LFxuICB7IHllYXI6IDIwMjIsIHRleHQ6ICdJIHN0YXJ0ZWQgd29ya2luZyBhdCBBYnV0ZWNoIGNvbXBhbnknLCB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=