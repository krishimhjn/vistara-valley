"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import "./Plots.css";

const plots = [
  {
    number: "01",
    title: "Residential",
    type: "Residential Plots",
    category: "Residential",
    status: "Available",
  },
  {
    number: "02",
    title: "Premium Residential",
    type: "Residential Plots",
    category: "Residential",
    status: "Details Soon",
  },
  {
    number: "03",
    title: "Commercial",
    type: "Commercial Plots",
    category: "Commercial",
    status: "Available",
  },
  {
    number: "04",
    title: "Premium Commercial",
    type: "Commercial Plots",
    category: "Commercial",
    status: "Details Soon",
  },
];

export default function Plots() {
  const [category, setCategory] = useState<
    "All" | "Residential" | "Commercial"
  >("All");

  const filteredPlots =
    category === "All"
      ? plots
      : plots.filter(
          (plot) => plot.category === category
        );

  return (
    <section
      className="plots-section"
      id="plots"
    >
      <Reveal>
        <div className="plots-header">

          <div>
            <p className="plots-eyebrow">
              PLOTS & AVAILABILITY
            </p>

            <h2 className="plots-title">
              Choose the space
              <br />
              <span>that feels like yours.</span>
            </h2>
          </div>

          <p className="plots-intro">
            Vistara Valley offers residential and commercial
            plotted opportunities on Khandwa Road, Khargone.
            Plot sizes, pricing and availability will be updated
            with the official project details.
          </p>

        </div>
      </Reveal>


      <Reveal>
        <div className="plots-filters">

          <button
            className={
              category === "All"
                ? "plot-filter active"
                : "plot-filter"
            }
            onClick={() => setCategory("All")}
          >
            All Plots
          </button>

          <button
            className={
              category === "Residential"
                ? "plot-filter active"
                : "plot-filter"
            }
            onClick={() => setCategory("Residential")}
          >
            Residential
          </button>

          <button
            className={
              category === "Commercial"
                ? "plot-filter active"
                : "plot-filter"
            }
            onClick={() => setCategory("Commercial")}
          >
            Commercial
          </button>

        </div>
      </Reveal>


      <Reveal>
        <div className="plots-grid">

          {filteredPlots.map((plot) => (
            <div
              className="plot-card"
              key={plot.number}
            >

              <div className="plot-card-top">

                <span className="plot-number">
                  {plot.number}
                </span>

                <span className="plot-status">
                  {plot.status}
                </span>

              </div>


              <div className="plot-card-content">

                <span className="plot-type">
                  {plot.type}
                </span>

                <h3>
                  {plot.title}
                </h3>

                <p>
                  Official plot sizes, pricing and availability
                  will be updated here as the project details
                  are finalized.
                </p>

              </div>


              <a
                href="#contact"
                className="plot-button"
              >
                Enquire Now
                <span>↗</span>
              </a>

            </div>
          ))}

        </div>
      </Reveal>
    </section>
  );
}