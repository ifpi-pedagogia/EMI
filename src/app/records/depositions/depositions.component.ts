import { Component, OnInit } from '@angular/core';

import { Depositions } from './../../shared/depositions.model';
import { DepositionsService } from '../depositions.service';

@Component({
  selector: 'app-depositions',
  templateUrl: './depositions.component.html',
  styleUrls: ['./depositions.component.css'],
  providers: [DepositionsService]
})
export class DepositionsComponent implements OnInit {

  public depositions: Array<Depositions>;

  constructor(private service: DepositionsService) { }

  ngOnInit() {
    this.depositions = this.service.getDepositions();
  }

}
