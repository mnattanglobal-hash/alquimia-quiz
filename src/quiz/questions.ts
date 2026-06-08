import type { Question } from "./types";

// 9 perguntas verbatim (quiz_inicial.md).
// P1–6 mapeiam o TIPO (A→ama_negativo, B→guerreira, C→em_guerra, D→conquista, E→cria_filho).
// P7–9 mapeiam a URGÊNCIA (peso entre parênteses na copy).
export const QUESTIONS: Question[] = [
  {
    kind: "tipo",
    n: 1,
    prompt: "Pensa no último relacionamento que te machucou. O que mais pesou?",
    options: [
      { text: "Eu amava mais do que era amada. Sempre fui eu correndo atrás.", tipo: "ama_negativo" },
      { text: "Eu fazia tudo sozinha. Carregava a relação nas costas e ninguém via.", tipo: "guerreira" },
      { text: "Eu já entrei desconfiando. No fundo eu esperava ele me decepcionar.", tipo: "em_guerra" },
      { text: "Eu conquistei fácil, mas não consegui segurar. Esfriou rápido.", tipo: "conquista" },
      { text: "Eu cuidava dele como se fosse mais um filho. Resolvia a vida dele.", tipo: "cria_filho" },
    ],
  },
  {
    kind: "tipo",
    n: 2,
    prompt: "Qual dessas frases você já falou (ou pensou) e doeu de tão verdade?",
    options: [
      { text: "\"Eu morro se ele me deixar.\"", tipo: "ama_negativo" },
      { text: "\"Eu cansei de ser forte pra todo mundo.\"", tipo: "guerreira" },
      { text: "\"Homem é tudo igual, no fim me decepciona.\"", tipo: "em_guerra" },
      { text: "\"Eu seguro a atenção dele no começo e depois some.\"", tipo: "conquista" },
      { text: "\"Se não for eu, ninguém cuida dele.\"", tipo: "cria_filho" },
    ],
  },
  {
    kind: "tipo",
    n: 3,
    prompt: "Quando a relação começa a esfriar, qual é o seu primeiro movimento?",
    options: [
      { text: "Eu dou mais. Mais carinho, mais presença, mais tudo, pra ele não ir embora.", tipo: "ama_negativo" },
      { text: "Eu seguro tudo sozinha e finjo que tá bem. Não peço ajuda nem morta.", tipo: "guerreira" },
      { text: "Eu já me fecho e começo a esperar a traição. Levanto a guarda.", tipo: "em_guerra" },
      { text: "Eu aposto na beleza. Me arrumo mais, fico mais sexy, tento reconquistar pelo físico.", tipo: "conquista" },
      { text: "Eu cuido mais dele ainda. Acho que se eu facilitar a vida dele dá certo.", tipo: "cria_filho" },
    ],
  },
  {
    kind: "tipo",
    n: 4,
    prompt: "O que mais te esgota num relacionamento?",
    options: [
      { text: "O medo. Vivo com o coração na mão achando que vai acabar a qualquer momento.", tipo: "ama_negativo" },
      { text: "O peso. Sou eu que lembro tudo, organizo tudo, resolvo tudo. Tô exausta.", tipo: "guerreira" },
      { text: "A desconfiança. Eu não consigo relaxar e confiar de verdade em ninguém.", tipo: "em_guerra" },
      { text: "A frustração. Começa quente e logo eu viro obrigação, não desejo.", tipo: "conquista" },
      { text: "A solidão de quem tá acompanhada. Tenho um parceiro mas parece que tenho um dependente.", tipo: "cria_filho" },
    ],
  },
  {
    kind: "tipo",
    n: 5,
    prompt: "Se eu te falasse uma verdade dura agora, qual dessas você precisaria mais ouvir?",
    options: [
      { text: "Você não ama demais. Você está em carência.", tipo: "ama_negativo" },
      { text: "Você não é obrigada a carregar tudo. Pedir ajuda não é fraqueza.", tipo: "guerreira" },
      { text: "Você não tá numa relação, você tá numa guerra que ele nem sabe que existe.", tipo: "em_guerra" },
      { text: "Beleza atrai. Beleza não sustenta. Você tá apostando na arma errada.", tipo: "conquista" },
      { text: "Você não é mãe dele. E enquanto você for, ele nunca vai ser homem pra você.", tipo: "cria_filho" },
    ],
  },
  {
    kind: "tipo",
    n: 6,
    prompt: "Como costuma ser o fim das suas relações?",
    options: [
      { text: "Ele se afasta devagar e eu me agarro. Quanto mais eu seguro, mais ele foge.", tipo: "ama_negativo" },
      { text: "Eu chego no limite, exploto ou desisto. Cansei de fazer sozinha.", tipo: "guerreira" },
      { text: "Eu já saio antes de ser ferida. Termino primeiro, no automático.", tipo: "em_guerra" },
      { text: "Ele perde o interesse e eu não entendo o que mudou.", tipo: "conquista" },
      { text: "Eu viro a mãe, ele vira o filho, e o tesão morre no meio do caminho.", tipo: "cria_filho" },
    ],
  },
  {
    kind: "urgencia",
    n: 7,
    prompt: "Tem uma pessoa específica te tirando o sono agora?",
    options: [
      { text: "Tem. Eu penso nela o dia inteiro, não consigo desgrudar.", urgencia: "aguda", peso: 2 },
      { text: "Mais ou menos. Ainda penso, mas já tá mais leve.", urgencia: "aguda", peso: 1 },
      { text: "Não tem ninguém específico. É um padrão que se repete com vários.", urgencia: "cronica", peso: 2 },
    ],
  },
  {
    kind: "urgencia",
    n: 8,
    prompt: "Há quanto tempo essa dor começou?",
    options: [
      { text: "Faz pouco tempo. Semanas, no máximo uns meses. Tá fresco.", urgencia: "aguda", peso: 2 },
      { text: "Já faz um tempo, mas piorou de novo agora.", urgencia: "aguda", peso: 1 },
      { text: "Faz anos. Muda o nome do homem, a dor é sempre a mesma.", urgencia: "cronica", peso: 2 },
    ],
  },
  {
    kind: "urgencia",
    n: 9,
    prompt: "O que você mais quer agora?",
    options: [
      { text: "Parar de sentir essa dor específica. Quero respirar de novo.", urgencia: "aguda", peso: 2 },
      { text: "Entender por que isso se repete pra eu nunca mais cair nisso.", urgencia: "cronica", peso: 2 },
      { text: "As duas coisas, mas primeiro eu preciso parar de sofrer.", urgencia: "aguda", peso: 1 },
    ],
  },
];
