import React from 'react';
import { Link } from 'gatsby';
import setupTags from '@/utils/setupTags';

const TagsList = ({ recipes }): JSX.Element => {
  const newTags = setupTags(recipes);

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
