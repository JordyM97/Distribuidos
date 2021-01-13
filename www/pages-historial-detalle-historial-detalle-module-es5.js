function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historial-detalle-historial-detalle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial-detalle/historial-detalle.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial-detalle/historial-detalle.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistorialDetalleHistorialDetallePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"toolbar-bg\">\r\n    <div class=\"toolbar-content\">\r\n      <ion-button fill=\"clear\" slot=\"start\">\r\n        <ion-menu-button color= \"light\" slot=\"start\"></ion-menu-button>\r\n      </ion-button>\r\n\r\n\r\n        <img class=\"center-img\" src=\"assets/imgs/logf.png\">\r\n     \r\n\r\n      <ion-avatar>\r\n        <img src=\"assets/icon/avatar.png\">\r\n      </ion-avatar>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n   <div #map id=\"mapaHistorial\"></div>\r\n   \r\n  <div class='mid'>\r\n    <div class=\"cabecera\">\r\n      Detalles del viaje\r\n    </div>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row><ion-label class=\"titulo\">Ubicacion Inicial:</ion-label></ion-row>\r\n          <ion-row><ion-label>{{historialViaje.startAddress}}</ion-label></ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col> \r\n          <ion-row><ion-label class=\"titulo\">Ubicacion Final:</ion-label></ion-row>\r\n          <ion-row><ion-label>{{historialViaje.endAddress}}</ion-label></ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row><ion-label class=\"titulo\">Fecha y Hora:</ion-label></ion-row>\r\n          <ion-row><ion-label>{{anio}}/{{mes}}/{{dia}} -- {{hora}}:{{minuto}}</ion-label></ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-row><ion-label class=\"titulo\">Tipo de servicio:</ion-label></ion-row>\r\n          <ion-row><ion-label>{{historialViaje.idTypeService}}</ion-label></ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row><ion-label class=\"titulo\">Total:</ion-label></ion-row>\r\n          <ion-row><ion-label>$4.23</ion-label></ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-row><ion-label class=\"titulo\">Estado Servicio:</ion-label></ion-row>\r\n          <ion-row><ion-label>Finalizado</ion-label></ion-row> <!--Cambiar cuando se tengan los estados del servicio-->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"btns\">\r\n      <ion-button id=\"botonAceptar\" (click)=\"botonAceptar()\">Aceptar</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/historial-detalle/historial-detalle-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/historial-detalle/historial-detalle-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: HistorialDetallePageRoutingModule */

  /***/
  function srcAppPagesHistorialDetalleHistorialDetalleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialDetallePageRoutingModule", function () {
      return HistorialDetallePageRoutingModule;
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


    var _historial_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./historial-detalle.page */
    "./src/app/pages/historial-detalle/historial-detalle.page.ts");

    var routes = [{
      path: '',
      component: _historial_detalle_page__WEBPACK_IMPORTED_MODULE_3__["HistorialDetallePage"]
    }];

    var HistorialDetallePageRoutingModule = function HistorialDetallePageRoutingModule() {
      _classCallCheck(this, HistorialDetallePageRoutingModule);
    };

    HistorialDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistorialDetallePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/historial-detalle/historial-detalle.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/historial-detalle/historial-detalle.module.ts ***!
    \*********************************************************************/

  /*! exports provided: HistorialDetallePageModule */

  /***/
  function srcAppPagesHistorialDetalleHistorialDetalleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialDetallePageModule", function () {
      return HistorialDetallePageModule;
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


    var _historial_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./historial-detalle-routing.module */
    "./src/app/pages/historial-detalle/historial-detalle-routing.module.ts");
    /* harmony import */


    var _historial_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./historial-detalle.page */
    "./src/app/pages/historial-detalle/historial-detalle.page.ts");

    var HistorialDetallePageModule = function HistorialDetallePageModule() {
      _classCallCheck(this, HistorialDetallePageModule);
    };

    HistorialDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _historial_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialDetallePageRoutingModule"]],
      declarations: [_historial_detalle_page__WEBPACK_IMPORTED_MODULE_6__["HistorialDetallePage"]]
    })], HistorialDetallePageModule);
    /***/
  },

  /***/
  "./src/app/pages/historial-detalle/historial-detalle.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/historial-detalle/historial-detalle.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistorialDetalleHistorialDetallePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#mapaHistorial {\n  width: 100%;\n  height: 60%;\n  display: block;\n}\n\n.mid {\n  width: 99vw;\n  text-align: center;\n  background-color: white;\n}\n\n.cabecera {\n  height: 40px;\n  background: linear-gradient(-90deg, #20478B, #2487C9);\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  color: white;\n}\n\n.titulo {\n  color: #9A999E;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.price {\n  font-size: 18px;\n  color: red;\n}\n\n#botonAceptar {\n  text-align: center;\n  width: 95%;\n  --background: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yaWFsLWRldGFsbGUvQzpcXFVzZXJzXFxtZWRpblxcRG9jdW1lbnRzXFxFU1BPTFxcU29mdHdhcmUxXFxERVZcXFZlaGljdWxhci9zcmNcXGFwcFxccGFnZXNcXGhpc3RvcmlhbC1kZXRhbGxlXFxoaXN0b3JpYWwtZGV0YWxsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcmlhbC1kZXRhbGxlL2hpc3RvcmlhbC1kZXRhbGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBRUksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLQTtFQUNJLFlBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3JpYWwtZGV0YWxsZS9oaXN0b3JpYWwtZGV0YWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwYUhpc3RvcmlhbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1pZHtcclxuICAgIC8vYm9yZGVyOiBibGFjayAxcHggc29saWQ7XHJcbiAgICB3aWR0aDogOTl2dztcclxuICAgIC8vd2lkdGg6IDM3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG5cclxuLmNhYmVjZXJhe1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywjMjA0NzhCICwjMjQ4N0M5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBjb2xvcjogIzlBOTk5RTtcclxufVxyXG5pb24tcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucHJpY2V7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbiNib3RvbkFjZXB0YXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcclxufSIsIiNtYXBhSGlzdG9yaWFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1pZCB7XG4gIHdpZHRoOiA5OXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY2FiZWNlcmEge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICMyMDQ3OEIsICMyNDg3QzkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogIzlBOTk5RTtcbn1cblxuaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiNib3RvbkFjZXB0YXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5NSU7XG4gIC0tYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/historial-detalle/historial-detalle.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/historial-detalle/historial-detalle.page.ts ***!
    \*******************************************************************/

  /*! exports provided: HistorialDetallePage */

  /***/
  function srcAppPagesHistorialDetalleHistorialDetallePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialDetallePage", function () {
      return HistorialDetallePage;
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

    var HistorialDetallePage = /*#__PURE__*/function () {
      function HistorialDetallePage(activateRouter, router) {
        var _this = this;

        _classCallCheck(this, HistorialDetallePage);

        this.activateRouter = activateRouter;
        this.router = router;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.activateRouter.paramMap.subscribe(function (data) {
          _this.historialViaje = data;
        });
      }

      _createClass(HistorialDetallePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.historialViaje = JSON.parse(this.historialViaje.params.datos);
          console.log(this.historialViaje);
          console.log(JSON.parse(this.historialViaje.startidLocation));
          var date = new Date(this.historialViaje.startDate);
          this.anio = date.getFullYear();
          this.mes = String(date.getMonth() + 1).padStart(2, '0');
          this.dia = String(date.getDate()).padStart(2, '0');
          this.hora = String(date.getHours());
          this.minuto = String(date.getMinutes());
          this.loadMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var mapEle;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //Crear nuevo mapa
                    mapEle = document.getElementById('mapaHistorial'); // Crear el mapa y renderizarlo

                    this.map = new google.maps.Map(mapEle, {
                      center: JSON.parse(this.historialViaje.startidLocation),
                      zoom: 15,
                      zoomControl: false,
                      mapTypeControl: false,
                      streetViewControl: false,
                      fullscreenControl: false
                    });
                    this.directionsDisplay.setMap(this.map);
                    this.calcularRuta();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "calcularRuta",
        value: function calcularRuta() {
          var _this2 = this;

          this.directionsService.route({
            origin: JSON.parse(this.historialViaje.startidLocation),
            destination: JSON.parse(this.historialViaje.endidLocation),
            travelMode: google.maps.TravelMode.DRIVING
          }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              _this2.directionsDisplay.setDirections(response);
            } else {
              alert('Could not display directions due to: ' + status);
            }
          });
        }
      }, {
        key: "botonAceptar",
        value: function botonAceptar() {
          this.router.navigate(['historial']);
        }
      }]);

      return HistorialDetallePage;
    }();

    HistorialDetallePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HistorialDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historial-detalle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./historial-detalle.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial-detalle/historial-detalle.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./historial-detalle.page.scss */
      "./src/app/pages/historial-detalle/historial-detalle.page.scss"))["default"]]
    })], HistorialDetallePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-historial-detalle-historial-detalle-module-es5.js.map