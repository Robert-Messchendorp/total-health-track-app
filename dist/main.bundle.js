webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".entity-container {\r\n    display: -webkit-inline-box\r\n}\r\n\r\n.entity-container div {\r\n    margin: 40px;\r\n    border: 3px solid rgba(0,0,0,0.5);\r\n    padding: 30px;\r\n}\r\n\r\n.add-record-dialogue-area {\r\n    border: 3px solid rgba(0,0,0,0.5);\r\n    margin-top: 35px;\r\n}\r\n\r\n.sidenav-container {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* border: 1px solid rgba(0,0,0, 0.5); */\r\n}\r\n\r\n.sidenav-content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.tht-sidenav {\r\n    max-width: 33%;\r\n    width: 25%;\r\n    min-width: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome {{title}}!\n  </h1>\n  <input type=\"text\" [(ngModel)]=\"todo\">\n  <p>{{ todo }}</p>\n  <tht-menu></tht-menu>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n</div>\n<br />\n<br />\n<br />\n<br />\n<hr>\n<br />\n<br />\n<div>\n  <tht-list></tht-list>\n</div> -->\n\n<!-- <tht-list></tht-list> -->\n<md-sidenav-container class=\"sidenav-container\">\n    <tht-toolbar (menuActivated)=\"onButtonPress($event, sidenav)\"></tht-toolbar>\n    <md-sidenav mode=\"push\" align=\"end\" #sidenav class=\"tht-sidenav\">\n      <tht-menu (menuItemChosen)=\"onChosenMenuItem($event, sidenav)\"></tht-menu>\n    </md-sidenav>\n\n    <div class=\"router-container\">\n      <router-outlet></router-outlet> \n    </div>\n\n    <tht-notification-snackbar></tht-notification-snackbar>\n\n    <!-- <div class=\"add-record-dialogue-area\"> -->\n      <!-- </div> -->\n    <!-- <div class=\"add-record-dialogue-area\">\n      <tht-add-record-dialogue (recordCreated)=\"onRecordCreated($event)\" ></tht-add-record-dialogue>\n    </div>\n    <br />\n    <br />\n    <br />\n    <div class=\"entity-container\"\n          fxLayout\n          fxLayout.xs=\"column\"\n          fxLayoutAlign=\"center\"\n          fxLayoutGap=\"10px\"\n          fxLayoutGap.xs=\"0\">\n      <div class=\"list-overview\" fxFlex fxFlexOffset=\"50px\"  fxFlexOffset.xs=\"0\">\n          <tht-list *ngFor=\"let record of records; let i = index\"\n                    [listRecord]=\"record\"></tht-list>\n      </div>\n      <div class=\"detail-overview\" fxFlex=\"500px\" *ngIf=\"entity === 'Food'\">\n        <tht-detail *ngIf = \"selectedRecord; else infoText\"\n                    [recipe] = \"selectedRecord\"></tht-detail>\n        <ng-template #infoText>\n          <p>Please select a record</p>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"shopping-list-container\">\n      <tht-information-card></tht-information-card>\n    </div> -->\n</md-sidenav-container>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__ = __webpack_require__("../../../../../src/services/feature services/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_startup_service__ = __webpack_require__("../../../../../src/services/startup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(dataService, recipeService, startupService) {
        this.dataService = dataService;
        this.recipeService = recipeService;
        this.startupService = startupService;
        // records = [{
        //   name: 'Stefan Boonstra',
        //   recipe_name: 'Whatever Anette cooks'
        // },
        // {
        //   name: 'Robert Messchendorp',
        //   recipe_name: 'Pasta Pesto Pollo'
        // }];
        this.records = [];
        this.menuItemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    AppComponent.prototype.onRecordCreated = function (recordData) {
        this.records.push({
            name: recordData.name,
            recipe_name: recordData.recipe_name,
            timestamp: recordData.timestamp
        });
    };
    AppComponent.prototype.onButtonPress = function (eventData, sidenavElement) {
        sidenavElement.open();
    };
    AppComponent.prototype.onChosenMenuItem = function (menuData, sidenavElement) {
        this.entity = menuData.chosenMenuItem;
        this.menuItemSelected.emit({
            menuItemSelected: this.entity
        });
        sidenavElement.close();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.records = this.dataService.records;
        this.recipeService.entitySelected
            .subscribe(function (recipe) {
            _this.selectedRecord = recipe;
        });
        this.startupService.getApplicationFields()
            .subscribe(function (applicationFields) {
            _this.fields = applicationFields;
            _this.navigation = _this.fields.obj[0].Navigation.slice();
            console.log(_this.navigation);
        });
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "menuItemSelected", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__["a" /* RecipeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__["a" /* RecipeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_startup_service__["a" /* StartupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_startup_service__["a" /* StartupService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tht_toolbar_tht_menu_tht_menu_component__ = __webpack_require__("../../../../../src/app/tht-toolbar/tht-menu/tht-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tht_list_tht_list_component__ = __webpack_require__("../../../../../src/app/tht-list/tht-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tht_add_record_dialogue_tht_add_record_dialogue_component__ = __webpack_require__("../../../../../src/app/tht-add-record-dialogue/tht-add-record-dialogue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tht_controls_tht_controls_component__ = __webpack_require__("../../../../../src/app/tht-controls/tht-controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tht_detail_tht_detail_component__ = __webpack_require__("../../../../../src/app/tht-detail/tht-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tht_toolbar_tht_toolbar_component__ = __webpack_require__("../../../../../src/app/tht-toolbar/tht-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tht_list_tht_data_table_tht_data_table_component__ = __webpack_require__("../../../../../src/app/tht-list/tht-data-table/tht-data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tht_list_tht_grid_list_tht_grid_list_component__ = __webpack_require__("../../../../../src/app/tht-list/tht-grid-list/tht-grid-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tht_information_card_tht_information_card_component__ = __webpack_require__("../../../../../src/app/tht-information-card/tht-information-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tht_app_views_tht_recipes_tht_recipes_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-recipes/tht-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tht_app_views_tht_stocks_and_shares_tht_stocks_and_shares_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tht_input_card_tht_input_card_tht_input_card_component__ = __webpack_require__("../../../../../src/app/tht-input-card/tht-input-card/tht-input-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tht_app_views_tht_playground_tht_playground_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-playground/tht-playground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tht_app_views_tht_authentication_tht_authentication_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tht_app_views_tht_authentication_tht_register_tht_register_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-register/tht-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tht_app_views_tht_authentication_tht_login_tht_login_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-login/tht-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tht_app_views_tht_authentication_tht_logout_tht_logout_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-logout/tht-logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tht_notification_snackbar_tht_notification_snackbar_component__ = __webpack_require__("../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_feature_services_shopping_list_service__ = __webpack_require__("../../../../../src/services/feature services/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_startup_service__ = __webpack_require__("../../../../../src/services/startup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_notification_service__ = __webpack_require__("../../../../../src/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Imports for Core Angular functions




// Imports for Angular Material dependencies




// Imports of Components of the App



















// Imports of application wide services




// Imports routing


// running startup service
function init(config) {
    return function () {
        config.getApplicationFields();
    };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__tht_toolbar_tht_menu_tht_menu_component__["a" /* ThtMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__tht_list_tht_list_component__["a" /* ThtListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__tht_add_record_dialogue_tht_add_record_dialogue_component__["b" /* ThtAddRecordDialogueComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tht_controls_tht_controls_component__["a" /* ThtControlsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__tht_detail_tht_detail_component__["a" /* ThtDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__tht_add_record_dialogue_tht_add_record_dialogue_component__["a" /* DialogAddRecordDialog */],
            __WEBPACK_IMPORTED_MODULE_14__tht_toolbar_tht_toolbar_component__["a" /* ThtToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__tht_list_tht_data_table_tht_data_table_component__["a" /* ThtDataTableComponent */],
            __WEBPACK_IMPORTED_MODULE_16__tht_list_tht_grid_list_tht_grid_list_component__["a" /* ThtGridListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__tht_information_card_tht_information_card_component__["a" /* ThtInformationCardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__tht_app_views_tht_recipes_tht_recipes_component__["a" /* ThtRecipesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__tht_app_views_tht_stocks_and_shares_tht_stocks_and_shares_component__["a" /* ThtStocksAndSharesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__tht_input_card_tht_input_card_tht_input_card_component__["a" /* ThtInputCardComponent */],
            __WEBPACK_IMPORTED_MODULE_21__tht_app_views_tht_playground_tht_playground_component__["a" /* ThtPlaygroundComponent */],
            __WEBPACK_IMPORTED_MODULE_22__tht_app_views_tht_authentication_tht_authentication_component__["a" /* ThtAuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_23__tht_app_views_tht_authentication_tht_register_tht_register_component__["a" /* ThtRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_24__tht_app_views_tht_authentication_tht_login_tht_login_component__["a" /* ThtLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_25__tht_app_views_tht_authentication_tht_logout_tht_logout_component__["a" /* ThtLogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_26__tht_notification_snackbar_tht_notification_snackbar_component__["c" /* ThtNotificationSnackbarComponent */],
            __WEBPACK_IMPORTED_MODULE_26__tht_notification_snackbar_tht_notification_snackbar_component__["a" /* SnackBarErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_26__tht_notification_snackbar_tht_notification_snackbar_component__["b" /* SnackBarSuccessComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_31__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MdSnackBarModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__tht_add_record_dialogue_tht_add_record_dialogue_component__["b" /* ThtAddRecordDialogueComponent */],
            __WEBPACK_IMPORTED_MODULE_11__tht_add_record_dialogue_tht_add_record_dialogue_component__["a" /* DialogAddRecordDialog */],
            __WEBPACK_IMPORTED_MODULE_26__tht_notification_snackbar_tht_notification_snackbar_component__["a" /* SnackBarErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_26__tht_notification_snackbar_tht_notification_snackbar_component__["b" /* SnackBarSuccessComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_27__services_feature_services_shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_28__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_30__services_notification_service__["a" /* NotificationService */],
            {
                'provide': __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* APP_INITIALIZER */],
                'useFactory': init,
                'deps': [__WEBPACK_IMPORTED_MODULE_29__services_startup_service__["a" /* StartupService */]],
                'multi': true
            }, __WEBPACK_IMPORTED_MODULE_29__services_startup_service__["a" /* StartupService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

// You can make a custom component from angular material components
// ToDo: Implement this later when Udemy course explained how to make custom components
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';
// @NgModule({
//   imports: [MdButtonModule, MdCheckboxModule],
//   exports: [MdButtonModule, MdCheckboxModule],
// })
// export class MyCustomAngularMaterialModule { }
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tht_app_views_tht_authentication_tht_authentication_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tht_app_views_tht_recipes_tht_recipes_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-recipes/tht-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tht_app_views_tht_stocks_and_shares_tht_stocks_and_shares_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tht_app_views_tht_playground_tht_playground_component__ = __webpack_require__("../../../../../src/app/tht-app-views/tht-playground/tht-playground.component.ts");





// Routing
var appRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__tht_app_views_tht_authentication_tht_authentication_component__["a" /* ThtAuthenticationComponent */], pathMatch: 'full'
    },
    {
        path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_2__tht_app_views_tht_recipes_tht_recipes_component__["a" /* ThtRecipesComponent */]
    },
    {
        path: 'stocks-and-shares', component: __WEBPACK_IMPORTED_MODULE_3__tht_app_views_tht_stocks_and_shares_tht_stocks_and_shares_component__["a" /* ThtStocksAndSharesComponent */]
    },
    { path: 'playground', component: __WEBPACK_IMPORTED_MODULE_4__tht_app_views_tht_playground_tht_playground_component__["a" /* ThtPlaygroundComponent */] }
    // {path: 'recipes/:id', component: ThtRecipesComponent}
    // {path: '**', redirectTo: 'bro-this-page-does-not-exist'}
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/tht-add-record-dialogue/tht-add-record-dialogue-templates/add-recipe-dialogue.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Add your recipe</h1>\r\n<div md-dialog-content>\r\n    <form class=\"add-record-form\" id=\"recipeForm\">\r\n        <md-input-container> \r\n            <input mdInput placeholder=\"What's the name of your recipe?\" [(ngModel)]=\"recipe_name\" [ngModelOptions]=\"{standalone: true}\">\r\n        </md-input-container>\r\n        <br/>\r\n        <md-input-container> \r\n            <input mdInput placeholder=\"Description\" [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\">\r\n        </md-input-container>\r\n        <button md-button md-raised-button md-button-color='primary' (click)='onAddRecord()'>Add</button>\r\n    </form>\r\n    <br />\r\n    <button md-button (click)='dialogRef.close(record)' >Close and save</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tht-add-record-dialogue/tht-add-record-dialogue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-record-button {\r\n    /* position: fixed; */\r\n    float: right;\r\n    margin-left: 85%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-add-record-dialogue/tht-add-record-dialogue.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-fab color=\"primary\" (click)=\"openDialog()\" class=\"add-record-button\"><md-icon>add_circle_outline</md-icon></button>\n\n<!-- <div class=\"preview-card\">\n  In here a preview of the card to be added will be shown, and a snackbar to open the dialogue again and make changes\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/tht-add-record-dialogue/tht-add-record-dialogue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ThtAddRecordDialogueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAddRecordDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__("../../../../../src/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThtAddRecordDialogueComponent = (function () {
    function ThtAddRecordDialogueComponent(dialog, notificationService, dataService) {
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.dataService = dataService;
        this.recordCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.recipeAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ThtAddRecordDialogueComponent.prototype.ngOnInit = function () {
    };
    ThtAddRecordDialogueComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogAddRecordDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.record = result;
            _this.recordCreated.emit({
                // TODO Loop over multiple adds
                recipe_name: _this.record[0].recipe_name,
                description: _this.record[0].description,
                date_created: _this.record[0].timestamp
            });
            _this.url = 'http://localhost:3000/recipes';
            // this.errorService.handleOnError(this.record);
            _this.dataService.onCreate(_this.record, _this.url)
                .subscribe(function (recipe) {
                _this.notificationService.handleOnSuccess(recipe);
                _this.recipeAdded.emit();
            });
        });
    };
    return ThtAddRecordDialogueComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ThtAddRecordDialogueComponent.prototype, "recordCreated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ThtAddRecordDialogueComponent.prototype, "recipeAdded", void 0);
ThtAddRecordDialogueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-add-record-dialogue',
        template: __webpack_require__("../../../../../src/app/tht-add-record-dialogue/tht-add-record-dialogue.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-add-record-dialogue/tht-add-record-dialogue.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _c || Object])
], ThtAddRecordDialogueComponent);

var DialogAddRecordDialog = (function () {
    function DialogAddRecordDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.record = [];
    }
    DialogAddRecordDialog.prototype.onAddRecord = function () {
        this.timeStamp = Date.now();
        // make timestamp human readable
        this.record.push({
            recipe_name: this.recipe_name,
            description: this.description,
            date_created: this.timeStamp
        });
        // clear form to allow for multiple adds per time
    };
    DialogAddRecordDialog.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    DialogAddRecordDialog.prototype.ngOnInit = function () {
    };
    return DialogAddRecordDialog;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('nameInput'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object)
], DialogAddRecordDialog.prototype, "nameInput", void 0);
DialogAddRecordDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dialog-add-record-dialog',
        template: __webpack_require__("../../../../../src/app/tht-add-record-dialogue/tht-add-record-dialogue-templates/add-recipe-dialogue.html")
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _e || Object])
], DialogAddRecordDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tht-add-record-dialogue.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-authentication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-content>\n      <md-tab-group>\n          <md-tab label=\"Register\"><tht-register></tht-register></md-tab>\n          <md-tab label=\"Login\"><tht-login></tht-login></md-tab>\n        </md-tab-group>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtAuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThtAuthenticationComponent = (function () {
    function ThtAuthenticationComponent() {
    }
    ThtAuthenticationComponent.prototype.ngOnInit = function () {
    };
    return ThtAuthenticationComponent;
}());
ThtAuthenticationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-authentication',
        template: __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-authentication.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-authentication.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThtAuthenticationComponent);

//# sourceMappingURL=tht-authentication.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-login/tht-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tht-login-form, .input-container {\r\n    display: block;\r\n    padding: 25px;\r\n}\r\n\r\n.login-button {\r\n    margin: 25px;\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-login/tht-login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"tht-login-form\" (ngSubmit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\r\n       <md-form-field class=\"input-container\">\r\n         <input mdInput placeholder=\"Please enter your email\" type=\"email\" required ngModel name=\"email\">\r\n       </md-form-field>\r\n       <md-form-field class=\"input-container\">\r\n         <input mdInput placeholder=\"Please enter your password\" type=\"password\" required ngModel name=\"password\">\r\n       </md-form-field>\r\n       <br/>\r\n       <button md-button md-raised-button [color]=\"accent\" type=\"submit\" class=\"login-button\" [disabled]=\"!loginForm.valid\">Login</button>\r\n     </form>"

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-login/tht-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThtLoginComponent = (function () {
    function ThtLoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ThtLoginComponent.prototype.ngOnInit = function () {
    };
    ThtLoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        var url = 'http://localhost:3000/users/signin';
        this.dataService.onCreate(form.value, url)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userid', data.userId);
            // console.log(data);
            _this.router.navigateByUrl('/recipes');
        }, function (error) { return console.error(error); });
        form.resetForm();
    };
    return ThtLoginComponent;
}());
ThtLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-login',
        template: __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-login/tht-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-login/tht-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ThtLoginComponent);

var _a, _b;
//# sourceMappingURL=tht-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-logout/tht-logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-logout/tht-logout.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-icon-button color=\"warn\" (click)=\"logout()\" *ngIf=\"loggedIn()\">\n  <md-icon class=\"md-24\" aria-label=\"logout button\">power_settings_new</md-icon>\n</button>"

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-logout/tht-logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThtLogoutComponent = (function () {
    function ThtLogoutComponent(router) {
        this.router = router;
    }
    ThtLogoutComponent.prototype.ngOnInit = function () {
    };
    ThtLogoutComponent.prototype.loggedIn = function () {
        if (localStorage &&
            localStorage.token &&
            localStorage.userid) {
            return true;
        }
    };
    ThtLogoutComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/');
    };
    return ThtLogoutComponent;
}());
ThtLogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-logout',
        template: __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-logout/tht-logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-logout/tht-logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ThtLogoutComponent);

var _a;
//# sourceMappingURL=tht-logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-register/tht-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tht-register-form, .input-container {\r\n    display: block;\r\n    padding: 25px;\r\n}\r\n\r\n.register-button {\r\n    margin: 25px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.input-container.ng-invalid.ng-touched {\r\n    /* border: 1px solid red; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-register/tht-register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"tht-register-form\" (ngSubmit)=\"onRegister(registerForm)\" #registerForm=\"ngForm\">\n    <md-form-field class=\"input-container\">\n     <input mdInput placeholder=\"Please enter your first name\" type=\"text\" required ngModel name=\"first_name\">\n   </md-form-field>\n   <md-form-field class=\"input-container\">\n     <input mdInput placeholder=\"Please enter your last name\" type=\"text\" required ngModel name=\"last_name\">\n   </md-form-field>\n   <md-form-field class=\"input-container\">\n     <input mdInput placeholder=\"Please enter your email\" type=\"email\" required ngModel name=\"email\">\n   </md-form-field>\n   <md-form-field class=\"input-container\">\n     <input mdInput placeholder=\"Please enter your password\" type=\"password\" required ngModel name=\"password\">\n   </md-form-field>\n   <br/>\n   <button md-button md-raised-button [color]=\"accent\" type=\"submit\" class=\"register-button\" [disabled]=\"!registerForm.valid\">Register</button>\n </form>"

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-authentication/tht-register/tht-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThtRegisterComponent = (function () {
    function ThtRegisterComponent(dataService) {
        this.dataService = dataService;
    }
    ThtRegisterComponent.prototype.ngOnInit = function () {
    };
    ThtRegisterComponent.prototype.onRegister = function (form) {
        var url = 'http://localhost:3000/users';
        this.dataService.onCreate(form.value, url)
            .subscribe(function (data) { return console.log(data); });
        form.resetForm();
    };
    return ThtRegisterComponent;
}());
ThtRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-register',
        template: __webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-register/tht-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-app-views/tht-authentication/tht-register/tht-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ThtRegisterComponent);

var _a;
//# sourceMappingURL=tht-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-playground/tht-playground.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-playground/tht-playground.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>Playground</md-card-title>\n    <md-card-subtitle>Playground input card with JSON controls</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <tht-controls *ngFor=\"let control of controls\"></tht-controls>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-playground/tht-playground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtPlaygroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_management_service__ = __webpack_require__("../../../../../src/services/data-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThtPlaygroundComponent = (function () {
    function ThtPlaygroundComponent(dataManagementService, dataService) {
        this.dataManagementService = dataManagementService;
        this.dataService = dataService;
        this.entity = 'recipes';
    }
    ThtPlaygroundComponent.prototype.ngOnInit = function () {
        // this.dataManagementService.getControlsByEntity(this.entity); 
        //   this.dataService.onRead('someurl')
        //   .subscribe(
        //     (response: Response) => {
        //       this.controls = response.json();
        //     },
        //     (error) => console.log(error)
        //   );
        //   console.log(this.controls);
    };
    return ThtPlaygroundComponent;
}());
ThtPlaygroundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-playground',
        template: __webpack_require__("../../../../../src/app/tht-app-views/tht-playground/tht-playground.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-app-views/tht-playground/tht-playground.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_management_service__["a" /* DataManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_management_service__["a" /* DataManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], ThtPlaygroundComponent);

var _a, _b;
//# sourceMappingURL=tht-playground.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-recipes/tht-recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".entity-container {\n    position: relative;\n}\n\n.add-record-dialogue-area {\n    margin-bottom: 30px;\n    height: 50px;\n}\n\n.list-overview {\n    margin: 30px 10px;\n    border: 2px solid rgba(0,0,0,.5);\n}\n\n.detail-overview {\n    margin: 30px 10px;\n    border: 2px solid rgba(0,0,0,.5);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-recipes/tht-recipes.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"entity-container\"\n        fxLayout\n        fxLayout.xs=\"column\"\n        fxLayoutAlign=\"center\"\n        fxLayoutGap=\"10px\"\n        fxLayoutGap.xs=\"0\">\n    <div class=\"list-overview\" fxFlex fxFlexOffset=\"50px\"  fxFlexOffset.xs=\"0\">\n        <tht-list [listRecord]=\"record\"></tht-list>\n    </div>\n    <div class=\"detail-overview\" fxFlex=\"500px\" *ngIf=\"entity === 'recipes'\">\n      <tht-detail *ngIf = \"selectedRecord; else infoText\"\n                  [recipe] = \"selectedRecord\"></tht-detail>\n      <ng-template #infoText>\n        <p>Please select a record</p>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"add-record-dialogue-area\">\n    <tht-add-record-dialogue (recordCreated)=\"onRecordCreated($event)\" ></tht-add-record-dialogue>\n  </div>\n  <div class=\"shopping-list-container\">\n    <tht-information-card></tht-information-card>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-recipes/tht-recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtRecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_feature_services_recipe_service__ = __webpack_require__("../../../../../src/services/feature services/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThtRecipesComponent = (function () {
    function ThtRecipesComponent(dataService, recipeService, router) {
        this.dataService = dataService;
        this.recipeService = recipeService;
        this.router = router;
        this.records = [];
    }
    ThtRecipesComponent.prototype.onRecordCreated = function (recordData) {
        this.records.push({
            name: recordData.name,
            recipe_name: recordData.recipe_name,
            timestamp: recordData.timestamp
        });
    };
    ThtRecipesComponent.prototype.onChosenMenuItem = function (menuData, sidenavElement) {
        this.entity = menuData.chosenMenuItem;
        // TODO: Implement routing navigation from menu over here
        sidenavElement.close();
    };
    ThtRecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.records = this.dataService.records;
        this.url = this.router.url;
        this.entity = this.url.substring(1);
        this.recipeService.entitySelected
            .subscribe(function (recipe) {
            _this.selectedRecord = recipe;
        });
    };
    ThtRecipesComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes);
        // console.log(this.router);
    };
    return ThtRecipesComponent;
}());
ThtRecipesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tht-recipes',
        template: __webpack_require__("../../../../../src/app/tht-app-views/tht-recipes/tht-recipes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-app-views/tht-recipes/tht-recipes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_feature_services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_feature_services_recipe_service__["a" /* RecipeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ThtRecipesComponent);

var _a, _b, _c;
//# sourceMappingURL=tht-recipes.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tht-stocks-and-shares works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtStocksAndSharesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThtStocksAndSharesComponent = (function () {
    function ThtStocksAndSharesComponent() {
    }
    ThtStocksAndSharesComponent.prototype.ngOnInit = function () {
    };
    return ThtStocksAndSharesComponent;
}());
ThtStocksAndSharesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tht-stocks-and-shares',
        template: __webpack_require__("../../../../../src/app/tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThtStocksAndSharesComponent);

//# sourceMappingURL=tht-stocks-and-shares.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-controls/tht-controls.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-controls/tht-controls.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controls-container\" [ngSwitch]=\"control.ControlType\">\n   <span class=\"tht-date-input\" *ngSwitchCase=\"control.ControlType === DateTimeControl\">\n    <md-form-field>\n        <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n        <md-datepicker #picker></md-datepicker>\n    </md-form-field>\n  </span>\n  <span class=\"tht-input-field\" *ngSwitchCase=\"control.ControlType === InputFieldControl\">\n    <md-form-field>\n      <input mdInput placeholder=\"control.DisplayName\" type=\"text\">\n    </md-form-field>\n  </span>\n  <span class=\"tht-input-field\" *ngSwitchCase=\"control.ControlType === NumberControl\">\n    <md-form-field>\n      <input mdInput placeholder=\"control.DisplayName\" type=\"number\">\n    </md-form-field>\n  </span>\n  <!-- <span class=\"tht-textarea\" *ngSwitchCase=\"control.ControlType === TextAreaControl\">\n    <md-form-field>\n      <textarea mdInput placeholder=\"control.DisplayName\">\n      <md-hint [align]=\"end\" *ngIf=\"control.ToolTip !== null\">{{ control.ToolTip }}</md-hint>\n    </md-form-field>\n  </span> -->\n  <span class=\"tht-checkbox-control\" *ngSwitchCase=\"control.ControlType === CheckBoxControl\">\n    <md-checkbox class=\"tht-checkbox-control\" [align]=\"control.LabelPosition\"> {{ control.DisplayName }} </md-checkbox>\n  </span>\n  <span class=\"tht-radio-button-control\" *ngSwitchCase=\"control.ControlType === RadioButtonControl\">\n    <div class=\"tht-radio-button-control-type\">\n      <span class=\"tht-radio-button-control-group\" *ngIf=\"control.RadioButtonConfig === RadioButtonGroupDisplay\">\n        <md-radio-group class=\"tht-radio-button-group-control\">\n          <md-radio-button class=\"tht-radio-button\" *ngFor=\"let option of control.Options\" [align]=\"control.LabelPosition\">\n          </md-radio-button>\n        </md-radio-group>\n      </span>\n      <span class=\"tht-single-instance-radio-button\" *ngIf=\"control.RadioButtonConfig === RadioButtonSingleInstance\">\n          <md-radio-button class=\"tht-radio-button\" [align]=\"control.LabelPosition\">\n          </md-radio-button>\n      </span>\n    </div>\n  </span>\n  <span class=\"tht-picklist-control\" *ngSwitchCase=\"control.ControlType === PickListControl\">\n  </span>\n  <span class=\"tht-slider-control\" *ngSwitchCase=\"control.ControlType === SliderControl\">\n    <md-slider  [min]=\"control.Minimum_Value\" \n                [max]=\"control.Maximum_Value\" \n                [step]=\"control.Step_Value\" \n                [thumb-label]=\"control.ThumbLabel\" \n                [tick-interval]=\"control.TickInterval\">\n    </md-slider>\n  </span>\n  <span class=\"tht-toggle-control\" *ngSwitchCase=\"control.ControlType === ToggleControl\">\n    <md-slide-toggle  class=\"tht-toggle-control\"\n                      [color]=\"control.ColorSelection\"\n                      [labelPosition]=\"control.LabelPosition\"\n                      [name]=\"control.Name\"\n                      [required]=\"control.RequiredLevel\"\n                      [id]=\"control.Id\">\n                      {{ control.DisplayName }}\n    </md-slide-toggle>\n  </span>\n  <span class=\"tht-button-control\" *ngSwitchCase=\"control.ControlType === ButtonControl\">\n  </span>\n  <span class=\"tht-chip-control\" *ngSwitchCase=\"control.ControlType === ChipControl\">\n  </span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tht-controls/tht-controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThtControlsComponent = (function () {
    function ThtControlsComponent() {
    }
    ThtControlsComponent.prototype.ngOnInit = function () {
    };
    return ThtControlsComponent;
}());
ThtControlsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-controls',
        template: __webpack_require__("../../../../../src/app/tht-controls/tht-controls.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-controls/tht-controls.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], ThtControlsComponent);

//# sourceMappingURL=tht-controls.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-detail/tht-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail-ingredient-list {\n    display: block;\n}\n\n.detail-ingredient-list p, .detail-ingredient-list md-icon {\n    display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-detail/tht-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>{{recipe.name}}</p>\n<p>{{recipe.recipename}}</p>\n\n<md-list>\n    <md-list-item *ngFor=\"let ingredient of ingredients\" class=\"detail-ingredient-list\">\n        <p md-line>{{ingredient.name}}&nbsp; ({{ingredient.amount}})</p>\n        <md-icon md-list-icon (click)=\"onAddItemToShoppingList(ingredient)\">add_circle_outline</md-icon>\n    </md-list-item>\n</md-list>"

/***/ }),

/***/ "../../../../../src/app/tht-detail/tht-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_recipe_model__ = __webpack_require__("../../../../../src/models/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__ = __webpack_require__("../../../../../src/services/feature services/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_feature_services_shopping_list_service__ = __webpack_require__("../../../../../src/services/feature services/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThtDetailComponent = (function () {
    function ThtDetailComponent(shoppingListService, recipeService) {
        this.shoppingListService = shoppingListService;
        this.recipeService = recipeService;
    }
    ThtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.shoppingListService.getIngredients();
        this.recipeService.entitySelected
            .subscribe(function (recipe) {
            _this.selectedRecord = recipe;
            console.log(_this.selectedRecord);
        });
    };
    ThtDetailComponent.prototype.onAddItemToShoppingList = function (ingredient) {
        // this.name = ingredient.name;
        // this.amount = ingredient.amount;
        this.shoppingListService.addIngredientsToShoppingList(ingredient);
    };
    return ThtDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_recipe_model__["a" /* Recipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_recipe_model__["a" /* Recipe */]) === "function" && _a || Object)
], ThtDetailComponent.prototype, "recipe", void 0);
ThtDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-detail',
        template: __webpack_require__("../../../../../src/app/tht-detail/tht-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-detail/tht-detail.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_feature_services_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_feature_services_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__["a" /* RecipeService */]) === "function" && _c || Object])
], ThtDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=tht-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-information-card/tht-information-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shopping-list {\n    max-width: 400px;\n    margin: 10px auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-information-card/tht-information-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shopping-list\">\n  <md-card class=\"information-card\">\n    <md-card-header>\n      <md-card-title> Shopping list </md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <md-card-subtitle>Items selected</md-card-subtitle>\n      <ul class=\"simple-list\">\n        <li class=\"example-for-add\" *ngFor=\"let ingredientOnShoppingList of ingredientsOnShoppingList\">{{ingredientOnShoppingList.name}}&nbsp; ({{ingredientsOnShoppingList.amount}})\n        </li>\n      </ul>\n    </md-card-content>\n    <md-card-actions align=\"end\">\n      <button md-raised-button>Save</button>\n      <button md-raised-button>Buy online</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tht-information-card/tht-information-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtInformationCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_feature_services_shopping_list_service__ = __webpack_require__("../../../../../src/services/feature services/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThtInformationCardComponent = (function () {
    function ThtInformationCardComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ThtInformationCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingListService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredientsOnShoppingList = ingredients;
        });
    };
    return ThtInformationCardComponent;
}());
ThtInformationCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-information-card',
        template: __webpack_require__("../../../../../src/app/tht-information-card/tht-information-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-information-card/tht-information-card.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_feature_services_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_feature_services_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object])
], ThtInformationCardComponent);

var _a;
//# sourceMappingURL=tht-information-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-input-card/tht-input-card/tht-input-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-input-card/tht-input-card/tht-input-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>\n      Add you something\n    </md-card-title>\n  </md-card-header>\n  <md-card-content>\n    <!-- <tht-controls></tht-controls>  -->\n    Add controls here\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/tht-input-card/tht-input-card/tht-input-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtInputCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThtInputCardComponent = (function () {
    function ThtInputCardComponent() {
    }
    ThtInputCardComponent.prototype.ngOnInit = function () {
    };
    return ThtInputCardComponent;
}());
ThtInputCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tht-input-card',
        template: __webpack_require__("../../../../../src/app/tht-input-card/tht-input-card/tht-input-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-input-card/tht-input-card/tht-input-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThtInputCardComponent);

//# sourceMappingURL=tht-input-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-data-table/tht-data-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 300px;\r\n    margin: 20px 15px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    border: 1px solid #000;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-left: 24px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  md-header-row {\r\n    border-top: 3px solid #000;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n  }\r\n\r\n  .call-to-detail-link {\r\n      cursor: pointer;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-data-table/tht-data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n    <md-table #table [dataSource]=\"dataSource\">\n  \n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n  \n      <!-- ID Column -->\n      <ng-container cdkColumnDef=\"recipeName\">\n        <md-header-cell *cdkHeaderCellDef> Recipe name </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\" \n                  class=\"call-to-detail-link\"\n                  (click)=\"callToDetail(row)\"> {{row.recipename}} </md-cell>\n      </ng-container>\n  \n      <!-- Progress Column -->\n      <ng-container cdkColumnDef=\"CostsPP\">\n        <md-header-cell *cdkHeaderCellDef> Costs P/Person </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\"> {{row.costs}} </md-cell>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container cdkColumnDef=\"userName\">\n        <md-header-cell *cdkHeaderCellDef> Name </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\"> {{row.name}} </md-cell>\n      </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container cdkColumnDef=\"Category\">\n        <md-header-cell *cdkHeaderCellDef>Category</md-header-cell>\n        <md-cell *cdkCellDef=\"let row\"> {{row.category}} </md-cell>\n      </ng-container>\n  \n      <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\n      <md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row>\n    </md-table>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-data-table/tht-data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtDataTableComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notification_service__ = __webpack_require__("../../../../../src/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_feature_services_recipe_service__ = __webpack_require__("../../../../../src/services/feature services/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Data table specific imports








var ThtDataTableComponent = (function () {
    function ThtDataTableComponent(recipeService, dataService, notificationService) {
        this.recipeService = recipeService;
        this.dataService = dataService;
        this.notificationService = notificationService;
        this.displayedColumns = ['recipeName', 'userName', 'CostsPP', 'Category'];
        this.recordSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // this.records = recipeService.getRecipes();
        // console.log(this.records);
    }
    ThtDataTableComponent.prototype.ngOnInit = function () {
        // Set timeout below is implemented as a workaround for a Angular Material Datatable issue of listening to two changes before showing
        setTimeout(function () {
        });
        this.exampleDatabase = new ExampleDatabase(this.dataService, this.notificationService);
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
    };
    ThtDataTableComponent.prototype.ngAfterViewInit = function () {
        // this.dataSource = new ExampleDataSource(this.exampleDatabase);
    };
    ThtDataTableComponent.prototype.ngOnChanges = function (changes) {
    };
    ThtDataTableComponent.prototype.callToDetail = function (record) {
        this.record = record;
        this.recordSelected.emit(this.record);
        // when the detail component and data via service can be loaded you can search in the recipes with recipe name or maybe I can use 
        // the id of the record in a hidden column
    };
    return ThtDataTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ThtDataTableComponent.prototype, "recordSelected", void 0);
ThtDataTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-data-table',
        template: __webpack_require__("../../../../../src/app/tht-list/tht-data-table/tht-data-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-list/tht-data-table/tht-data-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_feature_services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_feature_services_recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], ThtDataTableComponent);

/** Constants used to fill up our data base. */
var CATEGORY = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = (function () {
    function ExampleDatabase(dataService, notificationService) {
        this.dataService = dataService;
        this.notificationService = notificationService;
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.names = [];
        this.recipeNames = [];
        this.tablefilling = [];
        this.getData();
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ExampleDatabase.prototype.getData = function () {
        var _this = this;
        this.url = 'http://localhost:3000/recipes';
        this.dataService.onRead(this.url)
            .subscribe(function (response) {
            _this.result = response;
            _this.records = _this.result.obj;
            for (var i = 0; i < _this.records.length; i++) {
                // this.addUser(this.records); 
                _this.names.push(_this.records[i].username);
                _this.recipeNames.push(_this.records[i].recipe_name);
                _this.tablefilling.push(_this.createNewUser(_this.names[i], _this.recipeNames[i]));
            }
            _this.dataChange.next(_this.tablefilling);
        }, function (error) { return console.log(error); });
    };
    ExampleDatabase.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.successNotificationTriggered
            .subscribe(function (success) {
            _this.success = success;
            console.log(_this.success);
        });
    };
    ExampleDatabase.prototype.ngOnChanges = function () {
        this.getData();
    };
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function (records) {
        // const copiedData = [];
        // copiedData.push(records);
        // copiedData.push(this.createNewUser(copiedData));
        // console.log(copiedData);
        // this.dataChange.next(copiedData[1]);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function (usernames, recipenames) {
        var name = usernames;
        var recipename = recipenames;
        return {
            recipename: recipename,
            name: name,
            costs: Math.round(Math.random() * 100).toString(),
            category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["n" /* DataSource */]));

var _a, _b, _c;
//# sourceMappingURL=tht-data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-grid-list/tht-grid-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-grid-list/tht-grid-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tht-grid-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-grid-list/tht-grid-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtGridListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThtGridListComponent = (function () {
    function ThtGridListComponent() {
    }
    ThtGridListComponent.prototype.ngOnInit = function () {
    };
    return ThtGridListComponent;
}());
ThtGridListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tht-grid-list',
        template: __webpack_require__("../../../../../src/app/tht-list/tht-grid-list/tht-grid-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-list/tht-grid-list/tht-grid-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThtGridListComponent);

//# sourceMappingURL=tht-grid-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-button-focus-overlay {\r\n    background: transparent!important;\r\n}\r\n\r\n.list-view-container {\r\n    margin: 30px 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- first example of making a list of items without any dynamic cool features -->\n<!-- <div>\n    <div>\n        <label>Add List item name</label>\n        <input type=\"text\"\n        class=\"list-item-input-control\"\n        [(ngModel)]=\"listItemName\">\n    </div>\n  <br />\n  <br />\n  <br />\n  <br />\n  <button md-raised-button color=\"warn\" (click)=\"onAddNewListItem()\">Add list item</button>\n  <br />\n  <br />\n  <br />\n  <br />\n  <div>\n    <label>List of items</label>\n    !!!!basic example of using an *ngFor (ng-repeat in AngularJS) loop, with an index and conditional styling !!!!!\n    <ul>\n      <li *ngFor=\"let item of listItems; let i = index\" [ngStyle]=\"{backgroundColor: i < 5 ? 'lightgreen' : i < 8 ? 'orange' : 'red'}\">{{ item }}</li>\n    </ul>\n  </div>  \n\n</div> -->\n\n<!-- Second example of making a list of items, with a static model, so a little bit more dynamic -->\n<!-- <div>\n  <ul>\n    <li *ngFor=\"let item of listItems; let i = index\">\n      <span class=\"recipe-name\"> {{ item.name }}</span>\n      <span class=\"recipe-description\"> {{ item.description }}</span>\n      <br />\n      <div class=\"recipe-image-container\">\n        <img \n          src =\"{{item.imagePath}}\"\n          alt = \"{{item.name}}\"\n          class=\"recipe-image\">\n          ///alternative for src is [src] = \"item.imagePath\" \n      </div>\n    </li>\n  </ul>\n</div> -->\n\n<!-- <div class=\"some-practice-list\">\n  <ul class=\"practice-ul\">\n    <li>{{record.name}}</li>\n    <li (click)=\"onSelected()\">{{record.recipe_name}}</li>\n    <li>{{record.imagePath}}</li>\n  </ul>\n</div> -->\n\n<!-- Final list view is datatable or grid -list (user pick) -->\n<div class=\"list-view-container\">\n  <span class=\"list-view-button-container\">\n    <button md-button>\n      <md-icon>view_list</md-icon>\n    </button>\n  </span>\n  <span class=\"grid-list-view-button-container\">\n    <button md-button-raised>\n      <md-icon>dashboard</md-icon>\n    </button>\n  </span>\n  <tht-data-table (recordSelected) = \"onRecordSelected($event)\"></tht-data-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tht-list/tht-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_recipe_model__ = __webpack_require__("../../../../../src/models/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__ = __webpack_require__("../../../../../src/services/feature services/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Import the model here to to use it below by defining where listItems will be coming from (Recipe object from the model)

var ThtListComponent = (function () {
    function ThtListComponent(recipeService) {
        this.recipeService = recipeService;
    }
    ThtListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ThtListComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeService.getRecipes();
    };
    // onSelected(){
    //   this.recipeService.entitySelected.emit(this.record);
    // }
    ThtListComponent.prototype.onRecordSelected = function (recordData) {
        this.selectedRecord = recordData;
        // console.log(this.selectedRecord);
        this.recipeService.entitySelected.emit(this.selectedRecord);
    };
    return ThtListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('listRecord'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_recipe_model__["a" /* Recipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_recipe_model__["a" /* Recipe */]) === "function" && _a || Object)
], ThtListComponent.prototype, "record", void 0);
ThtListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-list',
        template: __webpack_require__("../../../../../src/app/tht-list/tht-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-list/tht-list.component.css")],
        providers: []
    })
    // First static component, without interaction possibilities with other components
    // export class ThtListComponent implements OnInit {
    //   // listItems = ['Item 1', 'Item 2']; Static way of setting an array of items for*ngFor
    // More dynamic way of creating an array of items for *ngFor, for now making use of a static (no live data) model
    //   listItemName = '';
    //   constructor() { }
    //   ngOnInit() {
    //   }
    //   // onAddNewListItem() {
    //   //   this.listItems.push(this.listItemName);
    //   // }
    // }
    // Below we added code to be able to communicate between multiple components
    // In the use case here we want to show a record added by the dialogue to be added to the overview list
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_feature_services_recipe_service__["a" /* RecipeService */]) === "function" && _b || Object])
], ThtListComponent);

var _a, _b;
//# sourceMappingURL=tht-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar-templates/tht-error-snackbar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-center-container\">\r\n    <div class=\"error-notification\">\r\n        <h3 class=\"error-title\">{{ error?.title }}</h3>\r\n        <p class=\"error-type\">Origination: {{ error?.type }}\r\n        <p class=\"error-message\">Cause: {{ error?.message}}</p>\r\n        <button md-raised-button color='primary'>Register</button>\r\n        <button md-raised-button color='accent'>Try again</button>\r\n    </div>\r\n</div>\r\n      "

/***/ }),

/***/ "../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar-templates/tht-success-snackbar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-center-container\">\n    <div class=\"success-notification\">\n        <h3 class=\"success-title\">{{ success?.title }}</h3>\n        <p class=\"success-message\">{{ success?.message}}</p>\n        <button md-raised-button color='accent'>Update</button>\n        <button md-raised-button color='primary'>Close</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-title {\r\n    color: rgba(255, 51, 0, 0.75);\r\n}\r\n\r\n.success-title {\r\n    color: rgba(0, 128, 0, 0.95);\r\n}\r\n\r\n.error-message, .success-message {\r\n    color: #fff;\r\n}\r\n\r\n.error-notification, .success-notification {\r\n    background: #323232;\r\n    padding: 5%;\r\n}\r\n\r\n.mat-snack-bar-container.ng-tns-c18-9.ng-trigger.ng-trigger-state.mat-snack-bar-center {\r\n    background: rgba(255, 0, 0, 0.68);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Only needs to have some code if a button should trigger the snackbar, otherwise the error service is handling the triggering -->"

/***/ }),

/***/ "../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ThtNotificationSnackbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackBarErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SnackBarSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__("../../../../../src/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ThtNotificationSnackbarComponent = (function () {
    function ThtNotificationSnackbarComponent(snackBar, notificationService) {
        this.snackBar = snackBar;
        this.notificationService = notificationService;
    }
    ThtNotificationSnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.errorNotificationTriggered
            .subscribe(function (error) {
            _this.error = error;
            _this.componentToLoad = SnackBarErrorComponent;
            _this.openNotificationSnackBar(_this.error, _this.componentToLoad);
        });
        this.notificationService.successNotificationTriggered
            .subscribe(function (success) {
            _this.success = success;
            _this.componentToLoad = SnackBarSuccessComponent;
            _this.openNotificationSnackBar(_this.success, _this.componentToLoad);
        });
    };
    ;
    ThtNotificationSnackbarComponent.prototype.openNotificationSnackBar = function (notification, component) {
        // implement here the call to open the snack bar
        this.snackBar.openFromComponent(component, {
            duration: 5000,
            data: notification
        });
    };
    return ThtNotificationSnackbarComponent;
}());
ThtNotificationSnackbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-notification-snackbar',
        template: __webpack_require__("../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], ThtNotificationSnackbarComponent);

var SnackBarErrorComponent = (function () {
    function SnackBarErrorComponent(data) {
        this.data = data;
        this.error = {
            type: String,
            title: String,
            message: String,
            severity: String
        };
        this.error.type = data.type;
        this.error.title = data.title;
        this.error.message = data.message;
        this.error.severity = data.severity;
    }
    return SnackBarErrorComponent;
}());
SnackBarErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'error-snackbar',
        template: __webpack_require__("../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar-templates/tht-error-snackbar.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar.component.css")],
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_SNACK_BAR_DATA */])),
    __metadata("design:paramtypes", [Object])
], SnackBarErrorComponent);

var SnackBarSuccessComponent = (function () {
    function SnackBarSuccessComponent(data) {
        this.data = data;
        this.success = {
            type: String,
            title: String,
            message: String,
            severity: String
        };
        this.success.type = data.type;
        this.success.title = data.title;
        this.success.message = data.message;
        this.success.severity = data.severity;
    }
    return SnackBarSuccessComponent;
}());
SnackBarSuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'success-snackbar',
        template: __webpack_require__("../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar-templates/tht-success-snackbar.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-notification-snackbar/tht-notification-snackbar.component.css")],
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_SNACK_BAR_DATA */])),
    __metadata("design:paramtypes", [Object])
], SnackBarSuccessComponent);

var _a, _b;
//# sourceMappingURL=tht-notification-snackbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-toolbar/tht-menu/tht-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .itemNotCreated {\r\n    color: white;\r\n} */\r\n\r\n.tht-menu-list-item {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    cursor: pointer;\r\n    padding-left: 20px;\r\n    padding-top: 10px; \r\n    border-bottom: 1px solid rgba(0,0,0, 0.5);\r\n}\r\n\r\n.tht-menu-list-item:nth-child(1) {\r\n    padding-top: 20px;\r\n}\r\n\r\n.tht-menu-list-item p {\r\n    margin: 10px 0;\r\n    padding: 5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menu-header {\r\n    width: 100%;\r\n    height: 64px;\r\n    background: rgb(38, 13, 173);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-toolbar/tht-menu/tht-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Tutorial code -->\r\n<!-- <p>This will become the menu component</p>\r\n<p>The first menu item will be {{ menuItem }} and it has the following icon {{ icon }}, which will lead you to {{ getMenuContent() }}</p>\r\n<br/>\r\n<br/>\r\n<hr>\r\n<p>Here we are going to experiment with Angular Material buttons</p>\r\n<label>Menu item name</label> -->\r\n\r\n<!-- One way databinding  -->\r\n<!-- <input type=\"text\"\r\nclass=\"menu-item-input-control\"\r\n(input)=\"onUpdateMenuItemName($event)\"> -->\r\n\r\n<!-- Two way data binding  -->\r\n<!-- <input type=\"text\"\r\nclass=\"menu-item-input-control\"\r\n[(ngModel)]=\"menuItemName\"> -->\r\n<!-- <p>{{ menuItemName }}</p> -->\r\n\r\n<!-- event and property binding, and some angular material -->\r\n<!-- <button md-raised-button [disabled]=\"!allowNewMenuItem\" color=\"warn\" (click)=\"onAddNewMenuItem()\">Add menu item</button> -->\r\n<!-- above you saw an example of property binding, you can bind on all html element attributes -->\r\n<!-- the click between parentheses signifies a click event executing a method in the typescript file -->\r\n<!-- theoretically you can add a class to a classList very easily in this case -->\r\n<!-- <p [innerText]=\"allowNewMenuItem\"></p> -->\r\n<!-- <p> {{ addNewMenuItem }}</p> -->\r\n\r\n<!-- conditionally showing with help of *ngIf (true || false), can do direct check, with a method being performed to decide if true || false, or like below on some event/variable\r\n    that triggers the condition to be either true or false -->\r\n<!-- <p *ngIf=\"menuItemCreated; else noMenuItem\">{{ addNewMenuItem }}</p> -->\r\n<!-- example *ngIf else condition> -->\r\n<!-- ng-template can be used to mark places in the DOM -->\r\n\r\n<!-- also an example of ngStyle, both syntax for using a method to determine the color or setting the color directly -->\r\n<!-- also added an example of ngClass, class itemNotCreaed only gets added when menuItemCreated equals false -->\r\n<!-- <ng-template #noMenuItem> -->\r\n    <!-- <p [ngStyle]=\"{backgroundColor: getColor()}\">No menu item was created</p> -->\r\n    <!-- <p [ngStyle]=\"{'background-color': 'purple'}\" [ngClass]=\"{itemNotCreated: menuItemCreated === false }\">No menu item was created</p>\r\n</ng-template> -->\r\n<div class=\"tht-menu\">\r\n    <div class=\"menu-header\">\r\n    </div>\r\n    <md-nav-list class=\"menu-list\">\r\n        <md-list-item class=\"tht-menu-list-item\" (click)=\"navigateTo($event)\">\r\n            <md-icon md-list-icon>restaurant_menu</md-icon>\r\n            <p class=\"menu-item-title\">Food</p>\r\n            <!-- alternative ways -->\r\n            <!-- <p class=\"menu-item-title\"><a routerLink=\"/recipes\">Food</a></p> -->\r\n            <!-- after the slash is in case you go for recipes/singleid -->\r\n            <!-- <p class=\"menu-item-title\"><a [routerLink]=\"[/recipes]\" / \"['/recipes', 'someid' ]\">Food</a></p> -->\r\n        </md-list-item>\r\n        <md-list-item class=\"tht-menu-list-item\" (click)=\"navigateTo($event)\">\r\n            <md-icon md-list-icon>euro_symbol</md-icon>\r\n            <p class=\"menu-item-title\">Finance</p>\r\n        </md-list-item>\r\n        <md-list-item class=\"tht-menu-list-item\" (click)=\"navigateTo($event)\">\r\n            <md-icon md-list-icon>accessibility</md-icon>\r\n            <p class=\"menu-item-title\">Body</p>\r\n        </md-list-item>\r\n        <md-list-item class=\"tht-menu-list-item\" (click)=\"navigateTo($event)\">\r\n            <md-icon md-list-icon>euro_symbol</md-icon>\r\n            <p class=\"menu-item-title\">playground</p>\r\n        </md-list-item>\r\n    </md-nav-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tht-toolbar/tht-menu/tht-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThtMenuComponent = (function () {
    function ThtMenuComponent(router) {
        this.router = router;
        this.menuChoice = '';
        this.menuItemChosen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ThtMenuComponent.prototype.navigateTo = function (event) {
        this.menuChoice = event.target.textContent;
        this.menuItemChosen.emit({
            chosenMenuItem: this.menuChoice
        });
        console.log(this.menuChoice);
        this.router.navigate([this.menuChoice]);
    };
    return ThtMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ThtMenuComponent.prototype, "menuItemChosen", void 0);
ThtMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-menu',
        // other possible ways of referencing the selector
        // selector: '[tht-menu]' --> referenced in html as <div tht-menu></div>
        // selector: '.tht-menu' --> referenced in html as <div class='tht-menu'></div>
        // When using it as a component, best practice is to use the uncommented way
        template: __webpack_require__("../../../../../src/app/tht-toolbar/tht-menu/tht-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-toolbar/tht-menu/tht-menu.component.css")]
    })
    // example class made during tutorial
    // export class ThtMenuComponent {
    //     allowNewMenuItem = false;
    //     addNewMenuItem = 'No new item could be added at this time';
    //     menuItemName = '';
    //     menuItemCreated = false;
    //     constructor () {
    //         // ES6 syntax () => is essentially the same as function() with some differences in use of this-keyword.
    //         setTimeout( () => {
    //             this.allowNewMenuItem = true;
    //         }, 2000)
    //     }
    //     icon: string = "restaurant";
    //     menuItem: string = "Food";
    //     getMenuContent() {
    //         return this.menuItem;
    //     }
    //     onAddNewMenuItem() {
    //         this.menuItemCreated = true;
    //         this.addNewMenuItem = "Menu item has been added, " + this.menuItemName  + " thank you"; 
    //     }
    //     onUpdateMenuItemName(event :any) {
    //         this.menuItemName = event.target.value;
    //     }
    // }
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ThtMenuComponent);

var _a;
//# sourceMappingURL=tht-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/tht-toolbar/tht-toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tht-toolbar/tht-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tht-toolbar\">\n  <md-toolbar color='primary' >\n      <span>Total Health Track</span>\n      <span class=\"example-fill-remaining-space\"></span>\n      <button md-icon-button color=\"accent\" *ngIf=\"loggedIn()\">\n        <md-icon aria-label=\"Go to profile by clicking on this button\">face</md-icon>\n      </button>\n      <tht-logout></tht-logout>\n      <button type=\"button\" md-button (click)=\"openSidenav()\" *ngIf=\"loggedIn()\">\n        <md-icon>menu</md-icon>\n      </button>\n  </md-toolbar>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tht-toolbar/tht-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThtToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThtToolbarComponent = (function () {
    function ThtToolbarComponent() {
        this.menuActivated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ThtToolbarComponent.prototype.openSidenav = function () {
        this.menuActivated.emit({});
    };
    ThtToolbarComponent.prototype.ngOnInit = function () {
    };
    ThtToolbarComponent.prototype.loggedIn = function () {
        if (localStorage.getItem('token') !== null &&
            localStorage.getItem('userid') !== null) {
            return true;
        }
    };
    return ThtToolbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ThtToolbarComponent.prototype, "menuActivated", void 0);
ThtToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tht-toolbar',
        template: __webpack_require__("../../../../../src/app/tht-toolbar/tht-toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tht-toolbar/tht-toolbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThtToolbarComponent);

//# sourceMappingURL=tht-toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/notification.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var Notification = (function () {
    function Notification(type, title, message, severity) {
        this.type = type;
        this.title = title;
        this.message = message;
        this.severity = severity;
    }
    return Notification;
}());

//# sourceMappingURL=notification.model.js.map

/***/ }),

/***/ "../../../../../src/models/recipe.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
// Elaborate but good for beginning
// export class Recipe {
//     public name         : string;
//     public description  : string;
//     public imagePath    : string;
//     constructor(name:string, desc:string, imagePath: string) {
//         this.name           = name;
//         this.description    = desc;
//         this.imagePath      = imagePath;
//     }
// }
// Much more shorthand notation
var Recipe = (function () {
    function Recipe(recipe_name, description, imagePath, ingredients, category, id, user, date_created, date_updated, username) {
        this.recipe_name = recipe_name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.category = category;
        this.id = id;
        this.user = user;
        this.date_created = date_created;
        this.date_updated = date_updated;
        this.username = username;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.model.js.map

/***/ }),

/***/ "../../../../../src/models/shoppinglist.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListItem; });
var ShoppingListItem = (function () {
    function ShoppingListItem(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return ShoppingListItem;
}());

//# sourceMappingURL=shoppinglist.model.js.map

/***/ }),

/***/ "../../../../../src/services/data-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManagementService; });
var DataManagementService = (function () {
    function DataManagementService() {
    }
    DataManagementService.prototype.getCollection = function (entity) {
    };
    DataManagementService.prototype.getEntity = function () {
    };
    DataManagementService.prototype.getControls = function () {
    };
    DataManagementService.prototype.getControlsByEntity = function (entity) {
        // this.chosenentity = entity;
        // return this.chosenentity.slice();
    };
    return DataManagementService;
}());

//# sourceMappingURL=data-management.service.js.map

/***/ }),

/***/ "../../../../../src/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_service__ = __webpack_require__("../../../../../src/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
        this.records = [];
    }
    DataService.prototype.onRead = function (url) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        return this.http.get(url, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.notificationService.handleOnError(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json());
        });
    };
    DataService.prototype.onCreate = function (dataObject, url) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        if (url === 'http://localhost:3000/recipes') {
            var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
            var user = localStorage.getItem('userid') ? '&userid=' + localStorage.getItem('userid') : '';
            url = url + token + user;
        }
        return this.http.post(url, dataObject, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.notificationService.handleOnError(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json());
        });
    };
    DataService.prototype.onUpdate = function (dataObject, id) {
    };
    DataService.prototype.onDelete = function (dataObject, id) {
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/services/feature services/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var RecipeService = (function () {
    function RecipeService() {
        this.entitySelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.recipes = [];
    }
    // Replace the new Recipe stuff to the component
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.postRecipes = function () {
        // Call the DataService onCreate method here
    };
    return RecipeService;
}());

//# sourceMappingURL=recipe.service.js.map

/***/ }),

/***/ "../../../../../src/services/feature services/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_shoppinglist_model__ = __webpack_require__("../../../../../src/models/shoppinglist.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");


var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.ingredients = [
            new __WEBPACK_IMPORTED_MODULE_0__models_shoppinglist_model__["a" /* ShoppingListItem */]('Tomatoes', '5'),
            new __WEBPACK_IMPORTED_MODULE_0__models_shoppinglist_model__["a" /* ShoppingListItem */]('Fusili', '200 Grams'),
            new __WEBPACK_IMPORTED_MODULE_0__models_shoppinglist_model__["a" /* ShoppingListItem */]('Pesto', '2 Tbl')
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredientsToShoppingList = function (ingredient) {
        // console.log(ingredient);
        // let stringOfIngredients = ingredient.stringify();
        // new ShoppingListItem(ingredient[0], ingredient[1]);
        // console.log(ShoppingListItem);
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.service.js.map

/***/ }),

/***/ "../../../../../src/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_notification_model__ = __webpack_require__("../../../../../src/models/notification.model.ts");


var NotificationService = (function () {
    function NotificationService() {
        // errorOccured = new EventEmitter<Error>();
        this.errorNotificationTriggered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.successNotificationTriggered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NotificationService.prototype.handleOnError = function (notification) {
        // console.log(errorObject);
        var notificationData = new __WEBPACK_IMPORTED_MODULE_1__models_notification_model__["a" /* Notification */](notification.type, notification.title, notification.error.message, notification.severity);
        this.errorNotificationTriggered.emit(notificationData);
    };
    NotificationService.prototype.handleOnSuccess = function (notification) {
        var notificationData = new __WEBPACK_IMPORTED_MODULE_1__models_notification_model__["a" /* Notification */](notification.type, notification.title, notification.message, notification.severity);
        this.successNotificationTriggered.emit(notificationData);
    };
    return NotificationService;
}());

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/services/startup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartupService = (function () {
    function StartupService(http) {
        this.http = http;
    }
    StartupService.prototype.getApplicationFields = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var url = "http://localhost:3000/ams";
        return this.http.get(url, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    StartupService.prototype.getApplicationFieldsByApplicationComponent = function (entity, subEntity) {
    };
    return StartupService;
}());
StartupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StartupService);

var _a;
//# sourceMappingURL=startup.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map