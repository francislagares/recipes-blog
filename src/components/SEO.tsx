/* eslint-disable react/require-default-props */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

interface Props {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: Props): JSX.Element => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    />
  );
};

export default SEO;
