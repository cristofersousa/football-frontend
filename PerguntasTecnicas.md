## Perguntas Técnicas

> Por favor, responda estas perguntas em um arquivo markdown chamado `PerguntasTecnicas.md` e coloque dentro do .zip entregue.

1. Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?
```
Gastei aproximadamente ~ 35 h, se conseguisse mais tempo tentaria incluir testes unitários nos componentes e adotar uma biblioteca pra documentar meus componentes, também tentaria estruturar melhor e separar mais meus componentes.

```

2. Se usou algum framework javascript, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?

```
Adotei o Vue.js para desenvolvimento do teste prático. Motivo adotado para isso é que em cima das novas stacks web modernas/spa,
esse framework entrega o conceito de Single File Components, conceito de mudança de estados com Vuex e posso entregar mais valor
com menos linha de código do que fizesse usando VanillaJs ou adotando outros frameworks JS como Angular/React.

Como sei que a empresa way2 está adotando React no core eu não conheço ainda muito sobre o React mas sei que é próximo ao Vue,
desta forma também fui estudar sobre Vuex que é próximo ao Flux.
```

3. Liste alguns frameworks javascript e nos diga em quais situações seria melhor utilizar cada um deles.

```
  React > É bem próximo ao Vue, é a biblioteca mais utilizada no momento para concepção de View porém sua arquitetura e seu modo de trabalhar é mais complexa, acredito que o React pode ser adotado em qualquer projeto web, desde que o time tenha pessoas bastante experiente sobre essa biblioteca, pois o workflow dele é demasiadamente complexo em nivel de estrutura e organização de projeto.

  Ember > É um framework com anos de mercado bem estabelecido e maduro, porém é extremamente custoso para conhecer seu workflow e ele não é apenas
  JavaScript existem muitos conceitos que é do fw da qual aumenta a curva de aprendizado para adota-lo em qualquer projeto. Para bacana deste framework
  é que você acaba trabalhando sobre convenção sobre configuração e com isso as coisas podem ser mais  "simples", recomendo adesão a este framework para projetos que não precisam se preocupar muito com SPA, acredito que ele seja bem adotado para cruds/relatórios.

  Angular2 > É um framework que errou na concepção do Angular1 porém abriu novos horizontes para concepção de front-end, acredito que ele possa ajudar
  muito para quem está adotando para qualquer tipo de projeto porém ele sofre do mesmo problema do Ember, precisa conhecer o framework mais á fundo,
  parte boa dele que ele foi o primeiro a adotar TypeScript o que ajuda bem na organização do projeto e etc.

```

4. Descreva você mesmo utlizando json.
  {
    dados: {
      nome: 'Cristofer de Sousa Pereira',
      email: 'cristofer.sousa@gmail.com',
    },
    conhecimento: {
      skill: 'html5, css3, es5, es6, json, vue, bootstrap, sass, jquery, groovy, grails',
      extras: 'scrum, kanban, agile',
    },
    'mini-bio': {
      descricao: 'Sou programador front-end com bastante enfase em UX/UI gosto de desenvolvimento
      e criação de interfaces para web/mobile, nesses últimos anos tenho estudado  mais sobre
      JavaScript para tornar um FullStack JS. Sou comunicativo e gosto de ter a demanda de gerenciar
      equipes e ser útil para equipe, costumo dizer que meu papel dentro de uma empresa é não ser apenas
      um front-end developer, mas sim um coringa onde se tiver conhecimento passado posso ajudar em outras
      areas do desenvolvimento do produto como Scrum Master, PO e etc.',
    },
  }
