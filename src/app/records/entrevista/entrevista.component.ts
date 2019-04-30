import { Component, OnInit, ɵConsole } from '@angular/core';

import { EntrevistaModel } from './../../shared/entrevista.model';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {

  interviews: Array<EntrevistaModel>;

  constructor(private servInterview: InterviewService) { }

  ngOnInit() {
    this.interviews = this.servInterview.getInterviews();
  }

}
