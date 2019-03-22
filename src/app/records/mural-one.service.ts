import { Injectable } from '@angular/core';

import { Mural } from '../shared/mural-one.model';

@Injectable({
  providedIn: 'root'
})
export class MuralService {

  public mural: Array<Mural> = [
    {
      id: 1,
      student: 'Ana Clara de Sousa Marques',
      iconPerfil: 'assets/imagens/1.png',
      deposition: 'Calouro, a jornada no instituto vai ser árdua e cansativa, mas acredite, todos esses contraturnos vão valer a pena no final. É um aprendizado para a vida acadêmica e social também. Coragem e boa sorte.'
    },
    {
      id: 2,
      student: 'Ildenice Azevedo',
      iconPerfil: 'assets/imagens/3.png',
      deposition: 'Espero que vocês obtenham um bom desempenho e conhecimento no decorrer do tempo que vocês passarem aqui. Desejo sorte, sucesso e prosperidade e espera também que gostem muito dos cursos disponíveis e da estrutura e de tudo que a escola tem a oferecer.'
    },
    {
      id: 3,
      student: 'Laís',
      iconPerfil: 'assets/imagens/4.jpeg',
      deposition: 'Acredite em si mesmo, você é incrível. E aproveite ao máximo essa instituição maravilhosa'
    },
    {
      id: 4,
      student: 'Géssica Kauane',
      iconPerfil: 'assets/imagens/2.jpeg',
      deposition: 'Se você conseguio entrar e chegar até aqui você irá conseguir concluir, conseguirá ir muito mais além, e será uma pessoa bem sucedida e um excelente profissional. Se precisarem de ajuda me procurem nas redes sociais, estarei a disposição. Parabéns e boa sorte. Até breve, beijos'
    },
    {
      id: 5,
      student: 'Samuel Henrique de Oliveira Silva',
      iconPerfil: 'assets/imagens/1.png',
      deposition: 'Leiam bastantes livros na casa da leitura, pois, isso ajuda muito em seu conhecimento e vocabulário. Curtam a escola, porém, nunca coloquem os estudos em 2º lugar. Procure deixar as matérias sempre em dias, isso ajuda muito'
    },
    {
      id: 6,
      student: 'Natanmáx Nicolas da Silva Oliveira',
      iconPerfil: 'assets/imagens/1.png',
      deposition: 'Preparem-se, vai ser tudo diferente, vai ter muita mudança na vida de vocês. Quando saírem daqui, serão pessoas completamente e até mesmo extremamente diferentes de quando entraram. Aproveitem todas as oportunidades.'
    },
    {
      id: 7,
      student: 'Maria Catiany',
      iconPerfil: 'assets/imagens/3.png',
      deposition: '"Quando você pensar em desistir lembre-se pelo que você esta lutando." Ah! Resolva as listas.'
    },
    {
      id: 8,
      student: 'Ana Beatriz Dias Figueredo',
      iconPerfil: 'assets/imagens/4.jpeg',
      deposition: 'Mantenha o foco, evite distrações, organize-se e cuide do nosso campus.'
    },
    {
      id: 9,
      student: 'Fátima Milenax de S. Alves',
      iconPerfil: 'assets/imagens/4.jpeg',
      deposition: 'Tente conciliar o tempo de estudo com diversão. Seja bem-vindo.'
    },
    {
      id: 10,
      student: 'Laura Negreiros',
      iconPerfil: 'assets/imagens/4.jpeg',
      deposition: 'Sejam bem-vindos e aproveitem as oportunidades que a instituição lhes dará. Esses serão os melhores anos de aprendizado de vocês.'
    }
  ];

  constructor() { }

  public getMural(): Array<Mural> {
    return this.mural;
  }

  public getMuralId(id: number): Mural {
    let i = 0;
    for (i; i < this.mural.length; i++) {
      if (this.mural[i].id === id + 1) {
        return this.mural[i];
      }
    }

    return null;
  }

public getIntro(elemento: Mural): string {
  let i = 0;
  let space = 0;
  let retorno = '';
  const finish = '...';

  for (i; i < elemento.deposition.length; i++) {
    if (elemento.deposition[i] === ' ') {
      space++;
    }
    retorno += elemento.deposition[i];
    if (space == 5) {
      return retorno + finish;
    }
  }

  return retorno + finish;
}

}

