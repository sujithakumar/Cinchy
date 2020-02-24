(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/cinchy.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/cinchy.service.ts ***!
  \********************************************/
/*! exports provided: CinchyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CinchyService", function() { return CinchyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CinchyService {
    constructor(http) {
        this.http = http;
        this.getJSON().subscribe(data => {
            console.log(data);
        });
    }
    getJSON() {
        return this.http.get("./assets/clients.json");
    }
}
CinchyService.ɵfac = function CinchyService_Factory(t) { return new (t || CinchyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CinchyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CinchyService, factory: CinchyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CinchyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/appointment/appointment.component */ "./src/app/components/appointment/appointment.component.ts");







const routes = [
    {
        path: '',
        component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"]
    },
    {
        path: 'review',
        component: _components_review_review_component__WEBPACK_IMPORTED_MODULE_3__["ReviewComponent"]
    },
    {
        path: 'appointment',
        component: _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 0, consts: [["id", "sidebar-wrapper", "role", "navigation", 1, "navbar", "navbar-inverse", "navbar-fixed-top"], [1, "nav", "sidebar-nav"], [1, "sidebar-brand"], ["href", "#"], ["routerLink", "/"], ["routerLink", "/appointment"], ["routerLink", "/review"], ["id", "page-content-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-lg-offset-2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cinchy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Client Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Appointment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Review and Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    overflow-x: hidden;\r\n}\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] { height: 100%;}\r\n.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {background-color: transparent;}\r\n#wrapper[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    -webkit-transition: all 0.5s ease;\r\n    transition: all 0.5s ease;\r\n}\r\n#wrapper.toggled[_ngcontent-%COMP%] {\r\n    padding-left: 220px;\r\n}\r\n#sidebar-wrapper[_ngcontent-%COMP%] {\r\n    z-index: 1000;\r\n    left: 220px;\r\n    width: 0;\r\n    height: 100%;\r\n    margin-left: -220px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    background: #1a1a1a;\r\n    -webkit-transition: all 0.5s ease;\r\n    transition: all 0.5s ease;\r\n}\r\n#sidebar-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n}\r\n#page-content-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-top: 70px;\r\n}\r\n#wrapper.toggled[_ngcontent-%COMP%]   #page-content-wrapper[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-right: -220px;\r\n}\r\n\r\n\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 220px;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative; \r\n    line-height: 20px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 100%;\r\n    width: 3px;\r\n    background-color: #1c1c1c;\r\n    -webkit-transition: width .2s ease-in;\r\n            transition: width .2s ease-in;\r\n\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #1a1a1a;\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):before {\r\n    background-color: #ec1b5a;   \r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):before {\r\n    background-color: #279636;   \r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4):before {\r\n    background-color: #ead24c;   \r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:before, .sidebar-nav[_ngcontent-%COMP%]   li.open[_ngcontent-%COMP%]:hover:before {\r\n    width: 100%;\r\n    -webkit-transition: width .2s ease-in;\r\n            transition: width .2s ease-in;\r\n\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #ddd;\r\n    text-decoration: none;\r\n    padding: 10px 15px 10px 30px;    \r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar-nav[_ngcontent-%COMP%]   li.open[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar-nav[_ngcontent-%COMP%]   li.open[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .sidebar-nav[_ngcontent-%COMP%]   li.open[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%]    > .sidebar-brand[_ngcontent-%COMP%] {\r\n    height: 65px;\r\n    font-size: 40px;\r\n    line-height: 44px;\r\n    background-attachment: fixed;\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    border-radius: 0;\r\n    border: none;\r\n    background-color: #222;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n\r\n.hamburger[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 20px;  \r\n  z-index: 999;\r\n  display: block;\r\n  width: 32px;\r\n  height: 32px;\r\n  margin-left: 15px;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n.hamburger[_ngcontent-%COMP%]:hover, .hamburger[_ngcontent-%COMP%]:focus, .hamburger[_ngcontent-%COMP%]:active {\r\n  outline: none;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  line-height: 32px;\r\n  text-align: center;\r\n  opacity: 0;\r\n  -webkit-transform: translate3d(0,0,0);\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]:hover:before {\r\n  opacity: 1;\r\n  display: block;\r\n  -webkit-transform: translate3d(-100px,0,0);\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]   .hamb-top[_ngcontent-%COMP%], .hamburger.is-closed[_ngcontent-%COMP%]   .hamb-middle[_ngcontent-%COMP%], .hamburger.is-closed[_ngcontent-%COMP%]   .hamb-bottom[_ngcontent-%COMP%], .hamburger.is-open[_ngcontent-%COMP%]   .hamb-top[_ngcontent-%COMP%], .hamburger.is-open[_ngcontent-%COMP%]   .hamb-middle[_ngcontent-%COMP%], .hamburger.is-open[_ngcontent-%COMP%]   .hamb-bottom[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  height: 4px;\r\n  width: 100%;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]   .hamb-top[_ngcontent-%COMP%], .hamburger.is-closed[_ngcontent-%COMP%]   .hamb-middle[_ngcontent-%COMP%], .hamburger.is-closed[_ngcontent-%COMP%]   .hamb-bottom[_ngcontent-%COMP%] {\r\n  background-color: #1a1a1a;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]   .hamb-top[_ngcontent-%COMP%] { \r\n  top: 5px; \r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]   .hamb-middle[_ngcontent-%COMP%] {\r\n  top: 50%;\r\n  margin-top: -2px;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]   .hamb-bottom[_ngcontent-%COMP%] {\r\n  bottom: 5px;  \r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]:hover   .hamb-top[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-closed[_ngcontent-%COMP%]:hover   .hamb-bottom[_ngcontent-%COMP%] {\r\n  bottom: 0;\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-open[_ngcontent-%COMP%]   .hamb-top[_ngcontent-%COMP%], .hamburger.is-open[_ngcontent-%COMP%]   .hamb-middle[_ngcontent-%COMP%], .hamburger.is-open[_ngcontent-%COMP%]   .hamb-bottom[_ngcontent-%COMP%] {\r\n  background-color: #1a1a1a;\r\n}\r\n.hamburger.is-open[_ngcontent-%COMP%]   .hamb-top[_ngcontent-%COMP%], .hamburger.is-open[_ngcontent-%COMP%]   .hamb-bottom[_ngcontent-%COMP%] {\r\n  top: 50%;\r\n  margin-top: -2px;  \r\n}\r\n.hamburger.is-open[_ngcontent-%COMP%]   .hamb-top[_ngcontent-%COMP%] { \r\n  -webkit-transform: rotate(45deg);\r\n  -webkit-transition: -webkit-transform .2s cubic-bezier(.73,1,.28,.08);\r\n}\r\n.hamburger.is-open[_ngcontent-%COMP%]   .hamb-middle[_ngcontent-%COMP%] { display: none; }\r\n.hamburger.is-open[_ngcontent-%COMP%]   .hamb-bottom[_ngcontent-%COMP%] {\r\n  -webkit-transform: rotate(-45deg);\r\n  -webkit-transition: -webkit-transform .2s cubic-bezier(.73,1,.28,.08);\r\n}\r\n.hamburger.is-open[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  line-height: 32px;\r\n  text-align: center;\r\n  opacity: 0;\r\n  -webkit-transform: translate3d(0,0,0);\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-open[_ngcontent-%COMP%]:hover:before {\r\n  opacity: 1;\r\n  display: block;\r\n  -webkit-transform: translate3d(-100px,0,0);\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n\r\n\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(250,250,250,.8);\r\n    z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7T0FDTyxZQUFZLENBQUM7QUFDcEI7O3NCQUVzQiw2QkFBNkIsQ0FBQztBQUVwRDtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFHakMseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBR2pDLHlCQUF5QjtBQUM3QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBRUEsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEM7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFDQUFxQztZQUc3Qiw2QkFBNkI7O0FBRXpDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7O0lBRUksV0FBVztJQUNYLHFDQUFxQztZQUc3Qiw2QkFBNkI7O0FBRXpDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7QUFFQTs7Ozs7O0lBTUksV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUNBOztHQUVHO0FBRUg7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFFQSxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUVsQztFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7OztFQUdFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQ0FBcUM7RUFDckMsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLDBDQUEwQztFQUMxQyx3Q0FBd0M7QUFDMUM7QUFFQTs7Ozs7O0VBTUUsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7OztFQUdFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsTUFBTTtFQUNOLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsU0FBUztFQUNULHdDQUF3QztBQUMxQztBQUNBOzs7RUFHRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMscUVBQXFFO0FBQ3ZFO0FBQ0Esa0NBQWtDLGFBQWEsRUFBRTtBQUNqRDtFQUNFLGlDQUFpQztFQUNqQyxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsd0NBQXdDO0FBQzFDO0FBRUEsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEM7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNDQUFzQztJQUN0QyxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbmJvZHksXHJcbmh0bWwgeyBoZWlnaHQ6IDEwMCU7fVxyXG4ubmF2IC5vcGVuID4gYSwgXHJcbi5uYXYgLm9wZW4gPiBhOmhvdmVyLCBcclxuLm5hdiAub3BlbiA+IGE6Zm9jdXMge2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cclxuXHJcbiN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4jd3JhcHBlci50b2dnbGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjIwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGxlZnQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIyMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG59XHJcblxyXG4jd3JhcHBlci50b2dnbGVkICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMjBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogICAgIFNpZGViYXIgbmF2IHN0eWxlcyAgICAgICAgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLW5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnNpZGViYXItbmF2IGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZWJhci1uYXYgbGk6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlLWluO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246ICB3aWR0aCAuMnMgZWFzZS1pbjtcclxuICAgICAgIC1tcy10cmFuc2l0aW9uOiAgd2lkdGggLjJzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlLWluO1xyXG5cclxufVxyXG4uc2lkZWJhci1uYXYgbGk6Zmlyc3QtY2hpbGQgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLnNpZGViYXItbmF2IGxpOm50aC1jaGlsZCgyKTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjMWI1YTsgICBcclxufVxyXG4uc2lkZWJhci1uYXYgbGk6bnRoLWNoaWxkKDMpOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NjM2OyAgIFxyXG59XHJcbi5zaWRlYmFyLW5hdiBsaTpudGgtY2hpbGQoNCk6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWQyNGM7ICAgXHJcbn1cclxuXHJcbi5zaWRlYmFyLW5hdiBsaTpob3ZlcjpiZWZvcmUsXHJcbi5zaWRlYmFyLW5hdiBsaS5vcGVuOmhvdmVyOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2UtaW47XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogIHdpZHRoIC4ycyBlYXNlLWluO1xyXG4gICAgICAgLW1zLXRyYW5zaXRpb246ICB3aWR0aCAuMnMgZWFzZS1pbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2UtaW47XHJcblxyXG59XHJcblxyXG4uc2lkZWJhci1uYXYgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMzBweDsgICAgXHJcbn1cclxuXHJcbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyLFxyXG4uc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsXHJcbi5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzLFxyXG4uc2lkZWJhci1uYXYgbGkub3BlbiBhOmhvdmVyLFxyXG4uc2lkZWJhci1uYXYgbGkub3BlbiBhOmFjdGl2ZSxcclxuLnNpZGViYXItbmF2IGxpLm9wZW4gYTpmb2N1c3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi8qIC5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDEsIDEpICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbi5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4uc2lkZWJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAgICAgICBIYW1idXJnZXItQ3Jvc3MgICAgICAgICAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmhhbWJ1cmdlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMjBweDsgIFxyXG4gIHotaW5kZXg6IDk5OTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5oYW1idXJnZXI6aG92ZXIsXHJcbi5oYW1idXJnZXI6Zm9jdXMsXHJcbi5oYW1idXJnZXI6YWN0aXZlIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5oYW1idXJnZXIuaXMtY2xvc2VkOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmhhbWJ1cmdlci5pcy1jbG9zZWQ6aG92ZXI6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsMCwwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi10b3AsXHJcbi5oYW1idXJnZXIuaXMtY2xvc2VkIC5oYW1iLW1pZGRsZSxcclxuLmhhbWJ1cmdlci5pcy1jbG9zZWQgLmhhbWItYm90dG9tLFxyXG4uaGFtYnVyZ2VyLmlzLW9wZW4gLmhhbWItdG9wLFxyXG4uaGFtYnVyZ2VyLmlzLW9wZW4gLmhhbWItbWlkZGxlLFxyXG4uaGFtYnVyZ2VyLmlzLW9wZW4gLmhhbWItYm90dG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi10b3AsXHJcbi5oYW1idXJnZXIuaXMtY2xvc2VkIC5oYW1iLW1pZGRsZSxcclxuLmhhbWJ1cmdlci5pcy1jbG9zZWQgLmhhbWItYm90dG9tIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xyXG59XHJcbi5oYW1idXJnZXIuaXMtY2xvc2VkIC5oYW1iLXRvcCB7IFxyXG4gIHRvcDogNXB4OyBcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5oYW1idXJnZXIuaXMtY2xvc2VkIC5oYW1iLW1pZGRsZSB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi1ib3R0b20ge1xyXG4gIGJvdHRvbTogNXB4OyAgXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhhbWJ1cmdlci5pcy1jbG9zZWQ6aG92ZXIgLmhhbWItdG9wIHtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcclxufVxyXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZDpob3ZlciAuaGFtYi1ib3R0b20ge1xyXG4gIGJvdHRvbTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5oYW1idXJnZXIuaXMtb3BlbiAuaGFtYi10b3AsXHJcbi5oYW1idXJnZXIuaXMtb3BlbiAuaGFtYi1taWRkbGUsXHJcbi5oYW1idXJnZXIuaXMtb3BlbiAuaGFtYi1ib3R0b20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLmhhbWJ1cmdlci5pcy1vcGVuIC5oYW1iLXRvcCxcclxuLmhhbWJ1cmdlci5pcy1vcGVuIC5oYW1iLWJvdHRvbSB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTJweDsgIFxyXG59XHJcbi5oYW1idXJnZXIuaXMtb3BlbiAuaGFtYi10b3AgeyBcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoLjczLDEsLjI4LC4wOCk7XHJcbn1cclxuLmhhbWJ1cmdlci5pcy1vcGVuIC5oYW1iLW1pZGRsZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuLmhhbWJ1cmdlci5pcy1vcGVuIC5oYW1iLWJvdHRvbSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllciguNzMsMSwuMjgsLjA4KTtcclxufVxyXG4uaGFtYnVyZ2VyLmlzLW9wZW46YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcclxufVxyXG4uaGFtYnVyZ2VyLmlzLW9wZW46aG92ZXI6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsMCwwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAgICAgICAgICAgIE92ZXJsYXkgICAgICAgICAgICAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsMjUwLDI1MCwuOCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/sidebar.directive.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/appointment/appointment.component */ "./src/app/components/appointment/appointment.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"],
        _components_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
        _components_review_review_component__WEBPACK_IMPORTED_MODULE_8__["ReviewComponent"],
        _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_9__["AppointmentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"],
                    _components_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                    _components_review_review_component__WEBPACK_IMPORTED_MODULE_8__["ReviewComponent"],
                    _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_9__["AppointmentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/appointment/appointment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppointmentComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppointmentComponent.ɵfac = function AppointmentComponent_Factory(t) { return new (t || AppointmentComponent)(); };
AppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentComponent, selectors: [["app-appointment"]], decls: 2, vars: 0, template: function AppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "appointment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment',
                templateUrl: './appointment.component.html',
                styleUrls: ['./appointment.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/client/client.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/client/client.component.ts ***!
  \*******************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_cinchy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/cinchy.service */ "./src/app/Services/cinchy.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ClientComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "client is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientComponent_div_20_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.client.errors.required);
} }
function ClientComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hobby is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientComponent_div_64_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.hobby.errors.required);
} }
function ClientComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientComponent_div_71_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.datefield.errors.required);
} }
function ClientComponent_div_98_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientComponent_div_98_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ClientComponent {
    constructor(formBuilder, cinchyService) {
        this.formBuilder = formBuilder;
        this.cinchyService = cinchyService;
        this.submitted = false;
    }
    ngOnInit() {
        this.cinchyService.getJSON().subscribe(data => {
            console.log(data);
        });
        this.clientForm = this.formBuilder.group({
            client: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: [''],
            lastName: [''],
            bday: [''],
            email: [''],
            CompanyName: [''],
            position: [''],
            annualSalary: [''],
            desc: [''],
            favColor: [''],
            hobby: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            datefield: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get f() {
        return this.clientForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        //return on errors
        if (this.clientForm.invalid) {
            return;
        }
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_cinchy_service__WEBPACK_IMPORTED_MODULE_2__["CinchyService"])); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 102, vars: 20, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group", "col-md-12"], [1, "req"], ["formControlName", "client", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Mr"], ["value", "Mrs"], ["value", "Miss"], ["value", "Ms"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "col-md-6"], ["type", "text", "formControlName", "firstName", 1, "form-control"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["type", "date", "formControlName", "bday", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "CompanyName", 1, "form-control"], ["type", "text", "formControlName", "position", 1, "form-control"], [1, "form-group", "col-md-4"], ["type", "text", "formControlName", "annualSalary", 1, "form-control"], [1, "form-group", "col-md-8"], ["type", "text", "formControlName", "desc", 1, "form-control"], ["type", "text", "formControlName", "hobby", "placeholder", "ex:Reading,singing,dancing..", 1, "form-control", 3, "ngClass"], ["type", "date", "formControlName", "datefield", 1, "form-control", 3, "ngClass"], ["formControlName", "favColor", 1, "form-control", 3, "ngClass"], ["value", "Red"], ["value", "Blue"], ["value", "Green"], ["value", "Yellow"], ["value", "Pink"], ["value", "Orange"], ["value", "Purple"], ["type", "tel", "formControlName", "phone", "maxlength", "10", 1, "form-control", 3, "ngClass"], [1, "form-group"], [1, "btn", "btn-primary"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientComponent_Template_form_ngSubmit_3_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Miss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClientComponent_div_20_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Annual Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Hobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ClientComponent_div_64_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ClientComponent_div_71_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Favourite Colour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Yellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Pink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Orange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ClientComponent_div_98_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.clientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.client.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.client.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.hobby.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.hobby.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.datefield.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.datefield.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.favColor.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _Services_cinchy_service__WEBPACK_IMPORTED_MODULE_2__["CinchyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/review/review.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/review/review.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReviewComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(); };
ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], decls: 2, vars: 0, template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "review works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review',
                templateUrl: './review.component.html',
                styleUrls: ['./review.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sidebar.directive.ts":
/*!**************************************!*\
  !*** ./src/app/sidebar.directive.ts ***!
  \**************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SidebarDirective {
    constructor() {
        this.click = true;
    }
    onClic() {
        this.click = !this.click;
    }
}
SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(); };
SidebarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostVars: 2, hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarDirective_click_HostBindingHandler($event) { return ctx.onClic(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.click);
    } }, exportAs: ["appSidebar"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSidebar]',
                exportAs: 'appSidebar'
            }]
    }], function () { return []; }, { click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-open']
        }], onClic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Cinchy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map