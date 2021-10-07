import React from "react";
import FullTextSection from "./FullTextSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope, faMeteor, faRocket, faSatellite } from "@fortawesome/free-solid-svg-icons";

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="mx-auto md:mx-0">
        <FullTextSection
          header="Oribital Roadmap"
          body={[
            "Space is a lonely place, so the monkeys take community very seriously. Here's the roadmap for the CMC universe:",
          ]}
        />
        <div
          id="roadmap"
          className="flex flex-col items-center py-5"
        >
          <div className="step one grid-rows-1 md:grid-rows-2">
            <div className="circle md:absolute md:right-2/4">
              <span className="text-7xl"><FontAwesomeIcon className="text-7xl mb-4" icon={faSatellite} /></span>
              <h4 className="text-4xl">
                Phase 1 Missions
              </h4>
            </div>
            <article data-step="1" className="md:left-2/4 pt-6 md:pt-0">
              <header className="flex items-center">
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Public Mint/Half Metadata Reveal</h6>
              </header>
            </article>
            <article data-step="2" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Full Metadata Reveal</h6>
              </header>
            </article>
            <article data-step="3" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Reward All Holding Owners From Mint An Exclusive Poap *Poap* - https://Poap.Xyz/</h6>
              </header>
            </article>
            <article data-step="4" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Exclusive Merchandise Drop to All Cosmic Monkey Holders</h6>
              </header>
            </article>
            <article data-step="5" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Teaser Trailer for Animated Series (Introduce New Character)</h6>
              </header>
            </article>
          </div>

          <div className="step two ">
            <div className="circle md:absolute md:left-2/4">
              <span className="text-7xl"><FontAwesomeIcon icon={faMeteor} className="text-7xl mb-4" /></span>
              <h4 className="text-4xl">
                Phase 2 Missions
              </h4>
            </div>
            <article data-step="6" className="pt-6 md:pt-0 md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>CMC Podcast w/ Exclusive Members (Ft. Paid Participants) Weekly/Bi-monthly</h6>
              </header>
            </article>
            <article data-step="7" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Casino Update</h6>
              </header>
            </article>
            <article data-step="8" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Launch Second NFT Collection Featuring New Main Character Seen in Teaser Trailer (Presale to Existing Holders)</h6>
              </header>
            </article>
            <article data-step="9" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Announce New Partnerships/Exclusive Events</h6>
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
              <span className="text-7xl"><FontAwesomeIcon className="text-7xl mb-4" icon={faGlobeEurope} /></span>
              <h4 className="text-4xl">
                Phase 3 Missions
              </h4>
            </div>
            <article data-step="11" className="md:left-2/4 pt-6 md:pt-0">
              <header className="flex items-center ">
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Cage Your Ape for X Days and Receive New 3D Render NFT of Your Monkey</h6>
              </header>
            </article>
            <article data-step="12" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>IRL Private Members Club Partnership Announced</h6>
              </header>
            </article>
            <article data-step="13" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Exclusive CMC Casino Launch</h6>
              </header>
            </article>
            <article data-step="14" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Exclusive Members Only Events/Meetups</h6>
              </header>
            </article>
            <article data-step="15" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Episode One Release of Series</h6>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
