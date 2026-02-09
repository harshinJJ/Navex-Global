import logo from "../assets/Home/Navex-global.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./../styles/header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

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

  // FIXED LANGUAGE SWITCH
  const changeLang = (lang) => {
    // Set language
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

    // Set RTL/LTR direction
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Redirect ONLY when user clicks the button
    if (lang === "ar" && window.location.pathname !== "/ar") {
      window.location.pathname = "/ar";
      return;
    }

    if (lang === "en" && window.location.pathname !== "/") {
      window.location.pathname = "/";
      return;
    }
  };

  // DETECT LANGUAGE FROM URL
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
        {/* Logo */}
        <div className="logo-wrapper" onClick={() => scrollToSection("hero")}>
          <img src={logo} alt="Navex Logo" className="logo-img" />
          <span className="logo-text">{t("header.logo")}</span>
        </div>

        {/* NAV LINKS */}
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

          {/* Language Switch */}
          <div className="lang-switch">
            <button
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => changeLang("en")}
            >
              EN
            </button>

            <button
              className={i18n.language === "ar" ? "active" : ""}
              onClick={() => changeLang("ar")}
            >
              AR
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
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
