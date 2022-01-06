import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Minting() {
  return (
    <section className="text-center">
      <div className="bg-primary-lightblue text-black p-4 text-center mt-10 text-lg" style={{background: '-webkit-linear-gradient(#eee, #74c7ce)'}}>
        <table className="mx-auto">
        <tbody>
          <tr>
            <td className="pr-6">
              {" "}
              <h2 className="text-2xl underline">Presale:</h2>
              <p className="font-semibold">January 18th</p>
              <p>Price: 0.088 ETH</p>
            </td>
            <td className="pl-6 border-l">
              <h2 className="text-2xl underline">Public Sale:</h2>
              <p className="font-semibold">January 19th</p>
              <p>Price: 0.11 ETH</p>
            </td>
          </tr>
          </tbody>
        </table>

        <div className="pt-4">
          <p>Join the Discord to keep up to date with the latest news.</p>

          <span className="text-5xl">
            <a
              href="https://discord.gg/cosmicnft"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-5xl mt-2 text-black hover:text-white transition duration-200 ease-in-out"
              />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
