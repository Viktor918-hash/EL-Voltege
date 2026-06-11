import "./Power.css";

const Power = () => {
  return (
    <section className="pover">
      <div className="container pover--cont">
        <div className="power__header">
          <div className="pover__paragraf">versatile power</div>
          <h2 className="pover__title">Revolutionizing EV Mobility</h2>
        </div>
        <div className="pover__grid">
          <div className="pover-grid__item pover-grid__stats">
            <div className="pover__status">
              <div className="pover__header">
                <div className="pover__stats-header">
                  <h4 className="pover__header-title">What People Say</h4>
                  <p className="pover__header-paragraf">Sold to over 20M</p>
                </div>
                <img
                  src="./Revolutionizing/favicon.png"
                  alt="EV"
                  className="stats-log__img"
                />
              </div>
              <div className="pover__footer">
                <div className="pover__footer-content">
                  <div className="pover__avatar">
                    <div className="img__cont">
                      <span className="pover__img">
                        <img src="/Revolutionizing/avatar-2.jpg" alt="" />
                      </span>
                      <span className="pover__img">
                        <img src="/Revolutionizing/avatar-1.jpg" alt="" />
                      </span>
                    </div>
                    <p className="footer__paragraf">
                      3,000+ Thrilled EV Owners
                    </p>
                  </div>
                  <div className="footer__price">$50k+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pover-grid__item pover-grid__miles">
            <div className="miles__content">
              <div className="bacgroung__img">
                {/* <img
                  src="/Revolutionizing/content.png"
                  alt=""
                  className="miles__img"
                /> */}
              </div>
              <h4 className="miles__header">evvoltage.com</h4>
              <h5 className="miles__footer">500+</h5>
              <p className="miles-footer__paragraf">Miles Per Charge</p>
            </div>
          </div>
          <div className="pover-grid__item pover-grid__logo">
            <div className="pover__logo-content">
              <img
                src="/Revolutionizing/Image.png"
                srcSet="/Revolutionizing/Image@2x.png 2x"
                className="logo__content-img"
                alt=""
              />
            </div>
          </div>
          <div className="pover-grid__item pover-grid__batery">
            <img
              src="/Revolutionizing/bater.png"
              alt=""
              className="batery__img"
            />
            <p className="batery__text">
              Empowering Sustainable Mobility Through Innovation
            </p>
          </div>
          <div className="pover-grid__item pover-grid__electric">
            <div className="pover-hero__brand">
              <span className="pover-hero__brand-icon">
                <img
                  src="/Revolutionizing/favicon.png"
                  alt=""
                  className="pover-hero__brand-logo"
                />
              </span>
              <span className="pover-hero__brand-name">EV Voltedge</span>
            </div>
            <h3 className="pover-hero__brand-title">Electric Mobility</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Power;
