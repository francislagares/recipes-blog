import React from 'react';
import { PageProps } from 'gatsby';
import Navbar from '@/components/Footer';
import Footer from '@/components/Navbar';

import 'normalize.css';
import '@/assets/main.css';

const Layout: React.FC<PageProps> = ({ children }): JSX.Element => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
