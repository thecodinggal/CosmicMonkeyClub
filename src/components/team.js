import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import FullTextSection from "./FullTextSection";
import { StaticImage } from "gatsby-plugin-image";

function Team() {
  return (
    <section>
      <FullTextSection id="team" header="The Team" body={[""]} />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-6 md:px-40">
        <div className="col-span-1 text-center pb-10 md:pb-0">
          <StaticImage
            src="../images/robot-monkey.png"
            alt="Andrew Kraus Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4 pb-2">Andrew Kraus</h2>
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
        <div className=" col-span-1 text-center">
          <StaticImage
            src="../images/skeleton-monkey.jpeg"
            alt="Max Jacobs Cosmic Monkey"
            layout="fullWidth"
          />
          <h2 className="text-3xl pt-4 pb-2">Max Jacobs</h2>
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
      </div>
    </section>
  );
}
export default Team;
