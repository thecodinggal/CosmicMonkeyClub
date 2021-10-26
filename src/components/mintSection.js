import React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "./button";

import ProgressBar from "./progressbar";

export default function Mint() {
  // -- change these states if needed --
  const [currentPrice, setCurrentPrice] = useState(2.05); //fill this in with currentPrice
  const [countdownDate, setCountdownDate] = useState(
    new Date("October 26, 2021 14:00:00").getTime()   //set the date to when you want to start the sale
  );
  const [currentNum, setCurrentNum] = useState(6932);
  const [totalNum, setTotalNum] = useState(10000);

  // -- do not change states below this --
  const [tokenQty, setTokenQty] = useState(1); //default amount of NFTs to mint is 1
  const timerRef = useRef();
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }
      if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      }
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      }

      if(seconds >= 0){
      setTimer({ hours, minutes, seconds });
      }
      else{
        clearInterval(timerRef.current)
      }
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setNewTime(), 1000);
    return () => {
      clearInterval(timerRef.current);
    }
  }, []);

  //changes value to max if user input exceeds maxLength
  const maxLengthCheck = (obj) => {
    if (obj.target.value > obj.target.maxLength){
      obj.target.value = obj.target.maxLength;
    }
  }

  return (
    <section>
      <div className="p-4 mt-10 text-xl welcomeBanner">
        <p className="text-3xl text-white text-center font-semibold italic">Public Sale</p>
        <div className="container justify-center display pt-4 block lg:flex">
          {/* Start of left (Mint Info) section */}
          <div className="text-center lg:text-left flex-auto lg:max-w-2xl">
            <h2 className="text-6xl font-light">
              {timer.hours || "00"}:{timer.minutes || "00"}:
              {timer.seconds || "00"}
            </h2>
            <h4 className="text-primary-red">UNTIL AUCTION ENDS</h4>
            <h2 className="text-6xl font-light pt-4">{currentPrice} ETH</h2>
            <h4 className="text-primary-red">CURRENT PRICE</h4>
            <div className="pt-4">
              <ProgressBar currentNum={currentNum} totalNum={totalNum}/>{" "}
            </div>
          </div>
          {/* Start of right (Mint) section */}
          <div className=" text-black bg-primary-lightblue mt-4 md:mt-0 p-2 flex-auto lg:max-w-sm lg:ml-20">
            <h3 className="mb-2 text-center text-3xl">Mint Cosmic Monkeys</h3>
            <p className="leading-tight text-lg">
              1. Enter the number of tokens to mint
            </p>

            <p className="text-base pt-2">Number of tokens to mint</p>
            <input
              type="number"
              min="1"
              maxLength="15"
              onInput={maxLengthCheck}
              value={tokenQty}
              onChange={(val) => {
                setTokenQty(val.target.value);
              }}
              className="pl-4 w-full bg-transparent border-b"
              style={{backgroundColor: 'transparent'}}
              required
            />
            <p className="text-sm">*required</p>
            <p className="text-lg pt-4">
              2. Click the button to mint{" "}
              <span className="text-primary-red font-medium">{tokenQty}</span>&nbsp;Cosmic
              Monkey{tokenQty === 1 ? "" : "s"} for a total of{" "}
              <span className="text-primary-red font-medium">
                {(currentPrice * tokenQty).toFixed(2)}
              </span>
              &nbsp;ETH.
            </p>
            <div className="text-center py-2">
              <Button href="/home/#mint">Mint Monkeys</Button>
            </div>
            <p className="text-base">
              Note: You can mint a maximum number of 15 monkeys per transaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
