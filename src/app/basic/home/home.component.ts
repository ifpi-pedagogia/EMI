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
    this.urlFoguete = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/rocket.png';
    this.urlFormando = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/capelo.png';
    this.urlPointer = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/cursor.png';
    this.urlAstronauta = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/astronaut.png';
    this.urlMenina1 = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/intro.png';
    this.urlMenina2 = 'https://ifpi-pedagogia.github.io/EMI/assets/imagens/section2.png';
  }

}
