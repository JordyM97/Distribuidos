function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/aceptar-parametros/aceptar-parametros.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/aceptar-parametros/aceptar-parametros.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAceptarParametrosAceptarParametrosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='mid'>\n  <div class=\"cabecera\">\n    Detalles del servicio\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-row><ion-label class=\"titulo\">Ubicacion inicial:</ion-label></ion-row>\n        <ion-row><ion-label>{{startMarker.startAddress}}</ion-label></ion-row>\n      </ion-col>\n\n      <ion-col>\n        <ion-row><ion-label class=\"titulo\">Tipo de vehículo:</ion-label></ion-row>\n        <ion-row><ion-label>{{startMarker.vehiculo}}</ion-label></ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-row><ion-label class=\"titulo\">Ubicacion Final:</ion-label></ion-row>\n        <ion-row><ion-label>{{startMarker.endAddress}}</ion-label></ion-row>\n      </ion-col>\n\n      <ion-col>\n        <ion-row><ion-label class=\"titulo\">Método de pago:</ion-label></ion-row>\n        <ion-row><ion-label>{{startMarker.idPaymentService}}</ion-label></ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-row><ion-label class=\"titulo\">Fecha y Hora:</ion-label></ion-row>\n        <ion-row><ion-label>{{startMarker.anio}}/{{startMarker.mes}}/{{startMarker.dia}} -- {{startMarker.hora}}:{{startMarker.minuto}}</ion-label></ion-row>\n      </ion-col>\n\n      <ion-col>\n        <ion-row><ion-label class=\"titulo\">Tipo de servicio:</ion-label></ion-row>\n        <ion-row><ion-label>{{startMarker.idTypeService}}</ion-label></ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-row><ion-label class=\"titulo\">Total a pagar:</ion-label></ion-row>\n        <ion-row><ion-label>${{startMarker.total}}</ion-label></ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"btns\">\n    <ion-button color=\"primary\" (click)=\"presentToast()\">Aceptar</ion-button>\n    <ion-button color=\"primary\" (click)=\"DismissClick()\">Cancelar</ion-button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-date/select-date.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-date/select-date.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSelectDateSelectDateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"toolbar-bg\">\n    <h2>Seleccione el dia y la hora</h2>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      \n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label position=\"floating\">Selecciones el dia</ion-label>\n        <ion-datetime displayFormat=\"\tYYYY-MM-DDTHH:mm\" min=\"2020-12-14\" max=\"2022-12-12\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Seleccione la hora </ion-label>\n        <ion-select>\n          <ion-select-option *ngFor=\"let hour of hours\" value=\"hour\">{{hour}}</ion-select-option>\n        </ion-select>\n      </ion-item> \n\n    </ion-row>\n\n    <ion-row>\n        <ion-button expand=\"full\">OK</ion-button>\n    </ion-row>\n  \n</ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"toolbar-bg\">\r\n    <div class=\"toolbar-content\">\r\n      <ion-button fill=\"clear\" slot=\"start\">\r\n        <ion-menu-button color= \"light\" slot=\"start\"></ion-menu-button>\r\n      </ion-button>\r\n\r\n\r\n      <img class=\"center-img\" src=\"assets/imgs/logf.png\"> <!--\"assets/imgs/LOGO1.png-->\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content> \r\n  <div #map id=\"map\"></div>\r\n\r\n\r\n  <div id=\"menuOp\" class=\"menuop\">\r\n    <ion-grid>\r\n      <div id=\"parametrosViaje\">\r\n        <ion-row>\r\n          <ion-label class=\"tipolbl\">Tipo de vehículo </ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-segment class=\"vehiculoSegment\" scrollable value=\"1\">\r\n            <ion-segment-button (click)=\"SelectTransport(item)\" *ngFor=\"let item of vehiculos\">\r\n              <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n              <ion-label> {{item.tipoCarro}}</ion-label>\r\n              <ion-checkbox  class=\"checkbox-round\" mode=\"ios\" [(ngModel)]=\"item.isChecked\"></ion-checkbox>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-label class=\"tipolbl\" >Tipo de pago </ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-segment class=\"paymentSegment\" scrollable value=\"1\">\r\n            <ion-segment-button (click)=\"SelectPayment(item)\" *ngFor=\"let item of tipoPago\">\r\n              <ion-label> {{item.tipoPago}}</ion-label>\r\n              <ion-checkbox mode=\"ios\" [(ngModel)]=\"item.isChecked\"></ion-checkbox>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-label class=\"tipolbl\" >Tipo de servicio</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-segment class=\"serviceSegment\" scrollable value=\"1\">\r\n            <ion-segment-button (click)=\"SelectService(item)\" *ngFor=\"let item of tipoServicio\">\r\n              <ion-label> {{item.tipoServicio}}</ion-label>\r\n              <ion-checkbox mode=\"ios\" [(ngModel)]=\"item.isChecked\"></ion-checkbox>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </ion-row>\r\n      </div>\r\n \r\n \r\n      <div id=\"opcionesBuscar\">\r\n        <ion-label id=\"UbIn\">Escriba su <b>ubicación incial</b> a continuacion</ion-label>\r\n        <ion-searchbar search-icon=\"undefined\" id=\"inicio\" debounce=\"10\" [(value)]=\"resultInit\" [(ngModel)]=\"searchInit\" (ionChange)=\"searchChangedInit()\" placeholder=\"¿Desde dónde quieres ir?\"  (ionClear)=\"ClearAutocomplete()\"><ion-img src=\"assets/icon/pointer_rojo.png\"></ion-img></ion-searchbar>\r\n        <ion-list id=\"resultadosInicio\">\r\n          <ion-item (click)=\"SelectSearchResultInit(result)\" *ngFor=\"let result of searchResultsInit\">\r\n            {{ result.description }}\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-label id=\"UbInManual\">O fije su <b>ubicación inicial</b> manualmente </ion-label>\r\n        <ion-button  id=\"EUMI\" (click)=\"seleccionarInicio()\">FIJAR UBICACION INICIAL MANUALMENTE</ion-button>\r\n\r\n        <ion-label id=\"UbFin\">Escriba su <b>ubicación final</b> a continuacion</ion-label>\r\n        <ion-searchbar search-icon=\"undefined\" id=\"destino\" debounce=\"10\" [(value)]=\"resultFini\" [(ngModel)]=\"searchEnd\" (ionChange)=\"searchChangedEnd()\" placeholder=\"¿A dónde quieres llegar?\"  (ionClear)=\"ClearAutocomplete()\"><ion-img src=\"assets/icon/pointer_azul.png\"></ion-img></ion-searchbar>\r\n        <ion-list id=\"resultadosDestino\">\r\n          <ion-item (click)=\"SelectSearchResultEnd(result)\" *ngFor=\"let result of searchResultsEnd\">\r\n            {{ result.description }}\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-label id=\"UbFinManual\">O fije su <b>ubicación final</b> manualmente </ion-label>\r\n        <ion-button id=\"EUMF\" (click)=\"seleccionarFin()\">FIJAR UBICACION FINAL MANUALMENTE</ion-button>\r\n      </div>\r\n   \r\n\r\n\r\n      \r\n      <ion-row class=\"elegirini\">\r\n        <ion-button id=\"OOI\" (click)=\"ocultarOpciones()\"><img class=\"pointer\" src=\"assets/icon/pointer_rojo.png\">Seleccionar punto de partida y de llegada</ion-button>\r\n        <ion-button id=\"MOI\" (click)=\"mostrarOpciones()\">CONTINUAR</ion-button>\r\n        <!--<ion-button id=\"OPI\" (click)=\"seleccionarFin()\">Elegir Fin</ion-button>\r\n        <ion-button id=\"OPI\" (click)=\"calcularRuta()\">Ver ruta</ion-button>-->\r\n      </ion-row>\r\n\r\n      <ion-button id=\"aceptar\" class=\"BuscarRide\" (click)=\"aceptarBoton()\" >CONFIRMAR SERVICIO</ion-button>\r\n    </ion-grid>\r\n  </div>\r\n <ion-button id=\"aceptarPuntos\" (click)=\"aceptarPuntos()\" >Listo</ion-button>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/aceptar-parametros/aceptar-parametros.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/aceptar-parametros/aceptar-parametros.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAceptarParametrosAceptarParametrosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mid {\n  width: 99vw;\n  text-align: center;\n  background-color: white;\n}\n\n.cabecera {\n  height: 50px;\n  background: linear-gradient(-90deg, #20478B, #2487C9);\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  color: white;\n}\n\npopover-content sc-ion-popover-md {\n  --top: 250px;\n  --left: 5px;\n  --transform-origin: left top;\n}\n\n.titulo {\n  color: #9A999E;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.price {\n  font-size: 18px;\n  color: red;\n}\n\n.btns {\n  text-align: center;\n}\n\n@media screen and (max-width: 1000px) {\n  .mid {\n    border: black 3px solid;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2VwdGFyLXBhcmFtZXRyb3MvQzpcXFVzZXJzXFxtZWRpblxcRGVza3RvcFxcRGlzdHJpYnVpZG9zL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhY2VwdGFyLXBhcmFtZXRyb3NcXGFjZXB0YXItcGFyYW1ldHJvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hY2VwdGFyLXBhcmFtZXRyb3MvYWNlcHRhci1wYXJhbWV0cm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsbUJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2VwdGFyLXBhcmFtZXRyb3MvYWNlcHRhci1wYXJhbWV0cm9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZCB7XHJcbiAgICAvL2JvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xyXG4gICAgd2lkdGg6IDk5dnc7XHJcbiAgICAvL3dpZHRoOiAzNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FiZWNlcmEge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgIzIwNDc4QiwgIzI0ODdDOSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5wb3BvdmVyLWNvbnRlbnQgc2MtaW9uLXBvcG92ZXItbWQge1xyXG4gICAgLS10b3A6IDI1MHB4O1xyXG4gICAgLS1sZWZ0OiA1cHg7XHJcbiAgICAtLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGNvbG9yOiAjOUE5OTlFO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYnRucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLm1pZCB7XHJcbiAgICAgICAgYm9yZGVyOiBibGFjayAzcHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIH1cclxufSIsIi5taWQge1xuICB3aWR0aDogOTl2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhYmVjZXJhIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjMjA0NzhCLCAjMjQ4N0M5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5wb3BvdmVyLWNvbnRlbnQgc2MtaW9uLXBvcG92ZXItbWQge1xuICAtLXRvcDogMjUwcHg7XG4gIC0tbGVmdDogNXB4O1xuICAtLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xufVxuXG4udGl0dWxvIHtcbiAgY29sb3I6ICM5QTk5OUU7XG59XG5cbmlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnRucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5taWQge1xuICAgIGJvcmRlcjogYmxhY2sgM3B4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/aceptar-parametros/aceptar-parametros.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/aceptar-parametros/aceptar-parametros.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AceptarParametrosComponent */

  /***/
  function srcAppComponentsAceptarParametrosAceptarParametrosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AceptarParametrosComponent", function () {
      return AceptarParametrosComponent;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/loading.service */
    "./src/app/services/loading.service.ts");

    var AceptarParametrosComponent = /*#__PURE__*/function () {
      function AceptarParametrosComponent(navParams, popoverController, toastController, firestore, authService, formBuilder, loadingservice) {
        _classCallCheck(this, AceptarParametrosComponent);

        this.navParams = navParams;
        this.popoverController = popoverController;
        this.toastController = toastController;
        this.firestore = firestore;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingservice = loadingservice;
        this.serviciosCollection = firestore.collection('Servicio');
        this.servicios = this.serviciosCollection.valueChanges();
      }

      _createClass(AceptarParametrosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startMarker = this.navParams.get('info');
          console.log(this.startMarker);
          this.uploadForm = this.formBuilder.group({
            user: [''],
            body: [''],
            title: [''],
            data: ['']
          });
        }
      }, {
        key: "DismissClick",
        value: function DismissClick() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.dismiss();

                  case 2:
                    _context.next = 4;
                    return this.toastController.create({
                      message: '¿Vas cambiar algo?',
                      duration: 3000,
                      position: 'top',
                      color: 'danger'
                    });

                  case 4:
                    toast = _context.sent;
                    _context.next = 7;
                    return toast.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: 'Buscando conductor',
                      duration: 3000,
                      position: 'top',
                      color: 'success'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();
                    this.authService.sendService(JSON.stringify(this.startMarker));
                    this.notificacionTransporter = {
                      inicio: this.startMarker.startidLocation,
                      fin: this.startMarker.endidLocation,
                      hora: this.startMarker.hora + ":" + this.startMarker.minuto,
                      fecha: this.startMarker.anio + "/" + this.startMarker.mes + "/" + this.startMarker.dia,
                      metodoPago: this.startMarker.idPaymentService,
                      valor: this.startMarker.total,
                      cliente: this.authService.getNombre() + " " + this.authService.getApellido(),
                      idCliente: this.authService.getId()
                      /*Necesito ID de la tabla cliente*/

                    };
                    this.enviarNotificacion(this.notificacionTransporter);
                    console.log("Enviando Info al API");
                    this.postDataAPI(this.startMarker);
                    _context2.next = 11;
                    return this.popoverController.dismiss();

                  case 11:
                    this.loadingservice.showLoader(); //this.PopOverConductorEncontrado();

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "enviarNotificacion",
        value: function enviarNotificacion(data) {
          console.log(data);
          this.uploadForm.get('user').setValue(0);
          this.uploadForm.get('body').setValue("Peticion de viaje");
          this.uploadForm.get('title').setValue("Detalle del servicio");
          this.uploadForm.get('data').setValue(JSON.stringify(data));
          var formData = new FormData();
          formData.append("user", this.uploadForm.get('user').value);
          formData.append("body", this.uploadForm.get('body').value);
          formData.append("title", this.uploadForm.get('title').value);
          formData.append("data", this.uploadForm.get('data').value);
          this.authService.sendNotification(formData); //this.loadingservice.showLoader();
        }
      }, {
        key: "PopOverConductorEncontrado",
        value: function PopOverConductorEncontrado() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                      translucent: true,
                      cssClass: 'contact-popover',
                      componentProps: {
                        info: {
                          price: 4.23
                        }
                      }
                    });

                  case 2:
                    popover = _context3.sent;
                    _context3.next = 5;
                    return popover.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "postDataAPI",
        value: function postDataAPI(any) {
          this.serviciosCollection.add(any);
        }
      }]);

      return AceptarParametrosComponent;
    }();

    AceptarParametrosComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }];
    };

    AceptarParametrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aceptar-parametros',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./aceptar-parametros.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/aceptar-parametros/aceptar-parametros.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./aceptar-parametros.component.scss */
      "./src/app/components/aceptar-parametros/aceptar-parametros.component.scss"))["default"]]
    })], AceptarParametrosComponent);
    /***/
  },

  /***/
  "./src/app/components/select-date/select-date.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/select-date/select-date.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSelectDateSelectDateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  text-align: center;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QtZGF0ZS9DOlxcVXNlcnNcXG1lZGluXFxEZXNrdG9wXFxEaXN0cmlidWlkb3Mvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbGVjdC1kYXRlXFxzZWxlY3QtZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QtZGF0ZS9zZWxlY3QtZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QtZGF0ZS9zZWxlY3QtZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/select-date/select-date.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/select-date/select-date.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SelectDateComponent */

  /***/
  function srcAppComponentsSelectDateSelectDateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDateComponent", function () {
      return SelectDateComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SelectDateComponent = /*#__PURE__*/function () {
      function SelectDateComponent(platform) {
        _classCallCheck(this, SelectDateComponent);

        this.platform = platform;
        this.hours = [];
        this.h = this.platform.height;
        this.w = this.platform.width;
        this.hours = ["0", "1", "2", "3", "4"];
      }

      _createClass(SelectDateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.hours = ["0", "1", "2", "3", "4"];
        }
      }]);

      return SelectDateComponent;
    }();

    SelectDateComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    SelectDateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-date',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./select-date.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-date/select-date.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./select-date.component.scss */
      "./src/app/components/select-date/select-date.component.scss"))["default"]]
    })], SelectDateComponent);
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _pages_acerca_acerca_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pages/acerca/acerca.module */
    "./src/app/pages/acerca/acerca.module.ts");
    /* harmony import */


    var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pages/login/login.module */
    "./src/app/pages/login/login.module.ts");
    /* harmony import */


    var _pages_news_news_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pages/news/news.module */
    "./src/app/pages/news/news.module.ts");
    /* harmony import */


    var _pages_perfil_perfil_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../pages/perfil/perfil.module */
    "./src/app/pages/perfil/perfil.module.ts");
    /* harmony import */


    var _pages_register_register_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pages/register/register.module */
    "./src/app/pages/register/register.module.ts");
    /* harmony import */


    var _pages_servicio_servicio_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../pages/servicio/servicio.module */
    "./src/app/pages/servicio/servicio.module.ts");
    /* harmony import */


    var _pages_viajes_viajes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../pages/viajes/viajes.module */
    "./src/app/pages/viajes/viajes.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_10__["HomePage"]
    }, {
      path: 'news',
      component: _pages_news_news_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageModule"]
    }, {
      path: 'viajes',
      component: _pages_viajes_viajes_module__WEBPACK_IMPORTED_MODULE_9__["ViajesPageModule"]
    }, {
      path: 'acerca',
      component: _pages_acerca_acerca_module__WEBPACK_IMPORTED_MODULE_3__["AcercaPageModule"]
    }, {
      path: 'login',
      component: _pages_login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageModule"]
    }, {
      component: _pages_register_register_module__WEBPACK_IMPORTED_MODULE_7__["RegisterPageModule"]
    }, {
      path: 'perfil',
      component: _pages_perfil_perfil_module__WEBPACK_IMPORTED_MODULE_6__["PerfilPageModule"]
    }, {
      path: 'servicio',
      component: _pages_servicio_servicio_module__WEBPACK_IMPORTED_MODULE_8__["ServicioPageModule"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#pagos {\n  display: block;\n  width: auto;\n  min-width: 150px;\n}\n\n#servicios {\n  display: block;\n  min-width: 150px;\n}\n\n#opcionesBuscar {\n  display: none;\n  padding: 10px 10px 10px 10px;\n  margin-bottom: 10px;\n}\n\n#aceptarPuntos {\n  display: none;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n\n.BuscarRide {\n  bottom: 10px;\n  width: 95%;\n  color: white;\n  --background: red;\n  height: 35px;\n}\n\n.opciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.elegirini {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.opciones div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.opciones ion-label {\n  font-size: 14px;\n}\n\n.opciones ion-icon {\n  height: 70px;\n  font-size: 15px;\n}\n\nion-searchbar {\n  border-radius: 12px;\n  background-color: #cecece;\n  --icon-color: black;\n  height: 47px;\n}\n\n#UbIn,\n#UbFin,\n#UbFinManual,\n#UbInManual {\n  font-size: 16px;\n  display: inline-block;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n#aceptar {\n  width: 100%;\n  height: 45px;\n  position: absolute;\n  bottom: 0px;\n}\n\n#OOI {\n  width: 99%;\n  height: 45px;\n  text-align: right;\n  color: #3b3b3b;\n  --background: #D8D9DD;\n}\n\n.pointer {\n  height: 20px;\n  width: 20px;\n  padding-right: 6px;\n}\n\n#MOI {\n  width: 98%;\n  --background: red !important;\n  position: relative;\n  margin-top: 50%;\n}\n\n#EUMI {\n  width: 98%;\n  --background: red !important;\n}\n\n.tipolbl {\n  padding-top: 5px;\n  padding-left: 7px;\n  font-size: 14px;\n  width: 50%;\n  --border-color: red;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n#EUMF {\n  width: 97%;\n  --background: red !important;\n}\n\n#MOI,\n#MOF {\n  display: none;\n}\n\nion-icon {\n  color: black;\n}\n\nion-content {\n  --color: black;\n  height: 870px;\n}\n\n#parametrosViaje {\n  padding-bottom: 10px;\n}\n\n.sc-ion-popover-md-h {\n  --width: auto;\n  --max-height: 90%;\n  --box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);\n}\n\nion-segment-button {\n  color: black;\n  --indicator-color: transparent;\n  background-color: white;\n  min-height: 45x;\n  min-width: 84px;\n}\n\nion-segment-button ion-label {\n  margin: 0%;\n}\n\nion-label {\n  font-size: 14px;\n  margin-top: 1%;\n}\n\nion-item {\n  margin-top: 0%;\n  font-size: 12px;\n}\n\nion-grid {\n  padding-top: 0%;\n  padding-bottom: 0%;\n  padding-right: 2%;\n  padding-left: 0%;\n}\n\n.list-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-checkbox {\n  --border-radius: 50% !important;\n}\n\n.segment-button-checked {\n  color: #ff0404;\n}\n\n.segment-button-checked:after {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 50%;\n  color: white;\n  border: solid 4px red;\n}\n\n.segment-button-checked:after ion-icon {\n  fill: red;\n  color: black;\n}\n\n.vehiculoSegment {\n  height: 65px;\n  width: 100%;\n}\n\n.paymentSegment,\n.serviceSegment {\n  height: 45px;\n  width: 100%;\n}\n\nion-checkbox {\n  --checkmark-color: white;\n  --background-checked: #ff0404;\n  --border-color-checked: #ff0404;\n  --border-radius: 10%;\n  --size: 15px;\n}\n\n.menuop {\n  border: solid rgba(44, 44, 44, 0.644) 2px;\n  border-radius: 12px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 60%;\n  background-color: white;\n}\n\n.iconmenu {\n  max-height: 40px;\n  max-width: 90px;\n}\n\n#indicators {\n  padding: 16px;\n  height: 40%;\n  width: 100%;\n  overflow-y: auto;\n  display: block;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-item {\n  width: 100%;\n  background: transparent;\n}\n\nion-input {\n  width: 100%;\n  border: solid 1px black;\n  border-radius: 10px;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 70%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  height: 70%;\n  width: 100%;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n\n.map-wrapper .md ion-searchbar {\n  --color: black !important;\n  --icon-color: black;\n}\n\n.map-wrapper ion-grid {\n  height: 100%;\n}\n\n#inicio-highlight,\n#destino-highlight {\n  font-size: 30px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 70px;\n  border-top: 3px solid black;\n  left: 0;\n  bottom: 0;\n  max-width: 100%;\n  height: 0;\n  color: transparent;\n  overflow: hidden;\n}\n\n#inicio,\n#destino {\n  height: 50px;\n  width: 100%;\n  min-width: 100%;\n  padding: 0;\n  border-radius: 0;\n  line-height: 70px;\n  background-color: transparent;\n  color: black;\n  font-size: 30px;\n  border: none;\n  outline: none;\n  border-bottom: 3px solid #333333;\n}\n\nion-img {\n  width: 32px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG1lZGluXFxEZXNrdG9wXFxEaXN0cmlidWlkb3Mvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTs7OztFQUlJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTs7RUFFSSxhQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVIQUFBO0VBQ0EscURBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBSjs7QURFSTtFQUNJLFVBQUE7QUNBUjs7QURJQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksK0JBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDRko7O0FES0E7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTs7RUFFSSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0FDSEo7O0FETUE7RUFFSSxXQUFBO0VBQ0EsdUJBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7QUNKSjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSFI7O0FES0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDSFI7O0FES0k7RUFDSSxZQUFBO0FDSFI7O0FET0E7O0VBRUksZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BOztFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ29zIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4jc2VydmljaW9zIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuI29wY2lvbmVzQnVzY2FyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI2FjZXB0YXJQdW50b3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5CdXNjYXJSaWRlIHtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJlZDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLm9wY2lvbmVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbGVnaXJpbmkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm9wY2lvbmVzIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ub3BjaW9uZXMgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm9wY2lvbmVzIGlvbi1pY29uIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xyXG4gICAgLS1pY29uLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogNDdweDtcclxufVxyXG5cclxuI1ViSW4sXHJcbiNVYkZpbixcclxuI1ViRmluTWFudWFsLFxyXG4jVWJJbk1hbnVhbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2FjZXB0YXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxufVxyXG5cclxuI09PSSB7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzNiM2IzYjtcclxuICAgIC0tYmFja2dyb3VuZDogI0Q4RDlERDtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbiNNT0kge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIC0tYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuXHJcbiNFVU1JIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgLy8tLWJhY2tncm91bmQ6ICMyNDg3QzkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpcG9sYmwge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiNFVU1GIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jTU9JLFxyXG4jTU9GIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiBibGFja1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogODcwcHg7XHJcbn1cclxuXHJcbiNwYXJhbWV0cm9zVmlhamUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zYy1pb24tcG9wb3Zlci1tZC1oIHtcclxuICAgIC0td2lkdGg6IGF1dG87XHJcbiAgICAtLW1heC1oZWlnaHQ6IDkwJTtcclxuICAgIC0tYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgLS1iYWNrZHJvcC1vcGFjaXR5OiB2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4zMik7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1eDtcclxuICAgIG1pbi13aWR0aDogODRweDtcclxuICAgIC8vLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG5cclxuLmxpc3QtbWQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICBjb2xvcjogI2ZmMDQwNDtcclxuICAgIC8vYm9yZGVyOiBzb2xpZCAycHggcmVkO1xyXG59XHJcblxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogc29saWQgNHB4IHJlZDtcclxufVxyXG5cclxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQ6YWZ0ZXIgaW9uLWljb24ge1xyXG4gICAgZmlsbDogcmVkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udmVoaWN1bG9TZWdtZW50IHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGF5bWVudFNlZ21lbnQsXHJcbi5zZXJ2aWNlU2VnbWVudCB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmYwNDA0O1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZmMDQwNDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgLS1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubWVudW9wIHtcclxuICAgIGJvcmRlcjogc29saWQgcmdiYSg0NCwgNDQsIDQ0LCAwLjY0NCkgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDIzOSwgMjM5LCAwLjgxNSk7XHJcbn1cclxuXHJcbi5pY29ubWVudSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG4jaW5kaWNhdG9ycyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNtYXBfY2FudmFzIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuI2FkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jbWFwIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXAtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAjbWFwX2NlbnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xyXG4gICAgfVxyXG4gICAgLm1kIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIC0tY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1pY29uLWNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNpbmljaW8taGlnaGxpZ2h0LFxyXG4jZGVzdGluby1oaWdobGlnaHQge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jaW5pY2lvLFxyXG4jZGVzdGlubyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzMzMzMzMztcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxufSIsIiNwYWdvcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuI3NlcnZpY2lvcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4jb3BjaW9uZXNCdXNjYXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jYWNlcHRhclB1bnRvcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uQnVzY2FyUmlkZSB7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ub3BjaW9uZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVsZWdpcmluaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ub3BjaW9uZXMgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vcGNpb25lcyBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5vcGNpb25lcyBpb24taWNvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcbiAgLS1pY29uLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA0N3B4O1xufVxuXG4jVWJJbixcbiNVYkZpbixcbiNVYkZpbk1hbnVhbCxcbiNVYkluTWFudWFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNhY2VwdGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbn1cblxuI09PSSB7XG4gIHdpZHRoOiA5OSU7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjM2IzYjNiO1xuICAtLWJhY2tncm91bmQ6ICNEOEQ5REQ7XG59XG5cbi5wb2ludGVyIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuXG4jTU9JIHtcbiAgd2lkdGg6IDk4JTtcbiAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbiNFVU1JIHtcbiAgd2lkdGg6IDk4JTtcbiAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbn1cblxuLnRpcG9sYmwge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogNTAlO1xuICAtLWJvcmRlci1jb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI0VVTUYge1xuICB3aWR0aDogOTclO1xuICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4jTU9JLFxuI01PRiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDg3MHB4O1xufVxuXG4jcGFyYW1ldHJvc1ZpYWplIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5zYy1pb24tcG9wb3Zlci1tZC1oIHtcbiAgLS13aWR0aDogYXV0bztcbiAgLS1tYXgtaGVpZ2h0OiA5MCU7XG4gIC0tYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IHZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjMyKTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA0NXg7XG4gIG1pbi13aWR0aDogODRweDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDAlO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy10b3A6IDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBwYWRkaW5nLWxlZnQ6IDAlO1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgY29sb3I6ICNmZjA0MDQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCA0cHggcmVkO1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZDphZnRlciBpb24taWNvbiB7XG4gIGZpbGw6IHJlZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udmVoaWN1bG9TZWdtZW50IHtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBheW1lbnRTZWdtZW50LFxuLnNlcnZpY2VTZWdtZW50IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmMDQwNDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZmMDQwNDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMCU7XG4gIC0tc2l6ZTogMTVweDtcbn1cblxuLm1lbnVvcCB7XG4gIGJvcmRlcjogc29saWQgcmdiYSg0NCwgNDQsIDQ0LCAwLjY0NCkgMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pY29ubWVudSB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIG1heC13aWR0aDogOTBweDtcbn1cblxuI2luZGljYXRvcnMge1xuICBwYWRkaW5nOiAxNnB4O1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuI2FkZHJlc3Mge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufVxuLm1hcC13cmFwcGVyIC5tZCBpb24tc2VhcmNoYmFyIHtcbiAgLS1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1pY29uLWNvbG9yOiBibGFjaztcbn1cbi5tYXAtd3JhcHBlciBpb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2luaWNpby1oaWdobGlnaHQsXG4jZGVzdGluby1oaWdobGlnaHQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsaW5lLWhlaWdodDogNzBweDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNpbmljaW8sXG4jZGVzdGlubyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzMzMzMzMztcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_aceptar_parametros_aceptar_parametros_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/aceptar-parametros/aceptar-parametros.component */
    "./src/app/components/aceptar-parametros/aceptar-parametros.component.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _components_select_date_select_date_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/select-date/select-date.component */
    "./src/app/components/select-date/select-date.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);

    var HomePage = /*#__PURE__*/function () {
      function HomePage(geolocation, nativeGeocoder, zone, popovercontroller, db, // no se si borrar todavia
      firestore, // conector a firestore
      platform, router, authService, toastController) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.popovercontroller = popovercontroller;
        this.db = db;
        this.firestore = firestore;
        this.platform = platform;
        this.router = router;
        this.authService = authService;
        this.toastController = toastController;
        this.vehiculos = [{
          id: 1,
          tipoCarro: 'Carro',
          isChecked: false
        }, {
          id: 2,
          tipoCarro: 'Camioneta',
          isChecked: false
        }, {
          id: 3,
          tipoCarro: 'Plataforma',
          isChecked: false
        }, {
          id: 4,
          tipoCarro: 'Camión',
          isChecked: false
        }, {
          id: 5,
          tipoCarro: 'Furgón',
          isChecked: false
        }, {
          id: 6,
          tipoCarro: 'Remolque',
          isChecked: false
        }];
        this.tipoPago = [{
          id: 1,
          tipoPago: 'Tarjeta de Débito',
          isChecked: false
        }, {
          id: 2,
          tipoPago: 'Tarjeta de Crédito',
          isChecked: false
        }];
        this.tipoServicio = [{
          id: 1,
          tipoServicio: 'Viajar ahora',
          isChecked: false
        }, {
          id: 2,
          tipoServicio: 'Reservar viaje',
          isChecked: false
        }];
        this.hours = [{
          hora: '00',
          ischecked: false
        }];
        this.showList = false;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.googleAutocomplete = new google.maps.places.AutocompleteService();
        this.searchInit = " ";
        this.searchEnd = " ";
        this.searchResultsInit = Array();
        this.searchResultsEnd = Array();
        this.now = new Date().getUTCSeconds();
        this.platform.backButton.subscribeWithPriority(10, function () {
          _this.router.navigateByUrl('Home');
        }); //GEt colllection from firestore                                            
        //this.Servicios = firestore.collection('Pruebas').valueChanges();    //this.Servicios.subscribe(value =>{console.log(value)});

        this.locationCollection = firestore.collection("/posicion"); //.collection('hist')doc('1')

        this.location = this.locationCollection.valueChanges();
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = {
          input: ''
        };
        this.autocomplete2 = {
          input: ''
        };
        this.autocompleteItems = [];
        this.autocompleteItems2 = [];
        this.geocoder = new google.maps.Geocoder();
        this.authService.getUserInfo(24); //console.log(date);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap();
          this.showTerms(); //this.watchDriverPos(31);

          this.getservicios();
        }
      }, {
        key: "getservicios",
        value: function getservicios() {
          console.time();
          this.firestore.collection("/Servicio").valueChanges();
          console.timeEnd();
        }
      }, {
        key: "watchDriverPos",
        value: function watchDriverPos(id) {
          var _this2 = this;

          console.time();
          this.PositionD = this.firestore.doc("/posicion/".concat(id)).valueChanges();
          console.timeEnd();
          this.PositionD.subscribe(function (val) {
            console.log(val.location);
            var myLatLng = {
              lat: JSON.parse(val.location).lat,
              lng: JSON.parse(val.location).lng
            };
            _this2.markerD = new google.maps.Marker({
              map: _this2.map,
              icon: new google.maps.MarkerImage('assets/icon/pointer_proveed.png', null, null, null, new google.maps.Size(34, 45)),
              position: myLatLng
            });
          });
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var rta, myLatLng, styledMapType, mapEle;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.geolocation.getCurrentPosition();

                  case 2:
                    rta = _context4.sent;
                    myLatLng = {
                      lat: rta.coords.latitude,
                      lng: rta.coords.longitude
                    };
                    this.posicionInicial = myLatLng;
                    this.inter = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["interval"])(5000).subscribe(function (v) {
                      var a = _this3.geolocation.watchPosition();

                      a.subscribe(function (data) {
                        if (_this3.marker != null) _this3.marker.setMap(null);

                        if ("coords" in data) {
                          var lat = data.coords.latitude;
                          var lng = data.coords.longitude;
                          var latLng = new google.maps.LatLng(lat, lng);
                          _this3.marker = new google.maps.Marker({
                            map: _this3.map,
                            icon: new google.maps.MarkerImage('https://maps.gstatic.com/mapfiles/mobile/mobileimgs2.png', new google.maps.Size(22, 22), new google.maps.Point(0, 18), new google.maps.Point(11, 11)),
                            position: latLng
                          });
                        } else {
                          alert("ERROR AL OBTENER POSITION");
                        }
                      });

                      _this3.addPosition(_this3.authService.id, JSON.stringify(myLatLng));
                    });
                    styledMapType = new google.maps.StyledMapType([{
                      "featureType": "administrative",
                      "elementType": "geometry",
                      "stylers": [{
                        "visibility": "off"
                      }]
                    }, {
                      "featureType": "administrative.land_parcel",
                      "elementType": "labels.text",
                      "stylers": [{
                        "visibility": "on"
                      }]
                    }, {
                      "featureType": "administrative.neighborhood",
                      "stylers": [{
                        "visibility": "off"
                      }]
                    }, {
                      "featureType": "poi",
                      "stylers": [{
                        "visibility": "off"
                      }]
                    }, {
                      "featureType": "road",
                      "elementType": "labels.icon",
                      "stylers": [{
                        "visibility": "off"
                      }]
                    }, {
                      "featureType": "transit",
                      "stylers": [{
                        "visibility": "off"
                      }]
                    }, {
                      "featureType": "transit.line",
                      "elementType": "labels.text",
                      "stylers": [{
                        "visibility": "on"
                      }]
                    }], {
                      name: 'Styled Map'
                    });
                    mapEle = document.getElementById('map');
                    this.map = new google.maps.Map(mapEle, {
                      center: myLatLng,
                      zoom: 15,
                      zoomControl: false,
                      mapTypeControl: false,
                      streetViewControl: false,
                      fullscreenControl: false,
                      mapTypeControlOptions: {
                        mapTypeIds: ['styled_map']
                      }
                    });
                    this.map.mapTypes.set('styled_map', styledMapType);
                    this.map.setMapTypeId('styled_map');
                    this.latLngInicial = {
                      lat: rta.coords.latitude,
                      lng: rta.coords.longitude
                    };
                    this.geocodeLatLng(this.latLngInicial.lat, this.latLngInicial.lng, 1);
                    this.addMarker(this.latLngInicial);
                    this.directionsDisplay.setMap(this.map);
                    this.directionsDisplay.setOptions({
                      suppressMarkers: true
                    });
                    this.authService.getRecordService();
                    this.listenerDrag();

                  case 18:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "addPosition",
        value: function addPosition(id, location) {
          var _this4 = this;

          var ref = this.firestore.doc("posicion/".concat(id));
          ref.get().subscribe(function (doc) {
            if (doc.exists) {
              ref.update({
                location: location,
                id: id,
                from: _this4.authService.nombre,
                createdAt: firebase__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldValue.serverTimestamp()
              });
            } else {
              ref.set({
                location: location,
                id: id,
                from: _this4.authService.nombre,
                createdAt: firebase__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldValue.serverTimestamp()
              }, {
                merge: true
              });
            }
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      message: 'Hay campos vacios!',
                      duration: 1700,
                      position: 'top',
                      color: 'danger'
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "showTerms",
        value: function showTerms() {
          if (localStorage.getItem("firstTime") == "1") this.authService.getPoliticas();
        }
      }, {
        key: "aceptarParametros",
        value: function aceptarParametros() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var date, anio, mes, dia, hora, minuto, distancia, precio, popover;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    date = new Date(); //console.log(date);

                    anio = date.getFullYear();
                    mes = String(date.getMonth() + 1).padStart(2, '0');
                    dia = String(date.getDate()).padStart(2, '0');
                    hora = String(date.getHours());
                    minuto = String(date.getMinutes());
                    this.distanciaInicioFin = this.distanciaInicioFin.replace(",", ".");
                    distancia = parseFloat(this.distanciaInicioFin); //console.log(distancia);

                    precio = (distancia * 0.4 + 1.25).toFixed(2);
                    _context6.next = 11;
                    return this.popovercontroller.create({
                      component: _components_aceptar_parametros_aceptar_parametros_component__WEBPACK_IMPORTED_MODULE_5__["AceptarParametrosComponent"],
                      translucent: true,
                      cssClass: 'contact-popover',
                      componentProps: {
                        info: {
                          ClientService: this.authService.getId(),
                          DriverService: 26,
                          startidLocation: JSON.stringify(this.latLngInicial),
                          endidLocation: JSON.stringify(this.latLngFinal),
                          startAddress: this.addressInicial,
                          endAddress: this.addressFinal,
                          idPaymentService: this.pagoSeleccionado,
                          idTypeService: this.servicioSeleccionado,
                          driverScore: 5,
                          clientScore: 4,
                          startDate: date,
                          endDate: date,
                          isReservationService: 0,
                          stateService: 0,
                          vehiculo: this.vehiculoSeleccionado,
                          total: precio,
                          anio: anio,
                          mes: mes,
                          dia: dia,
                          hora: hora,
                          minuto: minuto
                        }
                      }
                    });

                  case 11:
                    popover = _context6.sent;
                    _context6.next = 14;
                    return popover.present();

                  case 14:
                    return _context6.abrupt("return", _context6.sent);

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "pagoSeleccion",
        value: function pagoSeleccion(event) {
          this.pagoSeleccionado = event.target.value;
        }
      }, {
        key: "servicioSeleccion",
        value: function servicioSeleccion(event) {
          this.servicioSeleccionado = event.target.value;
        } //Elegir punto inicial

      }, {
        key: "seleccionarInicio",
        value: function seleccionarInicio() {
          var _this5 = this;

          this.puntoInicio.setOptions({
            draggable: true
          });
          var menuOp = document.getElementById("menuOp");
          var botonAceptar = document.getElementById("aceptarPuntos");
          menuOp.style.display = "none";
          botonAceptar.style.display = "block";
          this.listenerInicio = google.maps.event.addListener(this.map, 'click', function (event) {
            _this5.latLngInicial = {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            }; //Necesito string para almacenar en bd

            _this5.geocodeLatLng(_this5.latLngInicial.lat, _this5.latLngInicial.lng, 1); //console.log(this.latLngInicial);


            _this5.addMarker(event.latLng);
          });
          this.listenerDrag();
        } //Elegir punto final

      }, {
        key: "seleccionarFin",
        value: function seleccionarFin() {
          var _this6 = this;

          this.puntoInicio.setOptions({
            draggable: false
          });
          var menuOp = document.getElementById("menuOp");
          var botonAceptar = document.getElementById("aceptarPuntos");
          menuOp.style.display = "none";
          botonAceptar.style.display = "block";

          if (this.puntoFin) {
            this.puntoFin.setOptions({
              draggable: true
            });
            google.maps.event.removeListener(this.listenerMoverFin);
            this.listenerDragF();
          }

          this.listenerFin = google.maps.event.addListener(this.map, 'click', function (event) {
            _this6.latLngFinal = {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            }; //Necesito string para almacenar en bd

            _this6.geocodeLatLng(_this6.latLngFinal.lat, _this6.latLngFinal.lng, 0); //console.log(this.latLngFinal);


            _this6.addMarkerF(event.latLng);

            google.maps.event.removeListener(_this6.listenerMoverFin);

            _this6.listenerDragF();
          });
        } //Agregar Marcador de inicio

      }, {
        key: "addMarker",
        value: function addMarker(marker) {
          if (this.puntoInicio) {
            this.puntoInicio.setPosition(marker);
          } else {
            this.puntoInicio = new google.maps.Marker({
              position: marker.position,
              map: this.map,
              //icon: 'assets/icon/pin.png',
              icon: 'assets/icon/pointer_a.png',
              draggable: true
            });
            this.puntoInicio.setPosition(marker);
          }
        } //Agregar Marcador de fin

      }, {
        key: "addMarkerF",
        value: function addMarkerF(marker) {
          if (this.puntoFin) {
            this.puntoFin.setPosition(marker);
          } else {
            this.puntoFin = new google.maps.Marker({
              position: marker.position,
              map: this.map,
              icon: 'assets/icon/pointer_r.png',
              draggable: true
            });
            this.puntoFin.setPosition(marker);
          }
        }
      }, {
        key: "listenerDrag",
        value: function listenerDrag() {
          var _this7 = this;

          this.listenerMoverInicio = google.maps.event.addListener(this.puntoInicio, 'dragend', function (evt) {
            _this7.latLngInicial = {
              lat: evt.latLng.lat(),
              lng: evt.latLng.lng()
            }; //console.log(this.latLngInicial);

            _this7.geocodeLatLng(_this7.latLngInicial.lat, _this7.latLngInicial.lng, 1);
          });
        }
      }, {
        key: "listenerDragF",
        value: function listenerDragF() {
          var _this8 = this;

          this.listenerMoverFin = google.maps.event.addListener(this.puntoFin, 'dragend', function (evt) {
            _this8.latLngFinal = {
              lat: evt.latLng.lat(),
              lng: evt.latLng.lng()
            }; // console.log(this.latLngFinal);

            _this8.geocodeLatLng(_this8.latLngFinal.lat, _this8.latLngFinal.lng, 0);
          });
        } //Permite trazar la ruta una vez que haya elegido los puntos iniciales y finales

      }, {
        key: "calcularRuta",
        value: function calcularRuta() {
          var _this9 = this;

          this.directionsService.route({
            origin: this.latLngInicial,
            destination: this.latLngFinal,
            travelMode: google.maps.TravelMode.DRIVING
          }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              _this9.directionsDisplay.setDirections(response);

              _this9.distanciaInicioFin = response.routes[0].legs[0].distance.text.split(" ")[0]; // console.log(this.distanciaInicioFin)
            } else {
              alert('Could not display directions due to: ' + status);
            }
          });
        } //Ver resultados de busqueda inicial

      }, {
        key: "searchChangedInit",
        value: function searchChangedInit() {
          var _this10 = this;

          this.mostrarListaResultados(true, "resultadosInicio");
          if (!this.searchInit.trim().length) return;
          this.googleAutocomplete.getPlacePredictions({
            input: this.searchInit,
            location: new google.maps.LatLng(this.posicionInicial),
            radius: 50000
          }, function (predictions) {
            _this10.searchResultsInit = predictions;
          });
        } //Con el resultado que elijamos, se agrega el marcador

      }, {
        key: "SelectSearchResultInit",
        value: function SelectSearchResultInit(item) {
          this.resultInit = item.description;
          this.placeid = item.place_id;
          this.ClearAutocomplete();
          this.getplaceByIdInit(this.placeid);
        }
      }, {
        key: "getplaceByIdInit",
        value: function getplaceByIdInit(placeId) {
          var _this11 = this;

          this.puntoInicio.setOptions({
            draggable: true
          });
          var menuOp = document.getElementById("menuOp");
          var botonAceptar = document.getElementById("aceptarPuntos");
          menuOp.style.display = "none";
          botonAceptar.style.display = "block";
          this.geocoder.geocode({
            placeId: placeId
          }, function (results, status) {
            if (status === "OK") {
              // console.log(results[0]);
              //console.log(results[0].geometry.viewport.Za.j);
              _this11.latLngInicial = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              };

              _this11.map.setCenter(_this11.latLngInicial); //Centrar mapa en inicio


              _this11.geocodeLatLng(_this11.latLngInicial.lat, _this11.latLngInicial.lng, 1); //console.log(this.latLngInicial);


              _this11.addMarker(_this11.latLngInicial);

              _this11.listenerDrag(); //Listener para el dragg

            } else {
              window.alert("Geocoder failed due to: " + status);
            }
          });
        } //Ver resultados de busqueda final

      }, {
        key: "searchChangedEnd",
        value: function searchChangedEnd() {
          var _this12 = this;

          this.mostrarListaResultados(true, "resultadosDestino");
          if (!this.searchEnd.trim().length) return;
          this.googleAutocomplete.getPlacePredictions({
            input: this.searchEnd,
            location: new google.maps.LatLng(this.posicionInicial),
            radius: 50000
          }, function (predictions) {
            _this12.searchResultsEnd = predictions;
          });
        } //Con el resultado que elijamos, se agrega el marcador

      }, {
        key: "SelectSearchResultEnd",
        value: function SelectSearchResultEnd(item) {
          this.resultFini = item.description;
          this.placeid = item.place_id;
          this.getplaceByIdEnd(this.placeid);
          this.ClearAutocomplete();
        }
      }, {
        key: "getplaceByIdEnd",
        value: function getplaceByIdEnd(placeId) {
          var _this13 = this;

          if (this.puntoFin) {
            //En caso que ya exista un punto final
            this.puntoFin.setOptions({
              draggable: true
            });
          }

          var menuOp = document.getElementById("menuOp");
          var botonAceptar = document.getElementById("aceptarPuntos");
          menuOp.style.display = "none";
          botonAceptar.style.display = "block";
          this.geocoder.geocode({
            placeId: placeId
          }, function (results, status) {
            if (status === "OK") {
              // console.log(results[0]);
              _this13.latLngFinal = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              };

              _this13.map.setCenter(_this13.latLngFinal); //Centrar mapa en destino


              _this13.geocodeLatLng(_this13.latLngFinal.lat, _this13.latLngFinal.lng, 0); //  console.log(this.latLngFinal);


              _this13.addMarkerF(_this13.latLngFinal);

              _this13.listenerDragF(); //Listener para el dragg

            } else {
              window.alert("Geocoder failed due to: " + status);
            }
          });
        }
      }, {
        key: "ClearAutocomplete",
        value: function ClearAutocomplete() {
          this.searchResultsEnd = [];
          this.searchResultsInit = [];
        } //Seleccionar un tipo de transporte

      }, {
        key: "SelectTransport",
        value: function SelectTransport(item) {
          if (item.isChecked == true) {
            item.isChecked = true;
          } else {
            this.vehiculos.forEach(function (vehiculos) {
              vehiculos.isChecked = false;
            });
            item.isChecked = true;
            this.vehiculoSeleccionado = item.tipoCarro; //  console.log(this.vehiculoSeleccionado);
          }
        } //Seleccionar un tipo de servicio

      }, {
        key: "SelectService",
        value: function SelectService(item) {
          if (item.isChecked == true) {
            item.isChecked = true;
          } else {
            this.tipoServicio.forEach(function (tipoServicio) {
              tipoServicio.isChecked = false;
            });
            item.isChecked = true;
            this.servicioSeleccionado = item.tipoServicio; //  console.log(this.servicioSeleccionado);

            if (item.id == 2) {
              //   console.log("fecha");
              this.selectDate();
            }
          }
        }
      }, {
        key: "selectDate",
        value: function selectDate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var popover;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.popovercontroller.create({
                      component: _components_select_date_select_date_component__WEBPACK_IMPORTED_MODULE_10__["SelectDateComponent"],
                      translucent: true,
                      cssClass: 'contact-popover',
                      componentProps: {
                        info: {}
                      }
                    });

                  case 2:
                    popover = _context7.sent;
                    _context7.next = 5;
                    return popover.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } //Seleccionar un de pago

      }, {
        key: "SelectPayment",
        value: function SelectPayment(item) {
          if (item.isChecked == true) {
            item.isChecked = true;
          } else {
            this.tipoPago.forEach(function (tipoPago) {
              tipoPago.isChecked = false;
            });
            item.isChecked = true;
            this.pagoSeleccionado = item.tipoPago; // console.log(this.pagoSeleccionado);
          }
        }
      }, {
        key: "aceptarBoton",
        value: function aceptarBoton() {
          if (this.vehiculoSeleccionado == null || this.servicioSeleccionado == null || this.servicioSeleccionado == null || this.latLngInicial == null || this.latLngFinal == null) {
            this.presentToast();
          } else {
            this.aceptarParametros();
          }
        }
      }, {
        key: "aceptarPuntos",
        value: function aceptarPuntos() {
          var menuOp = document.getElementById("menuOp");
          var aceptarPuntos = document.getElementById("aceptarPuntos");
          menuOp.style.display = "block";
          aceptarPuntos.style.display = "none";
          google.maps.event.removeListener(this.listenerMoverInicio);
          google.maps.event.removeListener(this.listenerInicio);
          google.maps.event.removeListener(this.listenerMoverFin);
          google.maps.event.removeListener(this.listenerFin);
          this.puntoInicio.setOptions({
            draggable: false
          });

          if (this.puntoFin) {
            this.puntoFin.setOptions({
              draggable: false
            });
          }

          this.mostrarListaResultados(false, "resultadosInicio");
          this.mostrarListaResultados(false, "resultadosDestino");
        }
      }, {
        key: "ocultarOpciones",
        value: function ocultarOpciones() {
          var mapa = document.getElementById("map");
          var parametros = document.getElementById("parametrosViaje");
          var opconesBuscar = document.getElementById("opcionesBuscar");
          var menuOp = document.getElementById("menuOp");
          var elegirPuntos = document.getElementById("OOI");
          var aceptarPuntos = document.getElementById("MOI");
          var aceptarParametros = document.getElementById("aceptar");
          mapa.style.height = "100%";
          parametros.style.display = "none";
          opconesBuscar.style.display = "block";
          elegirPuntos.style.display = "none";
          aceptarParametros.style.display = "none";
          aceptarPuntos.style.display = "block";
          menuOp.style.height = "100%";

          if (this.listenerMoverInicio) {
            google.maps.event.removeListener(this.listenerMoverInicio);
          }
        }
      }, {
        key: "mostrarOpciones",
        value: function mostrarOpciones() {
          var mapa = document.getElementById("map");
          var parametros = document.getElementById("parametrosViaje");
          var opconesBuscar = document.getElementById("opcionesBuscar");
          var menuOp = document.getElementById("menuOp");
          var elegirPuntos = document.getElementById("OOI");
          var aceptarPuntos = document.getElementById("MOI");
          var aceptarParametros = document.getElementById("aceptar");
          mapa.style.height = "70%";
          parametros.style.display = "block";
          opconesBuscar.style.display = "none";
          elegirPuntos.style.display = "block";
          aceptarParametros.style.display = "block";
          aceptarPuntos.style.display = "none";
          menuOp.style.height = "60%";
          google.maps.event.removeListener(this.listenerInicio);
          google.maps.event.removeListener(this.listenerFin);
          google.maps.event.removeListener(this.listenerMoverInicio);
          google.maps.event.removeListener(this.listenerMoverFin);
          this.calcularRuta();
        }
      }, {
        key: "geocodeLatLng",
        value: function geocodeLatLng(latitude, longitude, identificador) {
          var _this14 = this;

          var latlng = {
            lat: parseFloat(latitude),
            lng: parseFloat(longitude)
          };
          this.geocoder.geocode({
            location: latlng
          }, function (results, status) {
            if (status === "OK") {
              if (results[0]) {
                if (identificador == 1) {
                  _this14.addressInicial = results[0].formatted_address;
                } else {
                  _this14.addressFinal = results[0].formatted_address;
                } // console.log(results[0].formatted_address);

              } else {
                window.alert("No results found");
              }
            } else {
              window.alert("Geocoder failed due to: " + status);
            }
          });
        }
      }, {
        key: "mostrarListaResultados",
        value: function mostrarListaResultados(estado, listaResultados) {
          var resultado = document.getElementById(listaResultados);

          if (estado) {
            resultado.style.display = "block";
          } else {
            resultado.style.display = "none";
          }
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": false
    })], HomePage.prototype, "mapElement", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map