import { Link } from "react-router-dom";

export default function DesktopNav({ langPrefix }) {
  return (
    <nav className="center-nav desktop-nav">
      <div className="center-nav-inner">
        <Link className="center-nav-item" to={`${langPrefix}/`}>
          Home
        </Link>

        <div className="dropdown">
          <span className="center-nav-item dropdown-title">
            About <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to={`${langPrefix}/about`}>About Us</Link>
            <Link to={`${langPrefix}/our-team`}>Our Team</Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="center-nav-item dropdown-title">
            Freight Forwarding <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to={`${langPrefix}/air-freight`}>Air Freight</Link>
            <Link to={`${langPrefix}/ocean-freight`}>Ocean Freight</Link>
            <Link to={`${langPrefix}/road-freight`}>Road Freight</Link>
            <Link to={`${langPrefix}/international-freight`}>
              International Freight Forwarding
            </Link>
            <Link to={`${langPrefix}/sea-air`}>Sea-Air Freight</Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="center-nav-item dropdown-title">
            Other Services <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to={`${langPrefix}/liner-shipping`}>Liner Shipping</Link>
            <Link to={`${langPrefix}/customs-clearance`}>
              Customs Clearance
            </Link>
            <Link to={`${langPrefix}/warehouse-3pl`}>Warehouse & 3PL</Link>
            <Link to={`${langPrefix}/project-logistics`}>
              Project Logistics
            </Link>
            <Link to={`${langPrefix}/transportation`}>Transportation</Link>
            <Link to={`${langPrefix}/buyers-console`}>Buyer’s Consol</Link>
            <Link to={`${langPrefix}/value-added`}>Value Added Services</Link>
            <Link to={`${langPrefix}/coastal-shipping`}>Coastal Shipping</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
