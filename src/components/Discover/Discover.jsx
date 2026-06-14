import "./Discover.css";

const Discover = () => {
  return (
    <section className="discover__page">
      <div className="container discover--content">
        <div className="discover__text">
          <div className="power">
            <div className="discover__power">versatile power</div>
          </div>
          <h2 className="discvoer__title">
            Discover Our Multi-functional chargers
          </h2>
        </div>
        <div className="discover__img--content">
          <div className="discover__description">
            <img
              src="./discover/01.jpg"
              srcSet="./discover/01@2x.jpg 2x"
              alt=""
              className="description__img"
            />
            <div className="description__text-content">
              <h3 className="description__title">Home Smart Charger</h3>
              <div className="description__text">
                Charger A lightweight, travel-friendly Level 1 charger designed
                for convenience. Plugs into standard wall outlets.
              </div>
              <div className="dexcription__price">
                <div className="price1">$999</div>
                <div className="price2">$599</div>
              </div>
            </div>
          </div>
          <div className="discover__description">
            <img
              src="./discover/02.jpg"
              srcSet="./discover/02@2x.jpg 2x"
              alt=""
              className="description__img"
            />
            <div className="description__text-content">
              <h3 className="description__title">Portable EV Charger</h3>
              <div className="description__text">
                A lightweight, travel-friendly Level 1 charger designed for
                convenience. Plugs into standard wall outlets.
              </div>
              <div className="dexcription__price">
                <div className="price1">$599</div>
                <div className="price2">$299</div>
              </div>
            </div>
          </div>
          <div className="discover__description">
            <img
              src="./discover/03.jpg"
              srcSet="./discover/03@2x.jpg 2x"
              alt=""
              className="description__img"
            />
            <div className="description__text-content">
              <h3 className="description__title">
                Ultra-Fast Public Charging Station
              </h3>
              <div className="description__text">
                Level 3 DC fast charger for public and commercial locations.
                Equipped with dual ports.
              </div>
              <div className="dexcription__price">
                <div className="price1">$20,999</div>
                <div className="price2">$12,999</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
