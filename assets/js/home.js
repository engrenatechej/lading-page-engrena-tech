function transitionText() {
  const titulo = document.getElementById("hero-title");
  const texto = document.getElementById("hero-text");

  const titulo_lista = [
    "Transforme o seu negócio com <em>soluções inteligentes</em>",
    "Automatizar é transformar <em>esforço</em> em <em>eficiência</em>",
    "O seu <em>tempo é dinheiro</em>, e nós somos o seu investimento",
  ];

  const texto_lista = [
    `<strong>As suas ideias têm potencial para transformar o seu negócio</strong>. Nós
    transformamos tecnologia em <strong>soluções inteligentes</strong> para tirar projetos do papel,
    conectar sistemas, criar novas oportunidades de crescimento e facilitar o seu
    processo. 
    <br>
    <br>
    Solicite um orçamento e descubra como <strong>podemos transformar sua ideia em realidade</strong>.`,
    `<strong>O seu esforço merece gerar resultados</strong>. Nós transformamos tecnologia em otimização para 
    simplificar tarefas, integrar sistemas e aproveitar melhor o seu tempo e recursos.
    <br>
    <br>
    Solicite um orçamento e descubra como <strong>podemos tornar sua rotina mais produtiva</strong>.`,
    `<strong>O seu tempo vale dinheiro</strong>. Nós transformamos tecnologia em eficiência para você reduzir 
    tarefas manuais, otimizar recursos e focar no que realmente impulsiona o seu negócio.
    <br>
    <br>
    Solicite um orçamento e descubra o que <strong>podemos automatizar por você</strong>.`,
  ];

  let indice = 0;

  setInterval(() => {
    titulo.classList.add("fade-out");
    texto.classList.add("fade-out");

    setTimeout(() => {
      indice = (indice + 1) % titulo_lista.length;
      titulo.innerHTML = titulo_lista[indice];
      texto.innerHTML = texto_lista[indice];
      titulo.classList.remove("fade-out");
      texto.classList.remove("fade-out");
    }, 600);
  }, 8000);
}

transitionText();

function transitionRules() {
  // Seleciona todos os elementos
  const rules = document.querySelectorAll(".group-section-rule span");

  let current = 0;

  function updateRule() {
    // Remove o laranja de todos os elementos
    rules.forEach((rule) => {
      rule.classList.remove("active");
    });

    // Ativa o elemento atual
    rules[current].classList.add("active");

    // Avança para o próximo elemento
    current = (current + 1) % rules.length;
  }

  // Executa imediatamente
  updateRule();

  // Repete a cada 8 segundos
  setInterval(updateRule, 8000);
}

transitionRules();