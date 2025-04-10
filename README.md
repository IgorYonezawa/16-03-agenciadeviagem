# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

**O objetivo é desenvolver uma solução inicial para uma agência de viagens, estruturando tanto a interface quanto o planejamento do banco de dados, criando uma base sólida para o projeto alinhada às melhores práticas de desenvolvimento web.**

### Integrante do Projeto

<table border="1" align="center">
    <tr>
        <th>Igor Yonezawa</th>
    </tr>
    <tr>
        <td><img src="https://github.com/user-attachments/assets/d9b6eb93-c317-4dd3-9ad5-f7d71cc8cb97" width="120"></td>
    </tr>
    <tr>
        <th>Autor</th>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/igoryonezawa">@igoryonezawa</a></td>
    </tr>
</table>


# Estrutura do Projeto

## 1. Interface de Usuário
### A interface do usuário foi desenvolvida utilizando HTML, CSS e Bootstrap. A página inicial contém as seguintes seções:  
**Navegação:** Barra de navegação responsiva com links para as seções do site.

**Hero Section:** Uma seção destacada com um título chamativo e um formulário de busca para destinos.

**Destaques:** Exibição dos principais destinos de viagem.

**Ofertas:** Listagem de ofertas especiais para o fim de semana.

**Acomodações:** Exibição de casas e apartamentos recomendados.



## 2.Desenvolvimento

## Imagens do Projeto

<table>
    <thead>
        <tr>
            <th>Desktop</th>
            <th>Mobile</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="https://github.com/IgorYonezawa/16-03-agenciadeviagem/blob/main/imagens/Desktop.png" alt="Desktop Version"></td>
            <td><img src="https://github.com/IgorYonezawa/16-03-agenciadeviagem/blob/main/imagens/Mobile.png" alt="Mobile Version"></td>
        </tr>
    </tbody>
</table>

## 3.Estrutura de Pastas

```
projeto-agencia-viagens
├── css
│   └── style.css                 # Arquivo de estilos CSS
├── js
│   └── script.js                 # Arquivo JavaScript para carregar dados dinâmicos
├── imagens                      # Pasta contendo todas as imagens utilizadas no projeto
│   ├── bandeiras
│   │   └── br@.png
│   │   └── es@.png
│   │   └── us@.png
│   ├── belém
│   │   └── basilica-nazare.png
│   │   └── belém.png
│   ├── bragança
│   │   └── bragança.png
│   ├── marajó
│   │   └── marajó.png
│   ├── monte-alegre
│   │   └── monte-alegre.png
│   ├── salinas
│   │   └── Atalho.png
│   │   └── farol-velho.png
│   │   └── maçarico.png
│   │   └── Resort.png
│   │   └── salinas.png
│   │   └── salinas-condominio.png
│   ├── santarém
│   │   └── cabana-alter-do-chão.png
│   │   └── casa-da-arvore.png
│   │   └── piramide.png
│   │   └── santarém.png
│   ├── GrafismoMFinal.png
│   ├── favicon.ico
│   ├── Desktop.png
│   ├── Mobile.png
│   ├── AçaíSlayerStudio.png
│   ├── bandeira-do-para.png
├── modelagemBD
│   ├── diagrama_conceitual.png    # Diagrama conceitual do banco de dados
│   ├── diagrama_logico.png        # Diagrama lógico do banco de dados
│   ├── diagrama_fisico.png        # Diagrama físico do banco de dados
│   └── script.sql                # Script SQL para criação do banco de dados
├── index.html                    # Página inicial do projeto
└── README.md                     # Este arquivo

10 directories, 32 files
```

### Site Responsivo

Um site funcional e responsivo com 1 página, 3 linguas(<img src="./imagens/bandeiras/br@.png" alt="br" width="18" height="12">|<img src="./imagens/bandeiras/es@.png" alt="esp" width="18" height="12">|<img src="./imagens/bandeiras/us@.png" alt="usa" width="18" height="12">), utilizando HTML, CSS, JS e Bootstrap.

## 4.Planejamento do Banco de Dados

O planejamento do banco de dados inclui a definição das tabelas e seus relacionamentos para armazenar informações relevantes da agência de viagens. Aqui está um esboço das tabelas principais:

### Tabelas Principais
**Destinos:**

Armazena informações sobre os destinos de viagem.

Campos: `id`, `cidade`, `acomodacoes`, `imagem`.

**Ofertas:**

Armazena informações sobre as ofertas de viagem.

Campos: `id`, `nome`, `local`, `avaliacao`, `reviews`, `precoOriginal`, `precoPromo`, `imagem`, `destino_id` (chave estrangeira para Destinos).

**Acomodacoes:**

Armazena informações sobre as acomodações disponíveis.

Campos: `id`, `nome`, `local`, `avaliacao`, `reviews`, `preco`, `imagem`, `oferta_id` (chave estrangeira para Ofertas).

### Relacionamentos

Um Destino pode ter várias Ofertas (relacionamento **1** para **N**).

Uma Oferta pode ter várias Acomodações (relacionamento **1** para **N**).

#### Modelo Conceitual

![image](https://github.com/IgorYonezawa/16-03-agenciadeviagem/blob/main/modelagemBD/modelo%20conceitual.png)

#### Modelo Logico

![image](https://github.com/IgorYonezawa/16-03-agenciadeviagem/blob/main/modelagemBD/modelo%20logico.png)

#### Modelo Físico

Pode ser encontrado em <a href="https://github.com/IgorYonezawa/16-03-agenciadeviagem/blob/main/modelagemBD/modelo%20fisico.sql">./modelagemBD/modelo fisico.sql</a>

### Versionamento

Utilizei Git para versionar o projeto, com commits organizados e publicados em um repositório público no GitHub.

## Tecnologias Utilizadas

-   **Front-end:** HTML, CSS, Bootstrap, JS
-   **Back-end:** 
-   **Banco de Dados:** BRModelo | MySQL
-   **Ferramentas de Gerenciamento:** Discord, Git, GitHub e Netlify


## Link do Projeto

> <a href="https://saboreieopara.netlify.app/">Link do site</a>

## Link do Video

> <a href="https://www.loom.com/share/8ebff2de53fb4bc6962f33190bf7f403">Link do video</a>
