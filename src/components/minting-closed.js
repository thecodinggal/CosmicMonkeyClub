import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import React from "react";


export default function Minting(){
    return(
        <section className="text-center">
            <div className="bg-primary-lightblue text-black p-4 text-center mt-10 text-xl">
                <p>Launch date to be determined.</p>
                <p>Join the Discord to keep up to date with the latest news.</p>
                <a href="https://discord.gg/cosmicnft" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faDiscord} className="text-5xl mt-2 text-black hover:text-white"/></a>
            </div>
        </section>
    )
}
