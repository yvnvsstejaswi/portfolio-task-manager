import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Portfolio from "./pages/Portfolio";

import About from "./pages/About";

import Education from "./pages/Education";

import Skills from "./pages/Skills";

import Internships from "./pages/Internships";

import Projects from "./pages/Projects";

import Certificates from "./pages/Certificates";

import Contact from "./pages/Contact";

import Register from "./pages/Register";

import Login from "./pages/Login";

import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";

import StudentDashboard from "./pages/StudentDashboard";

function Layout() {

  const location = useLocation();

  return (

    <>

      {/* HIDE NAVBAR */}

      {
        location.pathname !== "/dashboard" &&

        location.pathname !== "/student-dashboard" &&

        <Navbar />
      }

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* PORTFOLIO */}

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* Education */}

        <Route
          path="/education"
          element={<Education />}
        />

        {/* Skills */}

        <Route
          path="/skills"
          element={<Skills />}
        />

        {/* Internhips */}

        <Route
          path="/internships"
          element={<Internships />}
        />

        {/* Projects */}

        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* Certificates */}

        <Route
          path="/certificates"
          element={<Certificates />}
        />

        {/* Contact */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* FORGOT PASSWORD */}

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* STUDENT DASHBOARD */}

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

      </Routes>

    </>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Layout />

    </BrowserRouter>
  );
}

export default App;