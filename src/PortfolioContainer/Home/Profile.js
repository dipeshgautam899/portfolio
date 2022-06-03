import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/dipesh.gautam.12">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCXwiX6W1JL0Q44_NbD6U-pQ">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.instagram.com/_dipesh5">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/dipeshgautam899">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Dipesh</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-End Developer",
                    1000,
                    "React/React TypeScript Developer",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="dipesh.pdf" download="dipesh.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
