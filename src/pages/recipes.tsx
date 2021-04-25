import React from 'react';
import AllRecipes from '@/components/AllRecipes';
import Layout from '@/components/Layout';

const Recipes = (): JSX.Element => (
  <div>
    <Layout>
      <h1>Recipes Page</h1>
      <AllRecipes />
    </Layout>
  </div>
);

export default Recipes;
