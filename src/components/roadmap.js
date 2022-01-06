import React, { useState } from "react";
import FullTextSection from "./FullTextSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";

import { StaticImage } from 'gatsby-plugin-image';

export default function Roadmap() {
  const [IsActive, setIsActive] = useState([false])
  const toggleActive = (index) => {
    let newArr = [...IsActive];
    newArr[index] ? newArr[index] = false : newArr[index] = true
    setIsActive(newArr);
  }
  return (
    <section id="roadmap">
      <div className="mx-auto md:mx-0">
        <FullTextSection
          header="Mission Briefing"
          body={[
            "Space is a lonely place, so the monkeys take community very seriously. Click on each roadmap for more details:",
          ]}
        />
        <div
          id="roadmap"
          className="flex flex-col items-center py-5"
        >
          <div className="step one grid-rows-1 md:grid-rows-2 text-white">
            <div className="circle md:absolute md:right-2/4">
              <StaticImage
              src="../images/planet-1.png"
              alt="Phase 1 Planet"
              placeholder="blurred"
              layout="fullWidth"
            />
            </div>
            <article data-step="1" className="md:left-2/4 pt-6 md:pt-0">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(0))}>
              <div className="absolute -top-1 -left-2 text-xs">click to expand</div>
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90 animate-pulse" /></span>
                <h6 className="w-full">Genesis Mint</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[0] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Mint your unrevealed Cosmic Monkey on launch day!
              </div>
            </article>
            <article data-step="2" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(1))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Reveal Day</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[1] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Artwork is revealed. Let the games begin!
              </div>
            </article>
            <article data-step="3" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(2))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Weekly Townhall Meetings</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[2] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The founding team will be hosting weekly meetings to discuss the project. Special guests will appear, be sure to stay up to date on our social media platforms to tune in live!
              </div>
            </article>
            <article data-step="4" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(3))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Merchandise Giveaway!</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[3] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              A limited number of Cosmonauts will receive free CMC apparel. This exclusive merchandise drop will only be available to Cosmic Monkey holders.</div>
            </article>
            <article data-step="5" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(4))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">CMC DAO</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[4] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The Treasury's money will now be controlled by the community!
              </div>
            </article>
            {/* <article data-step="5-2" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(15))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Title here</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[15] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Text here
              </div>
            </article>
            <article data-step="5-3" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(16))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Title here</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[16] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Text here
              </div>
            </article> */}
          </div>

          <div className="step two ">
            <div className="circle md:absolute md:left-2/4">
            <StaticImage
              src="../images/planet-2.png"
              alt="Phase 2 Planet"
              placeholder="blurred"
              layout="fullWidth"
            />
            </div>
            <article data-step="6" className="pt-6 md:pt-0 md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(5))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Sky Box</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[5] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Join your fellow simians in the Cosmic Monkey Skybox located at your favorite professional football stadiums!
              </div>
            </article>
            <article data-step="7" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full"  onClick={() => (toggleActive(6))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">The Vanishing Act</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[6] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              To burn or not to burn! Crucial decisions must be made!
              </div>
            </article>
            <article data-step="8" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(7))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Club Trips</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[7] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The Cosmic Money team has planned awesome trips for a select few of you. Compete against other simians to solidify your spot in the journey!
              </div>
            </article>
            <article data-step="9" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(8))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">CMC Treasure Hunt</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[8] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The one that has created us all has lost the Cosmic's most sacred treasures. Who will be the one to find it!?
              </div>
            </article>
            {/* <article data-step="10" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(9))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Title</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[9] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Text here
              </div>
            </article>
             */}
          </div>

          <div className="step three">
            <div className="circle md:absolute md:-translate-x-full md:right-2/4">
            <StaticImage
              src="../images/planet-3.png"
              alt="Phase 3 Planet"
              placeholder="blurred"
              layout="fullWidth"
            />
            </div>
            <article data-step="11" className="md:left-2/4 pt-6 md:pt-0">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(10))}>
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">”The Stadium” launch in Sandbox</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[10] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Fellow simians, come join us at our very own Cosmic Monkey stadium in Sandbox!
              </div>
            </article>
            <article data-step="12" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(11))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">CMC Meet-ups</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[11] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Party, network, & connect with fellow simians. These meet-ups will occur worldwide, allowing all members to access exclusive Cosmic Monkey events.
              </div>
            </article>
            <article data-step="13" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(12))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Collection Two</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[12] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Cosmic Monkey Club will expand the club. At the launch of the second Cosmic Monkey collection, all Cosmic Monkey holders will receive a free NFT from this collection. 
              </div>
            </article>
            <article data-step="14" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(13))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">World Cup Qualifiers</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[13] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Compete against other simians for a chance to go to the World Cup 2022 in Qatar!
              </div>
            </article>
            {/* <article data-step="15" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(14))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Title Here</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[14] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Text here
              </div>
            </article> */}
          </div>
        </div>
        <div className="text-center font-bold">And many more surprises along the way! Wen Roadmap 2.0?</div>
      </div>
    </section>
  );
}
