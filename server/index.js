const express = require('express');
const db = require('../client/src/banco/database'); // Importar o arquivo database.js
const app = express();

// Rotas da sua aplicação
app.get('/', (req, res) => {
    // Exemplo de consulta ao banco de dados
    db.all('SELECT * FROM tabela', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: rows });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
