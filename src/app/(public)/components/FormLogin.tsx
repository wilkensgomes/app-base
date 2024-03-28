'use client';
import React from 'react';
import { Form, type FormProps, Input, message } from 'antd';
import { ButtonPrimary } from '@/app/(authenticated)/components/Buttons/ButtonPrimary';
import { loginSupabase } from '../login/actions';
type FieldType = {
  email?: string;
  senha?: string;
};

export default function FormLogin() {
  const onFinish: FormProps<FieldType>['onFinish'] = async values => {
    let email = values.email || '';
    let senha = values.senha || '';
    loginSupabase(email, senha);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Por favor, adicione o email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Senha"
        name="senha"
        rules={[{ required: true, message: 'Por favor, adicione a senha!' }]}
      >
        <Input.Password />
      </Form.Item>

      <div className="flex justify-center mt-12">
        <ButtonPrimary title="Login" htmlType="submit" />
      </div>
    </Form>
  );
}
