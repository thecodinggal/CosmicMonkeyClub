import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import FullTextSection from "./FullTextSection";

export default function Partnerships() {
  return (
    <main>
      <FullTextSection
        id="media"
        header="Media Partners and Integrations"
        body={[" "]}
      />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-2 lg:gap-8 pt-4 filter grayscale">
        <div>
          <StaticImage
            src="../images/four-logo.jpeg"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
        <div>
          <StaticImage
            src="../images/balr-logo.png"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
        <div>
          <StaticImage
            src="../images/chainlink-logo.png"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
        <div>
          <StaticImage
            src="../images/juramy-logo.jpeg"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
        <div>
          <StaticImage
            src="../images/w-logo.png"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
      </div>

      {/*Color*/}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-2 lg:gap-8 pt-8">
        <div>
          <StaticImage
            src="../images/four-logo.jpeg"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
        <div>
          <StaticImage
            src="../images/balr-logo.png"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
        <div>
          <StaticImage
            src="../images/chainlink-logo.png"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
        <div>
          <StaticImage
            src="../images/juramy-logo.jpeg"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
        <div>
          <StaticImage
            src="../images/w-logo.png"
            alt="433 logo"
            layout="fullWidth"
          />
        </div>
      </div>
    </main>
  );
}
