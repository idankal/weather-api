/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/css/style.css":
/*!**********************************!*\
  !*** ./client/src/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2Nzcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Nzcy9zdHlsZS5jc3M/YzczZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/css/style.css\n");

/***/ }),

/***/ "./client/src/js/main.js":
/*!*******************************!*\
  !*** ./client/src/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather/functions.js */ \"./client/src/js/weather/functions.js\");\n/* harmony import */ var _weather_chartBuilder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather/chartBuilder.js */ \"./client/src/js/weather/chartBuilder.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"./client/src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nwindow.onload = function () {\n  var proxy = 'https://cors-anywhere.herokuapp.com/',\n      api = \"\".concat(proxy, \"https://api.darksky.net/forecast/bf24faeb61b1b888ec45ae372d9009b4/\");\n\n  var showPosition = function showPosition(position) {\n    var lat = position.coords.latitude,\n        long = position.coords.longitude;\n    Request('GET', \"\".concat(api).concat(lat, \",\").concat(long), function (res) {\n      res = JSON.parse(res);\n      console.log(res);\n    });\n  };\n\n  var showError = function showError(error) {\n    Request('GET', 'https://api.ipify.org?format=json', false, function (res) {\n      // if(!res) return console.log(res)\n      res = JSON.parse(res);\n      Request('GET', \"http://ip-api.com/json/\".concat(res.ip), false, function (resp) {\n        // if(!res) return console.og(resp)\n        resp = JSON.parse(resp);\n        Request('GET', \"\".concat(api).concat(resp.lat, \",\").concat(resp.lon), false, function (response) {\n          // if(!res) return console.log(response)\n          response = JSON.parse(response);\n          setEvents(response.currently.temperature);\n          setTimeZone(response.timezone);\n          setSummary(response.currently.summary);\n          setTemperature(Object(_weather_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"convertFerToCel\"])(response.currently.temperature));\n          setIcon(response.currently.icon, document.getElementById('icon')); // createChart(dailyChartParser(response.daily.data), [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"])\n          // createChart(hoursChartParser(response.hourly.data), buildHourColums(response.hourly.data.length))\n\n          Object(_weather_chartBuilder_js__WEBPACK_IMPORTED_MODULE_1__[\"createChart\"])([Object(_weather_chartBuilder_js__WEBPACK_IMPORTED_MODULE_1__[\"buildDataSet\"])(Object(_weather_chartBuilder_js__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf2\"])(Object(_weather_chartBuilder_js__WEBPACK_IMPORTED_MODULE_1__[\"hoursChartParser\"])(response.hourly.data))), Object(_weather_chartBuilder_js__WEBPACK_IMPORTED_MODULE_1__[\"buildDataSet\"])(Object(_weather_chartBuilder_js__WEBPACK_IMPORTED_MODULE_1__[\"dailyChartParser\"])(response.daily.data).splice(0, 2))], // buildHourColums(response.hourly.data.length)\n          // buildWeekColums()\n          Object(_weather_chartBuilder_js__WEBPACK_IMPORTED_MODULE_1__[\"buildTodayAndTomorrow\"])());\n        });\n      });\n    });\n  };\n\n  var Request = function Request(method, url, payload, cb) {\n    if (method !== 'GET' && !payload) return cb(false);\n    var xhttp = new XMLHttpRequest();\n\n    xhttp.onreadystatechange = function () {\n      if (this.readyState == 4 && this.status == 200) {\n        cb(this.responseText);\n      }\n    };\n\n    xhttp.open(method, url, true);\n    xhttp.send();\n  };\n\n  var setEvents = function setEvents(temperature) {\n    document.getElementById('btn').addEventListener(\"click\", fetchSrc);\n    document.getElementById('temperature').addEventListener(\"click\", function () {\n      return Object(_weather_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"handleTemperature\"])(temperature);\n    });\n  };\n\n  var setTimeZone = function setTimeZone(timezone) {\n    return document.getElementById('timezone').innerHTML = timezone;\n  };\n\n  var setTemperature = function setTemperature(temperature) {\n    return document.getElementById('temperature').innerHTML = \"\".concat(temperature, \"&#8451;\");\n  };\n\n  var setSummary = function setSummary(text) {\n    return document.getElementById('summary').innerHTML = text;\n  };\n\n  var setIcon = function setIcon(icon, iconId) {\n    var skycons = new Skycons({\n      color: \"white\"\n    }),\n        currentIcon = icon.replace(/-/g, '_').toUpperCase();\n    skycons.play();\n    return skycons.set(iconId, Skycons[currentIcon]);\n  };\n\n  var fetchSrc = function fetchSrc() {\n    Request('GET', 'http://localhost:4000/api/get-song', false, function (res) {\n      var blobUrl = URL.createObjectURL(new Blob([res])),\n          audio = document.getElementById('audio'),\n          source = document.getElementById('source'); // audio.src = blobUrl\n\n      source.src = blobUrl;\n      audio.play();\n    });\n  };\n\n  (function () {\n    setEvents(); // if(window.location.pathname === '/music') {\n    //   import './music/musicApi.js'\n    // }\n    // navigator.geolocation.getCurrentPosition(showPosition,showError)\n  })();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2pzL21haW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL21haW4uanM/M2I3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb252ZXJ0RmVyVG9DZWwsIGNvbnZlcnRDZWxUb0ZlciwgaGFuZGxlVGVtcGVyYXR1cmUgfSBmcm9tICcuL3dlYXRoZXIvZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNoYXJ0LCBidWlsZERhdGFTZXQsIGFycmF5T2YyLCBob3Vyc0NoYXJ0UGFyc2VyLCBkYWlseUNoYXJ0UGFyc2VyLCBidWlsZFR3b0RheXMsIGJ1aWxkVG9kYXlBbmRUb21vcnJvdyB9IGZyb20gJy4vd2VhdGhlci9jaGFydEJ1aWxkZXIuanMnO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3h5ID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLycsXG4gICAgICBhcGkgPSBcIlwiLmNvbmNhdChwcm94eSwgXCJodHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC9iZjI0ZmFlYjYxYjFiODg4ZWM0NWFlMzcyZDkwMDliNC9cIik7XG5cbiAgdmFyIHNob3dQb3NpdGlvbiA9IGZ1bmN0aW9uIHNob3dQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHZhciBsYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgIGxvbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgIFJlcXVlc3QoJ0dFVCcsIFwiXCIuY29uY2F0KGFwaSkuY29uY2F0KGxhdCwgXCIsXCIpLmNvbmNhdChsb25nKSwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmVzID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgc2hvd0Vycm9yID0gZnVuY3Rpb24gc2hvd0Vycm9yKGVycm9yKSB7XG4gICAgUmVxdWVzdCgnR0VUJywgJ2h0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvbicsIGZhbHNlLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAvLyBpZighcmVzKSByZXR1cm4gY29uc29sZS5sb2cocmVzKVxuICAgICAgcmVzID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgUmVxdWVzdCgnR0VUJywgXCJodHRwOi8vaXAtYXBpLmNvbS9qc29uL1wiLmNvbmNhdChyZXMuaXApLCBmYWxzZSwgZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgLy8gaWYoIXJlcykgcmV0dXJuIGNvbnNvbGUub2cocmVzcClcbiAgICAgICAgcmVzcCA9IEpTT04ucGFyc2UocmVzcCk7XG4gICAgICAgIFJlcXVlc3QoJ0dFVCcsIFwiXCIuY29uY2F0KGFwaSkuY29uY2F0KHJlc3AubGF0LCBcIixcIikuY29uY2F0KHJlc3AubG9uKSwgZmFsc2UsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIC8vIGlmKCFyZXMpIHJldHVybiBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgIHNldEV2ZW50cyhyZXNwb25zZS5jdXJyZW50bHkudGVtcGVyYXR1cmUpO1xuICAgICAgICAgIHNldFRpbWVab25lKHJlc3BvbnNlLnRpbWV6b25lKTtcbiAgICAgICAgICBzZXRTdW1tYXJ5KHJlc3BvbnNlLmN1cnJlbnRseS5zdW1tYXJ5KTtcbiAgICAgICAgICBzZXRUZW1wZXJhdHVyZShjb252ZXJ0RmVyVG9DZWwocmVzcG9uc2UuY3VycmVudGx5LnRlbXBlcmF0dXJlKSk7XG4gICAgICAgICAgc2V0SWNvbihyZXNwb25zZS5jdXJyZW50bHkuaWNvbiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKSk7IC8vIGNyZWF0ZUNoYXJ0KGRhaWx5Q2hhcnRQYXJzZXIocmVzcG9uc2UuZGFpbHkuZGF0YSksIFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdKVxuICAgICAgICAgIC8vIGNyZWF0ZUNoYXJ0KGhvdXJzQ2hhcnRQYXJzZXIocmVzcG9uc2UuaG91cmx5LmRhdGEpLCBidWlsZEhvdXJDb2x1bXMocmVzcG9uc2UuaG91cmx5LmRhdGEubGVuZ3RoKSlcblxuICAgICAgICAgIGNyZWF0ZUNoYXJ0KFtidWlsZERhdGFTZXQoYXJyYXlPZjIoaG91cnNDaGFydFBhcnNlcihyZXNwb25zZS5ob3VybHkuZGF0YSkpKSwgYnVpbGREYXRhU2V0KGRhaWx5Q2hhcnRQYXJzZXIocmVzcG9uc2UuZGFpbHkuZGF0YSkuc3BsaWNlKDAsIDIpKV0sIC8vIGJ1aWxkSG91ckNvbHVtcyhyZXNwb25zZS5ob3VybHkuZGF0YS5sZW5ndGgpXG4gICAgICAgICAgLy8gYnVpbGRXZWVrQ29sdW1zKClcbiAgICAgICAgICBidWlsZFRvZGF5QW5kVG9tb3Jyb3coKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIFJlcXVlc3QgPSBmdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsLCBwYXlsb2FkLCBjYikge1xuICAgIGlmIChtZXRob2QgIT09ICdHRVQnICYmICFwYXlsb2FkKSByZXR1cm4gY2IoZmFsc2UpO1xuICAgIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjYih0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHhodHRwLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHhodHRwLnNlbmQoKTtcbiAgfTtcblxuICB2YXIgc2V0RXZlbnRzID0gZnVuY3Rpb24gc2V0RXZlbnRzKHRlbXBlcmF0dXJlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmZXRjaFNyYyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBoYW5kbGVUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHNldFRpbWVab25lID0gZnVuY3Rpb24gc2V0VGltZVpvbmUodGltZXpvbmUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWV6b25lJykuaW5uZXJIVE1MID0gdGltZXpvbmU7XG4gIH07XG5cbiAgdmFyIHNldFRlbXBlcmF0dXJlID0gZnVuY3Rpb24gc2V0VGVtcGVyYXR1cmUodGVtcGVyYXR1cmUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJykuaW5uZXJIVE1MID0gXCJcIi5jb25jYXQodGVtcGVyYXR1cmUsIFwiJiM4NDUxO1wiKTtcbiAgfTtcblxuICB2YXIgc2V0U3VtbWFyeSA9IGZ1bmN0aW9uIHNldFN1bW1hcnkodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9IHRleHQ7XG4gIH07XG5cbiAgdmFyIHNldEljb24gPSBmdW5jdGlvbiBzZXRJY29uKGljb24sIGljb25JZCkge1xuICAgIHZhciBza3ljb25zID0gbmV3IFNreWNvbnMoe1xuICAgICAgY29sb3I6IFwid2hpdGVcIlxuICAgIH0pLFxuICAgICAgICBjdXJyZW50SWNvbiA9IGljb24ucmVwbGFjZSgvLS9nLCAnXycpLnRvVXBwZXJDYXNlKCk7XG4gICAgc2t5Y29ucy5wbGF5KCk7XG4gICAgcmV0dXJuIHNreWNvbnMuc2V0KGljb25JZCwgU2t5Y29uc1tjdXJyZW50SWNvbl0pO1xuICB9O1xuXG4gIHZhciBmZXRjaFNyYyA9IGZ1bmN0aW9uIGZldGNoU3JjKCkge1xuICAgIFJlcXVlc3QoJ0dFVCcsICdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2dldC1zb25nJywgZmFsc2UsIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHZhciBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzXSkpLFxuICAgICAgICAgIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvJyksXG4gICAgICAgICAgc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvdXJjZScpOyAvLyBhdWRpby5zcmMgPSBibG9iVXJsXG5cbiAgICAgIHNvdXJjZS5zcmMgPSBibG9iVXJsO1xuICAgICAgYXVkaW8ucGxheSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgc2V0RXZlbnRzKCk7IC8vIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9tdXNpYycpIHtcbiAgICAvLyAgIGltcG9ydCAnLi9tdXNpYy9tdXNpY0FwaS5qcydcbiAgICAvLyB9XG4gICAgLy8gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzaG93UG9zaXRpb24sc2hvd0Vycm9yKVxuICB9KSgpO1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/js/main.js\n");

/***/ }),

/***/ "./client/src/js/weather/chartBuilder.js":
/*!***********************************************!*\
  !*** ./client/src/js/weather/chartBuilder.js ***!
  \***********************************************/
/*! exports provided: buildDataSet, createChart, arrayOf2, dailyChartParser, hoursChartParser, buildHourColums, buildTwoDays, buildWeekColums, buildTodayAndTomorrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildDataSet\", function() { return buildDataSet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChart\", function() { return createChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayOf2\", function() { return arrayOf2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dailyChartParser\", function() { return dailyChartParser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hoursChartParser\", function() { return hoursChartParser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildHourColums\", function() { return buildHourColums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildTwoDays\", function() { return buildTwoDays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildWeekColums\", function() { return buildWeekColums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildTodayAndTomorrow\", function() { return buildTodayAndTomorrow; });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./client/src/js/weather/functions.js\");\n // builder for 1 graph\n\nvar buildDataSet = function buildDataSet(data) {\n  var labelNum = Math.floor(Math.random() * 11);\n  return {\n    label: \"My \".concat(labelNum, \" Data Set\"),\n    backgroundColor: Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"buildRGB\"])(),\n    borderColor: Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"buildRGB\"])(),\n    data: data\n  };\n}; // creating new graph\n\n\nvar createChart = function createChart(dataSets, colums) {\n  var ctx = document.getElementById('myChart').getContext('2d'),\n      chart = new Chart(ctx, {\n    type: 'line',\n    data: {\n      labels: colums,\n      datasets: dataSets\n    },\n    options: {}\n  });\n};\n\nvar arrayOf2 = function arrayOf2(arr) {\n  var ret = [];\n  ret.push(Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"avg\"])(arr.splice(0, arr.length / 2)));\n  ret.push(Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"avg\"])(arr.splice(arr.length / 2, arr.length)));\n  return ret;\n}; // parsing daily list\n\n\nvar dailyChartParser = function dailyChartParser(dailyList) {\n  var dayGraph = dailyList.map(function (day) {\n    return Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"convertFerToCel\"])(day.temperatureLow + day.temperatureLow / 2);\n  });\n  return dayGraph;\n}; // parsing hours list\n\n\nvar hoursChartParser = function hoursChartParser(hoursList) {\n  var hourGraph = hoursList.map(function (hour) {\n    return Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"convertFerToCel\"])(hour.temperature);\n  });\n  return hourGraph;\n}; //\n\n\nvar buildHourColums = function buildHourColums(size) {\n  var arr = [];\n\n  for (var i = 0; i < size; i++) {\n    if (i < 9) {\n      arr.push(\"0\".concat(i, \":00\"));\n    } else {\n      arr.push(\"\".concat(i, \":00\"));\n    }\n  }\n\n  return arr;\n};\n\nvar buildTodayAndTomorrow = function buildTodayAndTomorrow() {\n  var date = new Date().getDay(),\n      day = buildWeekColums();\n  return [day[date], day[date + 1]];\n}; // builder for display\n\n\nvar buildTwoDays = function buildTwoDays() {\n  return [\"Sunday\", \"Monday\"];\n};\n\nvar buildWeekColums = function buildWeekColums() {\n  return [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2pzL3dlYXRoZXIvY2hhcnRCdWlsZGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy93ZWF0aGVyL2NoYXJ0QnVpbGRlci5qcz85NDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnZlcnRGZXJUb0NlbCwgY29udmVydENlbFRvRmVyLCBidWlsZFJHQiwgYXZnIH0gZnJvbSAnLi9mdW5jdGlvbnMuanMnOyAvLyBidWlsZGVyIGZvciAxIGdyYXBoXG5cbnZhciBidWlsZERhdGFTZXQgPSBmdW5jdGlvbiBidWlsZERhdGFTZXQoZGF0YSkge1xuICB2YXIgbGFiZWxOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6IFwiTXkgXCIuY29uY2F0KGxhYmVsTnVtLCBcIiBEYXRhIFNldFwiKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGJ1aWxkUkdCKCksXG4gICAgYm9yZGVyQ29sb3I6IGJ1aWxkUkdCKCksXG4gICAgZGF0YTogZGF0YVxuICB9O1xufTsgLy8gY3JlYXRpbmcgbmV3IGdyYXBoXG5cblxudmFyIGNyZWF0ZUNoYXJ0ID0gZnVuY3Rpb24gY3JlYXRlQ2hhcnQoZGF0YVNldHMsIGNvbHVtcykge1xuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgdHlwZTogJ2xpbmUnLFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsczogY29sdW1zLFxuICAgICAgZGF0YXNldHM6IGRhdGFTZXRzXG4gICAgfSxcbiAgICBvcHRpb25zOiB7fVxuICB9KTtcbn07XG5cbnZhciBhcnJheU9mMiA9IGZ1bmN0aW9uIGFycmF5T2YyKGFycikge1xuICB2YXIgcmV0ID0gW107XG4gIHJldC5wdXNoKGF2ZyhhcnIuc3BsaWNlKDAsIGFyci5sZW5ndGggLyAyKSkpO1xuICByZXQucHVzaChhdmcoYXJyLnNwbGljZShhcnIubGVuZ3RoIC8gMiwgYXJyLmxlbmd0aCkpKTtcbiAgcmV0dXJuIHJldDtcbn07IC8vIHBhcnNpbmcgZGFpbHkgbGlzdFxuXG5cbnZhciBkYWlseUNoYXJ0UGFyc2VyID0gZnVuY3Rpb24gZGFpbHlDaGFydFBhcnNlcihkYWlseUxpc3QpIHtcbiAgdmFyIGRheUdyYXBoID0gZGFpbHlMaXN0Lm1hcChmdW5jdGlvbiAoZGF5KSB7XG4gICAgcmV0dXJuIGNvbnZlcnRGZXJUb0NlbChkYXkudGVtcGVyYXR1cmVMb3cgKyBkYXkudGVtcGVyYXR1cmVMb3cgLyAyKTtcbiAgfSk7XG4gIHJldHVybiBkYXlHcmFwaDtcbn07IC8vIHBhcnNpbmcgaG91cnMgbGlzdFxuXG5cbnZhciBob3Vyc0NoYXJ0UGFyc2VyID0gZnVuY3Rpb24gaG91cnNDaGFydFBhcnNlcihob3Vyc0xpc3QpIHtcbiAgdmFyIGhvdXJHcmFwaCA9IGhvdXJzTGlzdC5tYXAoZnVuY3Rpb24gKGhvdXIpIHtcbiAgICByZXR1cm4gY29udmVydEZlclRvQ2VsKGhvdXIudGVtcGVyYXR1cmUpO1xuICB9KTtcbiAgcmV0dXJuIGhvdXJHcmFwaDtcbn07IC8vXG5cblxudmFyIGJ1aWxkSG91ckNvbHVtcyA9IGZ1bmN0aW9uIGJ1aWxkSG91ckNvbHVtcyhzaXplKSB7XG4gIHZhciBhcnIgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIGlmIChpIDwgOSkge1xuICAgICAgYXJyLnB1c2goXCIwXCIuY29uY2F0KGksIFwiOjAwXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyLnB1c2goXCJcIi5jb25jYXQoaSwgXCI6MDBcIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnI7XG59O1xuXG52YXIgYnVpbGRUb2RheUFuZFRvbW9ycm93ID0gZnVuY3Rpb24gYnVpbGRUb2RheUFuZFRvbW9ycm93KCkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RGF5KCksXG4gICAgICBkYXkgPSBidWlsZFdlZWtDb2x1bXMoKTtcbiAgcmV0dXJuIFtkYXlbZGF0ZV0sIGRheVtkYXRlICsgMV1dO1xufTsgLy8gYnVpbGRlciBmb3IgZGlzcGxheVxuXG5cbnZhciBidWlsZFR3b0RheXMgPSBmdW5jdGlvbiBidWlsZFR3b0RheXMoKSB7XG4gIHJldHVybiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIl07XG59O1xuXG52YXIgYnVpbGRXZWVrQ29sdW1zID0gZnVuY3Rpb24gYnVpbGRXZWVrQ29sdW1zKCkge1xuICByZXR1cm4gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XG59O1xuXG5leHBvcnQgeyBidWlsZERhdGFTZXQsIGNyZWF0ZUNoYXJ0LCBhcnJheU9mMiwgZGFpbHlDaGFydFBhcnNlciwgaG91cnNDaGFydFBhcnNlciwgYnVpbGRIb3VyQ29sdW1zLCBidWlsZFR3b0RheXMsIGJ1aWxkV2Vla0NvbHVtcywgYnVpbGRUb2RheUFuZFRvbW9ycm93IH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/js/weather/chartBuilder.js\n");

/***/ }),

/***/ "./client/src/js/weather/functions.js":
/*!********************************************!*\
  !*** ./client/src/js/weather/functions.js ***!
  \********************************************/
/*! exports provided: buildRGB, avg, buildTwoDays, buildWeekColums, convertFerToCel, convertCelToFer, handleTemperature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildRGB\", function() { return buildRGB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"avg\", function() { return avg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildTwoDays\", function() { return buildTwoDays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildWeekColums\", function() { return buildWeekColums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertFerToCel\", function() { return convertFerToCel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertCelToFer\", function() { return convertCelToFer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleTemperature\", function() { return handleTemperature; });\n// return random rgb color\nvar buildRGB = function buildRGB() {\n  var rgb1 = Math.floor(Math.random() * 256),\n      rgb2 = Math.floor(Math.random() * 256),\n      rgb3 = Math.floor(Math.random() * 256);\n  return \"rgb(\".concat(rgb1, \",\").concat(rgb2, \",\").concat(rgb3, \")\");\n}; // return averager of temperature\n\n\nvar avg = function avg(arr) {\n  var sum = 0;\n\n  for (var i = 0; i < arr.length; i++) {\n    sum += arr[i];\n  }\n\n  return Math.floor(sum / arr.length);\n}; // return converting F to C\n\n\nvar convertFerToCel = function convertFerToCel(fer) {\n  return Math.floor((fer - 32) * (5 / 9));\n};\n\nvar convertCelToFer = function convertCelToFer(cel) {\n  return Math.floor((cel + 32) * (5 / 9));\n};\n\nvar handleTemperature = function handleTemperature(temperature) {\n  var elem = document.getElementById('temperature'),\n      unicode;\n  console.log(elem.classList);\n\n  if (elem.classList.value == 'F') {\n    unicode = '&#8451;';\n    elem.classList.remove('F');\n    temperature = convertFerToCel(temperature);\n  } else if (elem.classList.value == '') {\n    unicode = '&#8457;';\n    elem.classList.add('F');\n    temperature = convertCelToFer(temperature);\n  }\n\n  return elem.innerHTML = \"\".concat(temperature, \" \").concat(unicode);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2pzL3dlYXRoZXIvZnVuY3Rpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy93ZWF0aGVyL2Z1bmN0aW9ucy5qcz9lNTg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJldHVybiByYW5kb20gcmdiIGNvbG9yXG52YXIgYnVpbGRSR0IgPSBmdW5jdGlvbiBidWlsZFJHQigpIHtcbiAgdmFyIHJnYjEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLFxuICAgICAgcmdiMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NiksXG4gICAgICByZ2IzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcbiAgcmV0dXJuIFwicmdiKFwiLmNvbmNhdChyZ2IxLCBcIixcIikuY29uY2F0KHJnYjIsIFwiLFwiKS5jb25jYXQocmdiMywgXCIpXCIpO1xufTsgLy8gcmV0dXJuIGF2ZXJhZ2VyIG9mIHRlbXBlcmF0dXJlXG5cblxudmFyIGF2ZyA9IGZ1bmN0aW9uIGF2ZyhhcnIpIHtcbiAgdmFyIHN1bSA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBzdW0gKz0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguZmxvb3Ioc3VtIC8gYXJyLmxlbmd0aCk7XG59OyAvLyByZXR1cm4gY29udmVydGluZyBGIHRvIENcblxuXG52YXIgY29udmVydEZlclRvQ2VsID0gZnVuY3Rpb24gY29udmVydEZlclRvQ2VsKGZlcikge1xuICByZXR1cm4gTWF0aC5mbG9vcigoZmVyIC0gMzIpICogKDUgLyA5KSk7XG59O1xuXG52YXIgY29udmVydENlbFRvRmVyID0gZnVuY3Rpb24gY29udmVydENlbFRvRmVyKGNlbCkge1xuICByZXR1cm4gTWF0aC5mbG9vcigoY2VsICsgMzIpICogKDUgLyA5KSk7XG59O1xuXG52YXIgaGFuZGxlVGVtcGVyYXR1cmUgPSBmdW5jdGlvbiBoYW5kbGVUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSkge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wZXJhdHVyZScpLFxuICAgICAgdW5pY29kZTtcbiAgY29uc29sZS5sb2coZWxlbS5jbGFzc0xpc3QpO1xuXG4gIGlmIChlbGVtLmNsYXNzTGlzdC52YWx1ZSA9PSAnRicpIHtcbiAgICB1bmljb2RlID0gJyYjODQ1MTsnO1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnRicpO1xuICAgIHRlbXBlcmF0dXJlID0gY29udmVydEZlclRvQ2VsKHRlbXBlcmF0dXJlKTtcbiAgfSBlbHNlIGlmIChlbGVtLmNsYXNzTGlzdC52YWx1ZSA9PSAnJykge1xuICAgIHVuaWNvZGUgPSAnJiM4NDU3Oyc7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdGJyk7XG4gICAgdGVtcGVyYXR1cmUgPSBjb252ZXJ0Q2VsVG9GZXIodGVtcGVyYXR1cmUpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW0uaW5uZXJIVE1MID0gXCJcIi5jb25jYXQodGVtcGVyYXR1cmUsIFwiIFwiKS5jb25jYXQodW5pY29kZSk7XG59O1xuXG5leHBvcnQgeyBidWlsZFJHQiwgYXZnLCBidWlsZFR3b0RheXMsIGJ1aWxkV2Vla0NvbHVtcywgY29udmVydEZlclRvQ2VsLCBjb252ZXJ0Q2VsVG9GZXIsIGhhbmRsZVRlbXBlcmF0dXJlIH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/js/weather/functions.js\n");

/***/ })

/******/ });