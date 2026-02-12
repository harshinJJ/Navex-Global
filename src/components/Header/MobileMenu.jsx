import { Link } from "react-router-dom";

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  mobileDropdown,
  toggleMobileDropdown,
  langPrefix,
  changeLang,
}) {
  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <Link to={`${langPrefix}/`} onClick={() => setMenuOpen(false)}>
        Home
      </Link>

      <div className="mobile-dropdown">
        <div
          className="mobile-dropdown-title"
          onClick={() => toggleMobileDropdown("about")}
        >
          About ▼
        </div>

        {mobileDropdown === "about" && (
          <div className="mobile-submenu">
            <Link to={`${langPrefix}/about`} onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link
              to={`${langPrefix}/our-team`}
              onClick={() => setMenuOpen(false)}
            >
              Our Team
            </Link>
          </div>
        )}
      </div>

      <div className="mobile-dropdown">
        <div
          className="mobile-dropdown-title"
          onClick={() => toggleMobileDropdown("freight")}
        >
          Freight Forwarding ▼
        </div>

        {mobileDropdown === "freight" && (
          <div className="mobile-submenu">
            <Link
              to={`${langPrefix}/air-freight`}
              onClick={() => setMenuOpen(false)}
            >
              Air Freight
            </Link>
            <Link
              to={`${langPrefix}/ocean-freight`}
              onClick={() => setMenuOpen(false)}
            >
              Ocean Freight
            </Link>
            <Link
              to={`${langPrefix}/road-freight`}
              onClick={() => setMenuOpen(false)}
            >
              Road Freight
            </Link>
            <Link
              to={`${langPrefix}/international-freight`}
              onClick={() => setMenuOpen(false)}
            >
              International Freight
            </Link>
            <Link
              to={`${langPrefix}/sea-air`}
              onClick={() => setMenuOpen(false)}
            >
              Sea-Air Freight
            </Link>
          </div>
        )}
      </div>

      <div className="mobile-dropdown">
        <div
          className="mobile-dropdown-title"
          onClick={() => toggleMobileDropdown("services")}
        >
          Other Services ▼
        </div>

        {mobileDropdown === "services" && (
          <div className="mobile-submenu">
            <Link
              to={`${langPrefix}/liner-shipping`}
              onClick={() => setMenuOpen(false)}
            >
              Liner Shipping
            </Link>
            <Link
              to={`${langPrefix}/customs-clearance`}
              onClick={() => setMenuOpen(false)}
            >
              Customs Clearance
            </Link>
            <Link
              to={`${langPrefix}/warehouse-3pl`}
              onClick={() => setMenuOpen(false)}
            >
              Warehouse & 3PL
            </Link>
            <Link
              to={`${langPrefix}/project-logistics`}
              onClick={() => setMenuOpen(false)}
            >
              Project Logistics
            </Link>
            <Link
              to={`${langPrefix}/transportation`}
              onClick={() => setMenuOpen(false)}
            >
              Transportation
            </Link>
            <Link
              to={`${langPrefix}/buyers-console`}
              onClick={() => setMenuOpen(false)}
            >
              Buyer’s Consol
            </Link>
            <Link
              to={`${langPrefix}/value-added`}
              onClick={() => setMenuOpen(false)}
            >
              Value Added Services
            </Link>
            <Link
              to={`${langPrefix}/coastal-shipping`}
              onClick={() => setMenuOpen(false)}
            >
              Coastal Shipping
            </Link>
          </div>
        )}
      </div>

      <Link to={`${langPrefix}/contact`} onClick={() => setMenuOpen(false)}>
        Contact Us
      </Link>

      <div className="mobile-language">
        <span onClick={() => changeLang("en")}>English</span>
        <span onClick={() => changeLang("ar")}>العربية</span>
      </div>
    </div>
  );
}
