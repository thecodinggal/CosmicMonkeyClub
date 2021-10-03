import React from "react";
import SocialMedia from "./socialmedia";
import { StaticImage } from "gatsby-plugin-image";

export default function FullImageSection() {
    return(
<main className="mx-auto">
        <div class="space stars1 animate-twinkle"></div>
        <div class="space stars2 z-0"></div>
        <div class="space stars3 z-0"></div>
        {/* <div className="text-right pr-6">
          <SocialMedia />
        </div> */}
        <section className="h-5/6">
          <div>
            <StaticImage
              src="../images/BANNER.jpeg"
              alt="Cosmic Monkey Club"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
        </section>
    </main>
    )
}