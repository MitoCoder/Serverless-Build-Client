const sqlite3 = require('sqlite3').verbose();

// Conectar ao banco de dados SQLite3
const db = new sqlite3.Database('./src/banco/bancogeral.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados SQLite3');
  }
});

module.exports = db;
