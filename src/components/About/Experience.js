import React from "react";
import { DiCode } from "react-icons/di";
import { GiTeamUpgrade, GiProgression } from "react-icons/gi";

function Experience() {
  return (
    <div className="home-about-description">
      <div className="tech-icons-container">
        <div className="tech-icon-item">
          <DiCode />
          <p className="exp-label">Programming</p>
        </div>
        <div className="tech-icon-item">
          <GiProgression />
          <p className="exp-label">Project Management</p>
        </div>
        <div className="tech-icon-item">
          <GiTeamUpgrade />
          <p className="exp-label">Leadership</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
