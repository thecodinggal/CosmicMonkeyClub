import React, { useState } from "react";
import FullTextSection from "./FullTextSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";

import { StaticImage } from 'gatsby-plugin-image';

export default function Roadmap() {
  const [IsActive, setIsActive] = useState([false, false])
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
            "Space is a lonely place, so the monkeys take community very seriously. Here's the roadmap for the Cosmic Monkey Universe:",
          ]}
        />
        <div
          id="roadmap"
          className="flex flex-col items-center py-5"
        >
          <div className="step one grid-rows-1 md:grid-rows-2 text-white">
            <div className="circle md:absolute md:right-2/4">
              {/* <FontAwesomeIcon className="text-7xl mb-4" icon={faSatellite} /> */}
              <StaticImage
              src="../images/planet-1.png"
              alt="Phase 1 Planet"
              placeholder="blurred"
              layout="fullWidth"
            />
            </div>
            <article data-step="1" className="md:left-2/4 pt-6 md:pt-0">
              <header className="flex items-center" onClick={() => (toggleActive(0))}>
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Public Mint</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[0] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
            <article data-step="2" className="md:left-2/4">
              <header className="flex items-center " onClick={() => (toggleActive(1))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Full Metadata Reveal</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[1] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
            <article data-step="3" className="md:left-2/4">
              <header className="flex items-center " onClick={() => (toggleActive(2))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Reward All Holders with POAP</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[2] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
            <article data-step="4" className="md:left-2/4">
              <header className="flex items-center " onClick={() => (toggleActive(3))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Exclusive Merchandise Drop to All Cosmic Monkey Holders</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[3] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
            <article data-step="5" className="md:left-2/4">
              <header className="flex items-center " onClick={() => (toggleActive(4))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Teaser Trailer for Animated Series</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[4] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
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
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>CMC Podcast w/ Exclusive Members</h6>
              </header>
            </article>
            <article data-step="7" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Public Merchandise Release</h6>
              </header>
            </article>
            <article data-step="8" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Launch Subsequent NFT Collection</h6>
              </header>
            </article>
            <article data-step="9" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Announce New Partnerships and In Person Events</h6>
              </header>
            </article>
            <article data-step="10" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Full Animated Series Trailer</h6>
              </header>
            </article>
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
              <header className="flex items-center ">
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Cage Your Ape Event</h6>
              </header>
            </article>
            <article data-step="12" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Private Members Club</h6>
              </header>
            </article>
            <article data-step="13" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Cosmic Monkey Scavanger Hunt</h6>
              </header>
            </article>
            <article data-step="14" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Metaverse Launch</h6>
              </header>
            </article>
            <article data-step="15" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Animated Series Pilot</h6>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
