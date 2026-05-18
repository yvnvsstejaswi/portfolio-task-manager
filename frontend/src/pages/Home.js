// Home.js

import "../styles/home.css";

import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-page">

      {/* HERO SECTION */}

      <section className="hero-section">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <p className="hero-subtitle">

           Smart Portfolio & Task Management System

          </p>

          <span className="hero-tech">

            React • Node.js • Express • MySQL

          </span>

          <div className="hero-description">

            <p>

              A modern full stack web application
              that provides secure authentication,
              portfolio management, and smart task
              tracking for admins and students
              through an interactive responsive dashboard.

            </p>

          </div>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <button
              className="explore-btn"
              onClick={() => navigate("/portfolio")}
            >

              Explore Portfolio

            </button>

            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >

              Login

            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="hero"
          />

        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="features-section">

        <h2>

          Application Features

        </h2>

        <div className="features-container">

          {/* CARD 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              👨‍💻
            </div>

            <h3>
              Portfolio
            </h3>

            <p>

              Showcase education,
              technical skills,
              certifications,
              projects,
              and achievements.

            </p>

          </div>

          {/* CARD 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              🔐
            </div>

            <h3>
              Authentication
            </h3>

            <p>

              Secure login and
              registration system
              with password validation
              and profile management.

            </p>

          </div>

          {/* CARD 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              📋
            </div>

            <h3>
              Task Manager
            </h3>

            <p>

              Add, edit, complete,
              undo, and manage tasks
              through an interactive
              admin dashboard.

            </p>

          </div>

          {/* CARD 4 */}

          <div className="feature-card">

            <div className="feature-icon">
              📱
            </div>

            <h3>
              Responsive UI
            </h3>

            <p>

              Modern responsive
              interface designed
              using React,
              HTML, CSS,
              and Flexbox.

            </p>

          </div>

        </div>

      </section>

      <Footer />

    </div>
    
  );
}

export default Home;