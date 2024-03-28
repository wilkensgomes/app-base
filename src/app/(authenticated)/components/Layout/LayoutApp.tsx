'use client';
import ContentContainer from './ContentContainer';
import NavbarLateral from './NavbarLateral';
import NavbarTop from './NavbarTop';
import { StoreContextNavigationProvider } from './StoreContextNavigation';
export default function LayoutApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <StoreContextNavigationProvider>
        <NavbarLateral />
        <NavbarTop />
        <ContentContainer>{children}</ContentContainer>
      </StoreContextNavigationProvider>
    </div>
  );
}
