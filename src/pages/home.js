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
          body={[
            "10,000 Space Monkeys were launched into The Void with efforts to create an appreciating asset with meaningful real-world incentives.",
            "See the full story below.",
          ]}
        />
        <FullTextSection
          id="story"
          header="The Journey"
          body={[
            "Our complicated universe is fractionalized into dimensions in which our brain processes as atoms. Therefore, a two-dimensional object is made up of one-dimensional objects, in which the two-dimensional object can perceive the first dimension. A three-dimensional object is made up of two-dimensional objects allowing the three-dimensional object the ability to process and perceive the second dimension. Our three-dimensional universe is relative to space, as in, space being infinite. The fourth dimension is relative to time, as in, time being infinite.",
            "The beings before us developed a plant-based vortex, The Void, made up of active mycelium. The spherical field of energy they created allowed them to travel faster than the speed of light, instantly. The scientists of the Cosmic Monkey Club evolved and created the travel TO TIME. The Cosmic scientists were skeptical of their discovery and tested their mechanism on monkeys as a monkey’s brain has the most closely related chemical structure and physical capabilities to a homosapien. Their ambitions and motives to send the monkeys through The Void was to discover the fourth dimension, time.",
            " The undercover launch of these monkeys resided in the hands of two beings. The Cosmic Monkey Club sent the first monkey in the calendar year 7598. The club did not release any news to the public nor specify their motives in their discovery. The club released promotional videos that depicted objects such as bottles, plates, and food disappearing through thin air on their website. As anyone would infer this, the public viewed it as a publicity stunt. ",
            "The Cosmics continued their research, through The Void, by sending cameras and chips to track the monkeys. Based on the club’s records, they launched various objects and monkeys up until the calendar year of 7600. After their 444th launch, one of the two beings accidentally got sucked into The Void as a monkey wouldn’t let go of him prior to launch... The Void has now been infiltrated by it’s first “human”. The other scientist supposedly destroyed all of the equipment and active mycelium. He left town and was never heard of again.",
            "Year 7628: After spending decades in the jungle, surviving from hunting and gathering, the being decided to retrieve the camera equipment. He proceeded to the spot under the tree in front of his old house. In order to do that, he dug a tunnel underground to the location using GPS. After 26 years of digging, he hit the spot. Only to reveal that the tree was gone. Someone dug up the equipment.",
            "Who has access to the cameras?",
            "How long have they had access?",
            "WHERE ARE THE MONKEYS?",
          ]}
        />
      </section>
      <Footer />
    </main>
  );
};

export default IndexPage;
