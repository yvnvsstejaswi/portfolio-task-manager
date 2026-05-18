// Projects.js

import PortfolioLayout from "../components/PortfolioLayout";

import Footer from "../components/Footer";

import {
  FaLaptopCode,
  FaRobot,
  FaDatabase,
  FaSearch,
  FaChartBar
} from "react-icons/fa";

import {
  SiTensorflow,
  SiOpencv,
  SiFlask,
  SiMysql,
  SiReact
} from "react-icons/si";

import "../styles/portfolio.css";

function Projects() {

  return (

    <PortfolioLayout>

      <section className="internship-page">

        <h2 className="internship-heading">

          Projects

        </h2>

        {/* PROJECT 1 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaRobot />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                INVISO ATTEND – AI Attendance System

              </h3>

            </div>

            <p className="internship-role">

              AI Based Smart Attendance System

            </p>

            <p className="internship-description">

              Developed an AI-powered attendance system
              using <b>YOLOv8</b>,
              <b> FaceNet</b>,
              <b> Flask</b>,
              and <b>MySQL</b>.
              The system detects faces automatically
              and stores attendance data efficiently.

            </p>

            <div className="project-tech">

              <SiTensorflow />
              <SiOpencv />
              <SiFlask />
              <SiMysql />

            </div>

          </div>

        </div>

        {/* PROJECT 2 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaLaptopCode />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                Portfolio & Smart Task Management System

              </h3>

            </div>

            <p className="internship-role">

              Full Stack Web Application

            </p>

            <p className="internship-description">

              Developed a responsive portfolio and
              smart task management platform using
              <b> React.js</b>,
              <b> JavaScript</b>,
              and <b> CSS</b>.
              Includes dashboards,
              authentication,
              portfolio pages,
              and task tracking features.

            </p>

            <div className="project-tech">

              <SiReact />
              <FaDatabase />
              <FaLaptopCode />

            </div>

          </div>

        </div>

        {/* PROJECT 3 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaSearch />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                Word Search in Text Using Python

              </h3>

            </div>

            <p className="internship-role">

              Academic Python Project

            </p>

            <p className="internship-description">

              Developed a Python-based application
              for searching and identifying words
              efficiently in text data.
              Improved logical thinking,
              text processing,
              and Python programming skills.

            </p>

          </div>

        </div>

        {/* PROJECT 4 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaRobot />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                YOLO Object Detection System

              </h3>

            </div>

            <p className="internship-role">

              AI & Computer Vision Project

            </p>

            <p className="internship-description">

              Built a real-time object detection
              system using
              <b> YOLO</b> and
              <b> OpenCV</b>.
              The project performs object recognition
              and gesture-based detection.

            </p>

            <div className="project-tech">

              <SiOpencv />
              <SiTensorflow />

            </div>

          </div>

        </div>

        {/* PROJECT 5 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaRobot />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                Telegram Bot Using Gemini API

              </h3>

            </div>

            <p className="internship-role">

              AI Chatbot Application

            </p>

            <p className="internship-description">

              Developed an AI-powered Telegram bot
              integrated with Gemini API
              for intelligent question answering,
              chatbot interactions,
              and weather updates.

            </p>

          </div>

        </div>

        {/* PROJECT 6 */}

        <div className="internship-box">

          <div className="internship-icon-box">

            <FaChartBar />

          </div>

          <div className="internship-content">

            <div className="internship-top">

              <h3>

                Power BI Data Visualization Dashboard

              </h3>

            </div>

            <p className="internship-role">

              Data Analytics Project

            </p>

            <p className="internship-description">

              Created interactive dashboards using
              <b> Power BI</b>
              for visualizing datasets,
              generating business insights,
              and improving analytical reporting skills.

            </p>

          </div>

        </div>

      </section>

      <Footer />

    </PortfolioLayout>
  );
}

export default Projects;