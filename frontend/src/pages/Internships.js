// Internships.js

import PortfolioLayout from "../components/PortfolioLayout";

import Footer from "../components/Footer";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaLaptopCode
} from "react-icons/fa";

import "../styles/portfolio.css";

function Internships() {

  return (

    <PortfolioLayout>

      <section className="internship-page">

        <h2 className="internship-heading">

          Internships

        </h2>

        {/* INTERNSHIP 1 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaLaptopCode />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                AIMER Society – Indian Servers

              </h3>

              <div className="internship-duration">

                <FaCalendarAlt />

                <span>6 Weeks</span>

              </div>

            </div>

            <p className="internship-role">

              AI & Data Visualization Internship

            </p>

            <p className="internship-description">

              Gained practical experience in
              <b> Power BI</b>,
              <b> Data Visualization</b>,
              AI tools, and Generative AI applications.
              Improved teamwork, communication,
              and analytical problem-solving skills.

            </p>

            <div className="internship-location">

              <FaMapMarkerAlt />

              <span>Remote Internship</span>

            </div>

            <a
              href="/certificates/aimer-certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="internship-link"
            >

              <FaExternalLinkAlt />

              View Certificate

            </a>

          </div>

        </div>

      </section>

      <Footer />

    </PortfolioLayout>
  );
}

export default Internships;