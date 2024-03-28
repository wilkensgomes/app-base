import React, { useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  ClusterOutlined,
  CommentOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useStoreContextNavigation } from './StoreContextNavigation';
import { cn } from '@/utils/cn';

export default function NavbarLateral() {
  const { collapse, setNavbarWidth } = useStoreContextNavigation();
  const router = useRouter();
  const navbarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (navbarRef.current) {
      const width = navbarRef.current.offsetWidth;
      setNavbarWidth(width);
    }
  }, [collapse, setNavbarWidth]);

  const itens = [
    {
      titulo: 'Inicio',
      onClick: () => router.push('/'),
      icon: <HomeOutlined />,
    },
    {
      titulo: 'Função 1',
      onClick: () => router.push('/funcao1'),
      icon: <CommentOutlined />,
    },
    {
      titulo: 'Função 2',
      onClick: () => router.push('/funcao2'),
      icon: <ClusterOutlined />,
    },
  ];

  return (
    <div
      ref={navbarRef}
      id="navbar-lateral"
      className={cn(
        'fixed top-0 left-0 h-full mt-16 bg-primary w-46 px-6 text-white transition-transform duration-500 ease-in-out',
        collapse ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className=" my-4 flex flex-col">
        {itens.map((item, index) => {
          return (
            <div
              key={index + 1}
              className="flex space-x-2  items-center hover:bg-primary-dark py-2 px-4 cursor-pointer rounded-lg"
              onClick={item.onClick}
            >
              <div>{item.icon}</div>
              <div>{item.titulo}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
