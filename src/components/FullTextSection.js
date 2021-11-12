import React from "react";

export default function FullTextSection({ id, header, body, decor, headerColor }) {
  return (
    <section className="container pt-8" id={id}>
      <div>
        <h1 className={`${headerColor || 'text-primary-red'} text-3xl font-bold italic`}>
          {header}
        </h1>
        <div className={`leading-relaxed text-white ${decor || ""}`}>
        {/*         {
            props.content.map(content => content.type === "card" ? (
                    <Card title={content.title} />
                ) : (
                    <Content title={content.title} paragraph={content.guideline} />
                )
        )} */}
        {body.map((text, index) =>
        text.charAt(0) === '~' ? 
        (
          
          <p
            className={`pt-2 pl-1 text-center`}
            key={index}
          >
            {text.substring(1)}
          </p>
        ) : (
          
          <p
            className={`pt-2 pl-1`}
            key={index}
          >
            {text}
          </p>
        )
        )}
        </div>
      </div>
    </section>
  );
}
