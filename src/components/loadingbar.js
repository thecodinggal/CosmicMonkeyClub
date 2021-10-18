import React from "react";
//import { useState } from "react";

export default function LoadingBar({ currentNum, totalNum }) {

  return (
    <div className="py-4 text-white">
      {/* Total of loading bar */}
      <div className="bg-primary-red h-4">
        {/*Progress of loading bar - ToDo: Add math for calculating what % the loading bar will be */}
        <div className="inline-block bg-primary-lightblue w-full h-1"></div>
      </div>
      <div className="text-primary-red pt-2">{{currentNum} === 0? {currentNum} + '/' + {totalNum} + 'of Cosmic Monkeys minted' : 'Cosmic Monkeys are not yet available'} </div>
    </div>
  );
}
