import logo from "../assets/Home/Navex-global.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./../styles/header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation("header");
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "/ar";
  const current = location.pathname;

  const changeLang = (lang) => {
    const currentPath = window.location.pathname;

    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
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
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath.startsWith("/ar")) {
      i18n.changeLanguage("ar");
      document.documentElement.dir = "rtl";
      localStorage.setItem("lang", "ar");
    } else {
      i18n.changeLanguage("en");
      document.documentElement.dir = "ltr";
      localStorage.setItem("lang", "en");
    }
  }, []);

  const langPrefix = i18n.language === "ar" ? "/ar" : "";

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setShowHeader(window.scrollY > 80);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header className={`nav-header ${showHeader ? "visible" : ""}`}>
      <div className="nav-container">
        {/* LOGO */}
        <div
          className="logo-wrapper"
          onClick={() => navigate(`${langPrefix}/`)}
        >
          <img src={logo} alt="Navex Logo" className="logo-img" />
          <span className="logo-text">{t("header.logo")}</span>
        </div>

        {/* CENTER NAV */}
        <nav className={`center-nav ${menuOpen ? "open" : ""}`}>
          <div className="center-nav-inner">
            {/* HOME */}
            <Link
              className={`center-nav-item ${
                current === "/" || current === "/ar" ? "active" : ""
              }`}
              to={`${langPrefix}/`}
            >
              Home
            </Link>

            {/* ABOUT */}
            <div className="dropdown">
              <span
                className={`center-nav-item dropdown-title ${
                  current.includes("about") || current.includes("our-team")
                    ? "active"
                    : ""
                }`}
              >
                About <span className="arrow">▼</span>
              </span>
              <div className="dropdown-menu">
                <Link
                  className={current.includes("about") ? "submenu-active" : ""}
                  to={`${langPrefix}/about`}
                >
                  About Us
                </Link>

                <Link
                  className={
                    current.includes("our-team") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/our-team`}
                >
                  Our Team
                </Link>
              </div>
            </div>

            {/* FREIGHT FORWARDING */}
            <div className="dropdown">
              <span
                className={`center-nav-item dropdown-title ${
                  current.includes("freight") ||
                  current.includes("air") ||
                  current.includes("ocean") ||
                  current.includes("road") ||
                  current.includes("sea-air") ||
                  current.includes("international")
                    ? "active"
                    : ""
                }`}
              >
                Freight Forwarding <span className="arrow">▼</span>
              </span>

              <div className="dropdown-menu">
                <Link
                  className={
                    current.includes("air-freight") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/air-freight`}
                >
                  Air Freight
                </Link>
                <Link
                  className={
                    current.includes("ocean-freight") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/ocean-freight`}
                >
                  Ocean Freight
                </Link>
                <Link
                  className={
                    current.includes("road-freight") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/road-freight`}
                >
                  Road Freight
                </Link>
                <Link
                  className={
                    current.includes("international") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/international-freight`}
                >
                  International Freight Forwarding
                </Link>
                <Link
                  className={
                    current.includes("sea-air") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/sea-air`}
                >
                  Sea-Air Freight
                </Link>
              </div>
            </div>

            {/* OTHER SERVICES */}
            <div className="dropdown">
              <span
                className={`center-nav-item dropdown-title ${
                  current.includes("liner") ||
                  current.includes("customs") ||
                  current.includes("warehouse") ||
                  current.includes("project") ||
                  current.includes("transport") ||
                  current.includes("console") ||
                  current.includes("value") ||
                  current.includes("coastal")
                    ? "active"
                    : ""
                }`}
              >
                Other Services <span className="arrow">▼</span>
              </span>

              <div className="dropdown-menu">
                <Link
                  className={current.includes("liner") ? "submenu-active" : ""}
                  to={`${langPrefix}/liner-shipping`}
                >
                  Liner Shipping
                </Link>

                <Link
                  className={
                    current.includes("customs") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/customs-clearance`}
                >
                  Customs Clearance
                </Link>

                <Link
                  className={
                    current.includes("warehouse") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/warehouse-3pl`}
                >
                  Warehouse & 3PL
                </Link>

                <Link
                  className={
                    current.includes("project") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/project-logistics`}
                >
                  Project Logistics
                </Link>

                <Link
                  className={
                    current.includes("transport") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/transportation`}
                >
                  Transportation
                </Link>

                <Link
                  className={
                    current.includes("console") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/buyers-console`}
                >
                  Buyer’s Consol
                </Link>

                <Link
                  className={current.includes("value") ? "submenu-active" : ""}
                  to={`${langPrefix}/value-added`}
                >
                  Value Added Services
                </Link>

                <Link
                  className={
                    current.includes("coastal") ? "submenu-active" : ""
                  }
                  to={`${langPrefix}/coastal-shipping`}
                >
                  Coastal Shipping
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* RIGHT SIDE */}
        <div className="right-actions">
          <Link className="contact-btn" to={`${langPrefix}/contact`}>
            Contact Us
          </Link>

          <div className="lang-dropdown">
            <div className="lang-trigger">
              {i18n.language === "en" ? "EN" : "AR"}
              <span className="arrow">▼</span>
            </div>

            <div className="lang-menu">
              <span
                onClick={() => changeLang("en")}
                className={i18n.language === "en" ? "active" : ""}
              >
                English
              </span>
              <span
                onClick={() => changeLang("ar")}
                className={i18n.language === "ar" ? "active" : ""}
              >
                العربية
              </span>
            </div>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
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
