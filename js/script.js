document.addEventListener('DOMContentLoaded', () => {
    // Dados para Destaques
    const destaques = [
        { cidade: "Belém", acomodacoes: 81, imagem: "imagens/belém/belém.png" },
        { cidade: "Santarém", acomodacoes: 53, imagem: "imagens/santarém/santarém.png" },
        { cidade: "Ilha do Marajó", acomodacoes: 50, imagem: "imagens/marajó/marajó.png" },
        { cidade: "Salinas", acomodacoes: 16, imagem: "imagens/salinas/salinas.png" },
        { cidade: "Monte Alegre", acomodacoes: 14, imagem: "imagens/monte-alegre/monte-alegre.png" },
        { cidade: "Bragança", acomodacoes: 6, imagem: "imagens/bragança/bragança.png" }
    ];

    const destaquesContainer = document.getElementById('destaques-container');
    destaques.forEach(destino => {
        const card = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${destino.imagem}" class="card-img-top" alt="${destino.cidade}">
                    <div class="card-body">
                        <h5 class="card-title">${destino.cidade}</h5>
                        <p class="card-text">${destino.acomodacoes.toLocaleString()} acomodações</p>
                    </div>
                </div>
            </div>
        `;
        destaquesContainer.innerHTML += card;
    });

    // Dados para Ofertas
    const ofertas = [
        { 
            nome: "Apto - Basilica de Nazaré Belém",
            local: "Nazaré, Belém",
            avaliacao: 95,
            reviews: 41,
            precoOriginal: 644,
            precoPromo: 404,
            imagem: "imagens/belém/basilica-nazare.png"
        },
        { 
            nome: "Casa Humilde no Maçarico",
            local: "Maçarico, Salinas",
            avaliacao: 95,
            reviews: 41,
            precoOriginal: 644,
            precoPromo: 404,
            imagem: "imagens/salinas/maçarico.png"
        },
        { 
            nome: "Apartamento Simples com piscina",
            local: "Atalaia, Salinas",
            avaliacao: 95,
            reviews: 41,
            precoOriginal: 644,
            precoPromo: 404,
            imagem: "imagens/salinas/Atalho.png"
        },
        { 
            nome: "Casa na beira da Praia",
            local: "Farol-Velho, Salinas",
            avaliacao: 95,
            reviews: 41,
            precoOriginal: 644,
            precoPromo: 404,
            imagem: "imagens/salinas/farol-velho.png"
        },
        { 
            nome: "Resort Atalaia",
            local: "Atalaia, Salinas",
            avaliacao: 95,
            reviews: 41,
            precoOriginal: 644,
            precoPromo: 404,
            imagem: "imagens/salinas/Resort.png"
        },
        { 
            nome: "Condominio - Frente pro Atalaia",
            local: "Atalaia, Salinas",
            avaliacao: 95,
            reviews: 241,
            precoOriginal: 704,
            precoPromo: 304,
            imagem: "imagens/salinas/salinas-condominio.png"
        },
    ];

    const ofertasContainer = document.getElementById('ofertas-container');
    ofertas.forEach(oferta => {
        const card = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${oferta.imagem}" class="card-img-top" alt="${oferta.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${oferta.nome}</h5>
                        <p class="card-text">${oferta.local}</p>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-success">${oferta.avaliacao} Fabuloso</span>
                            <small>${oferta.reviews.toLocaleString()} avaliações</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-end">
                            <div>
                                <small class="text-muted text-decoration-line-through">R$ ${oferta.precoOriginal}</small>
                                <h4 class="text-primary mb-0">R$ ${oferta.precoPromo}</h4>
                            </div>
                            <button class="btn btn-primary">Reservar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        ofertasContainer.innerHTML += card;
    });

    // Dados para Acomodações
    const acomodacoes = [
        {
            nome: "Chalé Smart Plus",
            local: "Vila Alter do Chão, Santarém",
            avaliacao: 100,
            reviews: 326,
            preco: 1778,
            imagem: "imagens/santarém/cabana-alter-do-chão.png"
        },
        {
            nome: "Pirâmide Alter",
            local: "Vila Alter do Chão, Santarém",
            avaliacao: 98,
            reviews: 721,
            preco: 2034,
            imagem: "imagens/santarém/piramide.png"
        },
        {
            nome: "🏡🌴CASA DA ÁRVORE ALTER",
            local: "Vila Alter do Chão, Santarém",
            avaliacao: 82,
            reviews: 1721,
            preco: 3231,
            imagem: "imagens/santarém/casa-da-arvore.png"
        },
    ];

    const acomodacoesContainer = document.getElementById('acomodacoes-container');
    acomodacoes.forEach(acomodacao => {
        const card = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${acomodacao.imagem}" class="card-img-top" alt="${acomodacao.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${acomodacao.nome}</h5>
                        <p class="card-text">${acomodacao.local}</p>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-success">${acomodacao.avaliacao} Fabuloso</span>
                            <small>${acomodacao.reviews.toLocaleString()} avaliações</small>
                        </div>
                        <h4 class="text-primary">R$ ${acomodacao.preco}</h4>
                        <button class="btn btn-primary w-100">Reservar</button>
                    </div>
                </div>
            </div>
        `;
        acomodacoesContainer.innerHTML += card;
    });

    // Função para mudar o idioma
    const translations = {
        pt: {
            explore: "Explore a Amazônia nessa COP30",
            search: "Buscar",
            placeholder: "Para onde você vai?",
            highlights: "Conheça o Pará",
            offers: "Ofertas para o fim de semana",
            accommodations: "Casas e apartamentos que os hóspedes amam",
        },
        en: {
            explore: "Explore the Amazon at COP30",
            search: "Search",
            placeholder: "Where are you going?",
            highlights: "Discover Pará",
            offers: "Weekend deals",
            accommodations: "Homes and apartments loved by guests",
        },
        es: {
            explore: "Explora el Amazonas en la COP30",
            search: "Buscar",
            placeholder: "¿A dónde vas?",
            highlights: "Descubre Pará",
            offers: "Ofertas para el fin de semana",
            accommodations: "Casas y apartamentos que los huéspedes adoran",
        },
    };

    function changeLanguage(lang) {
        // Atualiza os textos da página
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.getAttribute('type') === 'text') {
                    element.setAttribute('placeholder', translations[lang][key]); // Atualiza placeholders
                } else {
                    element.textContent = translations[lang][key]; // Atualiza textos
                }
            }
        });

        // Atualiza a bandeira no dropdown
        const flag = document.querySelector('#navbarDropdownIdioma img');
        flag.setAttribute('src', `./imagens/bandeiras/${lang === 'pt' ? 'br' : lang === 'en' ? 'us' : 'es'}@.png`);
    }

    // Adiciona eventos aos itens do dropdown de idiomas
    document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang'); // Obtém o idioma selecionado
            changeLanguage(lang); // Muda o idioma
        });
    });

    // Define o idioma padrão
    changeLanguage('pt');

    // Adicionando funcionalidade para mudança de moeda
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const target = e.target.closest('.dropdown-item');
            if (target.closest('#navbarDropdownMoeda')) {
                document.querySelector('#navbarDropdownMoeda').textContent = target.textContent.trim();
            }
        });
    });
});