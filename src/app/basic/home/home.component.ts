import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public urlVideo: string;
  public urlFoguete: string;
  public urlFormando: string;
  public urlPointer: string;
  public urlAstronauta: string;
  public urlMenina1: string;
  public urlMenina2: string;

  constructor() { }

  ngOnInit() {
    this.urlVideo = 'https://www.youtube.com/watch?v=cEXuxwKDZIE&feature=youtu.be';
    this.urlFoguete = '../../../assets/imagens/rocket.png';
    this.urlFormando = '../../../assets/imagens/capelo.png';
    this.urlPointer = '../../../assets/imagens/cursor.png';
    this.urlAstronauta = '../../../assets/imagens/astronaut.png';
    this.urlMenina1 = '../../../assets/imagens/intro.png';
    this.urlMenina2 = '../../../assets/imagens/section2.png';
  }

}
