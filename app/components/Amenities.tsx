import Reveal from "./Reveal";
import "./Amenities.css";

const amenities = [
  {
    number: "01",
    title: "Grand Entrance",
    description:
      "A refined entrance designed to create a distinctive first impression for the Vistara Valley community.",
    icon: "entrance",
  },
  {
    number: "02",
    title: "Planned Roads",
    description:
      "Thoughtfully planned internal roads designed for comfortable movement throughout the development.",
    icon: "road",
  },
  {
    number: "03",
    title: "Street Lighting",
    description:
      "Planned lighting infrastructure designed to create a comfortable environment after sunset.",
    icon: "light",
  },
  {
    number: "04",
    title: "Landscaped Greens",
    description:
      "Planned green spaces designed to bring openness, calm and a sense of nature to everyday surroundings.",
    icon: "green",
  },
  {
    number: "05",
    title: "Security",
    description:
      "A thoughtfully planned environment designed to support a secure and comfortable community experience.",
    icon: "security",
  },
  {
    number: "06",
    title: "Open Spaces",
    description:
      "Generous spaces envisioned to give the development an open, relaxed and spacious character.",
    icon: "open",
  },
];

function AmenityIcon({ type }: { type: string }) {
  if (type === "entrance") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 20V8l7-4 7 4v12" />
        <path d="M9 20v-7h6v7" />
        <path d="M3 20h18" />
      </svg>
    );
  }

  if (type === "road") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 20 10 4" />
        <path d="M17 20 14 4" />
        <path d="M12 6v3" />
        <path d="M12 11v3" />
        <path d="M12 16v3" />
      </svg>
    );
  }

  if (type === "light") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v16" />
        <path d="M8 20h8" />
        <path d="M9 8h6" />
        <path d="M7 8a5 5 0 0 1 10 0" />
        <path d="M5 12h14" />
      </svg>
    );
  }

  if (type === "green") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21V10" />
        <path d="M12 14c-4 0-7-2-7-6 4 0 7 2 7 6Z" />
        <path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z" />
      </svg>
    );
  }

  if (type === "security") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 20h14" />
      <path d="M7 20V8" />
      <path d="M17 20V8" />
      <path d="M7 8h10" />
      <path d="M10 4h4" />
      <path d="M12 4v4" />
    </svg>
  );
}

export default function Amenities() {
  return (
    <section
      className="amenities-section"
      id="amenities"
    >
      <Reveal>
        <div className="amenities-header">
          <p className="amenities-eyebrow">
            MODERN INFRASTRUCTURE
          </p>

          <h2 className="amenities-title">
            World-Class
            <br />
            <span>Amenities</span>
          </h2>

          <p className="amenities-intro">
            Thoughtfully planned infrastructure and essential
            features designed to create a comfortable,
            connected and premium development.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div
              className={`amenity-item ${
                index === 0 ? "amenity-item-featured" : ""
              }`}
              key={amenity.number}
            >
              <div className="amenity-icon">
                <AmenityIcon type={amenity.icon} />
              </div>

              <div className="amenity-number">
                {amenity.number}
              </div>

              <div className="amenity-text">
                <h3>{amenity.title}</h3>

                <p>{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}