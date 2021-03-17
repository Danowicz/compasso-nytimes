# Compasso Times 📰

Projeto de consumo de noticias da [API do New York Times](https://developer.nytimes.com/docs/articlesearch-product/1/overview), feito como desafio técnico do processo seletivo da [Compasso UOL](https://compassouol.com/).

## ▪️ Executando o projeto
Localhost: `ng s`
Local IP: `ng s --host YOUR_IP`

Karma para testes unitários: `ng test`

## ▪️ Detalhes do projeto

### // Requisitos

Junto ao desafio foram entregues os seguintes requisitos: 

-   **Obrigatório**:
    
    -   [x] Consumir a api do NEW YORK TIMES.
    -   [x] Obter as notícias sobre as categorias tecnologia e ciências.
    -   [x] Ao clicar na notícia deve exibir um modal contendo título, url e uma breve descrição da noticia.
    -   [x] Para a criação do visual, podem ser usados frameworks modernos como o material e o bootstrap.
    -   [x] Deve conter um README contendo instruções para executar o projeto e uma breve descrição das escolhas feitas dentro do projeto.
    -   [x] Será levado em consideração a clareza do código e boas práticas.
-   **Opcionais**:
    
    -   [x] Para a criação do visual, podem ser usados estilos autorais.
    -   [x] O uso da imagem das notícias que vem do Json é opcional, mas caso colocado deve ser analisado para que não impacte a usabilidade.
    -   [x] A aplicação conter testes unitários (preferencialmente TDD).
    -   [x] Demonstração de conhecimento da pirâmide de testes (Pode ser uma descrição no README).
   <hr>
   
   ### // Design
   Antes do desenvolvimento das telas, foi realizado o levantamento da usabilidade de outras aplicações de noticias, para entender como o usuário médio interage com interfaces como a do New York Times.
   
A aplicação foi desenhada no Figma, utilizando a técnica mobile fisrt, tornando-a atraente sem comprometer a experiência de uso em smartphones e desktops.
<hr>

### // Testes
Por se tratar de uma aplicação com pouco desacoplamento e baixo nível de abstração, com base na pirâmide de testes, todos os componentes foram desenvolvidos a partir dos testes unitários.

Os testes foram escritos utilizando **Jasmine** e podem ser executados através do **Karma** com o comando `ng test`.

<hr>

### // Desenvolvimento

**Dependências**:
- `ngx-infinite-scroll`:	Realizar requests ao scrollar .
- `@fortawesome/angular-fontawesome`: Ícones em forma de fonte para o Angular.

A aplicação foi desenvolvida utilizando a versão mais recente do **Angular (v11)**.

Nenhuma biblioteca de estilos foi utilizada dentro do projeto, tendo todos os estilos sido desenvolvidos exclusivamente para a aplicação.
<br>
**Código**:

Todo o código foi escrito utilizando boas práticas de desenvolvimento como **TDD** e **Clean Architecture**, sempre levando em consideração a manutenibilidade e clareza do código , os componentes foram desenvolvidos com base nos testes feitos com **Jasmine**.
<br>
**Versionamento:**

Todo o código foi versionado utilizando Git e [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
