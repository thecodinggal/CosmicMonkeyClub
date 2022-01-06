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
      <section className="relative">
        <div className="text-white text-4xl absolute bottom-3 w-full text-center z-50 block">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="transition duration-200 ease-in-out z-50 animate-slow-bounce"/>
        </div>
        <div className="hidden md:block absolute bottom-0 right-0 md:z-50">
        <StaticImage
                  src="../images/cmc-logo1.png"
                  alt="Cosmic Monkey Club logo"
                  placeholder="blurred"
                  className="w-20 md:w-72"
                />
        </div>
        <div className="-mt-10">
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
