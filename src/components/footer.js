import React from "react";
import SocialMedia from "./socialmedia";
import { StaticImage } from "gatsby-plugin-image";

function Footer(){
    return(
        <div className="py-6 grid grid-cols-1 md:grid-cols-3">
        <div className="inline-block text-center md:text-left pb-6 md:pb-0"></div>
        <div className="inline-block text-center">
          <StaticImage
            src="../images/cmc-logo1.png"
            alt="Cosmic Space Monkey Logo"
            placeholder="blurred"
            className="w-40"
          />
        </div>
        <div className="text-center md:text-right pt-4 inline-block mt-auto">
          <SocialMedia />
          <div className="pt-4">&copy; 2021 Website</div>
        </div>
      </div>
    )
}

export default Footer