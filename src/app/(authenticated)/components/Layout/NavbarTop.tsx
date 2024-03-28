import React, { useState } from 'react';
import {
  LogoutOutlined,
  MenuOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { supabase } from '@/config/supabase/supabase';
import { useStoreContextNavigation } from './StoreContextNavigation';
import { useRouter } from 'next/navigation';
import { Avatar, message, Popover } from 'antd';
export default function NavbarTop() {
  const { collapse, setCollapse } = useStoreContextNavigation();
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const handleOpenChange = (newOpen: boolean) => {
    setOpenMenu(newOpen);
  };
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      message.error('Error ao fazer login');
    } else {
      router.push('/login');
    }
  }

  const content = () => {
    return (
      <div className="flex flex-col space-y-1">
        <div
          className="hover:bg-slate-100 px-2 py-1 rounded-md cursor-pointer "
          onClick={() => router.push('/minha-conta')}
        >
          <SettingOutlined /> Minha Conta
        </div>
        <div
          onClick={() => signOut()}
          className="hover:bg-slate-100 px-2 py-1 rounded-md cursor-pointer"
        >
          <LogoutOutlined /> Sair
        </div>
      </div>
    );
  };
  return (
    <div className="fixed top-0 w-full z-50 bg-primary h-16 flex items-center px-4 justify-between">
      <div className="flex items-center space-x-2">
        <div
          className="text-white hover:bg-primary-dark px-4 py-2 rounded-lg"
          onClick={() => setCollapse(!collapse)}
        >
          <MenuOutlined />
        </div>
        <div className="text-white" onClick={() => router.push('/')}>
          Logo
        </div>
      </div>
      <div>
        <Popover
          placement="bottom"
          content={content}
          arrow={false}
          trigger={'click'}
          open={openMenu}
          onOpenChange={handleOpenChange}
        >
          <Avatar
            icon={<UserOutlined />}
            className="cursor-pointer"
            size="large"
            alt="User"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Popover>
      </div>
    </div>
  );
}
