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
  public imgGame: string;

  constructor(private service: TrueOrFalseService) { }

  ngOnInit() {
    this.init();
  }

  public init(): void {
    this.auxInitOrStart();
    // this.sorteio();
    this.auxQuestions = this.service.getQuestions();
  }

  private sorteio(): void {
    console.log('Sorteio acionado');
    const num = this.arraySorteado;
    if (num === 3) {
      this.arraySorteado = 1;
    } else {
      this.arraySorteado++;
    }
    // lógica sortei
    this.service.setQuestions(this.arraySorteado);
  }

  public auxInitOrStart(): void {
    this.imgGame = 'assets/imagens/mito_verdade.png';
    this.sorteio();
    this.questions = this.service.getQuestions();
    this.round = 0;
    this.score = 0;
    this.finishGame = false;
    this.perfomance = 0;
    this.resultMensseger = undefined;
    this.ranking = undefined;
    this.numMaxQuestion = this.questions.length;
  }

  public verifyResponse(userResponse: boolean): void {
    // verificar resposta
    if (userResponse === this.questions[this.round].rightAnswer) {
      this.resultMensseger = 'Parabéns: ';
      this.score++;
    } else {
      this.resultMensseger = 'Tente novamente: ';
      this.setErrors(this.questions[this.round]);
    }
    // exibir mensagem e parte para a próxima rodada
    alert(this.resultMensseger + this.questions[this.round].justification);
    this.round++;

    // verificar término do jogo
    if (this.round === this.numMaxQuestion) {
      this.finishGame = true;
      this.setPerfomance();
      this.setClassification();
    }
  }

  public setPerfomance(): void {
    this.perfomance = this.score / this.numMaxQuestion * 100;
  }

  public setClassification(): void {
    this.ranking = this.service.getClassification(this.perfomance);
  }

  public setErrors(question: QuestionTrueOrFalse): void {
    this.questionsErrors.push(question);
  }

  public restart(): void {
    if (this.perfomance < 90) {
      this.questions = this.questionsErrors;
    } else {
      // this.questions = this.auxQuestions;
      this.sorteio();
    }
    this.auxInitOrStart();

  }

}
