import { Injectable } from '@angular/core';

import { MuralTwo } from 'src/app/shared/mural-two.model';

@Injectable({
  providedIn: 'root'
})
export class MuralTwoService {

  public questionOne = 'É 10 estudar no IFPI porque...';
  public questionTwo = 'No ensino médio integrado não aprendemos somente conteúdos, aqui aprendemos ...';

  // banco de dados
  public depositions: Array<MuralTwo> = [
    {
      idDeposition: 1,
      nameStudent: 'Vanessa de Sousa Rodrigues',
      responseOne: 'Porque aqui contamos com um quadro excelente de professores, com um acervo super completo de livros didáticos e paradidáticos. O instituto campus Floriano apresenta uma das melhores estruturas de escolas públicas do Estado. A qualidade do ensino é excelente. Aqui temos ônibus grátis, refeitório. Temos variadas bolsas para ajudar, setor pedagógico, médico etc.',
      responseTwo: 'De acordo com cada curso, você aprende muitas coisas. Temos acesso a laboratórios para um melhor desenvolvimento de atividades quando relacionada a cada área. Como se não bastasse tudo isso, o IFPI nos proporciona muitas amizades, pessoas acolhedoras. Aqui aprendemos de fato a ser pessoas melhores, sem dúvidas.',
      urlImg: 'assets/imagens/vanessa_de_sousa.jpeg',
      courseName: 'Informática'
    },
    {
      idDeposition: 2,
      nameStudent: 'Lucas de Sousa Reis',
      responseOne: 'Aqui tive experiências que levarei para o resto da minha vida, na qual tive um incentivo da escola em todos os apectos, como: Ensino de qualidade, refeição, segurança, dentista, nutricionista, psicólogo, academia, acesso a vários esportes e outros. Não serão todos os alunos que terão oportunidade de participar dessa escola, então, você aluno(a) terá que se esforçar do começo ao fim, pois esse investimento terá um preço.',
      responseTwo: 'A conviver, diferente de outras escolas temos vários cursos para escolher, mas isso acaba resultando a pessoas de gostos diferentes. Mudamos, aprendemos ou nos acostumamos com esses gostos.',
      urlImg: 'assets/imagens/lucas_de_sousa_reis.jpeg',
      courseName: 'Informática'
    },
    {
      idDeposition: 3,
      nameStudent: 'Kassia Cristina',
      responseOne: 'Ele nos oferece uma ótima estrutura que nos acolhe, tornando-se nossa segunda casa. O instituto proporciona nos desenvolvermos como pessoa e nos oferece várias oportunidades.',
      responseTwo: 'A ser bons profissionais, a ser pessoas melhores. Os professores nos passam experiências e ensinamentos que vão além do conteúdo da matéria.',
      urlImg: 'assets/imagens/pessoa5.png',
      courseName: 'Informática'
    },
    {
      idDeposition: 4,
      nameStudent: 'Emanuela de Jesus',
      responseOne: 'É 10 porque a estrutura é uma das melhores, temos o melhor acervo de livros de floriano, professores bons que nos ensinam bem. Temos muitas oportunidades estudando aqui e quando saírmos daqui teremos novas oportunidades.',
      responseTwo: 'Como falar melhor em seminários, aprender a trabalhar em equipe, ter mais responsabilidade para entregar trabalhos, fazer trabalhos, aprender a respeitar as diferenças das pessoas, aprender novas informações.',
      urlImg: 'assets/imagens/pessoa5.png',
      courseName: 'Informática'
    },
    {
      idDeposition: 5,
      nameStudent: 'Maria Eduarda Tomaz',
      responseOne: 'É composto por ótimos professores, vários ambientes da escola que nos estimulam a estudar e também por funcionários que nos tratam muito bem.',
      responseTwo: 'Também aprendemos muito com o curso que escolhemos, adquirimos conhecimentos diferentes do que somos acostumados.',
      urlImg: 'assets/imagens/pessoa5.png',
      courseName: 'Não informado'
    },
    {
      idDeposition: 6,
      nameStudent: 'Geovana Araújo Ferreira',
      responseOne: 'É uma escola onde você encontra várias oportunidades, possui acesso a um estudo de qualidade com professores adequados, além de profissionais e servidores em geral altamente atenciosos. Possuem asistência especializada em vários setores como saúde, alimentação. Biblioteca com acervo grande e variado. Casa da leitura com livros interessantes e de acesso facilitado. A biblioteca, ainda, apresenta o melhor material quando comparada à cidade.',
      responseTwo: 'A sermos mais humanos e compreensíveis. Termos uma visão melhor do mundo.',
      urlImg: 'assets/imagens/pessoa5.png',
      courseName: 'Informática'
    },
    {
      idDeposition: 7,
      nameStudent: 'João Batista',
      responseOne: 'É a melhor rede de ensino médio-técnico do país. Aprendi muita coisa ao longo de minha caminhada. Cresci de maneira construtiva e positiva, desenvolvi projetos. Cresci tanto no caráter quantp em conhecimento e experiência. Não vou mentir, não é fácil, de maneira nenhuma chegar até aqui, mas nessa vida nada é fácil. Gostaria, inclusive de dedicar todos esses anos, primeiramente a DEUS e em segundo a meu pai, que faleceu na data de 07/09/2018 vítima de câncer. Ele é o meu herói.',
      responseTwo: 'A nos tornarmos o melhor de nós mesmos, a ter coragem, malícia, audácia, destreza, fé amor, compaixão, respeito, medo insegurança, confiança, força de vontade, esperança... enfim, só vivendo para se descobrir.',
      urlImg: 'assets/imagens/psessoa5.png',
      courseName: 'Eletromecânica'
    },
    {
      idDeposition: 8,
      nameStudent: 'Essondro Juniel Veloso do Nascimento',
      responseOne: 'Possui um grande número de professores qualificados e empenhados a ensinar. Possui estrutura e oferece apoio aos alunos.',
      responseTwo: 'A se relacionar melhor com os colegas de classe e de outros cursos. Motivação por meio de atividades físicas. Aprendemos o quanto o incwntivo é importante na vida dos estudantes. Apoio e parceria são essenciais para aguentar os 04 anos. Aprendemos a fazer amigos, que muitas vezes são os que garantem o citado anterior, amigos esses que vamos querer levar para o resto da vida.',
      urlImg: 'assets/imagens/pessoa2.png',
      courseName: 'Eletromecânica'
    }

  ];

  constructor() { }

  public getDepositions(): Array<MuralTwo> {
    return this.depositions;
  }

  public getItemMural(id: number) {
    let i = 0;
    for (i; i < this.depositions.length; i++) {
      if (this.depositions[i].idDeposition == id) {
        return this.depositions[i];
      }
    }
    return null; // caso não encontre o elemento
  }
}
