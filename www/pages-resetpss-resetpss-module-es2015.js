(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resetpss-resetpss-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpss/resetpss.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpss/resetpss.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"toolbar-bg\">\n    <ion-back-button defaultHref=\"/home\" text=\"\" icon=\"chevron-back-outline\">       </ion-back-button>\n    Terminos y condiciones\n  </ion-toolbar>\n  \n</ion-header>\n<ion-content >\n\n  <ion-img class=\"icon\" src=\"assets/imgs/LOGO2.png\">  </ion-img>\n\n  \n  <form class=\"content-items\" (submit)=\"send_reset_password()\">\n    <small class=\"content-text ion-text-center\">Ingresa tu correo electrónico para recuperar tu contraseña</small>\n\n    <ion-item class=\"content-input\">\n      <ion-input placeholder=\"Correo electronico\"  type=\"email\" [(ngModel)]=\"email\" name=\"email\" required=\"true\">\n      </ion-input>\n    </ion-item>\n     \n      <ion-button expand=\"full\" class=\"boton\" type=\"submit\">\n        RECUPERAR CONTRASEÑA\n      </ion-button>\n \n      \n  </form>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/resetpss/resetpss-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/resetpss/resetpss-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ResetpssPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpssPageRoutingModule", function() { return ResetpssPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resetpss_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetpss.page */ "./src/app/pages/resetpss/resetpss.page.ts");




const routes = [
    {
        path: '',
        component: _resetpss_page__WEBPACK_IMPORTED_MODULE_3__["ResetpssPage"]
    }
];
let ResetpssPageRoutingModule = class ResetpssPageRoutingModule {
};
ResetpssPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetpssPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/resetpss/resetpss.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/resetpss/resetpss.module.ts ***!
  \***************************************************/
/*! exports provided: ResetpssPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpssPageModule", function() { return ResetpssPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _resetpss_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resetpss-routing.module */ "./src/app/pages/resetpss/resetpss-routing.module.ts");
/* harmony import */ var _resetpss_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpss.page */ "./src/app/pages/resetpss/resetpss.page.ts");







let ResetpssPageModule = class ResetpssPageModule {
};
ResetpssPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resetpss_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpssPageRoutingModule"]
        ],
        declarations: [_resetpss_page__WEBPACK_IMPORTED_MODULE_6__["ResetpssPage"]]
    })
], ResetpssPageModule);



/***/ }),

/***/ "./src/app/pages/resetpss/resetpss.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/resetpss/resetpss.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0cHNzL3Jlc2V0cHNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/resetpss/resetpss.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/resetpss/resetpss.page.ts ***!
  \*************************************************/
/*! exports provided: ResetpssPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpssPage", function() { return ResetpssPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_fbauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fbauth.service */ "./src/app/services/fbauth.service.ts");




let ResetpssPage = class ResetpssPage {
    constructor(FBauth_service, router) {
        this.FBauth_service = FBauth_service;
        this.router = router;
        this.email = "";
    }
    ngOnInit() {
    }
    send_reset_password() {
        console.log("Se enviara el correo...");
        this.FBauth_service.reset_password(this.email);
    }
};
ResetpssPage.ctorParameters = () => [
    { type: src_app_services_fbauth_service__WEBPACK_IMPORTED_MODULE_3__["FBAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ResetpssPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resetpss',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resetpss.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpss/resetpss.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resetpss.page.scss */ "./src/app/pages/resetpss/resetpss.page.scss")).default]
    })
], ResetpssPage);



/***/ }),

/***/ "./src/app/services/fbauth.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/fbauth.service.ts ***!
  \********************************************/
/*! exports provided: FBAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBAuthService", function() { return FBAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let FBAuthService = class FBAuthService {
    constructor(AFauth, router, toastController) {
        this.AFauth = AFauth;
        this.router = router;
        this.toastController = toastController;
    }
    login(correo_electronico, contrasenia) {
        return new Promise((resolve, reject) => {
            this.AFauth.signInWithEmailAndPassword(correo_electronico, contrasenia)
                .then(res => {
                console.log(res);
                resolve(res);
            }).catch(err => {
                console.error('ERROR> En la auth. Linea 16 in auth.service.ts' + err);
                reject(err);
            });
        });
    }
    /**
     * Logout de respuesta asincrona que en caso de ser exitosa
     * redirecciona a la pantalla de login, sino lanza un error.
     * @returns una promesa
     */
    logout() {
        return this.AFauth.signOut()
            .then(() => {
            this.router.navigate(['/login']);
            console.log('Redirigir');
        }).catch(err => {
            console.error('ERROR> En la auth. Linea 42 in auth.service.ts' + err);
        });
    }
    /**
     * Usa el obj AFauth para enviar un correo de recuperacion de contraseña al proveedor que lo solicita.
     * Nota: Se puede personalizar el mensaje enviado desde firebase/console/authentication
     * Pdt: Para probar se recomienda usar un email temporal, debidamente registrado como usuario.
     * @param correo_recuperacion (del proveedor) destino donde se enviara el mensaje
     */
    reset_password(correo_recuperacion) {
        if (correo_recuperacion == "") {
            this.presentToastFeedback('Debe ingresar un correo electronico.');
            //alert("Debe ingresar un correo electronico.")
        }
        else {
            this.AFauth.sendPasswordResetEmail(correo_recuperacion)
                .then((res) => {
                console.log("Email se envio");
                this.presentToastFeedback('Listo!, Revisa en tu correo');
                this.router.navigate(['login']);
            }).catch((err) => {
                this.presentToastFeedback("ERROR en reset password " + err);
                console.error("ERROR en reset password  " + err);
            });
        }
    }
    presentToastFeedback(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
};
FBAuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
FBAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FBAuthService);



/***/ })

}]);
//# sourceMappingURL=pages-resetpss-resetpss-module-es2015.js.map