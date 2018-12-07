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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web-maker-assign';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteEditComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteListComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_14__["PageNewComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__["PageEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_16__["PageListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_17__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_18__["WidgetEditComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_19__["WidgetListComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_20__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_21__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_22__["WidgetYoutubeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");













var APP_ROUTES = [
    { path: "", component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: "login", component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: "register", component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: "user/:uid", component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: "user/:uid/website", component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"] },
    //{ path: "user/:uid/website", component: WebsiteListComponent },
    { path: "user/:uid/website/new", component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteNewComponent"] },
    { path: "user/:uid/website/:wid", component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteEditComponent"] },
    { path: "user/:uid/website/:wid/page", component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_6__["PageListComponent"] },
    { path: "user/:uid/website/:wid/page/new", component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_5__["PageNewComponent"] },
    { path: "user/:uid/website/:wid/page/:pid", component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_4__["PageEditComponent"] },
    {
        path: "user/:uid/website/:wid/page/:pid/widget",
        component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_11__["WidgetListComponent"]
    },
    {
        path: "user/:uid/website/:wid/page/:pid/widget/new",
        component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_10__["WidgetChooserComponent"]
    },
    {
        path: "user/:uid/website/:wid/page/:pid/widget/:wgid",
        component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__["WidgetEditComponent"]
    }
];
//Export the routes as module providers
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-light fixed-top bg-dark\">\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n  <div class=\"sw-90-width\">\n    <a\n      class=\"navbar-brand float-left\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"\n    >\n      <b class=\"color-white\">Edit page</b>\n    </a>\n  </div>\n  <button\n    type=\"submit\"\n    form=\"myUpForm\"\n    class=\"color-white float-right btn bg-transparent\"\n    [disabled]=\"myUpForm.invalid\"\n  >\n    <i class=\"fas fa-check\"></i>\n  </button>\n  <!--\n      <a class=\"color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}page\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  -->\n</nav>\n<!-- Pages List -->\n<br /><br />\n<div class=\"container-fluid\">\n  <form\n    class=\"form-style\"\n    id=\"myUpForm\"\n    (ngSubmit)=\"update()\"\n    #myUpForm=\"ngForm\"\n  >\n    <div *ngIf=\"error_form\" class=\"alert alert-danger\">\n      Name and Title are required!!\n    </div>\n    <!-- Name -->\n    <div class=\"form-group\">\n      <label for=\"name\"><b>Name</b></label>\n      <input\n        type=\"text\"\n        name=\"name\"\n        class=\"form-control\"\n        placeholder=\"Name of the page...\"\n        [(ngModel)]=\"page.name\"\n        required\n      />\n    </div>\n    <!-- Title -->\n    <div class=\"form-group\">\n      <label for=\"title\"><b>Title</b></label>\n      <input\n        type=\"text\"\n        name=\"title\"\n        class=\"form-control\"\n        placeholder=\"Page title\"\n        [(ngModel)]=\"page.title\"\n        required\n      />\n    </div>\n    <div>\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"delete()\">\n        Delete\n      </button>\n      <!--\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"btn btn-danger btn-block\">Delete</a>\n      -->\n      <a\n        routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n        class=\"btn btn-warning btn-block\"\n        >Cancel</a\n      >\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-light fixed-bottom bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\"\n      ><i class=\"fas fa-user\"></i\n    ></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageservice, router, activatedroute) {
        this.pageservice = pageservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.page = { name: "", title: "", websiteId: "" };
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            (_this.uid = params["uid"]),
                (_this.wid = params["wid"]),
                (_this.pid = params["pid"]),
                _this,
                _this.pageservice.findPageById(_this.pid).subscribe(function (page) {
                    _this.page = page;
                });
        });
    };
    //Update a page
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.pageservice.updatePage(this.page).subscribe(function (up) {
            _this.router.navigate([
                "user/" + _this.uid + "/website/" + _this.wid + "/page"
            ]);
        }, function (error) {
            _this.error_form = true;
        });
    };
    //Delete a page
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        this.pageservice.deletePage(this.pid).subscribe(function (del) {
            _this.router.navigate([
                "user/" + _this.uid + "/website/" + _this.wid + "/page"
            ]);
        });
    };
    PageEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-page-edit",
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_1__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-light fixed-top bg-dark\">\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website\">\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n  <div class=\"sw-90-width\">\n    <a\n      class=\"navbar-brand float-left\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n    >\n      <b class=\"color-white\">Pages</b>\n    </a>\n  </div>\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\">\n    <i class=\"fas fa-plus\"></i>\n  </a>\n</nav>\n<!-- Pages List -->\n<br /><br />\n<div class=\"container div-backgound\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{\n        page.name\n      }}</a>\n      <a\n        routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\"\n        class=\"float-right\"\n        title=\"Edit\"\n      >\n        <i class=\"fas fa-cog\"></i>\n      </a>\n    </li>\n  </ul>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-light fixed-bottom bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\"\n      ><i class=\"fas fa-user\"></i\n    ></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageservice, activatedroute, router) {
        this.pageservice = pageservice;
        this.activatedroute = activatedroute;
        this.router = router;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            (_this.uid = params["uid"]),
                (_this.wid = params["wid"]),
                _this.pageservice
                    .findPagesByWebsiteId(_this.wid)
                    .subscribe(function (pages) {
                    _this.pages = pages;
                    console.log(_this.pages);
                });
        });
    };
    PageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-page-list",
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_1__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-light fixed-top bg-dark\">\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n  <div class=\"sw-90-width\">\n    <a\n      class=\"navbar-brand float-left\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n    >\n      <b class=\"color-white\">New page</b>\n    </a>\n  </div>\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">\n    <i class=\"fas fa-check\"></i>\n  </a>\n</nav>\n<!-- Pages List -->\n<br /><br />\n<div class=\"container-fluid\">\n  <form\n    class=\"form-style\"\n    id=\"myAddForm\"\n    (ngSubmit)=\"add()\"\n    #myAddForm=\"ngForm\"\n  >\n    <div *ngIf=\"error_form\" class=\"alert alert-danger\">\n      Name and Title are required!!\n    </div>\n    <!-- Name -->\n    <div class=\"form-group\">\n      <label for=\"name\"><b>Name</b></label>\n      <input\n        type=\"text\"\n        name=\"name\"\n        class=\"form-control\"\n        placeholder=\"Name\"\n        [(ngModel)]=\"page.name\"\n        required\n      />\n    </div>\n    <!-- Title -->\n    <div class=\"form-group\">\n      <label for=\"title\"><b>Title</b></label>\n      <input\n        type=\"text\"\n        name=\"title\"\n        class=\"form-control\"\n        placeholder=\"Page title\"\n        [(ngModel)]=\"page.title\"\n        required\n      />\n    </div>\n\n    <div>\n      <button\n        type=\"submit\"\n        class=\"btn btn-primary btn-block\"\n        form=\"myAddForm\"\n        [disabled]=\"myAddForm.invalid\"\n      >\n        Submit\n      </button>\n      <!--\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"btn btn-primary btn-block\">Submit</a>\n      -->\n      <a\n        routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n        class=\"btn btn-danger btn-block \"\n        >Cancel</a\n      >\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-light fixed-bottom bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\"\n      ><i class=\"fas fa-user\"></i\n    ></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageservice, router, activatedroute) {
        this.pageservice = pageservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.page = { name: "", title: "", websiteId: "" };
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            (_this.uid = params["uid"]), (_this.wid = params["wid"]);
        });
    };
    PageNewComponent.prototype.add = function () {
        var _this = this;
        this.page.websiteId = this.wid;
        this.pageservice.createPage(this.page).subscribe(function (create) {
            _this.router.navigate(["user", _this.uid, "website", _this.wid, "page"]);
        }, function (error) { return (_this.error_form = true); });
    };
    PageNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-page-new",
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_1__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-style\" (ngSubmit)=\"login()\" #myLoginForm=\"ngForm\">\n    <h3 class=\"form-style-heading\">Login</h3>\n    <hr />\n    <br />\n    <div *ngIf=\"error_flag\" class=\"alert alert-danger\">Invalid User!!</div>\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        #userInput=\"ngModel\"\n        required\n        id=\"username\"\n        name=\"username\"\n        class=\"form-control\"\n        placeholder=\"username\"\n        [(ngModel)]=\"username\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        #pwdInput=\"ngModel\"\n        required\n        id=\"password\"\n        name=\"password\"\n        class=\"form-control\"\n        placeholder=\"password\"\n        [(ngModel)]=\"password\"\n      />\n    </div>\n\n    <div\n      *ngIf=\"userInput.invalid && userInput.submited\"\n      class=\"alert alert-danger\"\n    >\n      Username is required!!\n    </div>\n    <div\n      *ngIf=\"pwdInput.invalid && pwdInput.touched\"\n      class=\"alert alert-danger\"\n    >\n      Password is required!!\n    </div>\n    <div>\n      <button\n        class=\"btn btn-primary btn-block\"\n        type=\"submit\"\n        [disabled]=\"myLoginForm.invalid\"\n      >\n        Login\n      </button>\n      <!--\n        <a routerLink=\"/user/:uid\" class=\"btn btn-primary btn-block\">Login</a>\n      -->\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userservice, router) {
        this.userservice = userservice;
        this.router = router;
        this.error_flag = false;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.error_flag = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userservice
            .findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (!user) {
                _this.error_flag = true;
            }
            else {
                _this.error_flag = false;
                _this.router.navigate(["/user/" + user._id]);
            }
        }, function (error) {
            _this.error_flag = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/user/{{uid}}\"><b>Profile</b></a>\n  <!--\n    <a class=\"color-white\" routerLink=\"user/:uid\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  -->\n  <button\n    type=\"submit\"\n    class=\"btn bg-transparent color-white\"\n    form=\"myProfilFom\"\n    [disabled]=\"myProfilFom.invalid\"\n  >\n    <i class=\"fas fa-check\"></i>\n  </button>\n</nav>\n<!-- Form profile -->\n<div class=\"container\">\n  <form\n    class=\"form-style\"\n    (ngSubmit)=\"update()\"\n    id=\"myProfilFom\"\n    #myProfilFom=\"ngForm\"\n  >\n    <div *ngIf=\"userError\" class=\"alert alert-danger\">\n      This username is taken, please try another one.\n    </div>\n    <div *ngIf=\"successFlag\" class=\"alert alert-success\">\n      Update Successfully\n    </div>\n    <fieldset>\n      <legend class=\"text-center\">Profile</legend>\n      <!-- Username -->\n      <div class=\"form-group\">\n        <label for=\"userName\"><b>Username</b></label>\n        <input\n          type=\"text\"\n          #userInput=\"ngModel\"\n          required\n          id=\"username\"\n          name=\"username\"\n          class=\"form-control\"\n          placeholder=\"jannuzi\"\n          [(ngModel)]=\"user.username\"\n        />\n      </div>\n      <div\n        *ngIf=\"userInput.invalid && userInput.touched\"\n        class=\"alert alert-danger\"\n      >\n        Username can't be empty\n      </div>\n      <!-- Email -->\n      <div class=\"form-group\">\n        <label for=\"email\"><b>Email</b></label>\n        <input\n          type=\"email\"\n          name=\"email\"\n          #emailInput=\"ngModel\"\n          class=\"form-control\"\n          placeholder=\"jannizi@gmail.com\"\n          [(ngModel)]=\"user.email\"\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n        />\n      </div>\n      <div\n        *ngIf=\"emailInput.invalid && emailInput.touched\"\n        class=\"alert alert-danger\"\n      >\n        Invalid Email\n      </div>\n      <!-- First name -->\n      <div class=\"form-group\">\n        <label for=\"firstName\"><b>First name</b></label>\n        <input\n          type=\"text\"\n          id=\"firstName\"\n          name=\"firstName\"\n          class=\"form-control\"\n          placeholder=\"Jose\"\n          [(ngModel)]=\"user.firstName\"\n        />\n      </div>\n      <!-- Last name -->\n      <div class=\"form-group\">\n        <label for=\"lastName\"><b>Last name</b></label>\n        <input\n          type=\"text\"\n          id=\"lastName\"\n          name=\"lastName\"\n          class=\"form-control\"\n          placeholder=\"Annuziato\"\n          [(ngModel)]=\"user.lastName\"\n        />\n      </div>\n      <div>\n        <a routerLink=\"/user/{{uid}}/website\" class=\"btn btn-primary btn-block \"\n          >Websites</a\n        >\n        <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Logout</a>\n      </div>\n    </fieldset>\n  </form>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-dark bg-dark fixed-bottom\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\">\n      <i class=\"fas fa-user\"></i>\n    </a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userservice, activerouter) {
        this.router = router;
        this.userservice = userservice;
        this.activerouter = activerouter;
        this.user = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        };
    }
    //Initilize the form
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activerouter.params.subscribe(function (params) {
            (_this.uid = params["uid"]), console.log(_this.uid);
            _this.userservice.findUserById(_this.uid).subscribe(function (user) {
                (_this.user = user), (_this.oldUsername = _this.user._id);
            });
        });
        //this.userservice.findUserById()
    };
    //Update the user
    ProfileComponent.prototype.update = function () {
        var _this = this;
        if (this.user._id == this.oldUsername) {
            this.userservice.updateUser(this.user).subscribe(function (user) {
                _this.userError = false;
                _this.successFlag = true;
            });
        }
        else {
            this.userservice.findUserById(this.user._id).subscribe(function (user) {
                _this.userError = true;
                _this.successFlag = false;
            }, function (error) {
                _this.userservice.updateUser(_this.user).subscribe(function (user) {
                    _this.userError = false;
                    _this.successFlag = true;
                });
            });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Form register -->\n<div class=\"container\">\n  <form\n    [formGroup]=\"register_Form\"\n    class=\"form-style\"\n    (ngSubmit)=\"register()\"\n    #myRegForm=\"ngForm\"\n  >\n    <div *ngIf=\"user_error\" class=\"alert alert-danger\">\n      This username exist!!\n    </div>\n    <div *ngIf=\"pwd_error\" class=\"alert alert-danger\">\n      The verify password is different d'un password!!\n    </div>\n    <fieldset>\n      <legend class=\"text-center\">Register</legend>\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"username\"\n          formControlName=\"username\"\n        />\n      </div>\n      <!--\n        <div *ngIf=\"submitted && f.username.errors.required\" class=\"alert alert-danger\">Username is required!!</div>\n      -->\n\n      <div *ngIf=\"submitted && !f.username.valid\" class=\"alert alert-danger\">\n        Username is required\n      </div>\n\n      <div class=\"form-group\">\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          placeholder=\"password\"\n          formControlName=\"password\"\n        />\n      </div>\n      <div *ngIf=\"submitted && !f.password.valid\" class=\"alert alert-danger\">\n        Password is required\n      </div>\n      <div class=\"form-group\">\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          placeholder=\"verify password\"\n          formControlName=\"verifPassword\"\n        />\n      </div>\n      <div\n        *ngIf=\"submitted && !f.verifPassword.valid\"\n        class=\"alert alert-danger\"\n      >\n        verify password is required\n      </div>\n      <div>\n        <!--\n          <a routerLink=\"/user/:uid\" href=\"profile.html\" class=\"btn btn-primary btn-block \">Register</a>\n        -->\n        <button\n          class=\"btn btn-primary btn-block\"\n          type=\"submit\"\n          [disabled]=\"myRegForm.invalid\"\n        >\n          Register\n        </button>\n        <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Cancel</a>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userservice, router, formBuilder) {
        this.userservice = userservice;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.register_Form = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            verifPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () {
            return this.register_Form.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.submitted = true;
        //console.log(this.register_Form.value);
        if (this.register_Form.invalid) {
            return;
        }
        var username = this.register_Form.value["username"];
        var password = this.register_Form.value["password"];
        var verifPassword = this.register_Form.value["verifPassword"];
        if (password === verifPassword) {
            //const user: User = this.userservice.findUserByUsername(username);
            this.userservice.findUserByUsername(username).subscribe(function (user) {
                if (!user) {
                    var newUser = {
                        username: username,
                        password: password,
                        verifPassword: verifPassword
                    };
                    _this.user_error = false;
                    _this.userservice.createUser(newUser).subscribe(function (user) {
                        _this.router.navigate(["user", user._id]);
                    });
                }
                else {
                    _this.user_error = true;
                    _this.pwd_error = false;
                }
            });
        }
        else {
            this.pwd_error = true;
            this.user_error = false;
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-dark bg-dark fixed-top row nav-height\">\n  <!-- Left Nav -->\n  <div class=\"col-4 d-none d-sm-block\">\n    <a class=\"color-white\" routerLink=\"/user/{{uid}}/website\">\n      <i class=\"fas fa-chevron-left\"></i>\n    </a>\n    <a\n      class=\"color-white padding-left\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}\"\n    >\n      <h5 class=\"display-inline a-color\">Websites</h5>\n    </a>\n    <a routerLink=\"/user/{{uid}}/website/new\" class=\"color-white float-right\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n  <!-- Right Nav -->\n  <div class=\"col-sm-8\">\n    <a routerLink=\"/user/{{uid}}/website\" class=\"color-white d-sm-none\">\n      <i class=\"fas fa-chevron-left\"></i>\n    </a>\n    <a\n      class=\"color-white padding-left\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}\"\n    >\n      <h5 class=\"display-inline a-color\">Edit Website</h5>\n    </a>\n    <button\n      [disabled]=\"myUpForm.invalid\"\n      type=\"submit\"\n      class=\"color-white float-right btn bg-transparent\"\n      form=\"myUpForm\"\n    >\n      <i class=\"fas fa-check\"></i>\n    </button>\n    <!--\n      <a routerLink=\"/user/:uid/website\" class=\"color-white float-right\">\n        <i class=\"fas fa-check\"></i>\n      </a>\n    -->\n  </div>\n</nav>\n<!-- list and form -->\n<div class=\"row container-fluid\">\n  <!-- Left list -->\n  <div class=\"col-4 d-none d-sm-block\">\n    <div class=\"container div-backgound\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n          <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">\n            {{ website.name }}\n          </a>\n          <a\n            routerLink=\"/user/{{uid}}/website/{{website._id}}\"\n            class=\"float-right\"\n            title=\"Edit\"\n          >\n            <i class=\"fas fa-cog\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- Right form -->\n  <div class=\"col-sm-8\">\n    <div class=\"container-fluid div-backgound\">\n      <form (ngSubmit)=\"updateWebsite()\" id=\"myUpForm\" #myUpForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\"><b>Name</b></label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            name=\"name\"\n            class=\"form-control\"\n            placeholder=\"Name\"\n            [(ngModel)]=\"website.name\"\n            #nameInput=\"ngModel\"\n          />\n        </div>\n        <div\n          *ngIf=\"nameInput.invalid && nameInput.touched\"\n          class=\"alert alert-danger\"\n        >\n          Name is required\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\"><b>Description</b></label>\n          <textarea\n            type=\"text\"\n            class=\"form-control\"\n            id=\"description\"\n            name=\"description\"\n            rows=\"5\"\n            placeholder=\"Describe you website\"\n            [(ngModel)]=\"website.description\"\n            #descInput=\"ngModel\"\n          ></textarea>\n        </div>\n        <div\n          *ngIf=\"descInput.invalid && descInput.touched\"\n          class=\"alert alert-danger\"\n        >\n          Name is required\n        </div>\n        <div class=\"float-right\">\n          <button\n            type=\"button\"\n            class=\"btn btn-danger\"\n            (click)=\"deleteWebsite()\"\n          >\n            Delete\n          </button>\n          <!--\n            <a routerLink=\"/user/{{uid}}/website\" class=\"btn btn-danger\">Delete</a>\n          -->\n          <a routerLink=\"/user/{{uid}}/website\" class=\"btn btn-warning\"\n            >Cancel</a\n          >\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <footer class=\"navbar navbar-dark bg-dark fixed-bottom\">\n    <!-- Navbar content -->\n    <div class=\"full-width\">\n      <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\"\n        ><i class=\"fas fa-user\"></i\n      ></a>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteservice, router, activatedroute) {
        this.websiteservice = websiteservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.website = {
            name: "",
            description: "",
            developerId: ""
        };
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.wid = params["wid"];
            _this.websiteservice
                .findWebsitesByUser(_this.uid)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
            _this.websiteservice
                .findWebsiteById(_this.wid)
                .subscribe(function (website) {
                _this.website = website;
                console.log(_this.websites);
            });
        });
    };
    //Update a website
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        console.log(this.website);
        this.websiteservice
            .updateWebsite(this.website)
            .subscribe(function (website) {
            // console.log("dfgdfgdfgdfg");
            _this.router.navigate(["/user/" + _this.uid + "/website"]);
        });
    };
    //Delete a website
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteservice
            .deleteWebsite(this.wid)
            .subscribe(function (websites) {
            _this.router.navigate(["user", _this.uid, "website"]);
        });
    };
    WebsiteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-website-edit",
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar fixed-top navbar-dark bg-dark\">\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}\">\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n  <div class=\"sw-90-width\">\n    <a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website\">\n      <b>Websites</b>\n    </a>\n  </div>\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website/new\">\n    <i class=\"fas fa-plus\"></i>\n  </a>\n</nav>\n<br /><br />\n<!-- Website List -->\n<div class=\"container div-backgound\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n      <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">\n        {{ website.name }}\n      </a>\n      <a\n        routerLink=\"/user/{{uid}}/website/{{website._id}}\"\n        class=\"float-right\"\n        title=\"Edit\"\n      >\n        <i class=\"fas fa-cog\"></i>\n      </a>\n    </li>\n  </ul>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-dark bg-dark fixed-bottom\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\">\n      <i class=\"fas fa-user\"></i>\n    </a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteservice, activatedroute) {
        this.websiteservice = websiteservice;
        this.activatedroute = activatedroute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            (_this.uid = params["uid"]),
                _this.websiteservice
                    .findWebsitesByUser(_this.uid)
                    .subscribe(function (websites) {
                    _this.websites = websites;
                });
        });
    };
    WebsiteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-website-list",
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-dark bg-dark fixed-top row nav-height\">\n  <!-- Left Nav -->\n  <div class=\"col-4 d-none d-sm-block\">\n    <a class=\"color-white\" routerLink=\"/user/{{uid}}/website\">\n      <i class=\"fas fa-chevron-left\"></i>\n    </a>\n\n    <a class=\"color-white padding-left\" routerLink=\"/user/{{uid}}/website/new\">\n      <h5 class=\"display-inline a-color\">Websites</h5>\n    </a>\n\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}/website/new\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n  <!-- Right Nav -->\n  <div class=\"col-sm-8\">\n    <a class=\"color-white d-sm-none\" routerLink=\"/user/{{uid}}/website\">\n      <i class=\"fas fa-chevron-left\"></i>\n    </a>\n    <a class=\"color-white padding-left\" routerLink=\"/user/{{uid}}/website/new\">\n      <h5 class=\"display-inline a-color\">New Website</h5>\n    </a>\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}/website\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n<!-- list and form -->\n<div class=\"row container-fluid\">\n  <!-- Left list -->\n  <div class=\"col-4 d-none d-sm-block\">\n    <div class=\"container div-backgound\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n          <a routerLink=\"/user/{{uid}}/website/{{website.id}}/page\">\n            {{ website.name }}\n          </a>\n          <a\n            class=\"float-right\"\n            routerLink=\"/user/{{uid}}/website/{{website.id}}\"\n            ><i class=\"fas fa-cog\"></i\n          ></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- Right form -->\n  <div class=\"col-sm-8\">\n    <div class=\"container-fluid div-backgound\">\n      <form\n        (ngSubmit)=\"createWebsite()\"\n        id=\"myCreateForm\"\n        #myCreateForm=\"ngForm\"\n      >\n        <div class=\"form-group\">\n          <label for=\"name\"><b>Name</b></label>\n          <input\n            type=\"text\"\n            #nameInput=\"ngModel\"\n            required\n            name=\"name\"\n            class=\"form-control\"\n            placeholder=\"Name\"\n            [(ngModel)]=\"name\"\n          />\n        </div>\n        <div\n          *ngIf=\"nameInput.invalid && nameInput.touched\"\n          class=\"alert alert-danger\"\n        >\n          Name is required\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\"><b>Description</b></label>\n          <textarea\n            type=\"text\"\n            #descInput=\"ngModel\"\n            required\n            class=\"form-control\"\n            name=\"description\"\n            rows=\"5\"\n            placeholder=\"Describe you website\"\n            [(ngModel)]=\"description\"\n          ></textarea>\n        </div>\n        <div\n          *ngIf=\"descInput.invalid && descInput.touched\"\n          class=\"alert alert-danger\"\n        >\n          Description is required\n        </div>\n        <div class=\"float-right\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-success float-left\"\n            form=\"myCreateForm\"\n            [disabled]=\"myCreateForm.invalid\"\n          >\n            Submit\n          </button>\n          <a\n            routerLink=\"/user/{{uid}}/website\"\n            class=\"btn btn-warning center-block\"\n            >Cancel</a\n          >\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-dark bg-dark fixed-bottom\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\">\n      <i class=\"fas fa-user\"></i>\n    </a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteservice, activatedroute, router) {
        this.websiteservice = websiteservice;
        this.activatedroute = activatedroute;
        this.router = router;
        this.submitted = false;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            (_this.uid = params["uid"]),
                (_this.submitted = false),
                _this.websiteservice
                    .findWebsitesByUser(params["uid"])
                    .subscribe(function (websites) {
                    _this.websites = websites;
                });
        });
    };
    //Create user
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        var new_website = {
            name: this.name,
            description: this.description,
            developerId: this.uid
        };
        this.websiteservice
            .createWebsite(new_website)
            .subscribe(function (website) {
            _this.router.navigate(["/user/" + _this.uid + "/website"]);
        });
    };
    WebsiteNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-website-new",
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar-light fixed-top bg-dark\">\n  <a\n    class=\"color-white\"\n    routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n  >\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n  <a class=\"navbar-brand padding-left\" href=\"#\">\n    <b class=\"color-white\">Choose Widget</b>\n  </a>\n</nav>\n<!-- List -->\n<div class=\"container\">\n  <ul class=\"list-group-flush\">\n    <li class=\"list-group-item\">\n      <span (click)=\"create('HEADING')\" class=\"pointer\">Heading</span>\n    </li>\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n        >Label</a\n      >\n    </li>\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n        >Text Input</a\n      >\n    </li>\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n        >Link</a\n      >\n    </li>\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n        >Button</a\n      >\n    </li>\n    <li class=\"list-group-item\">\n      <span (click)=\"create('IMAGE')\" class=\"pointer\">Image</span>\n    </li>\n    <li class=\"list-group-item\">\n      <span (click)=\"create('YOUTUBE')\" class=\"pointer\">Youtube</span>\n    </li>\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n        >Data Table</a\n      >\n    </li>\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n        >Repeater</a\n      >\n    </li>\n  </ul>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-light fixed-bottom bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\"\n      ><i class=\"fas fa-user\"></i\n    ></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetservice, router, activatedroute) {
        this.widgetservice = widgetservice;
        this.router = router;
        this.activatedroute = activatedroute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            (_this.uid = params["uid"]),
                (_this.wid = params["wid"]),
                (_this.pid = params["pid"]);
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var _this = this;
        var widget = {
            widgetType: type,
            pageId: this.pid
        };
        //console.log(type);
        this.widgetservice.createWidget(widget).subscribe(function (widget) {
            _this.router.navigate([
                "user/" +
                    _this.uid +
                    "/website/" +
                    _this.wid +
                    "/page/" +
                    _this.pid +
                    "/widget/" +
                    widget._id
            ]);
        });
    };
    WidgetChooserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-widget-chooser",
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\"><app-widget-header></app-widget-header></div>\n  <div *ngSwitchCase=\"'IMAGE'\"><app-widget-image></app-widget-image></div>\n  <div *ngSwitchCase=\"'YOUTUBE'\"><app-widget-youtube></app-widget-youtube></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetservice, router, activatedroute) {
        this.widgetservice = widgetservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.widget = {
            widgetType: "",
            pageId: "",
            text: "",
            size: 0,
            width: "",
            url: ""
        };
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            _this.wgid = params["wgid"];
            _this.widgetservice
                .findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-widget-edit",
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-light fixed-top bg-dark\">\n  <a\n    class=\"color-white\"\n    routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n  >\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n  <div class=\"sw-90-width\">\n    <a\n      class=\"navbar-brand\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n    >\n      <b class=\"color-white\"> Widget Edit</b>\n    </a>\n  </div>\n\n  <button\n    type=\"submit\"\n    class=\"color-white btn bg-transparent\"\n    form=\"myForm\"\n    [disabled]=\"myForm.invalid\"\n  >\n    <i class=\"fas fa-check\"></i>\n  </button>\n</nav>\n<br /><br />\n<!-- List -->\n<div class=\"container-fluid\">\n  <form class=\"form-style\" id=\"myForm\" (ngSubmit)=\"update()\" #myForm=\"ngForm\">\n    <!--\n      Name\n      <div class=\"form-group\">\n        <label for=\"name\"><b>Name</b></label>\n        <input\n          type=\"text\"\n          name=\"name\"\n          class=\"form-control\"\n          [(ngModel)]=\"widget.name\"\n        />\n      </div>\n    -->\n    <!-- Text -->\n    <div class=\"form-group\">\n      <label for=\"textHeading\"><b>Text</b></label>\n      <input\n        type=\"text\"\n        name=\"text\"\n        class=\"form-control\"\n        [(ngModel)]=\"widget.text\"\n        required\n        #textInput=\"ngModel\"\n      />\n    </div>\n    <div\n      *ngIf=\"textInput.invalid && textInput.touched\"\n      class=\"alert alert-danger\"\n    >\n      Text is required\n    </div>\n    <!-- Size -->\n    <div class=\"form-group\">\n      <label for=\"sizeHeading\"><b>Size</b></label>\n      <input\n        type=\"number\"\n        name=\"size\"\n        class=\"form-control\"\n        [(ngModel)]=\"widget.size\"\n        required\n        #sizeInput=\"ngModel\"\n      />\n    </div>\n    <div\n      *ngIf=\"sizeInput.invalid && sizeInput.touched\"\n      class=\"alert alert-danger\"\n    >\n      Size is required\n    </div>\n\n    <div>\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"delete()\">\n        Delete\n      </button>\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-light fixed-bottom bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\"\n      ><i class=\"fas fa-user\"></i\n    ></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetservice, router, activatedroute) {
        this.widgetservice = widgetservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.widget = {
            widgetType: "",
            pageId: "",
            text: "",
            size: 0,
            width: "",
            url: ""
        };
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.wid = params["wid"];
            _this.pid = params["pid"];
            _this.wgid = params["wgid"];
            _this.widgetservice
                .findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    //Update header widget
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        this.widgetservice.updateWidget(this.widget).subscribe(function () {
            _this.router.navigate([
                "/user/" +
                    _this.uid +
                    "/website/" +
                    _this.wid +
                    "/page/" +
                    _this.pid +
                    "/widget"
            ]);
        });
    };
    //Delete header widget
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        //console.log(this.wgid);
        this.widgetservice.deleteWidget(this.wgid).subscribe(function (del) {
            _this.router.navigate([
                "/user/" +
                    _this.uid +
                    "/website/" +
                    _this.wid +
                    "/page/" +
                    _this.pid +
                    "/widget"
            ]);
        });
    };
    WidgetHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-widget-header",
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-light fixed-top bg-dark\">\n  <a\n    class=\"color-white\"\n    routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n  >\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n  <div class=\"sw-90-width\">\n    <a\n      class=\"navbar-brand\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n    >\n      <b class=\"color-white\"> Widget Edit</b>\n    </a>\n  </div>\n\n  <button\n    type=\"submit\"\n    class=\"color-white btn bg-transparent\"\n    form=\"myForm\"\n    [disabled]=\"myForm.invalid\"\n  >\n    <i class=\"fas fa-check\"></i>\n  </button>\n</nav>\n<br /><br />\n<!-- List -->\n<div class=\"container\">\n  <form class=\"form-style\" id=\"myForm\" (ngSubmit)=\"update()\" #myForm=\"ngForm\">\n    <!--\n      Name\n      <div class=\"form-group\">\n        <label for=\"name\"><b>Name</b></label>\n        <input\n          type=\"text\"\n          name=\"name\"\n          class=\"form-control\"\n          [(ngModel)]=\"widget.name\"\n        />\n      </div>\n    -->\n\n    <!-- Url -->\n    <div class=\"form-group\">\n      <label for=\"url\"><b>Url</b></label>\n      <input\n        type=\"text\"\n        name=\"url\"\n        class=\"form-control\"\n        [(ngModel)]=\"widget.url\"\n        #urlInput=\"ngModel\"\n        required\n      />\n    </div>\n    <div\n      *ngIf=\"urlInput.invalid && urlInput.touched\"\n      class=\"alert alert-danger\"\n    >\n      Size is required\n    </div>\n    <!-- Width -->\n    <div class=\"form-group\">\n      <label for=\"width\"><b>Width</b></label>\n      <input\n        type=\"text\"\n        name=\"width\"\n        id=\"width\"\n        class=\"form-control\"\n        required\n        [(ngModel)]=\"widget.width\"\n        #widthInput=\"ngModel\"\n      />\n    </div>\n    <div\n      *ngIf=\"widthInput.invalid && widthInput.touched\"\n      class=\"alert alert-danger\"\n    >\n      Width is required\n    </div>\n    <div>\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"delete()\">\n        Delete\n      </button>\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-light fixed-bottom bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\"\n      ><i class=\"fas fa-user\"></i\n    ></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetservice, router, activatedroute) {
        this.widgetservice = widgetservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.widget = {
            widgetType: "",
            pageId: "",
            text: "",
            size: 0,
            width: "",
            url: ""
        };
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.wid = params["wid"];
            _this.pid = params["pid"];
            _this.wgid = params["wgid"];
            _this.widgetservice
                .findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    //Update header widget
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.widgetservice.updateWidget(this.widget).subscribe(function () {
            _this.router.navigate([
                "/user/" +
                    _this.uid +
                    "/website/" +
                    _this.wid +
                    "/page/" +
                    _this.pid +
                    "/widget"
            ]);
        });
    };
    //Delete header widget
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this.widgetservice.deleteWidget(this.wgid).subscribe(function () {
            _this.router.navigate([
                "/user/" +
                    _this.uid +
                    "/website/" +
                    _this.wid +
                    "/page/" +
                    _this.pid +
                    "/widget"
            ]);
        });
    };
    WidgetImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-widget-image",
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-light fixed-top bg-dark\">\n  <a\n    class=\"color-white\"\n    routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n  >\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n  <div class=\"sw-90-width\">\n    <a\n      class=\"navbar-brand\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n    >\n      <b class=\"color-white\"> Widget Edit</b>\n    </a>\n  </div>\n\n  <button\n    type=\"submit\"\n    class=\"color-white btn bg-transparent\"\n    form=\"myForm\"\n    [disabled]=\"myForm.invalid\"\n  >\n    <i class=\"fas fa-check\"></i>\n  </button>\n</nav>\n<br /><br />\n<!-- List -->\n<div class=\"container\">\n  <form class=\"form-style\" id=\"myForm\" (ngSubmit)=\"update()\" #myForm=\"ngForm\">\n    <!--\n      Name\n      <div class=\"form-group\">\n        <label for=\"name\"><b>Name</b></label>\n        <input\n          name=\"name\"\n          placeholder=\"Youtube Name\"\n          [(ngModel)]=\"widget.name\"\n          type=\"text\"\n          id=\"name\"\n          class=\"form-control\"\n        />\n      </div>\n    -->\n    <!-- Url -->\n    <div class=\"form-group\">\n      <label for=\"urlHeading\"><b>Url</b></label>\n      <input\n        type=\"text\"\n        name=\"url\"\n        [(ngModel)]=\"widget.url\"\n        class=\"form-control\"\n        #urlInput=\"ngModel\"\n        required\n      />\n    </div>\n    <div\n      *ngIf=\"urlInput.invalid && urlInput.touched\"\n      class=\"alert alert-danger\"\n    >\n      Url is required\n    </div>\n    <!-- Width -->\n    <div class=\"form-group\">\n      <label for=\"width\"><b>Width</b></label>\n      <input\n        type=\"text\"\n        name=\"width\"\n        class=\"form-control\"\n        [(ngModel)]=\"widget.width\"\n        required\n        #widthInput=\"ngModel\"\n      />\n    </div>\n    <div\n      *ngIf=\"widthInput.invalid && widthInput.touched\"\n      class=\"alert alert-danger\"\n    >\n      Width is required\n    </div>\n    <div>\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"delete()\">\n        Delete\n      </button>\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-light fixed-bottom bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"full-width\">\n    <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\"\n      ><i class=\"fas fa-user\"></i\n    ></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetservice, router, activatedroute) {
        this.widgetservice = widgetservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.widget = {
            widgetType: "",
            pageId: "",
            text: "",
            size: 0,
            width: "",
            url: ""
        };
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("dsfsdfsdfsd");
        this.activatedroute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.wid = params["wid"];
            _this.pid = params["pid"];
            _this.wgid = params["wgid"];
            _this.widgetservice
                .findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    //Update header widget
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.widgetservice.updateWidget(this.widget).subscribe(function (up) {
            _this.router.navigate([
                "/user/" +
                    _this.uid +
                    "/website/" +
                    _this.wid +
                    "/page/" +
                    _this.pid +
                    "/widget"
            ]);
        });
    };
    //Delete header widget
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        this.widgetservice.deleteWidget(this.wgid).subscribe(function () {
            _this.router.navigate([
                "/user/" +
                    _this.uid +
                    "/website/" +
                    _this.wid +
                    "/page/" +
                    _this.pid +
                    "/widget"
            ]);
        });
    };
    WidgetYoutubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-widget-youtube",
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-light fixed-top bg-dark\">\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">\n    <i class=\"fas fa-chevron-left\"></i>\n  </a>\n\n  <div class=\"sw-90-width\">\n    <a\n      class=\"navbar-brand\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n    >\n      <b class=\"color-white\">Widgets</b>\n    </a>\n  </div>\n  <a\n    class=\"color-white\"\n    routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n  >\n    <i class=\"fas fa-plus\"></i>\n  </a>\n</nav>\n<br /><br />\n<!-- Main content -->\n<div class=\"container-fluid\">\n  <!-- Heading widget -->\n  <div *ngFor=\"let widget of widgets\">\n    <!-- Icons -->\n    <div class=\"absolute-right\">\n      <a\n        routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\"\n        class=\"color-black\"\n        title=\"Edit\"\n      >\n        <i class=\"fas fa-cog\"></i>\n      </a>\n      <a\n        routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\"\n        class=\"color-black\"\n      >\n        <i class=\"fas fa-bars\"></i>\n      </a>\n    </div>\n    <!-- content -->\n\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div [ngSwitch]=\"widget.size\">\n          <div *ngSwitchCase=\"'1'\">\n            <h1>{{ widget.text }}</h1>\n          </div>\n          <div *ngSwitchCase=\"'2'\">\n            <h2>{{ widget.text }}</h2>\n          </div>\n          <div *ngSwitchCase=\"'3'\">\n            <h3>{{ widget.text }}</h3>\n          </div>\n          <div *ngSwitchCase=\"'4'\">\n            <h4>{{ widget.text }}</h4>\n          </div>\n          <div *ngSwitchCase=\"'5'\">\n            <h5>{{ widget.text }}</h5>\n          </div>\n          <div *ngSwitchCase=\"'6'\">\n            <h6>{{ widget.text }}</h6>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div>\n          <img\n            [style.height]=\"500\"\n            [src]=\"widget.url\"\n            [style.width]=\"widget.width\"\n          />\n        </div>\n      </div>\n      <br />\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe\n            [src]=\"parseYoutubeSrc(widget.url)\"\n            [style.width]=\"widget.width\"\n            allowfullscreen\n          ></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<footer class=\"navbar navbar-dark bg-dark fixed-bottom\">\n  <!-- Navbar content -->\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}\">\n    <i class=\"fas fa-play\"></i>\n  </a>\n\n  <div class=\"sw-90-width\">\n    <a\n      class=\"float-left color-white\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n    >\n      <i class=\"fas fa-eye\"></i>\n    </a>\n  </div>\n\n  <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}\">\n    <i class=\"fas fa-user\"></i>\n  </a>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetsevice, router, activatedroute, sanitizer) {
        this.widgetsevice = widgetsevice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) {
            (_this.uid = params["uid"]),
                (_this.wid = params["wid"]),
                (_this.pid = params["pid"]),
                _this.widgetsevice
                    .findWidgetsByPageId(_this.pid)
                    .subscribe(function (widgets) {
                    _this.widgets = widgets;
                });
        });
    };
    WidgetListComponent.prototype.parseYoutubeSrc = function (src) {
        //   Transfer video url into embeded video url
        var embedUrl = "https://www.youtube.com/embed/";
        var splitUrl = src.split("/");
        embedUrl += splitUrl[splitUrl.length - 1];
        // Telling browser this src is safe
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-widget-list",
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    //Function to create a page
    PageService.prototype.createPage = function (page) {
        var url = this.baseUrl + "/api/page";
        return this.http.post(url, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to find a page by website Id
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = this.baseUrl + "/api/website/" + websiteId + "/page";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to find a page by page Id
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Funtion to update a page
    PageService.prototype.updatePage = function (page) {
        var url = this.baseUrl + "/api/page";
        return this.http.put(url, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Funtion to delete a page by page Id
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    //Function to create new user
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + "/api/user";
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to find user id
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + "/api/user/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }));
    };
    //Function to find user by username
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + "/api/user?username=" + username;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to find user by username
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + "/api/user?username=" + username + "&password=" + password;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to update a user
    UserService.prototype.updateUser = function (user) {
        var url = this.baseUrl + "/api/user";
        return this.http.put(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to update a user
    UserService.prototype.deleteUser = function (userId) { };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    //Function to create a website
    WebsiteService.prototype.createWebsite = function (website) {
        var url = this.baseUrl + "/api/website";
        return this.http.post(url, website).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to find websites by userId
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + "/api/user/" + userId + "/website";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to find website by website id
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + "/api/website/" + websiteId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to update a website
    WebsiteService.prototype.updateWebsite = function (website) {
        var url = this.baseUrl + "/api/website";
        return this.http.put(url, website).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to delete a website
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + "/api/website/" + websiteId;
        //const url = this.baseUrl + "/api/website/" + websiteId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WebsiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    //Function to create a widget
    WidgetService.prototype.createWidget = function (widget) {
        var url = this.baseUrl + "/api/widget";
        return this.http.post(url, widget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            //console.log(res.json());
            return res.json();
        }));
    };
    //Function to find a widget by page Id
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to find a widget by widget Id
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to update a widget
    WidgetService.prototype.updateWidget = function (widget) {
        var url = this.baseUrl + "/api/widget";
        return this.http.put(url, widget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    //Function to delete a widget
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WidgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WidgetService);
    return WidgetService;
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
    production: false,
    baseUrl: "http://localhost:3100"
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\student\Webmaker4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map