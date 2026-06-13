import "./Sviper.css";
import { useEffect } from "react";

// SVIPER SLAIDER

const Sviper = () => {
  useEffect(() => {
    new window.Swiper(".swiper", {
      slidesPerView: 1,
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        580: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }, []);
  return (
    <section className="galery">
      <div className="container">
        <div className="galery__pow">
          <div className="galery__power">versatile power</div>
        </div>
        <h2 className="galery__title">future-ready comfort</h2>
      </div>
      {/* Sviper-Slader */}
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className="swiper__img"
              src="/sviper/01.jpg"
              srcSet="/sviper/01@2x.jpg 2x"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              className="swiper__img"
              src="/sviper/02.jpg"
              srcSet="/sviper/02@2x.jpg 2x"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              className="swiper__img"
              src="/sviper/03.jpg"
              srcSet="/sviper/03@2x.jpg 2x"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              className="swiper__img"
              src="/sviper/01.jpg"
              srcSet="/sviper/01@2x.jpg 2x"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              className="swiper__img"
              src="/sviper/02.jpg"
              srcSet="/sviper/02@2x.jpg 2x"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              className="swiper__img"
              src="/sviper/03.jpg"
              srcSet="/sviper/03@2x.jpg 2x"
              alt=""
            />
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Sviper;
