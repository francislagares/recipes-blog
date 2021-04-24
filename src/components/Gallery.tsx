import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Gallery = (): JSX.Element => {
  const data = useStaticQuery(query);
  const { nodes } = data.allFile;

  return (
    <div className="page">
      {nodes.map((image, index) => {
        const { name } = image;
        const pathToImage = getImage(image);
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
