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
      deposition: 'Calouro, a jornada no instituto vai ser árdua e cansativa, mas acredite, todos esses contraturnos vão valer a pena no final. É um aprendizado para a vida acadêmica e social também. Coragem e boa sorte.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 2,
      student: 'Ildenice Azevedo',
      iconPerfil: 'assets/imagens/pessoa3.png',
      deposition: 'Espero que vocês obtenham um bom desempenho e conhecimento no decorrer do tempo que vocês passarem aqui. Desejo sorte, sucesso e prosperidade e espera também que gostem muito dos cursos disponíveis e da estrutura e de tudo que a escola tem a oferecer.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 3,
      student: 'Laís',
      iconPerfil: 'assets/imagens/4.jpeg',
      deposition: 'Acredite em si mesmo, você é incrível. E aproveite ao máximo essa instituição maravilhosa',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 4,
      student: 'Géssica Kauane',
      iconPerfil: 'assets/imagens/2.jpeg',
      deposition: 'Se você conseguio entrar e chegar até aqui você irá conseguir concluir, conseguirá ir muito mais além, e será uma pessoa bem sucedida e um excelente profissional. Se precisarem de ajuda me procurem nas redes sociais, estarei a disposição. Parabéns e boa sorte. Até breve, beijos.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 5,
      student: 'Samuel Henrique de Oliveira Silva',
      iconPerfil: 'assets/imagens/1.png',
      deposition: 'Leiam bastantes livros na casa da leitura, pois, isso ajuda muito em seu conhecimento e vocabulário. Curtam a escola, porém, nunca coloquem os estudos em 2º lugar. Procure deixar as matérias sempre em dias, isso ajuda muito.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 6,
      student: 'Natanmáx Nicolas da Silva Oliveira',
      iconPerfil: 'assets/imagens/1.png',
      deposition: 'Preparem-se, vai ser tudo diferente, vai ter muita mudança na vida de vocês. Quando saírem daqui, serão pessoas completamente e até mesmo extremamente diferentes de quando entraram. Aproveitem todas as oportunidades.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 7,
      student: 'Maria Catiany',
      iconPerfil: 'assets/imagens/3.png',
      deposition: '"Quando você pensar em desistir lembre-se pelo que você esta lutando." Ah! Resolva as listas.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 8,
      student: 'Ana Beatriz Dias Figueredo',
      iconPerfil: 'assets/imagens/Ana_Beatriz_Dias de_Figueiredo.jpg',
      deposition: 'Mantenha o foco, evite distrações, organize-se e cuide do nosso campus.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 9,
      student: 'Fátima Milena de Sousa Alves',
      iconPerfil: 'assets/imagens/Fátima_Milena_de_Sousa_Alves.jpg',
      deposition: 'Tente conciliar o tempo de estudo com diversão. Seja bem-vindo.',
      urlImg: 'imagens/Fátima_Milena_de_Sousa_Alves.jpg',
      courseName: 'Meio Ambiente'
    },
    {
      id: 10,
      student: 'Laura Cristina de Negreiros',
      iconPerfil: 'assets/imagens/LauraCristina_de_Negreiros.jpg',
      deposition: 'Sejam bem-vindos e aproveitem as oportunidades que a instituição lhes dará. Esses serão os melhores anos de aprendizado de vocês.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      id: 11,
      student: 'Rebeca de Souza Gonzaga',
      iconPerfil: 'assets/imagens/Rebeca_de_SouzaGonzaga.jpg',
      deposition: 'Com 02 anos de IFPI, eu já aprendi muita coisa que sei vou levar para vida. No começo não é fácil, mas ninguém disse que seria. Com muito esforço, dedicação e persistência o aluno aprende a lidar com as situações que serão vividas na instituição. Um curso integrado ao médio é diferente de tudo que já passamos e a oportunidade de tê-lo nos proporciona uma nova experiência enquanto estudantes. Para alguns pode ser que traga mais dificuldades, com mais matérias. Para outros o curso integrado pode ser a melhor experiência oferecida pelo Instituto federal, pois muitos se apaixonam pelo curso no decorrer dos 4 anos.',
      urlImg: '',
      courseName: 'Informática'
    },
    {
      id: 12,
      student: 'Ellem Almeida',
      iconPerfil: 'assets/imagens/EllemAlmeidaAmorim.jpg',
      deposition: 'Mesmo apenas estando há dois anos no IFPI, posso enxergar todo o aprendizado que ganhei e que espero aumentar ao término do curso de ensino médio integrado. Desde a entrada no Instituto Federal percebi o quanto eu e meus colegas amadurecemos e o quanto nossa visão de mundo mudou. Mesmo enfrentando dificuldades e desavenças foi aqui que cresci, não só fisicamente, mas mentalmente e é aqui que estou dando meu primeiro passo para o que eu espero ser um grande futuro. Nem todo mundo tem oportunidade de estudar em uma escola com a estrutura e os profissionais que o Instituto oferece, por isso há um certo esforço e exigência para que possamos mostrar bons resultados, mas tudo isso compensa e nos sentimos privilegiados por estarmos em uma Instituição com um bom ensino e aprendendo muito com o curso. Além disso,  nossa vida social também mudou, pois aqui conhecemos amigos que espero que não só cursem comigo todos os 4 anos, mas que permaneçam ao término dos estudos.',
      urlImg: '',
      courseName: 'Informática'
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

