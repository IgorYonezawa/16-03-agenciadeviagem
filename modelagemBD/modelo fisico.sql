create database acaicom;

use acaicom;

CREATE TABLE Destinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cidade VARCHAR(100) NOT NULL,
    acomodacoes INT NOT NULL,
    imagem VARCHAR(255) NOT NULL
);

CREATE TABLE Ofertas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    avaliacao INT NOT NULL,
    reviews INT NOT NULL,
    precoOriginal DECIMAL(10, 2) NOT NULL,
    precoPromo DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(255) NOT NULL
);

CREATE TABLE Acomodacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    avaliacao INT NOT NULL,
    reviews INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(255) NOT NULL
);

use acaicom;