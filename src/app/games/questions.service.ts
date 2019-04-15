import { Injectable } from '@angular/core';

import { QuestionAlternatives } from '../shared/questions-alternatives.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public myQuestions: Array<QuestionAlternatives> = [
    {
      question: 'No Instituto Federal há três tipos de cursos de nível médio',
      rightAnswer: 'Técnico integrado ao ensino médio, técnico concomitante e curso técnico subsequente',
      alternatives: [
        'Licenciatura, bacharelado e Tecnólogo',
        'Técnico integrado ao ensino médio, técnico concomitante e curso técnico subsequente',
        'Licenciatura em Biologia, licenciatura em matemática e tecnólogo em Análise e desenvolvimento de sistemas'
      ]
    },
    {
      question: 'O curso técnico integrado ao ensino médio é comumente chamado',
      rightAnswer: 'Ensino médio integrado',
      alternatives: [
        'Ensino médio integrado',
        'Ensino médio preparatório',
        'Ensino Técnico'
      ],
    },
    {
      question: 'No curso técnico integrado ao ensino médio, realizamos',
      rightAnswer: 'Um único curso, que integra conteúdos de disciplinas de formação geral e específicas',
      alternatives: [
        'Dois cursos - um curso técnico e um curso de ensino médio',
        'Um único curso, que integra conteúdos de disciplinas de formação geral e específicas',
        'Um único curso, no entanto no turno estudamos disciplinas de formação geral e o contraturno é destinado às disciplinas técnicas'
      ]
    },
    {
      question: 'O ensino médio integrado, no IFPI campus Floriano possui 4 anos de duração. Mas posso cursar só até terceiro ano e receber o certificado do ensino médio.',
      rightAnswer: 'Portanto, para concluir o curso é necessário cursar os quatro anos, não sendo possível sair no terceiro ano com certificado de conclusão do ensino médio.',
      alternatives: [
        'Podendo o aluno optar por cursar o ensino médio não integrado ao técnico',
        'Mas posso cursar só até o terceiro ano e receber só o certificado do ensino médio.',
        'Portanto, para concluir o curso é necessário cursar os quatro anos, não sendo possível sair no terceiro ano com certificado de conclusão do ensino médio.'
      ]
    },
    {
      question: 'A carga horária do ensino médio integrado é maior por que:',
      rightAnswer: 'Porque a matriz curricular agrega disciplinas técnicas, específicas do curso e de formação geral, diferentemente do ensino médio não integrado.',
      alternatives: [
        'Porque a matriz curricular agrega disciplinas técnicas, específicas do curso e de formação geral, diferentemente do ensino médio não integrado.',
        'Por que o curso é muito difícil e o aluno precisa ficar ocupado por mais tempo na escola.',
        'Porque “ensino integrado” significa a mesma coisa que “ensino integral” no qual o estudante passa o dia inteiro com atividades na escola.'
      ]
    },
    {
      question: 'A POLAE, Política de Assistência Estudantil do IFPI é direcionada aos estudantes matriculados nos cursos presenciais do IFPI e tem como objetivo',
      rightAnswer: 'Contribuir com ações de atendimento às necessidades básicas e de incentivo á formação acadêmica, visando o desenvolvimento integral dos estudantes.',
      alternatives: [
        'Oferecer a todos os estudantes matriculados no IFPI, inclusive dos cursos superiores, auxílio financeiro para custear as despesas com deslocamento.',
        'Oferecer auxílio financeiro a todos os estudantes do ensino médio integrado, bastando para isso o aluno apresentar a carteirinha do estudante ao setor de serviço social',
        'Contribuir com ações de atendimento às necessidades básicas e de incentivo á formação acadêmica, visando o desenvolvimento integral dos estudantes.'
      ]
    }
  ];

  public auxQuestions: Array<QuestionAlternatives>;
  public questionsErrors: Array<QuestionAlternatives>;
  public round: number;
  public score: number;
  public qtdPecas: number;
  public pecas: number;
  public responser: string;
  public control: number;
  public controlNumQuestions: number;
  public numMaxQuestions: number;
  public showPeca: boolean;
  public acertou: boolean;
  public imagens: [
    {url: 'assets/imagens/d.jpeg'},
    {url: 'assets/imagens/s2.jpg'},
    {url: 'assets/imagens/s3.png'},
    {url: 'assets/imagens/v.jpeg'}
  ];

  constructor() { }

  public init() {
   this.auxQuestions = this.myQuestions;
   this.questionsErrors = [];
   this.round = 0;
   this.score = 0;
   this.responser = undefined;
   this.qtdPecas = 0;
   this.pecas = 9;
   this.control = 0;
   this.controlNumQuestions = 0;
   this.numMaxQuestions = this.auxQuestions.length;
   this.showPeca = false;
   this.acertou = false;
  }

  public getQuestions(): Array<QuestionAlternatives> {
    return this.auxQuestions;
  }

  public verifyResponseUser(responser: string): boolean {
    if (responser === this.auxQuestions[this.round].rightAnswer) {
      return true;
    }
    return false;
  }

  public incrementRound(): void {
    this.round++;
  }

  public playerGame(response: string, current: number): void {
    this.round = current;
    const r = this.verifyResponseUser(response);
    if (r) {
      this.responser = 'Parabéns, você ganhou uma peça! Resposta correta: ' + this.auxQuestions[current].rightAnswer;
      this.acertou = true;
    } else {
      this.responser = 'Tente Novamente. Resposta correta: ' + this.auxQuestions[current].rightAnswer;
      this.acertou = false;
    }
    // this.showPecaPremiun(r);
  }

  public getAcertou(): boolean {
    return this.acertou;
  }

  public finishGame(): boolean {
    if (this.round === this.numMaxQuestions) {
      return true;
    }
    return false;
  }

  public plusScore(): void {
    this.score++;
  }

  public quebraCabeca(result: boolean): boolean {
    this.controlNumQuestions++;
    if (this.controlNumQuestions === 4) {
      this.controlNumQuestions = 1;
      this.control = 0;
    }
    if (result) {
      this.control++;
      if (this.control >= 2 && this.qtdPecas !== this.pecas - 1) {
        this.control = 0;
        return true;
      } else if (this.control >= 2 && this.qtdPecas === this.pecas) {
        this.control = 0;
        return true;
      }
    }
    return false;
  }

  public showPecaPremiun(r: boolean): void {
    if (this.quebraCabeca(r)) {
      this.showPeca = true;
    } else {
      this.showPeca = false;
    }
  }

  public getImages(): Array<object> {
    return this.imagens;
  }

}
