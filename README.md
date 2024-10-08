# Desafio da Colab

Sistema de gerenciamento de uma maquina de sucos

## Tecnologias

As seguintes ferramentas e frameworks foram usados na construção do projeto:

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-black?style=flat-square&logo=docker)

## Link do deploy:

[testecolab.onrender.com](https://testecolab.onrender.com)

## Testes no Postman:

Caso queira ter acesso a todas as rotas de maneira mais prática, você pode acessar [clicando aqui](https://app.getpostman.com/join-team?invite_code=af8f33ee79c4c5c1c183b62388ad1ef2&target_code=93eff6fa01cd60a63bf1c1ebf483fd44)
PS: lembre de adicionar o valor da variavel HOST está rodando o link de deploy. Caso queira, mude para localhost

## Modo do desenvolvedor:

Para executar isso no modo dev, você deve usar o ambiente Node.

Então você tem que:

### Clonar esse repositório:

git@github.com:venyustech/juice-machine-back.git

### Instalar as dependencias:

$ npm install

### Adicionar .env

duplique a rota .env.exemple e renomeie apenas para ".env" - Dentro desse arquivo, mude "NODE_ENV=development_or_test" para "NODE_ENV=development"

### Adicionar .env.test

duplique a rota .env.exemple e renomeie apenas para ".env.test" - Dentro desse arquivo, mude "NODE_ENV=development_or_test" para "NODE_ENV=test"

### Rodar na sua máquina:

$ npm run migrate:dev && npm run dev

#### Rodar testes:

$ npm run test

### Rodar na sua máquina com Docker:

$ docker-compose up --build

##### E aproveite :)
