import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <main className="text-white text-center">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Oops! | Cosmic Monkey Club</title>
      <meta name="description" content="404 Error"/>
      <meta name="keywords" content="NFT, Cosmic Monkey, Cosmic Space Monkey"/>
      <meta name="author" content="Cosmic Labs LLC" />
    </Helmet>
      <h1 className="text-3xl pt-8 pb-6">404 Error - Area not found</h1>
      <Link to="/"><StaticImage
        src="../images/spaceship-blastoff.jpeg"
        alt="Cosmic Monkey Club"
        placeholder="blurred"
      /></Link>
      <p className="py-4">
        <Link to="/">Click here to go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
