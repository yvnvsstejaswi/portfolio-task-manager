// Skills.js

import PortfolioLayout from "../components/PortfolioLayout";

import Footer from "../components/Footer";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaChartBar,
  FaServer,
  FaBrain,
  FaHandsHelping,
  FaPeopleArrows
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiFlask,
  SiOpencv,
  SiTensorflow,
  SiSpringboot
} from "react-icons/si";

import {
  MdGroups,
  MdPsychology,
  MdOutlineTimer
} from "react-icons/md";

import {
  BsChatDotsFill
} from "react-icons/bs";

import "../styles/portfolio.css";

function Skills() {

  return (

    <PortfolioLayout>

      <section className="skills-page">

        {/* TECHNICAL SKILLS */}

        <div className="skills-box">

          <h2 className="skills-heading tech-heading">

            Technical Skills

          </h2>

          <div className="skills-list">

            <div className="skill-item">
              <FaPython className="skill-icon python" />
              <span>Python</span>
            </div>

            <div className="skill-item">
              <FaJava className="skill-icon java" />
              <span>Java</span>
            </div>

            <div className="skill-item">
              <SiJavascript className="skill-icon js" />
              <span>JavaScript</span>
            </div>

            <div className="skill-item">
              <FaHtml5 className="skill-icon html" />
              <span>HTML</span>
            </div>

            <div className="skill-item">
              <FaCss3Alt className="skill-icon css" />
              <span>CSS</span>
            </div>

            <div className="skill-item">
              <FaReact className="skill-icon react" />
              <span>React.js</span>
            </div>

            <div className="skill-item">
              <FaNodeJs className="skill-icon node" />
              <span>Node.js</span>
            </div>

            <div className="skill-item">
              <SiMysql className="skill-icon mysql" />
              <span>MySQL</span>
            </div>

            <div className="skill-item">
              <FaChartBar className="skill-icon powerbi" />
              <span>Power BI</span>
            </div>

            <div className="skill-item">
              <SiFlask className="skill-icon flask" />
              <span>Flask</span>
            </div>

            <div className="skill-item">
              <SiTensorflow className="skill-icon ai" />
              <span>AI & ML</span>
            </div>

            <div className="skill-item">
              <SiOpencv className="skill-icon opencv" />
              <span>OpenCV</span>
            </div>

            <div className="skill-item">
              <SiSpringboot className="skill-icon spring" />
              <span>Spring Boot</span>
            </div>

            <div className="skill-item">
              <FaServer className="skill-icon api" />
              <span>RESTful APIs</span>
            </div>

          </div>

        </div>

        {/* SOFT SKILLS */}

        <div className="skills-box">

          <h2 className="skills-heading soft-heading">

            Soft Skills

          </h2>

          <div className="skills-list">

            <div className="skill-item">
              <MdGroups className="soft-icon team" />
              <span>Team Collaboration</span>
            </div>

            <div className="skill-item">
              <MdPsychology className="soft-icon problem" />
              <span>Problem Solving</span>
            </div>

            <div className="skill-item">
              <BsChatDotsFill className="soft-icon communication" />
              <span>Communication</span>
            </div>

            <div className="skill-item">
              <MdOutlineTimer className="soft-icon time" />
              <span>Time Management</span>
            </div>

            <div className="skill-item">
              <FaBrain className="soft-icon learner" />
              <span>Quick Learner</span>
            </div>

            <div className="skill-item">
              <FaHandsHelping className="soft-icon patient" />
              <span>Patient & Consistent</span>
            </div>

            <div className="skill-item">
              <FaPeopleArrows className="soft-icon adapt" />
              <span>Adaptability</span>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </PortfolioLayout>
  );
}

export default Skills;