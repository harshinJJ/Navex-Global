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
    "/sea-air",
  ].some((route) => currentPath === `${langPrefix}${route}`);

  const freightList = [
    { route: "air-freight", label: t("air") },
    { route: "ocean-freight", label: t("ocean") },
    { route: "road-freight", label: t("road") },
    { route: "sea-air", label: t("seaAir") },
  ];

  const isServicesActive = [
    "/liner-shipping",
    "/customs-clearance",
    "/warehouse-3pl",
    "/project-logistics",
    "/transportation",
    "/buyers-console",
    "/value-added",
  ].some((route) => currentPath === `${langPrefix}${route}`);

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
            {freightList.map((item, index) => (
              <Link
                key={index}
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
