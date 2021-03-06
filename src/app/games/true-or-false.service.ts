import { Injectable } from '@angular/core';

import { QuestionTrueOrFalse } from '../shared/true-or-false.model';

@Injectable({
  providedIn: 'root'
})
export class TrueOrFalseService {

  public questionsOne: Array<QuestionTrueOrFalse> = [
    {
      question: 'No curso Técnico Integrado ao ensino médio temos aula todos os dias da semana nos turnos manhã e tarde, por isso ele é chamado de curso “integrado”.',
      rightAnswer: false,
      justification: 'O Curso Técnico Integrado ao Ensino Médio recebe esta denominação porque as disciplinas de formação geral (Português, Matemática, História, Geografia, etc) são cursadas junto às disciplinas técnicas, estabelecendo trocas de saberes entre elas, possibilitando ao aluno uma formação ampla e cidadã ao mesmo tempo em que o prepara para o mundo do trabalho.'
    },
    {
      question: 'No Ensino Médio Integrado, as disciplinas “técnicas” são cursadas separadamente no último ano do curso.',
      rightAnswer: false,
      justification: 'As disciplinas técnicas e de formação geral são distribuídas e ocorrem concomitantemente ao longo de todo o curso. O ideal é que haja troca de saberes e experiências entre elas. Por exemplo, para compreender Mecânica, o aluno precisará dos conhecimentos da Matemática. Assim, através das “comunicações” entre as disciplinas ocorre a integração dos conteúdos.'
    },
    {
      question: 'Alunos do 1º ano do ensino médio integrado já podem participar de projetos de pesquisa.',
      rightAnswer: true,
      justification: 'No Instituto Federal todos os alunos têm oportunidades de participarem de pesquisas, mesmo que sejam ingressantes, bastando estarem matriculados e frequentando regularmente.'
    },
    {
      question: 'No Ensino Médio Integrado posso optar por cursar somente as disciplinas de formação geral, correspondentes ao Ensino Médio.',
      rightAnswer: false,
      justification: 'É necessário cursar todas as disciplinas.'
    },

    {
      question: 'No Ensino Médio Integrado o currículo é integrado, isto é, as disciplinas são organizadas de forma que haja troca de saberes entre elas. O desenvolvimento de uma disciplina de formação geral contribui para o desenvolvimento de uma disciplina específica, assim a construção de conhecimento torna-se mais ampla e concreta e o estudante pode vivenciar, na prática, a teoria estudada em sala de aula.',
      rightAnswer: true,
      justification: 'O currículo integrado permite uma integração entre  ensino  e prática profissional, entre professor e aluno na busca por soluções para diferentes situações, o que implica a contribuição com a comunidade. Considera-se este currículo o mais apropriado para integrar ensino e trabalho e para formação pessoal e profissional dos estudantes.'
    }
  ];
  public questionsTwo: Array<QuestionTrueOrFalse> = [
    {
      question: 'No curso Técnico Integrado ao Ensino Médio o ensino é articulado com atividades de pesquisa e de extensão como forma de oferecer uma formação ampla e cidadã.',
      rightAnswer: true,
      justification: 'O envolvimento com atividades de pesquisa e extensão contribuem para o desenvolvimento da personalidade, pensamento crítico, curiosidade, além de facilitar a aprendizagem, pois os conteúdos vistos em sala são vivenciados na prática em sociedade.'
    },

    {
      question: 'No Ensino Médio Integrado, as disciplinas específicas são cursadas, sempre no contraturno das aulas',
      rightAnswer: false,
      justification: 'As disciplinas específicas podem ser cursadas tanto no turno quanto no contra turno do aluno, assim como outras disciplinas da matriz curricular  do curso.'
    },

    {
      question: 'Formação Integrada significa uma formação que prepara exclusivamente para aquisição de habilidades técnicas que conduza o aluno ao mercado de trabalho.',
      rightAnswer: false,
      justification: 'Significa uma formação que envolve várias dimensões da vida humana: intelectual, científica, ética, social e técnica. A aprendizagem das técnicas é uma das dimensões formativas do Ensino Médio integrado, mas não de maneira isolada.'
    },

    {
      question: 'Um grande diferencial em cursar o Ensino Médio Integrado nos Institutos Federais  é o incentivo à participação em atividades e projetos de pesquisa e extensão que contribuem para uma aprendizagem significativa e para o desenvolvimento da iniciação científica.',
      rightAnswer: true,
      justification: 'O aluno tem a oportunidade de, desde cedo, vivenciar experiências de pesquisa que contribuem positivamente para sua aprendizagem e desenvolvimento intelectual'
    },

    {
      question: 'Ao realizar o curso Técnico de Edificações Integrado ao Ensino Médio, terei que optar por um curso superior desta mesma área, por exemplo, Engenharia Civil.',
      rightAnswer: false,
      justification: 'Formação integral significa uma formação que envolve todas dimensões da vida humana: intelectual, científica, ética, social e técnica. A aquisição de habilidades técnicas é uma das dimensões formativas do EMI. No ensino médio integrado o aluno tem uma preparação adequada para o trabalho, levando em consideração seu desenvolvimento enquanto cidadão de direitos e deveres.'
    }
  ];
  public questionsTre: Array<QuestionTrueOrFalse> = [
    {
      question: 'O ensino acontece, geralmente, em sala de aula; a pesquisa surge para se aplicar os conceitos obtidos em sala de aula ou descobrir algo novo em relação aquele conhecimento que já está nos livros e já foi assimilado pelos alunos; a extensão, é aplicação do conhecimento obtido nas fases do ensino e pesquisa, preferencialmente para melhorar algum problema identificado na sociedade, por exemplo: no seu bairro, na sua comunidade ou em sua escola.',
      rightAnswer: true,
      justification: 'A articulação entre ensino, pesquisa e extensão deixa a aprendizagem mais atrativa uma vez que se aprende pesquisando e aplicando o que foi aprendido.'
    },
    
    {
      question: 'Todos os alunos matriculados no Instituto Federal de Educação recebem bolsas de assistência estudantil.',
      rightAnswer: false,
      justification: 'Há um período de seleção para distribuição das bolsas de assistências estudantil de acordo com critérios fixados em edital.'
    },

    {
      question: 'A articulação entre ensino, pesquisa e extensão permite uma formação comprometida com a produção do conhecimento científico, com a compreensão ética, política e social do meio em que vivemos e com a resolução de problemas sociais.',
      rightAnswer: true,
      justification: 'Tendo acesso a uma formação de qualidade o aluno poderá exercer sua cidadania comprometendo-se efetivamente com o meio em que vive.'
    },

    {
      question: 'No IFPI, campus Floriano, o Ensino Médio Integrado tem duração de quatro anos, logo, os três primeiros anos são correspondentes ao Ensino Médio e o último ano ao curso técnico.',
      rightAnswer: false,
      justification: 'As disciplinas de formação geral, comumente chamadas de “disciplinas do ensino médio”, são cursadas juntamente às disciplinas de formação específica, conhecidas como “disciplinas técnicas”.  Estas  disciplinas  são distribuídas ao longo de todo o curso, assim em cada uma das séries do ensino médio teremos disciplinas de formação geral e específica.'
    },
    {
      question: 'O aluno que escolher realizar o Curso Técnico Integrado ao Ensino Médio não poderá realizar o ENEM.',
      rightAnswer: false,
      justification: 'Além de estar preparado para exercer uma profissão o aluno poderá, se for do seu interesse, realizar o ENEM  e ingressar no Ensino Superior.'
    }
  ];
  public questionsFor: Array<QuestionTrueOrFalse> = [
    {
      question: 'Fazer o Curso Técnico Integrado ao Ensino Médio não significa realizar dois cursos ao mesmo tempo, e sim um único curso, o técnico, integrado ao ensino médio.',
      rightAnswer: true,
      justification: 'Significa realizar um único curso. De maneira integrada será trabalhado a formação para o trabalho. A troca de saberes entre as disciplinas e a união da teoria com a prática propicia um conhecimento amplo da realidade.'
    },

    {
      question: 'Para realizar o Ensino Médio Integrado o aluno deverá passar o dia inteiro na escola.',
      rightAnswer: false,
      justification: 'O Ensino Médio Integrado não é a mesma coisa que o ensino “integral”. Como a carga horária aumenta devido à quantidade de disciplinas, algumas aulas são realizadas no contra turno, geralmente 2 ou 3 vezes na semana.'
    },

    {
      question: 'O Instituto oferece ônibus escolar para seus alunos.',
      rightAnswer: true,
      justification: 'O ônibus realiza uma rota pela cidade em horários determinados, fazendo paradas em locais específicos, previamente divulgado aos estudantes, facilitando a locomoção para a escola.'
    },
    {
      question: 'A Instituição oferece Biblioteca com acesso tanto para alunos matriculados como para estudantes de outras instituições.',
      rightAnswer: true,
      justification: 'Todos os alunos matriculados no Instituto e em outras instituições de ensino podem utilizar os serviços da biblioteca para estudos, pesquisas etc.  A biblioteca possui sala para estudo em grupo, computadores para pesquisas e acervo variado de livros.'
    },

    {
      question: 'Fazer o Ensino Médio Integrado significa realizar dois cursos separadamente, o Ensino Médio e o curso técnico. Ao final do curso receberemos dois certificados, um constando a conclusão do Ensino Médio e o outro a conclusão do Curso Técnico.',
      rightAnswer: false,
      justification: 'Ao concluir o Ensino Médio Integrado o aluno recebe um certificado de conclusão do ensino médio com habilitação técnica na área do curso escolhido.'
    }
  ];
  public questionsFive: Array<QuestionTrueOrFalse> = [
    {
      question: 'Apenas alunos que cursaram o Ensino Fundamental em escolas públicas podem fazer inscrição no teste classificatório para ingresso no Instituto Federal.',
      rightAnswer: false,
      justification: 'Alunos que realizaram o ensino fundamental em escolas particulares também podem realizar o teste classificatório, inscrevendo-se na modalidade “ampla concorrência”. Já os alunos provenientes de escolas públicas devem realizar a inscrição na modalidade de “cotas”.'
    },
    {
      question: 'No Instituto Federal temos duas opções para realizar o Ensino Médio, o curso técnico integrado ao médio e o curso de Ensino Médio não integrado.',
      rightAnswer: false,
      justification: 'Os Institutos Federais oferecem o ensino médio integrado à Educação Profissional através do curso Técnico Integrado ao Ensino Médio.'
    },
    {
      question: 'Organização do tempo, prioridade aos estudos e determinação são fatores essenciais para que o aluno tenha êxito no Ensino Médio Integrado.	',
      rightAnswer: true,
      justification: 'O curso técnico possui carga horária maior e mais disciplinas, por isso exige do aluno esforço, determinação e planejamento do tempo. Uma boa opção é criar uma rotina de estudos. A prioridade é estudar, outras atividades não devem atrapalhar o desempenho acadêmico. Dificuldades aparecerão, no entanto, é necessário manter o foco no seu objetivo e ser persistente.'
    },
    {
      question: 'Os serviços médicos, odontológicos e psicológicos oferecidos nos Institutos são gratuitos para o estudante.',
      rightAnswer: true,
      justification: 'Estes serviços fazem parte da política de assistência estudantil e todos os alunos regularmente matriculados tem direito aos atendimentos.'
    },
    {
      question: 'O desenvolvimento de projetos de pesquisa e extensão proporciona ao aluno do EMI a realização de descobertas, maior conhecimento da realidade, o envolvimento com a resolução de problemas sociais e incentiva a criação de soluções tecnológicas.',
      rightAnswer: true,
      justification: 'A realização de projetos de pesquisa e extensão proporciona uma formação ampla para o estudante, desenvolvendo, inclusive seu espírito empreendedor. Além disto, os Institutos Federais exercem sua função social através das contribuições que os resultados das pesquisas geram à população local ou regional.'
    }
  ];
  public questionsSix: Array<QuestionTrueOrFalse> = [
    {
      question: 'O Ensino Médio Integrado prioriza pela educação profissional humanizadora, que significa além da formação técnica, uma formação política, científica e cultural visando o desenvolvimento humano integral do estudante. ',
      rightAnswer: true,
      justification: 'É uma formação que prioriza a integração das várias áreas do conhecimento estabelecendo uma conexão entre elas. Não significa apenas a aprendizagem de técnicas específicas para exercer uma profissão, e sim uma educação para a vida, o que inclui o trabalho, o desenvolvimento intelectual, cultural e científico.'
    },
    {
      question: 'Os Institutos Federais possuem refeitório institucional para alimentação (almoço e jantar), dos estudantes, no entanto para ter acesso é necessário o pagamento de uma taxa.',
      rightAnswer: false,
      justification: 'A oferta de alimentação no refeitório institucional é uma ação prevista na política de assistência estudantil, o acesso é gratuito. No campus Floriano-PI basta realizar, com antecedência a reserva no sistema SARI (Serviço de Atendimento ao Restaurante Institucional)'
    },
    {
      question: 'Caso eu tenha interesse, posso mudar de curso. Por exemplo, eu faço o primeiro ano do curso técnico de eletromecânica integrado ao Ensino Médio, mas no segundo ano quero continuar no curso de informática.',
      rightAnswer: false,
      justification: 'Após a matrícula não é possível mudar de curso. O aluno deve permanecer no curso para o qual foi aprovado no exame classificatório até sua conclusão.'
    },
    {
      question: 'No Ensino Médio Integrado o estágio é obrigatório e o aluno deve realizá-lo no próprio campus.',
      rightAnswer: false,
      justification: 'O estágio não é obrigatório, mas havendo oportunidade, o estudante poderá realizá-lo dentro ou fora da instituição.'
    },
    {
      question: 'No curso técnico integrado é essencial a associação da teoria com a prática e isto pode ser feito nas aulas nos laboratórios e em visitas técnica e na realização de atividades de pesquisa e extensão.',
      rightAnswer: true,
      justification: 'Teoria e prática se complementam possibilitando uma aprendizagem significativa e contextualizada com a realidade.'
    }
  ];
  public questionSeven: Array<QuestionTrueOrFalse> = [
    {
      question: 'Ao concluir o curso técnico em eletromecânica o aluno deverá, obrigatoriamente, trabalhar como técnico, não sendo possível prosseguir os estudos em curso superior de sua escolha.',
      rightAnswer: false,
      justification: 'O curso técnico integrado não limita e sim abre possibilidades. Ao concluí-lo, o jovem pode fazer um curso superior, trabalhar como técnico ou fazer as duas coisas.'
    },
    {
      question: 'No IFPI campus Floriano, cada curso técnico tem um período de duração diferente, por exemplo, o curso Técnico Integrado em Edificações  tem duração de 3 anos , já o curso de Meio Ambiente tem duração de 4 anos.',
      rightAnswer: false,
      justification: 'Todos os cursos têm o mesmo tempo de duração.'
    },
    {
      question: 'Após ser aprovado no exame classificatório o estudante deve aguardar em casa o início das aulas.',
      rightAnswer: false,
      justification: 'A vaga só estará garantida após a realização da matrícula que ocorre mediante apresentação de toda a documentação exigida no edital de seleção.'
    },
    {
      question: 'Posso encontrar informações sobre os cursos técnicos de nível médio ofertados nos Institutos Federais no Catálogo Nacional de Cursos Técnicos - CNCT',
      rightAnswer: true,
      justification: 'Este catálogo serve para orientar as Instituições, estudantes e a sociedade em geral. Nele encontram-se uma variedade de cursos técnicos e suas caracterizações.'
    },
    {
      question: 'No Ensino Médio Integrado as disciplinas técnicas são cursadas a partir do segundo ano.',
      rightAnswer: false,
      justification: 'Na matriz curricular do curso as disciplinas, tanto técnicas como de formação geral, são distribuídas em todos os anos.'
    }
  ];
  public bdQuestions: Array<QuestionTrueOrFalse> = [];

  constructor() { }

  /* english: selects one of the 04 json objects and assigns the variable bdQuestions
   * Português: seleciona um dos 04 objetos json e atribui a variável bdQuestions
   */ 
  public setQuestions(idArray: number): void {
    if (idArray === 1) {
      this.bdQuestions = this.questionsOne;
    } else if (idArray === 2) {
      this.bdQuestions = this.questionsTwo;
    } else if (idArray === 3) {
      this.bdQuestions = this.questionsTre;
    } else if (idArray === 4) {
      this.bdQuestions = this.questionsFor;
    } else if(idArray === 5) {
      this.bdQuestions = this.questionsFive;
    } else if (idArray === 6) {
      this.bdQuestions = this.questionsSix;
    } else {
      this.bdQuestions = this.questionSeven;
    }
  }
  /* english: returns an object with the questions and answers of the current round
   * português: retorna um objeto com às perguntas e respostas da rodada atual
   */
  public getQuestions(): Array<QuestionTrueOrFalse> {
    return this.bdQuestions;
  }

  public getClassification(perfomance: number): string {
    let rendimento = '';
    if (perfomance >= 90) {
      rendimento = 'Ótimo!';
    } else if (perfomance >= 70) {
      rendimento = 'Bom!';
    } else if (perfomance >= 60) {
      rendimento = 'Razoável!';
    } else {
      rendimento = 'É melhor tentar novamente.';
    }
    return rendimento;
  }
}
