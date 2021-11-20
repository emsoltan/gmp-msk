import React from "react";
import "../../ui/UI.css";
import "./About.css";
const About = () => {
  return (
    <div className="section_view about_view">
      <div className="about_container">
        <h2 className="about_title">About GMPMSK</h2>
        <div className="about_text">
          <p>
            The primary aim of GMPMSK is to release high quality albums beats
            for sale, and sample packs. <br />
            GMPMSK has its roots firmly planted in all styles of breaks with a
            heavy emphasis on dub and cinematic influences.
          </p>

          <p>
            High Quality albums from GMPMSK Beats for Sale - need an original
            beat for your rap ?
          </p>
          <p>
            Sample Packs &amp; Stems - exclusive samples you won’t find anywhere
            else and stems from our album releases
          </p>
          <p>
            We do not take submissions all albums, beats and sample packs are
            produced in house. we hope that you will find something useful and
            come back often for fresh inspiration.
          </p>
        </div>
        <div className="emphasis_container">
          <ul class="emphasis">
            <li className="pulse">Hip Hop</li>
            <li className="pulse">Drum n bass</li>
            <li className="pulse">Boom Bap</li>
            <li className="pulse">Trap</li>
            <li className="pulse">UK Beats &amp; Dubs</li>
            <li className="pulse">Dub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
