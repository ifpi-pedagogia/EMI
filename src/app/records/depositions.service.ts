import { Injectable } from '@angular/core';

import { Depositions } from '../shared/depositions.model';

@Injectable({
  providedIn: 'root'
})
export class DepositionsService {

  public myDepositions: Array<Depositions> = [
    {
      id: 1,
      url: 'assets/videos/vAnabelRafael.mp4',
      author: 'Ana Bel e Rafael'
    },
    {
      id: 2,
      url: 'assets/videos/vAnaLuisa.mp4',
      author: 'Ana Luisa'
    },
    {
      id: 3,
      url: 'assets/videos/vAnthony.mp4',
      author: 'Anthony'
    },
    {
      id: 4,
      url: 'assets/videos/vBeatriz.mp4',
      author: 'Beatriz'
    },
    {
      id: 5,
      url: 'assets/videos/vCamilaOliveira.mp4',
      author: 'Camila Oliveira'
    },
    {
      id: 6,
      url: 'assets/videos/vElias.mp4',
      author: 'Elias'
    },
    {
      id: 7,
      url: 'assets/videos/vGian.mp4',
      author: 'Gian'
    },
    {
      id: 8,
      url: 'assets/videos/vJuliano.mp4',
      author: 'Juliano'
    },
    {
      id: 9,
      url: 'assets/videos/vMariaKatiane1.mp4',
      author: 'Maria Catyane'
    },
    {
      id: 10,
      url: 'assets/videos/vMariaKatiane2.mp4',
      author: 'Maria Catyane'
    },
    {
      id: 11,
      url: 'assets/videos/vRenata.mp4',
      author: 'Renata'
    },
    {
      id: 12,
      url: 'assets/videos/vRenataSammer.mp4',
      author: 'Renata Sammer'
    },
    {
      id: 13,
      url: 'assets/videos/vTiago.mp4',
      author: 'Tiago'
    },
    {
      id: 14,
      url: 'assets/videos/vMarlon1.mp4',
      author: 'Marlon'
    },
    {
      id: 15,
      url: 'assets/videos/vMarlon2.mp4',
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
