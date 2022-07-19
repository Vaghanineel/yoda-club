import React from "react";

function JoinheCommunity() {
  return (
    <div>
      <section className="community tabbed-section">
        <div className="section-container">
          <h2>
          CONNECT WITH YODA COMMUNITY
            <div className="subtitle">Join our discord</div>
          </h2>
          <div className="section-content section-content-columns">
            <div className="section-content-column">
              <p>
              Connect with the rest of our thriving YODA Club community. Join the action on our discord server to get the latest news and announcements.
              </p>
              <a href="/#" className="btn">
                Discord
              </a>
            </div>
          </div>
        </div>
        <picture>
         
          <img
            className="section-background-image"
            src="../../assets/yodaweb/YODA-CLUB-White-logo.png"
            alt="Join the community background"
            loading="lazy"
          />
        </picture>
      </section>
    </div>
  );
}

export default JoinheCommunity;
