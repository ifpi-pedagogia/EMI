import { Injectable } from '@angular/core';

import { Depositions } from '../shared/depositions.model';

@Injectable({
  providedIn: 'root'
})
export class DepositionsService {

  public myDepositions: Array<Depositions> = [
    {
      id: 1,
      url: '',
      author: 'Ana Bel e Rafael'
    },
    {
      id: 2,
      url: '',
      author: 'Ana Luisa'
    },
    {
      id: 3,
      url: '',
      author: 'Anthony'
    },
    {
      id: 4,
      url: '',
      author: 'Beatriz'
    },
    {
      id: 5,
      url: '',
      author: 'Camila Oliveira'
    },
    {
      id: 6,
      url: '',
      author: 'Elias'
    },
    {
      id: 7,
      url: '',
      author: 'Gian'
    },
    {
      id: 8,
      url: '',
      author: 'Juliano'
    },
    {
      id: 9,
      url: '',
      author: 'Maria Catyane'
    },
    {
      id: 10,
      url: '',
      author: 'Maria Catyane'
    },
    {
      id: 11,
      url: '',
      author: 'Renata'
    },
    {
      id: 12,
      url: '',
      author: 'Renata Sammer'
    },
    {
      id: 13,
      url: '',
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
