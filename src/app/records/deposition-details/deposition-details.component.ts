import { DepositionsService } from './../depositions.service';
import { Depositions } from './../../shared/depositions.model';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-deposition-details',
  templateUrl: './deposition-details.component.html',
  styleUrls: ['./deposition-details.component.css']
})
export class DepositionDetailsComponent implements OnInit {

  public deposition: Depositions;

  constructor(private rota: ActivatedRoute, private serv: DepositionsService, private sanitizer: DomSanitizer) {
   }

  ngOnInit() {
    this.deposition = this.setDeposition();
    console.log('url: ' + this.transform(this.deposition.url));
  }

  private setDeposition(): Depositions {
    const date = 'id';
    const search = this.rota.snapshot.params[date];
    return this.serv.getIdDeposition(search);
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}
