import { Component, OnInit } from '@angular/core';

import { MuralService } from '../mural-one.service';

import { Mural } from './../../shared/mural-one.model';

@Component ({
  selector: 'app-mural-one',
  templateUrl: './mural-one.component.html',
  styleUrls: ['./mural-one.component.css']
})

export class MuralOneComponent implements OnInit {

  public mural: Array<Mural>;

  constructor(private service: MuralService) { }

  ngOnInit() {
    this.mural = this.service.getMural();
  }

  public setIntro(elemento: Mural): string {
    return this.service.getIntro(elemento);
  }

}
