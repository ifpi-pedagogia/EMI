import { Injectable } from '@angular/core';

import { EntrevistaModel } from './../shared/entrevista.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  interviewAll: Array<EntrevistaModel>;
  questionOne: string;
  questionTwo: string;
  questionTre: string;
  questionFor: string;

  constructor() { this.init(); }

  private init(): void {
    this.questionOne = 'O que você diria para um estudante de ensino fundamental (09º ano) que está indeciso quanto a qual tipo de ensino médio realizar: O ensino médio não integrado ou o  ensino médio integrado?';
    this.questionTwo = 'O que você diria a um aluno que acabou de ingressar no 1º ano do ensino médio integrado e está com muitas dúvidas sobre o curso técnico?';
    this.questionTre = 'Que contribuições o ensino médio integrado está trazendo para sua formação?';
    this.questionFor = 'Você arrepende-se de ter optado por realizar o curso técnico integrado no Instituto Federal? Justifique.';
    // console.log('ok--> 1: ' + this.questionOne);
    this.interviewAll = [
      {
        id: 1,
        urlImg: 'assets/imagens/pessoa1.png',
        studentName: 'José Celso de Matos Silva',
        courseName: 'Eletromecânica',
        sala: 3301,
        questions: [
          'Não tenha medo de cursar o curso médio integrado, pois serão anos que te prepararão para uma educação e ensino profissional diferenciado de qualquer outra instituição pública ou particular. Quando concluído, você terá o ensino concluído e conclusão de um curso técnico de qualidade. Independente do curso, faça aquele em que você ver que realmente você estará adaptado para trabalhar, todos os cursos são bons, identifique-se e estude que os resultados virão.',
          'O ensino médio integrado não é apenas um ano adicional na grade curricular, ma sim a valorização dos seus conhecimentos que serão importantes para sua carreira profissional escolhida durante o curso. Isso significa a conclusão do ensino médio diferente, pois além de terminar seu curso, sairá do instituto com uma qualificação mostrando que você já está preparado para trabalhar, exercendo um cargo que muitas vezes é somente para pessoas que cursaram grandes cursos. Valorize a oportunidade!',
          'São muitos mesmo, pois, hoje cursando o 3º ano de eletromecânica do ensino médio integrado, já conseguir elaborar projetos robóticos , juntamente com professores especializados nessa área, onde já participei de um evento internacional no Rio Grande do Sul, todas as despesas pelo instituto. Além disso, já detive conhecimentos relativo a disciplinas que muitas pessoas que estudam em outras escolas não estudaram, preparado assim para realizar provas de concurso e testes militares.',
          'Não, pois gosto muito de estudar no Instituto.'
          ]
        },
          {
          id: 2,
          urlImg: 'assets/imagens/pessoa2.png',
          studentName: 'João Victor Ferreira dos Santos',
          courseName: 'Eletromecânica',
          sala: 3301,
          questions: [
          'Diria que seria muito melhor estudar o curso técnico integrado ao médio, porque vale a pena. O aluno é incentivado à fazer pesquisa e sair da instituição com uma profissão.',
          'Procurar em que áreas de seu curso ele mais se identifica e explorá-las e buscar aprofundar-se fazendo projetos. No final, só virão benefícios e satisfação. Além do mais, isso servirá como preparação para atuar na área do curso escolhido ou fazer o ensino superior.',
          'O ensino médio integrado foi uma das maiores realizações da minha vida. Estudar o curso técnico integrado mudou minha perspectiva de mundo. Além de estar me preparando para atuar como profissional, realização de projetos de cunho tecnológico e me preparar para o ensino superior.',
          'Não. Pelo contrário, foi uma das melhores decisões da minha vida, pois minha vida e meu futuro agora estão garantidos graças ao IFPI.'
          ]
          },
          {
          id: 3,
          urlImg: 'assets/imagens/pessoa3.png',
          studentName: 'Laís de Fátima Vasconcelos dos Santos',
          courseName: 'Edificações',
          sala: 2401,
          questions: [
          'Diria que o ensino médio integrado ao técnico, além de mais complexo é mais completo por se tratar de um ensino que também prepara o estudante para o trabalho.',
          'Diria que fazendo o ensino técnico ao sair do ensino médio ele vai estar apto para trabalhar na área em que estudou. O ensino técnico integrado traz benefícios para o estudante em relação ao tempo, já que são feitos simultaneamente.',
          'Mais conhecimentos em uma área diferente do ensino convencional’. Aqui no campus Floriano, por exemplo está disponível os cursos de eletromecânica, informática, edificações e meio ambiente. Eu faço edificações e quando vejo alguma obra, sempre associo com os ensinamentos explicados em sala de aula.',
          'Não. Foi uma das melhores escolhas que já fiz na vida, conheci uma área nova e ainda posso dizer que estudei no melhor campus do Piauí.'
          ]
          },
          {
          id: 4,
          urlImg: 'assets/imagens/pessoa4.png',
          studentName: 'Maria Clara Soares de Sousa',
          courseName: 'Edificações',
          sala: 2401,
          questions: [
          'O curso técnico integrado ajuda na melhor qualificação profissional, prepara o jovem para o mercado de trabalho.',
          'Os cursos técnicos são surpreendentes, você pode acabar gostando e decidir até seguir na área.',
          'Conhecimento em diferentes áreas.',
          'Não. Me ajudará no currículo e a adquirir novos conhecimentos.'
          ]
          },
          {
          id: 5,
          urlImg: 'assets/imagens/pessoa5.png',
          studentName: 'Kléber Lucas da Costa Silva',
          courseName: 'Edificações',
          sala: 2401,
          questions: [
          'O ensino médio convencional (em 3 anos) é menos intensivo do que um médio no IF (Instituto Federal), mesmo que esse tenha um técnico integrado. Em outras escolas, assuntos à nível médio são vistos superficialmente e muitas vezes são negligenciados, além de que há aulas intensivas para tentar cumprir a carga horária, ocupando muito seu tempo.',
          'O curso técnico é o primeiro contato do estudante com uma possível vida profissional, ele vai adquirindo experiência e maturidade para uma vida adulta. Além disso, o técnico servirá, pois já capacita o estudante e é um adicional para o currículo.',
          'O ensino médio integrado é muito importante pois ao concluirmos  estamos aptos para entrar no mercado de trabalho. Diariamente eu encontro pessoas na rua que me parabenizam por ser membro do Instituto Federal. Muitas pessoas desejam fazer dessa instituição.',
          'Não. Pois provavelmente irá me beneficiar em oportunidades de emprego em um futuro próximo. Só tem a somar no currículo pessoal e novos conhecimentos.'
          ]
        }
    ]
  }

  public getInterviews(): Array<EntrevistaModel> {
    return this.interviewAll;
  }

  public getInterviewById(id: number): EntrevistaModel {
    if (this.interviewAll[id - 1] !== null) {
      return this.interviewAll[id - 1];
    }
    return null; // id não encontrado
  }
}
