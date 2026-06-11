import "./Story.css";
import { IoTriangleSharp } from "react-icons/io5";
import "../btn.css";

const Story = () => {
  return (
    <section className="story__section">
      <div className="container story--page">
        <div className="story__text">
          <p className="story__paragraf">Our Story</p>
          <div className="story__title--text">
            <h2 className="story__power">
              Powering a Greener Future, One Drive at a Time
            </h2>
            <p className="story__description">
              We are here to support your journey towards sustainable driving.
              Explore cutting-edge EV technology, a growing charging network,
              and exclusive resources designed to enhance your electric vehicle
              experience.
            </p>
          </div>
        </div>
        <div className="story__grid">
          <div className="story__content">
            <img
              src="/powering/video.jpg"
              srcSet="/powering/video@2x.jpg 2x"
              alt=""
              className="story__video"
            />
            <button className="story__btn">
              <a href="#">
                <IoTriangleSharp
                  size={35}
                  style={{ transform: "rotate(90deg)" }}
                />
              </a>
            </button>
            <div className="story__txt">
              <div className="content__title">
                Join a Connected Charging Network
              </div>
              <div className="content__text">
                Be part of a growing network of EV drivers who share a passion
                for sustainability and innovation.
              </div>
            </div>
          </div>
          <div className="story__blure">
            <img
              src="/powering/story-bg.jpg"
              srcSet="/powering/story-bg@2x.jpg 2x"
              alt=""
              className="story__img"
            />
            <div className="story__text--blure">
              <div className="blure__title">EVs for Everyone</div>
              <div className="blure__text">
                From eco-conscious drivers to performance enthusiasts, we
                believe electric vehicles should be accessible and exciting for
                all.
              </div>
              <button className="blure__btn btn--big">
                <a href="#" className="blure__link">
                  Our Story
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
