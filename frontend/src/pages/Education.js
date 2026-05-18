// Education.js

import PortfolioLayout from "../components/PortfolioLayout";

import Footer from "../components/Footer";

import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/portfolio.css";

function Education() {

  return (

    <PortfolioLayout>

      <section className="portfolio-card">

        <h2>

          Education

        </h2>

        {/* MCA */}

        <div className="edu-card">

          <div className="edu-left">

            <div className="edu-icon">

              <FaGraduationCap />

            </div>

            <div className="edu-details">

              <h3>

                Master of Computer Applications (AI)

              </h3>

              <p className="college-name">

                <FaUniversity />

                Koneru Lakshmaiah Education Foundation

              </p>

              <span className="location">

                <FaMapMarkerAlt />

                Guntur

              </span>

            </div>

          </div>

          <div className="cgpa-box">

            CGPA: 9.65

          </div>

        </div>

        {/* DEGREE */}

        <div className="edu-card">

          <div className="edu-left">

            <div className="edu-icon">

              <FaGraduationCap />

            </div>

            <div className="edu-details">

              <h3>

                B.Sc (MSCS)

              </h3>

              <p className="college-name">

                <FaUniversity />

                Sri Siddhartha Degree College Of Science & Computers

              </p>

              <span className="location">

                <FaMapMarkerAlt />

                Nuzvid

              </span>

            </div>

          </div>

          <div className="cgpa-box">

            CGPA: 9.31

          </div>

        </div>

        {/* INTER */}

        <div className="edu-card">

          <div className="edu-left">

            <div className="edu-icon">

              <FaGraduationCap />

            </div>

            <div className="edu-details">

              <h3>

                Intermediate (MPC)

              </h3>

              <p className="college-name">

                <FaUniversity />

                Sri Vagdevi Junior College

              </p>

              <span className="location">

                <FaMapMarkerAlt />

                Nuzvid

              </span>

            </div>

          </div>

          <div className="cgpa-box">

            CGPA: 10

          </div>

        </div>

        {/* SSC */}

        <div className="edu-card">

          <div className="edu-left">

            <div className="edu-icon">

              <FaGraduationCap />

            </div>

            <div className="edu-details">

              <h3>

                SSC

              </h3>

              <p className="college-name">

                <FaUniversity />

                Thrividha E.M High School

              </p>

              <span className="location">

                <FaMapMarkerAlt />

                Nuzvid

              </span>

            </div>

          </div>

          <div className="cgpa-box">

            CGPA: 9.8

          </div>

        </div>

      </section>

      <Footer />

    </PortfolioLayout>
  );
}

export default Education;