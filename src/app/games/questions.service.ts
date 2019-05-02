import { Injectable } from '@angular/core';

import { QuestionAlternatives } from '../shared/questions-alternatives.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  // banco de dados 'mocado', no futuro isso será provido por uma API
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
    },
    {
      question: 'Através do programa de atendimento ao estudante com vulnerabilidade social  o aluno poderá receber um benefício financeiro. Para tanto:',
      rightAnswer: 'É necessário que o estudante atenda a critérios estabelecidos em edital que comprovem a situação de vulnerabilidade social.',
      alternatives: [
        'É preciso apenas estar matriculado em  dos cursos técnicos integrados ao Ensino Médio.',
        'É necessário que o estudante tenha cursado o ensino fundamental em escola pública.',
        'É necessário que o estudante atenda a critérios estabelecidos em edital que comprovem a situação de vulnerabilidade social.'
      ]
    },
    {
      question: 'Os Institutos Federais são instituições de educação especializados na oferta de educação profissional e tecnológica nas diferentes modalidades de ensino e tem o compromisso  de desenvolvimento humano integral do estudante, que significa:',
      rightAnswer: 'Uma formação cidadã que leve em consideração várias dimensões da vida, ex: técnica, científica, cultural e intelectual.',
      alternatives: [
        'Uma formação cidadã que leve em consideração várias dimensões da vida, ex: técnica, científica, cultural e intelectual.',
        'Uma formação no aspecto estritamente técnico.',
        'Uma  formação específica para o estudante que fará ENEM.'
      ]
    },
    {
      question: 'Os cursos Integrados, no campus Floriano, tem duração de 4 (quatro) anos porque:',
      rightAnswer: 'A carga horária do ensino médio integrado é maior e por isso planejada para ser desenvolvida em quatro anos',
      alternatives: [
        'A carga horária do ensino médio integrado é maior e por isso planejada para ser desenvolvida em quatro anos',
        'Necessita de 1 (um) a mais para realização do estágio obrigatório do curso;',
        'Porque este é o tempo mínimo exigido.'
      ]
    },
    {
      question: 'Um dos aspectos essenciais da formação integrada é:',
      rightAnswer: 'A articulação entre as atividades de ensino, pesquisa e extensão.',
      alternatives: [
        'Atividades voltadas exclusivamente para a aprendizagem de conteúdos através do ensino.',
        'A articulação entre as atividades de ensino, pesquisa e extensão.',
        'Aumento na carga horária com o objetivo de manter os estudantes ocupados por maior tempo na escola.'
      ]
    }
  ];

  public auxQuestions: Array<QuestionAlternatives>;
  public gameOver: boolean;
  public round: number;
  public score: number;
  public responser: string;
  public numMaxQuestions: number;
  public acertou: boolean; // acertou ou não?

  constructor() { }

  public init() {
   this.auxQuestions = this.myQuestions;
   this.round = 0;
   this.score = 0;
   this.responser = undefined;
   this.numMaxQuestions = this.auxQuestions.length;
   this.acertou = false;
   this.gameOver = false;
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
    this.gameOver = this.finishGame();
  }

  public getAcertou(): boolean {
    return this.acertou;
  }

  public finishGame(): boolean {
    /* round é equivalente ao valor de current, que é passado como argumento no método
     * no playerGame. Current é um índice de vetor, que começa com zero. Para formar uma
     * comparação válida, irei realizar uma adição na comparação.
     */
    if (this.round + 1 >= this.numMaxQuestions) {
      return true;
    }
    return false;
  }

  public plusScore(): void {
    this.score++;
  }


}
