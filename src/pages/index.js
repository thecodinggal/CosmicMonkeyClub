import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import SocialMedia from "../components/socialmedia";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { Button } from "../components/button";



// page
const IndexPage = () => {
  return (
    <main className="text-white container mx-auto">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Cosmic Monkey Club</title>
      <meta name="description" content="Join and explore the vast community of the Cosmic Monkey Club!"/>
      <meta name="keywords" content="NFT, Cosmic Monkey, Cosmic Space Monkey"/>
      <meta name="author" content="Cosmic Labs LLC" />
    </Helmet>
      <div className="pt-4 lg:px-20">
        <div className="space stars1 animate-twinkle"></div>
        <div className="space stars2 z-0"></div>
        <div className="space stars3 z-0"></div>
        <div className="text-right pr-6">
          <SocialMedia />
        </div>
        <section className="relative h-5/6 pt-2 ">
          <div>
            <StaticImage
              src="../images/BANNER.jpeg"
              alt="Cosmic Monkey Club"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
          <div className="relative lg:absolute bottom-0 left-0 lg:inline-block py-6 px-2 welcomeBanner lg:max-w-xs text-center">
            <h1 className="text-3xl">Welcome to the Cosmic Monkey&nbsp;Club</h1>
            <p className="py-4">Get ready to explore</p>
            <div className="socialMediaIcons text-center">
              <Button href="/home">Enter</Button>
            </div>
            <div className="animate-pulse transform -rotate-90 absolute scrollDown -right-2 text-xs"><FontAwesomeIcon icon={faArrowLeft}/>  Explore more</div>
          </div>
        </section>
      </div>
      <section className="container pb-4 ">
        <div className="text-center py-10 margin-auto border-b px-20">
          <p>10,000 Cosmic Monkeys were launched into The Void with efforts to create an appreciating asset with meaningful real-world&nbsp;incentives.
          </p>
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default IndexPage;
