import Reveal from "./Reveal";
import "./Location.css";

const locations = [
  {
    distance: "LOCATION",
    title: "Khandwa Road",
    description:
      "Vistara Valley is located on Khandwa Road, Khargone, giving the project a prominent highway address.",
  },
  {
    distance: "PROJECT TYPE",
    title: "Residential & Commercial",
    description:
      "A mixed plotted development offering opportunities for both residential living and commercial use.",
  },
  {
    distance: "POSITIONING",
    title: "Highway Address",
    description:
      "A premium plotted development positioned on one of Khargone's important road corridors.",
  },
  {
    distance: "CITY",
    title: "Khargone",
    description:
      "A strategically located project within Khargone, Madhya Pradesh.",
  },
];

export default function Location() {
  return (
    <section
      className="location-section"
      id="location"
    >
      <Reveal>
        <div className="location-header">

          <div>
            <p className="location-eyebrow">
              LOCATION & CONNECTIVITY
            </p>

            <h2 className="location-title">
              Connected to
              <br />
              <span>what matters.</span>
            </h2>
          </div>

          <p className="location-intro">
            Discover Vistara Valley on Khandwa Road, Khargone —
            a premium residential and commercial plotted
            development with a distinctive highway address.
          </p>

        </div>
      </Reveal>


      <Reveal>
        <div className="location-content">

          <div className="location-map">

            <div className="location-map-inner">

              <div className="location-pin">
                <span>V</span>
              </div>

              <div className="location-map-label">
                VISTARA VALLEY
              </div>

              <p>
                Khandwa Road
                <br />
                Khargone, Madhya Pradesh
              </p>

            </div>

          </div>


          <div className="location-list">

            {locations.map(
              (location, index) => (
                <div
                  className="location-item"
                  key={location.title}
                >

                  <span className="location-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="location-info">

                    <span className="location-distance">
                      {location.distance}
                    </span>

                    <h3>
                      {location.title}
                    </h3>

                    <p>
                      {location.description}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </div>
      </Reveal>


      <Reveal>
        <div className="location-button-wrapper">

          <a
            href="#contact"
            className="primary-button"
          >
            Enquire About Location
          </a>

        </div>
      </Reveal>

    </section>
  );
}