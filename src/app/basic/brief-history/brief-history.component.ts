import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-history',
  templateUrl: './brief-history.component.html',
  styleUrls: ['./brief-history.component.css']
})
export class BriefHistoryComponent implements OnInit {

  public imgIntro = '../../../assets/imagens/intro.png';
  public imgAluna = '../../../assets/imagens/section2.png';
  constructor() { }

  ngOnInit() {
  }

}
