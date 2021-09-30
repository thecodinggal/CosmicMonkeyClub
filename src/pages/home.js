import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FullImageSection from "../components/fullImageSection";
import FullTextSection from "../components/FullTextSection";

// page
const IndexPage = () => {
  return (
    <main className="text-white pt-16">
      <Navbar />
      <section className="container mx-auto lg:px-40">
        <FullImageSection />
        <FullTextSection
          header="Welcome to the Cosmic Monkey Club"
          body="CMC is a collection of 10,000 Cosmic Monkey NFTs—unique digital collectibles living on the Ethereum blockchain. Your Cosmic Monkey doubles as your Cosmic Club membership card, and grants access to members-only benefits. Future areas and perks can be unlocked by the community through roadmap activation.
"
        />
                <FullTextSection
          header="Welcome to the Cosmic Monkey Club"
          body="CMC is a collection of 10,000 Cosmic Monkey NFTs—unique digital collectibles living on the Ethereum blockchain. Your Cosmic Monkey doubles as your Cosmic Club membership card, and grants access to members-only benefits. Future areas and perks can be unlocked by the community through roadmap activation.
"
        />
                <FullTextSection
          header="Welcome to the Cosmic Monkey Club"
          body="CMC is a collection of 10,000 Cosmic Monkey NFTs—unique digital collectibles living on the Ethereum blockchain. Your Cosmic Monkey doubles as your Cosmic Club membership card, and grants access to members-only benefits. Future areas and perks can be unlocked by the community through roadmap activation.
"
        />
      </section>
      <Footer />
    </main>
  );
};

export default IndexPage;
