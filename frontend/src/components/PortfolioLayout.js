import { Link } from "react-router-dom";

import "../styles/portfolio.css";

import profile from "../assets/images/profile.jpg";

import { FaLaptopCode } from "react-icons/fa";

function PortfolioLayout({ children }) {

  return (

    <div className="portfolio-container">

      {/* HEADER */}

      <header className="portfolio-header">

        {/* ICON */}

        <div className="moon-icon">

          <FaLaptopCode />

        </div>

        {/* CENTER */}

        <div className="header-center">

          <h1>

            Welcome to My Portfolio

          </h1>

          <p>

            Full Stack Development Enthusiast |
            AI & ML Learner | MCA Graduate

          </p>

        </div>

        {/* PROFILE */}

        <div className="profile-section">

          <img
            src={profile}
            alt="Profile"
          />

        </div>

      </header>

      {/* NAVBAR */}

      <nav className="portfolio-navbar">

        <Link to="/portfolio">

          Home

        </Link>

        <Link to="/about">

          About

        </Link>

        <Link to="/education">

          Education

        </Link>

        <Link to="/skills">

          Skills

        </Link>

        <Link to="/internships">

          Internships

        </Link>

        <Link to="/projects">

          Projects

        </Link>

        <Link to="/certificates">

          Certificates

        </Link>

        <Link to="/contact">

          Contact

        </Link>

      </nav>

      {/* PAGE CONTENT */}

      {children}

    </div>
  );
}

export default PortfolioLayout;