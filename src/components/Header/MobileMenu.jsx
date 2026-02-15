import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  mobileDropdown,
  toggleMobileDropdown,
  langPrefix,
  changeLang,
}) {
  const { t, i18n } = useTranslation("header");

  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <Link to={`${langPrefix}/`} onClick={() => setMenuOpen(false)}>
        {t("home")}
      </Link>

      {/* ABOUT */}
      <Link
        to={`${langPrefix}/about`}
        className="mobile-nav-item"
        onClick={() => setMenuOpen(false)}
      >
        {t("aboutUs")}
      </Link>

      {/* FREIGHT */}
      <div className="mobile-dropdown">
        <div
          className="mobile-dropdown-title"
          onClick={() => toggleMobileDropdown("freight")}
        >
          {t("freight")} ▼
        </div>

        {mobileDropdown === "freight" && (
          <div className="mobile-submenu">
            <Link
              to={`${langPrefix}/air-freight`}
              onClick={() => setMenuOpen(false)}
            >
              {t("air")}
            </Link>
            <Link
              to={`${langPrefix}/ocean-freight`}
              onClick={() => setMenuOpen(false)}
            >
              {t("ocean")}
            </Link>
            <Link
              to={`${langPrefix}/road-freight`}
              onClick={() => setMenuOpen(false)}
            >
              {t("road")}
            </Link>
            <Link
              to={`${langPrefix}/international-freight`}
              onClick={() => setMenuOpen(false)}
            >
              {t("international")}
            </Link>
            <Link
              to={`${langPrefix}/sea-air`}
              onClick={() => setMenuOpen(false)}
            >
              {t("seaAir")}
            </Link>
          </div>
        )}
      </div>

      {/* OTHER SERVICES */}
      <div className="mobile-dropdown">
        <div
          className="mobile-dropdown-title"
          onClick={() => toggleMobileDropdown("services")}
        >
          {t("services")} ▼
        </div>

        {mobileDropdown === "services" && (
          <div className="mobile-submenu">
            <Link
              to={`${langPrefix}/liner-shipping`}
              onClick={() => setMenuOpen(false)}
            >
              {t("liner")}
            </Link>
            <Link
              to={`${langPrefix}/customs-clearance`}
              onClick={() => setMenuOpen(false)}
            >
              {t("customs")}
            </Link>
            <Link
              to={`${langPrefix}/warehouse-3pl`}
              onClick={() => setMenuOpen(false)}
            >
              {t("warehouse")}
            </Link>
            <Link
              to={`${langPrefix}/project-logistics`}
              onClick={() => setMenuOpen(false)}
            >
              {t("project")}
            </Link>
            <Link
              to={`${langPrefix}/transportation`}
              onClick={() => setMenuOpen(false)}
            >
              {t("transport")}
            </Link>
            <Link
              to={`${langPrefix}/buyers-console`}
              onClick={() => setMenuOpen(false)}
            >
              {t("buyers")}
            </Link>
            <Link
              to={`${langPrefix}/value-added`}
              onClick={() => setMenuOpen(false)}
            >
              {t("value")}
            </Link>
            <Link
              to={`${langPrefix}/coastal-shipping`}
              onClick={() => setMenuOpen(false)}
            >
              {t("coastal")}
            </Link>
          </div>
        )}
      </div>

      <Link to={`${langPrefix}/contact`} onClick={() => setMenuOpen(false)}>
        {t("contact")}
      </Link>

      {/* LANGUAGE SWITCH */}
      <div className="mobile-language">
        <span
          onClick={() => changeLang("en")}
          className={i18n.language === "en" ? "active" : ""}
        >
          {t("english")}
        </span>

        <span
          onClick={() => changeLang("ar")}
          className={i18n.language === "ar" ? "active" : ""}
        >
          {t("arabic")}
        </span>
      </div>
    </div>
  );
}
