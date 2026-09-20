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
      <section
        className="hero"
        ref={heroRef}
      >

        <div
          className="hero-parallax"
          ref={heroImageRef}
        />

        <div className="hero-overlay">

         <p className="eyebrow hero-eyebrow">
  RESIDENTIAL & COMMERCIAL PLOTS
</p>

<h1 className="hero-title">
  Where life
  <br />
  <span>meets opportunity.</span>
</h1>

<p className="hero-description">
  Vistara Valley — Khargone&apos;s premium residential
  and commercial plotted development on Khandwa Road,
  designed for modern living, business and the future.
</p>

          <div className="hero-buttons">

            <a
              href="#about"
              className="primary-button"
            >
              Explore Vistara Valley
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Book a Site Visit
            </a>

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