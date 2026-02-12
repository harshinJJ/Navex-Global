import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DesktopNav({ langPrefix }) {
  const { t } = useTranslation("header");

  return (
    <nav className="center-nav desktop-nav">
      <div className="center-nav-inner">
        <Link className="center-nav-item" to={`${langPrefix}/`}>
          {t("home")}
        </Link>

        {/* ABOUT */}
        <div className="dropdown">
          <span className="center-nav-item dropdown-title">
            {t("about")} <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to={`${langPrefix}/about`}>{t("aboutUs")}</Link>
            <Link to={`${langPrefix}/our-team`}>{t("ourTeam")}</Link>
          </div>
        </div>

        {/* FREIGHT FORWARDING */}
        <div className="dropdown">
          <span className="center-nav-item dropdown-title">
            {t("freight")} <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to={`${langPrefix}/air-freight`}>{t("air")}</Link>
            <Link to={`${langPrefix}/ocean-freight`}>{t("ocean")}</Link>
            <Link to={`${langPrefix}/road-freight`}>{t("road")}</Link>
            <Link to={`${langPrefix}/international-freight`}>
              {t("international")}
            </Link>
            <Link to={`${langPrefix}/sea-air`}>{t("seaAir")}</Link>
          </div>
        </div>

        {/* OTHER SERVICES */}
        <div className="dropdown">
          <span className="center-nav-item dropdown-title">
            {t("services")} <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to={`${langPrefix}/liner-shipping`}>{t("liner")}</Link>
            <Link to={`${langPrefix}/customs-clearance`}>{t("customs")}</Link>
            <Link to={`${langPrefix}/warehouse-3pl`}>{t("warehouse")}</Link>
            <Link to={`${langPrefix}/project-logistics`}>{t("project")}</Link>
            <Link to={`${langPrefix}/transportation`}>{t("transport")}</Link>
            <Link to={`${langPrefix}/buyers-console`}>{t("buyers")}</Link>
            <Link to={`${langPrefix}/value-added`}>{t("value")}</Link>
            <Link to={`${langPrefix}/coastal-shipping`}>{t("coastal")}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
