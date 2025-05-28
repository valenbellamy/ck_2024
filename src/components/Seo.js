import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="image"
        content="https://clementkarl2924.netlify.app/static/9e7312766bc08c23c60410ff2f3bb362/19eb8/Jeu_3.webp"
      />
      <meta
        property="og:image"
        content="https://clementkarl2924.netlify.app/static/9e7312766bc08c23c60410ff2f3bb362/19eb8/Jeu_3.webp"
        data-gatsby-head="true"
      ></meta>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='80'>🎨</text></svg>"
      />
      {children}
    </>
  );
};
