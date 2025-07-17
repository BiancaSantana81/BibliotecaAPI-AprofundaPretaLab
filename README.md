# Projeto Biblioteca – Aprofunda PretaLab

<p align="center">
  <img src="./black-girl-library" alt="black-girl-library" width="400" />
</p>


🔐 Em breve: autenticação de usuários com JWT e criação de UserSchema para controle de acesso às funcionalidades da aplicação.


Este projeto foi desenvolvido como parte do curso **Aprofunda PretaLab**, com o objetivo de construir uma API REST para gerenciamento de livros, aplicando boas práticas de desenvolvimento como **arquitetura limpa** e **TDD (Test-Driven Development)** e integração com banco de dados MongoDB.

A aplicação permite criar, consultar, atualizar e deletar livros, além de gerenciar seu status de empréstimo.

---

## 🧩 Integração com Banco de Dados

A aplicação utiliza o MongoDB como banco de dados principal, acessado por meio de um repositório específico dentro da arquitetura limpa. Isso permite fácil substituição ou troca por outro tipo de banco, se necessário.

    🔁 Durante a execução normal da aplicação (em modo desenvolvimento ou produção), os dados são persistidos no MongoDB.

---

## Modelagem de Dados

### 📚 Schema Book

Os dados dos livros são modelados utilizando Mongoose Schemas. Cada livro possui os seguintes atributos:

```
- id: Identificador único do livro (gerado pelo MongoDB);
- title: Título do livro
- author: Nome do autor
- publishedYear: Ano de publicação
- isBorrowed: Indica se o livro está emprestado (true ou false)

```

---

## 🧪 Testes Automatizados

Este projeto foi desenvolvido utilizando **TDD**, ou seja, os testes foram escritos antes da implementação das funcionalidades.

Inclui:

- ✅ **Testes Unitários** – Validam regras de negócio de forma isolada.
- ✅ **Testes de Integração** – Validam os fluxos completos da aplicação (controller → use case → repositório).

    🧠 Durante os testes, o repositório utilizado é in-memory, ou seja, os dados não são persistidos no banco de dados real.


Os testes foram escritos utilizando **Jest** e **Supertest**.

---

## 🔗 Endpoints disponíveis

| Método   | Rota                              | Descrição                                            |
|----------|----------------------------------|------------------------------------------------------|
| `POST`   | `/api/library/create-book`        | Cria um novo livro                                   |
| `GET`    | `/api/library/book/:id`           | Retorna os dados de um livro pelo ID                 |
| `GET`    | `/api/library/books`              | Lista todos os livros cadastrados                    |
| `PUT`    | `/api/library/update-book/:id`    | Atualiza todos os campos de um livro existente       |
| `PATCH`  | `/api/library/update-borrow/:id`  | Atualiza apenas o status de empréstimo (`isBorrowed`)|
| `DELETE` | `/api/library/delete-book/:id`    | Remove um livro do sistema pelo ID

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB (com Mongoose e Schemas para modelagem de dados)
- Jest
- Supertest
- Arquitetura Limpa (Clean Architecture)

---

## 🛠️ Uso com script automatizado

Este projeto possui um script bash (run.sh) para facilitar a inicialização, testes e limpeza do ambiente.

### 📦 Pré-requisitos

Certifique-se de que você tenha o Node.js e o Bash instalados.

### 🔃 Comandos disponíveis

```bash
# Limpa os arquivos executáveis e node_modules
./run.sh clean

# Instala dependências e roda os testes
./run.sh test

# Instala dependências, roda os testes e inicia o servidor
./run.sh
```

### 📁 Dica

Lembre-se de tornar o script executável, se necessário:

```bash
chmod +x run.sh
```
