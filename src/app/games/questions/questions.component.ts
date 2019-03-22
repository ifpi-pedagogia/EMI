import { Component, OnInit } from '@angular/core';

import { QuestionAlternatives } from './../../shared/questions-alternatives.model';
import { QuestionsService } from './../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questions: Array<QuestionAlternatives>;
  public round: number;
  public pecaQuebraCaebeca: boolean;
  public changeColor: Array<boolean>;
  public perguntar: boolean;
  public pergunta: string;
  public alt1: string;
  public alt2: string;
  public alt3: string;
  public current: number;

  constructor(private service: QuestionsService) { }

  ngOnInit() {
    this.init();
  }

  public init(): void {
    this.service.init();
    this.questions = this.service.getQuestions();
    this.round = 0;
    this.pecaQuebraCaebeca = false;
    this.perguntar = false;
    this.changeColor = [false, false, false, false, false, false, false, false, false, false];
  }

  public game(r: number, current: number): void {
    const resp = this.questions[current].alternatives[r];
    this.service.playerGame(resp, current);
    this.perguntar = false;
    this.round = this.service.round;
    if (this.service.getAcertou()) {
      this.changeColor[current] = !this.changeColor[current];
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
      // emita uma mensagem para o usuário (óbvio que não é próxima linha)
      console.log('Bloqueado!');
    }


  }

}
