import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container section-container">
          <a className="footer-logo" href="#">
            <img
              src="../../assets/yodaweb/YODA-CLUB-White-logo.png"
              alt="Nanopass"
              loading="lazy"
            />
          </a>
          <div className="footer-links">
            <div className="footer-links-column">
              <a className="btn-link-underlined" href="#">
                <span className="footer-links-column-header">Home </span>
                <svg className="link-underline">
                  <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                </svg>
                {/* <div className="btn-number">01</div> */}
              </a>
              <a className="subtitle" href="#">
                YODA CLUB
              </a>
              {/* <a className="subtitle" href="#archetypes">
                ARCHETYPES
              </a> */}
              <a className="subtitle" href="#blackbox">
              ABOUT US
              </a>
              <a className="subtitle" href="#roadmap">
                ROADMAP
              </a>
              <a className="subtitle" href="#team">
                TEAM
              </a>
              <a className="subtitle" href="#commanQutions">
                FAQs
              </a>
            </div>

            {/* <div className="footer-links-column">
              <a className="btn-link-underlined" href="/#">
                <span className="footer-links-column-header">
                  Owners Portal
                </span>
                <svg className="link-underline">
                  <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                </svg>
                <div className="btn-number">02</div>
              </a>
            </div> */}
          </div>
          <div className="footer-socials">
            <a
              className="btn-icon btn-icon-small"
              rel="noopener"
              href="/#"
              target="_blank"
            >
              <svg>
                <title>twitter</title>
                <use xlinkHref="../../assets/images/icons.svg#twitter" />
              </svg>{" "}
            </a>
            <a
              className="btn-icon btn-icon-small"
              rel="noopener"
              href="/#"
              target="_blank"
            >
              <svg>
                <title>discord</title>
                <use xlinkHref="../../assets/images/icons.svg#discord" />
              </svg>
            </a>
          </div>
        </div>
        <div id="copyright">
          {/* <p>COPYRIGHT © 2021 NANOPASS</p> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
