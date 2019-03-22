import { Component, OnInit } from '@angular/core';

import { MuralTre } from './../../../shared/mural-tre.model';
import { MuralTreService } from './../mural-tre.service';

@Component({
  selector: 'app-mural-tre',
  templateUrl: './mural-tre.component.html',
  styleUrls: ['./mural-tre.component.css']
})
export class MuralTreComponent implements OnInit {

  public myDepositions: Array<MuralTre>;
  public queryOne: string;
  public queryTwo: string;
  public queryTre: string;

  constructor(private service: MuralTreService) { }

  ngOnInit() {
    this.queryOne = this.service.questionOne;
    this.queryTwo = this.service.questionTwo;
    this.queryTre = this.service.questionTre;
    this.myDepositions = this.service.getDepositions();
  }

}
