"use client";

import { useEffect, useRef, useState } from "react";
import "./globals.css";

export default function Home() {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image = heroImageRef.current;

      if (!image) return;

      const scrollY = window.scrollY;

      if (scrollY <= window.innerHeight) {
        image.style.transform = `translate3d(0, ${scrollY * 0.28}px, 0) scale(1.08)`;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>

      {/* =========================================
          SECTION 1 — HERO
      ========================================= */}

      <section className="hero" id="home">

        {/* PARALLAX BACKGROUND */}
        <div
          ref={heroImageRef}
          className="hero-background"
        />

        {/* OVERLAY */}
        <div className="hero-overlay" />


        {/* =========================================
            NAVBAR
        ========================================= */}

        <header className="hero-nav">

          {/* LOGO */}

          <a
            href="#home"
            className="hero-logo"
            onClick={closeMenu}
          >
            <img
              src="/images/logo.png"
              alt="Vistara Valley - Life in the city"
            />
          </a>


          {/* DESKTOP NAVIGATION */}

          <nav className="desktop-nav">

            <a href="#about">
              About
            </a>

            <a href="#plots">
              Plots
            </a>

            <a href="#master-plan">
              Master Plan
            </a>

            <a href="#amenities">
              Amenities
            </a>

            <a href="#location">
              Location
            </a>

            <a href="#contact">
              Contact
            </a>

            <a
              href="#contact"
              className="nav-cta"
            >
              <span>Book a Site Visit</span>
              <strong>↗</strong>
            </a>

          </nav>


          {/* MOBILE MENU BUTTON */}

          <button
            className={`hero-menu ${
              menuOpen ? "menu-active" : ""
            }`}
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

        </header>


        {/* =========================================
            MOBILE MENU
        ========================================= */}

        <div
          className={`mobile-menu ${
            menuOpen ? "mobile-menu-open" : ""
          }`}
        >

          <div className="mobile-menu-inner">

            {/* TOP */}

            <div className="mobile-menu-top">

              <span>
                VISTARA VALLEY
              </span>

              <span>
                KHANDWA ROAD · KHARGONE
              </span>

            </div>


            {/* LINKS */}

            <nav className="mobile-menu-links">

              <a
                href="#home"
                onClick={closeMenu}
              >
                <small>01</small>
                <span>Home</span>
              </a>

              <a
                href="#about"
                onClick={closeMenu}
              >
                <small>02</small>
                <span>About</span>
              </a>

              <a
                href="#plots"
                onClick={closeMenu}
              >
                <small>03</small>
                <span>Plots</span>
              </a>

              <a
                href="#master-plan"
                onClick={closeMenu}
              >
                <small>04</small>
                <span>Master Plan</span>
              </a>

              <a
                href="#amenities"
                onClick={closeMenu}
              >
                <small>05</small>
                <span>Amenities</span>
              </a>

              <a
                href="#location"
                onClick={closeMenu}
              >
                <small>06</small>
                <span>Location</span>
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
              >
                <small>07</small>
                <span>Contact</span>
              </a>

            </nav>


            {/* CTA */}

            <a
              href="#contact"
              className="mobile-menu-cta"
              onClick={closeMenu}
            >
              <span>
                Book a Site Visit
              </span>

              <strong>
                ↗
              </strong>
            </a>


            {/* FOOTER */}

            <div className="mobile-menu-footer">

              <span>
                VISTARA VALLEY
              </span>

              <span>
                LIFE IN THE CITY.
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            HERO CONTENT
        ========================================= */}

        <div className="hero-content">

          <p className="hero-eyebrow">
            PREMIUM RESIDENTIAL &amp; COMMERCIAL PLOTS
          </p>


          <h1 className="hero-title">

            Vistara Valley

            <span>
              Life in the city.
            </span>

          </h1>


          <p className="hero-location">
            Khandwa Road · Khargone
          </p>


          <p className="hero-description">
            A premium plotted development in Khargone,
            thoughtfully planned for modern residential
            living, commercial opportunities and a
            connected lifestyle.
          </p>


          <a
            href="#about"
            className="hero-button"
          >
            <span>
              Explore the Project
            </span>

            <strong>
              ↗
            </strong>
          </a>

        </div>


        {/* =========================================
            HERO HIGHLIGHTS
        ========================================= */}

        <div className="hero-highlights">

          <div className="hero-highlight">

            <strong>
              RERA
            </strong>

            <span>
              Approved
            </span>

          </div>


          <div className="hero-highlight">

            <strong>
              TNCP
            </strong>

            <span>
              Approved
            </span>

          </div>


          <div className="hero-highlight">

            <strong>
              30 · 40 · 70 FT
            </strong>

            <span>
              Wide Internal Roads
            </span>

          </div>

        </div>


        {/* =========================================
            SCROLL
        ========================================= */}

        <a
          href="#about"
          className="hero-scroll"
        >
          <span>
            SCROLL
          </span>

          <i>
            ↓
          </i>
        </a>

      </section>


      {/* =========================================
          SECTION 2 PLACEHOLDER
      ========================================= */}

      <section
        id="about"
        className="placeholder-section"
      >
        <p>
          Section 2 coming next.
        </p>
      </section>

    </main>
  );
}