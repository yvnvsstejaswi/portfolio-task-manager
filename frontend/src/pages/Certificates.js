// Certificates.js

import PortfolioLayout from "../components/PortfolioLayout";

import Footer from "../components/Footer";

import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaAward
} from "react-icons/fa";

import "../styles/portfolio.css";

function Certificates() {

  return (

    <PortfolioLayout>

      <section className="internship-page">

        <h2 className="internship-heading">

          Certifications

        </h2>

        {/* CERTIFICATE 1 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaCertificate />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                Oracle AI Foundations

              </h3>

              <div className="internship-duration">

                <FaCalendarAlt />

                <span>Oracle</span>

              </div>

            </div>

            <p className="internship-role">

              Artificial Intelligence Fundamentals

            </p>

            <p className="internship-description">

              Learned foundational concepts of
              Artificial Intelligence,
              Machine Learning,
              and modern AI applications
              through Oracle certification training.

            </p>

            <a
              href="/certificates/oracle-ai.pdf"
              target="_blank"
              rel="noreferrer"
              className="internship-link"
            >

              <FaExternalLinkAlt />

              View Certificate

            </a>

          </div>

        </div>

        {/* CERTIFICATE 2 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaCertificate />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                Machine Learning with Python

              </h3>

              <div className="internship-duration">

                <FaCalendarAlt />

                <span>IBM</span>

              </div>

            </div>

            <p className="internship-role">

              AI & ML Certification

            </p>

            <p className="internship-description">

              Learned Machine Learning concepts,
              Python programming,
              data preprocessing,
              and AI model development techniques.

            </p>

            <a
              href="/certificates/ml-python.jpeg"
              target="_blank"
              rel="noreferrer"
              className="internship-link"
            >

              <FaExternalLinkAlt />

              View Certificate

            </a>

          </div>

        </div>

        {/* CERTIFICATE 3 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaAward />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                Python Programming and SQL

              </h3>

              <div className="internship-duration">

                <FaCalendarAlt />

                <span>Excelr</span>

              </div>

            </div>

            <p className="internship-role">

              Python Programming Certification

            </p>

            <p className="internship-description">

              Learned Python fundamentals,
              problem-solving concepts,
              logical programming,
              and SQL Queries.

            </p>

            <a
              href="/certificates/python-programming.pdf"
              target="_blank"
              rel="noreferrer"
              className="internship-link"
            >

              <FaExternalLinkAlt />

              View Certificate

            </a>

          </div>

        </div>

        {/* CERTIFICATE 4 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaCertificate />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                Power BI + AI + SQL

              </h3>

              <div className="internship-duration">

                <FaCalendarAlt />

                <span>Pritrics Technologies Pvt.Ltd</span>

              </div>

            </div>

            <p className="internship-role">

              Data Visualization & AI Training

            </p>

            <p className="internship-description">

              Gained hands-on experience in
              Power BI dashboards,
              SQL concepts,
              Generative AI tools,
              and analytical reporting techniques.

            </p>

            <a
              href="/certificates/powerbi-ai-sql.png"
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

export default Certificates;