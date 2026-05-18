// Contact.js

import PortfolioLayout from "../components/PortfolioLayout";

import Footer from "../components/Footer";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import "../styles/portfolio.css";

function Contact() {

  return (

    <PortfolioLayout>

      <section className="internship-page">

        <h2 className="internship-heading">

          Contact

        </h2>

        <div className="contact-box">

          {/* EMAIL */}

          <div className="contact-item">

            <FaEnvelope className="contact-icon email-icon" />

            <span>

              Email:

            </span>

            <a href="mailto:yvnvsstejaswi@gmail.com">

              yvnvsstejaswi@gmail.com

            </a>

          </div>

          {/* PHONE */}

          <div className="contact-item">

            <FaPhoneAlt className="contact-icon phone-icon" />

            <span>

              Phone:

            </span>

            <a href="tel:+919948426323">

              +91 9948426323

            </a>

          </div>

          {/* LINKEDIN */}

          <div className="contact-item">

            <FaLinkedin className="contact-icon linkedin-icon" />

            <span>

              LinkedIn:

            </span>

            <a
              href="https://linkedin.com/in/yarasuri-v-n-v-sai-sri-tejaswi"
              target="_blank"
              rel="noreferrer"
            >

              View Profile

            </a>

          </div>

          {/* GITHUB */}

          <div className="contact-item">

            <FaGithub className="contact-icon github-icon" />

            <span>

              GitHub:

            </span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >

              View GitHub

            </a>

          </div>

          {/* LOCATION */}

          <div className="contact-item">

            <FaMapMarkerAlt className="contact-icon location-icon" />

            <span>

              Location:

            </span>

            <p>

              Nuzvid, Andhra Pradesh, India

            </p>

          </div>

        </div>

        {/* MAP */}

        <div className="map-container">

          <iframe
            title="location"
            src="https://maps.google.com/maps?q=Nuzvid&t=&z=10&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </section>

      <Footer />

    </PortfolioLayout>
  );
}

export default Contact;