"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import "./Gallery.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90",
    title: "The Landscape",
    alt: "Open landscaped surroundings",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
    title: "The Address",
    alt: "Contemporary residential architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1800&q=90",
    title: "The Connection",
    alt: "Road and connectivity",
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=90",
    title: "The Surroundings",
    alt: "Green landscaped surroundings",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    setSelectedImage((current) =>
      current === null
        ? 0
        : (current + 1) % galleryImages.length
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === null
        ? 0
        : (current - 1 + galleryImages.length) %
          galleryImages.length
    );
  };

  return (
    <>
      <section className="gallery-section" id="gallery">
        <Reveal>
          <div className="gallery-heading">
            <p className="gallery-eyebrow">
              EXPERIENCE VISTARA VALLEY
            </p>

            <h2 className="gallery-title">
              A place
              <br />
              <span>worth arriving at.</span>
            </h2>

            <p className="gallery-description">
              A visual introduction to the spaces, landscape
              and distinctive character envisioned for
              Vistara Valley.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="gallery-editorial">
            <button
              className="gallery-main"
              onClick={() => setSelectedImage(0)}
              aria-label={`Open ${galleryImages[0].title}`}
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
              />

              <div className="gallery-main-overlay">
                <span>01</span>
                <strong>{galleryImages[0].title}</strong>
              </div>
            </button>

            <div className="gallery-side">
              {galleryImages.slice(1, 3).map((image, index) => {
                const imageIndex = index + 1;

                return (
                  <button
                    className="gallery-side-image"
                    key={image.src}
                    onClick={() => setSelectedImage(imageIndex)}
                    aria-label={`Open ${image.title}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                    />

                    <div className="gallery-side-overlay">
                      <span>
                        {String(imageIndex + 1).padStart(2, "0")}
                      </span>

                      <strong>{image.title}</strong>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="gallery-bottom">
            <button
              className="gallery-bottom-image"
              onClick={() => setSelectedImage(3)}
              aria-label={`Open ${galleryImages[3].title}`}
            >
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
              />

              <div className="gallery-bottom-overlay">
                <span>04</span>
                <strong>{galleryImages[3].title}</strong>
              </div>
            </button>

            <div className="gallery-bottom-copy">
              <span>THE VISTARA VALLEY JOURNEY</span>

              <p>
                Designed around openness, movement and a
                distinctive sense of arrival.
              </p>

              <button
                className="gallery-view-button"
                onClick={() => setSelectedImage(0)}
              >
                View Gallery
                <span>↗</span>
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {selectedImage !== null && (
        <div className="gallery-lightbox">
          <button
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="gallery-lightbox-image">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
            />
          </div>

          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="gallery-counter">
            {String(selectedImage + 1).padStart(2, "0")}
            {" / "}
            {String(galleryImages.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </>
  );
}