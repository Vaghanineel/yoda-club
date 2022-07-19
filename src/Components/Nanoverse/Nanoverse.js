import React from "react";
import "../../CSS/App.css";
import "../../CSS/Home.css";

function Nanoverse() {
  return (
    <div>
      <>
        <section className="hero">
          {/* <img
            className="section-background-image"
            // src="../../assets/images/home-hero-bg.svg"
            // alt="Nanopass background"
          /> */}
          <div className="section-container">
            <div className="section-content">
              <h1>Welcome To YODA Club</h1>
              <div className="paragraph-large text-uppercase">
                {/* <span id="mint-progress" className="color-purple">
                  10,000
                </span> */}
                <span id="mint-progress-subheading"> YODA Club is a collection of 10,000 NFTs - dope digital collectibles chilling on the Solana blockchain. If you’re part of the crew, you get to hang out on SOL. All benefits, perks and dope shit will be unlocked as we slowly venture into the YODA world. So, watch out!
Nothing feels like home, right?
</span>
              </div>

              <button className="btn" id="mint-button">
                Connect Wallet
              </button>
              <div className="text-small" id="wallet-text">
                Wallet not connected
              </div>
            </div>
            <div id="home-hero" className="intro-hero">
              <div className="home-hero-image">
                <picture>
              
                  <img
                    src="../../assets/yodaweb/Homepage.png"
                    alt="Nanopass 1"
                    className="glitch-0"
                    loading="lazy"
                  />
                </picture>
                <picture>
               
                  <img
                    src="../../assets/yodaweb/Homepage.png"
                    alt="Nanopass 2"
                    className="glitch-1"
                    loading="lazy"
                  />
                </picture>
                  <picture>
                
                    <img
                      src="../../assets/yodaweb/Homepage.png"
                      alt="Nanopass 3"
                      className="glitch-2"
                      loading="lazy"
                    />
                  </picture>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Nanoverse;
