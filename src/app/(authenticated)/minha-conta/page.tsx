'use client';
import { createClienteFromBrowser } from '@/config/supabase/supabase';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';

export default function MinhaConta() {
  const [email, setEmail] = useState<string>('');
  useEffect(() => {
    const getClientInfo = async () => {
      const supabase = createClienteFromBrowser();
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.log(error);
      } else {
        let email = data.user?.email || '';
        setEmail(email);
      }
    };
    getClientInfo();
  }, []);

  return (
    <div>
      <h1>Minha Conta</h1>
      <h2>{email}</h2>
    </div>
  );
}
