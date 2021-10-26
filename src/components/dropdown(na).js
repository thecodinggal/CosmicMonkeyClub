import React from "react";

export default function Dropdown({ id, header, body, headerColor }) {
  const expandCloseDropdown = (obj) => {
    console.log(obj.currentTarget.key);
  }
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
        <div className={`leading-relaxed text-white`}>
          {body.map((text, index) => {
            if (index % 2 === 0) {
              return (
                <div className={`pt-2 pl-1 pb-2`} key={index} onClick={expandCloseDropdown}>
                  {text}
                </div>
              );
            }
            else{
              return (
                <div className={`pt-2 pl-1 hidden`} key={index}>
                  {text}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
