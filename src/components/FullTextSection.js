import React from "react";

export default function FullTextSection({id, header, body, decor}) {
  return (
    <section className="container pt-8" id={id}>
      <div>
        <h1 className="text-3xl font-bold italic text-primary-lightblue">{header}</h1>
        {body.map((text, index) => (
          <p className="indent leading-relaxed pt-2 text-white" key={index}>{text}</p>
          
        ))}
      </div>
    </section>
  );
}
