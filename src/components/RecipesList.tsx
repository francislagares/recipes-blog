import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import slugify from 'slugify';

interface IRecipes {
  id: string;
  title: string;
  cookTime: number;
  prepTime: number;
  image: IGatsbyImageData;
  content: {
    [key: string]: string[];
  };
}

interface Props {
  recipes: IRecipes[];
}

const RecipesList = ({ recipes = [] }: Props): JSX.Element => (
  <div className="recipes-list">
    {recipes.map((recipe) => {
      const { id, title, image, prepTime, cookTime } = recipe;
      const pathToImage = getImage(image);
      const slug = slugify(title, { lower: true });

      return (
        <Link to={`/${slug}`} key={id} className="recipe">
          <GatsbyImage image={pathToImage} className="recipe-img" alt={title} />
          <h5>{title}</h5>
          <p>
            Prep: {prepTime}min | Cook: {cookTime}min
          </p>
        </Link>
      );
    })}
  </div>
);

export default RecipesList;
