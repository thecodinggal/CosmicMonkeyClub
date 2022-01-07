import * as React from "react";

import FadeIn from "../components/fadein";
import Helmet from "react-helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FullImageSection from "../components/fullImageSection";
import FullTextImgSection from "../components/FullTextImgSection";
import FullTextSection from "../components/FullTextSection";
import Roadmap from "../components/roadmap";
import Team from "../components/team";
import Minting from "../components/minting";
import Divider from "../components/divider";
import sketchVideo from "../images/rocket_timeline.mp4";

import Faq from "../components/FAQ";

import ParallaxProvider from "react-scroll-parallax/cjs/components/ParallaxProvider";

// page
const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cosmic Monkey Club</title>
        <meta name="description" content="Cosmic Monkey Club" />
        <meta
          name="keywords"
          content="NFT, Cosmic Monkey, Cosmic Space Monkey"
        />
        <meta name="author" content="Cosmic Labs LLC" />
      </Helmet>
      <main className="text-white">
        <section className="mx-auto">
        <div className="max-h-screen overflow-hidden">
          <Navbar />
        </div>
          <div className="pt-10 px-10 md:px-40">
            <FadeIn>
              <FullTextImgSection
                header="Welcome aboard fellow&nbsp;simian."
                body={[
                  "Cosmic Monkey Club is a collection of 10,000 Cosmic Monkey NFTs- immutable digital collectibles traveling through the Ethereum Blockchain.",
                  "Owning a Cosmic Monkey is more than a simple image of course.",
                  "You are invited along on our journey to the world we create, together, as a community of fans first and foremost. Members get access to exclusive drops, the CMC skybox at your favorite clubs home game, hangouts with the world's best footballers, club trips, parties and more. Follow along as CMC takes on Earth in the greatest football match of all time.",
                ]}
              />
            </FadeIn>
            <Divider />
            <FadeIn>
              <FullTextSection
                id="mint"
                header="Distribution"
                body={[
                  "Cosmic Monkey Club will be launching the collection in two phases. Phase 1 is the Pre-sale and Phase 2 will be the public sale.",
                  "Note: One hundred apes will be withheld from the sale. This will be used for giveaways, rewards, and as payment to staff members.",
                ]}
              />
              <Minting />
            </FadeIn>
            <Divider />
            <FadeIn>
              <Roadmap />
            </FadeIn>
            <Divider />
            <FadeIn>
              <FullTextSection
                id="story"
                header="Our Journey"
                headerColor="text-primary-lightblue"
                body={[
                  "Our artist, Tobias Walker, has gifted and illustrated each Cosmic Monkey with unique traits, characteristics, and backgrounds. Inspiration from Disney, highlights and differentiates each Cosmic Monkey from one another adhering to distinct rarity. Cosmic Monkey club is producing a public animated series featuring content from The Void. Illustration and design from our one and only, Tobias Walker.",
                ]}
              />

              <video className="pt-6" controls autoPlay muted loop>
                {" "}
                {/* eslint-disable-line */}
                <source src={sketchVideo} type="video/mp4" />
              </video>
            </FadeIn>

            <Divider />
            <FadeIn>
              <Team />
            </FadeIn>
            <Divider />
            <FadeIn>
            <Faq
              id="FAQ"
              header="FAQ"
              body={[
                "Q: How many Cosmic Monkeys entered The Void?",
                "A: There will be 10,000 Cosmic Monkeys that enter The Void and are available for tracking. Each monkey is illustrated and microchipped by Tobias Walker!",

                "Q: What is the maximum amount of Cosmic Monkeys that you can mint and track?",
                "A: Maximum number of Cosmic Monkeys available per wallet during the presale mint is 4 Monkeys. You can mint 6 Cosmic Monkeys per transaction in the public sale.",

                "Q: How much will each Cosmic Monkey cost at mint?",
                "A: Each Cosmic Monkey will cost 0.088 ETH for pre-sale and 0.11 ETH for public sale.",

                "Q: How do I mint a Cosmic Monkey?",
                "A: You will be able to mint the Monkeys on our website which will be linked throughout the Discord pre-launch. The Cosmic Monkey website will also have directions explaining how to mint and where to mint. Check our website and social handles(@CosmicMonkeyClub) frequently to stay informed!",

                "Q: What token/chain is the Cosmic Monkey Club hosted on?",
                "A: The Cosmic Monkey Club will be an Etherum-based (ERC-721) NFT collection.",

                "Q: How can I get whitelisted?",
                "A: Join our social media platforms including Twitter, Discord, & Instagram to have a chance at receiving whitelist eligibility. The whitelist form will be accessible in limited time frames and announced throughout our handles.",

                "Q: When is the official Cosmic Monkey launch?",
                "A: The official launch date for presale is January 18th, and the public sale is January 19th.",
              ]}
            />
            </FadeIn>
            <Divider />
            <Footer />
          </div>
        </section>
      </main>
    </ParallaxProvider>
  );
};

export default IndexPage;
