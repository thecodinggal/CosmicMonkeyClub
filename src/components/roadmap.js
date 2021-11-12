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
            "Space is a lonely place, so the monkeys take community very seriously. Here's the roadmap for the Cosmic Monkey Universe (click on each roadmap for more details):",
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
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Public Mint</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[0] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              10,000 Cosmic Monkeys will be available to mint without metadata being revealed.
              </div>
            </article>
            <article data-step="2" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(1))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Full Metadata Reveal</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[1] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              All Cosmic Monkeys will be revealed for Cosmic Monkey Holders.
              </div>
            </article>
            <article data-step="3" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(2))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Reward POAP</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[2] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              All Cosmic Monkey holders,**at time of wallet scan,** will be rewarded an exclusive POAP. This proves authenticity of ownership to the club and represents a unique Cosmic Monkey badge. All POAP holders will receive access to high-profile Cosmic Monkey chat rooms and databases.
              </div>
            </article>
            <article data-step="4" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(3))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">DAO</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[3] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The club will establish a DAO permitting members the ability to vote upon ways of spending capital from the community wallet. All Cosmic Monkey holders will have access to a voting system, issuing ways of executing & conducting the CMC roadmap and other forms of utility. 
              </div>
            </article>
            <article data-step="5" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(4))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Exclusive Merchandise Giveaway</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[4] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              All Cosmic Monkey x BALR holders will receive the opportunity to redeem BALR gear for FREE. Only Cosmic Monkey holders will be able to connect their Metamask to claim a first edition collaboration of BALR x Cosmic Monkey merchandise.
              </div>
            </article>
            <article data-step="5-2" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(15))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Travel Agency</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[15] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              All Cosmic Monkey holders will have access to the luxurious Cosmic Monkey travel agency. For certain Cosmic Monkey holders, a predetermined percentage of the total trip cost will be covered by the club. The travel agency will be established through Virtuoso and available to all CMC members 24/7.
              </div>
            </article>
            <article data-step="5-3" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(16))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Cosmic Monkey Podcast</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[16] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The Cosmic Monkey podcast will be hosted directly from the official Cosmic Monkey website. Hosted by a high-profile celebrity(TBD), only CMC members will be able to watch the podcast. The podcast will feature professional footballers, a variety of celebrities & the most worthy Cosmic Monkey holders.
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
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(5))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">“The Stadium” Launch</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[5] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The Cosmic Monkey 3D virtual stadium will be published. ONLY Cosmic Monkey holders will have access to the official Cosmic Monkey metaverse. The metaverse will be a virtual football stadium in which each specific Cosmic Monkey has their own seat in the stadium differentiating with rarity. All Cosmic Monkey holders will be able to interact with others using their own Cosmic Monkey.
              </div>
            </article>
            <article data-step="7" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full"  onClick={() => (toggleActive(6))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Public Merchandise Drop</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[6] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Everyone will be able to purchase Cosmic Monkey merchandise excluding limited edition merchandise. Merchandise will be available directly from the official Cosmic Monkey website. All Cosmic Monkey x BALR holders will receive 10% off on all BALR merchandise for LIFE.
              </div>
            </article>
            <article data-step="8" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(7))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Cosmic Monkey Treasure Hunt</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[7] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Cosmic Monkey holders will have the ability to participate in the club's official treasure hunt. The treasure hunt can be completed virtually but not limited to virtual tasks. Individuals who complete the treasure hunt will receive a whitelist ability to subsequent drops, 1/1 NFTs, & a chance to meet professional footballers.
              </div>
            </article>
            <article data-step="9" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(8))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Reciprocal Clubs (IRL Events)</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[8] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The team will host in-person events worldwide for ONLY Cosmic Monkey holders. Events will consist of universal locations for networking, communications, & mingling. The team will host special events with renowned artists which will grant holders of Cosmic Monkeys VIP access.
              </div>
            </article>
            <article data-step="10" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(9))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Meet-ups with Footballers & Celebrities</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[9] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              All Cosmic Monkey holders will have a chance of acquiring the opportunity to meet professional footballers from across the world via Zoom and in-person. The Cosmic Monkey Treasure Hunt, contests & giveaways throughout phase one and the beginning of phase two will decide who receives the opportunity of a lifetime.
              </div>
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
              <button className="header flex items-center w-full" onClick={() => (toggleActive(10))}>
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">433 x CMC Best Football Highlights - Animated Series</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[10] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Connected to “The Stadium”, the official Cosmic Monkey x 433 animated series will be released ONLY to Cosmic Monkey holders. The series will re-enact the best football games of all time with Cosmic Monkeys as the players. Official teams will be generated, relating to specific Cosmic Monkeys, based on a variety of contests and participation in CMC easter eggs throughout phase one and phase two. Watch your Cosmic Monkey on the pitch and compete against others!
              </div>
            </article>
            <article data-step="12" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(11))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Subsequent NFT Collection</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[11] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              ALL Cosmic Monkey holders will receive whitelist access to the subsequent collection. This will enable all Cosmic Monkey holders to mint an NFT to the subsequent collection for FREE. The collection's artwork & design is still under debate and all initial sketches will be published after our first launch.
              </div>
            </article>
            <article data-step="13" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(12))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Cage your Monkey Event</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[12] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Cosmic Monkey holders will be able to “cage” their Cosmic Monkey for a limited amount of time. This enables holders to claim an exclusive 3D rendered NFT of their Cosmic Monkey.
              </div>
            </article>
            <article data-step="14" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(13))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">433 App Launch</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[13] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              All Cosmic Monkey{`<>`}433 holders will have the opportunity to use the official 433 app first. Before anybody gets the chance to see the app, Cosmic Monkey{`<>`}433 holders will be able to download & interact with the app. This is just one of the many benefits of being a Cosmic Monkey{`<>`}433 owner.
              </div>
            </article>
            <article data-step="15" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(14))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">World Cup Qualifiers</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[14] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Cosmic Monkey holders will have the chance to win a FREE trip to the World Cup. After development and publication, “The Stadium” will determine the members who receive a trip to the World Cup. If unable to attend, winners can redeem NFTs and a variety of other packages as their prize!
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
