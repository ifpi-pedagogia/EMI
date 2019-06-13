import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title = 'INSTITUTO FEDERAL DO PIAUÍ';
  public developmentTeam = 'Felipi Almeida, Joseane Duarte Santos, Júnior Quadros e Romário Coelho';
  public facebook = 'https://www.facebook.com/ifpiaui/';
  public instagram = 'https://www.instagram.com/ifpiaui/?hl=en';
  public twitter = 'https://twitter.com/IFPiaui';
  public copyright = ' © 2019 Todos os direitos reservados ao IFPI - Campus Floriano';
  constructor() { }

  ngOnInit() {
  }

}
