import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import FullTextSection from "./FullTextSection";
import { StaticImage } from "gatsby-plugin-image";

function Team() {
  return (
    <section>
      <FullTextSection id="team" headerColor="text-primary-lightblue" header="The Team" body={[""]} />
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-x-6 lg:px-30 pt-2">
        <div className="col-span-1 text-center pb-10 md:pb-0">
          <StaticImage
            src="../images/masked-monkey.jpeg"
            alt="Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Name Removed</h2>
          <p className="pb-2">Co-Founder</p>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faTwitter} className="text-4xl" /></span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faLinkedin} className="text-4xl" /></span>
          </a>
        </div>
        <div className=" col-span-1 text-center pb-10 md:pb-0">
          <StaticImage
            src="../images/skeleton-monkey.jpeg"
            alt="Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Ape 2</h2>
          <p className="pb-2">Co-Founder</p>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faInstagram} className="text-4xl" /></span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faLinkedin} className="text-4xl" /></span>
          </a>
        </div>

        <div className="col-span-1 text-center pb-10 md:pb-0">
          <StaticImage
            src="../images/robot-monkey.png"
            alt="Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Strategy Ape</h2>
          <p className="pb-2">Brand Strategy</p>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faTwitter} className="text-4xl" /></span>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faFacebook} className="text-4xl" /></span>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faInstagram} className="text-4xl" /></span>
          </a>
        </div>

        <div className="col-span-1 text-center pb-10 md:pb-0">
          <StaticImage
            src="../images/space-monkey.png"
            alt="Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Ape Artist</h2>
          <p className="pb-2">Illustration & Design</p>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faGlobe} className="text-4xl" /></span>
          </a>
        </div>
        <div className="col-span-1 text-center">
          <StaticImage
            src="../images/purple-monkey.jpeg"
            alt="Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Media Ape</h2>
          <p className="pb-2">Marketing</p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faGlobe} className="text-4xl" /></span>
          </a>
        </div>


      </div>
    </section>
  );
}
export default Team;
