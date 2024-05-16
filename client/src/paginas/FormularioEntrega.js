import React from 'react';
import { Form, Input, Button, message } from 'antd';

const FormularioEntrega = ({ enviarDados }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await enviarDados(values);
      form.resetFields();
      message.success('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      message.error('Erro ao enviar dados. Por favor, tente novamente.');
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        label="CONTRATO"
        name="contrato"
        rules={[{ required: true, message: 'Por favor, digite o número do contrato!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="NOMEEMPRESA"
        name="nomeEmpresa"
        rules={[{ required: true, message: 'Por favor, digite o nome da empresa!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormularioEntrega;
