import React from "react";

function Team() {
  return (
    <div>
      <section className="team tabbed-section" id="team">
        <div className="section-container">
          <h2>
            Team
            <div className="subtitle">Who are we?</div>
          </h2>
          <div className="section-content">
            <div className="show-desktop">
              <div
                className="selector-column selector-image carousel slide"
                data-bs-ride="false"
                id="carouselExampleCaptions"
              >
                <div className="">
                  <div className="carousel-item selector-image-content active">
                    <img
                      src="../../assets/yodaweb/Leader 1.png"
                      alt="Agent Rei"
                    />
                    <div className="selector-additional-content">
                      <div className="selector-details">
                        <div className="h2">
                        Leader 1
                          {/* <div className="subtitle agent-rei">Project Lead</div> */}
                        </div>
                      </div>
                      <a
                        className="btn-icon"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg>
                          <title>Agent Rei Twitter</title>
                          <use xlinkHref="../../assets/images/icons.svg#twitter" />
                        </svg>
                      </a>
                    </div>
                    {/* <div className="selector-content">
                      <p>
                        The founder of this project, he is the stoic and somber
                        glue that holds the NANOPASS family together. Leaning on
                        his wealth of experience as Managing Director of many
                        successful IRL ventures, he leads the charge in
                        executing our ambitious roadmap and build NANOPASS into
                        the next bluechip NFT project.
                      </p>
                    </div> */}
                  </div>
                  <div className="carousel-item selector-image-content">
                    <img
                      src="../../assets/yodaweb/Leader 2.png"
                      alt="Agent Rui"
                    />
                    <div className="selector-additional-content">
                      <div className="selector-details">
                        <div className="h2">
                        Leader 2
                          {/* <div className="subtitle agent-rui">Artist Lead</div> */}
                        </div>
                      </div>
                      <a
                        className="btn-icon"
                        href="https://twitter.com/REEEEEruiiiii"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg>
                          <title>Agent Rui Twitter</title>
                          <use xlinkHref="../../assets/images/icons.svg#twitter" />
                        </svg>
                      </a>
                    </div>
                    {/* <div className="selector-content">
                      <p>
                        The founder of this project, he is the stoic and somber
                        glue that holds the NANOPASS family together. Leaning on
                        his wealth of experience as Managing Director of many
                        successful IRL ventures, he leads the charge in
                        executing our ambitious roadmap and build NANOPASS into
                        the next bluechip NFT project.
                      </p>
                    </div> */}
                  </div>
                  <div className="selector-image-content carousel-item">
                    <img
                      src="../../assets/yodaweb/designer.png"
                      alt="Agent Yuri"
                    />
                    <div className="selector-additional-content">
                      <div className="selector-details">
                        <div className="h2">
                        	Designer 
                          {/* <div className="subtitle agent-yuri">
                            Community Lead
                          </div> */}
                        </div>
                      </div>
                      <a
                        className="btn-icon"
                        href="https://twitter.com/Yuri_ramen"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg>
                          <title>Agent Yuri Twitter</title>
                          <use xlinkHref="../../assets/images/icons.svg#twitter" />
                        </svg>
                      </a>
                    </div>
                    {/* <div className="selector-content">
                      <p>
                        The founder of this project, he is the stoic and somber
                        glue that holds the NANOPASS family together. Leaning on
                        his wealth of experience as Managing Director of many
                        successful IRL ventures, he leads the charge in
                        executing our ambitious roadmap and build NANOPASS into
                        the next bluechip NFT project.
                      </p>
                    </div> */}
                  </div>
                  <div className="selector-image-content carousel-item">
                    <img src="../../assets/yodaweb/developer.png" alt="Dev" />
                    <div className="selector-additional-content">
                      <div className="selector-details">
                        <div className="h2">
                        	Developer 
                          {/* <div className="subtitle dev">Tech Lead</div> */}
                        </div>
                      </div>
                      <a
                        className="btn-icon"
                        href="https://twitter.com/projectNANOPASS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg>
                          <title>Dev Twitter</title>
                          <use xlinkHref="../../assets/images/icons.svg#twitter" />
                        </svg>
                      </a>
                    </div>
                    {/* <div className="selector-content">
                      <p>
                        The founder of this project, he is the stoic and somber
                        glue that holds the NANOPASS family together. Leaning on
                        his wealth of experience as Managing Director of many
                        successful IRL ventures, he leads the charge in
                        executing our ambitious roadmap and build NANOPASS into
                        the next bluechip NFT project.
                      </p>
                    </div> */}
                  </div>
                  <div className="selector-image-content carousel-item">
                    <img
                      src="../../assets/yodaweb/Cave-Wall.png"
                      alt="IAmAbsinthe"
                    />
                    <div className="selector-additional-content">
                      <div className="selector-details">
                        <div className="h2">
                        	Marketing Manager 
                          {/* <div className="subtitle iamabsinthe">
                            Marketing Lead
                          </div> */}
                        </div>
                      </div>
                      <a
                        className="btn-icon"
                        href="https://twitter.com/iamabsinthe"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg>
                          <title>IAmAbsinthe Twitter</title>
                          <use xlinkHref="../../assets/images/icons.svg#twitter" />
                        </svg>
                      </a>
                    </div>
                    {/* <div className="selector-content">
                      <p>
                        The founder of this project, he is the stoic and somber
                        glue that holds the NANOPASS family together. Leaning on
                        his wealth of experience as Managing Director of many
                        successful IRL ventures, he leads the charge in
                        executing our ambitious roadmap and build NANOPASS into
                        the next bluechip NFT project.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="selector">
                <div className="selector-container">
                  <div
                    className="selector-column"
                    id="carouselExampleIndicators"
                    data-bs-ride="true"
                  >
                    <button
                      className="selector-link btn-link-underlined agent-rei active"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <span>Leader 1 </span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      <div className="btn-number">01</div>
                    </button>
                    <button
                      className="selector-link btn-link-underlined agent-rui active"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    >
                      <span>Leader 2</span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      <div className="btn-number">02</div>
                    </button>
                    <button
                      className="selector-link btn-link-underlined agent-yuri active"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    >
                      <span>Designer </span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      <div className="btn-number">03</div>
                    </button>
                    <button
                      className="selector-link btn-link-underlined dev active"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    >
                      <span>Developer </span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      <div className="btn-number">04</div>
                    </button>
                    <button
                      className="selector-link btn-link-underlined iamabsinthe active"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                    >
                      <span>	Marketing Manager </span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      <div className="btn-number">05</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
