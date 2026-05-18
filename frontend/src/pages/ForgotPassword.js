import { useState } from "react";

import axios from "axios";

import {
  useNavigate
} from "react-router-dom";

import "../styles/auth.css";

function ForgotPassword() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",

    newPassword: "",

    confirmPassword: ""

  });

  const [message, setMessage] = useState("");

  // Handle Change

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });
  };

  // Strong Password Validation

  const isStrongPassword = (password) => {

    const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return strongPassword.test(password);
  };

  // Reset Password

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Empty Fields

    if(
      !formData.email ||
      !formData.newPassword ||
      !formData.confirmPassword
    ){

      setMessage("Please fill all fields");

      return;
    }

    // Strong Password

    if(
      !isStrongPassword(
        formData.newPassword
      )
    ){

      setMessage(
        "Password must contain uppercase, lowercase, number, special character and minimum 8 characters"
      );

      return;
    }

    // Confirm Password Match

    if(
      formData.newPassword !==
      formData.confirmPassword
    ){

      setMessage(
        "Passwords do not match"
      );

      return;
    }

    try {

      const response = await axios.put(

        "http://localhost:5000/api/auth/forgot-password",

        {
          email: formData.email,

          newPassword:
          formData.newPassword
        }
      );

      setMessage(
        response.data.message
      );

      // Clear Form

      setFormData({

        email: "",

        newPassword: "",

        confirmPassword: ""

      });

      // Redirect to Login

      setTimeout(() => {

        navigate("/login");

      }, 2000);

    }

    catch(error){

      setMessage(

        error.response?.data?.message ||

        "Reset Failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Email */}

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

          {/* New Password */}

          <div className="input-group">

            <label>
              New Password <span>*</span>
            </label>

            <input
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />

          </div>

          {/* Confirm Password */}

          <div className="input-group">

            <label>
              Confirm Password <span>*</span>
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

          </div>

          <button type="submit">
            Reset Password
          </button>

        </form>

        <p className="message">
          {message}
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;