import React, { useState, useEffect, useRef } from "react";
import "./../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [deepScroll, setDeepScroll] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowHeader(y > 50);
      setDeepScroll(y > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`header ${showHeader ? "visible" : ""} ${deepScroll ? "dark" : ""}`}
      >
        <div className="header-box">
          <nav className="desktop-menu centered-menu">
            <a href="#about">About</a>
            <a href="#vision">Vision</a>
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      <div ref={menuRef} className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a onClick={() => setMenuOpen(false)} href="#about">
          About
        </a>
        <a onClick={() => setMenuOpen(false)} href="#vision">
          Vision
        </a>
        <a onClick={() => setMenuOpen(false)} href="#services">
          Services
        </a>
        <a onClick={() => setMenuOpen(false)} href="#why">
          Why Us
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
      </div>
    </>
  );
}
