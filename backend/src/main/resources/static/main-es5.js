function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");

    var routes = [{
      path: '',
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontend';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./popup/popup.component */
    "./src/app/popup/popup.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"); // Angular Materials


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/homepage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/homepage/homepage.component.ts ***!
    \************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../popup/popup.component */
    "./src/app/popup/popup.component.ts");
    /* harmony import */


    var _service_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/popup.service */
    "./src/app/service/popup.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent(modalService, config, service) {
        _classCallCheck(this, HomepageComponent);

        this.modalService = modalService;
        this.service = service;
        this.disabled = true;
        this.panelOpenState = false;
        this.hyperlinkDisabled = 'disabledLink';
        config.backdrop = 'static';
        config.keyboard = false;
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.open();
          console.log(this.hyperlinkDisabled);
          this.disabledButtons = this.service.getActiveObservable().subscribe(function (res) {
            _this.isDisabled = res;

            if (_this.isDisabled === false) {
              _this.hyperlinkDisabled = 'enabledLink';
            }

            console.log(_this.hyperlinkDisabled);
          }); // this.getCert();
        } // getCert() {
        //   return this.http.get('http://localhost/');
        // }

      }, {
        key: "open",
        value: function open() {
          var _this2 = this;

          this.modalService.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__["PopupComponent"], {
            ariaLabelledBy: 'ngbd-modal-confirm'
          }).result.then(function (result) {
            _this2.closeResult = "Closed with: ".concat(result);
            console.log(_this2.closeResult);
          }, function (reason) {
            _this2.closeResult = "Dismissed";
            console.log(_this2.closeResult);
          });
        }
      }, {
        key: "enableLinks",
        value: function enableLinks() {
          this.disabled = false;
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_popup_service__WEBPACK_IMPORTED_MODULE_3__["PopupService"]));
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])],
      decls: 102,
      vars: 16,
      consts: [[2, "background-color", "#f6f7f8", "; height", "fit-content", "padding-bottom", "5%"], [2, "background-color", "#bdc2c6"], [2, "margin", "5px"], ["alt", "celogo", "src", "assets/celogo.jpg", 2, "width", "64px"], ["mat-button", "", 3, "disabled"], [1, "header"], [2, "min-height", "50vh", "background", "linear-gradient( rgba(0, 94, 255, 0.45), rgba(14, 30, 49, 0.45) ), url(assets/background.jpg)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [2, "font-size", "27px", "color", "white", "padding", "25px"], [1, "portalgrid"], [1, "column1"], [3, "opened", "closed"], ["href", "https://cs2.eis.af.mil/sites/10041/pages/default.aspx", 3, "ngClass"], ["href", "https://cs2.eis.af.mil/sites/13072/default.aspx", 3, "ngClass"], ["href", "", 3, "ngClass"], [1, "maininfo"], [2, "top", "8%", "margin", "0 auto", "width", "auto"], [1, "information-sidetab"], ["href", "https://acesb.cie.af.mil/documentation/SDC_Settings_Document_JAN2017.pdf", 3, "ngClass"], ["href", "HIZGH.FAS.Team1@us.af.mil", 3, "ngClass"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ACES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FESIMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "EODIMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ARIS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Automated Civil Engineer - Family of Systems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function HomepageComponent_Template_mat_expansion_panel_opened_19_listener() {
            return ctx.panelOpenState = true;
          })("closed", function HomepageComponent_Template_mat_expansion_panel_closed_19_listener() {
            return ctx.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Links ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "US Air Force Civil Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "AFCEC Expeditionary Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Release Notes/SANS (AFCEDS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "AF Fire Emergency Services SharePoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ARIS SharePoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Accessibility/Section 508");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "AFCEC SharePoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "EODIMS CBT (JKO account required)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "AEFOnline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Site UID and RPUID Processing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "The OSD DAIS system that generates Site UIDs and fadltty RPUIDs has been down for several weeks. At this time there is no projected date for the system to resume operation. Furthermore, when the system resumes operation, it may still not support the generation of Site UIDs and RPUIDs for ACES-RP. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " The ACES help desk is aware of this situation, but are unable to provide a way forward at this time. Please refrain from calling, e- mailing or submitting help desk tickets to the FAS help desk for missing/unassigned Site UID and RPUID errors as that will simply cause delays in processing help requests that can be resolved. This outage does not affect the way ACES-RP operates for those sites that have already been issued Site UIDs and RPUIDs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Those facilities awaiting RPUIDs are currently in the queue and will be processed as soon as DAIS interface is operational and AF business processes are in place. At that time the backlog of requests will be resubmitted and Site UID and/or RPUID requests will be assigned through ACES as appropriate. As soon as we receive notification that DAIS is operational for ACES-RP submission, you will be notified. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " AFCEC and the ACES-RP team are painfully aware of the backlog this has and is continuing to create, but please understand that we do not control the DAIS interface; however, until further notice, please refrain from submitting help desk tickets for missing Site UID or RPUIID errors.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Current Versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "ACES v3.2.1.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "CES FD v3.0.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "ACES FD Dispatch b1178");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "EODIMS v2.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Standard Desktop Configuration Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "User help Desk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Field Assistance Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "DSN: 312-596-5771");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Comm: 334-416-5771");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Toll Free: 877-596-5771");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Use options 1,1,4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "FAS Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hyperlinkDisabled);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"]],
      styles: [".header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.backgroundimg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 2px -1px rgba(197, 192, 192, 0.979), 0 2px 2px 0 rgba(187, 183, 183, 0.979), 0 2px 17px 0 rgba(182, 177, 177, 0.979);\n}\n\n.mat-accordion[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 2px -1px rgba(197, 192, 192, 0.979), 0 2px 2px 0 rgba(187, 183, 183, 0.979), 0 2px 17px 0 rgba(182, 177, 177, 0.979);\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.portalgrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 0.5fr 1fr 0.5fr;\n  padding-top: 30px;\n  grid-column-gap: 30px;\n}\n\n.maininfo[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n\n.maininfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.5;\n}\n\n.information-sidetab[_ngcontent-%COMP%] {\n  grid-column: 3;\n}\n\n.column1[_ngcontent-%COMP%] {\n  grid-column: 1;\n}\n\n.disabledLink[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvQzpcXFVzZXJzXFxjcm9iaW5zb25cXERvY3VtZW50c1xcR2l0SHViXFxhY2VzLXNzb1xcZnJvbnRlbmQvc3JjXFxhcHBcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxzSUFBQTtBQ0lKOztBREZBO0VBQ0ksc0lBQUE7QUNLSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNNSjs7QURIQTtFQUNJLGNBQUE7QUNNSjs7QURIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtBQ09KOztBREpBO0VBQ0ksY0FBQTtBQ09KOztBRExBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cclxuLnRvb2xiYXJcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cclxuLmJhY2tncm91bmRpbWdcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG5cclxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pXHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAycHggLTFweCByZ2JhKDE5NywgMTkyLCAxOTIsIDAuOTc5KSwgMCAycHggMnB4IDAgcmdiYSgxODcsIDE4MywgMTgzLCAwLjk3OSksIDAgMnB4IDE3cHggMCByZ2JhKDE4MiwgMTc3LCAxNzcsIDAuOTc5KVxyXG5cclxuLm1hdC1hY2NvcmRpb246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSlcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCAtMXB4IHJnYmEoMTk3LCAxOTIsIDE5MiwgMC45NzkpLCAwIDJweCAycHggMCByZ2JhKDE4NywgMTgzLCAxODMsIDAuOTc5KSwgMCAycHggMTdweCAwIHJnYmEoMTgyLCAxNzcsIDE3NywgMC45NzkpXHJcblxyXG7igItcclxuLm1hdC1jYXJkXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHhcclxuXHJcbi5wb3J0YWxncmlkXHJcbiAgICBkaXNwbGF5OiBncmlkXHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmclxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNWZyIDFmciAuNWZyXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweFxyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAzMHB4XHJcblxyXG7igItcclxuLm1haW5pbmZvXHJcbiAgICBncmlkLWNvbHVtbjogMlxyXG5cclxu4oCLXHJcbi5tYWluaW5mbyBwXHJcbiAgICBmb250LXNpemU6IDIwcHhcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVcclxuXHJcbi5pbmZvcm1hdGlvbi1zaWRldGFiXHJcbiAgICBncmlkLWNvbHVtbjogM1xyXG5cclxu4oCLXHJcbi5jb2x1bW4xXHJcbiAgICBncmlkLWNvbHVtbjogMVxyXG5cclxuLmRpc2FibGVkTGlua1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcclxuICAgIGN1cnNvcjogZGVmYXVsdCIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b29sYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFja2dyb3VuZGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0xcHggcmdiYSgxOTcsIDE5MiwgMTkyLCAwLjk3OSksIDAgMnB4IDJweCAwIHJnYmEoMTg3LCAxODMsIDE4MywgMC45NzkpLCAwIDJweCAxN3B4IDAgcmdiYSgxODIsIDE3NywgMTc3LCAwLjk3OSk7XG59XG5cbi5tYXQtYWNjb3JkaW9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0xcHggcmdiYSgxOTcsIDE5MiwgMTkyLCAwLjk3OSksIDAgMnB4IDJweCAwIHJnYmEoMTg3LCAxODMsIDE4MywgMC45NzkpLCAwIDJweCAxN3B4IDAgcmdiYSgxODIsIDE3NywgMTc3LCAwLjk3OSk7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnBvcnRhbGdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnIgMC41ZnI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBncmlkLWNvbHVtbi1nYXA6IDMwcHg7XG59XG5cbi5tYWluaW5mbyB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4ubWFpbmluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmluZm9ybWF0aW9uLXNpZGV0YWIge1xuICBncmlkLWNvbHVtbjogMztcbn1cblxuLmNvbHVtbjEge1xuICBncmlkLWNvbHVtbjogMTtcbn1cblxuLmRpc2FibGVkTGluayB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.sass'],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]
        }, {
          type: _service_popup_service__WEBPACK_IMPORTED_MODULE_3__["PopupService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/popup/popup.component.ts":
  /*!******************************************!*\
    !*** ./src/app/popup/popup.component.ts ***!
    \******************************************/

  /*! exports provided: PopupComponent */

  /***/
  function srcAppPopupPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupComponent", function () {
      return PopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _service_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/popup.service */
    "./src/app/service/popup.service.ts");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function PopupComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You are accessing a U.S. Government (USG) Information System (IS) that is provided for USG-authorized use only.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "By using this IS (which includes any device attached to this IS), you consent to the following conditions: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "At any time, the USG may inspect and seize data stored on this IS.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG authorized purpose.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This IS includes security measures (e.g., authentication and access controls) to protect USG interests-not for your personal benefit or privacy.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or service by attorneys, psychotherapists, or clergy, and their assistants. Such communications and work product are private and confidential. See User Agreement for details.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "To view Users Agreement click ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_2_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.viewUserAgreement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_2_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.accept();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Accept");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DOD INFORMATION SYSTEM USER AGREEMENTS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "By signing this document, you acknowledge and consent that when you access Department of Defense (DoD) information systems: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You are accessing a U.S. Government (USG) information system (IS) (which includes any device attached to this information system) that is provided for U.S. Government authorized use only.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You consent to the following conditions:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The U.S. Government routinely intercepts and monitors communications on this information system for purposes including, but not limited to, penetration testing, communications security (COMSEC) monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "At any time, the U.S. Government may inspect and seize data stored on this information system.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Communications using, or data stored on, this information system are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any U.S. Government-authorized purpose.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This information system includes security measures (e.g., authentication and access controls) to protect U.S. Government interests--not for your personal benefit or privacy.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Notwithstanding the above, using an information system does not constitute consent to personnel misconduct, law enforcement, or counterintelligence investigative searching or monitoring of the content of privileged communications or data (including work product) that are related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Under these circumstances, such communications and work product are private and confidential, as further explained below:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nothing in this User Agreement shall be interpreted to limit the user's consent to, or in any other way restrict or affect, any U.S. Government actions for purposes of network administration, operation, protection, or defense, or for communications security. This includes all communications and data on an information system, regardless of any applicable privilege or confidentiality.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The user consents to interception/capture and seizure of ALL communications and data for any authorized purpose (including personnel misconduct, law enforcement, or counterintelligence investigation). However, consent to interception/capture or seizure of communications and data is not consent to the use of privileged communications or data for personnel misconduct, law enforcement, or counterintelligence investigation against any party and does not negate any applicable privilege or confidentiality that otherwise applies.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Whether any particular communication or data qualifies for the protection of a privilege, or is covered by a duty of confidentiality, is determined in accordance with established legal standards and DoD policy. Users are strongly encouraged to seek personal legal counsel on such matters prior to using an information system if the user intends to rely on the protections of a privilege or confidentiality.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Users should take reasonable steps to identify such communications or data that the user asserts are protected by any such privilege or confidentiality. However, the user's identification or assertion of a privilege or confidentiality is not sufficient to create such protection where none exists under established legal standards and DoD policy.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "A user's failure to take reasonable steps to identify such communications or data as privileged or confidential does not waive the privilege or confidentiality if such protections otherwise exist under established legal standards and DoD policy. However, in such cases the U.S. Government is authorized to take reasonable actions to identify such communication or data as being subject to a privilege or confidentiality, and such actions do not negate any applicable privilege or confidentiality.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "These conditions preserve the confidentiality of the communication or data, and the legal protections regarding the use and disclosure of privileged information, and thus such communications and data are private and confidential. Further, the U.S. Government shall take all reasonable measures to protect the content of captured/seized privileged communications and data to ensure they are appropriately protected.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "In cases when the user has consented to content searching or monitoring of communications or data for personnel misconduct, law enforcement, or counterintelligence investigative searching, (Le., for all communications and data other than privileged communications or data that are related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants), the U.S. Government may, solely at its discretion and in accordance with DoD policy, elect to apply a privilege or other restriction on the U.S. Government's otherwise-authorized use or disclosure of such information.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "All of the above conditions apply regardless of whether the access or use of an information system includes the display of a Notice and Consent Banner (\"banner\"). When a banner is used, the banner functions to remind the user of the conditions that are set forth in this User Agreement, regardless of whether the banner describes these conditions in full detail or provides a summary of such conditions, and regardless of whether the banner expressly references this User Agreement.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_4_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.viewUserAgreement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PopupComponent =
    /*#__PURE__*/
    function () {
      function PopupComponent( // public dialogRef: MatDialogRef<PopupComponent>,
      modalService, popupService, home) {
        _classCallCheck(this, PopupComponent);

        this.modalService = modalService;
        this.popupService = popupService;
        this.home = home;
        this.userAgreement = false;
      }

      _createClass(PopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "accept",
        value: function accept() {
          this.popupService.setActive(false);
          this.modalService.dismissAll('accept');
        }
      }, {
        key: "viewUserAgreement",
        value: function viewUserAgreement() {
          this.userAgreement = !this.userAgreement;
        }
      }]);

      return PopupComponent;
    }();

    PopupComponent.ɵfac = function PopupComponent_Factory(t) {
      return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]));
    };

    PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopupComponent,
      selectors: [["app-popup"]],
      decls: 5,
      vars: 4,
      consts: [["class", "modal-header", 4, "ngIf"], ["class", "modal-body", 4, "ngIf"], [1, "modal-header"], [1, "modal-body"], [2, "text-align", "center"], [2, "text-decoration", "underline", 3, "click"], [2, "width", "10%", "margin", "auto"], ["mat-button", "", 2, "border", "1px solid #999", 3, "click"], [2, "margin-left", "2em"], [2, "margin-left", "4em"]],
      template: function PopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopupComponent_div_1_Template, 3, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopupComponent_div_2_Template, 21, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopupComponent_div_3_Template, 3, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupComponent_div_4_Template, 37, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAgreement);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAgreement);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAgreement);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAgreement);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: [".modal-dialog {\n  width: 50%;\n  max-width: 50% !important;\n}\n\nli[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.modal-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAvQzpcXFVzZXJzXFxjcm9iaW5zb25cXERvY3VtZW50c1xcR2l0SHViXFxhY2VzLXNzb1xcZnJvbnRlbmQvc3JjXFxhcHBcXHBvcHVwXFxwb3B1cC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tb2RhbC1kaWFsb2cgXHJcbiAgICB3aWR0aDogNTAlXHJcbiAgICBtYXgtd2lkdGg6IDUwJSAhaW1wb3J0YW50XHJcblxyXG5saVxyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcblxyXG4ubW9kYWwtaGVhZGVyIGgxXHJcbiAgICBmb250LXNpemU6IDMycHhcclxuIiwiOjpuZy1kZWVwIC5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG5saSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1vZGFsLWhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popup',
          templateUrl: './popup.component.html',
          styleUrls: ['./popup.component.sass']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: _service_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]
        }, {
          type: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/popup.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/popup.service.ts ***!
    \******************************************/

  /*! exports provided: PopupService */

  /***/
  function srcAppServicePopupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupService", function () {
      return PopupService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PopupService =
    /*#__PURE__*/
    function () {
      function PopupService() {
        _classCallCheck(this, PopupService);

        this.disabledButtons = true;
        this.disabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.disabledButtons);
      }

      _createClass(PopupService, [{
        key: "getActiveObservable",
        value: function getActiveObservable() {
          return this.disabled.asObservable();
        }
      }, {
        key: "setActive",
        value: function setActive(disabledButtons) {
          this.disabledButtons = disabledButtons;
          this.disabled.next(disabledButtons);
        }
      }]);

      return PopupService;
    }();

    PopupService.ɵfac = function PopupService_Factory(t) {
      return new (t || PopupService)();
    };

    PopupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PopupService,
      factory: PopupService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\crobinson\Documents\GitHub\aces-sso\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map