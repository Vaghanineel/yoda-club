import React from "react";
// import "../../CSS/App.css";
// import "../../CSS/Home.css";


function Blackbox() {
  return (
    <div>
      {" "}
      <section class="blackbox tabbed-section" id="blackbox">
        <div class="section-container">
          <h2>
          ABOUT US
            {/* <div class="subtitle">What&#39;s Inside?</div> */}
          </h2>
          <div class="section-content section-content-columns">
            <div class="section-content-column">
              <picture>
                <img
                  src="../../assets/yodaweb/YODA-CLUB-White-logo.png"
                  alt="Perpetual [BLACK BOX]"
                  loading="lazy"
                />
              </picture>
            </div>
            <div class="section-content-column">
              <div class="section-content-bg">
                <ul>
                  <li>
                  We are a community of creative guys and girls who have decided to break into the NFT galaxy and create our own unique product.
                  </li>
                  <li>
                  Our artists create one-of-a-kind collections with unusual ideas and history. 
                  </li>
                  <li>
                  WHY WE ARE HERE?<br/>
                  
We want to unite the global community of the best artists and web developers on one platform, where everyone can earn money doing what they love

                  </li>
                  {/* <li>
                    <span class="highlight">[BLACK BOXES]</span> can be claimed
                    from your Owner's Portal on our website after logging in
                    with your Metamask.
                  </li> */}
                </ul>
              </div>
              {/* <a href="/#" class="btn">
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Blackbox;
