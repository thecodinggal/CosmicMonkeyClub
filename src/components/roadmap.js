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
              All Cosmic Monkey holders will be rewarded an exclusive POAP. This proves authenticity of ownership to the club and represents a unique Cosmic Monkey badge. All POAP holders will receive access to high-profile CMC chats.
              </div>
            </article>
            <article data-step="4" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(3))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Exclusive Merchandise Drop</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[3] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              All Cosmic Monkey holders will be able to connect their Metamask to purchase Cosmic Monkey Merchandise. ONLY Cosmic Monkey holders will be able to purchase the limited edition merchandise drop.
              </div>
            </article>
            <article data-step="5" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(4))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Teaser Trailer for Animated Series</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[4] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The teaser to the official Cosmic Monkey animated series will be released to the public.
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
                <h6 className="w-full">CMC Podcast</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[5] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Podcast will be launched directly from the official Cosmic Monkey website. Hosting the podcast will be a high profile celebrity with other paid participants. Podcast is available to the public but only Cosmic Monkey holders will have access to the podcast chat.
              </div>
            </article>
            <article data-step="7" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full"  onClick={() => (toggleActive(6))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Public Merchandise Drop</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[6] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Everyone will be able to purchase Cosmic Monkey merchandise excluding limited edition merchandise. Merchandise will be available directly front the official Cosmic Monkey website.
              </div>
            </article>
            <article data-step="8" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(7))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Subsequent NFT Collection</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[7] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The team will launch the second Cosmic Monkey NFT collection. The collection's artwork & design is still under debate and all initial sketches will be published after our first launch. 
              </div>
            </article>
            <article data-step="9" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(8))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">In-Person Events</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[8] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The team will host in-person events worldwide for ONLY Cosmic Monkey holders. Events will consist of universal locations for networking, communications, & mingling. The team will host special events with renowned artists on occasion which will grant holders of Cosmic Monkeys VIP access.
              </div>
            </article>
            <article data-step="10" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <button className="header flex items-center md:flex-row-reverse w-full" onClick={() => (toggleActive(9))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Full Animated Series Trailer</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[9] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The official Cosmic Monkey animated series trailer will be released to the public.
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
                <h6 className="w-full">Cage Your Monkey Event</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[10] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Cosmic Monkey holders will be able to “lock up” their monkey for a limited amount of time. This enables holders to claim exclusive Cosmic Monkey POAPs and receive a 3D render of their Cosmic Monkey. 
              </div>
            </article>
            <article data-step="12" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(11))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Private Members Club</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[11] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Cosmic Monkey holders will be able to attend reciprocal clubs worldwide. This is aimed at those in the arts, media, technology, & communications. Members will receive incentives for participating in club activities in forms of metaverse and real-world incentives.
              </div>
            </article>
            <article data-step="13" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(12))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Metaverse Launch</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[12] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              The Cosmic Monkey 3D virtual world will be published. ONLY Cosmic Monkey holders will have access to the official Cosmic Monkey metaverse. Each holder will be able to interact with others using their own Cosmic Monkey.
              </div>
            </article>
            <article data-step="14" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(13))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Cosmic Monkey Scavenger Hunt</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[13] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Cosmic Monkey holders will go on a scavenger that will include both real world and metaverse tasks. Winners will receive monetary incentives, 1/1 NFTs, & the official Cosmic Monkey OG role.
              </div>
            </article>
            <article data-step="15" className="md:left-2/4">
              <button className="header flex items-center w-full" onClick={() => (toggleActive(14))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6 className="w-full">Launch of Animated Series</h6>
              </button>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[14] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Episode one of the official Cosmic Monkey animated series will be released to the public.
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
