// Portfolio.js

import { Link } from "react-router-dom";

import { FaLaptopCode } from "react-icons/fa";

import "../styles/portfolio.css";

import Footer from "../components/Footer";

import profile from "../assets/images/profile.jpg";

function Portfolio() {

  return (

    <div className="portfolio-container">

      {/* HEADER */}

      <header className="portfolio-header">

        {/* MOON ICON */}

        <div className="moon-icon">

          <FaLaptopCode />

        </div>

        {/* CONTENT */}

        <div className="header-center">

          <h1>

            Welcome to My Portfolio

          </h1>

          <p>

            Explore my skills, projects,
            internships, and more!

          </p>

        </div>

        {/* PROFILE */}

        <div className="profile-section">

          <img
            src={profile}
            alt="profile"
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

      {/* ABOUT SECTION */}

      <section className="portfolio-card">

        <h2>

          Welcome!

        </h2>

        <p className="intro-text">

          Explore my journey, skills, projects,
          certifications, and achievements in
          Full Stack Development and AI technologies.

        </p>

        <p>

          I'm <b>Yarasuri V N V Sai Sri Tejaswi</b>,
          an MCA graduate passionate about
          <b> Full Stack Development</b>,
          <b> AI & ML</b>, and building
          innovative, responsive, and modern
          web applications with creative UI experiences.

        </p>

        <p>

          Feel free to explore my portfolio
          to learn more about my technical skills,
          certifications, internships,
          projects, and professional journey.

        </p>

        <p className="highlight-text">

          I am always eager to learn,
          collaborate, and contribute
          to innovative technology solutions.

        </p>

      </section>

      <Footer />

    </div>
  );
}

export default Portfolio;