import { Component, OnInit } from '@angular/core';

import { EntrevistaModel } from './../../shared/entrevista.model';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {

  interviews: Array<EntrevistaModel>;
  questionOne: string;
  questionTwo: string;
  questionTre: string;
  questionFor: string;

  constructor(private servInterview: InterviewService) { }

  ngOnInit() {
    this.interviews = this.servInterview.getInterviews();
    this.questionOne = 'O que você diria para um estudante de ensino fundamental (09º ano) que está indeciso quanto a qual tipo de ensino médio realizar: O ensino médio não integrado ou o  ensino médio integrado?';
    this.questionTwo = 'O que você diria a um aluno que acabou de ingressar no 1º ano do ensino médio integrado e está com muitas dúvidas sobre o curso técnico?';
    this.questionTre = 'Que contribuições o ensino médio integrado está trazendo para sua formação?';
    this.questionFor = 'Você arrepende-se de ter optado por realizar o curso técnico integrado no Instituto Federal? Justifique.';
  }

}
