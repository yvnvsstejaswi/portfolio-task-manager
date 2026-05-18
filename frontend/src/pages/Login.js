import { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate
} from "react-router-dom";

import "../styles/auth.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      email: "",

      password: ""
    });

  const [message, setMessage] =
    useState("");

  // HANDLE INPUT

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value
    });
  };

  // LOGIN

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
      await axios.post(

        "https://taskmanager-backend-f36i.onrender.com/api/auth/login",

        formData
      );

      console.log(response.data);

      // LOGIN SUCCESS

      if(response.data.user){

        // STORE USER

        localStorage.setItem(

          "user",

          JSON.stringify(
            response.data.user
          )
        );

        // SUCCESS MESSAGE

        setMessage(
          "Login Successful"
        );

        // WAIT 1 SECOND

        setTimeout(() => {

          // ADMIN

          if(
            response.data.user.role ===
            "admin"
          ){

            navigate("/dashboard");

          }

          // STUDENT

          else {

            navigate(
              "/student-dashboard"
            );
          }

        }, 1000);

      }

    }

    catch(error){

      console.log(error);

      setMessage(

        error.response?.data?.message ||

        "Login Failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>
          Login
        </h2>

        <p className="auth-subtitle">

          Welcome Back

        </p>

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <div className="input-group">

            <label>

              Email <span>*</span>

            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* PASSWORD */}

          <div className="input-group">

            <label>

              Password <span>*</span>

            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          {/* FORGOT PASSWORD */}

          <div className="switch-auth">

            <Link to="/forgot-password">

              Forgot Password?

            </Link>

          </div>

          {/* BUTTON */}

          <button type="submit">

            Login

          </button>

        </form>

        {/* MESSAGE */}

        {message && (

          <p className="message">

            {message}

          </p>

        )}

        {/* REGISTER */}

        <div className="switch-auth">

          <p>

            Don't have an account?

            {" "}

            <Link to="/register">

              Register

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;