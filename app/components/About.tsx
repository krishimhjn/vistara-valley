import Reveal from "./Reveal";
import "./About.css";

const overviewCards = [
  {
    icon: "✓",
    title: "RERA Registered",
    text: "A registered project designed with transparency and a clear development framework.",
  },
  {
    icon: "◇",
    title: "TNCP Approved",
    text: "An approved development planned for a structured project experience.",
  },
  {
    icon: "↕",
    title: "Two-Gate Access",
    text: "Two entry and exit gates designed for smoother movement through the development.",
  },
  {
    icon: "⌂",
    title: "Residential + Commercial",
    text: "A mixed plotted development bringing living and business opportunities together.",
  },
];

const projectFeatures = [
  {
    number: "01",
    title: "Premium Highway Address",
    text: "A distinctive plotted development positioned on Khandwa Road, Khargone.",
  },
  {
    number: "02",
    title: "Two Entry & Exit Gates",
    text: "Multiple access points designed to support convenient movement within the colony.",
  },
  {
    number: "03",
    title: "Residential & Commercial",
    text: "A development planned around both residential living and commercial opportunity.",
  },
  {
    number: "04",
    title: "Thoughtfully Planned",
    text: "A planned environment created around accessibility, openness and modern development.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-layout">
        <Reveal>
          <div className="about-main">
            <p className="about-eyebrow">
              PROJECT OVERVIEW
            </p>

            <h2 className="about-title">
              A distinctive
              <br />
              <span>address in Khargone.</span>
            </h2>

            <p className="about-description">
              Vistara Valley brings together premium residential
              and commercial plots in a thoughtfully planned
              development on Khandwa Road, Khargone. Designed
              around modern living, business opportunities and
              long-term growth, the project creates a distinctive
              highway address.
            </p>

            <div className="about-cards">
              {overviewCards.map((card) => (
                <div className="about-card" key={card.title}>
                  <div className="about-card-icon">
                    {card.icon}
                  </div>

                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a
                href="#contact"
                className="about-primary-button"
              >
                Book a Site Visit
                <span>↗</span>
              </a>

              <a
                href="#location"
                className="about-secondary-button"
              >
                Explore Location
                <span>→</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-feature-panel">
            <div className="about-panel-top">
              <span>VISTARA VALLEY</span>
              <span>KHARGONE</span>
            </div>

            <div className="about-panel-heading">
              <p>THE PROJECT</p>

              <h3>
                Designed around
                <br />
                <span>the way you move.</span>
              </h3>
            </div>

            <div className="about-feature-list">
              {projectFeatures.map((feature) => (
                <div
                  className="about-feature"
                  key={feature.number}
                >
                  <span className="about-feature-number">
                    {feature.number}
                  </span>

                  <div className="about-feature-copy">
                    <h4>{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>

                  <span className="about-feature-arrow">
                    ↗
                  </span>
                </div>
              ))}
            </div>

            <div className="about-panel-bottom">
              <span>PREMIUM RESIDENTIAL & COMMERCIAL PLOTS</span>
              <span>EST. VISTARA VALLEY</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}