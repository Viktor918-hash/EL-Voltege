import "./navbar.css";
import { ArrowUpRight } from "lucide-react";
const Navbar = () => {
  return (
    <header className="header">
      <div className="container header--wrapper">
        <div className="header__container">
          <a href="#">
            <img
              src="/icon/logo.png"
              srcSet="/icon/logo@2x.png 2x"
              alt="EvVoltege"
              className="header__logo"
            />
          </a>
          <div className="header__navbar-link">
            <ul className="header__list">
              <li className="header__link">
                <a href="#">Home</a>
              </li>
              <li className="header__link">
                <a href="#">Products</a>
              </li>
              <li className="header__link">
                <a href="#">Features</a>
              </li>
              <li className="header__link">
                <a href="#">Gear Shop</a>
              </li>
            </ul>
          </div>
          <button className="header__btn ">
            Order Now
            <ArrowUpRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
