import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FullImageSection from "../components/fullImageSection";
import FullTextImgSection from "../components/FullTextImgSection";
import FullTextSection from "../components/FullTextSection";
import Roadmap from "../components/roadmap";
import Team from "../components/team";
import Minting from "../components/minting-closed";
import Divider from "../components/divider";
import sketchVideo from "../images/rocket_timeline.mp4";

// page
const IndexPage = () => {
  return (
    <main className="text-white pt-16">
      <Navbar />
      <section className="mx-auto">
        <FullImageSection />
        <div className="cotainer px-10 md:px-40">
          <FullTextImgSection
            header="Welcome to the Cosmic Monkey&nbsp;Club"
            body={[
              "Cosmic Monkey Club is a collection of 10,000 Cosmic Monkey NFTs- immutable digital collectibles traveling through the Ethereum Blockchain. Future membership of the club will grant exclusive access to reciprocal clubs, bi-monthly casino dividends, a travel agency, giveaways/events, and meet-ups with our favorite celebrities/athletes. Cosmic Monkey animated series is being produced enabling us to watch our monkeys through The Void. Alongside, we will host a podcast with the highest-honored celebrities, strictly from this website."
            ]}
          />
          <Divider />
          <FullTextSection
            id="mint"
            header="Auction Distribution"
            headerColor="text-primary-lightblue"
            body={[
              "10,000 Cosmic Monkeys will be available to mint in a public Dutch Auction. The price of the Cosmic Monkeys will start at 3 ETH and gradually reduce to a price of 0.05 ETH over the span of 9 hours. This style of auction allows for the community to set a fair market value for the Cosmic Monkey NFTs and mitigates gas wars (Etherum transaction fees).",
            ]}
          />
          <Minting />
          <Divider />
          <Roadmap />
          <Divider />
          <FullTextSection
            id="story"
            header="Our Journey"
            headerColor="text-primary-lightblue"
            body={[
              "Our artist, Orlando de La Paz, has gifted and illustrated each Cosmic Monkey with unique traits, characteristics, and backgrounds. Inspiration from Disney, highlights and differentiates each Cosmic Monkey from one another adhering to distinct rarity. Cosmic Monkey club is producing a public animated series featuring content from The Void. Illustration and design from our one and only, Orlando de La Paz.",
            ]}
          />
          <video className="pt-6" controls>
          <source src={sketchVideo} type="video/mp4" />
          </video>
          <Divider />
          <Team />
          <Divider />
          <FullTextSection
            id="FAQ"
            header="FAQ"
            headerColor="text-primary-lightblue"
            body={[
              "Q: How many Cosmic Monkeys entered The Void?",
              "A: There will be 10,000 Cosmic Monkeys that enter The Void and are available for tracking. Each monkey is illustrated and microchipped by Disney Illustrator Orlando De La Paz and Tobias Walker!",
              " ",
              "Q: What is the maximum amount of Cosmic Monkeys that you can mint and track?",
              "A: Maximum number of Cosmic Monkeys available per transaction during mint is 15 Monkeys. You can own an unlimited amount of Cosmic Monkeys.",
              " ",
              "Q: How much will each Cosmic Monkey cost at mint?",
              "A: The style of the mint will be a dutch auction allowing all members of the community the ability to join the club! Starting at 3ETH the cost of mint will be reduced until it reaches a floor of .05ETH over the span of 9 hours.",
              " ",
              "Q: How do I mint a Cosmic Monkey?",
              "A: You will be able to mint the Monkeys on our website which will be linked throughout the Discord pre-launch. The Cosmic Monkey website will also have directions explaining how to mint and where to mint. Check our website and social handles(@CosmicMonkeyClub) frequently to stay informed!",
              " ",
              "Q: What token/chain is the Cosmic Monkey Club hosted on?",
              "A: The Cosmic Monkey Club will be an Etherum-based (ERC-721) NFT collection",
              " ",
              "Q: How can I get whitelisted?",
              "A: New members in the community will actively be whitelisted. The Cosmic Monkey Club is also hosting weekly competitions and winners will be automatically whitelisted. Spread the word on Discord & Twitter and if we see the effort, it will be reciprocated!",
              " ",
              "Q: When is the official Cosmic Monkey launch?",
              "A: We will be publishing the official launch date after we complete our club technically and aesthetically. An estimated launch date between Oct-21st to Nov-15th."
            ]}
          />
           <Divider />
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
