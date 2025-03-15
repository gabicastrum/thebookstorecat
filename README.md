# The Bookstore Cat - Projeto de Desenvolvimento de Sistemas Frontend

**Aluno:** Gabriela de Castro Laurindo

**Matrícula:** 24150338-2

**Curso:** Análise e Desenvolvimento de Sistemas - Full-Stack e Mobile

**Instituição:** PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul

## Descrição do Projeto

Este projeto é a Fase 1 do trabalho prático da disciplina de Desenvolvimento de Sistemas Frontend. Ele consiste em um aplicativo web para gerenciamento de livros, permitindo a listagem, cadastro, edição e exclusão de livros. O projeto foi desenvolvido utilizando React, TypeScript e Vite.

## Tecnologias Utilizadas

* React
* TypeScript
* Vite
* HTML
* CSS

## Componentes

* **BookList:** Componente responsável por exibir a lista de livros, com a possibilidade de excluir e editar itens.
* **BookForm:** Componente que contém o formulário para adicionar ou editar um livro. Possui campos para Título, Autor, Gênero e Data da leitura.
* **NavBar:** Componente de navegação que contém links para as diferentes seções do aplicativo.

## Funcionalidades Implementadas

* **Listagem de Livros:** Exibe os livros cadastrados em uma lista.
* **Cadastro de Livros:** Permite adicionar novos livros através de um formulário.
* **Edição de Livros:** Permite editar as informações de um livro existente.
* **Exclusão de Livros:** Permite excluir um ou mais livros selecionados.
* **Validação Básica do Formulário:** Verifica se os campos obrigatórios foram preenchidos.
* **Feedback Visual para o Usuário:** Indica ao usuário se os campos do formulário foram preenchidos corretamente.
* **Persistência Local:** Os livros cadastrados são armazenados no `localStorage` para manter os dados entre sessões.

## Instalação e Execução

1. **Clone o repositório:** `git clone https://github.com/gabicastrum/thebookstorecat.git`
2. **Navegue até a pasta raiz do projeto:** `cd thebookstorecat`
3. **Instale as dependências:** `npm install`
4. **Inicie o servidor de desenvolvimento:** `npm run dev`

A aplicação estará disponível em `http://localhost:5173` (ou em outra porta, se configurado diferentemente).

## Imagens da Aplicação

Estrutura:

![image](https://github.com/user-attachments/assets/47dca716-2e5c-4fdc-ab8f-2eb23f7b2bd2)


**Telas:**

Home (tela da página inicial):
![image](https://github.com/user-attachments/assets/25aa9a20-8a5a-4246-85ae-98c7f3792f47)

About (tela sobre):
![image](https://github.com/user-attachments/assets/d422bf3f-edb1-48f4-a8b2-cbcddcc256ed)

Register your book (tela para cadastro de livros):
![image](https://github.com/user-attachments/assets/6efa23e6-fa11-4fb0-b77b-f17f5c9eb329)

Books (tela para lista de livros, que pode ser acessada após registro ou pela barra de navegação):
![image](https://github.com/user-attachments/assets/56abb930-af93-4cca-a0cb-ec69a9a7e62e)

Possibilidade de seleção de livros para deletar:
![image](https://github.com/user-attachments/assets/50d1101f-0dae-4892-a99d-bacd368dfae4)

Possibilidade de edição de informações de livros cadastrados (abre modal para edição após clicar em no ícone de lápis):
![image](https://github.com/user-attachments/assets/ba3fa224-92e3-4dc6-a56f-8a726ad77d39)

