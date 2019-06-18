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
      author: 'Ana Bel e Rafael',
      urlImg: /* 'assets/imagens/depoimento1.jpeg', */ '',
      course: 'Informática'
    },
    /*
    {
      id: 2,
      url: '',
      author: 'Ana Luisa',
      urlImg: /* 'assets/imagens/depoimento2.jpeg',  '',
      course: ''
    },
    */
    {
      id: 3,
      url: 'https://www.youtube.com/embed/GWJYuwnCPss',
      author: 'Anthony',
      urlImg: /* 'assets/imagens/depoimento3.jpeg', */ '',
      course: ''
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/vtHoOjxLSyk',
      author: 'Beatriz',
      urlImg: /* 'assets/imagens/depoimento4.jpeg', */ '',
      course: 'Meio Ambiente'
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/mCbY55edrnQ',
      author: 'Camila Oliveira',
      urlImg: 'http://uploaddeimagens.com.br/images/002/140/490/full/WhatsApp_Image_2019-04-03_at_14.32.07.jpeg?1560457695',
      course: 'Meio Ambiente'
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/1GbyUfzVBoI',
      author: 'Elias Júnior',
      urlImg: /* 'assets/imagens/depoimento6.jpeg', */ 'http://uploaddeimagens.com.br/images/002/140/497/full/WhatsApp_Image_2019-04-03_at_13.48.12.jpeg?1560457839',
      course: 'Eletromecânica'
    },
    {
      id: 7,
      url: 'https://www.youtube.com/embed/TIgtY2FGmos',
      author: 'Juliano Correia',
      urlImg: /* 'assets/imagens/depoimento7.jpeg', */ '',
      course: 'Meio Ambiente'
    },
    {
      id: 8,
      url: 'https://www.youtube.com/embed/06ne77ifibw',
      author: 'Maria Catyane',
      urlImg: 'http://uploaddeimagens.com.br/images/002/140/477/full/WhatsApp_Image_2019-04-14_at_15.16.33.jpeg?1560457418', /* 'assets/imagens/depoimento8.jpeg', */
      course: 'Meio Ambiente'
    },
    {
      id: 9,
      url: 'https://www.youtube.com/embed/Q7imw3bvImc',
      author: 'Maria Catyane',
      urlImg: 'http://uploaddeimagens.com.br/images/002/140/477/full/WhatsApp_Image_2019-04-14_at_15.16.33.jpeg?1560457418', /* 'assets/imagens/depoimento9.jpeg', */
      course: 'Meio Ambiente'
    },
    {
      id: 10,
      url: 'https://www.youtube.com/embed/goVXAjykDy4',
      author: 'Renata',
      urlImg: '',
      course: ''
    },
    /*
    {
      id: 11,
      url: '',
      author: 'Renata Sammer',
      urlImg: '',
      course: ''
    },
    */
    {
      id: 12,
      url: 'https://www.youtube.com/embed/u3bX-76FGRE',
      author: 'Thiago Kewin',
      urlImg: '',
      course: ''
    },
    {
      id: 13,
      url: 'https://www.youtube.com/embed/Ckvcr9SZho8',
      author: 'Marlon',
      urlImg: 'http://uploaddeimagens.com.br/images/002/140/511/full/unnamed.jpg?1560458260',
      course: 'Informática'
    },
    {
      id: 14,
      url: 'https://www.youtube.com/embed/ibJioLkeUSM',
      author: 'Marlon',
      urlImg: 'http://uploaddeimagens.com.br/images/002/140/511/full/unnamed.jpg?1560458260',
      course: ''
    },
    {
      id: 15,
      url: 'https://www.youtube.com/embed/zffknHFmlec',
      author: 'Maria Regina',
      urlImg: '',
      course: ''
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
