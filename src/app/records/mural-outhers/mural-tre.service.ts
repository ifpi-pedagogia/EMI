import { Injectable } from '@angular/core';

import { MuralTre } from './../../shared/mural-tre.model';

@Injectable({
  providedIn: 'root'
})
export class MuralTreService {

  public depositions: Array<MuralTre> = [
    {
      idDialog: 1,
      nameStudent: 'Essondro Juniel Veloso do Nascimento Filho',
      responseOne: 'É útil pela preparação para o meio de trabalho, que nos dias atuais é essencial. Já sair daqui (IFPI) com um passo a frente dos demais, por ter a oportunidade de aprender algo a mais, pois conhecimento é sempre bem-vindo.',
      responseTwo: 'Compreender algumas funções do curso, experimentar minicursos, assistir palestras motivacionais, conhecer pessoas maravilhosas, participar de eventos e atividades extracurriculares. Participar e elaborar projetos de extensão.',
      responseTre: 'As relações sociais e pessoais, além de estar preparado para o ENEM e mercado de trabalho.',
      urlImg: '',
      courseName: 'Eletromecânica'
    },
    {
      idDialog: 2,
      nameStudent: 'Natanmáx Nicolas',
      responseOne: 'Porque te torna capaz de ter mais uma formação em um curto espaçp de tempo, fazendo com que você tenha mais oportunidades.',
      responseTwo: 'Aprender muita coisa, e olhar o mundo de outras maneiras, porque não é um simples ensino médio.',
      responseTre: 'A vida, e para situar melhor o seu futuro e o que você quer.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      idDialog: 3,
      nameStudent: 'Ildenice Azevedo',
      responseOne: 'Porque por mais que cada aluno que aqui ingressa não se identifique com o curso, com o decorrer do tempo vai perceber que não somente o curso, mas a instituição projeta nosso futuro de forma inigualável, tornando-nos futuros técnicos profissionais.',
      responseTwo: 'Aprender, adquirir muito mais conhecimentos no curso em que cada aluno ingressa, além de aprofundar a aprendizagem acerca das disciplinas ministradas. As pesquisas aqui realizadas são de fundamental importância no conhecimento, pois somente o IFPI é capaz de proporcionar uma aprendizagem excelente.',
      responseTre: 'Exercer uma profissão, na qual você já vai estar preparado para executá-la, pois o IFPI é uma instituição que realmente prepara os seus alunos para um futuro brilhante.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    },
    {
      idDialog: 4,
      nameStudent: 'João Batista Soares Neto',
      responseOne: 'Pra quem nunca se cobrou ao máximo, pra quem nunca soube o que é ter compromisso e força de vontade, melhor não optar por essa modalidade de ensino. Mas respondendo a esta pergunta, por que fazer o curso integrado? Deve fazê-lo para além de se descobrir, você será bem mais que um aluno, será um cidadão e um excelente profissional.',
      responseTwo: 'Aprender coisas jamais imaginadas e ofertadas de maneira tão abrangente e prática. Aprendemos a lidar com situações em que é preciso maturidade, disciplina, companheirismo e compromisso com os outros e, acima de tudo, com você mesmo. No final de nossa carreira, estamos preparados em todos os aspectos a encarar situações adversas e favoráveis de todos os níveis. Descobrir algo que você se identifica (ou não) e explorar e aumentar suas capacidades.',
      responseTre: 'Ofertar qualidade de serviço, boa vivência, experiência, audácia, inteligência voltadas a desenvolver sua função, seja qual for, de maneira única e eficaz.',
      urlImg: '',
      courseName: 'Eletromecânica'
    },
    {
      idDialog: 5,
      nameStudent: 'Samuel',
      responseOne: 'Para ter maior conhecimento das demais áreas de cada curso e para sair do seu ensino médio com algo maior no seu currículo, que contará muito futuramente.',
      responseTwo: 'Usufruir de uma ótima estrutura, ótimos professores e uma maior didática de ensino.',
      responseTre: 'Para enfrentar uma universidade ótima, e já está preparado para qualquer barreira no futuro profissional.',
      urlImg: '',
      courseName: 'Meio Ambiente'
    }
  ];

  public questionOne = 'Por que fazer o curso integrado?';
  public questionTwo = 'No ensino médio integrado temos a oportunidade de ...';
  public questionTre = 'Ao concluir o ensino médio integrado você estará melhor preparado para ...';

  constructor() { }

  public getDepositions(): Array<MuralTre> {
    return this.depositions;
  }

  public getElementIdMural(id: number): MuralTre {
    return this.depositions[id];
  }
}
