import { Injectable } from '@angular/core';

import { Depositions } from '../shared/depositions.model';

@Injectable({
  providedIn: 'root'
})
export class DepositionsService {

  public myDepositions: Array<Depositions> = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/myM4kuB3ke8',
      author: 'Ana Bel e Rafael'
    },
    {
      id: 2,
      url: '',
      author: 'Ana Luisa'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/GWJYuwnCPss',
      author: 'Anthony'
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/vtHoOjxLSyk',
      author: 'Beatriz'
    },
    {
      id: 5,
      url: 'www.youtube.com/embed/mCbY55edrnQ',
      author: 'Camila Oliveira'
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/1GbyUfzVBoI',
      author: 'Elias'
    },
    {
      id: 7,
      url: '',
      author: 'Gian'
    },
    {
      id: 8,
      url: 'https://www.youtube.com/embed/TIgtY2FGmos',
      author: 'Juliano'
    },
    {
      id: 9,
      url: 'https://www.youtube.com/embed/06ne77ifibw',
      author: 'Maria Catyane'
    },
    {
      id: 10,
      url: 'https://www.youtube.com/embed/Q7imw3bvImc',
      author: 'Maria Catyane'
    },
    {
      id: 11,
      url: 'https://www.youtube.com/embed/goVXAjykDy4',
      author: 'Renata'
    },
    {
      id: 12,
      url: '',
      author: 'Renata Sammer'
    },
    {
      id: 13,
      url: 'https://www.youtube.com/embed/u3bX-76FGRE',
      author: 'Tiago'
    },
    {
      id: 14,
      url: '',
      author: 'Marlon'
    },
    {
      id: 15,
      url: '',
      author: 'Marlon'
    },
    {
      id: 16,
      url: 'https://www.youtube.com/embed/zffknHFmlec',
      author:'Maria Regina'
    }
    /*
    {
      id: 16,
      url: '/src/assets/videos/v322.mp4',
      author: 'Editar'
    }
    */
  ];

  constructor() { }

  public getDepositions(): Array<Depositions> {
    return this.myDepositions;
  }

  public getIdDeposition(id: number): Depositions {
    let i = 0;
    for (i; i < this.myDepositions.length; i++) {
      if (this.myDepositions[i].id == id) {
        return this.myDepositions[i];
      }
    }
    return null; // caso não encontre
  }
}
