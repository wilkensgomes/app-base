'use client';
import React from 'react';
import FormRegistro from '../components/FormRegistro';
import { useRouter } from 'next/navigation';
export default function Registro() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-12">
      <div>
        <h1 className="text-lg font-bold">Registro</h1>
      </div>
      <div className="w-[80%] md:w-[400px]">
        <FormRegistro />
      </div>
      <div className="text-sm">
        <h3>Já é cadastrado ?</h3>
        <h3
          onClick={() => router.push('login')}
          className="text-blue-600 cursor-pointer"
        >
          Fazer login.
        </h3>
      </div>
    </div>
  );
}
