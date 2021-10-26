import React from "react";
import { useState, useEffect } from "react";

export default function ProgressBar({ currentNum, totalNum }) {
const [percentage, setPercentage] = useState(0);
useEffect(() => {
  setPercentage(Math.floor(currentNum/totalNum * 100))
}, [currentNum, totalNum])
  return (
    <div className="py-4 text-white">
      <div className="bg-primary-red h-4 w-full rounded-xl overflow-hidden">
        {/*Progress of loading bar - ToDo: Add math for calculating what % the loading bar will be */}
        <div id="progress-done" className="bg-primary-lightblue w-5 h-full rounded-xl" style={{
          transition: '1s ease',
          width: `${percentage}%`
        }}
        ></div>
      </div>
      <div className="text-primary-red pt-2">{currentNum === 0 ? 'Cosmic Monkeys are not yet available' : currentNum + '/' + totalNum + ' of Cosmic Monkeys minted'} </div>
    </div>
  );
}
