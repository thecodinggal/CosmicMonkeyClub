import React from "react";
import FullTextSection from "./FullTextSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope, faMeteor, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Roadmap() {
  return (
    <section>
      <div>
        <FullTextSection
          header="Oribital Milestones"
          body={[
            "Space is a lonely place, so the monkeys take community very seriously. Here's the roadmap for the CMC universe:",
          ]}
        />
        <div
          id="infographic"
          className="flex flex-col items-center py-5"
        >
          <div className="step one">
            <div className="circle">
              <span><FontAwesomeIcon className="text-7xl" icon={faGlobeEurope} /></span>
              <h4>
                Phase 1 Missions
              </h4>
            </div>
            <article data-step="1">
              <header className="flex items-center ">
                <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Public Mint/Half Metadata Reveal</h6>
              </header>
            </article>
            <article data-step="2">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Full Metadata Reveal</h6>
              </header>
            </article>
            <article data-step="3">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Reward All Holding Owners From Mint An Exclusive Poap *Poap* - https://Poap.Xyz/</h6>
              </header>
            </article>
            <article data-step="4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Exclusive Merchandise Drop to All Cosmic Monkey Holders</h6>
              </header>
            </article>
            <article data-step="5">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Teaser Trailer for Animated Series (Introduce New Character)</h6>
              </header>
            </article>
          </div>
          <div className="step two ">
            <div className="circle">
              <span><FontAwesomeIcon icon={faRocket} /></span>
              <h4>
                Phase 2
              </h4>
            </div>
            <article data-step="6">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>CMC Podcast w/ Exclusive Members (Ft. Paid Participants) Weekly/Bi-monthly</h6>
              </header>
            </article>
            <article data-step="7">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Casino Update</h6>
              </header>
            </article>
            <article data-step="8">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Launch Second NFT Collection Featuring New Main Character Seen in Teaser Trailer (Presale to Existing Holders)</h6>
              </header>
            </article>
            <article data-step="9">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Announce New Partnerships/Exclusive Events</h6>
              </header>
            </article>
            <article data-step="10">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Full Animated Series Trailer</h6>
              </header>
            </article>
          </div>


          <div className="step three">
            <div className="circle">
              <span><FontAwesomeIcon className="text-7xl" icon={faGlobeEurope} /></span>
              <h4>
                Phase 3 Missions
              </h4>
            </div>
            <article data-step="11">
              <header className="flex items-center ">
                <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Cage Your Ape for X Days and Receive New 3D Render NFT of Your Monkey</h6>
              </header>
            </article>
            <article data-step="12">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>IRL Private Members Club Partnership Announced</h6>
              </header>
            </article>
            <article data-step="13">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Exclusive CMC Casino Launch</h6>
              </header>
            </article>
            <article data-step="14">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Exclusive Members Only Events/Meetups</h6>
              </header>
            </article>
            <article data-step="15">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faMeteor} /></span>
                <h6>Episode One Release of Series</h6>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
