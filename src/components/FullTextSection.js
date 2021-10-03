import React from "react";

export default function FullTextSection({header, body}) {
  return (
    <section className="text-white container pt-8">
      <div>
        <h1 className="text-3xl font-bold">{header}</h1>
        {body.map((text) => (
          <p className="indent leading-relaxed pt-2">{text}</p>
        ))}
      </div>
    </section>
  );
}
