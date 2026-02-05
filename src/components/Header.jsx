import logo from "../assets/Home/Navex-global.png";
import { useEffect, useState } from "react";
import "./../styles/header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className={`nav-header ${showHeader ? "visible" : ""}`}>
      <div className="nav-container">
        <div className="logo-wrapper" onClick={() => scrollToSection("hero")}>
          <img src={logo} alt="Navex Logo" className="logo-img" />
          <span className="logo-text">NAVEX GLOBAL</span>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <span className="nav-link" onClick={() => scrollToSection("intro")}>
            Home
          </span>
          <span className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </span>
          <span
            className="nav-link"
            onClick={() => scrollToSection("services")}
          >
            Services
          </span>
          <span
            className="nav-link"
            onClick={() => scrollToSection("solutions")}
          >
            Solutions
          </span>
        </nav>

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
