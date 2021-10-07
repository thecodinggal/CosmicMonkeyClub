import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function FullImageSection() {
  return (
    <main className="mx-auto">
      <div className="space stars1"></div>
      <div className="space stars2 z-0"></div>
      <div className="space stars3 z-0"></div>
      <section className="h-5/6 relative overflow-x-hidden">
        <div>
          <StaticImage
            src="../images/rocket.png"
            alt="Cosmic Monkey Club"
            layout="fullWidth"
            className="animate-rocket"
          />
        </div>
      </section>
    </main>
  );
}
