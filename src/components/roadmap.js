import React from "react";
import FullTextSection from "./FullTextSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope, faMeteor } from "@fortawesome/free-solid-svg-icons";

export default function Roadmap() {
  return (
    <section>
      <div className="px-40">
        <FullTextSection
          header="Oribital Milestones"
          body={[
            "Space is a lonely place, so the monkeys take community very seriously. Here's the roadmap for the CMC universe:",
          ]}
        />
        <div
          id="infographic"
          className="d-flex flex-column align-items-center py-5"
        >
          <div className="step one">
            <div className="circle">
              <FontAwesomeIcon className="text-7xl" icon={faGlobeEurope} />
              <h4>
                Orbital 1<br />
                Ready for this?
              </h4>
            </div>
            <article data-step="1">
              <header className="d-flex align-items-center text-primary">
                <FontAwesomeIcon icon={faMeteor} />
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>

                <div className="d-flex justify-content-between mt-3 controls">
                  <a> </a>
                  <a className="btn btn-outline-primary" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
            <article data-step="2">
              <header className="d-flex align-items-center text-primary">
                <i className="fas fa-meteor"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>
                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-primary" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-primary" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
            <article data-step="3">
              <header className="d-flex align-items-center text-primary">
                <i className="fas fa-meteor"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>
                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-primary" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-primary" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
            <article data-step="4">
              <header className="d-flex align-items-center text-primary">
                <i className="fas fa-meteor"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>
                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-primary" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-primary" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
            <article data-step="5">
              <header className="d-flex align-items-center text-primary">
                <i className="fas fa-meteor"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>
                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-primary" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-primary" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="step two text-success">
            <div className="circle">
              <i className="fas fa-cookie-bite"></i>
              <h4>
                STEP 2.
                <br />
                You're doing great!
              </h4>
            </div>
            <article data-step="6">
              <header className="d-flex align-items-center text-success">
                <i className="fas fa-cookie-bite"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>

                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-success" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-success" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
            <article data-step="7">
              <header className="d-flex align-items-center text-success">
                <i className="fas fa-cookie-bite"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>
                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-success" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-success" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
            <article data-step="8">
              <header className="d-flex align-items-center text-success">
                <i className="fas fa-cookie-bite"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>
                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-success" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-success" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
            <article data-step="9">
              <header className="d-flex align-items-center text-success">
                <i className="fas fa-cookie-bite"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>
                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-success" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-success" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
            <article data-step="10">
              <header className="d-flex align-items-center text-success">
                <i className="fas fa-cookie-bite"></i>
                <h6>Lorem Ipsum dolor sit Amet</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </small>
                <div className="d-flex justify-content-between mt-3 controls">
                  <a className="btn btn-outline-success" href="#">
                    Prev
                  </a>
                  <a className="btn btn-outline-success" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
