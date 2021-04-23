import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '@/components/Layout';

const Home = (): JSX.Element => (
  <main>
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="Eggs"
            placeholder="blurred"
            layout="fullWidth"
            className="hero-img"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>no Fluff, Just Recipes</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  </main>
);

export default Home;
