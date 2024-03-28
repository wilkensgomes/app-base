'use client';
import { supabase } from '@/config/supabase/supabase';
import React from 'react';
const user = supabase.auth.getUser();

export default function MinhaConta() {
  supabase.auth.getUser().then(user => {
    console.log(user);
  });

  return <div>Minha Conta</div>;
}
