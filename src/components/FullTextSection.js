import React from "react";

export default function FullTextSection({header, body}) {
  return (
    <section className="text-white container pt-8">
      <div>
        <h1 className="text-3xl font-bold">{header}</h1>
        {body.map((text, index) => (
          <p className="indent leading-relaxed pt-2" key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}
