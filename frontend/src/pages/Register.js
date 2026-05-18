import {
  useState
} from "react";

import axios from "axios";

import {
  Link,
  useNavigate
} from "react-router-dom";

import "../styles/auth.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      password: "",

      confirmPassword: "",

      role: "",

      profile: null
    });

  const [preview, setPreview] =
    useState("");

  const [message, setMessage] =
    useState("");

  // HANDLE CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value
    });
  };

  // HANDLE IMAGE

  const handleImage = (e) => {

    const file = e.target.files[0];

    setFormData({

      ...formData,

      profile: file
    });

    setPreview(
      URL.createObjectURL(file)
    );
  };

  // PASSWORD VALIDATION

  const isStrongPassword = (password) => {

    const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return strongPassword.test(password);
  };

  // REGISTER

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.role ||
      !formData.profile
    ){

      setMessage(
        "All fields are required"
      );

      return;
    }

    if(
      !isStrongPassword(
        formData.password
      )
    ){

      setMessage(

        "Password must contain uppercase, lowercase, number, special character and minimum 8 characters"

      );

      return;
    }

    if(
      formData.password !==
      formData.confirmPassword
    ){

      setMessage(
        "Passwords do not match"
      );

      return;
    }

    try {

      // CONVERT IMAGE TO BASE64

      const reader =
        new FileReader();

      reader.readAsDataURL(
        formData.profile
      );

      reader.onload = async () => {

        const response =
        await axios.post(

          "http://localhost:5000/api/auth/register",

          {

            name: formData.name,

            email: formData.email,

            password: formData.password,

            role: formData.role,

            profile: reader.result
          }
        );

        setMessage(
          response.data.message
        );

        setTimeout(() => {

          navigate("/login");

        }, 1500);
      };

    }

    catch(error){

      setMessage(

        error.response?.data?.message ||

        "Registration Failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>
          Register
        </h2>

        <p className="auth-subtitle">

          Create Your Account

        </p>

        <form onSubmit={handleSubmit}>

          {/* NAME */}

          <div className="input-group">

            <label>

              Name <span>*</span>

            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

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

          {/* ROLE */}

          <div className="input-group">

            <label>

              Role <span>*</span>

            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Role
              </option>

              <option value="admin">
                Admin
              </option>

              <option value="student">
                Student
              </option>

            </select>

          </div>

          {/* PROFILE IMAGE */}

          <div className="input-group">

            <label>

              Upload Profile <span>*</span>

            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              required
            />

          </div>

          {/* PREVIEW */}

          {
            preview && (

              <div className="profile-preview">

                <img
                  src={preview}
                  alt=""
                  className="preview-img"
                />

              </div>
            )
          }

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

          {/* CONFIRM PASSWORD */}

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

          {/* BUTTON */}

          <button type="submit">

            Register

          </button>

        </form>

        {/* MESSAGE */}

        {message && (

          <p className="message">

            {message}

          </p>

        )}

        {/* LOGIN */}

        <div className="switch-auth">

          <p>

            Already have an account?

            {" "}

            <Link to="/login">

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;