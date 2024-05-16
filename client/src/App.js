import React from 'react';
import FormularioEntrega from './paginas/FormularioEntrega';
import { message } from 'antd';

const enviarDadosParaServidor = async (values) => {
  try {
    const response = await fetch('sistemagestao-server.vercel.app:5000/salvar-dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if (response.ok) {
      message.success(data.message);
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error('Erro ao enviar dados para o servidor:', error.message);
    throw error;
  }
};

const App = () => {
  return (
    <div className="App">
      <h1>Formulário de Entrega</h1>
      <FormularioEntrega enviarDados={enviarDadosParaServidor} />
    </div>
  );
};

export default App;
