import logo from "../assets/Home/Navex-global.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./../styles/header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("header");

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    if (lang === "ar" && window.location.pathname !== "/ar") {
      window.location.pathname = "/ar";
      return;
    }

    if (lang === "en" && window.location.pathname !== "/") {
      window.location.pathname = "/";
      return;
    }
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/ar") {
      i18n.changeLanguage("ar");
      document.documentElement.dir = "rtl";
      localStorage.setItem("lang", "ar");
    } else {
      i18n.changeLanguage("en");
      document.documentElement.dir = "ltr";
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <header className={`nav-header ${showHeader ? "visible" : ""}`}>
      <div className="nav-container">
        <div className="logo-wrapper" onClick={() => scrollToSection("hero")}>
          <img src={logo} alt="Navex Logo" className="logo-img" />
          <span className="logo-text">{t("header.logo")}</span>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <span className="nav-link" onClick={() => scrollToSection("intro")}>
            {t("header.home")}
          </span>

          <span className="nav-link" onClick={() => scrollToSection("about")}>
            {t("header.about")}
          </span>

          <span
            className="nav-link"
            onClick={() => scrollToSection("services")}
          >
            {t("header.services")}
          </span>

          <span
            className="nav-link"
            onClick={() => scrollToSection("solutions")}
          >
            {t("header.solutions")}
          </span>

          <div className="lang-flags">
            <img
              src="https://flagcdn.com/24x18/gb.png"
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => changeLang("en")}
              alt="English"
            />

            <img
              src="https://flagcdn.com/24x18/sa.png"
              className={i18n.language === "ar" ? "active" : ""}
              onClick={() => changeLang("ar")}
              alt="Arabic"
            />
          </div>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
