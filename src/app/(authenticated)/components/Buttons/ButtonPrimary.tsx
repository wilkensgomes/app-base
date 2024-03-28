import React, { ReactNode } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

interface PropsButtonPrimary {
  title: string;
  onClick?: () => void;
  loading?: boolean;
  icon?: ReactNode;
  htmlType?: 'button' | 'submit' | 'reset'; // Adicionando a propriedade htmlType à interface
}

export const ButtonPrimary: React.FC<PropsButtonPrimary> = ({
  title,
  onClick,
  loading = false,
  icon,
  htmlType, // Adicionando htmlType à destructuring props
}) => {
  return loading ? (
    <button
      className="bg-primary-dark hover:bg-primary py-2 px-4 text-white text-sm rounded-md"
      disabled
    >
      <LoadingOutlined /> Carregando...
    </button>
  ) : (
    <button
      className="bg-primary-dark hover:bg-primary py-2 px-4 text-white text-sm rounded-md"
      onClick={onClick}
      type={htmlType} // Definindo o tipo do botão conforme htmlType
    >
      {icon} {title}
    </button>
  );
};
