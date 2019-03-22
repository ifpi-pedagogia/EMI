import { DepositionsService } from './../depositions.service';
import { Depositions } from './../../shared/depositions.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deposition-details',
  templateUrl: './deposition-details.component.html',
  styleUrls: ['./deposition-details.component.css']
})
export class DepositionDetailsComponent implements OnInit {

  public deposition: Depositions;

  constructor(private rota: ActivatedRoute, private serv: DepositionsService) { }

  ngOnInit() {
    this.deposition = this.setDeposition();
  }

  private setDeposition(): Depositions {
    const date = 'id';
    const search = this.rota.snapshot.params[date];
    return this.serv.getIdDeposition(search);
  }

}
