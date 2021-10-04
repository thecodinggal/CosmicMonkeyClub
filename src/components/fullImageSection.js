import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function FullImageSection({ image }) {
  return (
    <main className="mx-auto">
      <div className="space stars1 animate-twinkle"></div>
      <div className="space stars2 z-0"></div>
      <div className="space stars3 z-0"></div>
      <section className="h-5/6">
        <div>
          <StaticImage
            src="../images/spaceship.jpeg"
            alt="Cosmic Monkey Club"
            layout="fullWidth"
          />
        </div>
      </section>
    </main>
  );
}
