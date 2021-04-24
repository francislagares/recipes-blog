import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RecipesList from './RecipesList';

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const AllRecipes = (): JSX.Element => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <section className="recipes-container">
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
