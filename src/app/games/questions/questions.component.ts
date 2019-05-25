import { Component, OnInit } from '@angular/core';

import { QuestionAlternatives } from './../../shared/questions-alternatives.model';
import { QuestionsService } from './../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questions: Array<QuestionAlternatives>; // questions
  public round: number; // rodada
  public changeColor: Array<boolean>;
  public perguntar: boolean;
  public pergunta: string;
  public resposta: string;
  public alt1: string;
  public alt2: string;
  public alt3: string;
  public current: number;
  public result: boolean;
  public unidade: number;
  public gameOver: boolean;

  constructor(private service: QuestionsService) { }

  ngOnInit() {
    this.init();
  }

  public init(): void {
    this.service.init();
    this.restart();
  }

  private restart(): void {
    this.questions = this.service.getQuestions();
    this.gameOver = false;
    this.unidade = 0;
    this.round = 0;
    this.result = false;
    this.perguntar = false;
    this.changeColor = [false, false, false, false, false, false, false, false, false, false];
  }

  public game(r: number, current: number): void {
    const resp = this.questions[current].alternatives[r];
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
  }

  public resetQuestions(): void {
    if (this.gameOver) {
      this.restart();
    }
  }

  private setAlternatives(current: number): void {
    this.current = current;
    this.pergunta = this.questions[current].question;
    this.alt1 = this.questions[current].alternatives[0];
    this.alt2 = this.questions[current].alternatives[1];
    this.alt3 = this.questions[current].alternatives[2];
  }

  public changeBackground(indice: number): void {
    if (this.changeColor[indice] === false) {
      this.setAlternatives(indice);
      this.perguntar = !this.perguntar;
    } else {
      // emita uma mensagem para o usuário (óbvio que não será à próxima linha)
      alert('Caro aluno, você já respondeu corretamente a pergunta desse item.');
    }
  }

  public showResult(): void {
    this.result = !this.result;
  }

  // método para uso do grid
  public plusUnidade(): void {
    this.unidade = this.unidade + 1;
  }

  public gameGrid(r: number): void {
    const resp = this.questions[this.unidade].alternatives[r];
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

  }

}
