import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import SocialMedia from "../components/socialmedia";
import Footer from "../components/footer";

// page
const IndexPage = () => {
  return (
    <main className="text-white container mx-auto">
      <div className="pt-4 lg:px-20">
        <div class="space stars1 animate-pulse"></div>
        <div class="space stars2 z-0"></div>
        <div class="space stars3 z-0"></div>
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
          <div className="relative lg:absolute bottom-0 left-0 lg:inline-block py-6 px-2 bg-primary-bg lg:max-w-xs text-center">
            <h1 className="text-3xl">Welcome to the Cosmic Monkey Club</h1>
            <p className="py-2">Make sure to follow us</p>
            <div className="socialMediaIcons text-center pt-6">
              <SocialMedia />
            </div>
            <div className="animate-pulse text-center"><FontAwesomeIcon icon={faArrowDown} /></div>
          </div>
        </section>
      </div>
      <section className="container pb-4 ">
        <div className="text-center py-10 margin-auto border-b px-20">
          <p>The Cosmic Monkeys were launched into The Void with efforts to
          discover, why we matter… Here they are, waiting for you, but are they?
          </p>
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default IndexPage;
