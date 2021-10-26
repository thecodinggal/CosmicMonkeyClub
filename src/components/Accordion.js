import React from "react";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`leading-relaxed text-white`}>
      <div className="accordion-wrapper mt-2">
        <div
          className={`accordion-title cursor-pointer border ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          {title}
        </div>
        <div className={`accordion-item overflow-hidden h-auto ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
