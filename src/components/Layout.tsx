import React, { ReactNode } from 'react';
import Navbar from '@/components/Footer';
import Footer from '@/components/Navbar';

import 'normalize.css';
import '@/assets/main.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
  <>
    <Footer />
    {children}
    <Navbar />
  </>
);

export default Layout;
