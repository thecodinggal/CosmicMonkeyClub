import React from "react";
import Accordion from "./Accordion";

export default function Dropdown({ id, header, body, headerColor }) {
  return (
    <section className="container pt-8" id={id}>
      <div>
        <h1
          className={`${
            headerColor || "text-primary-red"
          } text-3xl font-bold italic`}
        >
          {header}
        </h1>
        <div className="leading-relaxed text-white">
          {body.map((text, index) => {
            //if index is even or 0, it is a Question/Title. If it is odd, it is an answer.
            //this will make the title and make the second text an answer/dropdown.
            if(index%2 === 0){
            return(
            <Accordion title={text} key={index}>
              {body[index+1]}
            </Accordion>
            )}
          })}
        </div>
      </div>
    </section>
  );
}
