const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  result.data.allContentfulRecipe.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      createPage({
        path: `/${tag}`,
        component: path.resolve(`src/templates/tag-template.tsx`),
        context: {
          tag,
        },
      });
    });
  });
};
