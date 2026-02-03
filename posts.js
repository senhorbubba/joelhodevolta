const posts = [
   {
        tag: "Semana 10",
        date: "25 Jan 2026",
        pain: "3/10",
        swelling: "4/10",
        title: "Dia 70: Movimento, Conforto e Exageros",
        description: "Um começo forte fisicamente deu lugar a um domingo lento e confortável. A academia e a melhora na flexão animaram, enquanto descanso, família e a piscina ajudaram o joelho a soltar. O dia saiu do trilho com comida e vinho de novo, trazendo aquela sensação familiar de peso e uma intenção clara de resetar amanhã.",
        image: "images/Day70.jpg",
        link: "posts/day-70.html"
    },
   {
        tag: "Semana 10",
        date: "24 Jan 2026",
        pain: "4/10",
        swelling: "4/10",
        title: "Dia 69: Indulgência e Manutenção",
        description: "Um dia lento e pesado, moldado mais por comida, vida social e fadiga do que por ambição de recuperação. O treino ficou em segundo plano, mas a manutenção básica continuou. Nem um passo à frente, nem um passo atrás.",
        image: "images/Day69.jpg",
        link: "posts/day-69.html"
    },
   {
        tag: "Semana 10",
        date: "23 Jan 2026",
        pain: "4/10",
        swelling: "4/10",
        title: "Dia 68: Atrito, Fadiga e um Avanço",
        description: "Um dia exigente, que começou rápido e ficou pesado - física e mentalmente. O joelho resistiu à carga logo cedo, a fadiga ficou o dia inteiro, mas a noite terminou com uma grande vitória na flexão. Um daqueles dias em que o progresso só aparece no final.",
        image: "images/Day68.jpg",
        link: "posts/day-68.html"
    },
   {
        tag: "Semana 10",
        date: "22 Jan 2026",
        pain: "4/10",
        swelling: "4/10",
        title: "Dia 67: Ouvindo os Sinais, Voltando ao Básico",
        description: "Um dia cheio e comum que testou a paciência de um jeito silencioso. A rotina da escola voltou, o trabalho fluiu, mas os sinais do joelho pediram atenção. Em vez de forçar, escolhi manutenção e recuperação - um lembrete de que progresso também é saber desacelerar.",
        image: "images/Day67.jpg",
        link: "posts/day-67.html"
    },
   {
        tag: "Semana 10",
        date: "21 Jan 2026",
        pain: "4/10",
        swelling: "3/10",
        title: "Dia 66: Sinais, Ajustes e Reenquadrando o Ritmo",
        description: "Um começo lento e pesado, seguido de progresso cauteloso e ajustes necessários. O joelho mandou sinais mistos hoje, lembrando que avançar também significa saber quando recalibrar. A rotina está voltando - e com ela, uma sensação de estrutura e alívio.",
        image: "images/Day66.jpg",
        link: "posts/day-66.html"
    },
   {
        tag: "Semana 10",
        date: "20 Jan 2026",
        pain: "4/10",
        swelling: "4/10",
        title: "Dia 65: Fadiga, Atrito e Segurar a Linha",
        description: "Um dia mentalmente pesado, em que a energia caiu e o joelho reagiu. Trabalho, logística da família e cansaço colidiram, deixando pouco espaço para recuperação até tarde. Hoje o progresso pareceu menos óbvio, mas a disciplina apareceu mesmo assim.",
        image: "images/Day65.jpg",
        link: "posts/day-65.html"
    },
   {
        tag: "Semana 10",
        date: "19 Jan 2026",
        pain: "3/10",
        swelling: "3/10",
        title: "Dia 64: Elo Fraco e Rituais Familiares",
        description: "Um dia de trabalho testou consistência e gestão do tempo, empurrando a recuperação para janelas curtas entre obrigações. O treino mostrou onde a fraqueza ainda transfere carga para os tendões, mas a melhora na flexão fechou o dia com um saldo positivo. Menos gelo é necessário agora, embora o ritual ainda tenha significado.",
        image: "images/Day64.jpg",
        link: "posts/day-64.html"
    },
   {
        tag: "Semana 9",
        date: "18 Jan 2026",
        pain: "3/10",
        swelling: "4/10",
        title: "Dia 63: Compensação e Consequências",
        description: "Uma manhã um pouco melhor virou rapidamente uma lição sobre compensação e limites. O movimento ajudou a destravar a rigidez, mas ficar em pé, vida social e sessões de recuperação puladas cobraram seu preço. O corpo deixou claro que descanso ainda é parte ativa do progresso.",
        image: "images/Day63.jpg",
        link: "posts/day-63.html"
    },
   {
        tag: "Semana 9",
        date: "17 Jan 2026",
        pain: "4/10",
        swelling: "4/10",
        title: "Dia 62: Progresso Silencioso, Vida Real em Equilíbrio",
        description: "Uma manhã cedo e silenciosa deu um tom produtivo ao dia, seguida do retorno à rotina, tempo em família e treino. A flexão segue como o principal desafio, mas o progresso é visível. O dia equilibrou disciplina de recuperação com vida real - incluindo uma noite fora que já estava atrasada.",
        image: "images/Day62.jpg",
        link: "posts/day-62.html"
    },
   {
        tag: "Semana 9",
        date: "16 Jan 2026",
        pain: "3/10",
        swelling: "5/10",
        title: "Dia 61: Confiança Cresce, Controle Importa",
        description: "A mobilidade está melhorando e caminhar no dia a dia ficou mais fácil, mas a confiança traz novos riscos. Uma sessão de fisio mais exigente introduziu dor controlada, inchaço visível e o lembrete de que a força ainda fica atrás da ambição.",
        image: "images/Day61.jpg",
        link: "posts/day-61.html"
    },
   {
        tag: "Semana 9",
        date: "15 Jan 2026",
        pain: "3/10",
        swelling: "4/10",
        title: "Dia 60: Força Voltando, Atenção Necessária",
        description: "O sono está melhorando, os treinos estão expandindo e a vida diária parece mais normal novamente. O joelho permite mais, mas a fraqueza e a fadiga ainda exigem foco e intenção a cada passo.",
        image: "images/Day60.jpg",
        link: "posts/day-60.html"
    },
   {
        tag: "Semana 9",
        date: "14 Jan 2026",
        pain: "4/10",
        swelling: "4/10",
        title: "Dia 59: De Volta Sobre as Duas Pernas",
        description: "Um dia de marco, cheio de nervosismo, alívio e a confirmação de que o trabalho está dando resultado. As muletas ficaram oficialmente para trás, o progresso superou as expectativas e a próxima fase da recuperação ficou clara. A dor apareceu, mas desta vez veio com propósito.",
        image: "images/Day59.jpg",
        link: "posts/day-59.html"
    },
   {
        tag: "Semana 9",
        date: "13 Jan 2026",
        pain: "2/10",
        swelling: "4/10",
        title: "Dia 58: O Caminho Longo de Volta",
        description: "A etapa final da viagem foi marcada por exaustão, disciplina e perspectiva. O joelho aguentou melhor do que o esperado no voo mais longo, e o dia terminou com descanso, familiaridade e histórias compartilhadas que tornaram o processo menos solitário.",
        image: "images/Day58.jpg",
        link: "posts/day-58.html"
    },
   {
        tag: "Semana 9",
        date: "12 Jan 2026",
        pain: "2/10",
        swelling: "4/10",
        title: "Dia 57: Gratidão, Encerramento e Movimento à Frente",
        description: "Um início centrado, uma despedida significativa e um dia de viagem mais tranquilo do que o esperado. A disciplina voltou pela manhã, a perspectiva se aprofundou no final, e o joelho lidou com a jornada com mais maturidade do que antes.",
        image: "images/Day57.jpg",
        link: "posts/day-57.html"
    },
   {
        tag: "Semana 9",
        date: "12 Jan 2026",
        pain: "4/10",
        swelling: "7/10",
        title: "Reflexão da Viagem: O Que Essa Jornada Me Ensinou Sobre Recuperação",
        description: "Essa jornada foi um teste prolongado da recuperação em condições imperfeitas. Viagens constantes, fadiga, multidões, rotinas quebradas e carga emocional pressionaram o joelho repetidamente, mas em vez de quebrar o progresso, esclareceram como a recuperação realmente funciona. A viagem substituiu o medo por compreensão, a rigidez por adaptação e o ego por consciência.",
        image: "images/Day57r.jpg",
        link: "posts/day-57r.html"
    },
   {
        tag: "Semana 8",
        date: "11 Jan 2026",
        pain: "4/10",
        swelling: "7/10",
        title: "Dia 56: Fechando o Ciclo, Forçando o Limite",
        description: "O último dia inteiro começou com disciplina e intenção, e aos poucos se transformou em uma despedida longa e exigente de Tóquio. As rotinas de recuperação foram feitas corretamente, mas o joelho foi claramente exigido. Uma mistura justa de gratidão, excesso, fadiga e encerramento.",
        image: "images/Day56.jpg",
        link: "posts/day-56.html"
    },
   {
        tag: "Semana 8",
        date: "10 Jan 2026",
        pain: "3/10",
        swelling: "5/10",
        title: "Dia 55: Fé, Flexão e Soltar um Pouco",
        description: "Um começo rígido deu lugar a um dia surpreendentemente positivo. O trabalho de flexão foi desconfortável e o progresso pareceu mais lento do que o esperado, mas a perspectiva mudou com a cultura, o simbolismo e os momentos em família. O joelho terminou o dia cansado, mas calmo.",
        image: "images/Day55.jpg",
        link: "posts/day-55.html"
    },

    {
    tag: "Semana 8",
    date: "9 Jan 2026",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 54: Caminhando com Mais Liberdade, Indo Mais Devagar",
    description: "Uma manhã mais leve deu lugar a um dia cheio de estímulos sensoriais. A confiança ao caminhar aumentou, mesmo com a extensão parecendo menos confiável. Menos muletas trouxeram mais liberdade, mas também exigiram mais paciência e controle. O joelho foi desafiado, mas as experiências valeram a pena.",
    image: "images/Day54.jpg",
    link: "posts/day-54.html"
},
{
    tag: "Semana 8",
    date: "8 Jan 2026",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 53: Pegando Força Emprestada das Montanhas",
    description: "Um começo cedo e um trajeto longo e exigente testaram tanto a paciência quanto a resistência. A natureza, a história e a filosofia trouxeram perspectiva, mesmo enquanto a logística e a fadiga empurravam os limites. O joelho aguentou, mas o dia claramente pediu mais recuperação do que recebeu.",
    image: "images/Day53.jpg",
    link: "posts/day-53.html"
},
{
    tag: "Semana 8",
    date: "7 Jan 2026",
    pain: "2/10",
    swelling: "4/10",
    title: "Dia 52: De Volta à Rotina, De Volta à Multidão",
    description: "O descanso valeu a pena. Voltar a uma rotina estruturada trouxe alívio perceptível, mesmo com o dia se transformando em mais um longo período de caminhada e estímulos. A energia estava lá, o joelho colaborou razoavelmente bem, e o equilíbrio entre disciplina e prazer pareceu mais próximo do ideal.",
    image: "images/Day52.jpg",
    link: "posts/day-52.html"
},
{
    tag: "Semana 8",
    date: "6 Jan 2026",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 51: Começos Lentos, Grandes Cidades",
    description: "Um início deliberadamente mais lento ajudou a reajustar o joelho após a sobrecarga de ontem. Mesmo sem fisioterapia, um ritmo cuidadoso manteve tudo administrável ao longo de um dia inteiro de turismo. Tóquio impressionou, a fadiga se acumulou, e o joelho lembrou que a recuperação ainda precisa de planejamento.",
    image: "images/Day51.jpg",
    link: "posts/day-51.html"
},
{
    tag: "Semana 8",
    date: "5 Jan 2026",
    pain: "4/10",
    swelling: "7/10",
    title: "Dia 50: Empolgação, Realidade e uma Lição Muito Clara",
    description: "A adrenalina da viagem carregou a manhã, mas o joelho lembrou quem dita as regras. Mesmo voos curtos ainda provocam inchaço significativo quando a recuperação é adiada. O dia terminou bem, mas não sem um forte lembrete de que a disciplina durante viagens importa.",
    image: "images/Day50.jpg",
    link: "posts/day-50.html"
},
{
    tag: "Semana 7",
    date: "4 Jan 2026",
    pain: "3/10",
    swelling: "4/10",
    title: "Dia 49: Forçando, Depois Protegendo",
    description: "Um começo motivado deu lugar a uma contenção inteligente. Mesmo com uma manhã forte e uma agenda familiar cheia, escolher apoio e recuar quando necessário manteve o joelho tranquilo. O dia terminou com fechamento, tanto físico quanto mental, à medida que a viagem se aproximava do fim.",
    image: "images/Day49.jpg",
    link: "posts/day-49.html"
},
{
    tag: "Semana 7",
    date: "3 Jan 2026",
    pain: "2/10",
    swelling: "4/10",
    title: "Dia 48: Aprendendo a Ser Mais Gentil com o Processo",
    description: "Uma manhã mais lenta abriu espaço para a autocrítica, mas também para a clareza. Ao escolher o descanso em vez da obrigação, o joelho respondeu positivamente. O dia reforçou uma lição importante: a recuperação melhora quando esforço e compaixão estão em equilíbrio.",
    image: "images/Day48.jpg",
    link: "posts/day-48.html"
},
{
    tag: "Semana 7",
    date: "2 Jan 2026",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 47: História, Fadiga e Não Pular o Básico",
    description: "Um dia completo misturando rotina, história e tempo em família. O joelho se manteve razoavelmente bem durante caminhadas e períodos em pé, com o inchaço presente, mas controlado. A maior vitória veio de manter a consistência, mesmo com a energia baixa.",
    image: "images/Day47.jpg",
    link: "posts/day-47.html"
},
{
    tag: "Semana 7",
    date: "1 Jan 2026",
    pain: "2/10",
    swelling: "4/10",
    title: "Dia 46: Deixando o Ano Começar com Calma",
    description: "Um verdadeiro dia de descanso permitiu que o joelho assentasse. Sem academia ou fisioterapia, o movimento ficou mais fácil, o inchaço se manteve administrável e a rigidez se resolveu rapidamente com repouso. Uma noite tranquila, focada na família, encerrou o dia da forma certa.",
    image: "images/Day46.jpg",
    link: "posts/day-46.html"
},
{
    tag: "Semana 7",
    date: "31 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 45: Fechando o Ano, Escolhendo Esperança",
    description: "Um dia equilibrado, moldado por contenção consciente e momentos significativos. Ao escolher o descanso em vez da atividade, o joelho se manteve controlado, e o ano se encerrou com gratidão, perspectiva e uma intenção clara para o que vem a seguir.",
    image: "images/Day45.jpg",
    link: "posts/day-45.html"
},
{
    tag: "Semana 7",
    date: "30 Dez 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 44: Sentindo-se Menos Quebrado",
    description: "Um dia cheio, com muitas viagens, misturando rotinas de recuperação e momentos significativos em família. Apesar da fadiga e do inchaço, a confiança funcional aumentou. Caminhar com uma muleta e lidar com pequenas tarefas de forma independente marcou uma mudança silenciosa, mas importante.",
    image: "images/Day44.jpg",
    link: "posts/day-44.html"
},
{
    tag: "Semana 7",
    date: "29 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 43: Escolhendo Descanso em Vez de Persistência",
    description: "Um dia mais lento, com boas intenções, ainda assim acabou cansativo. Mesmo com menos passeios e escadas leves, tudo se somou, e o simples ato de ficar em pé sem ter onde sentar se tornou o maior desgaste. Hoje reforçou o quanto é importante proteger a energia, não apenas o joelho.",
    image: "images/Day43.jpg",
    link: "posts/day-43.html"
},
{
    tag: "Semana 6",
    date: "28 Dez 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 42: Em Pé com Mais Confiança, Ainda Escolhendo Cautela",
    description: "Um passo funcional significativo marcou o dia, equilibrado por cautela contínua. Ficar em pé e caminhar de forma independente trouxe empoderamento, mesmo com viagens, dias longos e atividade social elevando novamente o inchaço. O progresso é real, mas a disciplina ainda importa.",
    image: "images/Day42.jpg",
    link: "posts/day-42.html"
},
{
    tag: "Semana 6",
    date: "27 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 41: Ouvindo com Mais Atenção",
    description: "Dormir melhor trouxe mais consciência do que alívio. Um novo tipo de dor e sensações desconhecidas mudaram o foco para cautela e observação. Escolher descansar, adaptar planos e evitar sobrecarga se mostrou a decisão certa hoje.",
    image: "images/Day41.jpg",
    link: "posts/day-41.html"
},
{
    tag: "Semana 6",
    date: "26 Dez 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 40: Aprendendo a Respeitar o Descanso",
    description: "Um começo cedo, fadiga acumulada e mais um dia intenso de viagem reforçaram a mesma mensagem dos últimos dias. O progresso continua, mas a recuperação precisa de descanso mais intencional. O joelho segue colaborando, mas apenas quando eu faço a minha parte.",
    image: "images/Day40.jpg",
    link: "posts/day-40.html"
},
{
    tag: "Semana 6",
    date: "25 Dez 2025",
    pain: "4/10",
    swelling: "6/10",
    title: "Dia 39: Quando o Descanso Vira Esforço em Silêncio",
    description: "Um dia pensado para descansar acabou, aos poucos, se transformando em mais atividade do que o planejado. O Natal trouxe alegria e momentos de calma, mas a curiosidade e o embalo levaram a exageros. O joelho respondeu claramente, lembrando que até boas intenções precisam de limites.",
    image: "images/Day39.jpg",
    link: "posts/day-39.html"
},
{
    tag: "Semana 6",
    date: "24 Dez 2025",
    pain: "2/10",
    swelling: "4/10",
    title: "Dia 38: Vendo Tudo de Outro Lugar",
    description: "Um dia mais lento e contemplativo, moldado por descanso, viagem e uma mudança inesperada de perspectiva. O uso de cadeira de rodas reduziu o esforço físico e o inchaço, ao mesmo tempo em que despertou um senso mais profundo de gratidão e humildade.",
    image: "images/Day38.jpg",
    link: "posts/day-38.html"
},
{
    tag: "Semana 6",
    date: "23 Dez 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 37: Pequenas Vitórias, Saídas Inteligentes",
    description: "Um dia de treino simples, mas significativo, trouxe um avanço técnico importante na extensão. A energia seguiu limitada, e a fadiga chegou rápido durante as saídas. Saber a hora de se afastar se mostrou tão valioso quanto seguir em frente.",
    image: "images/Day37.jpg",
    link: "posts/day-37.html"
},
{
    tag: "Semana 6",
    date: "22 Dez 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 36: Voltando a se Mover, Mais Devagar, Mas em Frente",
    description: "Um dia estável, focado em movimento e ajustes, em vez de forçar limites. O ciclismo continuou melhorando, o inchaço persistiu desde ontem, e a viagem adicionou sua camada habitual de fadiga. Nada dramático, mas o ritmo foi aos poucos retornando.",
    image: "images/Day36.jpg",
    link: "posts/day-36.html"
},

{
    tag: "Semana 5",
    date: "21 Dez 2025",
    pain: "4/10",
    swelling: "7/10",
    title: "Dia 35: Um Marco Conquistado, Um Limite Excedido",
    description: "Um grande marco físico pela manhã aumentou a confiança, mas o dia passou muito além de limites seguros. O progresso foi real, mas a fadiga, as multidões e longas horas em pé me lembraram que a recuperação ainda precisa de limites.",
    image: "images/Day35.jpg",
    link: "posts/day-35.html"
},
{
    tag: "Semana 5",
    date: "20 Dez 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 34: Ferramentas Novas, Multidões de Sempre",
    description: "Um começo cedo e uma nova ferramenta de recuperação trouxeram estrutura de volta ao dia. O trabalho de fisioterapia manteve a consistência, mas as caminhadas, as multidões e a fadiga pós-viagem mantiveram o inchaço alto. O progresso continua — só com mais atrito do que o ideal.",
    image: "images/Day34.jpg",
    link: "posts/day-34.html"
},
{
    tag: "Semana 5",
    date: "19 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 33: Testado Pela Viagem, Sustentado Pela Paciência",
    description: "Privação severa de sono e a fricção da viagem empurraram o dia para o modo sobrevivência. O estresse veio mais da logística do que do joelho, que aguentou razoavelmente bem. As maiores lições vieram da preparação, do gerenciamento de multidões e de uma ajuda inesperada.",
    image: "images/Day33.jpg",
    link: "posts/day-33.html"
},
{
    tag: "Semana 5",
    date: "18 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 32: Modo Sobrevivência, Ativado",
    description: "Um dia de viagem longa que testou mais a resistência do que o joelho em si. Improvisos inteligentes ajudaram a lidar com a rigidez, enquanto o inchaço permaneceu presente, porém controlado. A exaustão dominou, e a recuperação virou prioridade no segundo em que aterrissamos.",
    image: "images/Day32.jpg",
    link: "posts/day-32.html"
},
{
    tag: "Semana 5",
    date: "17 Dez 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 31: Voos Longos, Paciência Ainda Maior",
    description: "O dia de viagem virou um teste de resistência, mas não foi o desastre que eu temia. Um bom planejamento, suporte para mobilidade e hábitos inteligentes de recuperação mantiveram tudo sob controle. O inchaço apareceu, mas foi administrável com os ajustes certos.",
    image: "images/Day31.jpg",
    link: "posts/day-31.html"
},
{
    tag: "Semana 5",
    date: "16 Dez 2025",
    pain: "3/10",
    swelling: "4/10",
    title: "Dia 30: Embalo, Depois Movimento",
    description: "Uma manhã forte e estruturada trouxe progresso tangível na mobilidade e um plano claro para as próximas semanas. Depois, o dia mudou para modo viagem, onde o estresse substituiu a estrutura, mas os sistemas de apoio ajudaram a suavizar as arestas.",
    image: "images/Day30.jpg",
    link: "posts/day-30.html"
},
{
    tag: "Semana 5",
    date: "15 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 29: Progresso Antes da Pausa",
    description: "Um dia longo e exigente, marcado por fadiga, preparação e um otimismo cauteloso. Mesmo com o cansaço chegando cedo, o trabalho de mobilidade e ativação continuou a dar resultado. A caminhada melhorou, a confiança subiu, e o foco começou, aos poucos, a mudar para como gerenciar a recuperação durante as viagens que vêm pela frente.",
    image: "images/Day29.jpg",
    link: "posts/day-29.html"
},
{
    tag: "Semana 4",
    date: "14 Dez 2025",
    pain: "2/10",
    swelling: "4/10",
    title: "Dia 28: Descanso, Ritmo e Mantendo a Linha",
    description: "Um dia bem descansado, voltado para equilíbrio em vez de forçar. Movimento leve, tempo social e descanso em família mantiveram tudo estável. O joelho reagiu com um pouco de inchaço, mas nada inesperado ou difícil de controlar.",
    image: "images/Day28.jpg",
    link: "posts/day-28.html"
},
{
    tag: "Semana 4",
    date: "13 Dez 2025",
    pain: "3/10",
    swelling: "4/10",
    title: "Dia 27: Mais Leve, Mais Forte e um Pouco Confuso",
    description: "Dormir melhor e uma queda surpreendente na balança deram um tom reflexivo ao dia. A energia parece melhor, mesmo com a perda de massa ficando mais visível. A recuperação continua exigindo trocas, e o corpo segue reescrevendo as expectativas.",
    image: "images/Day27.jpg",
    link: "posts/day-27.html"
},
{
    tag: "Semana 4",
    date: "12 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 26: Um Vislumbre do Normal de Novo",
    description: "Menos rigidez, melhor movimento e uma melhora perceptível no humor deram o tom do dia. Orientação técnica clara, decisões cautelosas sobre as muletas e um momento de avanço na piscina fizeram este parecer genuinamente para frente.",
    image: "images/Day26.jpg",
    link: "posts/day-26.html"
},
{
    tag: "Semana 4",
    date: "11 Dez 2025",
    pain: "4/10",
    swelling: "7/10",
    title: "Dia 25: Avançando e Pagando o Preço",
    description: "O dia começou com uma melhora pequena, mas bem-vinda, e confirmou o impacto de uma fisioterapia consistente. O tratamento da manhã ajudou, mas um dia longo em pé fez o inchaço subir de novo. O progresso está aí — mas claramente vem com um custo.",
    image: "images/Day25.jpg",
    link: "posts/day-25.html"
},
{
    tag: "Semana 4",
    date: "10 Dez 2025",
    pain: "5/10",
    swelling: "6/10",
    title: "Dia 24: Rigidez, Verdade e Não Desistir",
    description: "O dia começou rígido e teimoso, com os ganhos de ontem sumindo mais rápido do que o esperado. A perda de peso ficou visível, a fisio ficou intensa e a diferença na ativação do quadríceps ficou impossível de ignorar. Progresso doloroso — mas progresso real.",
    image: "images/Day24.jpg",
    link: "posts/day-24.html"
},
{
    tag: "Semana 4",
    date: "9 Dez 2025",
    pain: "4/10",
    swelling: "6/10",
    title: "Dia 23: Um Lembrete de Que a Recuperação Não É Linear",
    description: "Um dia difícil que testou paciência e perspectiva. Mais rigidez, extensão limitada e um peso mental grande fizeram o progresso parecer distante. Ao mesmo tempo, o dia trouxe lembretes importantes sobre humildade, gratidão e o valor real de uma boa fisioterapia.",
    image: "images/Day23.jpg",
    link: "posts/day-23.html"
},
{
    tag: "Semana 4",
    date: "8 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 22: Três Semanas, Um Novo Chão Sob os Pés",
    description: "Três semanas pós-cirurgia chegaram mais rápido do que o esperado e trouxeram uma nova fase junto. Colocar mais peso pareceu menos físico e mais mental, exigindo atenção e confiança. A fadiga estava alta, e o joelho respondeu com rigidez e inchaço visíveis no fim do dia.",
    image: "images/Day22.jpg",
    link: "posts/day-22.html"
},
{
    tag: "Semana 3",
    date: "7 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 21: Quando a Recuperação Revida",
    description: "Um dia mais quieto revelou o custo de pequenas quebras na rotina. Menos trabalho de recuperação, uma soneca durante o dia e um pouco de vinho pareceram se somar. A fadiga aumentou, o sono piorou e o joelho ficou visivelmente mais rígido.",
    image: "images/Day21.jpg",
    link: "posts/day-21.html"
},

{
    tag: "Semana 3",
    date: "6 Dez 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 20: A Energia É o Verdadeiro Fator Limitante",
    description: "O dia começou forte, com uma rotina matinal completa, mas a fadiga rapidamente se tornou a principal limitação assim que saí e passei a ficar em pé. O joelho aguentou razoavelmente bem, mas a energia geral caiu rápido. Hoje deixou claro que a recuperação agora é tanto sobre resistência quanto sobre a própria articulação.",
    image: "images/Day20.jpg",
    link: "posts/day-20.html"
},
{
    tag: "Semana 3",
    date: "5 Dez 2025",
    pain: "4/10",
    swelling: "4/10",
    title: "Dia 19: A Mobilidade Assume o Comando",
    description: "Um dia sólido e produtivo, com foco em mobilidade. A extensão está praticamente lá, mas a flexão segue sendo o principal desafio. Melhores posições para dormir estão ajudando na recuperação.",
    image: "images/Day19.jpg",
    link: "posts/day-19.html"
},
{
    tag: "Semana 3",
    date: "4 Dez 2025",
    pain: "5/10",
    swelling: "4/10",
    title: "Dia 18: Quando os Nervos Falam",
    description: "A melhora continuou, mas a sensibilidade nervosa se fez presente. Um lembrete direto de que a recuperação não é apenas muscular ou mecânica — o sistema nervoso também precisa ser reeducado.",
    image: "images/Day18.jpg",
    link: "posts/day-18.html"
},
{
    tag: "Semana 3",
    date: "3 Dez 2025",
    pain: "2/10",
    swelling: "4/10",
    title: "Dia 17: Clareza e Confiança",
    description: "A saúde se estabilizou, a confiança voltou e a clareza substituiu o medo. Sessões fortes de fisioterapia e um plano claro para progressão de carga marcaram um ponto de virada importante.",
    image: "images/Day17.jpg",
    link: "posts/day-17.html"
},
{
    tag: "Semana 3",
    date: "2 Dez 2025",
    pain: "4/10",
    swelling: "4/10",
    title: "Dia 16: Um Susto e Reafirmação",
    description: "Fadiga, irritação e febre provocaram um susto, mudando o foco da recuperação para o monitoramento da saúde. Novos equipamentos de recuperação provaram seu valor.",
    image: "images/Day16.jpg",
    link: "posts/day-16.html"
},
{
    tag: "Semana 3",
    date: "1 Dez 2025",
    pain: "3/10",
    swelling: "5/10",
    title: "Dia 15: Assumindo o Controle",
    description: "A medicação terminou, e a responsabilidade passou totalmente para a disciplina e a rotina. Novas ferramentas de recuperação entraram em cena e a confiança cresceu.",
    image: "images/Day15.jpg",
    link: "posts/day-15.html"
},
{
    tag: "Semana 2",
    date: "30 Nov 2025",
    pain: "3/10",
    swelling: "4/10",
    title: "Dia 14: Sinais de Progresso, Custo da Fadiga",
    description: "Viagem, calor e fadiga acumulada se fizeram sentir. Apesar da exaustão e de novos desconfortos musculares, o alongamento consistente trouxe ganhos claros na extensão. Ferramentas de recuperação e apoios mais inteligentes começaram a entrar na conversa.",
    image: "images/Day14.jpg",
    link: "posts/day-14.html"
},
{
    tag: "Semana 2",
    date: "29 Nov 2025",
    pain: "4/10",
    swelling: "5/10",
    title: "Dia 13: Fazendo por Conta Própria",
    description: "Sem fisioterapia agendada, o Dia 13 exigiu autodisciplina. Os exercícios foram improvisados em meio à rotina familiar, o calor aumentou o inchaço e a contenção virou o desafio — nada de piscina, nada de álcool e atenção constante às escolhas alimentares.",
    image: "images/Day13.jpg",
    link: "posts/day-13.html"
},
{
    tag: "Semana 2",
    date: "28 Nov 2025",
    pain: "4/10",
    swelling: "4/10",
    title: "Dia 12: Primeira Viagem",
    description: "A primeira viagem desde a cirurgia mostrou que a mobilidade está voltando, mas o inchaço e a fadiga ainda vêm logo atrás. Viajar é possível com planejamento, elevação e gelo, enquanto o tempo social continua drenando mais energia do que o esperado.",
    image: "images/Day12.jpg",
    link: "posts/day-12.html"
},
{
    tag: "Semana 2",
    date: "27 Nov 2025",
    pain: "4/10",
    swelling: "7/10",
    title: "Dia 11: Energia Diferente, Resultados Reais",
    description: "O dia trouxe uma mudança perceptível com uma nova fisioterapeuta em casa. Mais intensidade, mais desconforto, mas também resultados mais claros. O inchaço diminuiu, a extensão melhorou e a estrutura do dia se traduziu em mais foco e produtividade.",
    image: "images/Day11.jpg",
    link: "posts/day-11.html"
},
{
    tag: "Semana 2",
    date: "26 Nov 2025",
    pain: "3/10",
    swelling: "7/10",
    title: "Dia 10: Rotina, Técnica e Limites",
    description: "O Dia 10 trouxe rotina, técnica melhor e mais um lembrete de limites. Aprender a andar corretamente com as muletas ajudou, mas dias sociais longos ainda cobram seu preço. O progresso é real — a exaustão e o inchaço também.",
    image: "images/Day10.jpg",
    link: "posts/day-10.html"
},
{
    tag: "Semana 2",
    date: "25 Nov 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 9: De Volta ao Mundo",
    description: "Hoje pareceu um avanço importante. A energia voltou, a academia se tornou possível novamente e a vida fora de casa recomeçou — mas com um custo. Pequenas vitórias vieram acompanhadas de fadiga real, mostrando o quão exigente a recuperação ainda é, mesmo quando o progresso parece visível.",
    image: "images/Day9.jpg",
    link: "posts/day-9.html"
},

{
    tag: "Semana 2",
    date: "24 Nov 2025",
    pain: "3/10",
    swelling: "6/10",
    title: "Dia 8: Checagem de Realidade",
    description: "O Dia 8 trouxe melhor controle da dor, mais foco no trabalho e uma dose de realidade vinda da fisio: a recuperação vai levar mais tempo do que o esperado. Apesar do choque com o cronograma, cada sessão de fisioterapia traz alívio e a segurança de que o progresso está acontecendo.",
    image: "images/Day8.jpg",
    link: "posts/day-8.html"
},
{
    tag: "Semana 1",
    date: "23 Nov 2025",
    pain: "4/10",
    swelling: "7/10",
    title: "Dia 7: Uma Semana Depois",
    description: "Uma semana depois. A dor está diminuindo, a medicação está chegando ao fim, mas a batalha mental agora é a parte mais difícil. O Dia 7 marca a transição de sobreviver à cirurgia para encarar a paciência, a rotina e o longo caminho pela frente.",
    image: "images/Day7.jpg",
    link: "posts/day-7.html"
},
{
    tag: "Semana 1",
    date: "22 Nov 2025",
    pain: "5/10",
    swelling: "6/10",
    title: "Dia 6: Rotina Acima da Inquietação",
    description: "O Dia 6 desacelerou tudo. Sono ruim e dor nas costas escancararam o custo da imobilidade, enquanto estrutura, rotina e exercícios leves trouxeram de volta uma sensação de controle. Um dia tranquilo em casa, focado em movimento, família e paciência.",
    image: "images/Day6.jpg",
    link: "posts/day-6.html"
},
{
    tag: "Semana 1",
    date: "21 Nov 2025",
    pain: "5/10",
    swelling: "7/10",
    title: "Dia 5: Primeira Fisio e Ruído Mental",
    description: "O Dia 5 trouxe estrutura: redução da medicação, início da fisioterapia e o confronto com o caos mental que acompanha a dor e a quebra de rotina. O progresso físico é real, mas as oscilações emocionais e a necessidade de mais organização ficaram igualmente claras.",
    image: "images/Day5.jpg",
    link: "posts/day-5.html"
},
{
    tag: "Semana 1",
    date: "20 Nov 2025",
    pain: "6/10",
    swelling: "8/10",
    title: "Dia 4: Testando Limites",
    description: "O Dia 4 foi sobre testar limites — reduzir analgésicos, retomar a vida social e iniciar movimento de verdade. O corpo respondeu com rigidez, fadiga e sono ruim, lembrando que o progresso não é linear e que a recuperação ainda exige disciplina.",
    image: "images/Day4.jpg",
    link: "posts/day-4.html"
},
{
    tag: "Semana 1",
    date: "19 Nov 2025",
    pain: "8/10",
    swelling: "9/10",
    title: "Dia 3: Progresso, Respostas e Confiança",
    description: "O dia trouxe a primeira sensação real de progresso. Menos dor, mais controle e respostas claras do cirurgião transformaram confusão em confiança. Ver o ferimento, entender a escolha do enxerto e iniciar movimento adequado marcaram uma virada mental e física importante.",
    image: "images/Day3L.jpg",
    link: "posts/day-3.html"
},
{
    tag: "Semana 1",
    date: "18 Nov 2025",
    pain: "10/10",
    swelling: "10/10",
    title: "Dia 2: Dor, Dúvida e Pequenas Vitórias",
    description: "O Dia 2 foi marcado por dor intensa, fadiga e frustração — tentando estar presente no aniversário da minha esposa enquanto o corpo reagia com força. Entre orientações conflitantes de recuperação, desconforto com a extensão e breves momentos de alívio, o dia terminou com uma pequena vitória: encontrar uma posição que permitiu dormir.",
    image: "images/Day2.jpg",
    link: "posts/day-2.html"
},
{
    tag: "Semana 1",
    date: "17 Nov 2025",
    pain: "1/10",
    swelling: "10/10",
    title: "Dia 1: Dor, Inchaço e Aprendendo a Ter Paciência",
    description: "O primeiro dia completo após a cirurgia trouxe inchaço, dor, rotina de medicação e desligamento muscular total. Entre aprender a usar as muletas, atravessar a névoa e contar com família e amigos, o Dia 1 foi sobre gerenciar o desconforto e aceitar o quão vulnerável a recuperação realmente parece.",
    image: "images/Day1.jpg",
    link: "posts/day-1.html"
},
{
    tag: "Cirurgia",
    date: "16 Nov 2025",
    pain: "1/10",
    swelling: "10/10",
    title: "Dia 0: Cirurgia",
    description: "O dia da cirurgia foi um borrão de nervosismo, anestesia e perda de controle. O procedimento correu bem, mas o verdadeiro desafio começou imediatamente depois.",
    image: "images/Day0.jpg",
    link: "posts/day-0.html"
},
{
    tag: "Pré-Op",
    date: "15 Nov 2025",
    pain: "4/10",
    swelling: "8/10",
    title: "Dia -1: Esperar, Confiar, Soltar",
    description: "O dia antes da cirurgia foi uma mistura de caos familiar e decisões difíceis. Aceitar uma recuperação mais longa em troca de fazer tudo do jeito certo.",
    image: "images/DayM1.jpg",
    link: "posts/day-m1.html"
},


{
     tag: "Pré-Op",
     date: "14 Nov 2025",
     pain: "4/10",
     swelling: "4/10",
     title: "Dia -2: Pronto-Socorro",
     description: "Um longo dia no pronto-socorro: dor, espera, incerteza e pequenos momentos de alívio. Ver outras pessoas em situações muito piores me lembrou de ser grato.",
     image: "images/DayM2.jpg",
     link: "posts/day-m2.html"
}
];

