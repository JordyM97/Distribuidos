(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comentarios-sugerencias-comentarios-sugerencias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"toolbar-bg\">\r\n    <div class=\"toolbar-content\">\r\n      <ion-button fill=\"clear\" slot=\"start\">\r\n        <ion-menu-button color=\"light\" slot=\"start\"></ion-menu-button>\r\n      </ion-button>\r\n\r\n\r\n      <ion-title class=\"ion-text-center\" text-capitalize>\r\n        Comentarios y sugerencias\r\n      </ion-title>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-progress-bar [value]=\"uploadProgress\" color=\"success\" ></ion-progress-bar>\r\n  <ion-grid>\r\n    <ion-col>\r\n      \r\n      <ion-row>\r\n        <ion-item class=\"tipo\">\r\n          <ion-label  position=\"floating\">Tipo:</ion-label>\r\n      \r\n          <ion-select [(ngModel)]=\"categoria\">\r\n            <ion-select-option value=\"com\">Comentario</ion-select-option>\r\n            <ion-select-option value=\"sug\">Sugerencia</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item >\r\n          <ion-label position=\"floating\"> Titulo</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"titulo\" name=\"titulo\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\"></ion-label>\r\n        <ion-textarea auto-grow=\"true\" placeholder=\"Ingrese su texto\" [(ngModel)]=\"msg\"></ion-textarea>\r\n        </ion-item>\r\n        \r\n        <!--added-->\r\n      </ion-row>\r\n      <ion-button (click)=\"takePicture()\" style=\"width: 98%;\">\r\n        Agregar una foto\r\n      </ion-button>\r\n      <ion-row>\r\n        <img [src]=\"pictureview\" alt=\"\">\r\n      </ion-row>\r\n      \r\n      \r\n      \r\n      <ion-button style=\"width: 98%;\">\r\n        Enviar\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/comentarios-sugerencias/comentarios-sugerencias-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComentariosSugerenciasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosSugerenciasPageRoutingModule", function() { return ComentariosSugerenciasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comentarios_sugerencias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comentarios-sugerencias.page */ "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.ts");




const routes = [
    {
        path: '',
        component: _comentarios_sugerencias_page__WEBPACK_IMPORTED_MODULE_3__["ComentariosSugerenciasPage"]
    }
];
let ComentariosSugerenciasPageRoutingModule = class ComentariosSugerenciasPageRoutingModule {
};
ComentariosSugerenciasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComentariosSugerenciasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ComentariosSugerenciasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosSugerenciasPageModule", function() { return ComentariosSugerenciasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comentarios_sugerencias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comentarios-sugerencias-routing.module */ "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias-routing.module.ts");
/* harmony import */ var _comentarios_sugerencias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comentarios-sugerencias.page */ "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.ts");







let ComentariosSugerenciasPageModule = class ComentariosSugerenciasPageModule {
};
ComentariosSugerenciasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _comentarios_sugerencias_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComentariosSugerenciasPageRoutingModule"]
        ],
        declarations: [_comentarios_sugerencias_page__WEBPACK_IMPORTED_MODULE_6__["ComentariosSugerenciasPage"]]
    })
], ComentariosSugerenciasPageModule);



/***/ }),

/***/ "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\n.tipo {\n  width: 70%;\n  padding-left: 20%;\n}\n\nion-item {\n  --background: white;\n  width: 95%;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.photo {\n  padding-left: 40%;\n  font-size: 24px;\n  height: 90%;\n}\n\n.btne {\n  width: 98%;\n  height: 40px;\n}\n\n#texto {\n  height: 100px;\n}\n\nion-row {\n  margin-left: 10px;\n  margin-top: 10%;\n}\n\n#btnEnviar {\n  width: 98%;\n}\n\n.textarea-wrapper.sc-ion-textarea-ios {\n  min-width: inherit;\n  max-width: inherit;\n  min-height: inherit;\n  max-height: inherit;\n  border: 1px black solid;\n  border-radius: 12px;\n  padding: 5px;\n}\n\nion-textarea {\n  min-height: 200px;\n  max-height: 200px;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tZW50YXJpb3Mtc3VnZXJlbmNpYXMvQzpcXFVzZXJzXFxtZWRpblxcRGVza3RvcFxcRGlzdHJpYnVpZG9zL3NyY1xcYXBwXFxwYWdlc1xcY29tZW50YXJpb3Mtc3VnZXJlbmNpYXNcXGNvbWVudGFyaW9zLXN1Z2VyZW5jaWFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tZW50YXJpb3Mtc3VnZXJlbmNpYXMvY29tZW50YXJpb3Mtc3VnZXJlbmNpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21lbnRhcmlvcy1zdWdlcmVuY2lhcy9jb21lbnRhcmlvcy1zdWdlcmVuY2lhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4udGlwbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLnBob3RvIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDAlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5idG5lIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbiN0ZXh0byB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4jYnRuRW52aWFyIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICA7XHJcbn1cclxuXHJcbi50ZXh0YXJlYS13cmFwcGVyLnNjLWlvbi10ZXh0YXJlYS1pb3Mge1xyXG4gICAgbWluLXdpZHRoOiBpbmhlcml0O1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udGlwbyB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA5NSU7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5waG90byB7XG4gIHBhZGRpbmctbGVmdDogNDAlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogOTAlO1xufVxuXG4uYnRuZSB7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuI3RleHRvIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbiNidG5FbnZpYXIge1xuICB3aWR0aDogOTglO1xufVxuXG4udGV4dGFyZWEtd3JhcHBlci5zYy1pb24tdGV4dGFyZWEtaW9zIHtcbiAgbWluLXdpZHRoOiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ComentariosSugerenciasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosSugerenciasPage", function() { return ComentariosSugerenciasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_media_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/media-service.service */ "./src/app/services/media-service.service.ts");



let ComentariosSugerenciasPage = class ComentariosSugerenciasPage {
    constructor(Mediaservice) {
        this.Mediaservice = Mediaservice;
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.Mediaservice.takePicture();
            yield this.Mediaservice.upload();
        });
    }
    ngOnInit() {
    }
};
ComentariosSugerenciasPage.ctorParameters = () => [
    { type: src_app_services_media_service_service__WEBPACK_IMPORTED_MODULE_2__["MediaServiceService"] }
];
ComentariosSugerenciasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comentarios-sugerencias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comentarios-sugerencias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comentarios-sugerencias.page.scss */ "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.page.scss")).default]
    })
], ComentariosSugerenciasPage);



/***/ })

}]);
//# sourceMappingURL=pages-comentarios-sugerencias-comentarios-sugerencias-module-es2015.js.map