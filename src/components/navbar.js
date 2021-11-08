import React from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./socialmedia";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between p-2 navbar-expand-lg bg-black shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/" className="inline-block mr-4">
                <StaticImage
                  src="../images/cmc-logo1.png"
                  alt="Cosmic Monkey Club logo"
                  placeholder="blurred"
                  layout="fullWidth"
                  className="w-16"
                />
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
              <li className="md:flex items-center">
                <Link to="/#mint">
                  <span className="inline-block ml-2 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-primary-lightblue">
                    Mint
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/#roadmap">
                  <span className="inline-block ml-2 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-primary-lightblue">
                    Roadmap
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/#story">
                  <span className="inline-block ml-2 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-primary-lightblue">
                    Story
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/#team">
                  <span className="inline-block ml-2 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-primary-lightblue">
                    Team
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/#FAQ">
                  <span className="inline-block ml-2 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-primary-lightblue">
                    FAQ
                  </span>
                </Link>
              </li>
              <li className="lg: pl-10 lg:flex items-center text-center inline-block">
              <SocialMedia />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
