import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import Parallax from "react-scroll-parallax/cjs/components/Parallax";

export default function FullImageSection() {
  return (
    <main className="mx-auto">
          {/* <div className="space stars1"></div>
      <div className="space stars2 z-0"></div> */}
      <section>
        <div className="text-white text-4xl absolute bottom-3 w-full text-center z-50 hidden md:block">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="transition duration-200 ease-in-out z-50 animate-slow-bounce"/>
        </div>
        <div>
        <Parallax y={[-15,15]}>
        <StaticImage
            src="../images/BANNER.jpeg"
            alt="Cosmic Monkey Club"
          />
          </Parallax>
        </div>
      </section>
    </main>
  );
}
