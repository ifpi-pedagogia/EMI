import { Injectable } from '@angular/core';

import { QuestionAlternatives } from '../shared/questions-alternatives.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  // banco de dados 'mocado', no futuro isso será provido por uma API
  public myQuestionsOne: Array<QuestionAlternatives>;
  public myQuestionsTwo: Array<QuestionAlternatives>;
  public auxQuestions: Array<QuestionAlternatives>;
  public gameOver: boolean;
  public round: number;
  public score: number;
  public responser: string;
  public numMaxQuestions: number;
  public acertou: boolean; // acertou ou não?
  public roundOne = true;

  constructor() { }

  public init() {
   this.insert();
   console.log('Valor de round ' + this.roundOne);
   this.alterDataBase();
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
      this.responser = 'Tente Novamente. Resposta correta: ';
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

  public alterDataBase(): void {
    if (this.roundOne) {
      this.auxQuestions = this.myQuestionsOne;
      this.roundOne = false;
    } else {
      this.auxQuestions = this.myQuestionsTwo;
      this.roundOne = true;
    }
  }

  // povoamento do banco de dados de questões
  private insert(): void {
    this.myQuestionsOne = [
      {
        question: 'Podemos dizer que pesquisa é:',
        rightAnswer: 'O aprofundamento dos conteúdos trabalhados em sala de aula com objetivo de se descobrir algo novo.',
        alternatives: [
          'O aprofundamento dos conteúdos trabalhados em sala de aula com objetivo de se descobrir algo novo.',
          'A transmissão de conhecimentos do professor para o aluno.',
          'É o estudo do conteúdo que consta no livro didático.'
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

    this.myQuestionsTwo = [
      {
        question: 'A extensão faz parte da formação integrada. Extensão significa.',
        rightAnswer: 'A aplicação do conhecimento, obtido nas fases de ensino e pesquisa, para solução de problemas sociais e atendimento às necessidades da comunidade.',
        alternatives: [
          'A aplicação do conhecimento, obtido nas fases de ensino e pesquisa, para solução de problemas sociais e atendimento às necessidades da comunidade.',
          'A ampliação de vagas para ingresso de mais estudantes nos cursos oferecidos pelos Institutos.',
          'Investigação detalhada de um fenômeno.'
        ]
      },
      {
        question: 'A articulação entre ensino, pesquisa e extensão contribui para:',
        rightAnswer: 'O desenvolvimento científico e cultural do estudante, tornando-o cada vez mais independente e comprometido com o meio em que vive.',
        alternatives: [
          'Atrasar o estudo dos conteúdos que serão cobrados no ENEM.',
          'O desenvolvimento científico e cultural do estudante, tornando-o cada vez mais independente e comprometido com o meio em que vive.',
          'A trasnmissão de conhecimentos prontos  que devem ser repassados a todos os estudantes de maneira incontestável.'
        ]
      },
      {
        question: 'Os projetos de iniciação cintífica são programas de atendimento ao estudante que visam:',
        rightAnswer: 'Propiciar aos estudantes/pesquisadores a oportunidades de vivenciar as primeiras experiências em pesquisa acadêmica.',
        alternatives: [
          'Motivar os alunos de dedicarem mais às atividades práticas em detrimento das atividades teóricas.',
          'Propiciar aos estudantes/pesquisadores a oportunidades de vivenciar as primeiras experiências em pesquisa acadêmica.',
          'Fortalecer a divisão entre ensino e pesquisa durante o curso.'
        ]
      },
      {
        question: 'Os Institutos Federais fazem parte da rede de Educação Profissional e Técnológica pois:',
        rightAnswer: 'Objetiva qualificar os estudantes para os mais variados setores da economia brasileira, realizando pesquisas e desenvolvendo novos processos, produtos e serviços e formar um profissional humanizado.',
        alternatives: [
          'Se constituem como uma política pública voltada para as classes mais favorecidas',
          'Compõem uma importante estrutura para que os cidadãos tenham acesso a formação estritamente técnica.',
          'Objetiva qualificar os estudantes para os mais variados setores da economia brasileira, realizando pesquisas e desenvolvendo novos processos, produtos e serviços e formar um profissional humanizado.'
        ]
      },
      {
        question: 'Os projetos  de Extensão contribuem:',
        rightAnswer: 'Para o benefício da comunidade externa do IFPI, bem com da aprendizagem do estudante, contribuindo, para sua formação acadêmica, profissional e cidadã.',
        alternatives: [
          'Para o benefício da comunidade externa do IFPI, bem com da aprendizagem do estudante, contribuindo, para sua formação acadêmica, profissional e cidadã.',
          'Para benefício exclusivo da comunidade Interna dos Institutos Federais, já que  atividades com o publico externo  não estão relacionadas ao curso e não contribuem para nossa formação.',
          'Para benefício exclusivo dos professores orientadores.'
        ]
      },
      {
        question: 'Um projeto é considerado de extensão quando:',
        rightAnswer: 'Os resultados são levados para beneficiar a comunidade e contribuir com a solução de problemas sociais.',
        alternatives: [
          'É realizado para beneficiar exclusivamente os estudantes do campus que ingressaram através da modalidade de cotas.',
          'É desenvolvido dentro dos laboratórios e não na sala de aula.',
          'Os resultados são levados para beneficiar a comunidade e contribuir com a solução de problemas sociais.'
        ]
      },
      {
        question: 'Os Institutos Federais possuem três pilares que juntos constituem uma base sólida para o desenvolvimento de uma formação cultural, científica, técnica e ética. Estes pilares são: ',
        rightAnswer: 'Ensino, pesquisa e extensão.',
        alternatives: [
          'Laboratórios, equipamentos e testes.',
          'Ensino, pesquisa e extensão.',
          'Professor, aluno e sala de aula.'
        ]
      },
      {
        question: 'É uma ação dos Institutos que disponibiliza ao público externo  o conhecimento adquirido com o ensino e a pesquisa desenvolvidos dentro do campus:',
        rightAnswer: 'Extensão.',
        alternatives: [
          'Extensão.',
          'Núcleo de atendimento ás pessoas com necessidades educacionais específicas - NAPNE.',
          'Programa de atendimento ao estudante Ingressante – PRAEI.'
        ]
      },
      {
        question: 'A associação entre as atividades de ensino, pesquisa e extensão é fundamental para:',
        rightAnswer: 'Formar profissionais com uma visão crítica da sociedade.',
        alternatives: [
          'Formar profissionais com visão limitada.',
          'Formar profissionais alienados.',
          'Formar profissionais com uma visão crítica da sociedade.'
        ]
      },
      {
        question: 'Os cursos técnicos integrados ao ensino Médio são destinados aos estudantes que:',
        rightAnswer: 'Concluíram o Ensino Fundamental.',
        alternatives: [
          'Estão cursando o nono ano do ensino fundamental.',
          'Concluíram o Ensino Fundamental.',
          'Estão cursando o primeiro ano do ensino médio.'
        ]
      }
    ];
  }

}
