# <img src="public/images/logo-insight.jpg" alt="Icone da aplicação" title="logo insight" width=25/> Desafio InsgthLab - Fornecedores <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>

  Minha solução para o desafio da [Insight Lab](https://www.insightlab.ufc.br/)  proposto para submissão à bolsa do "Projeto Cultura".

  A aplicação conta com: sistema de Login, listagem dos fornecedores e cadastro/edição de fornecedores.

#### Credenciais padrão
  Para logar como Administrador:
  - **usuário:** admin
  - **senha:** admin
  
  Para logar como Leitor:
  - **usuário:** user
  - **senha:** user

[Instruções para reproduzir o projeto em sua maquina](#clonar-e-iniciar-o-projeto)

[Projeto lançado na nuvem](#iniciar-o-programa)

## Índice

  * [Tecnologias utilizadas](#tecnologias-utilizadas)
  * [Funcionalidades](#funcionalidades)
    * [Login](#login)
    * [Visualiação dos dados cadastrados](#definição-de-nome)
    * [Cadastro e edição dos Fornecedores](#cadastro-e-edição-dos-fornecedores)
  * [Detalhes Técnicos](#detalhes-técnicos)
    * [Clonar e iniciar o projeto](#clonar-e-iniciar-o-projeto)

## Tecnologias utilizadas

  A aplicação utiliza dados estáticos em um arquivo JSON no diretorio '/src' do projeto, e utiliza o mesmo como base de dados para a manipulação dos objetos utilizados.

 - [
  <img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"/> Typescript
  ](https://www.typescriptlang.org/)
 - [
  <img src="https://shields.io/badge/React-3178C6?logo=React&logoColor=FFF&style=flat-square"/> React
  ](https://react.dev/) 
 - [
  <img src="https://shields.io/badge/Next.JS-000000?logo=nextdotjs&logoColor=FFF&style=flat-square"/> NextJs
  ](https://nextjs.org/)
 - [
  <img src="https://shields.io/badge/Redux-60A?logo=redux&logoColor=FFF&style=flat-square"/> React Redux
  ](https://react-redux.js.org/)
 - [
  <img src="https://shields.io/badge/Redux-3178C6?logo=antdesign&logoColor=FFF&style=flat-square"/> Ant Design
  ](https://ant.design/)
 - [
  <img src="https://shields.io/badge/-FFF?logo=styledcomponents&logoColor=60A&style=flat-square"/> Styled Components
  ](https://styled-components.com/)

## Funcionalidades

### Login

<div style="display: flex;justify-content: space-between;">
  <img src="demo/login.png" style="margin: 0 auto;" alt="Tela de login" title="Tela de login" height=300/>
  <img src="demo/login-mobile.png" style="margin: 0 auto;" alt="Tela de login" title="Tela de login" height=300/>
</div>

  A aplicação utiliza um sistema de login para o controle de permissoes de usuario no aplicativo (admin: permissão total, user: apenas vizualização dos dados). Utilizando o sistema de Cookies nativo da ferramenta NextJS para persistir os dados de sessão.

  Ao realizar o login, a aplicação é redirecionada para a listagem de Fornecedores

### Visualiação dos dados cadastrados

<div style="display: flex;justify-content: space-between;">
  <img src="demo/home.png" style="margin: 0 auto;" alt="Tela de listagem de fornecedores" title="Tela de listagem de fornecedores" height=300/>
  <img src="demo/home-mobile.png" style="margin: 0 auto;" alt="Tela de listagem de fornecedores" title="Tela de listagem de fornecedores" height=300/>
</div>

### Cadastro e edição dos Fornecedores

<div style="display: flex;justify-content: space-between;">
  <img src="demo/cadastro.png" style="margin: 0 auto;" alt="Tela de cadastro e edição de fornecedor" title="Tela de cadastro e edição de fornecedor" height=300/>
  <img src="demo/cadastro-mobile.png" style="margin: 0 auto;" alt="Tela de cadastro e edição de fornecedor" title="Tela de cadastro e edição de fornecedor" height=300/>
</div>

## Detalhes Técnicos

### Clonar e iniciar o projeto

Clone o codigo fonte com o comando:
```bash
git clone https://github.com/jorgejunior618/Projeto-Cultura-Insight.git
```
Com o projeto na sua maquina, instale as dependencias:
```bash
npm i
```
E para iniciar o ambiente de desenvolvimento:
```bash
npm run dev
```
