const bcrypt = require('bcrypt');

const senhaOriginal = '123456'; // Senha que você deseja testar
bcrypt.hash(senhaOriginal, 10, (err, hash) => {
    if (err) {
        console.error('Erro ao gerar hash:', err);
    } else {
        console.log('Hash gerado:', hash);
        // Atualize este hash no banco de dados para o usuário desejado
    }
});
