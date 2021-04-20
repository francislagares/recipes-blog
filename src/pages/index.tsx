import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/Layout';

const Home = (props: PageProps): JSX.Element => (
  <main>
    <Layout {...props} />
    <h1>Home Page</h1>
  </main>
);

export default Home;
