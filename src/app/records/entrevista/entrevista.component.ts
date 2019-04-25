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
  questions: Array<string>;

  constructor(private servInterview: InterviewService) { }

  ngOnInit() {
    this.interviews = this.servInterview.getInterviews();
    this.questions[0] = this.servInterview.questionOne;
    this.questions[1] = this.servInterview.questionTwo;
    this.questions[2] = this.servInterview.questionTre;
    this.questions[3] = this.servInterview.questionFor;
    console.log(this.questions[3]);
    console.log('SERVICE--> ' + this.servInterview.questionFor);
    console.log(this.interviews);
  }

}
