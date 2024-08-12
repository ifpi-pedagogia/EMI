(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-basic-module"],{

/***/ "./src/app/basic/basic-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/basic/basic-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRoutingModule", function() { return BasicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _brief_history_brief_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brief-history/brief-history.component */ "./src/app/basic/brief-history/brief-history.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education.component */ "./src/app/basic/education/education.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/basic/home/home.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/basic/sobre/sobre.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'breve-historico', component: _brief_history_brief_history_component__WEBPACK_IMPORTED_MODULE_3__["BriefHistoryComponent"] },
    { path: 'EPI', component: _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"] },
    { path: 'sobre', component: _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_6__["SobreComponent"] }
];
var BasicRoutingModule = /** @class */ (function () {
    function BasicRoutingModule() {
    }
    BasicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicRoutingModule);
    return BasicRoutingModule;
}());



/***/ }),

/***/ "./src/app/basic/basic.module.ts":
/*!***************************************!*\
  !*** ./src/app/basic/basic.module.ts ***!
  \***************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-routing.module */ "./src/app/basic/basic-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/basic/home/home.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "./src/app/basic/education/education.component.ts");
/* harmony import */ var _brief_history_brief_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brief-history/brief-history.component */ "./src/app/basic/brief-history/brief-history.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/basic/sobre/sobre.component.ts");








var BasicModule = /** @class */ (function () {
    function BasicModule() {
    }
    BasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"], _brief_history_brief_history_component__WEBPACK_IMPORTED_MODULE_6__["BriefHistoryComponent"], _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_7__["SobreComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicRoutingModule"]
            ]
        })
    ], BasicModule);
    return BasicModule;
}());



/***/ }),

/***/ "./src/app/basic/brief-history/brief-history.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/basic/brief-history/brief-history.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro__img{\r\n    float: left;\r\n}\r\n\r\n.my-border{\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMvYnJpZWYtaGlzdG9yeS9icmllZi1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmFzaWMvYnJpZWYtaGlzdG9yeS9icmllZi1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm9fX2ltZ3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubXktYm9yZGVye1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/basic/brief-history/brief-history.component.html":
/*!******************************************************************!*\
  !*** ./src/app/basic/brief-history/brief-history.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container mt-5 mb-5'>\r\n    <div class=\"box\">\r\n        <h2 class='my-barra'>Para refletir...</h2>\r\n        <div class='my-border'>\r\n            <img [src]=\"imgIntro\" alt=\"\" class=\"intro__img\">\r\n            <p>Por que você escolheu estudar no Instituto Federal?</p>\r\n            <p>Por que escolheu realizar o curso técnico Integrado ao Ensino Médio?</p>\r\n            <h4><strong>Não sei quais suas respostas, mas vou arriscar alguns palpites:</strong></h4>\r\n            <ul>\r\n                <li>Seria pelo “status” de estudar em uma escola federal?</li>\r\n                <li>Seria porque o Instituto oferece o curso técnico Integrado ao Ensino Médio e você sempre quis fazer o Ensino Médio na forma integrada?</li>\r\n                <li>Ou será que você optou pela Instituição e não pelo curso Integrado?</li>\r\n            </ul>\r\n            <p><strong>Independente dos seus motivos você já é uma pessoa privilegiada por fazer parte desta Instituição!\r\n          Sua experiência com curso técnico integrado ao ensino médio trará para você uma nova visão de mundo.</strong>\r\n            </p>\r\n            <p>Ao concluir o curso você estará bem preparado, sejam quais forem suas escolhas posteriores. Isso porque o Instituto Federal tem o compromisso de oferecer uma educação profissional humanizadora, cidadã, uma formação para a vida e isto inclui\r\n                a preparação adequada para o trabalho.\r\n            </p>\r\n        </div>\r\n        <h2 class='my-barra'>Surgimento dos Institutos Federais</h2>\r\n        <div class='my-border'>\r\n            <p>Os Institutos Federais nem sempre foram assim denominados. 1909 é considerado o marco da Educação Profissional com a criação de escolas de Aprendizes e Artífices, pelo presidente Nilo Peçanha. Estas escolas passaram por diferentes transformações\r\n                e denominações: Liceus Profissionais, Escolas Industrial e Técnica, Escola Técnica Federal, Centro Federal de Educação Tecnológica – CEFET. Apenas em 2008 , através da lei 11.892/2008 foram criados os Institutos Federais de Educação Ciência\r\n                e Tecnológia.\r\n            </p>\r\n        </div>\r\n        <h2 class='my-barra'>Atualidade</h2>\r\n        <div class='my-border'>\r\n            <p>\r\n                Atualmente existem 38 institutos espalhados por todo o Brasil. O Instituto Federal do Piauí- IFPI possui um total de 20 <i>campus</i>. O <i>campus</i>Floriano completará 25 anos de existência em agosto de 2019. Neste são oferecidos cursos\r\n                técnicos integrados ao Ensino Médio, cursos técnicos concomitantes e subsequentes, cursos superiores de licenciatura e cursos de pós-graduação.\r\n            </p>\r\n            <p>\r\n                No ato da inscrição no classificatório, você poderá optar por um dos quatro cursos integrados: Edificações, Eletromecânica, Informática e Meio Ambiente. Os Institutos Federais de Educação, Ciência e Tecnologia são instituições de educação superior, básica\r\n                e profissional especializados na oferta de educação profissional e tecnológica nas diferentes modalidades de ensino. Estas instituições tem o compromisso com o desenvolvimento pleno do estudante, que significa, além da preparação técnica\r\n                e intelectual, o desenvolvimento do espírito crítico científico, a formação de valores e a responsabilidade com a transformação social.\r\n            </p>\r\n        </div>\r\n        <h2 class='my-barra'>Tudo isso pautado na tríade: ensino, pesquisa e extensão.</h2>\r\n        <div class='my-border'>\r\n            <p><strong>Mas o que significa tríade?</strong></p>\r\n            <img [src]='imgAluna' alt=\"\" class=\"intro__img\">\r\n            <p>\r\n                Utilizamos o nome tríade para representar na formação integrada um conjunto de três eixos, o ensino, a pesquisa e a extensão. Juntos eles formam um base indissociável, cada eixo tem uma função, no entanto um precisa do outro para completar seu sentido\r\n                e juntos atingem um objetivo comum. <strong>Assim, podemos compará-la a um “tripé”.</strong>\r\n            </p>\r\n            <p>A tríade é um dos agentes responsáveis pela consolidação da formação integrada, ampla e cidadã.</p>\r\n            <ul>\r\n                <li>\r\n                    <strong>Ensino</strong> - ocorre geralmente em sala de aula através da transmissão de conteúdos\r\n                </li>\r\n                <li>\r\n                    <strong>Pesquisa</strong> - é o aprofundamento do conteúdo já repassado em sala de aula, visando a produção de novos conhecimentos.\r\n                </li>\r\n                <li>\r\n                    <strong>Extensão</strong> – é aplicação das fases do ensino e da pesquisa através de ações (projetos) desenvolvidos pelos estudantes e docentes e aplicado em benefício da sociedade para auxiliar na resolução de problemas. Os projetos\r\n                    de extensão contribuem para a formação de estudantes integrados com as demandas da sociedade, contribuindo para o desenvolvimento de profissionais-cidadãos.\r\n                </li>\r\n            </ul>\r\n            <br>\r\n            <br>\r\n            <h4 style=\"text-align: center\">Agora você faz parte deste universo!</h4>\r\n            <h4 style=\"text-align: center\">Esforço e determinação serão fundamentais para seu êxito!</h4>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/basic/brief-history/brief-history.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/basic/brief-history/brief-history.component.ts ***!
  \****************************************************************/
/*! exports provided: BriefHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefHistoryComponent", function() { return BriefHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BriefHistoryComponent = /** @class */ (function () {
    function BriefHistoryComponent() {
        this.imgIntro = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/intro.png';
        this.imgAluna = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/section2.png';
    }
    BriefHistoryComponent.prototype.ngOnInit = function () {
    };
    BriefHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brief-history',
            template: __webpack_require__(/*! ./brief-history.component.html */ "./src/app/basic/brief-history/brief-history.component.html"),
            styles: [__webpack_require__(/*! ./brief-history.component.css */ "./src/app/basic/brief-history/brief-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BriefHistoryComponent);
    return BriefHistoryComponent;
}());



/***/ }),

/***/ "./src/app/basic/education/education.component.css":
/*!*********************************************************!*\
  !*** ./src/app/basic/education/education.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    font-size: 22px;\r\n    color: #555555;\r\n}\r\n\r\n.space {\r\n    margin: 5px;\r\n    border-style: solid;\r\n    border-color: #63c6ae;\r\n    padding: 5px;\r\n}\r\n\r\niframe {\r\n    width: 100%;\r\n    height: 80vh;\r\n    min-height: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9iYXNpYy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzYzYzZhZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/basic/education/education.component.html":
/*!**********************************************************!*\
  !*** ./src/app/basic/education/education.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3 mb-2 p-5\">\r\n    <div class='my-barra' style='margin-bottom: 10px;'>\r\n        <h1><strong>Primeiro dia de aula</strong></h1>\r\n    </div>\r\n\r\n    <div class='space'>\r\n        <h4><strong class='text-center'>Primeiro dia de aula no Ensino Médio Integrado</strong></h4>\r\n        <p>\r\n            <strong>Paulo</strong> - Aluno novato ingressante no primeiro ano do curso técnico em Meio Ambiente Integrado ao Ensino Médio do Instituto Federal. Ele estava ansioso para início das aulas. Estudar no instituto federal era um sonho! Mas, agora\r\n            está inseguro e preocupado com o Curso Técnico Integrado.\r\n        </p>\r\n\r\n        <p>\r\n            <strong>Marta</strong> - Aluna veterana, faz o terceiro ano do curso técnico em Meio Ambiente Integrado ao Ensino Médio. Marta também se sentia insegura nos primeiros dias de aula e, assim como Paulo, também tinha pouco conhecimento sobre\r\n            o curso técnico integrado ao ensino médio, mas em pouco tempo encantou-se pelo curso. Ela já participou de projetos de pesquisa e extensão, já realizou cursos, viagens técnicas, participou de semanas de ciências e tecnologia e apresentou trabalhos\r\n            em eventos científicos.\r\n        </p>\r\n\r\n        <h2>Contexto -</h2>\r\n\r\n        <p>\r\n            Paulo chegou bem cedo no IFPI, campus Floriano para seu primeiro dia de aula no ensino médio integrado e está nos corredores do campus, “perdido”, sem encontrar sua sala, já andou muito, mas a escola é muito grande! Até que encontra Marta, que o cumprimenta\r\n            e oferece ajuda.\r\n        </p>\r\n    </div>\r\n\r\n    <h4><strong>Vejam como foi o diálogo entre Paulo e Marta!</strong></h4>\r\n    <span>Ilustrações: Magdiel Torres Mangueira <a href=\"https://www.instagram.com/draw_marshmalow/\" target=\"_blank\">@draw_marshmalow</a></span>\r\n\r\n    <div class=\"container\">\r\n        <iframe src=\"https://www.youtube.com/embed/NX_vfti8Ol0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/basic/education/education.component.ts":
/*!********************************************************!*\
  !*** ./src/app/basic/education/education.component.ts ***!
  \********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/basic/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/basic/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/basic/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/basic/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Quicksand:400,500\");\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n    font-family: \"Quicksand\", sans-serif;\r\n}\r\nh1 {\r\n    font-size: 32px;\r\n    color: #888888;\r\n}\r\nh2 {\r\n    font-size: 22px;\r\n    color: #555555;\r\n}\r\nh3 {\r\n    font-size: 18px;\r\n    color: #555555;\r\n}\r\nh4 {\r\n    font-size: 16px;\r\n    color: #555555;\r\n}\r\np {\r\n    font-size: 20px;\r\n    color: #555555;\r\n}\r\nimg {\r\n    max-width: 100%;\r\n}\r\narticle {\r\n    display: block;\r\n}\r\n.hero,\r\n.section-2,\r\n.section-3,\r\n.section-4,\r\n.section-5,\r\n.section-6,\r\n.section-7 {\r\n    box-sizing: border-box;\r\n}\r\n.container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.hero {\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: auto;\r\n}\r\n.hero__paragraph {\r\n    font-size: 20px;\r\n}\r\n.article-intro {\r\n    flex: 2;\r\n    padding-right: 3em;\r\n}\r\n.article-intro h2 {\r\n    margin-bottom: 5em;\r\n}\r\n.img-intro {\r\n    flex: 1;\r\n}\r\n.section-2 {\r\n    height: 80vh;\r\n    overflow: auto;\r\n}\r\n.section-2__article {\r\n    flex: 2;\r\n    position: relative;\r\n}\r\n.section-2__img {\r\n    padding-right: 3em;\r\n    flex: 1;\r\n}\r\n.section-2__paragraph {\r\n    font-size: 20px;\r\n}\r\n.section-3 {\r\n    height: auto;\r\n    display: block;\r\n    overflow: auto;\r\n}\r\n.section-3__title {\r\n    padding: 3em auto 3em auto;\r\n}\r\n.section-3__article {\r\n    flex: 2;\r\n}\r\n.section-3__img {\r\n    flex: 1;\r\n}\r\n.section-4 {\r\n    height: 80vh;\r\n    background-color: #63c6ae;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 100px;\r\n    box-sizing: border-box;\r\n    overflow: auto;\r\n}\r\n.section-4__title {\r\n    color: white;\r\n}\r\n.section-5 {\r\n    height: 50vh;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: auto;\r\n}\r\n.section-6 {\r\n    height: 50vh;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: auto;\r\n}\r\n.section-6 h1 {\r\n    font-size: 22px;\r\n}\r\n.section6__img {\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n.box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1em;\r\n}\r\n.box h1 {\r\n    flex: 1;\r\n    margin: 0;\r\n    padding-bottom: 2em;\r\n}\r\n.box img {\r\n    flex: 1;\r\n    max-width: 300px;\r\n    align-self: center;\r\n}\r\n.section-7 {\r\n    background-color: #63c6ae;\r\n    height: 70vh;\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n.section-7 h1 {\r\n    color: white;\r\n    flex: 2;\r\n}\r\n.section-7__img {\r\n    flex: 1;\r\n    padding-left: 3em;\r\n}\r\n.section-7__box {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n@media screen and (max-width: 800px) {\r\n    .article-intro {\r\n        margin-top: 4em;\r\n    }\r\n    .container {\r\n        flex-direction: column;\r\n        padding: 10%;\r\n        margin: auto;\r\n        padding: 0;\r\n    }\r\n    img {\r\n        display: none;\r\n        widows: 0;\r\n        height: 0;\r\n        flex: 0;\r\n    }\r\n    .article-intro {\r\n        flex: 0;\r\n    }\r\n    .section-2__img {\r\n        flex: 0;\r\n        width: 0;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBQ3hFOzs7O0lBSUksb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTs7Ozs7OztJQU9JLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxPQUFPO0FBQ1g7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztBQUNYO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksT0FBTztBQUNYO0FBRUE7SUFDSSxPQUFPO0FBQ1g7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLE9BQU87SUFDUCxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLE9BQU87QUFDWDtBQUVBO0lBQ0ksT0FBTztJQUNQLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLFlBQVk7UUFDWixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7UUFDYixTQUFTO1FBQ1QsU0FBUztRQUNULE9BQU87SUFDWDtJQUNBO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxPQUFPO1FBQ1AsUUFBUTtRQUNSLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYmFzaWMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQ6NDAwLDUwMFwiKTtcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5hcnRpY2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVybyxcclxuLnNlY3Rpb24tMixcclxuLnNlY3Rpb24tMyxcclxuLnNlY3Rpb24tNCxcclxuLnNlY3Rpb24tNSxcclxuLnNlY3Rpb24tNixcclxuLnNlY3Rpb24tNyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmhlcm9fX3BhcmFncmFwaCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWludHJvIHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XHJcbn1cclxuXHJcbi5hcnRpY2xlLWludHJvIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcclxufVxyXG5cclxuLmltZy1pbnRybyB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2VjdGlvbi0yIHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc2VjdGlvbi0yX19hcnRpY2xlIHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLTJfX2ltZyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2VjdGlvbi0yX19wYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi0zIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLTNfX3RpdGxlIHtcclxuICAgIHBhZGRpbmc6IDNlbSBhdXRvIDNlbSBhdXRvO1xyXG59XHJcblxyXG4uc2VjdGlvbi0zX19hcnRpY2xlIHtcclxuICAgIGZsZXg6IDI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLTNfX2ltZyB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2VjdGlvbi00IHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2M2M2YWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc2VjdGlvbi00X190aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLTUge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24tNiB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc2VjdGlvbi02IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnNlY3Rpb242X19pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmJveCBoMSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmJveCBpbWcge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLTcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzYzZhZTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VjdGlvbi03IGgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsZXg6IDI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLTdfX2ltZyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLTdfX2JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5hcnRpY2xlLWludHJvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB3aWRvd3M6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGZsZXg6IDA7XHJcbiAgICB9XHJcbiAgICAuYXJ0aWNsZS1pbnRybyB7XHJcbiAgICAgICAgZmxleDogMDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLTJfX2ltZyB7XHJcbiAgICAgICAgZmxleDogMDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/basic/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/basic/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero mt-3\">\r\n    <div class=\"container\">\r\n        <article class=\"article-intro\">\r\n            <h1>Olá, é novo por aqui?</h1>\r\n            <h2>Seja bem-vindo(a)!</h2>\r\n            <h3>Parabéns, você agora é aluno(a) do Instituto Federal de Educação, Ciência e Tecnologia! Isto representa um grande diferencial na sua vida.</h3>\r\n            <p class=\"hero__paragraph\">Acreditamos que estejam felizes, ansiosos ou até mesmo receosos. São tantas mudanças, não é ? Afinal, você está iniciando o ensino médio e optou por algum dos cursos técnicos integrados no Instituto Federal, talvez uma escola bem maior e diferente\r\n                da que cursou o ensino Fundamental.</p>\r\n        </article>\r\n        <div>\r\n            <img [src]=\"urlMenina1\" class=\"img-intro\">\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-2\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <img [src]=\"urlMenina2\" class=\"section-2__img\">\r\n        </div>\r\n        <article class=\"section-2__article\">\r\n            <h1 class=\"section-2__title\">E agora?</h1>\r\n            <h3 class=\"section-2__subtitle\">Muitas dúvidas devem estar surgindo... por exemplo:</h3>\r\n            <p class=\"section-2__paragraph\">Será que vou gostar do curso técnico integrado?</p>\r\n            <p class=\"section-2__paragraph\">Deve ser muito difícil...Ah não! Tenho que passar o dia inteiro na escola!</p>\r\n            <p class=\"section-2__paragraph\">Será que fiz a escolha certa? Eu queria muito estudar no Instituto Federal, mas....não queria fazer o curso técnico.</p>\r\n            <p class=\"section-2__paragraph\">Pode ser que você já tenha observado a matriz curricular do seu curso e se assustou comquantidade de disciplinas do primeiro ano!</p>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-3\">\r\n    <div class=\"container\">\r\n        <article class=\"section-3__article\">\r\n            <h1 class=\"section-3__title\">Caaaaaaalma!</h1>\r\n            <p>Tudo que é novo, gera uma certa apreensão, mas logo verá o quanto esta “viagem” pelo ensino médio integrado, e por que não dizer aventura... será enriquecedora e valiosa. Você sairá com uma bagagem extra e totalmente transformado!\r\n            </p>\r\n        </article>\r\n\r\n        <div>\r\n            <img [src]=\"urlAstronauta\" class=\"section-3__img\" alt=\"fonte: www.pinterest.com/pin/675610381577450511/\">\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-4\">\r\n    <h1 class=\"section-4__title\">Você está no lugar certo! Esta página é destinada aos alunos ingressantes, nela você encontrará informações úteis sobre o Instituto e sobre o ensino médio integrado.</h1>\r\n</section>\r\n\r\n<section class=\"section-5\">\r\n    <div class=\"container\">\r\n        <p>Falando nisso, você já parou para pensar o porquê de “integrado”?\r\n            <br>O nome tem tudo a ver com os objetivos do curso, dentre eles, integrar saberes de disciplinas de formação geral e técnica, unindo teoria e prática, integrando ensino, pesquisa e extensão para oferecer uma formação ampla e cidadã ao tempo\r\n            em que prepara para o mundo do trabalho.</p>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-6\">\r\n    <div class=\"container\">\r\n        <div class=\"box\">\r\n            <h1>Ao navegar pela página você encontrará depoimentos de alunos, jogos, vídeo explicativo, dentre outras coisas.</h1>\r\n        </div>\r\n        <div class=\"box\">\r\n            <h1>Esperamos ajudá-los em suas compreensões quanto à formação integrada na Educação Profissional e Tecnológica!</h1>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-7\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"section-7__box\">\r\n            <h1>Foque no seu objetivo e embarque nesta aventura!</h1>\r\n            <div>\r\n                <img [src]=\"urlFoguete\" class=\"section-7__img\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/basic/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/basic/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.urlVideo = 'https://www.youtube.com/watch?v=cEXuxwKDZIE&feature=youtu.be';
        this.urlFoguete = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/rocket.png';
        this.urlFormando = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/capelo.png';
        this.urlPointer = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/cursor.png';
        this.urlAstronauta = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/astronaut.png';
        this.urlMenina1 = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/intro.png';
        this.urlMenina2 = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/section2.png';
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/basic/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/basic/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/basic/sobre/sobre.component.css":
/*!*************************************************!*\
  !*** ./src/app/basic/sobre/sobre.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a { color: inherit; } \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMvc29icmUvc29icmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGNBQWMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljL3NvYnJlL3NvYnJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHsgY29sb3I6IGluaGVyaXQ7IH0gIl19 */"

/***/ }),

/***/ "./src/app/basic/sobre/sobre.component.html":
/*!**************************************************!*\
  !*** ./src/app/basic/sobre/sobre.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-3\">\r\n    <div class='box' style='margin-bottom: 28px; margin-top: 20px;'>\r\n        <div class='my-border'>\r\n            <h3 class='my-barra'>O que é o EMI?</h3>\r\n            <p>\r\n                Esta página é resultante de uma pesquisa intitulada : “PROPOSTA DE UM APLICATIVO EDUCACIONAL SOBRE A TRÍADE ENSINO, PESQUISA E EXTENSÃO PARA ESTUDANTES INGRESSANTES NO ENSINO MÉDIO INTEGRADO”. A mesma\r\n                trata-se do produto educacional exigido para conclusão do curso de Mestrado em Educação Profissional e Tecnológica – ProfEPT realizado no IFRN-Campus Mossoró e elaborada por <strong>Joseane Duarte Santos</strong>, técnica\r\n                em Assuntos educacionais do IFPI, campus Floriano e <strong>Fábio Alexandre Araújo dos Santos</strong>, professor do IFRN, campus Natal Zona Norte.\r\n            </p>\r\n            <p>\r\n                Teve como desenvolvedores os alunos estagiários <strong>Romário Coelho Oliveira</strong>,\r\n                <strong>José Roberto Júnior</strong> e <strong>Felipe Almeida</strong> (colaborador). Estudantes do curso de Análise e desenvolvimento de Sistemas do IFPI, campus Floriano.\r\n            </p>\r\n            <p>\r\n                Trata-se de uma página web <strong><a href='https://pt.wikipedia.org/wiki/Responsividade'>responsiva</a></strong> e que adota a tecnologia <strong><a href='https://developers.google.com/web/progressive-web-apps/'>PWA(Progressive Web Apps)</a></strong>.\r\n                Portanto, essa aplicação se adapta muito bem as diferentes dimensões de dispositivos. Outro ponto importante, é que a mesma transmite para usuários de celulares a impressão de estarem utilizando um aplicativo. Para seu desenvolvimento\r\n                optou-se por utilizar o framework <strong><a href='https://angular.io/'>Angular</a></strong>, que emprega as seguintes tecnologias:\r\n            </p>\r\n            <ul>\r\n                <li><strong><a href='https://www.typescriptlang.org/'>TypeScript</a></strong>: um superset da linguagem JavaScript. Utilizado para cuidar da lógica da aplicação.</li>\r\n                <li><strong><a href='https://www.w3c.br/Home/WebHome'>HTML5</a></strong>: Utilizado para definir a estrutura da página.</li>\r\n                <li><strong><a href='https://www.w3schools.com/css/default.asp'>CSS3</a></strong>: Responsável pela estilização da aplicação.</li>\r\n                <li><strong><a href='https://nodejs.org/en/'>NodeJs</a></strong>: O Angular roda em cima dessa plataforma.</li>\r\n            </ul>\r\n\r\n            <h5>Links úteis:</h5>\r\n            <ul>\r\n                <li><a href=\"http://libra.ifpi.edu.br/acesso-a-informacao/perguntas-frequentes\" target=\"_blank\">http://libra.ifpi.edu.br/acesso-a-informacao/perguntas-frequentes</a></li>\r\n                <li><a href=\"http://portal.mec.gov.br/catalogos-nacionais-de-cursos\" target=\"_blank\">http://portal.mec.gov.br/catalogos-nacionais-de-cursos</a></li>\r\n                <li><a href=\"http://libra.ifpi.edu.br/\" target=\"_blank\">http://libra.ifpi.edu.br/</a></li>\r\n                <li><a href=\"http://portal.mec.gov.br/rede-federal-inicial/instituicoes\" target=\"_blank\">http://portal.mec.gov.br/rede-federal-inicial/instituicoes</a></li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/basic/sobre/sobre.component.ts":
/*!************************************************!*\
  !*** ./src/app/basic/sobre/sobre.component.ts ***!
  \************************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sobre',
            template: __webpack_require__(/*! ./sobre.component.html */ "./src/app/basic/sobre/sobre.component.html"),
            styles: [__webpack_require__(/*! ./sobre.component.css */ "./src/app/basic/sobre/sobre.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());



/***/ })

}]);
//# sourceMappingURL=basic-basic-module.js.map