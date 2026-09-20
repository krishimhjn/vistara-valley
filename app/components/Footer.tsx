import Reveal from "./Reveal";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">

      <Reveal>
        <div className="footer-main">

          <div className="footer-brand">

            <img
              src="/images/logo.png"
              alt="Vistara Valley"
              className="footer-logo"
            />

            <p>
              A thoughtfully planned residential and commercial
              destination designed for modern living and a better future.
            </p>

            <a
              href="#contact"
              className="footer-cta"
            >
              Book a Site Visit
              <span>↗</span>
            </a>

          </div>

          <div className="footer-column">

            <h3>Explore</h3>

            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#amenities">Amenities</a>
            <a href="#plots">Plots</a>
            <a href="#location">Location</a>

          </div>

          <div className="footer-column">

            <h3>Plots</h3>

            <a href="#plots">Residential</a>
            <a href="#plots">Commercial</a>
            <a href="#plots">Availability</a>
            <a href="#contact">Enquire Now</a>

          </div>

          <div className="footer-column">

            <h3>Contact</h3>

            <a href="tel:+91XXXXXXXXXX">
              +91 XXXXX XXXXX
            </a>

            <a href="mailto:info@vistaravalley.com">
              info@vistaravalley.com
            </a>

            <p>
              Madhya Pradesh, India
            </p>

          </div>

        </div>
      </Reveal>

      <Reveal>
        <div className="footer-bottom">

          <p>
            © 2026 Vistara Valley. All rights reserved.
          </p>

          <div className="footer-legal">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

            <a href="#">
              RERA Information
            </a>

          </div>

        </div>
      </Reveal>

    </footer>
  );
}