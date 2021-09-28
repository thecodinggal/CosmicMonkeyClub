import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../components/socialmedia";

// styles
const pageStyles = {
  backgroundColor: "#25204b",
  //'#560b9c',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// page
const IndexPage = () => {
  return (
    <main style={pageStyles} className="text-white pt-4 px-40">
      <div className="text-right">
        <SocialMedia />
      </div>
      <section className="relative h-5/6 pt-4 ">
        <div>
          <StaticImage
            src="../images/BANNER.jpeg"
            alt="Cosmic Monkey Club"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
        <div className="relative md:absolute bottom-0 left-0 lg:inline-block p-8 bg-primary-bg">
          <h1 className="text-3xl lg:max-w-sm">Welcome to the Cosmic Monkey Club</h1>
          <p className="py-2">Make sure to follow us:</p>
          <div className="socialMediaIcons text-center">
            <SocialMedia />
          </div>
          <div className="animate-pulse text-center"><FontAwesomeIcon icon={faArrowDown} /></div>
        </div>
      </section>
      <section>
        <div className="text-left pt-10 pl-8 max-w-3xl">
          The Cosmic Monkeys were launched into The Void with efforts to
          discover, why we matter… Here they are, waiting for you, but are they?
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
