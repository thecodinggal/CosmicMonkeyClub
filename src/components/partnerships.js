import React from "react";
import { StaticImage } from "gatsby-plugin-image";


export default function Partnerships() {
  return (
    <main>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-20 lg:gap-30 pt-12 px-20">
        <div>
          <a target="_blank" href="https://www.433football.com/" rel="noreferrer"><StaticImage
            src="../images/433-logo.png"
            alt="433 logo"
            layout="fullWidth"
          /></a>
        </div>
        <div>
          <a target="_blank" href="https://www.balr.com/" rel="noreferrer"><StaticImage
            src="../images/balr-logo.png"
            alt="BALR Logo"
            layout="fullWidth"
          /></a>
        </div>
        <div>
        <a target="_blank" href="https://www.wannahaves.com/" rel="noreferrer"><StaticImage
            src="../images/wannahaves-logo.png"
            alt="Wannahaves logo"
            layout="fullWidth"
          /></a>
        </div>
        <div>
          <a target="_blank" href="http://www.juramy.com/" rel="noreferrer"><StaticImage
            src="../images/juramy-logo.jpeg"
            alt="Juramy logo"
            layout="fullWidth"
          /></a>
        </div>
        <div className="my-auto">
        <a target="_blank" href="https://chain.link/" rel="noreferrer">
          <StaticImage
            src="../images/chainlink.png"
            alt="Chainlink Logo"
            layout="fullWidth"
          /></a>
        </div>
      </div>
    </main>
  );
}
