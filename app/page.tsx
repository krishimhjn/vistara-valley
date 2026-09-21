"use client";

import { useEffect, useRef } from "react";

import About from "./components/About";
import Highlights from "./components/Highlights";
import MasterPlan from "./components/MasterPlan";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import Location from "./components/Location";
import Plots from "./components/Plots";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      const image = heroImageRef.current;

      if (!hero || !image) return;

      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;

      if (scrollY <= heroHeight) {
        const movement = scrollY * 0.35;

        image.style.transform =
          `translate3d(0, ${movement}px, 0) scale(1.08)`;
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

  return (
    <main>

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          <img
            src="/images/logo.png"
            alt="Vistara Valley"
          />
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#amenities">Amenities</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="nav-button"
        >
          Book a Site Visit
        </a>

      </nav>


      {/* Hero Section */}
      <section ref={heroRef} className="hero">
  <div
    ref={heroImageRef}
    className="hero-parallax"
  />

  <div className="hero-content">

    <div className="hero-copy">
      <p className="hero-eyebrow">
        PREMIUM RESIDENTIAL & COMMERCIAL PLOTS
      </p>

      <h1 className="hero-title">
        Vistara Valley
        <br />
        <span>Life in the city.</span>
      </h1>

      <p className="hero-description">
        A thoughtfully planned address on Khandwa Road,
        Khargone, designed for modern living, business
        opportunities and long-term growth.
      </p>

      <div className="hero-buttons">
        <a
          href="#contact"
          className="primary-button"
        >
          Book a Site Visit
          <span>↗</span>
        </a>

        <a
          href="#about"
          className="secondary-button"
        >
          Explore Project
          <span>↓</span>
        </a>
      </div>
    </div>

    <div className="hero-highlights">

      <div className="hero-highlight">
        <strong>RERA</strong>
        <span>Registered Project</span>
      </div>

      <div className="hero-highlight">
        <strong>TNCP</strong>
        <span>Approved Project</span>
      </div>

      <div className="hero-highlight">
        <strong>TWO GATES</strong>
        <span>Entry & Exit</span>
      </div>

      <div className="hero-highlight">
        <strong>2 IN 1</strong>
        <span>Residential & Commercial</span>
      </div>

    </div>

    <div className="hero-scroll">
      <span>SCROLL</span>
      <div>↓</div>
    </div>

  </div>
</section>
      {/* Gallery */}
      <Gallery />

      {/* About */}
      <About />

      {/* Highlights */}
      <Highlights />

      {/* Master Plan */}
      <MasterPlan />

      {/* Amenities */}
      <Amenities />

      {/* Plots */}
      <Plots />

      {/* Location */}
      <Location />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  );
}