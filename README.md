# ROTEIRO TESTE FRONTEND COMPASSO

Bem-vindo ao teste prático para os candidatos ao cargo de frontend na COMPASSO.



## OBJETIVO

Nosso objetivo com este passo do processo de recrutamento é conhecer melhor as suas habilidades técnicas.

Com isso, selecionaremos quais desafios passaremos para você e quais precisaremos prepará-lo para melhor para enfrentar.


## REQUISITOS DA ENTREGA

Gostaríamos nos entregasse uma aplicação utilizando a api do GITHUB https://developer.github.com/v3/ consumindo os seguintes endpoints:
- Endpoint user: https://api.github.com/users/USER_GITHUB
- Endpoint repos: https://api.github.com/users/USER_GITHUB/repos
- Endpoint starred: https://api.github.com/users/USER_GITHUB/starred{/owner}{/repo}

A aplicação deverá constituir três componentes principais: 
- O campo de busca.
- Visualização de resultados.
- Dois botões para executar um determinado resultado.

Ao clicar nos botões de repos e starred, deverá mostrar uma lista simples de cada endpoint
apresentado anteriormente.

Dado um determinado usuário, deverá ser possível navegar diretamente até a página de
detalhe do usuário sem que seja necessário efetuar uma nova busca. Ex: http://localhost:3000/USER_GITHUB

- Gostariamos de pesquisar por usuario.
- Gostariamos de ao clicar no botão de repos, listar repositorios do usuario pesquisado.
- Gostariamos de ao clicar no botão de starred, listar os repositorios mais visitados por aquele usuario.

Você poderá usar o framework css Bootstrap ou Materialize para construção dos componentes UI (Se preferir, os componentes poderão ser criados do zero, utilizando as boas práticas).

Você poderá usar os frameworks js para desenvolvimento da sua aplicação ou utilizar o Vanilajs e jQuery.

Você poderá utilizar Jasmine, Mocha ou RhinoUnit para testar os request feitos.



## STACK ESPERADA PARA O TESTE

- HTML 5 (Desejavel o uso de SEO, Semãntica, Usabilidade).
- JAVASCRIPT (Desejavel o uso de Vanilla, jQuery, Knockoutjs, Angular V2, Vuejs, Reactjs, Performance).
- CSS 3 (Desejavel o uso de SASS, LESS, Stylus, Bootstrap, Materialize, Escalabilidade, Responsivo, BEM CSS).



## CENÁRIO

Na página do campo de busca, deverá ser possível inserir nomes de usuários do github, repositórios e os mais visitados pelos os usuários.



## AVALIAÇÃO

A avaliação será feita da seguinte forma:

- Vamos analisar e compilar o seu código;
- Rodar sua aplicação e executar testes para validar o atendimento funcional dos itens acima;
- Verificar se o seu código é limpo (Clean Code), fácil de entender e de dar manutenção;
- Durante entrevista, simularemos uma revisão do seu código, percorremos o código junto com você para discutirmos sobre suas decisões de implementação, os pontos positivos e negativos;
- O saldo entre o que for positivo e o que for negativo vai determinar a recomendação do ponto de vista técnico ou não de sua contratação. (Se faltar pouco para atingir uma recomendação positiva, daremos um prazo para você corrigir e retornar);

Requisitos Obrigatórios:

- Verificar as boas práticas voltadas ao CSS 3 e a Metodologia BEM CSS;
- Verificar as boas práticas voltadas ao JAVASCRIPT ou Framework escolhido;
- Verificar as boas práticas voltadas ao HTML 5;



## DICAS:

- Tenha em mente que o seu avaliador irá executar o código antes de falar com você;
- Procure fazer uma entrega simples mas consistente, usando a experiência e conhecimento adquiridos durante sua carreira;
- Não se preocupe em entregar algo extremamente completo ou rebuscado, não vamos usar este código em produção;
- Tudo será avaliado, dê o seu melhor!