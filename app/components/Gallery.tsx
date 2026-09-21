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
  const [selectedImage, setSelectedImage] = useState<number | null>(
    null
  );

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
        <div className="gallery-layout">
          {/* LEFT PANEL */}

          <Reveal>
            <div className="gallery-info-panel">
              <div className="gallery-panel-top">
                <span>VISTARA VALLEY</span>
                <span>04 VISUALS</span>
              </div>

              <div className="gallery-panel-main">
                <p className="gallery-eyebrow">
                  VISUAL JOURNEY
                </p>

                <h2 className="gallery-title">
                  A closer look
                  <br />
                  <span>at Vistara Valley.</span>
                </h2>

                <p className="gallery-description">
                  Explore the spaces, landscape and architectural
                  character envisioned for a distinctive address
                  on Khandwa Road, Khargone.
                </p>

                <div className="gallery-index">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image.title}
                      onClick={() => setSelectedImage(index)}
                      className={
                        selectedImage === index
                          ? "gallery-index-item active"
                          : "gallery-index-item"
                      }
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <strong>{image.title}</strong>

                      <em>↗</em>
                    </button>
                  ))}
                </div>

                <button
                  className="gallery-view-button"
                  onClick={() => setSelectedImage(0)}
                >
                  View Gallery
                  <span>↗</span>
                </button>
              </div>

              <div className="gallery-panel-bottom">
                <span>PREMIUM RESIDENTIAL & COMMERCIAL</span>
                <span>KHARGONE</span>
              </div>
            </div>
          </Reveal>

          {/* IMAGE GRID */}

          <Reveal>
            <div className="gallery-grid">
              <button
                className="gallery-image gallery-image-large"
                onClick={() => setSelectedImage(0)}
                aria-label={`Open ${galleryImages[0].title}`}
              >
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                />

                <div className="gallery-image-overlay">
                  <span>01</span>
                  <strong>{galleryImages[0].title}</strong>
                  <em>↗</em>
                </div>
              </button>

              {galleryImages.slice(1).map((image, index) => {
                const imageIndex = index + 1;

                return (
                  <button
                    key={image.title}
                    className="gallery-image"
                    onClick={() => setSelectedImage(imageIndex)}
                    aria-label={`Open ${image.title}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                    />

                    <div className="gallery-image-overlay">
                      <span>
                        {String(imageIndex + 1).padStart(2, "0")}
                      </span>

                      <strong>{image.title}</strong>

                      <em>↗</em>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}

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