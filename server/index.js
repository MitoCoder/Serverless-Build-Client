const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar o middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Conectar-se ao banco de dados SQLite
const dbPath = path.resolve(__dirname, '..', 'client', 'src', 'banco', 'bancogeral.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados SQLite3');
  }
});

// Rota para salvar os dados do formulário
app.post('/salvar-dados', (req, res) => {
  const { contrato, nomeEmpresa } = req.body;

  // Verificar se os campos estão preenchidos
  if (!contrato || !nomeEmpresa) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  // Inserir dados no banco de dados
  db.run(
    `INSERT INTO entregas (CONTRATO, NOMEEMPRESA) VALUES (?, ?)`,
    [contrato, nomeEmpresa],
    (err) => {
      if (err) {
        console.error('Erro ao inserir dados no banco de dados:', err.message);
        return res.status(500).json({ error: 'Erro ao salvar os dados.' });
      } else {
        console.log('Dados inseridos com sucesso no banco de dados');
        return res.status(200).json({ message: 'Dados salvos com sucesso.' });
      }
    }
  );
});

// Rota de teste para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
