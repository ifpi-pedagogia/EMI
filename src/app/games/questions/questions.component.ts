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
  public round: number; // partida
  public perguntar: boolean; // habilita a div da pergunta
  public pergunta: string; // pergunta a ser feita
  public alt1: string;
  public alt2: string;
  public alt3: string;
  public current: number;
  public menssageGame: string;
  public showMenssage: boolean;

  constructor(private service: QuestionsService) { }

  ngOnInit() {
    this.init();
  }

  public init(): void {
    this.service.init();
    this.questions = this.service.getQuestions();
    this.round = 0;
    this.current = undefined;
    this.perguntar = false;
    this.pergunta = null;
    this.alt1 = null;
    this.alt2 = null;
    this.alt3 = null;
    this.menssageGame = null;
    this.showMenssage = false;
    }

  public game(r: number, current: number): void {
    const resp = this.questions[current].alternatives[r];
    this.menssageGame = this.service.playerGame(resp, current);
    this.displayMenssage();
    this.displayQuestion();
    this.round = this.service.round;
    if (this.service.getAcertou()) {
      // this.changeColor[current] = !this.changeColor[current];
      this.questions[current].state = !this.questions[current].state;
      this.showMenssage = true;
    } else {
      this.displayMenssage();
      console.log(this.perguntar);
      console.log(this.showMenssage);
    }
  }

  public displayMenssage(): void {
    this.showMenssage = !this.showMenssage;
    this.menssageGame = null;
  }

  public displayQuestion(): void {
    this.perguntar = !this.perguntar;
  }

  public questionAboutAllhidden(): void {
    this.displayMenssage();
    this.displayQuestion();
  }
  private setAlternatives(current: number): void {
    this.current = current;
    this.pergunta = this.questions[current].question;
    this.alt1 = this.questions[current].alternatives[0];
    this.alt2 = this.questions[current].alternatives[1];
    this.alt3 = this.questions[current].alternatives[2];
  }

  public changeBackground(indice: number): void {
    if (this.questions[indice].state === false) {
      this.setAlternatives(indice);
      this.displayQuestion();
    } else {
      // emita uma mensagem para o usuário (óbvio que não é próxima linha)
      console.log('Bloqueado!');
    }


  }

}
