import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DesktopNav({ langPrefix }) {
  const { t } = useTranslation("header");
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  const isFreightActive = [
    "/air-freight",
    "/ocean-freight",
    "/road-freight",
    "/international-freight",
    "/sea-air",
  ].some((route) => currentPath === `${langPrefix}${route}`);

  const isServicesActive = [
    "/liner-shipping",
    "/customs-clearance",
    "/warehouse-3pl",
    "/project-logistics",
    "/transportation",
    "/buyers-console",
    "/value-added",
    "/coastal-shipping",
  ].some((route) => currentPath === `${langPrefix}${route}`);

  /* ---- Correct Mapping Based on Your JSON Keys ---- */

  const servicesList = [
    { route: "liner-shipping", label: t("liner") },
    { route: "customs-clearance", label: t("customs") },
    { route: "warehouse-3pl", label: t("warehouse") },
    { route: "project-logistics", label: t("project") },
    { route: "transportation", label: t("transport") },
    { route: "buyers-console", label: t("buyers") },
    { route: "value-added", label: t("value") },
    { route: "coastal-shipping", label: t("coastal") },
  ];

  return (
    <nav className="center-nav desktop-nav">
      <div className="center-nav-inner">
        {/* HOME */}
        <Link
          className={`center-nav-item ${isActive(`${langPrefix}/`) ? "active" : ""}`}
          to={`${langPrefix}/`}
        >
          {t("home")}
        </Link>

        {/* ABOUT */}
        <Link
          to={`${langPrefix}/about`}
          className={`center-nav-item ${isActive(`${langPrefix}/about`) ? "active" : ""}`}
        >
          {t("aboutUs")}
        </Link>

        {/* FREIGHT */}
        <div className="dropdown">
          <span
            className={`center-nav-item dropdown-title ${isFreightActive ? "active" : ""}`}
          >
            {t("freight")} <span className="arrow">▼</span>
          </span>

          <div className="dropdown-menu">
            <Link
              className={isActive(`${langPrefix}/air-freight`) ? "active" : ""}
              to={`${langPrefix}/air-freight`}
            >
              {t("air")}
            </Link>

            <Link
              className={
                isActive(`${langPrefix}/ocean-freight`) ? "active" : ""
              }
              to={`${langPrefix}/ocean-freight`}
            >
              {t("ocean")}
            </Link>

            <Link
              className={isActive(`${langPrefix}/road-freight`) ? "active" : ""}
              to={`${langPrefix}/road-freight`}
            >
              {t("road")}
            </Link>

            <Link
              className={
                isActive(`${langPrefix}/international-freight`) ? "active" : ""
              }
              to={`${langPrefix}/international-freight`}
            >
              {t("international")}
            </Link>

            <Link
              className={isActive(`${langPrefix}/sea-air`) ? "active" : ""}
              to={`${langPrefix}/sea-air`}
            >
              {t("seaAir")}
            </Link>
          </div>
        </div>

        {/* SERVICES */}
        <div className="dropdown">
          <span
            className={`center-nav-item dropdown-title ${isServicesActive ? "active" : ""}`}
          >
            {t("services")} <span className="arrow">▼</span>
          </span>

          <div className="dropdown-menu">
            {servicesList.map((item) => (
              <Link
                key={item.route}
                className={
                  isActive(`${langPrefix}/${item.route}`) ? "active" : ""
                }
                to={`${langPrefix}/${item.route}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
