Projeto de Agência de Viagens
Este é um projeto individual desenvolvido para o curso da Recode Pro. O objetivo deste projeto é criar a estrutura inicial de um site para uma agência de viagens fictícia, focando na apresentação visual e no planejamento do banco de dados. Nesta primeira etapa, não é necessário implementar funcionalidades dinâmicas ou sistemas interativos.

Objetivo
O objetivo é desenvolver uma solução inicial para uma agência de viagens, estruturando tanto a interface quanto o planejamento do banco de dados, criando uma base sólida para o projeto alinhada às melhores práticas de desenvolvimento web.

Estrutura do Projeto
1. Interface de Usuário
A interface do usuário foi desenvolvida utilizando HTML, CSS e Bootstrap. A página inicial contém as seguintes seções:

Navegação: Barra de navegação responsiva com links para as seções do site.

Hero Section: Uma seção destacada com um título chamativo e um formulário de busca para destinos.

Destaques: Exibição dos principais destinos de viagem.

Ofertas: Listagem de ofertas especiais para o fim de semana.

Acomodações: Exibição de casas e apartamentos recomendados.

2. Planejamento do Banco de Dados
O planejamento do banco de dados inclui a definição das tabelas e seus relacionamentos para armazenar informações relevantes da agência de viagens. Aqui está um esboço das tabelas principais:

Tabelas Principais
Destinos:

Armazena informações sobre os destinos de viagem.

Campos: id, cidade, acomodacoes, imagem.

Ofertas:

Armazena informações sobre as ofertas de viagem.

Campos: id, nome, local, avaliacao, reviews, precoOriginal, precoPromo, imagem, destino_id (chave estrangeira para Destinos).

Acomodacoes:

Armazena informações sobre as acomodações disponíveis.

Campos: id, nome, local, avaliacao, reviews, preco, imagem, oferta_id (chave estrangeira para Ofertas).

Relacionamentos
Um Destino pode ter várias Ofertas (relacionamento 1 para N).

Uma Oferta pode ter várias Acomodações (relacionamento 1 para N).

Tecnologias Utilizadas
HTML5: Utilizado para a estruturação das páginas web.

CSS3: Utilizado para a estilização das páginas, com um arquivo CSS externo para melhor organização.

Bootstrap 5: Utilizado para garantir responsividade e facilitar o desenvolvimento da interface.

JavaScript: Utilizado para carregar dados dinamicamente nas seções de Destaques, Ofertas e Acomodações.

BRModelo: Utilizado para a modelagem do banco de dados.

Como Executar o Projeto
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/projeto-agencia-viagens.git
Abra o projeto:

Navegue até a pasta do projeto e abra o arquivo index.html no seu navegador.

Banco de Dados:

O script SQL para criação do banco de dados está disponível na pasta documentacao/script.sql.

Utilize um servidor MySQL para executar o script e criar o banco de dados.

Estrutura de Pastas
Copy
/projeto-agencia-viagens
├── /css
│   └── style.css                 # Arquivo de estilos CSS
├── /js
│   └── script.js                 # Arquivo JavaScript para carregar dados dinâmicos
├── /imagens                      # Pasta contendo todas as imagens utilizadas no projeto
├── /documentacao
│   ├── diagrama_conceitual.png    # Diagrama conceitual do banco de dados
│   ├── diagrama_logico.png        # Diagrama lógico do banco de dados
│   ├── diagrama_fisico.png        # Diagrama físico do banco de dados
│   └── script.sql                # Script SQL para criação do banco de dados
├── index.html                    # Página inicial do projeto
└── README.md                     # Este arquivo
Vídeo de Apresentação
Um vídeo de até 2 minutos foi gravado para apresentar o trabalho desenvolvido. No vídeo, são mostrados:

A interface criada (design e conteúdo).

Trechos do código (HTML, CSS e JavaScript).

Os diagramas do banco de dados e o script SQL gerado.

Breve comentário sobre o planejamento documentado.

Próximos Passos
Implementar funcionalidades dinâmicas, como busca e reservas.

Integrar o front-end com o back-end para carregar os dados do banco de dados.

Adicionar autenticação de usuários e sistema de reservas.

Autor
[Nome do Autor]
[Link para o GitHub]
[Link para o LinkedIn]
