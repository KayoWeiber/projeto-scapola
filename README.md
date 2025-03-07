# Sistema de Login e Acesso 🔐

Este projeto é uma aplicação web desenvolvida com **React**, **Node.js** e **PostgreSQL**, focada em implementar um sistema de autenticação simples e seguro. O sistema conta com telas de login, navegação entre rotas e conexão com um banco de dados para validação de usuários.

## 🛠️ Tecnologias Utilizadas
- **Front-end:** React, React Router, Axios, Bootstrap, react-icons  
- **Back-end:** Node.js, Express, PostgreSQL, bcrypt, jsonwebtoken, cors  
- **Banco de Dados:** PostgreSQL  

## 🚀 Funcionalidades
- Cadastro e autenticação de usuários  
- Criptografia de senhas usando **bcrypt**  
- Geração de token JWT para sessões seguras  
- Feedback visual para o usuário em caso de erro ou sucesso  
- Ocultação/Exibição de senha no campo de input  
- Validação de campos obrigatórios

## 💻 Como Executar o Projeto
### Backend
1. Acesse a pasta do servidor: `cd backend`  
2. Instale as dependências: `npm install`  
3. Configure a conexão com o PostgreSQL em `server.js`  
4. Inicie o servidor: `npm start`  

### Frontend
1. Acesse a pasta do cliente: `cd frontend`  
2. Instale as dependências: `npm install`  
3. Inicie a aplicação: `npm start`  

A aplicação estará disponível em **http://localhost:3000** e o servidor backend rodando em **http://localhost:3001**.  

## 📝 Melhorias Futuras
- Implementar registro de novos usuários  
- Criar funcionalidade de recuperação de senha  
- Adicionar validação mais robusta de campos de entrada  
- Melhorar a interface com feedback mais detalhado  
