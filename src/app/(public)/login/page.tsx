'use client';
import React from 'react';
import FormLogin from '../components/FormLogin';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-12">
      <div>
        <h1 className="text-lg font-bold">Login</h1>
      </div>
      <div className="w-[80%] md:w-[400px]">
        <FormLogin />
      </div>
      <div className="text-sm">
        <h3>Ainda não é registrado ?</h3>
        <h3
          onClick={() => router.push('registro')}
          className="text-blue-600 cursor-pointer"
        >
          Registre-se
        </h3>
      </div>
    </div>
  );
}
