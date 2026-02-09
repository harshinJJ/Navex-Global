import "./../styles/footer.css";
import { FiFacebook, FiInstagram, FiX } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <hr className="footer-line" />
      <section className="footer-section">
        <div className="footer-top">
          <h2 className="footer-logo">Navex Global</h2>

          <nav className="footer-nav">
            <a href="#hero">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a>
              <FiFacebook />
            </a>
            <a>
              <FiInstagram />
            </a>
            <a>
              <FiX />
            </a>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">
          <div className="footer-left">
            <p>© 2026 Navex Global. All Rights Reserved.</p>
            <p className="footer-small">
              Built with passion — logistics made simple.
            </p>
          </div>

          <div className="footer-right">
            <h3 className="footer-news-title">Subscribe to our newsletter</h3>

            <div className="footer-input-wrap">
              <input type="email" placeholder="Your Email" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
