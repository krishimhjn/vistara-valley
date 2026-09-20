import Reveal from "./Reveal";
import "./Highlights.css";

export default function Highlights() {
  return (
    <section className="highlights-section">
      <Reveal>
        <div className="highlights-header">
          <div>
            <p className="highlights-eyebrow">
              WHY VISTARA VALLEY
            </p>

            <h2 className="highlights-title">
              Designed around
              <br />
              <span>opportunity.</span>
            </h2>
          </div>

          <p className="highlights-intro">
            A distinctive plotted development bringing together
            residential living, commercial potential and a
            strategically positioned highway address in Khargone.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="highlights-grid">

          <div className="highlight-card">
            <span>01</span>

            <div className="highlight-icon">
              ✦
            </div>

            <h3>
              Premium Address
            </h3>

            <p>
              Located on Khandwa Road, bringing your home or
              business closer to an important highway corridor.
            </p>
          </div>


          <div className="highlight-card">
            <span>02</span>

            <div className="highlight-icon">
              ⌂
            </div>

            <h3>
              Residential Plots
            </h3>

            <p>
              Thoughtfully planned spaces created for homes
              designed around your vision and lifestyle.
            </p>
          </div>


          <div className="highlight-card">
            <span>03</span>

            <div className="highlight-icon">
              ◇
            </div>

            <h3>
              Commercial Potential
            </h3>

            <p>
              Commercial plots positioned for businesses,
              visibility and future opportunities.
            </p>
          </div>


          <div className="highlight-card">
            <span>04</span>

            <div className="highlight-icon">
              ◎
            </div>

            <h3>
              Approved Development
            </h3>

            <p>
              A project planned with TNCP approval and RERA
              registration for greater transparency.
            </p>
          </div>

        </div>
      </Reveal>
    </section>
  );
}