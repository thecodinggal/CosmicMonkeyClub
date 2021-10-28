import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";

export default function ProgressBar({ currentNum, totalNum }) {
const [percentage, setPercentage] = useState(0);
useEffect(() => {
  setPercentage(Math.floor(currentNum/totalNum * 100))
}, [currentNum, totalNum])
  return (
    <div className="py-4 text-white">
      <div className="bg-primary-red h-4 w-full rounded-xl">
        {/*Progress of loading bar - ToDo: Add math for calculating what % the loading bar will be */}
        <div id="progress-done" className="bg-primary-lightblue w-5 h-full rounded-xl" style={{
          transition: '1s ease',
          width: `${percentage}%`
        }}
        >
          <div className="relative text-right">
            <span className="text-5xl -top-4"><FontAwesomeIcon icon={faRocket} style={{transform: 'rotate(45deg)'}} /></span>
          </div>
        </div>
      </div>
      <div className="text-primary-red pt-4">{currentNum === 0 ? 'Cosmic Monkeys are not yet available' : currentNum + '/' + totalNum + ' of Cosmic Monkeys minted'} </div>
    </div>
  );
}
