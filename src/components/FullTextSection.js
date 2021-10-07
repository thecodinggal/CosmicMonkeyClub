import React from "react";

export default function FullTextSection({ id, header, body, decor, headerColor }) {
  return (
    <section className="container pt-8" id={id}>
      <div>
        <h1 className={`${headerColor || 'text-primary-red'} text-3xl font-bold italic`}>
          {header}
        </h1>
        <div className={`leading-relaxed text-white ${decor || ""}`}>
        {body.map((text, index) => (
          <p
            className={`pt-2`}
            key={index}
          >
            {text}
          </p>
        ))}
        </div>
      </div>
    </section>
  );
}
