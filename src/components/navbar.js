import React from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileCode } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./socialmedia";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" className="inline-block mr-4">
              COSMIC MONKEY CLUB
                {/* <StaticImage
                  src="../images/csm-logo.png"
                  alt="Cosmic Space Monkey Logo"
                  placeholder="blurred"
                  className="w-12"
                /> */}
            </Link>
            <button
              className="cursor-pointer text-xl leading-none lg:px-3 py-1 block lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-black lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link to="/#">
                  <span className="inline-block ml-2 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-primary-lightblue">
                    Mint
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/#">
                  <span className="inline-block ml-2 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-primary-lightblue">
                    Roadmap
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/#">
                  <span className="inline-block ml-2 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-primary-lightblue">
                    Team
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
              <SocialMedia />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
