import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <Reveal>
        <div className="about-content">
          <p className="about-eyebrow">
            THE VISTARA VALLEY EXPERIENCE
          </p>

          <h2 className="about-title">
            More than a plot.
            <br />
            <span>A place to belong.</span>
          </h2>

          <p className="about-description">
            Vistara Valley brings together premium residential and
            commercial plots in a thoughtfully planned development
            on Khandwa Road, Khargone. Designed around modern
            living, business opportunities and long-term growth,
            it creates a distinctive address on the highway.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="about-stats">

          <div className="about-stat">
            <strong>RERA</strong>
            <span>Registered Project</span>
          </div>

          <div className="about-stat">
            <strong>TNCP</strong>
            <span>Approved Project</span>
          </div>

          <div className="about-stat">
            <strong>2 IN 1</strong>
            <span>Residential & Commercial</span>
          </div>

          <div className="about-stat">
            <strong>KHANDWA RD</strong>
            <span>Premium Highway Location</span>
          </div>

        </div>
      </Reveal>
    </section>
  );
}