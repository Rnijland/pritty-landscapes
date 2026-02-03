import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default SiteLayout;
