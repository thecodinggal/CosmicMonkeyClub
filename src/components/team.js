import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import FullTextSection from "./FullTextSection";
import { StaticImage } from "gatsby-plugin-image";

function Team() {
  return (
    <section>
      <FullTextSection id="team" headerColor="text-primary-lightblue" header="The Team" body={[""]} />
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-x-6 lg:px-30">
        <div className="col-span-1 text-center pb-10 md:pb-0">
          <StaticImage
            src="../images/robot-monkey.png"
            alt="Andrew Kraus Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Andrew Kraus</h2>
          <p className="pb-2">Co-Founder</p>
          <a
            href="https://twitter.com/krauscrypto"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faTwitter} className="text-4xl" /></span>
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-kraus-a2476a15a"
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
            alt="Max Jacobs Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Max Jacobs</h2>
          <p className="pb-2">Co-Founder</p>
          <a
            href="https://instagram.com/maxjacobs_?utm_medium=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faInstagram} className="text-4xl" /></span>
          </a>
          <a
            href="https://www.linkedin.com/in/max-jacobs-819852203"
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
            src="../images/space-monkey.png"
            alt="Tobias Walker Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Tobias Walker</h2>
          <p className="pb-2">Illustration & Design</p>
          <a
            href="https://tobias-walker.com"
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
            src="../images/purple-monkey.png"
            alt="Katherine Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4">Katherine W</h2>
          <p className="pb-2">Web Development</p>
          <a
            href="https://twitter.com/thecodinggal"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faTwitter} className="text-4xl" /></span>
          </a>
          <a
            href="https://www.instagram.com/thecodinggal/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2"
          >
            {" "}
            <span className="text-4xl"><FontAwesomeIcon icon={faInstagram} className="text-4xl" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Team;
