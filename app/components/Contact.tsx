"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-inner">

        <Reveal>
          <div className="contact-content">

            <p className="contact-eyebrow">
              BOOK A SITE VISIT
            </p>

            <h2 className="contact-title">
              Your future
              <br />
              <span>starts here.</span>
            </h2>

            <p className="contact-description">
              Take the first step towards owning your space at
              Vistara Valley. Share your details and our team
              will get in touch with you.
            </p>

            <div className="contact-details">

              <div>
                <span>CALL US</span>
                <p>+91 XXXXX XXXXX</p>
              </div>

              <div>
                <span>WHATSAPP</span>
                <p>Chat with our team</p>
              </div>

            </div>

          </div>
        </Reveal>

        <Reveal>
          <div className="contact-form-wrapper">

            {submitted ? (

              <div className="contact-success">

                <div className="contact-success-icon">
                  ✓
                </div>

                <h3>Thank you.</h3>

                <p>
                  Your enquiry has been received.
                  Our team will contact you shortly.
                </p>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-field">

                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="phone">
                    MOBILE NUMBER
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    required
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="interest">
                    INTERESTED IN
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="residential">
                      Residential Plot
                    </option>

                    <option value="commercial">
                      Commercial Plot
                    </option>
                  </select>

                </div>

                <div className="contact-field">

                  <label htmlFor="size">
                    PREFERRED PLOT SIZE
                  </label>

                  <select
                    id="size"
                    name="size"
                    defaultValue=""
                  >
                    <option value="">
                      Select plot size
                    </option>

                    <option value="1000">
                      1000 SQ. FT.
                    </option>

                    <option value="1200">
                      1200 SQ. FT.
                    </option>

                    <option value="1500">
                      1500 SQ. FT.
                    </option>

                    <option value="1800">
                      1800 SQ. FT.
                    </option>

                    <option value="2000">
                      2000 SQ. FT.
                    </option>

                  </select>

                </div>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  Request a Site Visit
                  <span>↗</span>
                </button>

              </form>

            )}

          </div>
        </Reveal>

      </div>

    </section>
  );
}