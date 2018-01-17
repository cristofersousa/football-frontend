# football

> Test Frontend Developer


## Requirements

``` bash
# Start

1. Install Node

> curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash
> sudo apt-get install -y nodejs

2. Install Yarn

> npm install --global yarn

```

## Build Setup

``` bash

# Start
>  git clone https://github.com/cristofersousa/football-frontend.git
>  cd footbal-frontend

# install dependencies
> yarn install

# serve with hot reload at localhost:8080
> yarn run dev

# build for production with minification
> yarn run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Teste Técnico

Para o teste técnico, vamos utilizar a API pública chamada <a href="https://www.football-data.org" target="_blank">football-data.org</a>.

Crie uma aplicação que aceita um código de competição (Ex: 444 = Campeonato Brasileiro série A) e apresenta uma lista com o ranking da mesma. A lista deve conter:

- posição no ranking (atual ou final, caso o campeonato já tenha acabado)
- nome do time
- vitórias
- empates
- derrotas
- pontos

### Plataforma

O site deve estar pronto para rodar em qualquer plataforma e **em uma máquina com somente um web server instalado (iis, node, apache, etc).**

### Requisitos

- Por favor, complete a user story abaixo
- Seu código deve estar pronto para rodar
- Sinta-se a vontade para usar qualquer framework se achar necessário
- Você **deve** incluir testes de unidade

### User Story

 Como um **usuário utilizando a aplicação** <br />
 Eu posso ver **o ranking de um campeonato enviando seu código (Ex: 444)**<br />
 Então eu sei quais **times estão ou finalizaram na frente**<br />

#### Aceite
- Para o código 444, o ranking do campeonato Brasileiro é mostrado
- Os campos de posição, nome do time, vitórias, empates, derrotas e pontos são informados para cada time.
