import React, { useContext, useState, createContext } from 'react';

interface StoreContextType {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  navbarWidth: number;
  setNavbarWidth: React.Dispatch<React.SetStateAction<number>>;
}

export const StoreContextNavigation = createContext<StoreContextType>({
  collapse: true,
  setCollapse: () => {},
  navbarWidth: 0,
  setNavbarWidth: () => {},
});

export function StoreContextNavigationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapse, setCollapse] = useState(true);
  const [navbarWidth, setNavbarWidth] = useState(0);
  return (
    <StoreContextNavigation.Provider
      value={{ collapse, setCollapse, navbarWidth, setNavbarWidth }}
    >
      {children}
    </StoreContextNavigation.Provider>
  );
}

export const useStoreContextNavigation = () =>
  useContext(StoreContextNavigation);
