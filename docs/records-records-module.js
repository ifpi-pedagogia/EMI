(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["records-records-module"],{

/***/ "./src/app/records/deposition-details/deposition-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/records/deposition-details/deposition-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.student-info{\r\n    background-color: #FFF;\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.student-info__photo{\r\n    margin-top: 10px;\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: .2rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.student-info__photo img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.student-info__name{\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    \r\n}\r\n\r\n.student-deposition{\r\n    flex: 3;\r\n}\r\n\r\n.student-deposition__video{\r\n    width: 100%;\r\n    height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9kZXBvc2l0aW9uLWRldGFpbHMvZGVwb3NpdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZWNvcmRzL2RlcG9zaXRpb24tZGV0YWlscy9kZXBvc2l0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zdHVkZW50LWluZm97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0dWRlbnQtaW5mb19fcGhvdG97XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0dWRlbnQtaW5mb19fcGhvdG8gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zdHVkZW50LWluZm9fX25hbWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zdHVkZW50LWRlcG9zaXRpb257XHJcbiAgICBmbGV4OiAzO1xyXG59XHJcblxyXG4uc3R1ZGVudC1kZXBvc2l0aW9uX192aWRlb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/records/deposition-details/deposition-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/records/deposition-details/deposition-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mt-5\">\r\n    <div class=\"wrapper\">\r\n        <section class=\"student-info\">\r\n            <div>\r\n                <div class=\"student-info__photo\">\r\n                    <img [src]=deposition.urlImg>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2>\r\n                        <strong class=\"student-info__name\">\r\n              {{deposition.author}}\r\n            </strong>\r\n                    </h2>\r\n                    <p>Curso: {{deposition.course}}</p>\r\n                </div>\r\n\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"student-deposition\">\r\n            <div>\r\n                <!-- Adicionar src dinamicamente-->\r\n                <iframe class=\"student-deposition__video\" [src]='transform(deposition.url)' frameborder=\"0\" allow=\"accelerometer;\r\n          encrypted-media;\r\n          gyroscope;\" allowfullscreen>\r\n        </iframe>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "./src/app/records/deposition-details/deposition-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/records/deposition-details/deposition-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: DepositionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositionDetailsComponent", function() { return DepositionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _depositions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../depositions.service */ "./src/app/records/depositions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var DepositionDetailsComponent = /** @class */ (function () {
    function DepositionDetailsComponent(rota, serv, sanitizer) {
        this.rota = rota;
        this.serv = serv;
        this.sanitizer = sanitizer;
    }
    DepositionDetailsComponent.prototype.ngOnInit = function () {
        this.deposition = this.setDeposition();
        console.log('url: ' + this.transform(this.deposition.url));
    };
    DepositionDetailsComponent.prototype.setDeposition = function () {
        var date = 'id';
        var search = this.rota.snapshot.params[date];
        return this.serv.getIdDeposition(search);
    };
    DepositionDetailsComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    DepositionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-deposition-details',
            template: __webpack_require__(/*! ./deposition-details.component.html */ "./src/app/records/deposition-details/deposition-details.component.html"),
            styles: [__webpack_require__(/*! ./deposition-details.component.css */ "./src/app/records/deposition-details/deposition-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _depositions_service__WEBPACK_IMPORTED_MODULE_1__["DepositionsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], DepositionDetailsComponent);
    return DepositionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/records/depositions.service.ts":
/*!************************************************!*\
  !*** ./src/app/records/depositions.service.ts ***!
  \************************************************/
/*! exports provided: DepositionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositionsService", function() { return DepositionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DepositionsService = /** @class */ (function () {
    function DepositionsService() {
        this.myDepositions = [
            {
                id: 1,
                url: 'https://www.youtube.com/embed/myM4kuB3ke8',
                author: 'Ana Bel e Rafael',
                urlImg: /* 'assets/imagens/depoimento1.jpeg', */ '',
                course: 'Informática'
            },
            /*
            {
              id: 2,
              url: '',
              author: 'Ana Luisa',
              urlImg: /* 'assets/imagens/depoimento2.jpeg',  '',
              course: ''
            },
            */
            {
                id: 3,
                url: 'https://www.youtube.com/embed/GWJYuwnCPss',
                author: 'Anthony',
                urlImg: /* 'assets/imagens/depoimento3.jpeg', */ '',
                course: ''
            },
            {
                id: 4,
                url: 'https://www.youtube.com/embed/vtHoOjxLSyk',
                author: 'Beatriz',
                urlImg: /* 'assets/imagens/depoimento4.jpeg', */ '',
                course: 'Meio Ambiente'
            },
            {
                id: 5,
                url: 'https://www.youtube.com/embed/mCbY55edrnQ',
                author: 'Camila Oliveira',
                urlImg: 'http://uploaddeimagens.com.br/images/002/140/490/full/WhatsApp_Image_2019-04-03_at_14.32.07.jpeg?1560457695',
                course: 'Meio Ambiente'
            },
            {
                id: 6,
                url: 'https://www.youtube.com/embed/1GbyUfzVBoI',
                author: 'Elias Júnior',
                urlImg: /* 'assets/imagens/depoimento6.jpeg', */ 'http://uploaddeimagens.com.br/images/002/140/497/full/WhatsApp_Image_2019-04-03_at_13.48.12.jpeg?1560457839',
                course: 'Eletromecânica'
            },
            {
                id: 7,
                url: 'https://www.youtube.com/embed/TIgtY2FGmos',
                author: 'Juliano Correia',
                urlImg: /* 'assets/imagens/depoimento7.jpeg', */ 'https://i.ibb.co/X4yBR4n/940cf029-ba64-4915-98bf-afc3f3337dad.jpg',
                course: 'Meio Ambiente'
            },
            {
                id: 8,
                url: 'https://www.youtube.com/embed/06ne77ifibw',
                author: 'Maria Catyane',
                urlImg: 'http://uploaddeimagens.com.br/images/002/140/477/full/WhatsApp_Image_2019-04-14_at_15.16.33.jpeg?1560457418',
                course: 'Meio Ambiente'
            },
            {
                id: 9,
                url: 'https://www.youtube.com/embed/Q7imw3bvImc',
                author: 'Maria Catyane',
                urlImg: 'http://uploaddeimagens.com.br/images/002/140/477/full/WhatsApp_Image_2019-04-14_at_15.16.33.jpeg?1560457418',
                course: 'Meio Ambiente'
            },
            {
                id: 10,
                url: 'https://www.youtube.com/embed/goVXAjykDy4',
                author: 'Renata Nayara',
                urlImg: 'https://i.ibb.co/Xpy7F66/0b189dfa-5a61-4879-876f-af8595aa3600.jpg',
                course: ''
            },
            {
                id: 11,
                url: 'https://www.youtube.com/embed/DDv8he91GyU',
                author: 'Renata Sammya',
                urlImg: 'https://uploaddeimagens.com.br/images/002/179/342/full/depoimentojpeg?1562542954',
                course: ''
            },
            {
                id: 12,
                url: 'https://www.youtube.com/embed/u3bX-76FGRE',
                author: 'Thiago Kewin',
                urlImg: '',
                course: ''
            },
            {
                id: 13,
                url: 'https://www.youtube.com/embed/Ckvcr9SZho8',
                author: 'Marlon',
                urlImg: 'http://uploaddeimagens.com.br/images/002/140/511/full/unnamed.jpg?1560458260',
                course: 'Informática'
            },
            {
                id: 14,
                url: 'https://www.youtube.com/embed/ibJioLkeUSM',
                author: 'Marlon',
                urlImg: 'http://uploaddeimagens.com.br/images/002/140/511/full/unnamed.jpg?1560458260',
                course: ''
            },
            {
                id: 15,
                url: 'https://www.youtube.com/embed/zffknHFmlec',
                author: 'Maria Regina',
                urlImg: 'https://uploaddeimagens.com.br/images/002/179/342/full/depoimentojpeg?1562542954',
                course: ''
            }
            /*
            {
              id: 16,
              url: '/src/assets/videos/v322.mp4',
              author: 'Editar'
            }
            */
        ];
    }
    DepositionsService.prototype.getDepositions = function () {
        return this.myDepositions;
    };
    DepositionsService.prototype.getIdDeposition = function (id) {
        var i = 0;
        for (i; i < this.myDepositions.length; i++) {
            if (this.myDepositions[i].id == id) {
                return this.myDepositions[i];
            }
        }
        return null; // caso não encontre
    };
    DepositionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DepositionsService);
    return DepositionsService;
}());



/***/ }),

/***/ "./src/app/records/depositions/depositions.component.css":
/*!***************************************************************!*\
  !*** ./src/app/records/depositions/depositions.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.card-image{\r\n    padding: 2em;\r\n    box-sizing: content-box;\r\n    width: 60%;\r\n    height: 180px;\r\n    border-radius: 1em;\r\n    margin: 35px;\r\n    border: 2px solid #63c6ae;\r\n}\r\n\r\n.card-content h2{\r\n    text-align: center;\r\n    color: #586165;\r\n}\r\n\r\n.photo{\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 2px solid #63c6ae;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.button{\r\n    margin-bottom: em;\r\n    padding: 15px 40px;\r\n    border-radius: 3px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    display: inline-block;\r\n    transition: background .5s;\r\n}\r\n\r\n.button:hover{\r\n   background-color: #929da5;\r\n}\r\n\r\n.button-primary{\r\n    background-color: #63c6ae;\r\n    color: white;\r\n}\r\n\r\n.button-secundary{\r\n    background-color: #455347;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9kZXBvc2l0aW9ucy9kZXBvc2l0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVjb3Jkcy9kZXBvc2l0aW9ucy9kZXBvc2l0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2V7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgbWFyZ2luOiAzNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzYzYzZhZTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTg2MTY1O1xyXG59XHJcblxyXG4ucGhvdG97XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzYzYzZhZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IGVtO1xyXG4gICAgcGFkZGluZzogMTVweCA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVye1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5ZGE1O1xyXG59XHJcblxyXG4uYnV0dG9uLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNjNmFlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLXNlY3VuZGFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTUzNDc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/records/depositions/depositions.component.html":
/*!****************************************************************!*\
  !*** ./src/app/records/depositions/depositions.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of depositions\">\r\n  <div class=\"container\">\r\n    <div class=\"card-image\">\r\n      <div class='card-content'>\r\n        <h2><strong>{{item.author}}</strong></h2>\r\n        <div class=\"photo\"><img [src]=item.urlImg></div>\r\n        <a class=\"button button-primary\" [routerLink]=\"['/records/deposition', item.id]\">\r\n          Assistir\r\n        </a>\r\n       </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/records/depositions/depositions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/records/depositions/depositions.component.ts ***!
  \**************************************************************/
/*! exports provided: DepositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositionsComponent", function() { return DepositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _depositions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../depositions.service */ "./src/app/records/depositions.service.ts");



var DepositionsComponent = /** @class */ (function () {
    function DepositionsComponent(service) {
        this.service = service;
    }
    DepositionsComponent.prototype.ngOnInit = function () {
        this.depositions = this.service.getDepositions();
    };
    DepositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depositions',
            template: __webpack_require__(/*! ./depositions.component.html */ "./src/app/records/depositions/depositions.component.html"),
            providers: [_depositions_service__WEBPACK_IMPORTED_MODULE_2__["DepositionsService"]],
            styles: [__webpack_require__(/*! ./depositions.component.css */ "./src/app/records/depositions/depositions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_depositions_service__WEBPACK_IMPORTED_MODULE_2__["DepositionsService"]])
    ], DepositionsComponent);
    return DepositionsComponent;
}());



/***/ }),

/***/ "./src/app/records/entrevista/entrevista.component.css":
/*!*************************************************************!*\
  !*** ./src/app/records/entrevista/entrevista.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 20%;\r\n    padding: 2px;\r\n  }\r\n\r\n  .card:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }\r\n  \r\n  // Add some padding inside the card container\r\n  .container {\r\n    padding: 2px 16px;\r\n  }\r\n\r\n\r\n  .cards {\r\n \r\n    display: grid;\r\n     \r\n    grid-template-columns: repeat(3, 1fr);\r\n     \r\n    grid-auto-rows: auto;\r\n     \r\n    grid-gap: 1rem;\r\n     \r\n    }\r\n     \r\n    .card {\r\n     \r\n    border: 2px solid #e7e7e7;\r\n     \r\n    border-radius: 4px;\r\n     \r\n    padding: .5rem;\r\n     \r\n    }\r\n    */\r\n   \r\n  .card-container {\r\n      display: grid;\r\n      padding: 1rem;\r\n      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\r\n      grid-gap: 1rem;\r\n  }\r\n   \r\n  .card {\r\n      display: grid;\r\n  }\r\n   \r\n  .card .button {\r\n      align-self: end;\r\n  }\r\n   \r\n  .my-border-card {\r\n    padding: 10px;\r\n    border: 2px solid  #1C1C1C;\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9lbnRyZXZpc3RhL2VudHJldmlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdUNLOztFQUVIO01BQ0ksYUFBYTtNQUNiLGFBQWE7TUFDYiwyREFBMkQ7TUFDM0QsY0FBYztFQUNsQjs7RUFDQTtNQUNJLGFBQWE7RUFDakI7O0VBQ0E7TUFDSSxlQUFlO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9yZWNvcmRzL2VudHJldmlzdGEvZW50cmV2aXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAvLyBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXJcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5jYXJkcyB7XHJcbiBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgIFxyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICAgXHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxuICAgICBcclxuICAgIH1cclxuICAgICBcclxuICAgIC5jYXJkIHtcclxuICAgICBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgXHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgICBcclxuICAgIH1cclxuICAgICovXHJcbiAgIFxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xyXG4gICAgICBncmlkLWdhcDogMXJlbTtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuICAuY2FyZCAuYnV0dG9uIHtcclxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIH1cclxuXHJcbiAgLm15LWJvcmRlci1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAgIzFDMUMxQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/records/entrevista/entrevista.component.html":
/*!**************************************************************!*\
  !*** ./src/app/records/entrevista/entrevista.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card-container mt-5'>\r\n    <ul>\r\n        <li class=\"my-grid-container my-border\" style='margin-bottom: 4px;' *ngFor=\"let item of interviews\">\r\n            <div>\r\n                <img [src]=\"item.urlImg\" alt=\"Avatar\">\r\n            </div>\r\n            <div>\r\n                <p>Aluno(a):</p>\r\n                <p class='my-border-card'>{{item.studentName}}</p>\r\n                <p>Outros dados:</p>\r\n                <div class='my-border-card'>\r\n                    <p>Curso: {{item.courseName}}</p>\r\n                    <p>Sala: {{item.sala}}</p>\r\n                </div>\r\n                <button class='my-button btn btn-primary' [routerLink]=\"['/records/interviews', item.id]\">Visualizar</button>\r\n            </div>\r\n\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/records/entrevista/entrevista.component.ts":
/*!************************************************************!*\
  !*** ./src/app/records/entrevista/entrevista.component.ts ***!
  \************************************************************/
/*! exports provided: EntrevistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrevistaComponent", function() { return EntrevistaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interview.service */ "./src/app/records/interview.service.ts");



var EntrevistaComponent = /** @class */ (function () {
    function EntrevistaComponent(servInterview) {
        this.servInterview = servInterview;
    }
    EntrevistaComponent.prototype.ngOnInit = function () {
        this.interviews = this.servInterview.getInterviews();
    };
    EntrevistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrevista',
            template: __webpack_require__(/*! ./entrevista.component.html */ "./src/app/records/entrevista/entrevista.component.html"),
            styles: [__webpack_require__(/*! ./entrevista.component.css */ "./src/app/records/entrevista/entrevista.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_interview_service__WEBPACK_IMPORTED_MODULE_2__["InterviewService"]])
    ], EntrevistaComponent);
    return EntrevistaComponent;
}());



/***/ }),

/***/ "./src/app/records/interview-details/interview-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/records/interview-details/interview-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Quicksand:400,500\");\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n    font-family: \"Quicksand\", sans-serif;\r\n}\r\nh1 {\r\n    font-size: 32px;\r\n    color: #888888;\r\n}\r\nh2 {\r\n    font-size: 22px;\r\n    color: #555555;\r\n}\r\nh3 {\r\n    font-size: 18px;\r\n    color: #555555;\r\n}\r\nh4 {\r\n    font-size: 16px;\r\n    color: #555555;\r\n}\r\np {\r\n    font-size: 20px;\r\n    color: #555555;\r\n}\r\nimg {\r\n    max-width: 100%;\r\n}\r\n.user-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.content {\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n.interview-margin {\r\n    border: solid;\r\n    border-color: #63c6ae;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9pbnRlcnZpZXctZGV0YWlscy9pbnRlcnZpZXctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdFQUF3RTtBQUN4RTs7OztJQUlJLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZHMvaW50ZXJ2aWV3LWRldGFpbHMvaW50ZXJ2aWV3LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZDo0MDAsNTAwXCIpO1xyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCB7XHJcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VyLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaW50ZXJ2aWV3LW1hcmdpbiB7XHJcbiAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjNjNmFlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/records/interview-details/interview-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/records/interview-details/interview-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\">\r\n    <div class=\"content\">\r\n        <div class=\"user-info\">\r\n            <img [src]=\"interview.urlImg\" alt=\"Foto do aluno\">\r\n            <h2>{{interview.studentName}}</h2>\r\n            <h2>Curso: {{interview.courseName}}</h2>\r\n        </div>\r\n\r\n        <div>\r\n            <div class='my-div-question'>\r\n                <strong><p class='interview-margin'>1º) {{questionOne}}</p></strong>\r\n            </div>\r\n            <p>{{interview.questions[0]}}</p>\r\n\r\n            <div class='my-div-question'>\r\n                <strong><p class='interview-margin'>2º) {{questionTwo}}</p></strong>\r\n            </div>\r\n            <p>{{interview.questions[1]}}</p>\r\n\r\n            <div class='my-div-question'>\r\n                <strong><p class='interview-margin'>3º) {{questionTre}}</p></strong>\r\n            </div>\r\n            <p>{{interview.questions[2]}}</p>\r\n\r\n            <div class='my-div-question'>\r\n                <strong><p class='interview-margin'>4º) {{questionFor}}</p></strong>\r\n            </div>\r\n            <p>{{interview.questions[3]}}</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/records/interview-details/interview-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/records/interview-details/interview-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: InterviewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewDetailsComponent", function() { return InterviewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interview.service */ "./src/app/records/interview.service.ts");




var InterviewDetailsComponent = /** @class */ (function () {
    function InterviewDetailsComponent(servInterviewDetails, rotaAtiva) {
        this.servInterviewDetails = servInterviewDetails;
        this.rotaAtiva = rotaAtiva;
    }
    InterviewDetailsComponent.prototype.ngOnInit = function () {
        this.interview = this.interviewSearchById();
        this.setQuestions();
    };
    InterviewDetailsComponent.prototype.setQuestions = function () {
        this.questionOne = 'O que você diria para um estudante de ensino fundamental (9º ano) que está indeciso quanto a qual tipo de ensino médio realizar: O ensino médio não integrado ou o  ensino médio integrado?';
        this.questionTwo = 'O que você diria a um aluno que acabou de ingressar no 1º ano do ensino médio integrado e está com muitas dúvidas sobre o curso técnico?';
        this.questionTre = 'Que contribuições o ensino médio integrado está trazendo para sua formação?';
        this.questionFor = 'Você arrepende-se de ter optado por realizar o curso técnico integrado no Instituto Federal? Justifique.';
    };
    InterviewDetailsComponent.prototype.interviewSearchById = function () {
        /* this.rotaAtiva.params[date] = retorna o params id da barra de navegação
         * O método getInterviewById (da class service) usará esse retorno para retonar
         * um objeto EntrevistaModel correspondente ao id.
         */
        var date = 'id';
        return this.servInterviewDetails.getInterviewById(this.rotaAtiva.snapshot.params[date]);
    };
    InterviewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interview-details',
            template: __webpack_require__(/*! ./interview-details.component.html */ "./src/app/records/interview-details/interview-details.component.html"),
            styles: [__webpack_require__(/*! ./interview-details.component.css */ "./src/app/records/interview-details/interview-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_interview_service__WEBPACK_IMPORTED_MODULE_3__["InterviewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InterviewDetailsComponent);
    return InterviewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/records/interview.service.ts":
/*!**********************************************!*\
  !*** ./src/app/records/interview.service.ts ***!
  \**********************************************/
/*! exports provided: InterviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewService", function() { return InterviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InterviewService = /** @class */ (function () {
    function InterviewService() {
        this.init();
    }
    InterviewService.prototype.init = function () {
        // console.log('ok--> 1: ' + this.questionOne);
        this.interviewAll = [
            {
                id: 1,
                urlImg: 'assets/imagens/pessoa2.png',
                studentName: 'José Celso de Matos Silva',
                courseName: 'Eletromecânica',
                sala: 3301,
                questions: [
                    'Não tenha medo de cursar o curso médio integrado, pois serão anos que te prepararão para uma educação e ensino profissional diferenciado de qualquer outra instituição pública ou particular. Quando concluído, você terá o ensino concluído e conclusão de um curso técnico de qualidade. Independente do curso, faça aquele em que você ver que realmente você estará adaptado para trabalhar, todos os cursos são bons, identifique-se e estude que os resultados virão.',
                    'O ensino médio integrado não é apenas um ano adicional na grade curricular, ma sim a valorização dos seus conhecimentos que serão importantes para sua carreira profissional escolhida durante o curso. Isso significa a conclusão do ensino médio diferente, pois além de terminar seu curso, sairá do instituto com uma qualificação mostrando que você já está preparado para trabalhar, exercendo um cargo que muitas vezes é somente para pessoas que cursaram grandes cursos. Valorize a oportunidade!',
                    'São muitos mesmo, pois, hoje cursando o 3º ano de eletromecânica do ensino médio integrado, já conseguir elaborar projetos robóticos , juntamente com professores especializados nessa área, onde já participei de um evento internacional no Rio Grande do Sul, todas as despesas pelo instituto. Além disso, já detive conhecimentos relativo a disciplinas que muitas pessoas que estudam em outras escolas não estudaram, preparado assim para realizar provas de concurso e testes militares.',
                    'Não, pois gosto muito de estudar no Instituto.'
                ]
            },
            {
                id: 2,
                urlImg: 'assets/imagens/pessoa2.png',
                studentName: 'João Victor Ferreira dos Santos',
                courseName: 'Eletromecânica',
                sala: 3301,
                questions: [
                    'Diria que seria muito melhor estudar o curso técnico integrado ao médio, porque vale a pena. O aluno é incentivado à fazer pesquisa e sair da instituição com uma profissão.',
                    'Procurar em que áreas de seu curso ele mais se identifica e explorá-las e buscar aprofundar-se fazendo projetos. No final, só virão benefícios e satisfação. Além do mais, isso servirá como preparação para atuar na área do curso escolhido ou fazer o ensino superior.',
                    'O ensino médio integrado foi uma das maiores realizações da minha vida. Estudar o curso técnico integrado mudou minha perspectiva de mundo. Além de estar me preparando para atuar como profissional, realização de projetos de cunho tecnológico e me preparar para o ensino superior.',
                    'Não. Pelo contrário, foi uma das melhores decisões da minha vida, pois minha vida e meu futuro agora estão garantidos graças ao IFPI.'
                ]
            },
            {
                id: 3,
                urlImg: 'assets/imagens/pessoa5.png',
                studentName: 'Laís de Fátima Vasconcelos dos Santos',
                courseName: 'Edificações',
                sala: 2401,
                questions: [
                    'Diria que o ensino médio integrado ao técnico, além de mais complexo é mais completo por se tratar de um ensino que também prepara o estudante para o trabalho.',
                    'Diria que fazendo o ensino técnico ao sair do ensino médio ele vai estar apto para trabalhar na área em que estudou. O ensino técnico integrado traz benefícios para o estudante em relação ao tempo, já que são feitos simultaneamente.',
                    'Mais conhecimentos em uma área diferente do ensino convencional’. Aqui no campus Floriano, por exemplo está disponível os cursos de eletromecânica, informática, edificações e meio ambiente. Eu faço edificações e quando vejo alguma obra, sempre associo com os ensinamentos explicados em sala de aula.',
                    'Não. Foi uma das melhores escolhas que já fiz na vida, conheci uma área nova e ainda posso dizer que estudei no melhor campus do Piauí.'
                ]
            },
            {
                id: 4,
                urlImg: 'assets/imagens/pessoa5.png',
                studentName: 'Maria Clara Soares de Sousa',
                courseName: 'Edificações',
                sala: 2401,
                questions: [
                    'O curso técnico integrado ajuda na melhor qualificação profissional, prepara o jovem para o mercado de trabalho.',
                    'Os cursos técnicos são surpreendentes, você pode acabar gostando e decidir até seguir na área.',
                    'Conhecimento em diferentes áreas.',
                    'Não. Me ajudará no currículo e a adquirir novos conhecimentos.'
                ]
            },
            {
                id: 5,
                urlImg: 'assets/imagens/pessoa2.png',
                studentName: 'Kléber Lucas da Costa Silva',
                courseName: 'Edificações',
                sala: 2401,
                questions: [
                    'O ensino médio convencional (em 3 anos) é menos intensivo do que um médio no IF (Instituto Federal), mesmo que esse tenha um técnico integrado. Em outras escolas, assuntos à nível médio são vistos superficialmente e muitas vezes são negligenciados, além de que há aulas intensivas para tentar cumprir a carga horária, ocupando muito seu tempo.',
                    'O curso técnico é o primeiro contato do estudante com uma possível vida profissional, ele vai adquirindo experiência e maturidade para uma vida adulta. Além disso, o técnico servirá, pois já capacita o estudante e é um adicional para o currículo.',
                    'O ensino médio integrado é muito importante pois ao concluirmos  estamos aptos para entrar no mercado de trabalho. Diariamente eu encontro pessoas na rua que me parabenizam por ser membro do Instituto Federal. Muitas pessoas desejam fazer dessa instituição.',
                    'Não. Pois provavelmente irá me beneficiar em oportunidades de emprego em um futuro próximo. Só tem a somar no currículo pessoal e novos conhecimentos.'
                ]
            }
        ];
    };
    InterviewService.prototype.getInterviews = function () {
        return this.interviewAll;
    };
    InterviewService.prototype.getInterviewById = function (id) {
        if (this.interviewAll[id - 1] !== null) {
            return this.interviewAll[id - 1];
        }
        return null; // id não encontrado
    };
    InterviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InterviewService);
    return InterviewService;
}());



/***/ }),

/***/ "./src/app/records/mural-one.service.ts":
/*!**********************************************!*\
  !*** ./src/app/records/mural-one.service.ts ***!
  \**********************************************/
/*! exports provided: MuralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralService", function() { return MuralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MuralService = /** @class */ (function () {
    function MuralService() {
        this.mural = [
            {
                id: 1,
                student: 'Ana Clara de Sousa Marques',
                iconPerfil: 'assets/imagens/pessoa3.png',
                deposition: 'Calouro, a jornada no instituto vai ser árdua e cansativa, mas acredite, todos esses contraturnos vão valer a pena no final. É um aprendizado para a vida acadêmica e social também. Coragem e boa sorte.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 2,
                student: 'Ildenice Azevedo',
                iconPerfil: 'assets/imagens/pessoa3.png',
                deposition: 'Espero que vocês obtenham um bom desempenho e conhecimento no decorrer do tempo que vocês passarem aqui. Desejo sorte, sucesso e prosperidade e espera também que gostem muito dos cursos disponíveis e da estrutura e de tudo que a escola tem a oferecer.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 3,
                student: 'Laís',
                iconPerfil: 'assets/imagens/pessoa5.png',
                deposition: 'Acredite em si mesmo, você é incrível. E aproveite ao máximo essa instituição maravilhosa',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 4,
                student: 'Géssica Kauane',
                iconPerfil: 'assets/imagens/pessoa5.png',
                deposition: 'Se você conseguio entrar e chegar até aqui você irá conseguir concluir, conseguirá ir muito mais além, e será uma pessoa bem sucedida e um excelente profissional. Se precisarem de ajuda me procurem nas redes sociais, estarei a disposição. Parabéns e boa sorte. Até breve, beijos.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 5,
                student: 'Samuel Henrique de Oliveira Silva',
                iconPerfil: 'assets/imagens/pessoa1.png',
                deposition: 'Leiam bastantes livros na casa da leitura, pois, isso ajuda muito em seu conhecimento e vocabulário. Curtam a escola, porém, nunca coloquem os estudos em 2º lugar. Procure deixar as matérias sempre em dias, isso ajuda muito.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 6,
                student: 'Natanmáx Nicolas da Silva Oliveira',
                iconPerfil: 'assets/imagens/pessoa2.png',
                deposition: 'Preparem-se, vai ser tudo diferente, vai ter muita mudança na vida de vocês. Quando saírem daqui, serão pessoas completamente e até mesmo extremamente diferentes de quando entraram. Aproveitem todas as oportunidades.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 7,
                student: 'Maria Catiany',
                iconPerfil: 'assets/imagens/pessoa5.png',
                deposition: '"Quando você pensar em desistir lembre-se pelo que você esta lutando." Ah! Resolva as listas.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 8,
                student: 'Ana Beatriz Dias Figueredo',
                iconPerfil: 'assets/imagens/Ana_Beatriz_Dias de_Figueiredo.jpg',
                deposition: 'Mantenha o foco, evite distrações, organize-se e cuide do nosso campus.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 9,
                student: 'Fátima Milena de Sousa Alves',
                iconPerfil: 'assets/imagens/Fátima_Milena_de_Sousa_Alves.jpg',
                deposition: 'Tente conciliar o tempo de estudo com diversão. Seja bem-vindo.',
                urlImg: 'imagens/Fátima_Milena_de_Sousa_Alves.jpg',
                courseName: 'Meio Ambiente'
            },
            {
                id: 10,
                student: 'Laura Cristina de Negreiros',
                iconPerfil: 'assets/imagens/LauraCristina_de_Negreiros.jpg',
                deposition: 'Sejam bem-vindos e aproveitem as oportunidades que a instituição lhes dará. Esses serão os melhores anos de aprendizado de vocês.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                id: 11,
                student: 'Rebeca de Souza Gonzaga',
                iconPerfil: 'assets/imagens/Rebeca_de_SouzaGonzaga.jpg',
                deposition: 'Com 02 anos de IFPI, eu já aprendi muita coisa que sei vou levar para vida. No começo não é fácil, mas ninguém disse que seria. Com muito esforço, dedicação e persistência o aluno aprende a lidar com as situações que serão vividas na instituição. Um curso integrado ao médio é diferente de tudo que já passamos e a oportunidade de tê-lo nos proporciona uma nova experiência enquanto estudantes. Para alguns pode ser que traga mais dificuldades, com mais matérias. Para outros o curso integrado pode ser a melhor experiência oferecida pelo Instituto federal, pois muitos se apaixonam pelo curso no decorrer dos 4 anos.',
                urlImg: '',
                courseName: 'Informática'
            },
            {
                id: 12,
                student: 'Ellem Almeida',
                iconPerfil: 'assets/imagens/EllemAlmeidaAmorim.jpg',
                deposition: 'Mesmo apenas estando há dois anos no IFPI, posso enxergar todo o aprendizado que ganhei e que espero aumentar ao término do curso de ensino médio integrado. Desde a entrada no Instituto Federal percebi o quanto eu e meus colegas amadurecemos e o quanto nossa visão de mundo mudou. Mesmo enfrentando dificuldades e desavenças foi aqui que cresci, não só fisicamente, mas mentalmente e é aqui que estou dando meu primeiro passo para o que eu espero ser um grande futuro. Nem todo mundo tem oportunidade de estudar em uma escola com a estrutura e os profissionais que o Instituto oferece, por isso há um certo esforço e exigência para que possamos mostrar bons resultados, mas tudo isso compensa e nos sentimos privilegiados por estarmos em uma Instituição com um bom ensino e aprendendo muito com o curso. Além disso,  nossa vida social também mudou, pois aqui conhecemos amigos que espero que não só cursem comigo todos os 4 anos, mas que permaneçam ao término dos estudos.',
                urlImg: '',
                courseName: 'Informática'
            }
        ];
    }
    MuralService.prototype.getMural = function () {
        return this.mural;
    };
    MuralService.prototype.getMuralId = function (id) {
        var i = 0;
        for (i; i < this.mural.length; i++) {
            if (this.mural[i].id === id + 1) {
                return this.mural[i];
            }
        }
        return null;
    };
    MuralService.prototype.getIntro = function (elemento) {
        var i = 0;
        var space = 0;
        var retorno = '';
        var finish = '...';
        for (i; i < elemento.deposition.length; i++) {
            if (elemento.deposition[i] === ' ') {
                space++;
            }
            retorno += elemento.deposition[i];
            if (space == 5) {
                return retorno + finish;
            }
        }
        return retorno + finish;
    };
    MuralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MuralService);
    return MuralService;
}());



/***/ }),

/***/ "./src/app/records/mural-one/mural-one.component.css":
/*!***********************************************************!*\
  !*** ./src/app/records/mural-one/mural-one.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1em auto;\r\n}\r\n\r\n.quote-container{\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n    background-color: whitesmoke;\r\n    border-radius: 1em;\r\n    overflow: hidden;\r\n    border: 2px solid transparent;    \r\n}\r\n\r\n.student-photo{\r\n    align-self: center;\r\n    margin: 10px auto auto 10px;\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 10%;\r\n}\r\n\r\n.deposition__paragraph{\r\n    font-size: 16px;\r\n    color: #586165;\r\n    font-weight: 400;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.deposition__name{\r\n    font-size: 12px;\r\n    color: #586165;\r\n    margin-left: 1em;\r\n}\r\n\r\n.deposition__course{\r\n    font-size: 12px;\r\n    color: #586165;\r\n    margin: auto auto 1em 1em;\r\n}\r\n\r\n@media screen and (min-width: 720px) {\r\n    .quote-container {\r\n        width: 80%;\r\n        align-self: center;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .deposition__wrapper{\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        align-items: center;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9tdXJhbC1vbmUvbXVyYWwtb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCOztRQUV0QixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZHMvbXVyYWwtb25lL211cmFsLW9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbn1cclxuXHJcbi5xdW90ZS1jb250YWluZXJ7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7ICAgIFxyXG59XHJcblxyXG4uc3R1ZGVudC1waG90b3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIGF1dG8gMTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbi5kZXBvc2l0aW9uX19wYXJhZ3JhcGh7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzU4NjE2NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4uZGVwb3NpdGlvbl9fbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNTg2MTY1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLmRlcG9zaXRpb25fX2NvdXJzZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNTg2MTY1O1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMWVtIDFlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICAgIC5xdW90ZS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlcG9zaXRpb25fX3dyYXBwZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/records/mural-one/mural-one.component.html":
/*!************************************************************!*\
  !*** ./src/app/records/mural-one/mural-one.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor='let item of mural'>\r\n  <div class=\"wrapper\">\r\n    <div class=\"quote-container\">\r\n      <img [src]='item.iconPerfil' alt=\"\" class=\"student-photo\">\r\n      <blockquote class=\"deposition\">\r\n        <p class=\"deposition__paragraph\">\r\n          {{item.deposition}}\r\n        </p>\r\n      </blockquote>\r\n\r\n      <cite>\r\n        <span class=\"deposition__name\">\r\n          {{item.student}}\r\n        </span>\r\n      </cite>\r\n\r\n      <span class=\"deposition__course\">\r\n        Curso: {{item.courseName}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/records/mural-one/mural-one.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/records/mural-one/mural-one.component.ts ***!
  \**********************************************************/
/*! exports provided: MuralOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralOneComponent", function() { return MuralOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mural_one_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mural-one.service */ "./src/app/records/mural-one.service.ts");



var MuralOneComponent = /** @class */ (function () {
    function MuralOneComponent(service) {
        this.service = service;
    }
    MuralOneComponent.prototype.ngOnInit = function () {
        this.mural = this.service.getMural();
    };
    MuralOneComponent.prototype.setIntro = function (elemento) {
        return this.service.getIntro(elemento);
    };
    MuralOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mural-one',
            template: __webpack_require__(/*! ./mural-one.component.html */ "./src/app/records/mural-one/mural-one.component.html"),
            styles: [__webpack_require__(/*! ./mural-one.component.css */ "./src/app/records/mural-one/mural-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mural_one_service__WEBPACK_IMPORTED_MODULE_2__["MuralService"]])
    ], MuralOneComponent);
    return MuralOneComponent;
}());



/***/ }),

/***/ "./src/app/records/mural-outhers/mural-outhers.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-outhers.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {margin-top: 10px; margin-bottom: 10px;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9tdXJhbC1vdXRoZXJzL211cmFsLW91dGhlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcmVjb3Jkcy9tdXJhbC1vdXRoZXJzL211cmFsLW91dGhlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge21hcmdpbi10b3A6IDEwcHg7IG1hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural-outhers.component.html":
/*!********************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-outhers.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class='box'>\r\n    <app-mural-two></app-mural-two>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural-outhers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-outhers.component.ts ***!
  \******************************************************************/
/*! exports provided: MuralOuthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralOuthersComponent", function() { return MuralOuthersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MuralOuthersComponent = /** @class */ (function () {
    function MuralOuthersComponent() {
    }
    MuralOuthersComponent.prototype.ngOnInit = function () {
    };
    MuralOuthersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mural-outhers',
            template: __webpack_require__(/*! ./mural-outhers.component.html */ "./src/app/records/mural-outhers/mural-outhers.component.html"),
            styles: [__webpack_require__(/*! ./mural-outhers.component.css */ "./src/app/records/mural-outhers/mural-outhers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MuralOuthersComponent);
    return MuralOuthersComponent;
}());



/***/ }),

/***/ "./src/app/records/mural-outhers/mural-tre.service.ts":
/*!************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-tre.service.ts ***!
  \************************************************************/
/*! exports provided: MuralTreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralTreService", function() { return MuralTreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MuralTreService = /** @class */ (function () {
    function MuralTreService() {
        this.depositions = [
            {
                idDialog: 1,
                nameStudent: 'Essondro Juniel Veloso do Nascimento Filho',
                responseOne: 'É útil pela preparação para o meio de trabalho, que nos dias atuais é essencial. Já sair daqui (IFPI) com um passo a frente dos demais, por ter a oportunidade de aprender algo a mais, pois conhecimento é sempre bem-vindo.',
                responseTwo: 'Compreender algumas funções do curso, experimentar minicursos, assistir palestras motivacionais, conhecer pessoas maravilhosas, participar de eventos e atividades extracurriculares. Participar e elaborar projetos de extensão.',
                responseTre: 'As relações sociais e pessoais, além de estar preparado para o ENEM e mercado de trabalho.',
                urlImg: '',
                courseName: 'Eletromecânica'
            },
            {
                idDialog: 2,
                nameStudent: 'Natanmáx Nicolas',
                responseOne: 'Porque te torna capaz de ter mais uma formação em um curto espaçp de tempo, fazendo com que você tenha mais oportunidades.',
                responseTwo: 'Aprender muita coisa, e olhar o mundo de outras maneiras, porque não é um simples ensino médio.',
                responseTre: 'A vida, e para situar melhor o seu futuro e o que você quer.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                idDialog: 3,
                nameStudent: 'Ildenice Azevedo',
                responseOne: 'Porque por mais que cada aluno que aqui ingressa não se identifique com o curso, com o decorrer do tempo vai perceber que não somente o curso, mas a instituição projeta nosso futuro de forma inigualável, tornando-nos futuros técnicos profissionais.',
                responseTwo: 'Aprender, adquirir muito mais conhecimentos no curso em que cada aluno ingressa, além de aprofundar a aprendizagem acerca das disciplinas ministradas. As pesquisas aqui realizadas são de fundamental importância no conhecimento, pois somente o IFPI é capaz de proporcionar uma aprendizagem excelente.',
                responseTre: 'Exercer uma profissão, na qual você já vai estar preparado para executá-la, pois o IFPI é uma instituição que realmente prepara os seus alunos para um futuro brilhante.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            },
            {
                idDialog: 4,
                nameStudent: 'João Batista Soares Neto',
                responseOne: 'Pra quem nunca se cobrou ao máximo, pra quem nunca soube o que é ter compromisso e força de vontade, melhor não optar por essa modalidade de ensino. Mas respondendo a esta pergunta, por que fazer o curso integrado? Deve fazê-lo para além de se descobrir, você será bem mais que um aluno, será um cidadão e um excelente profissional.',
                responseTwo: 'Aprender coisas jamais imaginadas e ofertadas de maneira tão abrangente e prática. Aprendemos a lidar com situações em que é preciso maturidade, disciplina, companheirismo e compromisso com os outros e, acima de tudo, com você mesmo. No final de nossa carreira, estamos preparados em todos os aspectos a encarar situações adversas e favoráveis de todos os níveis. Descobrir algo que você se identifica (ou não) e explorar e aumentar suas capacidades.',
                responseTre: 'Ofertar qualidade de serviço, boa vivência, experiência, audácia, inteligência voltadas a desenvolver sua função, seja qual for, de maneira única e eficaz.',
                urlImg: '',
                courseName: 'Eletromecânica'
            },
            {
                idDialog: 5,
                nameStudent: 'Samuel',
                responseOne: 'Para ter maior conhecimento das demais áreas de cada curso e para sair do seu ensino médio com algo maior no seu currículo, que contará muito futuramente.',
                responseTwo: 'Usufruir de uma ótima estrutura, ótimos professores e uma maior didática de ensino.',
                responseTre: 'Para enfrentar uma universidade ótima, e já está preparado para qualquer barreira no futuro profissional.',
                urlImg: '',
                courseName: 'Meio Ambiente'
            }
        ];
        this.questionOne = 'Por que fazer o curso integrado?';
        this.questionTwo = 'No ensino médio integrado temos a oportunidade de ...';
        this.questionTre = 'Ao concluir o ensino médio integrado você estará melhor preparado para ...';
    }
    MuralTreService.prototype.getDepositions = function () {
        return this.depositions;
    };
    MuralTreService.prototype.getElementIdMural = function (id) {
        return this.depositions[id];
    };
    MuralTreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MuralTreService);
    return MuralTreService;
}());



/***/ }),

/***/ "./src/app/records/mural-outhers/mural-tre/mural-tre.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-tre/mural-tre.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZHMvbXVyYWwtb3V0aGVycy9tdXJhbC10cmUvbXVyYWwtdHJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural-tre/mural-tre.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-tre/mural-tre.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  <div class='container'>\r\n  <div class=\"slider\">\r\n    <ul class='slides'>\r\n        <li *ngFor=\"let item of myDepositions\">\r\n          <div class='card emi-card' >\r\n            <div class='card-image'><img src='assets/imagens/avatar.jpg'></div>\r\n            <div class='card-content'>\r\n              <p>Autor(a): <strong>{{item.nameStudent}}</strong></p>\r\n            </div>\r\n            <div class='card-action'>\r\n              <button class='button' [routerLink]=\"['/records/mural-tre/', item.idDialog]\">Ler</button>\r\n            </div>\r\n          </div>\r\n        </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n-->\r\n<h5>Não implementado</h5>\r\n<div class=\"section\">\r\n    <h5>Fotos</h5>\r\n    <br>\r\n    <div class=\"slider\">\r\n      <ul class=\"slides\">\r\n        <li>\r\n          <img src=\"assets/imagens/avatar.jpg\"> <!-- random image -->\r\n        </li>\r\n        <li>\r\n          <img src='assets/imagens/avatar.jpg'>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural-tre/mural-tre.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-tre/mural-tre.component.ts ***!
  \************************************************************************/
/*! exports provided: MuralTreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralTreComponent", function() { return MuralTreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mural_tre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mural-tre.service */ "./src/app/records/mural-outhers/mural-tre.service.ts");



var MuralTreComponent = /** @class */ (function () {
    function MuralTreComponent(service) {
        this.service = service;
    }
    MuralTreComponent.prototype.ngOnInit = function () {
        this.queryOne = this.service.questionOne;
        this.queryTwo = this.service.questionTwo;
        this.queryTre = this.service.questionTre;
        this.myDepositions = this.service.getDepositions();
    };
    MuralTreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mural-tre',
            template: __webpack_require__(/*! ./mural-tre.component.html */ "./src/app/records/mural-outhers/mural-tre/mural-tre.component.html"),
            styles: [__webpack_require__(/*! ./mural-tre.component.css */ "./src/app/records/mural-outhers/mural-tre/mural-tre.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mural_tre_service__WEBPACK_IMPORTED_MODULE_2__["MuralTreService"]])
    ], MuralTreComponent);
    return MuralTreComponent;
}());



/***/ }),

/***/ "./src/app/records/mural-outhers/mural-two.service.ts":
/*!************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-two.service.ts ***!
  \************************************************************/
/*! exports provided: MuralTwoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralTwoService", function() { return MuralTwoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MuralTwoService = /** @class */ (function () {
    function MuralTwoService() {
        this.questionOne = 'É 10 estudar no IFPI porque...';
        this.questionTwo = 'No ensino médio integrado não aprendemos somente conteúdos, aqui aprendemos ...';
        // banco de dados
        this.depositions = [
            {
                idDeposition: 1,
                nameStudent: 'Vanessa de Sousa Rodrigues',
                responseOne: 'Porque aqui contamos com um quadro excelente de professores, com um acervo super completo de livros didáticos e paradidáticos. O instituto campus Floriano apresenta uma das melhores estruturas de escolas públicas do Estado. A qualidade do ensino é excelente. Aqui temos ônibus grátis, refeitório. Temos variadas bolsas para ajudar, setor pedagógico, médico etc.',
                responseTwo: 'De acordo com cada curso, você aprende muitas coisas. Temos acesso a laboratórios para um melhor desenvolvimento de atividades quando relacionada a cada área. Como se não bastasse tudo isso, o IFPI nos proporciona muitas amizades, pessoas acolhedoras. Aqui aprendemos de fato a ser pessoas melhores, sem dúvidas.',
                urlImg: 'assets/imagens/vanessa_de_sousa.jpeg',
                courseName: 'Informática'
            },
            {
                idDeposition: 2,
                nameStudent: 'Lucas de Sousa Reis',
                responseOne: 'Aqui tive experiências que levarei para o resto da minha vida, na qual tive um incentivo da escola em todos os apectos, como: Ensino de qualidade, refeição, segurança, dentista, nutricionista, psicólogo, academia, acesso a vários esportes e outros. Não serão todos os alunos que terão oportunidade de participar dessa escola, então, você aluno(a) terá que se esforçar do começo ao fim, pois esse investimento terá um preço.',
                responseTwo: 'A conviver, diferente de outras escolas temos vários cursos para escolher, mas isso acaba resultando a pessoas de gostos diferentes. Mudamos, aprendemos ou nos acostumamos com esses gostos.',
                urlImg: 'assets/imagens/lucas_de_sousa_reis.jpeg',
                courseName: 'Informática'
            },
            {
                idDeposition: 3,
                nameStudent: 'Kassia Cristina',
                responseOne: 'Ele nos oferece uma ótima estrutura que nos acolhe, tornando-se nossa segunda casa. O instituto proporciona nos desenvolvermos como pessoa e nos oferece várias oportunidades.',
                responseTwo: 'A ser bons profissionais, a ser pessoas melhores. Os professores nos passam experiências e ensinamentos que vão além do conteúdo da matéria.',
                urlImg: 'assets/imagens/pessoa5.png',
                courseName: 'Informática'
            },
            {
                idDeposition: 4,
                nameStudent: 'Emanuela de Jesus',
                responseOne: 'É 10 porque a estrutura é uma das melhores, temos o melhor acervo de livros de floriano, professores bons que nos ensinam bem. Temos muitas oportunidades estudando aqui e quando saírmos daqui teremos novas oportunidades.',
                responseTwo: 'Como falar melhor em seminários, aprender a trabalhar em equipe, ter mais responsabilidade para entregar trabalhos, fazer trabalhos, aprender a respeitar as diferenças das pessoas, aprender novas informações.',
                urlImg: 'assets/imagens/pessoa5.png',
                courseName: 'Informática'
            },
            {
                idDeposition: 5,
                nameStudent: 'Maria Eduarda Tomaz',
                responseOne: 'É composto por ótimos professores, vários ambientes da escola que nos estimulam a estudar e também por funcionários que nos tratam muito bem.',
                responseTwo: 'Também aprendemos muito com o curso que escolhemos, adquirimos conhecimentos diferentes do que somos acostumados.',
                urlImg: 'assets/imagens/pessoa5.png',
                courseName: 'Não informado'
            },
            {
                idDeposition: 6,
                nameStudent: 'Geovana Araújo Ferreira',
                responseOne: 'É uma escola onde você encontra várias oportunidades, possui acesso a um estudo de qualidade com professores adequados, além de profissionais e servidores em geral altamente atenciosos. Possuem asistência especializada em vários setores como saúde, alimentação. Biblioteca com acervo grande e variado. Casa da leitura com livros interessantes e de acesso facilitado. A biblioteca, ainda, apresenta o melhor material quando comparada à cidade.',
                responseTwo: 'A sermos mais humanos e compreensíveis. Termos uma visão melhor do mundo.',
                urlImg: 'assets/imagens/pessoa5.png',
                courseName: 'Informática'
            },
            {
                idDeposition: 7,
                nameStudent: 'João Batista',
                responseOne: 'É a melhor rede de ensino médio-técnico do país. Aprendi muita coisa ao longo de minha caminhada. Cresci de maneira construtiva e positiva, desenvolvi projetos. Cresci tanto no caráter quantp em conhecimento e experiência. Não vou mentir, não é fácil, de maneira nenhuma chegar até aqui, mas nessa vida nada é fácil. Gostaria, inclusive de dedicar todos esses anos, primeiramente a DEUS e em segundo a meu pai, que faleceu na data de 07/09/2018 vítima de câncer. Ele é o meu herói.',
                responseTwo: 'A nos tornarmos o melhor de nós mesmos, a ter coragem, malícia, audácia, destreza, fé amor, compaixão, respeito, medo insegurança, confiança, força de vontade, esperança... enfim, só vivendo para se descobrir.',
                urlImg: 'assets/imagens/psessoa5.png',
                courseName: 'Eletromecânica'
            },
            {
                idDeposition: 8,
                nameStudent: 'Essondro Juniel Veloso do Nascimento',
                responseOne: 'Possui um grande número de professores qualificados e empenhados a ensinar. Possui estrutura e oferece apoio aos alunos.',
                responseTwo: 'A se relacionar melhor com os colegas de classe e de outros cursos. Motivação por meio de atividades físicas. Aprendemos o quanto o incwntivo é importante na vida dos estudantes. Apoio e parceria são essenciais para aguentar os 04 anos. Aprendemos a fazer amigos, que muitas vezes são os que garantem o citado anterior, amigos esses que vamos querer levar para o resto da vida.',
                urlImg: 'assets/imagens/pessoa2.png',
                courseName: 'Eletromecânica'
            }
        ];
    }
    MuralTwoService.prototype.getDepositions = function () {
        return this.depositions;
    };
    MuralTwoService.prototype.getItemMural = function (id) {
        var i = 0;
        for (i; i < this.depositions.length; i++) {
            if (this.depositions[i].idDeposition == id) {
                return this.depositions[i];
            }
        }
        return null; // caso não encontre o elemento
    };
    MuralTwoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MuralTwoService);
    return MuralTwoService;
}());



/***/ }),

/***/ "./src/app/records/mural-outhers/mural-two/mural-two.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-two/mural-two.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-barra {\r\n    background-color: rgb( 99, 198, 174);\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.fundo {\r\n    background-color: #1C1C1C;\r\n}\r\n\r\n.my-border-coponent-dicas {\r\n    padding: 10px;\r\n    border: 2px solid  #1C1C1C;\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9tdXJhbC1vdXRoZXJzL211cmFsLXR3by9tdXJhbC10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZHMvbXVyYWwtb3V0aGVycy9tdXJhbC10d28vbXVyYWwtdHdvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktYmFycmEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKCA5OSwgMTk4LCAxNzQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mdW5kbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMxQzFDO1xyXG59XHJcblxyXG4ubXktYm9yZGVyLWNvcG9uZW50LWRpY2FzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAgIzFDMUMxQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural-two/mural-two.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-two/mural-two.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='mt-3 mb-3'>\r\n    <div *ngFor=\"let item of depositions\">\r\n        <div class='my-barra'>\r\n            <h2>De veteranos para novatos</h2>\r\n        </div>\r\n        <div class=\"my-div my-border my-grid-container\">\r\n            <div>\r\n                <img [src]=\"item.urlImg\" style='align-content: center'>\r\n            </div>\r\n            <div>\r\n                <p>Aluno(a):</p>\r\n                <p class='my-border-coponent-dicas'><strong>{{item.nameStudent}}</strong></p>\r\n                <div class='my-border-coponent-dicas'>\r\n                    <p><strong>1º) {{questionOne}}</strong></p>\r\n                    <p><strong>2º) {{questionTwo}}</strong></p>\r\n                </div>\r\n                <button [routerLink]=\"['/records/mural-two/', item.idDeposition]\" class='my-button btn btn-primary' style='float: right;'>\r\n              Visualizar\r\n            </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural-two/mural-two.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural-two/mural-two.component.ts ***!
  \************************************************************************/
/*! exports provided: MuralTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralTwoComponent", function() { return MuralTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mural_two_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mural-two.service */ "./src/app/records/mural-outhers/mural-two.service.ts");



var MuralTwoComponent = /** @class */ (function () {
    function MuralTwoComponent(service) {
        this.service = service;
    }
    MuralTwoComponent.prototype.ngOnInit = function () {
        this.questionOne = this.service.questionOne;
        this.questionTwo = this.service.questionTwo;
        this.depositions = this.service.getDepositions();
    };
    MuralTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mural-two',
            template: __webpack_require__(/*! ./mural-two.component.html */ "./src/app/records/mural-outhers/mural-two/mural-two.component.html"),
            styles: [__webpack_require__(/*! ./mural-two.component.css */ "./src/app/records/mural-outhers/mural-two/mural-two.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mural_two_service__WEBPACK_IMPORTED_MODULE_2__["MuralTwoService"]])
    ], MuralTwoComponent);
    return MuralTwoComponent;
}());



/***/ }),

/***/ "./src/app/records/mural-outhers/mural2-details/mural2-details.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural2-details/mural2-details.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZHMvbXVyYWwtb3V0aGVycy9tdXJhbDItZGV0YWlscy9tdXJhbDItZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural2-details/mural2-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural2-details/mural2-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-3\">\r\n    <div class='box'>\r\n        <h3 class=\"my-border\"><strong>{{queryOne}}</strong></h3>\r\n        <p class=\"my-barra text-white\">{{itemMural.responseOne}}</p>\r\n        <h3 class='my-border'><strong>{{queryTwo}}</strong></h3>\r\n        <p class=\"my-barra text-white\">{{itemMural.responseTwo}}</p>\r\n        <p><strong>Por: {{itemMural.nameStudent}}</strong></p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural2-details/mural2-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural2-details/mural2-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Mural2DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mural2DetailsComponent", function() { return Mural2DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mural_two_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../mural-two.service */ "./src/app/records/mural-outhers/mural-two.service.ts");




var Mural2DetailsComponent = /** @class */ (function () {
    function Mural2DetailsComponent(servModel, servRotas) {
        this.servModel = servModel;
        this.servRotas = servRotas;
    }
    Mural2DetailsComponent.prototype.ngOnInit = function () {
        this.queryOne = this.servModel.questionOne;
        this.queryTwo = this.servModel.questionTwo;
        this.itemMural = this.setItemSelected();
    };
    Mural2DetailsComponent.prototype.setItemSelected = function () {
        var date = 'id';
        var search = this.servRotas.snapshot.params[date];
        return this.servModel.getItemMural(search);
    };
    Mural2DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mural2-details',
            template: __webpack_require__(/*! ./mural2-details.component.html */ "./src/app/records/mural-outhers/mural2-details/mural2-details.component.html"),
            styles: [__webpack_require__(/*! ./mural2-details.component.css */ "./src/app/records/mural-outhers/mural2-details/mural2-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mural_two_service__WEBPACK_IMPORTED_MODULE_3__["MuralTwoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], Mural2DetailsComponent);
    return Mural2DetailsComponent;
}());



/***/ }),

/***/ "./src/app/records/mural-outhers/mural3-details/mural3-details.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural3-details/mural3-details.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZHMvbXVyYWwtb3V0aGVycy9tdXJhbDMtZGV0YWlscy9tdXJhbDMtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural3-details/mural3-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural3-details/mural3-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 col-md-12 col-lg2'>\r\n      <p class='title'>Aluno(a): {{itemMural.nameStudent}}</p>\r\n      <p><strong>{{queryOne}}</strong></p>\r\n      <p>{{itemMural.responseOne}}</p>\r\n      <p><strong>{{queryTwo}}</strong></p>\r\n      <p>{{itemMural.responseTwo}}</p>\r\n      <p><strong>{{queryTre}}</strong></p>\r\n      <p>{{itemMural.responseTre}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/records/mural-outhers/mural3-details/mural3-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/records/mural-outhers/mural3-details/mural3-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Mural3DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mural3DetailsComponent", function() { return Mural3DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mural_tre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../mural-tre.service */ "./src/app/records/mural-outhers/mural-tre.service.ts");




var Mural3DetailsComponent = /** @class */ (function () {
    function Mural3DetailsComponent(servModel, servRotas) {
        this.servModel = servModel;
        this.servRotas = servRotas;
    }
    Mural3DetailsComponent.prototype.ngOnInit = function () {
        this.queryOne = this.servModel.questionOne;
        this.queryTwo = this.servModel.questionTwo;
        this.queryTre = this.servModel.questionTre;
        this.itemMural = this.setElementMural();
    };
    Mural3DetailsComponent.prototype.setElementMural = function () {
        var date = 'id';
        var search = this.servRotas.snapshot.params[date];
        return this.servModel.getElementIdMural(search);
    };
    Mural3DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mural3-details',
            template: __webpack_require__(/*! ./mural3-details.component.html */ "./src/app/records/mural-outhers/mural3-details/mural3-details.component.html"),
            styles: [__webpack_require__(/*! ./mural3-details.component.css */ "./src/app/records/mural-outhers/mural3-details/mural3-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mural_tre_service__WEBPACK_IMPORTED_MODULE_3__["MuralTreService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], Mural3DetailsComponent);
    return Mural3DetailsComponent;
}());



/***/ }),

/***/ "./src/app/records/records-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/records/records-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RecordsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsRoutingModule", function() { return RecordsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrevista/entrevista.component */ "./src/app/records/entrevista/entrevista.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _depositions_depositions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./depositions/depositions.component */ "./src/app/records/depositions/depositions.component.ts");
/* harmony import */ var _mural_one_mural_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mural-one/mural-one.component */ "./src/app/records/mural-one/mural-one.component.ts");
/* harmony import */ var _mural_outhers_mural_outhers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mural-outhers/mural-outhers.component */ "./src/app/records/mural-outhers/mural-outhers.component.ts");
/* harmony import */ var _deposition_details_deposition_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deposition-details/deposition-details.component */ "./src/app/records/deposition-details/deposition-details.component.ts");
/* harmony import */ var _mural_outhers_mural3_details_mural3_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mural-outhers/mural3-details/mural3-details.component */ "./src/app/records/mural-outhers/mural3-details/mural3-details.component.ts");
/* harmony import */ var _mural_outhers_mural2_details_mural2_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mural-outhers/mural2-details/mural2-details.component */ "./src/app/records/mural-outhers/mural2-details/mural2-details.component.ts");
/* harmony import */ var _interview_details_interview_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interview-details/interview-details.component */ "./src/app/records/interview-details/interview-details.component.ts");











var routes = [
    { path: 'mural-one', component: _mural_one_mural_one_component__WEBPACK_IMPORTED_MODULE_5__["MuralOneComponent"] },
    { path: 'mural-outhers', component: _mural_outhers_mural_outhers_component__WEBPACK_IMPORTED_MODULE_6__["MuralOuthersComponent"] },
    { path: 'depositions-in-videos', component: _depositions_depositions_component__WEBPACK_IMPORTED_MODULE_4__["DepositionsComponent"] },
    { path: 'interviews', component: _entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_1__["EntrevistaComponent"] },
    { path: 'interviews/:id', component: _interview_details_interview_details_component__WEBPACK_IMPORTED_MODULE_10__["InterviewDetailsComponent"] },
    { path: 'deposition/:id', component: _deposition_details_deposition_details_component__WEBPACK_IMPORTED_MODULE_7__["DepositionDetailsComponent"] },
    { path: 'mural-two/:id', component: _mural_outhers_mural2_details_mural2_details_component__WEBPACK_IMPORTED_MODULE_9__["Mural2DetailsComponent"] },
    { path: 'mural-tre/:id', component: _mural_outhers_mural3_details_mural3_details_component__WEBPACK_IMPORTED_MODULE_8__["Mural3DetailsComponent"] }
];
var RecordsRoutingModule = /** @class */ (function () {
    function RecordsRoutingModule() {
    }
    RecordsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], RecordsRoutingModule);
    return RecordsRoutingModule;
}());



/***/ }),

/***/ "./src/app/records/records.module.ts":
/*!*******************************************!*\
  !*** ./src/app/records/records.module.ts ***!
  \*******************************************/
/*! exports provided: RecordsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsModule", function() { return RecordsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mural_one_mural_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mural-one/mural-one.component */ "./src/app/records/mural-one/mural-one.component.ts");
/* harmony import */ var _records_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./records-routing.module */ "./src/app/records/records-routing.module.ts");
/* harmony import */ var _depositions_depositions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./depositions/depositions.component */ "./src/app/records/depositions/depositions.component.ts");
/* harmony import */ var _mural_outhers_mural_two_mural_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mural-outhers/mural-two/mural-two.component */ "./src/app/records/mural-outhers/mural-two/mural-two.component.ts");
/* harmony import */ var _mural_outhers_mural_tre_mural_tre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mural-outhers/mural-tre/mural-tre.component */ "./src/app/records/mural-outhers/mural-tre/mural-tre.component.ts");
/* harmony import */ var _mural_outhers_mural_outhers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mural-outhers/mural-outhers.component */ "./src/app/records/mural-outhers/mural-outhers.component.ts");
/* harmony import */ var _deposition_details_deposition_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deposition-details/deposition-details.component */ "./src/app/records/deposition-details/deposition-details.component.ts");
/* harmony import */ var _mural_outhers_mural2_details_mural2_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mural-outhers/mural2-details/mural2-details.component */ "./src/app/records/mural-outhers/mural2-details/mural2-details.component.ts");
/* harmony import */ var _mural_outhers_mural3_details_mural3_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mural-outhers/mural3-details/mural3-details.component */ "./src/app/records/mural-outhers/mural3-details/mural3-details.component.ts");
/* harmony import */ var _entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entrevista/entrevista.component */ "./src/app/records/entrevista/entrevista.component.ts");
/* harmony import */ var _interview_details_interview_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interview-details/interview-details.component */ "./src/app/records/interview-details/interview-details.component.ts");














var RecordsModule = /** @class */ (function () {
    function RecordsModule() {
    }
    RecordsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _depositions_depositions_component__WEBPACK_IMPORTED_MODULE_5__["DepositionsComponent"],
                _mural_one_mural_one_component__WEBPACK_IMPORTED_MODULE_3__["MuralOneComponent"],
                _mural_outhers_mural_two_mural_two_component__WEBPACK_IMPORTED_MODULE_6__["MuralTwoComponent"],
                _mural_outhers_mural_tre_mural_tre_component__WEBPACK_IMPORTED_MODULE_7__["MuralTreComponent"],
                _mural_outhers_mural_outhers_component__WEBPACK_IMPORTED_MODULE_8__["MuralOuthersComponent"],
                _deposition_details_deposition_details_component__WEBPACK_IMPORTED_MODULE_9__["DepositionDetailsComponent"],
                _mural_outhers_mural2_details_mural2_details_component__WEBPACK_IMPORTED_MODULE_10__["Mural2DetailsComponent"],
                _mural_outhers_mural3_details_mural3_details_component__WEBPACK_IMPORTED_MODULE_11__["Mural3DetailsComponent"],
                _entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_12__["EntrevistaComponent"],
                _interview_details_interview_details_component__WEBPACK_IMPORTED_MODULE_13__["InterviewDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _records_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecordsRoutingModule"]
            ]
        })
    ], RecordsModule);
    return RecordsModule;
}());



/***/ })

}]);
//# sourceMappingURL=records-records-module.js.map