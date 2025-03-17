[![Netlify Status](https://api.netlify.com/api/v1/badges/8b1c1495-21d6-493b-9d10-636badef857c/deploy-status)](https://app.netlify.com/sites/saboreieopara/deploys)

<p align="center">
    <img src="./imagens/AçaíSlayerStudio.png" alt="Açaí Icon" width="100" height="100">
</p>

# Projeto de Agência de Viagens COP30

Este é um projeto individual desenvolvido para o curso da Recode Pro. O objetivo deste projeto é criar a estrutura inicial de um site para uma agência de viagens fictícia, focando na apresentação visual e no planejamento do banco de dados. Nesta primeira etapa, não é necessário implementar funcionalidades dinâmicas ou sistemas interativos

## Objetivo

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




## Desenvolvimento da Solução

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

### Estrutura de Pastas

```
➜  tree
.
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
├── modelagemBD
│   ├── diagrama_conceitual.png    # Diagrama conceitual do banco de dados
│   ├── diagrama_logico.png        # Diagrama lógico do banco de dados
│   ├── diagrama_fisico.png        # Diagrama físico do banco de dados
│   └── script.sql                # Script SQL para criação do banco de dados
├── index.html                    # Página inicial do projeto
└── README.md                     # Este arquivo

10 directories, 28 files
```

### Site Responsivo

Um site funcional e responsivo com 1 página, 3 linguas(<img src="./imagens/bandeiras/br@.png" alt="br" width="18" height="12">|<img src="./imagens/bandeiras/es@.png" alt="esp" width="18" height="12">|<img src="./imagens/bandeiras/us@.png" alt="usa" width="18" height="12">), utilizando HTML, CSS, JS e Bootstrap.

### Banco de Dados

O banco de dados utilizando o BRModelo, criando os modelos conceitual e lógico. O script SQL das tabelas foi gerado e está disponível no repositório.

#### Modelo Conceitual

![image]()

#### Modelo Logico

![image]()

#### Modelo Físico

Pode ser encontrado em `Database/database.sql`

### Versionamento

Utilizei Git para versionar o projeto, com commits organizados e publicados em um repositório público no GitHub.

## Tecnologias Utilizadas

-   **Front-end:** HTML, CSS, Bootstrap, JS
-   **Back-end:** 
-   **Banco de Dados:** BRModelo | MySQL
-   **Ferramentas de Gerenciamento:** Discord, Git, GitHub e Netlify


## Link do Projeto

> <a href="https://saboreieopara.netlify.app/">Link do site</a>
