import "./Reserve.css";

const Reserve = () => {
  return (
    <section className="reserve">
      <div className="container">
        <h3 className="reserve__title">Reserve Your EV Today!</h3>
        <div className="reserve__content">
          <div className="reserve__input-grup">
            <div className="input__name-cnt">
              <form className="input__name-firstname">
                <label className="label__name" htmlFor="">
                  First Name
                </label>
                <input
                  type="text"
                  className="input__first-name"
                  placeholder="Jhon"
                />
              </form>
              <form className="input__name-firstname">
                <label className="label__last-name" htmlFor="">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input__last-name"
                  placeholder="Doe"
                />
              </form>
            </div>
            <div className="input__email-massage">
              <label className="label__email" htmlFor="">
                Email ID
              </label>
              <input
                type="email"
                className="input__email"
                placeholder="Field email goes here"
              />
              <label className="label__massage" htmlFor="">
                Massage
              </label>
              <input
                type="text"
                className="input__massage"
                placeholder="Massage"
              />
            </div>
            <button className="reservt__btn">
              <a href="#">Book Now</a>
            </button>
          </div>
          <img
            className="input__img"
            src="./carinput/car.png"
            srcSet="./carinput/car@2x.png 2x"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
