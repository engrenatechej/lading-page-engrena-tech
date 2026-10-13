// Substitua pelas credenciais do seu painel do Supabase (Project Settings > API)
const SUPABASE_URL = 'https://dbjqqftlxlmvlghhjcnw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRianFxZnRseGxtdmxnaGhqY253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NDIwMTksImV4cCI6MjEwNzQxODAxOX0.LzTs253EDiVE4eHMl1Mqmvkk5OlQ6AVk1bdO2GgG2wg';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const container = document.getElementById('case-list-container');

async function carregarProjetos() {
    // 1. Buscar os dados na tabela do Supabase (ex: tabela 'projetos')
    const { data: projetos, error } = await _supabase
        .from('projetos')
        .select('*')
        .order('id', { ascending: false });

    if (error) {
        console.error('Erro ao buscar projetos do Supabase:', error);
        container.innerHTML = '<p>Erro ao carregar o portfólio. Tente novamente mais tarde.</p>';
        return;
    }

    if (!projetos || projetos.length === 0) {
        container.innerHTML = '<p>Nenhum projeto cadastrado no momento.</p>';
        return;
    }

    // Limpar o container antes de renderizar
    container.innerHTML = '';

    // 2. Montar cada artigo/cartão dinamicamente
    projetos.forEach((projeto, index) => {
        const article = document.createElement('article');
        article.classList.add('case');

        // Gerar as imagens do carrossel (de 1 a 3 imagens armazenadas num array text[] no Supabase)
        let imagensHtml = '';
        if (projeto.imagens && projeto.imagens.length > 0) {
            imagensHtml = `
                <div class="case-carrossel" id="carrossel-${index}">
                    ${projeto.imagens.map((imgUrl, imgIdx) => `
                        <img src="${imgUrl}" alt="${projeto.titulo}" class="carrossel-img ${imgIdx === 0 ? 'ativa' : ''}" />
                    `).join('')}
                </div>
            `;
        }

        article.innerHTML = `
            <div class="case-side">
                ${imagensHtml}
                <span class="card-index">${projeto.codigo_indice || '#ENG-PROJ'}</span>
                <h2>${projeto.titulo}</h2>
                <p>Cliente: ${projeto.cliente}</p>
                <div class="case-metrics">
                    <div><b>${projeto.metrica_1_valor}</b><span>${projeto.metrica_1_titulo}</span></div>
                    <div><b>${projeto.metrica_2_valor}</b><span>${projeto.metrica_2_titulo}</span></div>
                    <div><b>${projeto.metrica_3_valor}</b><span>${projeto.metrica_3_titulo}</span></div>
                </div>
                <p class="tags">${projeto.tags}</p>
            </div>
            <div class="case-body">
                <h3>Desafio</h3>
                <p>${projeto.desafio}</p>
                <h3>Solução</h3>
                <p>${projeto.solucao}</p>
                <h3>Resultado</h3>
                <p>${projeto.resultado}</p>
            </div>
        `;

        container.appendChild(article);

        // 3. Ativar o carrossel automático caso o projeto tenha mais de uma imagem
        if (projeto.imagens && projeto.imagens.length > 1) {
            let imagemAtual = 0;
            const imagensElements = document.querySelectorAll(`#carrossel-${index} .carrossel-img`);

            setInterval(() => {
                imagensElements[imagemAtual].classList.remove('ativa');
                imagemAtual = (imagemAtual + 1) % imagensElements.length;
                imagensElements[imagemAtual].classList.add('ativa');
            }, 4000); // Troca automática a cada 4 segundos
        }
    });
}

// Executar ao carregar a página
carregarProjetos();