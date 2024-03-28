'use client';
import React from 'react';
import { Form, type FormProps, Input, message } from 'antd';
import { ButtonPrimary } from '@/app/(authenticated)/components/Buttons/ButtonPrimary';
import { supabase } from '../../../config/supabase/supabase';
import { useRouter } from 'next/navigation';
type FieldType = {
  email?: string;
  senha?: string;
  confirmacao?: string;
};

export default function FormRegistro() {
  const router = useRouter();
  const onFinish: FormProps<FieldType>['onFinish'] = async values => {
    let email = values.email || '';
    let senha = values.senha || '';
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: senha,
    });
    if (data.user !== null) {
      console.log(data);
      router.push('/');
    }
    if (error) {
      console.log(error);
      message.error(
        'Erro ao fazer cadastro, verifique os dados ou entre com contato com o administrador.'
      );
    }
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

      <Form.Item<FieldType>
        label="Confirme sua Senha"
        name="confirmacao"
        rules={[
          {
            required: true,
            message: 'Por favor, adicione a senha de confirmação!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('senha') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('A senha de confirmação não bate com a senha!')
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="flex justify-center mt-12">
        <ButtonPrimary title="Registrar" htmlType="submit" />
      </div>
    </Form>
  );
}
