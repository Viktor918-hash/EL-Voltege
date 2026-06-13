import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__content">
          <div className="footer__inner">
            <div className="footer__col footer__col--brand">
              <a className="footer__logo" href="#">
                <img
                  src="./footer/logo.png"
                  srcSet="./footer/logo@2x.png 2x"
                  alt="EV Voltedge"
                />
              </a>
            </div>

            <div className="footer__right-cols">
              <div className="footer__col">
                <h4 className="footer__heading">Company</h4>
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__col">
                <h4 className="footer__heading">Resource</h4>
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Customer Stories
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Information
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Legal
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Payments
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__col">
                <h4 className="footer__heading">Career</h4>
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Jobs
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Hiring
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      News
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Tips &amp; Tricks
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__col">
                <h4 className="footer__heading">Help</h4>
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      FAQs
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Help Center
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a className="footer__nav-link" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © <span className="footer__year">2025</span> EV Voltedge. All
              rights reserved.
            </p>
            <ul className="footer__bottom-links">
              <li>
                <a className="footer__bottom-link" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="footer__bottom-link" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
