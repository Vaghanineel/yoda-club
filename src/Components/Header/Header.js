import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/Home.css";
// eslint-disable-next-line
function Header() {
    
  return (
    <div className="home">
      <header>
        <a className="logo" href="#">
          <picture>
            <source srcSet="../../assets/yodaweb/YODA-CLUB-White-logo.png" type="image/png" />
            <img
              src="../../assets/yodaweb/YODA-CLUB-White-logo.png"
              alt="Nanopass"
              loading="lazy"
              className="img-logo"
            />
          </picture>
        </a>
        <div className="headerMenu">
          <nav>
            <ul className="headerMain-nav">
              <li>
                <a className="btn-link-underlined" href="#">
                  <span className="headerTitleSpan">Home </span>
                  <svg className="link-underline" style={{ display: "none" }}>
                    <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                  </svg>
                </a>
              </li>
              {/* <li>
                <a className="btn-link-underlined" href="#">
                  <span className="headerTitleSpan">Black Box </span>
                  <svg className="link-underline" style={{ display: "none" }}>
                    <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                  </svg>
                </a>
              </li> */}
              {/* <li>
                <a
                  className="btn-link-underlined"
                  // href="https://owner.nanopass.io/"
                >
                  <span className="headerTitleSpan">Owners Portal </span>
                  <svg className="link-underline" style={{ display: "none" }}>
                    <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                  </svg>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="links">
          <a
            className="btn-icon btn-icon-small"
            // rel="noopener"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <svg>
              <title>twitter</title>
              <use xlinkHref="../../assets/images/icons.svg#twitter" />
            </svg>
          </a>
          <a
            className="btn-icon btn-icon-small"
            rel="noreferrer"
            href="#"
            target="_blank"
          >
            <svg>
              <title>discord</title>
              <use xlinkHref="../../assets/images/icons.svg#discord" />
            </svg>{" "}
          </a>
          <a
            className="btn-icon"
            rel="noreferrer"
            href="#"
            target="_blank"
            style={{ width: 30, height: 30 }}
          >
            <img
              src="../../assets/images/opensea.png"
              alt="Nanopass"
              style={{ width: 30, height: 30, padding: 5 }}
            />
            <title>Opensea</title>{" "}
          </a>
          {/* <button className="btn-icon menu-link">
            <svg>
              <title>Menu</title>
              <use xlinkHref="../../assets/images/icons.svg#menu" />
            </svg>
            <svg>
              <title>Close</title>
              <use xlinkHref="../../assets/images/icons.svg#close" />
            </svg>
          </button> */}
        </div>
      </header>
      
    </div>
  );
}

export default Header;
