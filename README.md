# API Rest - Cadastro de Alunos

API REST desenvolvida em Node.js para gerenciamento de alunos, com autenticação de usuários e upload de fotos.

## 📋 Descrição do Projeto
<<<<<<< HEAD

Este projeto consiste em uma API robusta seguindo o padrão **MVC (Model-View-Controller)**. O sistema permite o cadastro de usuários (que podem logar no sistema para obter um token JWT) e, uma vez autenticados, realizar o **CRUD** (Create, Read, Update, Delete) de alunos, incluindo o envio de fotos de perfil.

## 🚀 Tecnologias Utilizadas

=======
Este projeto consiste em uma API robusta seguindo o padrão **MVC (Model-View-Controller)**. O sistema permite o cadastro de usuários (que podem logar no sistema para obter um token JWT) e, uma vez autenticados, realizar o **CRUD** (Create, Read, Update, Delete) de alunos, incluindo o envio de fotos de perfil.

## 🚀 Tecnologias Utilizadas
>>>>>>> 33337fdfc0b3f3f6f76e28b040d98e0c90b8f770
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para construção da API.
- **MariaDB** (MySQL Driver): Banco de dados relacional.
- **Sequelize**: ORM para manipulação do banco de dados.
- **JWT (JSON Web Token)**: Autenticação de usuários.
- **Bcrypt.js**: Hash de senhas para segurança.
- **Multer**: Middleware para upload de arquivos (fotos).
- **Sucrase**: Transpilador para usar sintaxe moderna do JS (ES6+).
- **Eslint**: Padronização de código.
- **Docker** (Opcional, se aplicável): Containerização.

## ⚙️ Pré-requisitos
<<<<<<< HEAD

=======
>>>>>>> 33337fdfc0b3f3f6f76e28b040d98e0c90b8f770
Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/)
- [MariaDB](https://mariadb.org/) ou MySQL

## 🔧 Instalação
<<<<<<< HEAD

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
=======
1. **Clone o repositório**
   ```bash
   git clone https://github.com/lucaseduardo5855/API-Rest-Node.git
>>>>>>> 33337fdfc0b3f3f6f76e28b040d98e0c90b8f770
   cd "API Rest"
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados**
   - Certifique-se de que o servidor MariaDB/MySQL esteja rodando.
   - Crie um schema (banco de dados) para o projeto.

4. **Variáveis de Ambiente (.env)**
   Renomeie o arquivo `.env.example` (se houver) para `.env` ou crie um novo arquivo `.env` na raiz do projeto e configure as seguintes variáveis:

   ```env
   DATABASE=nome_do_banco
   DATABASE_HOST=localhost
   DATABASE_PORT=3306
   DATABASE_USERNAME=seu_usuario
   DATABASE_PASSWORD=sua_senha
   
   TOKEN_SECRET=sua_chave_secreta_super_segura
   TOKEN_EXPIRATION=7d
   
   APP_URL=http://localhost:3001
   ```

## ▶️ Executando o Projeto

Para desenvolvimento (com auto-reload):
```bash
npm run dev
```

Para produção (build):
```bash
npm run build
npm start
```

O servidor iniciará na porta definida (padrão 3001, verifique `server.js`).

## 📚 Documentação da API

### 🏠 Home
- **GET /**: Retorna uma mensagem de boas-vindas (índice).

### 🔑 Token (Autenticação)
- **POST /tokens**: Realiza login e retorna o Token JWT.
  - **Body**: `{ "email": "...", "password": "..." }`

### 👤 Usuários (Users)
*A maioria das rotas requer autenticação (Bearer Token).*
- **POST /users**: Cria um novo usuário (Aberto).
- **PUT /users**: Atualiza dados do usuário logado (Requer Token).
- **DELETE /users**: Deleta o usuário logado (Requer Token).

### 🎓 Alunos (Students)
- **GET /alunos**: Lista todos os alunos.
- **GET /alunos/:id**: Exibe detalhes de um aluno específico (incluindo fotos).
- **POST /alunos**: Cria um novo aluno (Requer Token).
- **PUT /alunos/:id**: Atualiza um aluno existente (Requer Token).
- **DELETE /alunos/:id**: Remove um aluno (Requer Token).

### 📷 Fotos
- **POST /fotos**: Realiza upload de foto para um aluno (Requer Token).
  - **Body**: `multipart/form-data` com campo `foto` e `aluno_id`.

## 📁 Estrutura de Pastas

```
src/
├── config/        # Configurações do banco e upload
├── controllers/   # Lógica das rotas (Regras de negócio)
├── database/      # Conexão e Migrations
├── middlewares/   # Interceptadores (Login Required)
├── models/        # Modelos de dados (Sequelize)
├── routes/        # Definição das rotas
├── app.js         # Configuração do App Express
└── server.js      # Inicialização do servidor
```

---
Feito com 💜 por [Lucas Eduardo]
