(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- main router  -->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, title) {
        this.auth = auth;
        this.title = title;
        this.title.setTitle('Chat');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
















Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
var appRoutes = [
    {
        path: '',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: 'register',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    },
    {
        path: 'chat',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
            ],
            imports: [
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.usernameCurrentUser = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AuthService.prototype.getusernameCurrentUser = function () {
        return this.usernameCurrentUser.asObservable();
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.IsAuthenticated = function () {
        return JSON.parse(localStorage.getItem("LoggedInUser"));
    };
    AuthService.prototype.setToken = function (setToken) {
        this.token = setToken;
    };
    // register request to server with user details!
    AuthService.prototype.register = function (user) {
        var _this = this;
        return this.http
            .post("users/register", user)
            .subscribe(function (res) {
            _this.router.navigate(["/"]);
        }, function (error) {
            _this.authStatusListener.next(error.error.message);
        });
    };
    // login request to server with user details!
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http
            .post("users/login", user)
            .subscribe(function (response) {
            _this.usernameCurrentUser.next(response.username);
            localStorage.setItem("CurrentUsername", response.username);
            // get the token from response after successful login!
            var token = response.token;
            _this.token = token;
            if (token) {
                _this.isAuthenticated = true;
                localStorage.setItem("LoggedInUser", JSON.stringify(_this.isAuthenticated));
                _this.router.navigate(["/chat"]);
            }
        }, function (error) {
            _this.authStatusListener.next(error.error.message);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("LoggedInUser");
        localStorage.removeItem("CurrentUsername");
        this.router.navigate(["/"]);
    };
    AuthService.prototype.getonlineUsers = function (room) {
        return this.http.post('onlineUsers/getOnlineUsers', room);
    };
    AuthService.prototype.onlineUsers = function (onlineUser) {
        return this.http
            .post('onlineUsers', onlineUser)
            .subscribe(function (data) {
        });
    };
    AuthService.prototype.deleteFromOnlineUsers = function (username) {
        return this.http.post('onlineUsers/deleteUser', username);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isAuth = this.authService.IsAuthenticated();
        if (isAuth) {
            return true;
        }
        this.router.navigate(["/"]);
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Animation to logo image */\r\n.container-fluid {\r\n  -webkit-animation: rotate-center 0.6s ease-in-out both;\r\n  animation: rotate-center 0.6s ease-in-out both;\r\n}\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-5 15:18:59\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n/**\r\n * ----------------------------------------\r\n * animation rotate-center\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n/*\r\nAnimation for login card! */\r\n.container {\r\n  -webkit-animation: scale-up-ver-top 0.5s cubic-bezier(0.39, 0.575, 0.565, 1)\r\n    both;\r\n  animation: scale-up-ver-top 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;\r\n}\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-5 19:58:7\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n/**\r\n * ----------------------------------------\r\n * animation scale-up-ver-top\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes scale-up-ver-top {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n    transform: scaleY(0.4);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n}\r\n@keyframes scale-up-ver-top {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n    transform: scaleY(0.4);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n}\r\n/* Animation for faild Auth */\r\nngb-alert {\r\n  -webkit-animation: bounce-top 0.9s both;\r\n  animation: bounce-top 0.9s both;\r\n}\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-6 15:7:18\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n/**\r\n * ----------------------------------------\r\n * animation bounce-top\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes bounce-top {\r\n  0% {\r\n    -webkit-transform: translateY(-45px);\r\n    transform: translateY(-45px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 1;\r\n  }\r\n  24% {\r\n    opacity: 1;\r\n  }\r\n  40% {\r\n    -webkit-transform: translateY(-24px);\r\n    transform: translateY(-24px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  65% {\r\n    -webkit-transform: translateY(-12px);\r\n    transform: translateY(-12px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  82% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  93% {\r\n    -webkit-transform: translateY(-4px);\r\n    transform: translateY(-4px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  25%,\r\n  55%,\r\n  75%,\r\n  87% {\r\n    -webkit-transform: translateY(0px);\r\n    transform: translateY(0px);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0px);\r\n    transform: translateY(0px);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes bounce-top {\r\n  0% {\r\n    -webkit-transform: translateY(-45px);\r\n    transform: translateY(-45px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 1;\r\n  }\r\n  24% {\r\n    opacity: 1;\r\n  }\r\n  40% {\r\n    -webkit-transform: translateY(-24px);\r\n    transform: translateY(-24px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  65% {\r\n    -webkit-transform: translateY(-12px);\r\n    transform: translateY(-12px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  82% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  93% {\r\n    -webkit-transform: translateY(-4px);\r\n    transform: translateY(-4px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  25%,\r\n  55%,\r\n  75%,\r\n  87% {\r\n    -webkit-transform: translateY(0px);\r\n    transform: translateY(0px);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0px);\r\n    transform: translateY(0px);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n    opacity: 1;\r\n  }\r\n}\r\n.container {\r\n  background-color: rgb(65, 65, 65);\r\n  border-radius: 5px;\r\n  width: 30%;\r\n}\r\n.container-fluid {\r\n  width: 20%;\r\n}\r\nimg {\r\n  width: 100%;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  color: black;\r\n  font-family: tahoma;\r\n  font-size: 50px;\r\n}\r\n#loginbtn {\r\n  width: 100%;\r\n  font-size: 30px;\r\n}\r\n#alertMessage {\r\n  text-align: center;\r\n  font-family: tahoma;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .container {\r\n    width: 100%;\r\n  }\r\n\r\n  .container-fluid {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0Usc0RBQXNEO0VBQ3RELDhDQUE4QztBQUNoRDtBQUNBOzs7bURBR21EO0FBRW5EOzs7O0VBSUU7QUFDRjtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7QUFDRjtBQUVBOzJCQUMyQjtBQUUzQjtFQUNFO1FBQ007RUFDTix5RUFBeUU7QUFDM0U7QUFFQTs7O21EQUdtRDtBQUVuRDs7OztFQUlFO0FBQ0Y7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7QUFDRjtBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLHVDQUF1QztFQUN2QywrQkFBK0I7QUFDakM7QUFFQTs7O21EQUdtRDtBQUVuRDs7OztFQUlFO0FBQ0Y7RUFDRTtJQUNFLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLGtDQUFrQztJQUNsQyxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0VBQ3BDO0VBQ0E7Ozs7SUFJRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0U7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztFQUNBOzs7O0lBSUUsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxtQ0FBbUM7SUFDbkMsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFuaW1hdGlvbiB0byBsb2dvIGltYWdlICovXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUtY2VudGVyIDAuNnMgZWFzZS1pbi1vdXQgYm90aDtcclxuICBhbmltYXRpb246IHJvdGF0ZS1jZW50ZXIgMC42cyBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktMy01IDE1OjE4OjU5XHJcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBhbmltYXRpb24gcm90YXRlLWNlbnRlclxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG5BbmltYXRpb24gZm9yIGxvZ2luIGNhcmQhICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpXHJcbiAgICBib3RoO1xyXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktMy01IDE5OjU4OjdcclxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFuaW1hdGlvbiBzY2FsZS11cC12ZXItdG9wXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS11cC12ZXItdG9wIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLXZlci10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYXRpb24gZm9yIGZhaWxkIEF1dGggKi9cclxubmdiLWFsZXJ0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYm91bmNlLXRvcCAwLjlzIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBib3VuY2UtdG9wIDAuOXMgYm90aDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOS0zLTYgMTU6NzoxOFxyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIGJvdW5jZS10b3BcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZS10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDVweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMjQlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICA4MiUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICA5MyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICAyNSUsXHJcbiAgNTUlLFxyXG4gIDc1JSxcclxuICA4NyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgYm91bmNlLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAyNCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICA2NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDgyJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDkzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDI1JSxcclxuICA1NSUsXHJcbiAgNzUlLFxyXG4gIDg3JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiB0YWhvbWE7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4jbG9naW5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuI2FsZXJ0TWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiB0YWhvbWE7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainHeaderApp\" class=\"container-fluid\">\n  <img\n    src=\"https://bootcamp.geekshubsacademy.com/wp-content/uploads/2018/06/mean-stack-1.png\"\n    alt=\"\"\n  />\n</div>\n\n<br />\n\n<div class=\"container\">\n  <ngb-progressbar\n    [ngClass]=\"{ progressbarHideShow: !progressBarFlag }\"\n    type=\"success\"\n    [value]=\"75\"\n    [striped]=\"true\"\n    [animated]=\"true\"\n  ></ngb-progressbar>\n  <br />\n  <form (ngSubmit)=\"loginRequest(f)\" #f=\"ngForm\" ngNativeValidate>\n    <input\n      class=\"form-control\"\n      type=\"email\"\n      ngModel\n      name=\"email\"\n      placeholder=\"Email\"\n      required\n    />\n    <br />\n    <input\n      minlength=\"6\"\n      class=\"form-control\"\n      type=\"password\"\n      ngModel\n      name=\"password\"\n      placeholder=\"Password\"\n      required\n    />\n\n    <hr />\n    <button id=\"loginbtn\" class=\"btn btn-outline-success\" type=\"submit\">\n      Login\n    </button>\n  </form>\n\n  <br />\n  <br />\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <div id=\"goToRegisterpage\">\n        <button class=\"btn btn-outline-light\" [routerLink]=\"['/register']\">\n          New User ?\n          <h5>Register here</h5>\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <ngb-alert\n        id=\"alertMessage\"\n        *ngIf=\"ErrorContent\"\n        type=\"danger\"\n        [dismissible]=\"false\"\n        ><strong>{{ ErrorContent }}</strong></ngb-alert\n      >\n    </div>\n  </div>\n\n  <br />\n  <br />\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.flagAlert = false;
        this.progressBarFlag = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.auth
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.ErrorContent = authStatus;
            _this.progressBarFlag = false;
            _this.showAlert();
        });
        if (this.auth.IsAuthenticated()) {
            this.router.navigate(["/chat"]);
        }
    };
    LoginComponent.prototype.showAlert = function () {
        var _this = this;
        setTimeout(function () {
            _this.ErrorContent = null;
        }, 5000);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    // login request send to AuthService with user data
    LoginComponent.prototype.loginRequest = function (form) {
        this.progressBarFlag = true;
        var email = form.value.email;
        var password = form.value.password;
        var user = {
            Email: email,
            Password: password
        };
        this.auth.login(user);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            providers: [src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]],
            styles: ["\n      .progressbarHideShow {\n        visibility: hidden;\n      }\n    ", __webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  -webkit-animation: rotate-center 0.6s ease-in-out both;\r\n  animation: rotate-center 0.6s ease-in-out both;\r\n}\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-5 15:18:59\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n/**\r\n * ----------------------------------------\r\n * animation rotate-center\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n/*\r\nAnimation to login card! */\r\n.container {\r\n  -webkit-animation: scale-up-ver-top 0.5s cubic-bezier(0.39, 0.575, 0.565, 1)\r\n    both;\r\n  animation: scale-up-ver-top 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;\r\n}\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-5 19:58:7\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n/**\r\n * ----------------------------------------\r\n * animation scale-up-ver-top\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes scale-up-ver-top {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n    transform: scaleY(0.4);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n}\r\n@keyframes scale-up-ver-top {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n    transform: scaleY(0.4);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n}\r\nngb-alert {\r\n  -webkit-animation: bounce-top 0.9s both;\r\n  animation: bounce-top 0.9s both;\r\n}\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-6 15:7:18\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n/**\r\n * ----------------------------------------\r\n * animation bounce-top\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes bounce-top {\r\n  0% {\r\n    -webkit-transform: translateY(-45px);\r\n    transform: translateY(-45px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 1;\r\n  }\r\n  24% {\r\n    opacity: 1;\r\n  }\r\n  40% {\r\n    -webkit-transform: translateY(-24px);\r\n    transform: translateY(-24px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  65% {\r\n    -webkit-transform: translateY(-12px);\r\n    transform: translateY(-12px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  82% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  93% {\r\n    -webkit-transform: translateY(-4px);\r\n    transform: translateY(-4px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  25%,\r\n  55%,\r\n  75%,\r\n  87% {\r\n    -webkit-transform: translateY(0px);\r\n    transform: translateY(0px);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0px);\r\n    transform: translateY(0px);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes bounce-top {\r\n  0% {\r\n    -webkit-transform: translateY(-45px);\r\n    transform: translateY(-45px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 1;\r\n  }\r\n  24% {\r\n    opacity: 1;\r\n  }\r\n  40% {\r\n    -webkit-transform: translateY(-24px);\r\n    transform: translateY(-24px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  65% {\r\n    -webkit-transform: translateY(-12px);\r\n    transform: translateY(-12px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  82% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  93% {\r\n    -webkit-transform: translateY(-4px);\r\n    transform: translateY(-4px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n  25%,\r\n  55%,\r\n  75%,\r\n  87% {\r\n    -webkit-transform: translateY(0px);\r\n    transform: translateY(0px);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0px);\r\n    transform: translateY(0px);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n    opacity: 1;\r\n  }\r\n}\r\n#alertMessage {\r\n  text-align: center;\r\n  font-family: tahoma;\r\n}\r\n.container-fluid {\r\n  width: 20%;\r\n  height: 5%;\r\n}\r\nimg {\r\n  width: 100%;\r\n}\r\n.container {\r\n  margin-top: 1%;\r\n  background-color: rgb(65, 65, 65);\r\n  border-radius: 5px;\r\n  width: 30%;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  color: black;\r\n  font-family: tahoma;\r\n  font-size: 50px;\r\n}\r\n#registerbtn {\r\n  width: 100%;\r\n  font-size: 30px;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .container {\r\n    width: 100%;\r\n  }\r\n\r\n  .container-fluid {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBc0Q7RUFDdEQsOENBQThDO0FBQ2hEO0FBQ0E7OzttREFHbUQ7QUFFbkQ7Ozs7RUFJRTtBQUNGO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7MEJBQzBCO0FBRTFCO0VBQ0U7UUFDTTtFQUNOLHlFQUF5RTtBQUMzRTtBQUVBOzs7bURBR21EO0FBRW5EOzs7O0VBSUU7QUFDRjtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsK0JBQStCO0FBQ2pDO0FBRUE7OzttREFHbUQ7QUFFbkQ7Ozs7RUFJRTtBQUNGO0VBQ0U7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztFQUNBOzs7O0lBSUUsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxtQ0FBbUM7SUFDbkMsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7RUFDQTs7OztJQUlFLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUtY2VudGVyIDAuNnMgZWFzZS1pbi1vdXQgYm90aDtcclxuICBhbmltYXRpb246IHJvdGF0ZS1jZW50ZXIgMC42cyBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktMy01IDE1OjE4OjU5XHJcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBhbmltYXRpb24gcm90YXRlLWNlbnRlclxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG5BbmltYXRpb24gdG8gbG9naW4gY2FyZCEgKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSlcclxuICAgIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOS0zLTUgMTk6NTg6N1xyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIHNjYWxlLXVwLXZlci10b3BcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLXZlci10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGUtdXAtdmVyLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICB9XHJcbn1cclxuXHJcbm5nYi1hbGVydCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZS10b3AgMC45cyBib3RoO1xyXG4gIGFuaW1hdGlvbjogYm91bmNlLXRvcCAwLjlzIGJvdGg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktMy02IDE1Ojc6MThcclxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFuaW1hdGlvbiBib3VuY2UtdG9wXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2UtdG9wIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1cHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDI0JSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDY1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgODIlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgOTMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgMjUlLFxyXG4gIDU1JSxcclxuICA3NSUsXHJcbiAgODclIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGJvdW5jZS10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDVweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMjQlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICA4MiUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICA5MyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICAyNSUsXHJcbiAgNTUlLFxyXG4gIDc1JSxcclxuICA4NyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4jYWxlcnRNZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDUlO1xyXG59XHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbiNyZWdpc3RlcmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainHeaderApp\" class=\"container-fluid\">\n  <img\n    src=\"https://bootcamp.geekshubsacademy.com/wp-content/uploads/2018/06/mean-stack-1.png\"\n    alt=\"\"\n  />\n</div>\n\n<br />\n\n<div class=\"container\">\n  <ngb-progressbar\n    [ngClass]=\"{ progressbarHideShow: !progressBarFlag }\"\n    type=\"success\"\n    [value]=\"75\"\n    [striped]=\"true\"\n    [animated]=\"true\"\n  ></ngb-progressbar>\n  <br />\n  <form (ngSubmit)=\"registerRequest(f)\" #f=\"ngForm\" ngNativeValidate>\n    <input\n      class=\"form-control\"\n      type=\"email\"\n      ngModel\n      name=\"email\"\n      placeholder=\"Email\"\n      required\n    />\n    <br />\n    <input\n      minlength=\"6\"\n      class=\"form-control\"\n      type=\"password\"\n      ngModel\n      name=\"password\"\n      placeholder=\"Password\"\n      required\n    />\n    <br />\n    <input\n      maxlength=\"20\"\n      class=\"form-control\"\n      type=\"text\"\n      ngModel\n      name=\"username\"\n      placeholder=\"choose a Username\"\n      required\n    />\n\n    <hr />\n    <button id=\"registerbtn\" class=\"btn btn-outline-info\" type=\"submit\">\n      Submit\n    </button>\n  </form>\n\n  <br />\n\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <div id=\"goToLoginpage\">\n        <button class=\"btn btn-outline-light\" [routerLink]=\"['/']\">\n          Already User ?\n          <h5>Login</h5>\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <ngb-alert\n        id=\"alertMessage\"\n        *ngIf=\"ErrorContent\"\n        type=\"danger\"\n        [dismissible]=\"false\"\n        ><strong>{{ ErrorContent }}</strong></ngb-alert\n      >\n    </div>\n  </div>\n\n  <br />\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.flagAlert = false;
        this.progressBarFlag = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.auth
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.ErrorContent = authStatus;
            _this.progressBarFlag = false;
            _this.showAlert();
        });
        if (this.auth.IsAuthenticated()) {
            this.router.navigate(["/chat"]);
        }
    };
    RegisterComponent.prototype.showAlert = function () {
        var _this = this;
        setTimeout(function () {
            _this.ErrorContent = null;
        }, 5000);
    };
    RegisterComponent.prototype.registerRequest = function (form) {
        this.progressBarFlag = true;
        var email = form.value.email;
        var password = form.value.password;
        var username = form.value.username;
        var user = {
            Email: email,
            Password: password,
            Username: username
        };
        this.auth.register(user);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            providers: [src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]],
            styles: ["\n      .progressbarHideShow {\n        visibility: hidden;\n      }\n    ", __webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");


var ChatService = /** @class */ (function () {
    function ChatService() {
        var _this = this;
        // 3 functions that  recive data from server.
        this.getMessages = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('new-message', function (data) {
                    observer.next(data);
                });
            });
        };
        this.getjoinRoom = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('new user joined', function (data) {
                    observer.next(data);
                });
            });
        };
        this.userLeave = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('new user leave', function (data) {
                    observer.next(data);
                });
            });
        };
        this.usertyping = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('typing', function (data) {
                    observer.next(data);
                });
            });
        };
        this.userstoptyping = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('stop-typing', function (data) {
                    observer.next(data);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__();
    }
    // 3 functions that  handling all request from client,and send it to server!
    ChatService.prototype.sendMessage = function (data) {
        this.socket.emit('new-message', data);
    };
    ChatService.prototype.joinRoom = function (data) {
        this.socket.emit('join', data);
    };
    ChatService.prototype.leaveRoom = function (data) {
        this.socket.emit('leave', data);
    };
    ChatService.prototype.typing = function (data) {
        this.socket.emit('typing', data);
    };
    ChatService.prototype.stoptyping = function (data) {
        this.socket.emit('stop-typing', data);
    };
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n  -webkit-animation: scale-up-ver-top 1s cubic-bezier(0.39, 0.575, 0.565, 1)\r\n    both;\r\n  animation: scale-up-ver-top 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-5 19:58:7\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation scale-up-ver-top\r\n * ----------------------------------------\r\n */\r\n\r\n@-webkit-keyframes scale-up-ver-top {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n    transform: scaleY(0.4);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n}\r\n\r\n@keyframes scale-up-ver-top {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n    transform: scaleY(0.4);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n}\r\n\r\n/* Animation for user name & current room in chat */\r\n\r\n#inRoomTitle {\r\n  -webkit-animation: scale-in-hor-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\r\n    both;\r\n  animation: scale-in-hor-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-7 20:27:9\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation scale-in-hor-left\r\n * ----------------------------------------\r\n */\r\n\r\n@-webkit-keyframes scale-in-hor-left {\r\n  0% {\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: 0% 0%;\r\n    transform-origin: 0% 0%;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    -webkit-transform-origin: 0% 0%;\r\n    transform-origin: 0% 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes scale-in-hor-left {\r\n  0% {\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: 0% 0%;\r\n    transform-origin: 0% 0%;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    -webkit-transform-origin: 0% 0%;\r\n    transform-origin: 0% 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#dot {\r\n  -webkit-animation: blink-1 5s infinite both;\r\n  animation: blink-1 5s infinite both;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-5 20:11:56\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation blink-1\r\n * ----------------------------------------\r\n */\r\n\r\n@-webkit-keyframes blink-1 {\r\n  0%,\r\n  50%,\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n  25%,\r\n  75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes blink-1 {\r\n  0%,\r\n  50%,\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n  25%,\r\n  75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* Animation for online users div */\r\n\r\n/* table {\r\n\t-webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n\t        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n} */\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-3-10 20:10:58\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation slide-in-right\r\n * ----------------------------------------\r\n */\r\n\r\n/* @-webkit-keyframes slide-in-right {\r\n  0% {\r\n    -webkit-transform: translateX(1000px);\r\n            transform: translateX(1000px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slide-in-right {\r\n  0% {\r\n    -webkit-transform: translateX(1000px);\r\n            transform: translateX(1000px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n} */\r\n\r\n#logOutButton {\r\n  color: whitesmoke;\r\n  font-family: tahoma;\r\n  transition: all;\r\n}\r\n\r\n#imgInNavbar {\r\n  width: 5%;\r\n}\r\n\r\n#logOutButton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#mainHeaderInNavbar {\r\n  color: whitesmoke;\r\n}\r\n\r\n#mainHeaderApp {\r\n  color: rgba(41, 150, 141, 0.664);\r\n  font-family: tahoma;\r\n  font-size: 50px;\r\n}\r\n\r\n#inputMessage {\r\n  margin-top: 10%;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n#mainPageMessages {\r\n  border-right: 1px solid black;\r\n  height: 300px;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n#messages {\r\n  font-family: tahoma;\r\n}\r\n\r\nselect {\r\n  margin-right: 5%;\r\n}\r\n\r\n#messageInChat {\r\n}\r\n\r\n#timeStamp {\r\n  float: right;\r\n  font-size: 15px;\r\n}\r\n\r\n#UsernameInChat {\r\n  color: rgba(80, 36, 122, 0.678);\r\n  font-size: 20px;\r\n  font-family: tahoma;\r\n  font-weight: bold;\r\n}\r\n\r\n#messageInChat {\r\n  font-family: tahoma;\r\n}\r\n\r\n#dot {\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: lightgreen;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n#onlineUsersHeader {\r\n  text-align: center;\r\n  font-family: tahoma;\r\n  font-size: 25px;\r\n  color: lightseagreen;\r\n  border-radius: 20px;\r\n  margin-bottom: 20px;\r\n  float: left;\r\n}\r\n\r\n#onlineUsersImage {\r\n  float: left;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n#heyUsernameTitle {\r\n  font-size: 30px;\r\n  font-weight: bolder;\r\n  font-family: tahoma;\r\n  color: rgba(80, 36, 122, 0.884);\r\n}\r\n\r\n#userTypingHere {\r\n  float: right;\r\n  color: gray;\r\n  font-family: tahoma;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO1FBQ007RUFDTix1RUFBdUU7QUFDekU7O0FBRUE7OzttREFHbUQ7O0FBRW5EOzs7O0VBSUU7O0FBQ0Y7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFO1FBQ007RUFDTiwyRUFBMkU7QUFDN0U7O0FBRUE7OzttREFHbUQ7O0FBRW5EOzs7O0VBSUU7O0FBQ0Y7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixVQUFVO0VBQ1o7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixVQUFVO0VBQ1o7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLG1DQUFtQztBQUNyQzs7QUFDQTs7O21EQUdtRDs7QUFFbkQ7Ozs7RUFJRTs7QUFDRjtFQUNFOzs7SUFHRSxVQUFVO0VBQ1o7RUFDQTs7SUFFRSxVQUFVO0VBQ1o7QUFDRjs7QUFDQTtFQUNFOzs7SUFHRSxVQUFVO0VBQ1o7RUFDQTs7SUFFRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxtQ0FBbUM7O0FBQ25DOzs7R0FHRzs7QUFFSDs7O21EQUdtRDs7QUFFbkQ7Ozs7RUFJRTs7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7O0FBRUg7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7QUFDckIiLCJmaWxlIjoiYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtdmVyLXRvcCAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKVxyXG4gICAgYm90aDtcclxuICBhbmltYXRpb246IHNjYWxlLXVwLXZlci10b3AgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOS0zLTUgMTk6NTg6N1xyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIHNjYWxlLXVwLXZlci10b3BcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLXZlci10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGUtdXAtdmVyLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiBmb3IgdXNlciBuYW1lICYgY3VycmVudCByb29tIGluIGNoYXQgKi9cclxuI2luUm9vbVRpdGxlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtaW4taG9yLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NClcclxuICAgIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZS1pbi1ob3ItbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE5LTMtNyAyMDoyNzo5XHJcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBhbmltYXRpb24gc2NhbGUtaW4taG9yLWxlZnRcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLWluLWhvci1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGUtaW4taG9yLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbiNkb3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluay0xIDVzIGluZmluaXRlIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBibGluay0xIDVzIGluZmluaXRlIGJvdGg7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOS0zLTUgMjA6MTE6NTZcclxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFuaW1hdGlvbiBibGluay0xXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay0xIHtcclxuICAwJSxcclxuICA1MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAyNSUsXHJcbiAgNzUlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmstMSB7XHJcbiAgMCUsXHJcbiAgNTAlLFxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMjUlLFxyXG4gIDc1JSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLyogQW5pbWF0aW9uIGZvciBvbmxpbmUgdXNlcnMgZGl2ICovXHJcbi8qIHRhYmxlIHtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHNsaWRlLWluLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59ICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE5LTMtMTAgMjA6MTA6NThcclxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFuaW1hdGlvbiBzbGlkZS1pbi1yaWdodFxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4vKiBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzbGlkZS1pbi1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufSAqL1xyXG5cclxuI2xvZ091dEJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICB0cmFuc2l0aW9uOiBhbGw7XHJcbn1cclxuI2ltZ0luTmF2YmFyIHtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbiNsb2dPdXRCdXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI21haW5IZWFkZXJJbk5hdmJhciB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiNtYWluSGVhZGVyQXBwIHtcclxuICBjb2xvcjogcmdiYSg0MSwgMTUwLCAxNDEsIDAuNjY0KTtcclxuICBmb250LWZhbWlseTogdGFob21hO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuI2lucHV0TWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuI21haW5QYWdlTWVzc2FnZXMge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuI21lc3NhZ2VzIHtcclxuICBmb250LWZhbWlseTogdGFob21hO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbiNtZXNzYWdlSW5DaGF0IHtcclxufVxyXG5cclxuI3RpbWVTdGFtcCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuI1VzZXJuYW1lSW5DaGF0IHtcclxuICBjb2xvcjogcmdiYSg4MCwgMzYsIDEyMiwgMC42NzgpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogdGFob21hO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNtZXNzYWdlSW5DaGF0IHtcclxuICBmb250LWZhbWlseTogdGFob21hO1xyXG59XHJcblxyXG4jZG90IHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI29ubGluZVVzZXJzSGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jb25saW5lVXNlcnNJbWFnZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4jaGV5VXNlcm5hbWVUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICBjb2xvcjogcmdiYSg4MCwgMzYsIDEyMiwgMC44ODQpO1xyXG59XHJcblxyXG4jdXNlclR5cGluZ0hlcmUge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LWZhbWlseTogdGFob21hO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <img\n    id=\"imgInNavbar\"\n    src=\"https://bootcamp.geekshubsacademy.com/wp-content/uploads/2018/06/mean-stack-1.png\"\n    alt=\"\"\n  />\n  <ng-template [ngIf]=\"showHideLogoutButton\">\n    <p\n      placement=\"left\"\n      ngbTooltip=\"click to log out\"\n      id=\"logOutButton\"\n      (click)=\"logout()\"\n    >\n      <strong>Log out</strong>\n    </p>\n  </ng-template>\n</nav>\n\n<hr />\n\n<div id=\"mainPage\" class=\"container\">\n  <div class=\"row\">\n    <!-- choose a username here! -->\n    <div class=\"col-md-3\">\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <!-- wellcome user -->\n    <div class=\"col-md-6\">\n      <ng-template [ngIf]=\"usernameFlag\">\n        <h5>\n          wellcome <span id=\"heyUsernameTitle\"> {{ user }}</span>\n        </h5>\n      </ng-template>\n    </div>\n  </div>\n\n  <!-- choose a room  -->\n  <div class=\"row\">\n    <ng-template [ngIf]=\"joinLeaveRoom\">\n      <div class=\"col-md-3\">\n        <div class=\"input-group\">\n          <select [(ngModel)]=\"room\" class=\"form-control\">\n            <option value=\"Lobby\">Lobby</option>\n            <option value=\"Room 1\">Room 1</option>\n            <option value=\"Room 2\">Room 2</option>\n          </select>\n\n          <span>\n            <button\n              placement=\"right\"\n              ngbTooltip=\"press to join to room\"\n              [disabled]=\"!usernameFlag\"\n              class=\"btn btn-info\"\n              (click)=\"join()\"\n            >\n              Join\n            </button>\n          </span>\n        </div>\n      </div>\n    </ng-template>\n\n    <!-- join / leave rooms   -->\n    <div class=\"col-md-4\">\n      <ng-template [ngIf]=\"!joinLeaveRoom\">\n        <div id=\"inRoomTitle\">\n          <p>\n            You are available in : <strong>{{ room }}</strong>\n          </p>\n          <button\n            placement=\"right\"\n            ngbTooltip=\"press to leave this room\"\n            id=\"leaveRoomButton\"\n            class=\"btn btn-outline-dark\"\n            (click)=\"leave()\"\n          >\n            leave\n          </button>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n  <hr />\n\n  <div class=\"row\">\n    <!-- main chat with all message -->\n    <div #scrollMe id=\"mainPageMessages\" class=\"col-md-10\">\n      <div\n        [ngClass]=\"{ changeSideinchat: this.user == item.user }\"\n        id=\"messageInChat\"\n        *ngFor=\"let item of allMessages\"\n      >\n        <span>\n          <strong\n            [ngClass]=\"{ hideUsername: this.user == item.user }\"\n            id=\"UsernameInChat\"\n            >{{ item.user }}\n          </strong>\n        </span>\n        <span>\n          <p id=\"timeStamp\">{{ item.date }}</p>\n        </span>\n        <p>{{ item.message }}</p>\n\n        <hr />\n      </div>\n\n    </div>\n\n    <!-- div with all online users -->\n    <div class=\"col-md-2\">\n      <ng-template [ngIf]=\"!joinLeaveRoom\">\n        <img\n          id=\"onlineUsersImage\"\n          src=\"https://png.pngtree.com/svg/20170407/9e8cbb439e.svg\"\n        />\n        <h5 id=\"onlineUsersHeader\">online</h5>\n\n        <div\n          class=\"input-group\"\n          *ngFor=\"let item of onlineUsers; let i = index\"\n        >\n          <table>\n            <thead>\n              <tr>\n                <td id=\"dot\"></td>\n                <td>\n                  <strong>{{ item.userName }}</strong>\n                </td>\n                <!-- <td >{{item.date}}</td> -->\n              </tr>\n            </thead>\n          </table>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n          <!-- if statment when user join to some room. input text for messages open! -->\n    <div class=\"col-md-6\">\n      <ng-template [ngIf]=\"!joinLeaveRoom\">\n        <div>\n          <input\n            id=\"inputMessage\"\n            maxlength=\"50\"\n            (keydown)=\"sendMessage($event)\"\n            (keypress)=\"usertyping($event)\"\n            class=\"form-control\"\n            [(ngModel)]=\"messegeContent\"\n            name=\"messegeContent\"\n            type=\"text\"\n            placeholder=\"write message here..\"\n          />\n        </div>\n      </ng-template>\n    </div>\n    <!-- user is typing -->\n    <div class=\"col-md-3\">\n        <div  [ngClass]=\"{ userIsTypingClass: userTypingflag != true  }\">\n              <p id=\"userTypingHere\">\n                <strong>{{ usertypingArray }} is typing..</strong>\n              </p>\n          </div>\n    </div>\n  </div>\n</div>\n\n<hr />\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var ChatComponent = /** @class */ (function () {
    function ChatComponent(chat, auth) {
        this.chat = chat;
        this.auth = auth;
        this.allMessages = [];
        this.usernameFlag = false;
        this.userTypingflag = false;
        this.joinLeaveRoom = true;
        this.flagSenduserTyping = false;
        this.room = "Lobby";
    }
    ChatComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        var Meonlineuser = { username: this.user };
        this.leave();
        event.returnValue = false;
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUsernameafterLogin = localStorage.getItem("CurrentUsername");
        if (currentUsernameafterLogin) {
            this.user = currentUsernameafterLogin;
            this.usernameFlag = true;
        }
        if (this.auth.IsAuthenticated()) {
            this.showHideLogoutButton = true;
        }
        else {
            this.showHideLogoutButton = false;
        }
        // listen to incoming message when new user joining
        this.chat.getjoinRoom().subscribe(function (data) {
            setTimeout(function () {
                _this.getOnlineUsers({ room: _this.room });
            }, 1000);
        });
        // listen to incoming message when user leaving
        this.chat.userLeave().subscribe(function (data) {
            setTimeout(function () {
                _this.getOnlineUsers({ room: _this.room });
            }, 100);
        });
        // listen to incoming message in room
        this.chat.getMessages().subscribe(function (message) {
            _this.allMessages.push(message);
            _this.scrollToBottom();
        });
        // listen to user typing
        this.chat.usertyping().subscribe(function (data) {
            _this.usertypingArray = data.user;
            _this.userTypingflag = true;
            if (_this.userTypingflag) {
                setTimeout(function () {
                    _this.userTypingflag = false;
                }, 2000);
            }
        });
    };
    ChatComponent.prototype.getOnlineUsers = function (room) {
        var _this = this;
        this.auth.getonlineUsers(room).subscribe(function (data) {
            setTimeout(function () {
                _this.onlineUsers = data;
            }, 100);
        });
    };
    ChatComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            try {
                _this.myScrollContainer.nativeElement.scrollTop = _this.myScrollContainer.nativeElement.scrollHeight;
            }
            catch (err) {
                console.log(err);
            }
        }, 100);
    };
    ChatComponent.prototype.deleteMeFromOnlineUsers = function (username) {
        this.auth.deleteFromOnlineUsers(username).subscribe(function (data) { });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        // this.UsernameStatusSub.unsubscribe();
    };
    ChatComponent.prototype.saveUserName = function (form) {
        this.user = form.value.user;
        this.usernameFlag = true;
    };
    // a function that send a message in chat
    ChatComponent.prototype.sendMessage = function (event) {
        if (event.key === "Enter") {
            this.usertypingArray = null;
            var time = this.getCurrentTime();
            this.chat.sendMessage({
                user: this.user,
                room: this.room,
                message: this.messegeContent,
                date: time
            });
            // this.chat.stoptyping({ user: this.user, room: this.room });
            this.messegeContent = null;
            this.scrollToBottom();
        }
    };
    // return the current time
    ChatComponent.prototype.getCurrentTime = function () {
        var date = new Date();
        var time = date.getHours() +
            ":" +
            (date.getMinutes() < 10 ? "0" : "") +
            date.getMinutes();
        return time;
    };
    // user typing
    ChatComponent.prototype.usertyping = function () {
        var _this = this;
        if (!this.flagSenduserTyping) {
            this.chat.typing({ user: this.user, room: this.room });
            setTimeout(function () {
                _this.flagSenduserTyping = true;
            }, 2000);
        }
        else {
            this.chat.typing({ user: this.user, room: this.room });
            this.flagSenduserTyping = false;
        }
    };
    // new user joining to room
    ChatComponent.prototype.join = function () {
        var _this = this;
        this.joinLeaveRoom = false;
        var time = this.getCurrentTime();
        this.chat.joinRoom({ user: this.user, room: this.room, date: time });
        var onlineuser = { username: this.user, room: this.room };
        this.auth.onlineUsers(onlineuser);
        setTimeout(function () {
            _this.getOnlineUsers({ room: _this.room });
        }, 1000);
    };
    // user leaving room
    ChatComponent.prototype.leave = function () {
        var _this = this;
        this.joinLeaveRoom = true;
        var time = this.getCurrentTime();
        this.chat.leaveRoom({ user: this.user, room: this.room, date: time });
        var Meonlineuser = { username: this.user };
        this.deleteMeFromOnlineUsers(Meonlineuser);
        setTimeout(function () {
            _this.onlineUsers = null;
        }, 1000);
        clearInterval(this.interval);
    };
    ChatComponent.prototype.logout = function () {
        this.leave();
        this.auth.logout();
        this.showHideLogoutButton = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ChatComponent.prototype, "unloadHandler", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("scrollMe"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-chat",
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]],
            styles: ["\n      .changeSideinchat {\n        text-align: right;\n      }\n    ", "\n      .hideUsername {\n        visibility: hidden;\n      }\n    ", "\n    .userIsTypingClass {\n      visibility: hidden;\n\n    }", __webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tom Vagish\chatClient\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map