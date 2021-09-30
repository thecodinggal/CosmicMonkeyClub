import React from "react";

export default function FullTextSection({header, body}) {
  return (
    <section className="text-white container pt-12">
      <div>
        <h1>{header}</h1>
        <p>{body}</p>      
      </div>
    </section>
  );
}
