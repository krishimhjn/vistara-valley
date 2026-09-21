import Reveal from "./Reveal";
import "./Plots.css";

const plotTypes = [
  {
    number: "01",
    category: "RESIDENTIAL",
    title: "Build the life\nyou imagine.",
    description:
      "Premium residential plots planned for homes with space, privacy and the freedom to create your own address.",
    action: "Explore Residential",
  },
  {
    number: "02",
    category: "COMMERCIAL",
    title: "Create your\nnext opportunity.",
    description:
      "Commercial plots positioned for businesses, retail and future opportunities along Khandwa Road.",
    action: "Explore Commercial",
  },
];

export default function Plots() {
  return (
    <section className="plots-section" id="plots">
      <div className="plots-intro">
        <Reveal>
          <div className="plots-heading">
            <p className="plots-eyebrow">PLOTS & OPPORTUNITIES</p>

            <h2 className="plots-title">
              Choose your
              <br />
              <span>address.</span>
            </h2>

            <p className="plots-description">
              Whether you are creating a home or building a business,
              Vistara Valley offers a thoughtfully planned address
              designed around possibility.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="plots-intro-meta">
            <span>VISTARA VALLEY</span>
            <span>KHANDWA ROAD · KHARGONE</span>
          </div>
        </Reveal>
      </div>

      <div className="plots-grid">
        {plotTypes.map((plot) => (
          <Reveal key={plot.number}>
            <article className="plot-card">
              <div className="plot-card-top">
                <span className="plot-number">{plot.number}</span>
                <span className="plot-category">{plot.category}</span>
              </div>

              <div className="plot-card-content">
                <h3>
                  {plot.title.split("\n").map((line, index) => (
                    <span key={line}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </h3>

                <p>{plot.description}</p>

                <button className="plot-link">
                  <span>{plot.action}</span>
                  <strong>↗</strong>
                </button>
              </div>

              <div className="plot-card-footer">
                <span>VISTARA VALLEY</span>
                <span>{plot.number} / 02</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="plots-bottom">
          <div className="plots-bottom-line" />

          <div className="plots-bottom-content">
            <span>YOUR LAND. YOUR POSSIBILITY.</span>

            <p>
              Explore the master plan to understand the layout,
              connectivity and overall vision of Vistara Valley.
            </p>

            <a href="#master-plan" className="plots-master-link">
              View Master Plan
              <span>↓</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}