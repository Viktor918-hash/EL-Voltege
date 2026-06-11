import "./Hero.css";
const Hero = () => {
  return (
    <main className="hero">
      <section className="container hero--page">
        <div className="hero__container">
          <div className="hero__title">
            <img
              src="/icon/Car.png"
              srcSet="/icon/Car@2x.png 2x"
              className="hero__picture"
              alt="car"
            />
          </div>
          <div className="hero__dataile">
            <div className="dataile">
              <div className="dateile__value">14m</div>
              <div className="dateile__desc">Battery Cost Reduction</div>
            </div>
            <div className="dataile">
              <div className="dateile__value">89%</div>
              <div className="dateile__desc">Battery Cost Reduction</div>
            </div>
            <div className="dataile">
              <div className="dateile__value">1.2m</div>
              <div className="dateile__desc">
                Charging infrastructure Expansion
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
