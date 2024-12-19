const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const pool = new Pool({
    user: 'seu_usuario',
    host: 'localhost',
    database: 'seu_banco',
    password: 'sua_senha',
    port: 5432,
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.senha);

        if (!validPassword) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, 'seu_segredo', { expiresIn: '1h' });

        res.json({ message: 'Login bem-sucedido', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
