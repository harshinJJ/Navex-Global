import logo from "../assets/Home/Navex-global.png";
import { useEffect, useState } from "react";
import "./../styles/header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-header ${showHeader ? "visible" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-wrapper">
          <img src={logo} alt="Navex Logo" className="logo-img" />
          <span className="logo-text">NAVEX GLOBAL</span>
        </div>

        {/* Desktop menu */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#intro" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>
            Solutions
          </a>
        </nav>

        {/* Hamburger */}
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
