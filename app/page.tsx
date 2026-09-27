"use client";

import { useEffect, useRef, useState } from "react";
import "./globals.css";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================
     HERO PARALLAX
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollY = window.scrollY;

      if (scrollY <= window.innerHeight) {
        heroRef.current.style.transform =
          `translate3d(0, ${scrollY * 0.22}px, 0) scale(1.06)`;
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

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>

      {/* ==================================================
          SECTION 1 — HERO
      ================================================== */}

      <section
        className="vv-hero"
        id="home"
      >

        {/* HERO IMAGE */}

        <div
          ref={heroRef}
          className="vv-hero-image"
        />


        {/* DARK OVERLAY */}

        <div className="vv-hero-overlay" />


        {/* ==================================================
            NAVBAR
        ================================================== */}

        <header className="vv-navbar">

          {/* LOGO */}

          <a
            href="#home"
            className="vv-logo"
            onClick={closeMenu}
          >
            <img
              src="/images/logo.png"
              alt="Vistara Valley"
            />
          </a>


          {/* DESKTOP NAVIGATION */}

          <nav className="vv-desktop-nav">

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
              className="vv-nav-button"
            >
              <span>
                Book a Site Visit
              </span>

              <strong>
                ↗
              </strong>
            </a>

          </nav>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className={`vv-hamburger ${
              menuOpen
                ? "vv-hamburger-active"
                : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
          >

            <span />
            <span />
            <span />

          </button>

        </header>


        {/* ==================================================
            MOBILE MENU
        ================================================== */}

        <div
          className={`vv-mobile-navigation ${
            menuOpen
              ? "vv-mobile-navigation-open"
              : ""
          }`}
        >

          <div className="vv-mobile-navigation-inner">

            {/* MENU HEADER */}

            <div className="vv-mobile-menu-header">

              <span>
                VISTARA VALLEY
              </span>

              <span>
                KHANDWA ROAD · KHARGONE
              </span>

            </div>


            {/* MENU LINKS */}

            <nav className="vv-mobile-menu-links">

              <a
                href="#home"
                onClick={closeMenu}
              >
                <small>
                  01
                </small>

                <span>
                  Home
                </span>

                <i>
                  ↗
                </i>
              </a>


              <a
                href="#about"
                onClick={closeMenu}
              >
                <small>
                  02
                </small>

                <span>
                  About
                </span>

                <i>
                  ↗
                </i>
              </a>


              <a
                href="#plots"
                onClick={closeMenu}
              >
                <small>
                  03
                </small>

                <span>
                  Plots
                </span>

                <i>
                  ↗
                </i>
              </a>


              <a
                href="#master-plan"
                onClick={closeMenu}
              >
                <small>
                  04
                </small>

                <span>
                  Master Plan
                </span>

                <i>
                  ↗
                </i>
              </a>


              <a
                href="#amenities"
                onClick={closeMenu}
              >
                <small>
                  05
                </small>

                <span>
                  Amenities
                </span>

                <i>
                  ↗
                </i>
              </a>


              <a
                href="#location"
                onClick={closeMenu}
              >
                <small>
                  06
                </small>

                <span>
                  Location
                </span>

                <i>
                  ↗
                </i>
              </a>


              <a
                href="#contact"
                onClick={closeMenu}
              >
                <small>
                  07
                </small>

                <span>
                  Contact
                </span>

                <i>
                  ↗
                </i>
              </a>

            </nav>


            {/* MOBILE CTA */}

            <div className="vv-mobile-menu-bottom">

              <a
                href="#contact"
                className="vv-mobile-cta"
                onClick={closeMenu}
              >

                <span>
                  Book a Site Visit
                </span>

                <strong>
                  ↗
                </strong>

              </a>


              <div className="vv-mobile-footer">

                <span>
                  LIFE IN THE CITY.
                </span>

                <span>
                  KHARGONE · MP
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ==================================================
            HERO CONTENT
        ================================================== */}

        <div className="vv-hero-content">

          <p className="vv-hero-eyebrow">
            PREMIUM RESIDENTIAL &amp; COMMERCIAL PLOTS
          </p>


          <h1 className="vv-hero-title">

            Vistara Valley

            <span>
              Life in the city.
            </span>

          </h1>


          <p className="vv-hero-location">
            Khandwa Road · Khargone
          </p>


          <p className="vv-hero-description">
            A premium plotted development in Khargone,
            thoughtfully planned for modern residential
            living, commercial opportunities and a
            connected lifestyle.
          </p>


          <a
            href="#about"
            className="vv-hero-button"
          >

            <span>
              Explore the Project
            </span>

            <strong>
              ↗
            </strong>

          </a>

        </div>


        {/* ==================================================
            HERO INFORMATION
        ================================================== */}

        <div className="vv-hero-info">

          <div className="vv-hero-info-item">

            <strong>
              RERA
            </strong>

            <span>
              Approved
            </span>

          </div>


          <div className="vv-hero-info-item">

            <strong>
              TNCP
            </strong>

            <span>
              Approved
            </span>

          </div>


          <div className="vv-hero-info-item">

            <strong>
              30 · 40 · 70 FT
            </strong>

            <span>
              Wide Internal Roads
            </span>

          </div>

        </div>


        {/* ==================================================
            SCROLL INDICATOR
        ================================================== */}

        <a
          href="#about"
          className="vv-scroll-indicator"
        >

          <span>
            SCROLL
          </span>

          <i>
            ↓
          </i>

        </a>

      </section>


      {/* ==================================================
          TEMPORARY SECTION 2
      ================================================== */}

      <section
        id="about"
        className="vv-section-placeholder"
      >
        <span>
          SECTION 2
        </span>
      </section>

    </main>
  );
}