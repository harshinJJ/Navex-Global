import "./../styles/footer.css";
import { FiFacebook, FiInstagram, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <hr className="footer-line" />
      <section className="footer-section">
        <div className="footer-top">
          <h2 className="footer-logo">{t("footer.brand")}</h2>

          <nav className="footer-nav">
            <a href="#hero">{t("nav.home")}</a>
            <a href="#about">{t("nav.about")}</a>
            <a href="#services">{t("nav.services")}</a>
            <a href="#solutions">{t("nav.solutions")}</a>
            <a href="#contact">{t("nav.contact")}</a>
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
            <p>{t("footer.copy")}</p>
            <p className="footer-small">{t("footer.tagline")}</p>
          </div>

          <div className="footer-right">
            <h3 className="footer-news-title">{t("footer.subscribeTitle")}</h3>

            <div className="footer-input-wrap">
              <input type="email" placeholder={t("footer.emailPlaceholder")} />
              <button>{t("footer.submit")}</button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
