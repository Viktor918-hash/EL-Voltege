import "./mobile-btn.css";
import "./navbar.css";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Modal from "../OrderNov-Btn/Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

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
          <button className="header__btn" onClick={() => setIsModalOpen(true)}>
            Order Now
            <ArrowUpRight size={24} strokeWidth={1.5} />
          </button>
          <button className="mobile-nav-btn" onClick={toggleNav}>
            <div
              className={`nav-icon ${isOpen ? "nav-icon--active" : ""}`}
            ></div>
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""}`}>
        <ul className="mobile-nav__list">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Gear Shop</a>
          </li>
        </ul>
        <a
          href="#"
          className="mobile__big-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Order Now
          <ArrowUpRight size={24} strokeWidth={1.5} />{" "}
        </a>
      </nav>

      <div
        className={`mobile-nav-fade ${isOpen ? "mobile-nav-fade--open" : ""}`}
        onClick={toggleNav}
      />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
};

export default Navbar;
