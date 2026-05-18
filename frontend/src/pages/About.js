import PortfolioLayout from "../components/PortfolioLayout";

import "../styles/portfolio.css";

import Footer from "../components/Footer";

function About() {

  return (

    <PortfolioLayout>

      <section className="portfolio-card">

        <h2>

          About Me

        </h2>

        <p className="intro-text">

          Explore my academic journey,
          technical skills, certifications,
          internships, and passion for
          Full Stack Development and AI technologies.

        </p>

        <p>

          Hello! I'm
          <b> Yarasuri V N V Sai Sri Tejaswi</b>,
          an MCA graduate with foundational skills in
          <b> Python</b>, <b>Java</b>,
          <b> SQL</b>, <b>HTML</b>,
          <b> CSS</b>, and modern web technologies.
          I have a strong interest in
          <b> Full Stack Development</b>,
          <b> Artificial Intelligence</b>,
          and building responsive web applications.
          During my internship at
          <b> AIMER Society</b>,
          I gained practical experience in
          <b> Power BI</b>,
          <b> Data Visualization</b>,
          Cyber Security basics,
          and AI tools which improved my
          teamwork, communication,
          and problem-solving skills.

        </p>

        <p>

          During my MCA at
          <b> KL University</b>,
          I worked on projects related to
          AI, automation, and object detection.
          I also completed certifications in
          <b> Python</b>, <b>SQL</b>,
          <b> AI</b>, and <b>ML</b>
          from organizations like
          <b> IBM</b>, <b>Oracle</b>,
          <b> ExcelR</b>, <b>Cognite Class</b>,
          and <b>APSSDC</b>.
          These learning experiences helped me
          strengthen my technical knowledge
          and improve my understanding of
          software development concepts.

        </p>

        <p className="highlight-text">

          I am patient, adaptable,
          and committed to continuous learning.
          I enjoy exploring new technologies,
          building practical applications,
          and improving my technical skills.
          I’m looking forward to opportunities
          where I can apply my knowledge,
          learn from real-world experiences,
          and contribute effectively to
          innovative technology solutions.

        </p>

      </section>

      <Footer />

    </PortfolioLayout>
  );
}

export default About;