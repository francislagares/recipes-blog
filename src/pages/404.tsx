import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const NotFound = (): JSX.Element => (
  <Layout>
    <SEO title="Error" />
    <main className="error-page">
      <section>
        <h1>404</h1>
        <h3>page not found</h3>
      </section>
    </main>
  </Layout>
);

export default NotFound;
