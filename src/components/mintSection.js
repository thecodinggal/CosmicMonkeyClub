import React from "react";

import { useState, useEffect } from "react";
import { Button } from "./button";


import LoadingBar from "./loadingbar";

export default function Mint() {
  const [tokenQty, setTokenQty] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(3.2);
  const [timer, setTimer] = useState('00:00:00:00');
  var currentTime;

  const deadline = '22:00:00';

  function countDown(){
    currentTime = new Date();
    var tempTimer = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();
    setTimer(tempTimer);
  }

  useEffect(() => {
    setInterval(countDown, 100)
    return () => {
    clearInterval(countDown);
    }
  })
  return (
    <section className="">
      <div className="p-4 mt-10 text-xl">
        <p className="text-3xl text-primary-red text-center">Public Sale</p>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-x-2 pt-4">
          {/* Start of first section */}
          <div className="col-span-2 text-center md:text-left lg:pl-20 ">
            <h2 className="text-6xl font-light">{timer}</h2>
            <h4 className="text-primary-red">UNTIL AUCTION ENDS</h4>
            <h2 className="text-6xl font-light pt-4">{currentPrice} ETH</h2>
            <h4 className="text-primary-red">CURRENT PRICE</h4>
            <div className="pt-4">
              {/* Loading bar code*/}
              <LoadingBar />{" "}
            </div>
          </div>
          {/* Start of second section */}
          <div className="col-span-1 bg-primary-gray mt-4 md:mt-0 p-2">
            <h3 className="border-b mb-2 text-center">Mint</h3>
            <p className="leading-tight text-lg">
              Enter the number of tokens to mint
            </p>

            <p className="text-md">Number of tokens to mint</p>
            <input
              type="number"
              min="1"
              max="15"
              placeholder="1"
              value={tokenQty}
              onChange={(val) => {
                setTokenQty(val.target.value);
              }}
              className="text-black pl-4 w-full bg-transparent border-b"
            />
            <p className="text-lg pt-4">
              You are minting{" "}
              <span className="text-primary-red">{tokenQty}</span>&nbsp;Cosmic
              Monkey{tokenQty === 1 ? "" : "s"} for a total of{" "}
              <span className="text-primary-red">
                {currentPrice * tokenQty}
              </span>
              &nbsp;ETH.
            </p>
            <div className="text-center py-2">
              <Button href="/home/#mint">Mint</Button>
            </div>
            <p className="text-xs">
              Note: You can mint a maximum number of 15 monkeys per transaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
