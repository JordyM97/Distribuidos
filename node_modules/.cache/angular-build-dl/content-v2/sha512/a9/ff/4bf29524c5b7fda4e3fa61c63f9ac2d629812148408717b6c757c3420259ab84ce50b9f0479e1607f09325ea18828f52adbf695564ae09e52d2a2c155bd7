(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historial-historial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"toolbar-bg\">\r\n    <div class=\"toolbar-content\">\r\n      <ion-button fill=\"clear\" slot=\"start\">\r\n        <ion-menu-button color= \"light\" slot=\"start\"></ion-menu-button>\r\n      </ion-button>\r\n\r\n\r\n        <img class=\"center-img\" src=\"assets/imgs/logf.png\">\r\n     \r\n\r\n      <ion-avatar>\r\n        <img src=\"assets/icon/avatar.png\">\r\n      </ion-avatar>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n    <ion-list id=\"historialResultados\">\r\n      <ion-card *ngIf=\"historialViajes.length==0\">\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col></ion-col>\r\n              <ion-col>No hay viajes!</ion-col>            \r\n              <ion-col></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        \r\n      </ion-card-content>\r\n      </ion-card>\r\n      \r\n    <ion-card>\r\n      <ion-item *ngFor=\"let viaje of historialFinal\">\r\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"botonDetalles(viaje)\">Detalles</ion-button>\r\n\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row> <b>Inicio: </b>{{viaje.startAddress}} </ion-row>\r\n            <ion-row> <b>Fin: </b>{{viaje.endAddress}}  </ion-row>\r\n            <ion-row> <b>Estado: </b> <ion-label [ngStyle]=\"{'color':getColor(viaje.stateService)}\"> {{viaje.stateService === 1 ? 'Finalizado' : 'En curso'}}</ion-label>  </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-item>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/historial/historial-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/historial/historial-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HistorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageRoutingModule", function() { return HistorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial.page */ "./src/app/pages/historial/historial.page.ts");




const routes = [
    {
        path: '',
        component: _historial_page__WEBPACK_IMPORTED_MODULE_3__["HistorialPage"]
    }
];
let HistorialPageRoutingModule = class HistorialPageRoutingModule {
};
HistorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistorialPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/historial/historial.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/historial/historial.module.ts ***!
  \*****************************************************/
/*! exports provided: HistorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function() { return HistorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historial-routing.module */ "./src/app/pages/historial/historial-routing.module.ts");
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historial.page */ "./src/app/pages/historial/historial.page.ts");







let HistorialPageModule = class HistorialPageModule {
};
HistorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialPageRoutingModule"]
        ],
        declarations: [_historial_page__WEBPACK_IMPORTED_MODULE_6__["HistorialPage"]]
    })
], HistorialPageModule);



/***/ }),

/***/ "./src/app/pages/historial/historial.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/historial/historial.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yaWFsL0M6XFxVc2Vyc1xcbWVkaW5cXERvY3VtZW50c1xcRVNQT0xcXFNvZnR3YXJlMVxcREVWXFxWZWhpY3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxoaXN0b3JpYWxcXGhpc3RvcmlhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcmlhbC9oaXN0b3JpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcmlhbC9oaXN0b3JpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJpb24tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/historial/historial.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/historial/historial.page.ts ***!
  \***************************************************/
/*! exports provided: HistorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPage", function() { return HistorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let HistorialPage = class HistorialPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.historialFinal = [];
    }
    ngOnInit() {
        this.historialViajes = this.authService.getHistorial();
        console.log(this.historialViajes);
        this.historialViajes.slice().reverse().forEach(element => {
            if (element.startidLocation != null) {
                this.historialFinal.push(element);
            }
        });
    }
    botonDetalles(element) {
        this.detallesViaje = element;
        this.router.navigate(['historial-detalle/' + JSON.stringify(this.detallesViaje)]);
    }
    getDetallesViaje() {
        return this.detallesViaje;
    }
    getColor(estado) {
        switch (estado) {
            case 1:
                return 'red';
            case 0:
                return 'green';
        }
    }
};
HistorialPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HistorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historial',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./historial.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./historial.page.scss */ "./src/app/pages/historial/historial.page.scss")).default]
    })
], HistorialPage);



/***/ })

}]);
//# sourceMappingURL=pages-historial-historial-module-es2015.js.map