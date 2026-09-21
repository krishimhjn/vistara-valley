import Reveal from "./Reveal";
import "./About.css";

const features = [
  {
    number: "01",
    label: "RERA",
    title: "Registered Project",
    description:
      "A registered development planned with transparency and a clear project framework.",
  },
  {
    number: "02",
    label: "TNCP",
    title: "Approved Development",
    description:
      "Planned and approved development for a more structured project experience.",
  },
  {
    number: "03",
    label: "TWO GATES",
    title: "Two-Gate Access",
    description:
      "Two entry and exit gates designed to support smoother movement through the development.",
  },
  {
    number: "04",
    label: "2 IN 1",
    title: "Residential + Commercial",
    description:
      "A distinctive development bringing residential living and commercial opportunity together.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <Reveal>
        <div className="about-intro">
          <p className="about-eyebrow">
            THE VISTARA VALLEY EXPERIENCE
          </p>

          <h2 className="about-title">
            More than a plot.
            <br />
            <span>An address with a sense of arrival.</span>
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
        <div className="about-features">
          {features.map((feature) => (
            <div className="about-feature" key={feature.number}>
              <div className="about-feature-top">
                <span className="about-feature-number">
                  {feature.number}
                </span>

                <span className="about-feature-arrow">↗</span>
              </div>

              <div className="about-feature-content">
                <span className="about-feature-label">
                  {feature.label}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>

              <div className="about-feature-line" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}