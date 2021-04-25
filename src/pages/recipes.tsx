import React from 'react';
import AllRecipes from '@/components/AllRecipes';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const Recipes = (): JSX.Element => (
  <div>
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <h1>Recipes Page</h1>
        <AllRecipes />
      </main>
    </Layout>
  </div>
);

export default Recipes;
