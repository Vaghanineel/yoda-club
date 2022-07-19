import React from "react";

function Archetypes() {
  return (
    <div>
      <section className="archetypes tabbed-section " id="archetypes">
        <div className="section-container">
          <h2>
            YODA CLUB
            {/* <div className="subtitle">5 Archetypes</div> */}
          </h2>
          <div className="section-content">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item selector-image-content active">
                  <img
                    src="../../assets/images/SLIVA.png"
                    className="d-block w-100"
                    alt="..."
                  />

                  <p className="selector-content">
                    My name is Sliva. I like to party and enjoy my life, I’m
                    trying to stay away from my brothers and their bullshit.
                    <br />I heard that earth hosting a lot of parties, invite me
                    people!!
                  </p>
                </div>
                <div className="carousel-item selector-image-content">
                  <img
                    src="../../assets/images/SKALED.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="selector-content">
                    My name is Skaled. I’ll start by saying I’m the biggest drug
                    dealer in the galaxy. I’m planning to expand my business on
                    earth and sell my product to the whole world.
                    <br /> If you need me, you where to find me.
                  </p>
                </div>
                <div className="carousel-item selector-image-content">
                  <img
                    src="../../assets/images/AGGIER.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="selector-content">
                    My name is Aggier. I’m the general of the galaxy, I control
                    and own all the equipment and army of the galaxy.
                    <br />
                    My goal is …. Just watch out!
                  </p>
                </div>
                <div className="carousel-item selector-image-content">
                  <img
                    src="../../assets/images/MOGO.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="selector-content">
                    My name is Mogo. My story is different I’m here to revenge,
                    I lost my half face because I trusted my Aggier, and what
                    comes after trust? Is betrayal. I’m not coming alone my
                    blackout army got my back.
                    <br />
                    When you meet Aggier tell him Mogo not coming in pace.
                  </p>
                </div>
                <div className="carousel-item selector-image-content">
                  <img
                    src="../../assets/images/HASHER.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="selector-content">
                    My name is Hasher. My story is that my own brothers sent me
                    to earth and they destroyed my ship on the way to earth,
                    then I got locked down in a pyramid, and after many decades
                    I managed to escape. <br />
                    I’m trying to go back to the galaxy and get my revenge and
                    roll it.
                  </p>
                </div>
              </div>
              {/* <button
                className="carousel-control-prev slider-img-left"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next slider-img-right"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button> */}
            </div>
            <div
              className="show-desktop carousel slide"
              id="carouselExampleIndicators"
              data-bs-ride="true"
            >
              <div className="selector">
                <div className="selector-container">
                  <div className="selector-column">
                    <button
                      className="selector-link btn-link-underlined cyberpunk "
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={0}
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <span>Sliva </span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      {/* <div className="btn-number">01</div> */}
                    </button>
                    <button
                      className="selector-link btn-link-underlined eastern-gem "
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    >
                      <span>Skaled</span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      {/* <div className="btn-number">02</div> */}
                    </button>
                    <button
                      className="selector-link btn-link-underlined spacestation"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    >
                      <span>Aggier</span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      {/* <div className="btn-number">03</div> */}
                    </button>
                    <button
                      className="selector-link btn-link-underlined underworld"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={3}
                      aria-label="Slide 4"
                    >
                      <span>Mogo</span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      {/* <div className="btn-number">04</div> */}
                    </button>
                    <button
                      className="selector-link btn-link-underlined fantasy"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={4}
                      aria-label="Slide 5"
                    >
                      <span>Hasher</span>
                      <svg>
                        <use xlinkHref="../../assets/images/icons.svg#link-underline" />
                      </svg>
                      {/* <div className="btn-number">05</div> */}
                    </button>
                    {/*                     
                    <div>
                      <p />
                      <ul>
                        <li>
                          NANOPASSES are an early access pass that doubles as a
                          plot of virtual land in the Nanoverse.
                        </li>
                        <li>
                          Each pass is procedurally generated from a base set of
                          22 unique and animated assets.
                        </li>
                        <li>Passes grant weekly Black Boxes.</li>
                        <li>
                          Owning a pass guarantees an allocation in the private
                          presale for Phase 2 of the larger project, which we
                          have internally dubbed
                          <span className="color-purple">
                            '
                            <span className="color-purple">Project SUBNET</span>
                            '
                          </span>
                          .
                        </li>
                      </ul>
                      <p />
                    </div> */}
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

export default Archetypes;
