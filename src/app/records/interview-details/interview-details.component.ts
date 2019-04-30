import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InterviewService } from '../interview.service';

import { EntrevistaModel } from './../../shared/entrevista.model';



@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit {

  interview: EntrevistaModel;
  questionOne: string;
  questionTwo: string;
  questionTre: string;
  questionFor: string;

  constructor(private servInterviewDetails: InterviewService,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    this.interview = this.interviewSearchById();
    this.setQuestions();
  }

  private setQuestions(): void {
    this.questionOne = 'O que você diria para um estudante de ensino fundamental (09º ano) que está indeciso quanto a qual tipo de ensino médio realizar: O ensino médio não integrado ou o  ensino médio integrado?';
    this.questionTwo = 'O que você diria a um aluno que acabou de ingressar no 1º ano do ensino médio integrado e está com muitas dúvidas sobre o curso técnico?';
    this.questionTre = 'Que contribuições o ensino médio integrado está trazendo para sua formação?';
    this.questionFor = 'Você arrepende-se de ter optado por realizar o curso técnico integrado no Instituto Federal? Justifique.';
  }

  private interviewSearchById(): EntrevistaModel {
    /* this.rotaAtiva.params[date] = retorna o params id da barra de navegação
     * O método getInterviewById (da class service) usará esse retorno para retonar
     * um objeto EntrevistaModel correspondente ao id.
     */
    const date = 'id';
    return this.servInterviewDetails.getInterviewById(this.rotaAtiva.snapshot.params[date]);
  }

}
