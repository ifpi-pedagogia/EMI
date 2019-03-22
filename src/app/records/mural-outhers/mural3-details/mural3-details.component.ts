import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MuralTre } from './../../../shared/mural-tre.model';
import { MuralTreService } from './../mural-tre.service';

@Component({
  selector: 'app-mural3-details',
  templateUrl: './mural3-details.component.html',
  styleUrls: ['./mural3-details.component.css']
})
export class Mural3DetailsComponent implements OnInit {

  public itemMural: MuralTre;
  public queryOne: string;
  public queryTwo: string;
  public queryTre: string;

  constructor(private servModel: MuralTreService, private servRotas: ActivatedRoute) { }

  ngOnInit() {
    this.queryOne = this.servModel.questionOne;
    this.queryTwo = this.servModel.questionTwo;
    this.queryTre = this.servModel.questionTre;
    this.itemMural = this.setElementMural();
  }

  private setElementMural(): MuralTre {
    const date = 'id';
    const search = this.servRotas.snapshot.params[date];
    return this.servModel.getElementIdMural(search);
  }

}
