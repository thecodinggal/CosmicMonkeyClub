import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function FullTextImgSection({ header, body, decor }) {
  return (
    <section className="container pt-8 grid grid-cols-1 md:grid-cols-3 gap-x-6">
      <div className="inline-block col-span-2">
        <h1 className="text-3xl font-bold italic text-primary-red">{header}</h1>
        {body.map((text, index) => (
          <p className="leading-relaxed pt-2 pl-1" key={index}>
            {text}
          </p>
        ))}
      </div>
      <div className="inline-block inline-grid grid-cols-2 gap-x-2 col-span-1 text-white pt-10 md:pt-0">
        <StaticImage
          src="../images/horns-monkey.jpeg"
          alt="Cosmic Monkey NFT"
          layout="fullWidth"
          className="max-w-lg"
        />
        <StaticImage
          src="../images/masked-monkey.jpeg"
          alt="Cosmic Monkey NFT"
          layout="fullWidth"
          className="max-w-lg"
        />

      </div>
    </section>
  );
}
