import { Component, OnInit } from '@angular/core';

import { MuralTwoService } from './../mural-two.service';
import { MuralTwo } from 'src/app/shared/mural-two.model';

@Component({
  selector: 'app-mural-two',
  templateUrl: './mural-two.component.html',
  styleUrls: ['./mural-two.component.css']
})
export class MuralTwoComponent implements OnInit {

  public questionOne: string;
  public questionTwo: string;
  public depositions: Array<MuralTwo>;

  constructor(private service: MuralTwoService) { }

  ngOnInit() {
    this.questionOne = this.service.questionOne;
    this.questionTwo = this.service.questionTwo;
    this.depositions = this.service.getDepositions();
  }

}
