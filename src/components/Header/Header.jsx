import logo from "../../assets/Home/Navex-global.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link } from "react-router-dom";

import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger";
import LanguageSwitcher from "./LanguageSwitcher";

import "../../styles/header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const { t, i18n } = useTranslation("header");
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "/ar";

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  const changeLang = (lang) => {
    const currentPath = window.location.pathname;

    i18n.changeLanguage(lang);

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    let newPath = currentPath;

    if (lang === "ar") {
      newPath = currentPath.startsWith("/ar")
        ? currentPath
        : "/ar" + (currentPath === "/" ? "" : currentPath);
    }

    if (lang === "en") {
      newPath = currentPath.replace("/ar", "");
      if (newPath === "") newPath = "/";
    }

    navigate(newPath);
    setMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) setShowHeader(window.scrollY > 80);
      else setShowHeader(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const langPrefix = i18n.language === "ar" ? "/ar" : "";

  return (
    <header className={`nav-header ${showHeader ? "visible" : ""}`}>
      <div className="nav-container">
        {/* LOGO */}
        <div
          className="logo-wrapper"
          onClick={() => navigate(`${langPrefix}/`)}
        >
          <img src={logo} alt="Navex Logo" className="logo-img" />
          <span className="logo-text">{t("logo")}</span>
        </div>

        {/* DESKTOP NAV */}
        <DesktopNav langPrefix={langPrefix} />

        {/* DESKTOP RIGHT SIDE */}
        <div className="right-actions">
          <Link className="contact-btn" to={`${langPrefix}/contact`}>
            {t("contact")}
          </Link>

          <LanguageSwitcher i18n={i18n} changeLang={changeLang} />
        </div>

        {/* MOBILE MENU */}
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          mobileDropdown={mobileDropdown}
          toggleMobileDropdown={toggleMobileDropdown}
          langPrefix={langPrefix}
          changeLang={changeLang}
        />

        {/* HAMBURGER */}
        <Hamburger open={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
      </div>
    </header>
  );
}
