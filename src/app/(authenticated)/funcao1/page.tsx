'use client';

import { useState } from 'react';
import { ButtonPrimary } from '../components/Buttons/ButtonPrimary';

export default function Funcao1() {
  const [clientes, setClientes] = useState<any>([]);
  async function getData() {
    const res = await fetch('http://localhost:3000/api/teste');
    const data = await res.json();
    console.log(data);
    setClientes(data);
  }
  return (
    <div>
      <div className="space-y-2">
        <h1>Função 1</h1>
        <ButtonPrimary onClick={() => getData()} title="Buscar Clientes" />
        {clientes.map((item: any) => {
          return <h1 key={item.id}>{item.nome}</h1>;
        })}
      </div>
    </div>
  );
}
