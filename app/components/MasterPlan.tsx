import Reveal from "./Reveal";
import "./MasterPlan.css";

export default function MasterPlan() {
  return (
    <section className="masterplan-section" id="master-plan">
      <Reveal>
        <div className="masterplan-header">

          <p className="masterplan-eyebrow">
            THE MASTER PLAN
          </p>

          <h2 className="masterplan-title">
            Space to build.
            <br />
            <span>Room to grow.</span>
          </h2>

          <p className="masterplan-description">
            A thoughtfully planned residential and commercial
            development on Khandwa Road, Khargone, designed to
            create a well-connected environment for living,
            business and future growth.
          </p>

        </div>
      </Reveal>


      <Reveal>
        <div className="masterplan-content">

          <div className="masterplan-image">

            <div className="masterplan-placeholder">

              <span>
                VISTARA VALLEY
              </span>

              <p>
                Official master plan
                <br />
                will be added here
              </p>

              <small>
                MASTER PLAN • COMING SOON
              </small>

            </div>

          </div>


          <div className="masterplan-details">

            <div className="masterplan-detail">
              <span>01</span>

              <div>
                <h3>
                  Residential
                </h3>

                <p>
                  Dedicated residential plots designed for
                  thoughtfully planned homes and comfortable living.
                </p>
              </div>
            </div>


            <div className="masterplan-detail">
              <span>02</span>

              <div>
                <h3>
                  Commercial
                </h3>

                <p>
                  Commercial opportunities integrated within the
                  development for businesses and future growth.
                </p>
              </div>
            </div>


            <div className="masterplan-detail">
              <span>03</span>

              <div>
                <h3>
                  Highway Location
                </h3>

                <p>
                  Positioned on Khandwa Road, Khargone, with a
                  distinctive highway-facing address.
                </p>
              </div>
            </div>


            <div className="masterplan-detail">
              <span>04</span>

              <div>
                <h3>
                  Approved Development
                </h3>

                <p>
                  Developed as a TNCP-approved and RERA-registered
                  plotted project.
                </p>
              </div>
            </div>

          </div>

        </div>
      </Reveal>


      <Reveal>
        <div className="masterplan-button-wrapper">

          <a
            href="#contact"
            className="primary-button"
          >
            Enquire About the Project
          </a>

        </div>
      </Reveal>

    </section>
  );
}