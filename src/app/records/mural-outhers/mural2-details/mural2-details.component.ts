import { MuralTwo } from 'src/app/shared/mural-two.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MuralTwoService } from './../mural-two.service';

@Component({
  selector: 'app-mural2-details',
  templateUrl: './mural2-details.component.html',
  styleUrls: ['./mural2-details.component.css']
})
export class Mural2DetailsComponent implements OnInit {

  constructor(private servModel: MuralTwoService, private servRotas: ActivatedRoute) { }

  public itemMural: MuralTwo;
  public queryOne: string;
  public queryTwo: string;

  ngOnInit() {
    this.queryOne = this.servModel.questionOne;
    this.queryTwo = this.servModel.questionTwo;
    this.itemMural = this.setItemSelected();
  }

  private setItemSelected(): MuralTwo {
    const date = 'id';
    const search = this.servRotas.snapshot.params[date];
    return this.servModel.getItemMural(search);
  }

}
