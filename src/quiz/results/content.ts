import type { TipoId } from "../types";

// Parte de texto: string = parágrafo; {q} = citação verbatim da Durga.
export type Part = string | { q: string };

export type Bloco = {
  headline: string;
  parts: Part[];
  oferta: string;
  ctaLabel: string; // SEM preço (regra do projeto)
  nota: string; // passo-2 (aguda) / apoio (crônica)
};

export type ResultContent = {
  tipo: TipoId;
  nomePublico: string;
  emblema: string;
  headline: string;
  abertura: Part[];
  espelho: Part[];
  remedio: Part[];
  aguda: Bloco; // produto principal = Desapego
  cronica: Bloco; // produto principal = Mecânica
  fecho: Part[];
};

export const RESULTS: Record<TipoId, ResultContent> = {
  ama_negativo: {
    tipo: "ama_negativo",
    nomePublico: "A Que Ama no Negativo",
    emblema: "img/emblema_ama_no_negativo.png",
    headline: "Você é A Que Ama no Negativo.",
    abertura: [
      "Vou te dizer uma coisa que vai doer e que precisa doer. Você acha que ama demais. Mas você não ama demais.",
      { q: "Então a pessoa acha que ela ama demais, mas na verdade ela não ama demais, ela está em carência de amor e essa é a maior confusão. As pessoas que são chamadas mulheres que amam demais, na verdade elas são carentes, elas não amam demais." },
    ],
    espelho: [
      "Você ama mais do que é amada. Sempre foi você correndo atrás. Você vive com medo de perder, o coração na mão, achando que a qualquer momento acaba. Quando ele esfria, você dá mais. Mais carinho, mais presença, mais tudo, achando que se der o suficiente ele fica.",
      "E quanto mais você dá, mais ele foge. Você já reparou nisso?",
      { q: "Eu falo que essas pessoas são pessoas que passam um cheque sem fundo do amor, ou seja, elas não têm algo para dar, elas dão o que elas gostariam de receber." },
      "Você é o passarinho de boca aberta esperando uma comida que não vem. E isso não é amor. Isso é fome. E o outro sente a fome, não o amor.",
      "Eu sei disso porque eu já fui você.",
      { q: "E quando ele foi embora, eu não existia, eu não sabia nem por que eu estava viva. Então, eu me perdi demais." },
    ],
    remedio: [
      "A energia do amor é uma energia que vai. Eu amo, e o amor sai de mim e chega no outro. No seu caso, o que sai não é amor. É carência, é dependência, é medo, é apego. E nada disso chega como amor. Chega como peso.",
      { q: "Ela precisa entender que ela ama no negativo, ou seja, ela está em carência de amor e não em transbordar amor. A energia do amor não chega no outro, o que chega é somente a energia da carência, da dependência, do medo e do apego." },
      "O remédio não é amar menos. É parar de amar do lugar vazio. É aprender a se abastecer sozinha antes de transbordar pro outro. É deixar de ser o passarinho de boca aberta. Quando você se enche primeiro, o que sobra é amor de verdade. E amor de verdade não implora, não se agarra, não morre de medo.",
      { q: "Eu me amo é a capacidade que eu tenho de me conectar comigo mesma. De ficar bem sozinha. E mesmo que eu gostaria de me conectar com alguém, isso não me mata, não me traz sofrimento terrível, não paralisa minha vida." },
    ],
    aguda: {
      headline: "Mas primeiro, você precisa parar de sangrar.",
      parts: [
        "Tem uma pessoa específica te tirando o sono agora. Você pensa nela o dia inteiro. Antes de entender qualquer engrenagem, você precisa parar essa hemorragia. Não dá pra raciocinar com a casa pegando fogo.",
        "Foi exatamente pra esse momento que eu criei o Desapego de Uma Vez.",
        { q: "Literalmente, a pessoa vira uma droga e quando ela some, você entra em abstinência. O sentimento é de fraqueza, mas na verdade é química, e química pode ser reconfigurada." },
        "São 4 vídeos curtos e uma prática alquímica guiada de uns 15 minutos por dia. Não é meditação relaxante. Não é afirmação positiva vazia. É um processo que reconfigura, na química e na energia, o vício que você criou por essa pessoa. Muitas mulheres sentem alívio na primeira semana. Os casos mais difíceis, em 21 dias.",
        { q: "Desapego não é indiferença. Desapegar não significa que você não vai sentir, significa recuperar a sua soberania emocional, significa que você se ama o suficiente para não aceitar migalhas." },
      ],
      oferta: "Desapego de Uma Vez, R$147. Garantia de 7 dias. Faz a prática, e se não sentir diferença, devolvo seu dinheiro.",
      ctaLabel: "QUERO PARAR DE SOFRER AGORA",
      nota: "Quando a poeira baixar e você quiser entender por que você sempre ama no negativo, pra nunca mais cair nisso, o passo seguinte é A Mecânica do Amor. Mas uma coisa de cada vez. Primeiro respira.",
    },
    cronica: {
      headline: "Não é um homem. É o padrão.",
      parts: [
        "Você já reparou que muda o nome do homem e a dor é exatamente a mesma. Não adianta trocar de pessoa, porque o que se repete é você amando no negativo, do lugar vazio, de novo e de novo. Distração não resolve. Próximo relacionamento não resolve. Você já tentou isso.",
        "Pra parar de repetir, você tem que entender a engrenagem inteira do amor. Foi pra isso que eu criei A Mecânica do Amor.",
        "É o workshop completo onde eu te mostro a mecânica concreta de como o amor funciona dentro da gente, do começo ao fim. Não é fórmula de atrair. Não é positividade. É entender por que você se perde, por que você se anula, e como amar de um lugar cheio em vez do vazio.",
        { q: "Quando você existe para o outro, você deixa de existir. Porque você anula o seu ego, você anula os seus próprios desejos, você anula os seus próprios objetivos." },
      ],
      oferta: "A Mecânica do Amor (workshop completo), R$197. Bônus de entrada: o Oráculo das Chaves Ascensionais. Garantia de 7 dias.",
      ctaLabel: "QUERO ENTENDER E NUNCA MAIS REPETIR",
      nota: "Se ainda tem uma pessoa específica te puxando pra baixo, dá pra começar pelo Desapego de Uma Vez (R$147) pra parar a hemorragia primeiro. Mas o que cura a raiz é A Mecânica do Amor.",
    },
    fecho: [
      "Você não nasceu pra amar no negativo. Você aprendeu. E o que se aprende, se desaprende.",
      "Eu saí disso. Hoje eu sou uma mulher inteira, com vida própria, casada há 12 anos com o homem da minha vida hoje, que também é meu melhor amigo. Não porque parei de amar. Porque aprendi a me encher primeiro.",
      "Sua vez.",
    ],
  },

  guerreira: {
    tipo: "guerreira",
    nomePublico: "A Guerreira Cansada",
    emblema: "img/emblema_guerreira_cansada.png",
    headline: "Você é A Guerreira Cansada.",
    abertura: [
      "Você é a mulher forte. A que resolve. A que aguenta. E você tá exausta de ser isso.",
      "Cansei de ser forte pra todo mundo. Você já falou essa frase, nem que tenha sido só pra você mesma no banheiro, chorando baixinho pra ninguém ver.",
    ],
    espelho: [
      "Você faz tudo sozinha. É você que lembra de tudo, organiza tudo, resolve tudo. Carrega a relação nas costas e ninguém vê. E quando chega no limite, você explode ou desiste, porque já não aguenta mais segurar.",
      "Pedir ajuda? Nem morta. Mostrar que tá fraca? Jamais. Você aprendeu que se você não fizer, não é feito. Que se você baixar a guarda, desmorona tudo.",
      "Só que tem um preço nisso. Você virou uma fortaleza. E fortaleza ninguém abraça. Ninguém entra. O homem do seu lado nem sabe que você precisa dele, porque você nunca deixou ele descobrir.",
      "E aí você se ressente. Faz tudo sozinha e fica com raiva de fazer sozinha.",
      { q: "Quando você é bom demais para o outro, isso não existe. Você está anulando uma parte sua e você vai cobrar isso depois." },
    ],
    remedio: [
      "Seu remédio não é ficar mais forte. É o contrário. Você precisa se vulnerabilizar. Pedir ajuda. Abrir espaço pro outro existir do seu lado.",
      { q: "Precisa se vulnerabilizar e aprender a pedir ajuda, abrir espaço para o outro." },
      "Soa fácil. Pra você é a coisa mais difícil do mundo, eu sei. Porque você jurou que nunca mais ia depender de ninguém. Mas relação não é alguém te salvando. É você abrindo a porta da fortaleza e deixando alguém entrar pra dividir o peso. Não dá pra ter parceria carregando tudo sozinha. Onde não tem espaço pro outro, não tem relação, tem só você e a sua armadura.",
      "Vulnerabilidade não é fraqueza. É a única coisa que deixa alguém chegar perto de verdade.",
    ],
    aguda: {
      headline: "Mas agora você só quer parar de carregar.",
      parts: [
        "Tem uma situação te consumindo agora. Talvez um término, talvez uma relação que sangrou até você não aguentar. Antes de aprender a abrir espaço pro próximo, você precisa soltar o peso que você ainda tá carregando desse.",
        "Foi pra esse momento que eu criei o Desapego de Uma Vez.",
        { q: "Desapego não é indiferença. Desapegar não significa que você não vai sentir, significa recuperar a sua soberania emocional, significa que você se ama o suficiente para não aceitar migalhas." },
        "4 vídeos curtos e uma prática alquímica de uns 15 minutos por dia. Não é positividade vazia. É um processo guiado que solta o que tá te puxando pra trás. Muitas mulheres sentem alívio na primeira semana. Os casos mais difíceis, em 21 dias.",
      ],
      oferta: "Desapego de Uma Vez, R$147. Garantia de 7 dias.",
      ctaLabel: "QUERO SOLTAR ESSE PESO",
      nota: "Depois que você descansar dessa, o passo pra aprender a não carregar tudo sozinha de novo é A Mecânica do Amor. Mas primeiro larga o que tá te quebrando agora.",
    },
    cronica: {
      headline: "Você sempre acaba carregando tudo sozinha. Sempre.",
      parts: [
        "Não foi só dessa vez. É o padrão. Você entra na relação já pegando o peso todo pra você, e quando cansa, explode ou desiste. Muda o homem, a história é a mesma: você fortaleza, ele de fora.",
        "Pra parar de repetir isso, você precisa entender a engrenagem inteira de por que você não consegue abrir espaço. Foi pra isso que eu criei A Mecânica do Amor.",
        "É o workshop completo onde eu te mostro como o amor funciona de verdade dentro da gente, do começo ao fim. Por que você se fechou. Como abrir sem se sentir em perigo. Como ter parceria de verdade, do tipo que divide o peso, em vez de mais alguém pra você carregar.",
        { q: "Sabe qual que é o melhor amor que você pode ter? É o seu melhor amigo. Seu parceiro tem que ser o seu melhor amigo. Isso é o amor que dura." },
      ],
      oferta: "A Mecânica do Amor (workshop completo), R$197. Bônus: o Oráculo das Chaves Ascensionais. Garantia de 7 dias.",
      ctaLabel: "QUERO PARAR DE CARREGAR TUDO SOZINHA",
      nota: "Se ainda tem uma situação específica te consumindo agora, dá pra começar pelo Desapego de Uma Vez (R$147) pra soltar o peso primeiro. Mas o que muda a raiz é A Mecânica do Amor.",
    },
    fecho: [
      "Ser forte te trouxe até aqui. Mas não vai te dar o que você quer agora. O que você quer agora é alguém do seu lado de verdade. E pra isso você vai ter que fazer a coisa mais difícil: abrir a porta.",
      "Eu sei que dá medo. Faz mesmo assim.",
    ],
  },

  em_guerra: {
    tipo: "em_guerra",
    nomePublico: "A Que Está em Guerra",
    emblema: "img/emblema_em_guerra.png",
    headline: "Você é A Que Está em Guerra.",
    abertura: [
      "Você não tá num relacionamento. Você tá numa guerra. E o pior: ele nem sabe que essa guerra existe.",
      "Homem é tudo igual, no fim me decepciona. Você já pensou isso. Talvez você pense isso agora.",
    ],
    espelho: [
      "Você já entra desconfiando. No fundo, você espera ele te decepcionar, porque já te decepcionaram antes. Você levanta a guarda antes mesmo dele fazer alguma coisa. E quando começa a esfriar, você não fica pra ver: você sai antes de ser ferida, termina primeiro, no automático.",
      "Você carrega uma conta antiga. Alguém te machucou e você jurou que nunca mais. Só que essa conta você cobra de todos os homens que vêm depois. O coitado que tá na sua frente paga por uma dívida que não foi ele que fez.",
      "Você não consegue relaxar. Não consegue confiar de verdade. Vive de guarda alta. E guarda alta cansa, e afasta, e no fim confirma exatamente o que você temia: que vão te deixar. Só que dessa vez foi você que empurrou.",
    ],
    remedio: [
      "Existe um pacto de vingança dentro de você. Um acordo silencioso de fazer o masculino pagar pelo que um homem fez. E enquanto esse pacto estiver de pé, você não cura nenhuma relação, porque você não tá amando, você tá cobrando.",
      { q: "Ela precisa acabar com o pacto de vingança interno com o masculino e acreditar que seu parceiro pode e deve ser o seu melhor amigo." },
      "O remédio é desarmar. Largar a guerra. Parar de ver o homem do seu lado como o próximo inimigo e começar a ver ele como o que ele pode ser: o seu melhor amigo.",
      { q: "Sabe qual que é o melhor amor que você pode ter? É o seu melhor amigo. Seu parceiro tem que ser o seu melhor amigo. Isso é o amor que dura." },
      "Não é sobre baixar a guarda pra qualquer um. É sobre parar de tratar o amor como campo de batalha. Você não tem que estar contra ele. Vocês podem estar juntos, do mesmo lado.",
    ],
    aguda: {
      headline: "Mas tem uma ferida aberta agora.",
      parts: [
        "Tem alguém ou alguma coisa te machucando agora. Uma decepção fresca, uma traição, um término que confirmou tudo que você temia. Antes de desarmar pro próximo, você precisa cuidar dessa ferida, senão ela vira mais munição pra guerra.",
        "Foi pra esse momento que eu criei o Desapego de Uma Vez.",
        { q: "Desapego não é indiferença. Desapegar não significa que você não vai sentir, significa recuperar a sua soberania emocional, significa que você se ama o suficiente para não aceitar migalhas." },
        "4 vídeos curtos e uma prática alquímica de uns 15 minutos por dia. Não é positividade vazia. É um processo guiado que solta o que essa pessoa deixou em você. Alívio pra muitas já na primeira semana. Os casos difíceis, em 21 dias.",
      ],
      oferta: "Desapego de Uma Vez, R$147. Garantia de 7 dias.",
      ctaLabel: "QUERO CURAR ESSA FERIDA",
      nota: "Depois que essa ferida fechar, o passo pra desarmar a guerra de vez é A Mecânica do Amor. Mas primeiro para de sangrar.",
    },
    cronica: {
      headline: "A guerra não é com ele. É com todos eles. Há anos.",
      parts: [
        "Não foi um homem. Foram vários, e com todos a história termina igual: você de guarda alta, ele do outro lado, você saindo antes de ser ferida. Muda o nome, a guerra é a mesma. Porque a guerra é interna, e você leva ela pra dentro de cada relação nova.",
        "Pra desarmar de vez, você precisa entender a engrenagem inteira de como você entrou nessa guerra e como sair. Foi pra isso que eu criei A Mecânica do Amor.",
        "É o workshop completo onde eu te mostro como o amor funciona de verdade dentro da gente, do começo ao fim. Por que você se armou. Como largar o pacto de vingança. Como deixar um homem virar seu melhor amigo em vez do próximo inimigo.",
        { q: "A nossa diferença principal é que a gente não está um contra o outro, a gente está junto contra o mundo. A gente não se vê como inimigo, não tem dentro da gente mais essa guerra dos sexos." },
      ],
      oferta: "A Mecânica do Amor (workshop completo), R$197. Bônus: o Oráculo das Chaves Ascensionais. Garantia de 7 dias.",
      ctaLabel: "QUERO LARGAR ESSA GUERRA",
      nota: "Se tem uma ferida fresca te puxando pra guerra agora, dá pra começar pelo Desapego de Uma Vez (R$147) pra fechar ela primeiro. Mas o que desarma a raiz é A Mecânica do Amor.",
    },
    fecho: [
      "Você se armou porque precisou. Em algum momento, a guarda alta te protegeu de verdade. Mas hoje ela não te protege mais. Ela só te isola.",
      "Dá pra largar a guerra sem ficar desprotegida. É isso que eu vou te ensinar.",
    ],
  },

  conquista: {
    tipo: "conquista",
    nomePublico: "A Que Conquista Mas Não Sustenta",
    emblema: "img/emblema_conquista_nao_sustenta.png",
    headline: "Você é A Que Conquista Mas Não Sustenta.",
    abertura: [
      "Conquistar você conquista. Esse nunca foi o problema. O problema é que esfria rápido, some o desejo, e você não entende o que mudou.",
    ],
    espelho: [
      "Você atrai. Você sabe seduzir, sabe se arrumar, sabe prender a atenção no começo. Mas o começo passa, e quando passa, você vê o interesse dele escorrer pelos dedos e não sabe segurar.",
      "Quando esfria, qual é o seu primeiro movimento? Você aposta na beleza. Se arruma mais, fica mais sexy, tenta reconquistar pelo físico. Porque foi assim que você conquistou, então você acha que é assim que se sustenta.",
      "Só que não é. A beleza abre a porta. A beleza não mantém ninguém na sala.",
      { q: "Não dá pra usar calcinha de renda todos os encontros, depois de casar não dá. Uma hora a calcinha de algodão vai ser necessária porque você não aguenta mais, você tá assada." },
      "E aí você vira obrigação em vez de desejo, e não entende por quê. Você fez tudo certo. Tava linda. Mas linda não foi o que faltou.",
    ],
    remedio: [
      "Seu remédio é tirar a beleza do centro. Parar de usar ela como arma de sedução e conquista. Porque enquanto você priorizar isso, o homem do seu lado também só vai priorizar isso, e o dia que você não estiver no seu auge, acabou.",
      { q: "Ela mesma precisa parar de priorizar a sua beleza como arma de sedução e conquista. Enquanto ela priorizar esse aspecto o parceiro também priorizará." },
      "O que sustenta uma relação não é a embalagem. É o que tem dentro, e é o que tem dentro que você ainda não aprendeu a mostrar, porque você sempre se escondeu atrás da imagem.",
      { q: "Pra que você quer passar uma imagem nota 10? Se ninguém é nota 10, a desilusão é fato. Quando você tenta ser o que você não é pro outro, a desilusão é fato." },
      "Quando você para de ser uma imagem e começa a ser uma pessoa, aí sim alguém fica. Não pela calcinha de renda. Por você.",
    ],
    aguda: {
      headline: "Mas agora dói uma perda específica.",
      parts: [
        "Esfriou com alguém específico agora, e tá doendo. Você fez de tudo pra reconquistar e não funcionou, e isso te deixou com a sensação de que não é suficiente. Antes de mudar qualquer coisa, você precisa parar de remoer essa pessoa.",
        "Foi pra esse momento que eu criei o Desapego de Uma Vez.",
        { q: "Desapego não é indiferença. Desapegar não significa que você não vai sentir, significa recuperar a sua soberania emocional, significa que você se ama o suficiente para não aceitar migalhas." },
        "4 vídeos curtos e uma prática alquímica de uns 15 minutos por dia. Não é positividade vazia. É um processo guiado que solta essa pessoa de você. Alívio pra muitas já na primeira semana. Os casos difíceis, em 21 dias.",
      ],
      oferta: "Desapego de Uma Vez, R$147. Garantia de 7 dias.",
      ctaLabel: "QUERO SOLTAR ESSA PESSOA",
      nota: "Depois que parar de doer, o passo pra aprender a sustentar, não só conquistar, é A Mecânica do Amor. Uma coisa de cada vez.",
    },
    cronica: {
      headline: "Sempre começa quente. Sempre esfria. Sempre.",
      parts: [
        "Não foi só com ele. É o padrão. Você conquista, brilha no começo, e em pouco tempo o desejo morre e você não sabe segurar. Muda o homem, a curva é idêntica: sobe rápido, despenca rápido.",
        "Pra parar de repetir, você precisa entender a engrenagem inteira do que sustenta uma relação depois que o brilho do começo passa. Foi pra isso que eu criei A Mecânica do Amor.",
        "É o workshop completo onde eu te mostro como o amor funciona de verdade dentro da gente, do começo ao fim. Por que a beleza não segura ninguém. O que segura. Como deixar de ser uma imagem e virar uma pessoa que alguém escolhe ficar.",
        { q: "Relacionar-se é uma escolha de defeitos. Você tem que escolher os defeitos do outro que você tolera, porque se for intolerante acabou." },
      ],
      oferta: "A Mecânica do Amor (workshop completo), R$197. Bônus: o Oráculo das Chaves Ascensionais. Garantia de 7 dias.",
      ctaLabel: "QUERO APRENDER A SUSTENTAR",
      nota: "Se ainda tem uma pessoa específica te puxando agora, dá pra começar pelo Desapego de Uma Vez (R$147) pra soltar primeiro. Mas o que muda a raiz é A Mecânica do Amor.",
    },
    fecho: [
      "Você sempre soube atrair. Agora você vai aprender a coisa que ninguém te ensinou: como fazer alguém ficar quando a maquiagem sai e a calcinha de algodão entra.",
      "Isso não é beleza. É outra coisa. E é isso que eu vou te mostrar.",
    ],
  },

  cria_filho: {
    tipo: "cria_filho",
    nomePublico: "A Que Cria Filho em Vez de Parceiro",
    emblema: "img/emblema_cria_filho.png",
    headline: "Você é A Que Cria Filho em Vez de Parceiro.",
    abertura: [
      "Você queria um parceiro. Mas você arrumou mais um filho. E o pior: foi você que criou ele assim.",
    ],
    espelho: [
      "Você cuida dele como se fosse mais um filho. Resolve a vida dele, lembra os compromissos dele, organiza tudo. Ele te pede coisas o tempo todo e esquece de fazer o que você pediu. É o queridinho da mamãe, acostumado a receber tudo na mão.",
      "E você acha que se não for você, ninguém cuida dele. Então você cuida mais. Facilita mais. E quanto mais você facilita, mais ele afunda na poltrona.",
      "Sabe o que morre nessa história? O tesão. Porque ninguém deseja um filho. Você vira a mãe, ele vira o filho, e o desejo morre no meio do caminho. Você fica acompanhada e sozinha ao mesmo tempo. Tem um homem na casa, mas você tá criando ele, não amando ele.",
      { q: "Não dá pra usar calcinha de renda todos os encontros, depois de casar não dá." },
      "E quando você cansa e reclama, ele se faz de vítima, porque você ensinou ele a só receber.",
    ],
    remedio: [
      "O remédio é simples de dizer e duro de fazer. Você precisa deixar claro que você não é mãe dele. E parar de agir como tal.",
      { q: "Deixe claro que você não é mãe dele e pare de agir como tal. Essa é uma relação complementar e se a mulher não interromper, não espere que o parceiro o faça." },
      "Quem tem que interromper isso é você. Não adianta esperar ele acordar e decidir crescer sozinho, porque ele tá ótimo, tem tudo na mão. Quem não tá bem é você. Então é você que para.",
      "Parar de levar a comida na cama. Parar de resolver. Parar de cobrir. Deixar ele sentir falta, deixar ele se virar, deixar o espaço aberto pra ele virar homem. Dói no começo, porque você acha que tá abandonando ele. Não tá. Você tá devolvendo pra ele a vida que é dele.",
      { q: "Relacionamento não vive de promessa. Ele vive de verdade, ele vive de comprometimento, ele vive de concessões saudáveis." },
    ],
    aguda: {
      headline: "Mas agora dói uma situação específica.",
      parts: [
        "Talvez vocês tenham acabado de terminar. Talvez você esteja num ponto de exaustão com uma pessoa específica que te suga e não dá nada de volta. Antes de mudar a dinâmica, você precisa parar de carregar essa pessoa na cabeça o dia inteiro.",
        "Foi pra esse momento que eu criei o Desapego de Uma Vez.",
        { q: "Desapego não é indiferença. Desapegar não significa que você não vai sentir, significa recuperar a sua soberania emocional, significa que você se ama o suficiente para não aceitar migalhas." },
        "4 vídeos curtos e uma prática alquímica de uns 15 minutos por dia. Não é positividade vazia. É um processo guiado que solta o que essa pessoa deixou em você. Alívio pra muitas já na primeira semana. Os casos difíceis, em 21 dias.",
      ],
      oferta: "Desapego de Uma Vez, R$147. Garantia de 7 dias.",
      ctaLabel: "QUERO PARAR DE CARREGAR ELE",
      nota: "Depois que aliviar, o passo pra nunca mais maternar um parceiro é A Mecânica do Amor. Mas primeiro tira esse peso da cabeça.",
    },
    cronica: {
      headline: "Você sempre vira a mãe. Sempre.",
      parts: [
        "Não foi só esse. É o padrão. Você entra na relação e em pouco tempo já tá cuidando, resolvendo, maternando. Muda o homem, o papel é o mesmo: você mãe, ele filho, o desejo morto.",
        "Pra parar de repetir, você precisa entender a engrenagem inteira de por que você sempre assume esse lugar e como sair dele. Foi pra isso que eu criei A Mecânica do Amor.",
        "É o workshop completo onde eu te mostro como o amor funciona de verdade dentro da gente, do começo ao fim. Por que você materna. Como interromper sem culpa. Como ter um parceiro de verdade, do tipo que divide, em vez de mais um filho pra criar.",
        { q: "Sabe qual que é o melhor amor que você pode ter? É o seu melhor amigo. Seu parceiro tem que ser o seu melhor amigo. Isso é o amor que dura." },
      ],
      oferta: "A Mecânica do Amor (workshop completo), R$197. Bônus: o Oráculo das Chaves Ascensionais. Garantia de 7 dias.",
      ctaLabel: "QUERO UM PARCEIRO, NÃO UM FILHO",
      nota: "Se tem uma pessoa específica te sugando agora, dá pra começar pelo Desapego de Uma Vez (R$147) pra aliviar primeiro. Mas o que muda a raiz é A Mecânica do Amor.",
    },
    fecho: [
      "Você não é egoísta por querer parar de criar um adulto. Você é uma mulher que quer um parceiro, e merece um.",
      "Você não é mãe dele. Repete isso até virar verdade. E depois deixa eu te mostrar como sair desse lugar.",
    ],
  },
};
