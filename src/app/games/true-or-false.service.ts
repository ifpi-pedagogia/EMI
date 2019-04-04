import { Injectable } from '@angular/core';

import { QuestionTrueOrFalse } from '../shared/true-or-false.model';

@Injectable({
  providedIn: 'root'
})
export class TrueOrFalseService {

  public questionsOne: Array<QuestionTrueOrFalse> = [
    {
      question: 'No curso técnico Integrado ao Ensino médio, conhecido como “Ensino Médio Integrado” temos aula todos os dias da semana nos turnos manhã e tarde, por isto que se chama curso “integrado”.',
      rightAnswer: false,
      justification: 'O Curso Técnico Integrado ao Ensino Médio recebe esta denominação porque as disciplinas de formação geral (Português, Matemática, História, Geografia, dentre outras) são cursadas junto a as disciplinas técnicas, estabelecendo trocas de saberes entre elas, possibilitando ao aluno uma formação ampla e cidadã ao mesmo tem em que o prepara para o mundo do trabalho.'
    },
    {
      question: 'No ensino médio integrado, as disciplinas “técnicas” são cursadas separadamente no último ano do curso.',
      rightAnswer: false,
      justification: 'As disciplinas técnicas e de formação geral são distribuídas e ocorrem concomitantemente ao longo de todo o curso. O ideal é que haja troca de saberes e experiências entre elas. Por exemplo, para compreender Mecânica, o aluno precisará dos conhecimentos da Matemática. Assim, através das “comunicações” entre as disciplinas ocorre a integração dos conteúdos.'
    },
    {
      question: 'Alunos do 1º ano do ensino médio integrado já podem participar de projetos de pesquisa.',
      rightAnswer: true,
      justification: 'No Instituto Federal todos os alunos têm oportunidades de participarem de pesquisas, mesmo que sejam ingressantes, bastando estarem matriculados e frequentando regularmente.'
    },
    {
      question: 'No Ensino Médio Integrado posso optar por cursar os 4 anos ou somente até o 3º ano.',
      rightAnswer: false,
      justification: 'No IFPI, campus Floriano, é necessário cursar os quatro anos do curso para ser certificado.'
    },
    {
      question: 'Um grande diferencial em cursar o Ensino Médio Integrado nos Institutos Federais de Ensino é o incentivo à participação em atividades e projetos de pesquisa que contribuem para a aprendizagem e para o desenvolvimento da iniciação científica.',
      rightAnswer: true,
      justification: 'O aluno que cursa o EMI, tem a oportunidade de, desde cedo, vivenciar experiências de pesquisa que contribuem positivamente para sua aprendizagem e desenvolvimento intelectual.'
    }
  ];
  public questionsTwo: Array<QuestionTrueOrFalse> = [
    {
      question: 'A formação integral é o principal objetivo do Ensino Médio Integrado (EMI) e significa uma formação que prepara exclusivamente para aquisição de habilidades técnicas que conduza o aluno ao mercado de trabalho.',
      rightAnswer: false,
      justification: 'Formação integral significa uma formação que envolve todas dimensões da vida humana: intelectual, científica, ética, social e técnica. A aquisição de habilidades técnicas é uma das dimensões formativas do EMI. No ensino médio integrado o aluno tem uma preparação adequada para o trabalho, levando em consideração seu desenvolvimento enquanto cidadão de direitos e deveres.'
    },

    {
      question: 'Ao realizar o curso técnico de Edificações integrado ao ensino médio, terei que optar por um curso superior desta mesma área, por exemplo Engenharia Civil.',
      rightAnswer: false,
      justification: 'O Ensino Médio Integrado não limita o aluno a, obrigatoriamente, escolher um curso superior na mesma área. Ao concluir o Ensino Médio Integrado o aluno poderá optar por qualquer curso superior ou ingressar no mercado com a habilitação profissional obtida no curso integrado. (Ex: técnico em Edificações, Técnico em informática)'
    },

    {
      question: 'No curso Técnico integrado ao Ensino Médio o ensino é articulado com atividades de pesquisa e de extensão como forma de oferecer uma formação ampla e cidadã.',
      rightAnswer: true,
      justification: 'O envolvimento com atividades de pesquisa e extensão contribuem para o desenvolvimento da personalidade, pensamento crítico, curiosidade, além de facilitar a aprendizagem pois os conteúdos vistos em sala são vivenciados na prática em sociedade.'
    },

    {
      question: 'Fazer o ensino médio integrado significa realizar dois cursos separadamente, o ensino médio e o curso técnico. Ao final do curso receberemos dois certificados, um constando a conclusão do ensino médio e o outro a conclusão do curso técnico.',
      rightAnswer: false,
      justification: 'Ao concluir o Ensino Médio Integrado o aluno recebe um certificado de conclusão do ensino médio com habilitação técnica na área do curso escolhido.'
    },

    {
      question: ' O ensino acontece, geralmente, em sala de aula; a pesquisa surge para se aplicar os conceitos obtidos em sala de aula ou descobrir algo novo em relação aquele conhecimento que já está nos livros e já foi assimilado pelos alunos; a extensão, é aplicação do conhecimento obtido nas fases do ensino e pesquisa, preferencialmente para melhorar algum problema identificado na sociedade, por exemplo no seu bairro, na sua comunidade ou em sua escola.',
      rightAnswer: true,
      justification: 'A articulação entre ensino, pesquisa e extensão deixa a aprendizagem mais atrativa uma vez que se aprende pesquisando e aplicando o que foi aprendido.'
    }
  ];
  public questionsTre: Array<QuestionTrueOrFalse> = [
    {
      question: 'O aluno que escolher realizar o curso técnico integrado ao ensino médio não poderá realizar o ENEM.',
      rightAnswer: false,
      justification: 'Além de estar preparado para exercer uma profissão o aluno poderá, se for do seu interesse, realizar o ENEM normalmente. Ou seja, no EMI o estudante além de terminar o curso  apto a exercer uma profissão também poderá ingressar no Ensino Superior.'
    },
    {
      question: 'Todos os alunos matriculados no Instituto Federal de Educação recebem bolsas de assistência estudantil.',
      rightAnswer: false,
      justification: 'Há um período de seleção para distribuição das bolsas de assistências estudantil de acordo com critérios fixados em edital.'
    },
    {
      question: 'A articulação entre ensino, pesquisa e extensão permite uma formação comprometida com a produção do conhecimento científico, com a compreensão ética, política e social do meio em que vivemos e com a resolução de problemas identificados na sociedade.',
      rightAnswer: true,
      justification: 'Tendo acesso a uma formação de qualidade o aluno poderá exercer sua função de cidadão comprometido com o meio em que vive.'
    }
  ];

  public questionsFor: Array<QuestionTrueOrFalse> = [
    {
      question: 'No IFPI, campus Floriano, o ensino médio integrado tem duração de 4 anos, logo, os três primeiros anos são correspondentes ao Ensino médio e o último ano ao curso técnico.',
      rightAnswer: false,
      justification: 'No curso técnico integrado ao ensino médio as disciplinas de formação geral, comumente chamadas de “disciplinas do ensino médio”, são cursadas juntamente com as disciplinas de formação específica, conhecidas como “disciplinas do curso”. Estas disciplinas são distribuída ao longo de todo o curso, assim em cada uma das séries do ensino médio teremos disciplinas de formação geral e específica.'
    },

    {
      question: 'O instituto oferece ônibus escolar para seus alunos',
      rightAnswer: true,
      justification: 'O ônibus escolar passa em alguns pontos da cidade e com um horário determinado, facilitando a locomoção dos alunos de casa para a escola e da escola para casa.'
    },

    {
      question: 'No ensino médio Integrado, as disciplinas específicas são cursadas, sempre no contraturno das aulas.',
      rightAnswer: false,
      justification: 'As disciplinas específicas podem ser cursadas tanto no turno do aluno, quanto no contraturno, assim como outras disciplinas da matriz curricular do curso.'
    },

    {
      question: 'A Instituição oferece Bioblioteca cujo acesso é tanto para alunos matriculados como para estudantes de outras escolas e universidades.',
      rightAnswer: true,
      justification: 'Todos os alunos matriculados na instituição e de outras instituições de ensino podem utilizar os serviços da biblioteca para estudos, pesquisas etc. A biblioteca possui dentre outras coisas, além de estudo em grupo, computadores para pesquisa e acervo variado de livros'
    },

    {
      question: 'No ensino médio integrado o currículo é integrado, o que significa dizer, dentre outras coisas, que as disciplinas são organizadas de forma que haja troca de saberes entre elas. O desenvolvimento de uma disciplina de formação geral, por exemplo, contribui para o desenvolvimento de uma disciplina específica, assim a construção de conhecimento se torna mais ampla e concreta e o estudante pode vivenciar na prática a teoria dada em sala de aula.',
      rightAnswer: true,
      justification: 'O currículo integrado permite uma integração entre ensino e prática profissional, entre professor e aluno na busca por soluções para diferentes situações, o que implica a contribuição com a comunidade. Considera-se este currículo o mais apropriado para integrar ensino e trabalho para formação pessoal e profissional dos estudantes.'
    }
  ];

  public bdQuestions: Array<QuestionTrueOrFalse> = [];

  constructor() { }

  public setQuestions(idArray: number): void {
    if (idArray === 1) {
      this.bdQuestions = this.questionsOne;
    } else if (idArray === 2) {
      this.bdQuestions = this.questionsTwo;
    } else if (idArray === 3) {
      this.bdQuestions = this.questionsTre;
    } else {
      this.bdQuestions = this.questionsFor;
    }
  }

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
