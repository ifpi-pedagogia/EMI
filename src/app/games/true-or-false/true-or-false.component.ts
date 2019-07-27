import { Component, OnInit } from '@angular/core';

import { TrueOrFalseService } from './../true-or-false.service';
import { QuestionTrueOrFalse } from './../../shared/true-or-false.model';


@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.css'],
  providers: [TrueOrFalseService]
})
export class TrueOrFalseComponent implements OnInit {

  public questions: Array<QuestionTrueOrFalse>;
  public auxQuestions: Array<QuestionTrueOrFalse> = [];
  public questionsErrors: Array<QuestionTrueOrFalse> = [];
  public round: number; // rodada atual
  public score: number; // pontuação atual
  public finishGame: boolean; // controle do jogo
  public perfomance: number; // % de acertos
  public resultMensseger: string; // acertou ou errou?
  public ranking: string; // foi bom, razoável, ruim, ótimo.
  public numMaxQuestion: number; // limite de questões.
  public arraySorteado = 0;
  public displayResult: boolean; // exibir ou não div com 'as respostas'?
  public displayQuestion: boolean; // exibir ou não as perguntas?
  public image = {imgTrue: 'assets/imagens/true.png', imgFalse: 'assets/imagens/remove-icon.png'};

  constructor(private service: TrueOrFalseService) { }

  ngOnInit() {
    this.init();
  }

  public init(): void {
    this.auxInitOrStart();
    this.auxQuestions = this.service.getQuestions();
  }

  private sorteio(): void {
    // debug: console.log('Sorteio acionado');
    const num = this.arraySorteado;
    if (num === 7) {
      this.arraySorteado = 1;
    } else {
      this.arraySorteado++;
    }
    // lógica sorteio
    this.service.setQuestions(this.arraySorteado);
    console.log('Rodada: ' + this.arraySorteado);
  }

  public auxInitOrStart(): void {
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
  }

  public verifyResponse(userResponse: boolean): void {
    // verificar resposta
    if (userResponse === this.questions[this.round].rightAnswer) {
      this.resultMensseger = 'Parabéns: ';
      this.score++;
    } else {
      this.resultMensseger = 'Tente novamente: ';
    }
    // controle de exibição das 'caixas' de perguntas e respostas
    this.alterDisplays();
  }

  // a rodada acabou?
  private verifyFinishGame(): void {
    // debug: console.log('round: ' + this.round + 'max: ' + this.numMaxQuestion);
    if (this.round === this.numMaxQuestion) {
      this.finishGame = true;
      this.setPerfomance();
      this.setClassification();
      this.notDisplays();
    } else {
      // controle de exibição das 'caixas' de perguntas e respostas
      this.alterDisplays();
    }

  }

  private notDisplays(): void {
    this.displayQuestion = false;
    this.displayResult = false;
  }

  public alterDisplays(): void {
    this.alterDisplayResult();
    this.alterDisplayQuestion();
  }

  public incrementRound(): void {
    this.round++;
    // verificar término do jogo
    this.verifyFinishGame();
  }

  public showMensseger(): string {
    return this.resultMensseger + this.questions[this.round].justification;
  }

  public setPerfomance(): void {
    this.perfomance = this.score / this.numMaxQuestion * 100;
  }

  public setClassification(): void {
    this.ranking = this.service.getClassification(this.perfomance);
  }

  // controlar exibição da div de resultados (acertou ou + justificativa)
  public alterDisplayResult(): void {
    this.displayResult = !this.displayResult;
  }

  public alterDisplayQuestion(): void {
    this.displayQuestion = !this.displayQuestion;
  }
}
