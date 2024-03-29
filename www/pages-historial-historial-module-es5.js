function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historial-historial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistorialHistorialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"toolbar-bg\">\r\n    <div class=\"toolbar-content\">\r\n      <ion-button fill=\"clear\" slot=\"start\">\r\n        <ion-menu-button color= \"light\" slot=\"start\"></ion-menu-button>\r\n      </ion-button>\r\n\r\n\r\n        <img class=\"center-img\" src=\"assets/imgs/logf.png\">\r\n     \r\n\r\n      <ion-avatar>\r\n        <img src=\"assets/icon/avatar.png\">\r\n      </ion-avatar>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n    <ion-list id=\"historialResultados\">\r\n      <ion-card *ngIf=\"historialViajes.length==0\">\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col></ion-col>\r\n              <ion-col>No hay viajes!</ion-col>            \r\n              <ion-col></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        \r\n      </ion-card-content>\r\n      </ion-card>\r\n      \r\n    <ion-card>\r\n      <ion-item *ngFor=\"let viaje of historialFinal\">\r\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"botonDetalles(viaje)\">Detalles</ion-button>\r\n\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row> <b>Inicio: </b>{{viaje.startAddress}} </ion-row>\r\n            <ion-row> <b>Fin: </b>{{viaje.endAddress}}  </ion-row>\r\n            <ion-row> <b>Estado: </b> <ion-label [ngStyle]=\"{'color':getColor(viaje.stateService)}\"> {{viaje.stateService === 1 ? 'Finalizado' : 'En curso'}}</ion-label>  </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-item>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/historial/historial-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/historial/historial-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: HistorialPageRoutingModule */

  /***/
  function srcAppPagesHistorialHistorialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPageRoutingModule", function () {
      return HistorialPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _historial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./historial.page */
    "./src/app/pages/historial/historial.page.ts");

    var routes = [{
      path: '',
      component: _historial_page__WEBPACK_IMPORTED_MODULE_3__["HistorialPage"]
    }];

    var HistorialPageRoutingModule = function HistorialPageRoutingModule() {
      _classCallCheck(this, HistorialPageRoutingModule);
    };

    HistorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistorialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/historial/historial.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/historial/historial.module.ts ***!
    \*****************************************************/

  /*! exports provided: HistorialPageModule */

  /***/
  function srcAppPagesHistorialHistorialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function () {
      return HistorialPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./historial-routing.module */
    "./src/app/pages/historial/historial-routing.module.ts");
    /* harmony import */


    var _historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./historial.page */
    "./src/app/pages/historial/historial.page.ts");

    var HistorialPageModule = function HistorialPageModule() {
      _classCallCheck(this, HistorialPageModule);
    };

    HistorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialPageRoutingModule"]],
      declarations: [_historial_page__WEBPACK_IMPORTED_MODULE_6__["HistorialPage"]]
    })], HistorialPageModule);
    /***/
  },

  /***/
  "./src/app/pages/historial/historial.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/historial/historial.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistorialHistorialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yaWFsL0M6XFxVc2Vyc1xcbWVkaW5cXERlc2t0b3BcXERpc3RyaWJ1aWRvcy9zcmNcXGFwcFxccGFnZXNcXGhpc3RvcmlhbFxcaGlzdG9yaWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yaWFsL2hpc3RvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yaWFsL2hpc3RvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImlvbi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/historial/historial.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/historial/historial.page.ts ***!
    \***************************************************/

  /*! exports provided: HistorialPage */

  /***/
  function srcAppPagesHistorialHistorialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPage", function () {
      return HistorialPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HistorialPage = /*#__PURE__*/function () {
      function HistorialPage(authService, router) {
        _classCallCheck(this, HistorialPage);

        this.authService = authService;
        this.router = router;
        this.historialFinal = [];
      }

      _createClass(HistorialPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.historialViajes = this.authService.getHistorial();
          console.log(this.historialViajes);
          this.historialViajes.slice().reverse().forEach(function (element) {
            if (element.startidLocation != null) {
              _this.historialFinal.push(element);
            }
          });
        }
      }, {
        key: "botonDetalles",
        value: function botonDetalles(element) {
          this.detallesViaje = element;
          this.router.navigate(['historial-detalle/' + JSON.stringify(this.detallesViaje)]);
        }
      }, {
        key: "getDetallesViaje",
        value: function getDetallesViaje() {
          return this.detallesViaje;
        }
      }, {
        key: "getColor",
        value: function getColor(estado) {
          switch (estado) {
            case 1:
              return 'red';

            case 0:
              return 'green';
          }
        }
      }]);

      return HistorialPage;
    }();

    HistorialPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HistorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historial',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./historial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./historial.page.scss */
      "./src/app/pages/historial/historial.page.scss"))["default"]]
    })], HistorialPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-historial-historial-module-es5.js.map