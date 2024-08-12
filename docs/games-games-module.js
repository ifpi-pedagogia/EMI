(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["games-games-module"],{

/***/ "./src/app/games/games-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/games/games-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GamesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesRoutingModule", function() { return GamesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/games/questions/questions.component.ts");
/* harmony import */ var _true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./true-or-false/true-or-false.component */ "./src/app/games/true-or-false/true-or-false.component.ts");





var routes = [
    { path: 'true-or-false', component: _true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_4__["TrueOrFalseComponent"] },
    { path: 'quiz', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"] }
];
var GamesRoutingModule = /** @class */ (function () {
    function GamesRoutingModule() {
    }
    GamesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GamesRoutingModule);
    return GamesRoutingModule;
}());



/***/ }),

/***/ "./src/app/games/games.module.ts":
/*!***************************************!*\
  !*** ./src/app/games/games.module.ts ***!
  \***************************************/
/*! exports provided: GamesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesModule", function() { return GamesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games-routing.module */ "./src/app/games/games-routing.module.ts");
/* harmony import */ var _true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./true-or-false/true-or-false.component */ "./src/app/games/true-or-false/true-or-false.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/games/questions/questions.component.ts");






var GamesModule = /** @class */ (function () {
    function GamesModule() {
    }
    GamesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_4__["TrueOrFalseComponent"], _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _games_routing_module__WEBPACK_IMPORTED_MODULE_3__["GamesRoutingModule"]
            ],
        })
    ], GamesModule);
    return GamesModule;
}());



/***/ }),

/***/ "./src/app/games/questions.service.ts":
/*!********************************************!*\
  !*** ./src/app/games/questions.service.ts ***!
  \********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.roundOne = true;
    }
    QuestionsService.prototype.init = function () {
        this.insert();
        console.log('Valor de round ' + this.roundOne);
        this.alterDataBase();
        this.round = 0;
        this.score = 0;
        this.responser = undefined;
        this.numMaxQuestions = this.auxQuestions.length;
        this.acertou = false;
        this.gameOver = false;
    };
    QuestionsService.prototype.getQuestions = function () {
        return this.auxQuestions;
    };
    QuestionsService.prototype.verifyResponseUser = function (responser) {
        if (responser === this.auxQuestions[this.round].rightAnswer) {
            return true;
        }
        return false;
    };
    QuestionsService.prototype.incrementRound = function () {
        this.round++;
    };
    QuestionsService.prototype.playerGame = function (response, current) {
        this.round = current;
        var r = this.verifyResponseUser(response);
        if (r) {
            this.responser = 'Parabéns, você ganhou uma peça! Resposta correta: ' + this.auxQuestions[current].rightAnswer;
            this.acertou = true;
        }
        else {
            this.responser = 'Tente Novamente.';
            this.acertou = false;
        }
        this.gameOver = this.finishGame();
    };
    QuestionsService.prototype.getAcertou = function () {
        return this.acertou;
    };
    QuestionsService.prototype.finishGame = function () {
        /* round é equivalente ao valor de current, que é passado como argumento no método
         * no playerGame. Current é um índice de vetor, que começa com zero. Para formar uma
         * comparação válida, irei realizar uma adição na comparação.
         */
        if (this.round + 1 >= this.numMaxQuestions) {
            return true;
        }
        return false;
    };
    QuestionsService.prototype.plusScore = function () {
        this.score++;
    };
    QuestionsService.prototype.alterDataBase = function () {
        if (this.roundOne) {
            this.auxQuestions = this.myQuestionsOne;
            this.roundOne = false;
        }
        else {
            this.auxQuestions = this.myQuestionsTwo;
            this.roundOne = true;
        }
    };
    // povoamento do banco de dados de questões
    QuestionsService.prototype.insert = function () {
        this.myQuestionsOne = [
            {
                question: 'Podemos dizer que pesquisa é:',
                rightAnswer: 'O aprofundamento dos conteúdos trabalhados em sala de aula com objetivo de se descobrir algo novo.',
                alternatives: [
                    'O aprofundamento dos conteúdos trabalhados em sala de aula com objetivo de se descobrir algo novo.',
                    'A transmissão de conhecimentos do professor para o aluno.',
                    'É o estudo do conteúdo que consta no livro didático.'
                ]
            },
            {
                question: 'O curso técnico integrado ao ensino médio é comumente chamado',
                rightAnswer: 'Ensino médio integrado',
                alternatives: [
                    'Ensino médio integrado',
                    'Ensino médio preparatório',
                    'Ensino Técnico'
                ],
            },
            {
                question: 'No curso técnico integrado ao ensino médio, realizamos',
                rightAnswer: 'Um único curso, que integra conteúdos de disciplinas de formação geral e específicas',
                alternatives: [
                    'Dois cursos - um curso técnico e um curso de ensino médio',
                    'Um único curso, que integra conteúdos de disciplinas de formação geral e específicas',
                    'Um único curso, no entanto no turno estudamos disciplinas de formação geral e o contraturno é destinado às disciplinas técnicas'
                ]
            },
            {
                question: 'O ensino médio integrado, no IFPI campus Floriano possui 4 anos de duração.',
                rightAnswer: 'Portanto, para concluir o curso é necessário cursar os quatro anos, não sendo possível sair no terceiro ano com certificado de conclusão do ensino médio.',
                alternatives: [
                    'Podendo o aluno optar por cursar o ensino médio não integrado ao técnico',
                    'Mas posso cursar só até o terceiro ano e receber só o certificado do ensino médio.',
                    'Portanto, para concluir o curso é necessário cursar os quatro anos, não sendo possível sair no terceiro ano com certificado de conclusão do ensino médio.'
                ]
            },
            {
                question: 'A carga horária do ensino médio integrado é maior por que:',
                rightAnswer: 'Porque a matriz curricular agrega disciplinas técnicas, específicas do curso e de formação geral, diferentemente do ensino médio não integrado.',
                alternatives: [
                    'Porque a matriz curricular agrega disciplinas técnicas, específicas do curso e de formação geral, diferentemente do ensino médio não integrado.',
                    'Por que o curso é muito difícil e o aluno precisa ficar ocupado por mais tempo na escola.',
                    'Porque “ensino integrado” significa a mesma coisa que “ensino integral” no qual o estudante passa o dia inteiro com atividades na escola.'
                ]
            },
            {
                question: 'A POLAE, Política de Assistência Estudantil do IFPI é direcionada aos estudantes matriculados nos cursos presenciais do IFPI e tem como objetivo',
                rightAnswer: 'Contribuir com ações de atendimento às necessidades básicas e de incentivo á formação acadêmica, visando o desenvolvimento integral dos estudantes.',
                alternatives: [
                    'Oferecer a todos os estudantes matriculados no IFPI, inclusive dos cursos superiores, auxílio financeiro para custear as despesas com deslocamento.',
                    'Oferecer auxílio financeiro a todos os estudantes do ensino médio integrado, bastando para isso o aluno apresentar a carteirinha do estudante ao setor de serviço social',
                    'Contribuir com ações de atendimento às necessidades básicas e de incentivo á formação acadêmica, visando o desenvolvimento integral dos estudantes.'
                ]
            },
            {
                question: 'Através do programa de atendimento ao estudante com vulnerabilidade social  o aluno poderá receber um benefício financeiro. Para tanto:',
                rightAnswer: 'É necessário que o estudante atenda a critérios estabelecidos em edital que comprovem a situação de vulnerabilidade social.',
                alternatives: [
                    'É preciso apenas estar matriculado em  dos cursos técnicos integrados ao Ensino Médio.',
                    'É necessário que o estudante tenha cursado o ensino fundamental em escola pública.',
                    'É necessário que o estudante atenda a critérios estabelecidos em edital que comprovem a situação de vulnerabilidade social.'
                ]
            },
            {
                question: 'Os Institutos Federais são instituições de educação especializados na oferta de educação profissional e tecnológica nas diferentes modalidades de ensino e tem o compromisso  de desenvolvimento humano integral do estudante, que significa:',
                rightAnswer: 'Uma formação cidadã que leve em consideração várias dimensões da vida, ex: técnica, científica, cultural e intelectual.',
                alternatives: [
                    'Uma formação cidadã que leve em consideração várias dimensões da vida, ex: técnica, científica, cultural e intelectual.',
                    'Uma formação no aspecto estritamente técnico.',
                    'Uma  formação específica para o estudante que fará ENEM.'
                ]
            },
            {
                question: 'Os cursos Integrados, no campus Floriano, tem duração de 4 (quatro) anos porque:',
                rightAnswer: 'A carga horária do ensino médio integrado é maior e por isso planejada para ser desenvolvida em quatro anos',
                alternatives: [
                    'A carga horária do ensino médio integrado é maior e por isso planejada para ser desenvolvida em quatro anos',
                    'Necessita de 1 (um) ano a mais para realização do estágio obrigatório do curso;',
                    'Porque este é o tempo mínimo exigido.'
                ]
            },
            {
                question: 'Um dos aspectos essenciais da formação integrada é:',
                rightAnswer: 'A articulação entre as atividades de ensino, pesquisa e extensão.',
                alternatives: [
                    'Atividades voltadas exclusivamente para a aprendizagem de conteúdos através do ensino.',
                    'A articulação entre as atividades de ensino, pesquisa e extensão.',
                    'Aumento na carga horária com o objetivo de manter os estudantes ocupados por maior tempo na escola.'
                ]
            }
        ];
        this.myQuestionsTwo = [
            {
                question: 'A extensão faz parte da formação integrada. Extensão significa.',
                rightAnswer: 'A aplicação do conhecimento, obtido nas fases de ensino e pesquisa, para solução de problemas sociais e atendimento às necessidades da comunidade.',
                alternatives: [
                    'A aplicação do conhecimento, obtido nas fases de ensino e pesquisa, para solução de problemas sociais e atendimento às necessidades da comunidade.',
                    'A ampliação de vagas para ingresso de mais estudantes nos cursos oferecidos pelos Institutos.',
                    'Investigação detalhada de um fenômeno.'
                ]
            },
            {
                question: 'A articulação entre ensino, pesquisa e extensão contribui para:',
                rightAnswer: 'O desenvolvimento científico e cultural do estudante, tornando-o cada vez mais independente e comprometido com o meio em que vive.',
                alternatives: [
                    'Atrasar o estudo dos conteúdos que serão cobrados no ENEM.',
                    'O desenvolvimento científico e cultural do estudante, tornando-o cada vez mais independente e comprometido com o meio em que vive.',
                    'A trasnmissão de conhecimentos prontos  que devem ser repassados a todos os estudantes de maneira incontestável.'
                ]
            },
            {
                question: 'Os projetos de iniciação cintífica são programas de atendimento ao estudante que visam:',
                rightAnswer: 'Propiciar aos estudantes/pesquisadores a oportunidades de vivenciar as primeiras experiências em pesquisa acadêmica.',
                alternatives: [
                    'Motivar os alunos de dedicarem mais às atividades práticas em detrimento das atividades teóricas.',
                    'Propiciar aos estudantes/pesquisadores a oportunidades de vivenciar as primeiras experiências em pesquisa acadêmica.',
                    'Fortalecer a divisão entre ensino e pesquisa durante o curso.'
                ]
            },
            {
                question: 'Os Institutos Federais fazem parte da rede de Educação Profissional e Técnológica pois:',
                rightAnswer: 'Objetiva qualificar os estudantes para os mais variados setores da economia brasileira, realizando pesquisas e desenvolvendo novos processos, produtos e serviços e formar um profissional humanizado.',
                alternatives: [
                    'Se constituem como uma política pública voltada para as classes mais favorecidas',
                    'Compõem uma importante estrutura para que os cidadãos tenham acesso a formação estritamente técnica.',
                    'Objetiva qualificar os estudantes para os mais variados setores da economia brasileira, realizando pesquisas e desenvolvendo novos processos, produtos e serviços e formar um profissional humanizado.'
                ]
            },
            {
                question: 'Os projetos  de Extensão contribuem:',
                rightAnswer: 'Para o benefício da comunidade externa do IFPI, bem com da aprendizagem do estudante, contribuindo, para sua formação acadêmica, profissional e cidadã.',
                alternatives: [
                    'Para o benefício da comunidade externa do IFPI, bem com da aprendizagem do estudante, contribuindo, para sua formação acadêmica, profissional e cidadã.',
                    'Para benefício exclusivo da comunidade Interna dos Institutos Federais, já que  atividades com o publico externo  não estão relacionadas ao curso e não contribuem para nossa formação.',
                    'Para benefício exclusivo dos professores orientadores.'
                ]
            },
            {
                question: 'Um projeto é considerado de extensão quando:',
                rightAnswer: 'Os resultados são levados para beneficiar a comunidade e contribuir com a solução de problemas sociais.',
                alternatives: [
                    'É realizado para beneficiar exclusivamente os estudantes do campus que ingressaram através da modalidade de cotas.',
                    'É desenvolvido dentro dos laboratórios e não na sala de aula.',
                    'Os resultados são levados para beneficiar a comunidade e contribuir com a solução de problemas sociais.'
                ]
            },
            {
                question: 'Os Institutos Federais possuem três pilares que juntos constituem uma base sólida para o desenvolvimento de uma formação cultural, científica, técnica e ética. Estes pilares são: ',
                rightAnswer: 'Ensino, pesquisa e extensão.',
                alternatives: [
                    'Laboratórios, equipamentos e testes.',
                    'Ensino, pesquisa e extensão.',
                    'Professor, aluno e sala de aula.'
                ]
            },
            {
                question: 'É uma ação dos Institutos que disponibiliza ao público externo  o conhecimento adquirido com o ensino e a pesquisa desenvolvidos dentro do campus:',
                rightAnswer: 'Extensão.',
                alternatives: [
                    'Extensão.',
                    'Núcleo de atendimento ás pessoas com necessidades educacionais específicas - NAPNE.',
                    'Programa de atendimento ao estudante Ingressante – PRAEI.'
                ]
            },
            {
                question: 'A associação entre as atividades de ensino, pesquisa e extensão é fundamental para:',
                rightAnswer: 'Formar profissionais com uma visão crítica da sociedade.',
                alternatives: [
                    'Formar profissionais com visão limitada.',
                    'Formar profissionais alienados.',
                    'Formar profissionais com uma visão crítica da sociedade.'
                ]
            },
            {
                question: 'Os cursos técnicos integrados ao ensino Médio são destinados aos estudantes que:',
                rightAnswer: 'Concluíram o Ensino Fundamental.',
                alternatives: [
                    'Estão cursando o nono ano do ensino fundamental.',
                    'Concluíram o Ensino Fundamental.',
                    'Estão cursando o primeiro ano do ensino médio.'
                ]
            }
        ];
    };
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/games/questions/questions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/games/questions/questions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-game {\r\n  width: 100%;\r\n\r\n  z-index: -1;\r\n  position: relative;\r\n}\r\n\r\n.wrapper {\r\n  margin-top: 80px;\r\n  width: 20%;\r\n  margin-left: 15px;\r\n  margin-right: auto;\r\n  margin-bottom: 40px;\r\n\r\n  grid-gap: 5px;\r\n  display: grid;\r\n\r\n  grid-template-columns: repeat(3, minmax(80px, 100px));\r\n  grid-template-rows: repeat(4, minmax(80px, 100px));\r\n  grid-template-areas:\r\n    \"zero one two\"\r\n    \"three four   .\"\r\n    \"five   six  seven\"\r\n    \"eight   nine       .\";\r\n}\r\n\r\nbutton{\r\n    font-size: 2rem;\r\n    padding: 1.5rem;\r\n    color: rgb(99, 198, 174);\r\n    background-color: white;\r\n    border-radius: 5px;\r\n}\r\n\r\n.circle {\r\n  /* display: flex !important; */\r\n  /* display: block !important; */\r\n  border-radius: 50%;\r\n  background-color: #dddcdc;\r\n  grid-area: zero;\r\n}\r\n\r\n.square {\r\n  /* display: flex !important; \r\n    display: block !important; */\r\n  border-radius: 10%;\r\n  background-color: #dddcdc;\r\n}\r\n\r\n.one {\r\n  grid-area: one;\r\n}\r\n\r\n.two {\r\n  grid-area: two;\r\n}\r\n\r\n.three {\r\n  grid-area: three;\r\n}\r\n\r\n.four {\r\n  grid-area: four;\r\n}\r\n\r\n.five {\r\n  grid-area: five;\r\n}\r\n\r\n.six {\r\n  grid-area: six;\r\n}\r\n\r\n.seven {\r\n  grid-area: seven;\r\n}\r\n\r\n.eight {\r\n  grid-area: eight;\r\n}\r\n\r\n.nine {\r\n  grid-area: nine;\r\n}\r\n\r\n.my-barra {\r\n  background-color: rgb(99, 198, 174);\r\n  color: white;\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n\r\n/*\r\n.my-click {\r\n    display: block !important;\r\n}\r\n\r\nmy-div {width: 100%;\r\n    \r\n    z-index: -1;\r\n    position: relative;}\r\n\r\nmy-btns{\r\n    margin-top: 80px;\r\n    width: 20%;\r\n    margin-left: 15px;\r\n    margin-right: auto;\r\n    margin-bottom: 40px;\r\n    display: block;\r\n    background-color:#DDDCDC;\r\n}\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVzs7RUFFWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLGFBQWE7O0VBRWIscURBQXFEO0VBQ3JELGtEQUFrRDtFQUNsRDs7OzswQkFJd0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtnQ0FDOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQkMiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1nYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgei1pbmRleDogLTE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBncmlkLWdhcDogNXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg4MHB4LCAxMDBweCkpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbm1heCg4MHB4LCAxMDBweCkpO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcInplcm8gb25lIHR3b1wiXHJcbiAgICBcInRocmVlIGZvdXIgICAuXCJcclxuICAgIFwiZml2ZSAgIHNpeCAgc2V2ZW5cIlxyXG4gICAgXCJlaWdodCAgIG5pbmUgICAgICAgLlwiO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBjb2xvcjogcmdiKDk5LCAxOTgsIDE3NCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgLyogZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyAqL1xyXG4gIC8qIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRjZGM7XHJcbiAgZ3JpZC1hcmVhOiB6ZXJvO1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICAvKiBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IFxyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgKi9cclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGNkYztcclxufVxyXG5cclxuLm9uZSB7XHJcbiAgZ3JpZC1hcmVhOiBvbmU7XHJcbn1cclxuXHJcbi50d28ge1xyXG4gIGdyaWQtYXJlYTogdHdvO1xyXG59XHJcblxyXG4udGhyZWUge1xyXG4gIGdyaWQtYXJlYTogdGhyZWU7XHJcbn1cclxuXHJcbi5mb3VyIHtcclxuICBncmlkLWFyZWE6IGZvdXI7XHJcbn1cclxuXHJcbi5maXZlIHtcclxuICBncmlkLWFyZWE6IGZpdmU7XHJcbn1cclxuXHJcbi5zaXgge1xyXG4gIGdyaWQtYXJlYTogc2l4O1xyXG59XHJcblxyXG4uc2V2ZW4ge1xyXG4gIGdyaWQtYXJlYTogc2V2ZW47XHJcbn1cclxuXHJcbi5laWdodCB7XHJcbiAgZ3JpZC1hcmVhOiBlaWdodDtcclxufVxyXG5cclxuLm5pbmUge1xyXG4gIGdyaWQtYXJlYTogbmluZTtcclxufVxyXG5cclxuLm15LWJhcnJhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDE5OCwgMTc0KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLypcclxuLm15LWNsaWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm15LWRpdiB7d2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO31cclxuXHJcbm15LWJ0bnN7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojREREQ0RDO1xyXG59XHJcbiovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/games/questions/questions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/games/questions/questions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\">\r\n    <div *ngIf='perguntar && !result' class='my-barra'>\r\n        <div>\r\n            <p><strong>{{pergunta}}</strong></p>\r\n            <p><strong>A</strong>) {{alt1}}</p>\r\n            <p><strong>B</strong>) {{alt2}}</p>\r\n            <p><strong>C</strong>) {{alt3}}</p>\r\n        </div>\r\n        <div>\r\n            <button (click)='gameGrid(0)'>(  A  )</button>\r\n            <button (click)='gameGrid(1)'>(  B  )</button>\r\n            <button (click)='gameGrid(2)'>(  C  )</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"result\" class='my-barra'>\r\n        {{resposta}}\r\n        <button (click)='showResult()'>Continuar</button>\r\n    </div>\r\n\r\n    <div *ngIf='!perguntar && !result'>\r\n        <div class='my-barra' *ngIf='!gameOver'>\r\n            <p>* Click no botão</p>\r\n            <button (click)='changeBackground(unidade)'>Peça {{unidade + 1}}</button>\r\n        </div>\r\n        <div class=\"my-barra\" *ngIf=\"gameOver\">\r\n            <h3>Parabéns, fim de jogo!</h3>\r\n            <button (click)='init()'>Jogar Novamente</button>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"logo-game\" style='text-align: center'>\r\n                <div class=\"wrapper\">\r\n                    <a class=\"circle\" [ngStyle]=\"{'background-color': changeColor[0] ? 'red' : '#DDDCDC'}\" (mousemove)='changeBackground(0)'>\r\n                    </a>\r\n                    <div class=\"square one\" [ngStyle]=\"{'background-color': changeColor[1] ? 'green' : '#DDDCDC'}\">\r\n                        <a class=\"square one\" (click)='changeBackground(1)' class=\"my-click\"></a>\r\n                    </div>\r\n                    <div class=\"square two\" [ngStyle]=\"{'background-color': changeColor[2] ? 'green' : '#DDDCDC'}\">\r\n                        <a (onclick)='changeBackground(2)' class='my-click'></a>\r\n                    </div>\r\n                    <div class=\"square three\" [ngStyle]=\"{'background-color': changeColor[3] ? 'green' : '#DDDCDC'}\">\r\n                        <a (onclick)='changeBackground(3)'></a>\r\n                    </div>\r\n                    <div class=\"square four\" [ngStyle]=\"{'background-color': changeColor[4] ? 'green' : '#DDDCDC'}\">\r\n                    </div>\r\n                    <div class=\"square five\" [ngStyle]=\"{'background-color': changeColor[5] ? 'green' : '#DDDCDC'}\">\r\n                        <a (onclick)='changeBackground(5)'></a>\r\n                    </div>\r\n                    <div class=\"square six\" [ngStyle]=\"{'background-color': changeColor[6] ? 'green' : '#DDDCDC'}\">\r\n                        <a (onclick)='changeBackground(6)'></a>\r\n                    </div>\r\n                    <div class=\"square seven\" [ngStyle]=\"{'background-color': changeColor[7] ? 'green' : '#DDDCDC'}\">\r\n                        <a (onclick)='changeBackground(7)'></a>\r\n                    </div>\r\n                    <div class=\"square eight\" [ngStyle]=\"{'background-color': changeColor[8] ? 'green' : '#DDDCDC'}\">\r\n                        <a (onclick)='changeBackground(8)'></a>\r\n                    </div>\r\n                    <div class=\"square nine\" [ngStyle]=\"{'background-color': changeColor[9] ? 'green' : '#DDDCDC'}\">\r\n                        <a (onclick)='changeBackground(9)'></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/games/questions/questions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/games/questions/questions.component.ts ***!
  \********************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../questions.service */ "./src/app/games/questions.service.ts");



var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(service) {
        this.service = service;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.init();
    };
    QuestionsComponent.prototype.init = function () {
        this.service.init();
        this.restart();
    };
    QuestionsComponent.prototype.restart = function () {
        this.questions = this.service.getQuestions();
        this.gameOver = false;
        this.unidade = 0;
        this.round = 0;
        this.result = false;
        this.perguntar = false;
        this.changeColor = [false, false, false, false, false, false, false, false, false, false];
    };
    QuestionsComponent.prototype.game = function (r, current) {
        var resp = this.questions[current].alternatives[r];
        this.service.playerGame(resp, current);
        this.perguntar = false;
        this.round = this.service.round;
        if (this.service.getAcertou()) {
            // this.plusUnidade();
            this.changeColor[current] = !this.changeColor[current];
        }
        this.resposta = this.service.responser;
        this.showResult();
        this.gameOver = this.service.gameOver;
    };
    QuestionsComponent.prototype.resetQuestions = function () {
        if (this.gameOver) {
            this.restart();
        }
    };
    QuestionsComponent.prototype.setAlternatives = function (current) {
        this.current = current;
        this.pergunta = this.questions[current].question;
        this.alt1 = this.questions[current].alternatives[0];
        this.alt2 = this.questions[current].alternatives[1];
        this.alt3 = this.questions[current].alternatives[2];
    };
    QuestionsComponent.prototype.changeBackground = function (indice) {
        if (this.changeColor[indice] === false) {
            this.setAlternatives(indice);
            this.perguntar = !this.perguntar;
        }
        else {
            // emita uma mensagem para o usuário (óbvio que não será à próxima linha)
            alert('Caro aluno, você já respondeu corretamente a pergunta desse item.');
        }
    };
    QuestionsComponent.prototype.showResult = function () {
        this.result = !this.result;
    };
    // método para uso do grid
    QuestionsComponent.prototype.plusUnidade = function () {
        this.unidade = this.unidade + 1;
    };
    QuestionsComponent.prototype.gameGrid = function (r) {
        var resp = this.questions[this.unidade].alternatives[r];
        this.service.playerGame(resp, this.unidade);
        this.perguntar = false;
        this.round = this.service.round;
        if (this.service.getAcertou()) {
            this.changeColor[this.unidade] = !this.changeColor[this.unidade];
            this.plusUnidade();
        }
        this.resposta = this.service.responser;
        this.showResult();
        this.gameOver = this.service.gameOver;
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/games/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/games/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/games/true-or-false.service.ts":
/*!************************************************!*\
  !*** ./src/app/games/true-or-false.service.ts ***!
  \************************************************/
/*! exports provided: TrueOrFalseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueOrFalseService", function() { return TrueOrFalseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrueOrFalseService = /** @class */ (function () {
    function TrueOrFalseService() {
        this.questionsOne = [
            {
                question: 'No curso Técnico Integrado ao ensino médio temos aula todos os dias da semana nos turnos manhã e tarde, por isso ele é chamado de curso “integrado”.',
                rightAnswer: false,
                justification: 'O Curso Técnico Integrado ao Ensino Médio recebe esta denominação porque as disciplinas de formação geral (Português, Matemática, História, Geografia, etc) são cursadas junto às disciplinas técnicas, estabelecendo trocas de saberes entre elas, possibilitando ao aluno uma formação ampla e cidadã ao mesmo tempo em que o prepara para o mundo do trabalho.'
            },
            {
                question: 'No Ensino Médio Integrado, as disciplinas “técnicas” são cursadas separadamente no último ano do curso.',
                rightAnswer: false,
                justification: 'As disciplinas técnicas e de formação geral são distribuídas e ocorrem concomitantemente ao longo de todo o curso. O ideal é que haja troca de saberes e experiências entre elas. Por exemplo, para compreender Mecânica, o aluno precisará dos conhecimentos da Matemática. Assim, através das “comunicações” entre as disciplinas ocorre a integração dos conteúdos.'
            },
            {
                question: 'Alunos do 1º ano do ensino médio integrado já podem participar de projetos de pesquisa.',
                rightAnswer: true,
                justification: 'No Instituto Federal todos os alunos têm oportunidades de participarem de pesquisas, mesmo que sejam ingressantes, bastando estarem matriculados e frequentando regularmente.'
            },
            {
                question: 'No Ensino Médio Integrado posso optar por cursar somente as disciplinas de formação geral, correspondentes ao Ensino Médio.',
                rightAnswer: false,
                justification: 'É necessário cursar todas as disciplinas.'
            },
            {
                question: 'No Ensino Médio Integrado o currículo é integrado, isto é, as disciplinas são organizadas de forma que haja troca de saberes entre elas. O desenvolvimento de uma disciplina de formação geral contribui para o desenvolvimento de uma disciplina específica, assim a construção de conhecimento torna-se mais ampla e concreta e o estudante pode vivenciar, na prática, a teoria estudada em sala de aula.',
                rightAnswer: true,
                justification: 'O currículo integrado permite uma integração entre  ensino  e prática profissional, entre professor e aluno na busca por soluções para diferentes situações, o que implica a contribuição com a comunidade. Considera-se este currículo o mais apropriado para integrar ensino e trabalho e para formação pessoal e profissional dos estudantes.'
            }
        ];
        this.questionsTwo = [
            {
                question: 'No curso Técnico Integrado ao Ensino Médio o ensino é articulado com atividades de pesquisa e de extensão como forma de oferecer uma formação ampla e cidadã.',
                rightAnswer: true,
                justification: 'O envolvimento com atividades de pesquisa e extensão contribuem para o desenvolvimento da personalidade, pensamento crítico, curiosidade, além de facilitar a aprendizagem, pois os conteúdos vistos em sala são vivenciados na prática em sociedade.'
            },
            {
                question: 'No Ensino Médio Integrado, as disciplinas específicas são cursadas, sempre no contraturno das aulas',
                rightAnswer: false,
                justification: 'As disciplinas específicas podem ser cursadas tanto no turno quanto no contra turno do aluno, assim como outras disciplinas da matriz curricular  do curso.'
            },
            {
                question: 'Formação Integrada significa uma formação que prepara exclusivamente para aquisição de habilidades técnicas que conduza o aluno ao mercado de trabalho.',
                rightAnswer: false,
                justification: 'Significa uma formação que envolve várias dimensões da vida humana: intelectual, científica, ética, social e técnica. A aprendizagem das técnicas é uma das dimensões formativas do Ensino Médio integrado, mas não de maneira isolada.'
            },
            {
                question: 'Um grande diferencial em cursar o Ensino Médio Integrado nos Institutos Federais  é o incentivo à participação em atividades e projetos de pesquisa e extensão que contribuem para uma aprendizagem significativa e para o desenvolvimento da iniciação científica.',
                rightAnswer: true,
                justification: 'O aluno tem a oportunidade de, desde cedo, vivenciar experiências de pesquisa que contribuem positivamente para sua aprendizagem e desenvolvimento intelectual'
            },
            {
                question: 'Ao realizar o curso Técnico de Edificações Integrado ao Ensino Médio, terei que optar por um curso superior desta mesma área, por exemplo, Engenharia Civil.',
                rightAnswer: false,
                justification: 'Formação integral significa uma formação que envolve todas dimensões da vida humana: intelectual, científica, ética, social e técnica. A aquisição de habilidades técnicas é uma das dimensões formativas do EMI. No ensino médio integrado o aluno tem uma preparação adequada para o trabalho, levando em consideração seu desenvolvimento enquanto cidadão de direitos e deveres.'
            }
        ];
        this.questionsTre = [
            {
                question: 'O ensino acontece, geralmente, em sala de aula; a pesquisa surge para se aplicar os conceitos obtidos em sala de aula ou descobrir algo novo em relação aquele conhecimento que já está nos livros e já foi assimilado pelos alunos; a extensão, é aplicação do conhecimento obtido nas fases do ensino e pesquisa, preferencialmente para melhorar algum problema identificado na sociedade, por exemplo: no seu bairro, na sua comunidade ou em sua escola.',
                rightAnswer: true,
                justification: 'A articulação entre ensino, pesquisa e extensão deixa a aprendizagem mais atrativa uma vez que se aprende pesquisando e aplicando o que foi aprendido.'
            },
            {
                question: 'Todos os alunos matriculados no Instituto Federal de Educação recebem bolsas de assistência estudantil.',
                rightAnswer: false,
                justification: 'Há um período de seleção para distribuição das bolsas de assistências estudantil de acordo com critérios fixados em edital.'
            },
            {
                question: 'A articulação entre ensino, pesquisa e extensão permite uma formação comprometida com a produção do conhecimento científico, com a compreensão ética, política e social do meio em que vivemos e com a resolução de problemas sociais.',
                rightAnswer: true,
                justification: 'Tendo acesso a uma formação de qualidade o aluno poderá exercer sua cidadania comprometendo-se efetivamente com o meio em que vive.'
            },
            {
                question: 'No IFPI, campus Floriano, o Ensino Médio Integrado tem duração de quatro anos, logo, os três primeiros anos são correspondentes ao Ensino Médio e o último ano ao curso técnico.',
                rightAnswer: false,
                justification: 'As disciplinas de formação geral, comumente chamadas de “disciplinas do ensino médio”, são cursadas juntamente às disciplinas de formação específica, conhecidas como “disciplinas técnicas”.  Estas  disciplinas  são distribuídas ao longo de todo o curso, assim em cada uma das séries do ensino médio teremos disciplinas de formação geral e específica.'
            },
            {
                question: 'O aluno que escolher realizar o Curso Técnico Integrado ao Ensino Médio não poderá realizar o ENEM.',
                rightAnswer: false,
                justification: 'Além de estar preparado para exercer uma profissão o aluno poderá, se for do seu interesse, realizar o ENEM  e ingressar no Ensino Superior.'
            }
        ];
        this.questionsFor = [
            {
                question: 'Fazer o Curso Técnico Integrado ao Ensino Médio não significa realizar dois cursos ao mesmo tempo, e sim um único curso, o técnico, integrado ao ensino médio.',
                rightAnswer: true,
                justification: 'Significa realizar um único curso. De maneira integrada será trabalhado a formação para o trabalho. A troca de saberes entre as disciplinas e a união da teoria com a prática propicia um conhecimento amplo da realidade.'
            },
            {
                question: 'Para realizar o Ensino Médio Integrado o aluno deverá passar o dia inteiro na escola.',
                rightAnswer: false,
                justification: 'O Ensino Médio Integrado não é a mesma coisa que o ensino “integral”. Como a carga horária aumenta devido à quantidade de disciplinas, algumas aulas são realizadas no contra turno, geralmente 2 ou 3 vezes na semana.'
            },
            {
                question: 'O Instituto oferece ônibus escolar para seus alunos.',
                rightAnswer: true,
                justification: 'O ônibus realiza uma rota pela cidade em horários determinados, fazendo paradas em locais específicos, previamente divulgado aos estudantes, facilitando a locomoção para a escola.'
            },
            {
                question: 'A Instituição oferece Biblioteca com acesso tanto para alunos matriculados como para estudantes de outras instituições.',
                rightAnswer: true,
                justification: 'Todos os alunos matriculados no Instituto e em outras instituições de ensino podem utilizar os serviços da biblioteca para estudos, pesquisas etc.  A biblioteca possui sala para estudo em grupo, computadores para pesquisas e acervo variado de livros.'
            },
            {
                question: 'Fazer o Ensino Médio Integrado significa realizar dois cursos separadamente, o Ensino Médio e o curso técnico. Ao final do curso receberemos dois certificados, um constando a conclusão do Ensino Médio e o outro a conclusão do Curso Técnico.',
                rightAnswer: false,
                justification: 'Ao concluir o Ensino Médio Integrado o aluno recebe um certificado de conclusão do ensino médio com habilitação técnica na área do curso escolhido.'
            }
        ];
        this.questionsFive = [
            {
                question: 'Apenas alunos que cursaram o Ensino Fundamental em escolas públicas podem fazer inscrição no teste classificatório para ingresso no Instituto Federal.',
                rightAnswer: false,
                justification: 'Alunos que realizaram o ensino fundamental em escolas particulares também podem realizar o teste classificatório, inscrevendo-se na modalidade “ampla concorrência”. Já os alunos provenientes de escolas públicas devem realizar a inscrição na modalidade de “cotas”.'
            },
            {
                question: 'No Instituto Federal temos duas opções para realizar o Ensino Médio, o curso técnico integrado ao médio e o curso de Ensino Médio não integrado.',
                rightAnswer: false,
                justification: 'Os Institutos Federais oferecem o ensino médio integrado à Educação Profissional através do curso Técnico Integrado ao Ensino Médio.'
            },
            {
                question: 'Organização do tempo, prioridade aos estudos e determinação são fatores essenciais para que o aluno tenha êxito no Ensino Médio Integrado.	',
                rightAnswer: true,
                justification: 'O curso técnico possui carga horária maior e mais disciplinas, por isso exige do aluno esforço, determinação e planejamento do tempo. Uma boa opção é criar uma rotina de estudos. A prioridade é estudar, outras atividades não devem atrapalhar o desempenho acadêmico. Dificuldades aparecerão, no entanto, é necessário manter o foco no seu objetivo e ser persistente.'
            },
            {
                question: 'Os serviços médicos, odontológicos e psicológicos oferecidos nos Institutos são gratuitos para o estudante.',
                rightAnswer: true,
                justification: 'Estes serviços fazem parte da política de assistência estudantil e todos os alunos regularmente matriculados tem direito aos atendimentos.'
            },
            {
                question: 'O desenvolvimento de projetos de pesquisa e extensão proporciona ao aluno do EMI a realização de descobertas, maior conhecimento da realidade, o envolvimento com a resolução de problemas sociais e incentiva a criação de soluções tecnológicas.',
                rightAnswer: true,
                justification: 'A realização de projetos de pesquisa e extensão proporciona uma formação ampla para o estudante, desenvolvendo, inclusive seu espírito empreendedor. Além disto, os Institutos Federais exercem sua função social através das contribuições que os resultados das pesquisas geram à população local ou regional.'
            }
        ];
        this.questionsSix = [
            {
                question: 'O Ensino Médio Integrado prioriza pela educação profissional humanizadora, que significa além da formação técnica, uma formação política, científica e cultural visando o desenvolvimento humano integral do estudante. ',
                rightAnswer: true,
                justification: 'É uma formação que prioriza a integração das várias áreas do conhecimento estabelecendo uma conexão entre elas. Não significa apenas a aprendizagem de técnicas específicas para exercer uma profissão, e sim uma educação para a vida, o que inclui o trabalho, o desenvolvimento intelectual, cultural e científico.'
            },
            {
                question: 'Os Institutos Federais possuem refeitório institucional para alimentação (almoço e jantar), dos estudantes, no entanto para ter acesso é necessário o pagamento de uma taxa.',
                rightAnswer: false,
                justification: 'A oferta de alimentação no refeitório institucional é uma ação prevista na política de assistência estudantil, o acesso é gratuito. No campus Floriano-PI basta realizar, com antecedência a reserva no sistema SARI (Serviço de Atendimento ao Restaurante Institucional)'
            },
            {
                question: 'Caso eu tenha interesse, posso mudar de curso. Por exemplo, eu faço o primeiro ano do curso técnico de eletromecânica integrado ao Ensino Médio, mas no segundo ano quero continuar no curso de informática.',
                rightAnswer: false,
                justification: 'Após a matrícula não é possível mudar de curso. O aluno deve permanecer no curso para o qual foi aprovado no exame classificatório até sua conclusão.'
            },
            {
                question: 'No Ensino Médio Integrado o estágio é obrigatório e o aluno deve realizá-lo no próprio campus.',
                rightAnswer: false,
                justification: 'O estágio não é obrigatório, mas havendo oportunidade, o estudante poderá realizá-lo dentro ou fora da instituição.'
            },
            {
                question: 'No curso técnico integrado é essencial a associação da teoria com a prática e isto pode ser feito nas aulas nos laboratórios e em visitas técnica e na realização de atividades de pesquisa e extensão.',
                rightAnswer: true,
                justification: 'Teoria e prática se complementam possibilitando uma aprendizagem significativa e contextualizada com a realidade.'
            }
        ];
        this.questionSeven = [
            {
                question: 'Ao concluir o curso técnico em eletromecânica o aluno deverá, obrigatoriamente, trabalhar como técnico, não sendo possível prosseguir os estudos em curso superior de sua escolha.',
                rightAnswer: false,
                justification: 'O curso técnico integrado não limita e sim abre possibilidades. Ao concluí-lo, o jovem pode fazer um curso superior, trabalhar como técnico ou fazer as duas coisas.'
            },
            {
                question: 'No IFPI campus Floriano, cada curso técnico tem um período de duração diferente, por exemplo, o curso Técnico Integrado em Edificações  tem duração de 3 anos , já o curso de Meio Ambiente tem duração de 4 anos.',
                rightAnswer: false,
                justification: 'Todos os cursos têm o mesmo tempo de duração.'
            },
            {
                question: 'Após ser aprovado no exame classificatório o estudante deve aguardar em casa o início das aulas.',
                rightAnswer: false,
                justification: 'A vaga só estará garantida após a realização da matrícula que ocorre mediante apresentação de toda a documentação exigida no edital de seleção.'
            },
            {
                question: 'Posso encontrar informações sobre os cursos técnicos de nível médio ofertados nos Institutos Federais no Catálogo Nacional de Cursos Técnicos - CNCT',
                rightAnswer: true,
                justification: 'Este catálogo serve para orientar as Instituições, estudantes e a sociedade em geral. Nele encontram-se uma variedade de cursos técnicos e suas caracterizações.'
            },
            {
                question: 'No Ensino Médio Integrado as disciplinas técnicas são cursadas a partir do segundo ano.',
                rightAnswer: false,
                justification: 'Na matriz curricular do curso as disciplinas, tanto técnicas como de formação geral, são distribuídas em todos os anos.'
            }
        ];
        this.bdQuestions = [];
    }
    /* english: selects one of the 04 json objects and assigns the variable bdQuestions
     * Português: seleciona um dos 04 objetos json e atribui a variável bdQuestions
     */
    TrueOrFalseService.prototype.setQuestions = function (idArray) {
        if (idArray === 1) {
            this.bdQuestions = this.questionsOne;
        }
        else if (idArray === 2) {
            this.bdQuestions = this.questionsTwo;
        }
        else if (idArray === 3) {
            this.bdQuestions = this.questionsTre;
        }
        else if (idArray === 4) {
            this.bdQuestions = this.questionsFor;
        }
        else if (idArray === 5) {
            this.bdQuestions = this.questionsFive;
        }
        else if (idArray === 6) {
            this.bdQuestions = this.questionsSix;
        }
        else {
            this.bdQuestions = this.questionSeven;
        }
    };
    /* english: returns an object with the questions and answers of the current round
     * português: retorna um objeto com às perguntas e respostas da rodada atual
     */
    TrueOrFalseService.prototype.getQuestions = function () {
        return this.bdQuestions;
    };
    TrueOrFalseService.prototype.getClassification = function (perfomance) {
        var rendimento = '';
        if (perfomance >= 90) {
            rendimento = 'Ótimo!';
        }
        else if (perfomance >= 70) {
            rendimento = 'Bom!';
        }
        else if (perfomance >= 60) {
            rendimento = 'Razoável!';
        }
        else {
            rendimento = 'É melhor tentar novamente.';
        }
        return rendimento;
    };
    TrueOrFalseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrueOrFalseService);
    return TrueOrFalseService;
}());



/***/ }),

/***/ "./src/app/games/true-or-false/true-or-false.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/games/true-or-false/true-or-false.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Quicksand:400,500\");\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  font-family: \"Quicksand\", sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 32px;\r\n  color: #888888;\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  font-size: 20px;\r\n  color: #555555;\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\n.button-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  min-height: 10rem;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-items: center;\r\n  align-content: center;\r\n  margin: 25%;\r\n}\r\n\r\n.true-button:hover,\r\n.false-button:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.true-button {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  background-color: #63c6ae;\r\n}\r\n\r\n.true-button h1 {\r\n  color: white;\r\n}\r\n\r\n.false-button {\r\n  flex: 1;\r\n  box-sizing: border-box;\r\n  border: 3px solid #63c6ae;\r\n}\r\n\r\n.next-button{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-size: 2rem;\r\n  color: white;\r\n  background-color: #63c6ae;\r\n  border: 3px solid transparent;\r\n  padding: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.next-button div :hover{\r\n  cursor: progress;\r\n  background-color: white;\r\n  border: 3px solid #63c6ae;\r\n  color: #63c6ae;\r\n}\r\n\r\n.next-button h1{\r\n  color: white;\r\n}\r\n\r\n.next-button button{\r\n  padding: 1em;\r\n  background-color: white;\r\n  border: 3px solid #63c6ae;\r\n  border-radius: 5px;\r\n  color: #63c6ae;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvdHJ1ZS1vci1mYWxzZS90cnVlLW9yLWZhbHNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFOztBQUV4RTs7OztFQUlFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy90cnVlLW9yLWZhbHNlL3RydWUtb3ItZmFsc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZDo0MDAsNTAwXCIpO1xyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjODg4ODg4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWluLWhlaWdodDogMTByZW07XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMjUlO1xyXG59XHJcblxyXG4udHJ1ZS1idXR0b246aG92ZXIsXHJcbi5mYWxzZS1idXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRydWUtYnV0dG9uIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYzZhZTtcclxufVxyXG5cclxuLnRydWUtYnV0dG9uIGgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mYWxzZS1idXR0b24ge1xyXG4gIGZsZXg6IDE7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjNjNjNmFlO1xyXG59XHJcblxyXG4ubmV4dC1idXR0b257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYzZhZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHQtYnV0dG9uIGRpdiA6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwcm9ncmVzcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjNjNjNmFlO1xyXG4gIGNvbG9yOiAjNjNjNmFlO1xyXG59XHJcblxyXG4ubmV4dC1idXR0b24gaDF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmV4dC1idXR0b24gYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjNjNjNmFlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogIzYzYzZhZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/games/true-or-false/true-or-false.component.html":
/*!******************************************************************!*\
  !*** ./src/app/games/true-or-false/true-or-false.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>Mito ou verdade? Responda</h1>\r\n</div>\r\n<div>\r\n    <div>\r\n        <!-- Caixa com a pergunta da rodada-->\r\n        <div *ngIf='displayQuestion'>\r\n            <p>{{questions[round].question}}</p>\r\n            <div class=\"button-container\">\r\n                <div class=\"true-button\" (click)='verifyResponse(true)'>\r\n                    <div class=\"row\">\r\n                        <h1>\r\n                            Verdade\r\n                        </h1>\r\n                    </div>\r\n                </div>\r\n                <div class=\"false-button\" (click)='verifyResponse(false)'>\r\n                    <div class=\"row\">\r\n                        <h1>\r\n                            Mito\r\n                        </h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Caixa com o resultado (acertou ou erro) + Justificativa -->\r\n        <div *ngIf=\"displayResult\">\r\n            <p>{{showMensseger()}}</p>\r\n            <div (click)=\"incrementRound()\" class=\"next-button\">Próximo</div>\r\n        </div>\r\n        <!-- Fim de jogo e resultados gerais (aproveitamento) etc -->\r\n        <div *ngIf='finishGame'>\r\n            <h1>Fim da rodada!</h1>\r\n            <div class=\"next-button\">\r\n                <h1 class=\"text-center\">Número de acertos: {{ score }}</h1>\r\n                <h1 class=\"text-center\">Desempenho: {{ perfomance | number: '2.1-1' }}%</h1>\r\n            </div>\r\n            <div *ngIf=\"!endGame\" class=\"next-button\">\r\n                <button (click)='auxInitOrStart()'>Próxima rodada</button>\r\n            </div>\r\n            <div *ngIf=\"endGame\" class='next-button bg-white'>\r\n                <h2 class='text-center text-danger'>Você já jogou todas as rodadas do jogo. Deseja reiniciar?</h2>\r\n                <p>Numero total de acertos: {{scoreFinal}}</p>\r\n                <p>Aproveitamento final: <span>{{ setPermanceFinal() | number: '2.1-1' }}%</span></p>\r\n                <div class=\"next-button\">\r\n                    <button (click)='auxInitOrStart()'>Reiniciar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/games/true-or-false/true-or-false.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/games/true-or-false/true-or-false.component.ts ***!
  \****************************************************************/
/*! exports provided: TrueOrFalseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueOrFalseComponent", function() { return TrueOrFalseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _true_or_false_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../true-or-false.service */ "./src/app/games/true-or-false.service.ts");



var TrueOrFalseComponent = /** @class */ (function () {
    function TrueOrFalseComponent(service) {
        this.service = service;
        this.auxQuestions = [];
        this.questionsErrors = [];
        this.arraySorteado = 0;
        this.image = { imgTrue: 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/true.png', imgFalse: 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/remove-icon.png' };
        this.endGame = false;
    }
    TrueOrFalseComponent.prototype.ngOnInit = function () {
        this.init();
    };
    TrueOrFalseComponent.prototype.init = function () {
        this.auxInitOrStart();
        this.auxQuestions = this.service.getQuestions();
        this.endGame = false;
        this.scoreFinal = 0;
    };
    TrueOrFalseComponent.prototype.sorteio = function () {
        // debug: console.log('Sorteio acionado');
        var num = this.arraySorteado;
        if (num === 7) {
            this.endGame = true;
            this.arraySorteado = 1;
        }
        else {
            this.arraySorteado++;
            this.endGame = false;
        }
        // lógica sorteio
        this.service.setQuestions(this.arraySorteado);
        console.log('Rodada: ' + this.arraySorteado);
    };
    TrueOrFalseComponent.prototype.auxInitOrStart = function () {
        this.sorteio();
        this.questions = this.service.getQuestions();
        this.round = 0;
        this.score = 0;
        this.finishGame = false;
        this.perfomance = 0;
        this.resultMensseger = undefined;
        this.ranking = undefined;
        this.numMaxQuestion = this.questions.length;
        this.displayQuestion = true;
        this.displayResult = false;
    };
    TrueOrFalseComponent.prototype.verifyResponse = function (userResponse) {
        // verificar resposta
        if (userResponse === this.questions[this.round].rightAnswer) {
            this.resultMensseger = 'Parabéns: ';
            this.score++;
        }
        else {
            this.resultMensseger = 'Tente novamente: ';
        }
        // controle de exibição das 'caixas' de perguntas e respostas
        this.alterDisplays();
    };
    // a rodada acabou?
    TrueOrFalseComponent.prototype.verifyFinishGame = function () {
        // debug: console.log('round: ' + this.round + 'max: ' + this.numMaxQuestion);
        if (this.round === this.numMaxQuestion) {
            this.finishGame = true;
            this.scoreFinal += this.score;
            this.setPerfomance();
            this.setClassification();
            this.notDisplays();
        }
        else {
            // controle de exibição das 'caixas' de perguntas e respostas
            this.alterDisplays();
        }
    };
    TrueOrFalseComponent.prototype.notDisplays = function () {
        this.displayQuestion = false;
        this.displayResult = false;
    };
    TrueOrFalseComponent.prototype.alterDisplays = function () {
        this.alterDisplayResult();
        this.alterDisplayQuestion();
    };
    TrueOrFalseComponent.prototype.incrementRound = function () {
        this.round++;
        // verificar término do jogo
        this.verifyFinishGame();
    };
    TrueOrFalseComponent.prototype.showMensseger = function () {
        return this.resultMensseger + this.questions[this.round].justification;
    };
    TrueOrFalseComponent.prototype.setPerfomance = function () {
        this.perfomance = this.score / this.numMaxQuestion * 100;
    };
    TrueOrFalseComponent.prototype.setPermanceFinal = function () {
        return this.scoreFinal / 35 * 100;
    };
    TrueOrFalseComponent.prototype.setClassification = function () {
        this.ranking = this.service.getClassification(this.perfomance);
    };
    // controlar exibição da div de resultados (acertou ou + justificativa)
    TrueOrFalseComponent.prototype.alterDisplayResult = function () {
        this.displayResult = !this.displayResult;
    };
    TrueOrFalseComponent.prototype.alterDisplayQuestion = function () {
        this.displayQuestion = !this.displayQuestion;
    };
    TrueOrFalseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-true-or-false',
            template: __webpack_require__(/*! ./true-or-false.component.html */ "./src/app/games/true-or-false/true-or-false.component.html"),
            providers: [_true_or_false_service__WEBPACK_IMPORTED_MODULE_2__["TrueOrFalseService"]],
            styles: [__webpack_require__(/*! ./true-or-false.component.css */ "./src/app/games/true-or-false/true-or-false.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_true_or_false_service__WEBPACK_IMPORTED_MODULE_2__["TrueOrFalseService"]])
    ], TrueOrFalseComponent);
    return TrueOrFalseComponent;
}());



/***/ })

}]);
//# sourceMappingURL=games-games-module.js.map