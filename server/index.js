const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do pool de conexões
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const jwtSecret = process.env.JWT_SECRET;

// Listener para erros no pool de conexões
pool.on('error', (err) => {
    console.error('Erro no pool de conexões:', err);
});

// Rota de login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validação básica
    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
    }

    try {
        const result = await pool.query('SELECT * FROM login WHERE email = $1', [email]);

        if (process.env.NODE_ENV === 'development') {
            console.log(`Resultado da consulta: ${JSON.stringify(result.rows)}`);
        }

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.senha);

        if (process.env.NODE_ENV === 'development') {
            console.log(`Validação de senha: ${validPassword}`);
        }

        if (!validPassword) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });

        if (process.env.NODE_ENV === 'development') {
            console.log(`Token gerado: ${token}`);
        }

        res.json({ message: 'Login bem-sucedido', token });
    } catch (err) {
        console.error('Erro no servidor:', err);
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

// Encerramento elegante do pool de conexões
process.on('SIGINT', async () => {
    console.log('Encerrando pool de conexões...');
    await pool.end();
    console.log('Pool encerrado com sucesso');
    process.exit(0);
});

// Inicia o servidor
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
