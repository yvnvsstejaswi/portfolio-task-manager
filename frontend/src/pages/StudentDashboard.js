// StudentDashboard.js

import { useEffect, useState, useCallback } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../styles/studentDashboard.css";

function StudentDashboard() {

  const navigate = useNavigate();

  // LOGGED IN USER

  const user =
    JSON.parse(localStorage.getItem("user"));

  const [tasks, setTasks] =
    useState([]);

  // FETCH TASKS

  const fetchTasks = useCallback(async () => {

    if(!user?.id) return;

    try {

      const response =
        await axios.get(

          `http://localhost:5000/api/tasks/${user.id}`
        );

      setTasks(response.data);

    }

    catch(error){

      console.log(error);

    }

  }, [user]);

  // LOAD TASKS

  useEffect(() => {

    fetchTasks();

  }, [fetchTasks]);

  // COMPLETE / UNDO TASK

  const toggleComplete = async (
    id,
    completed
  ) => {

    try {

      if(completed){

        await axios.put(

          `http://localhost:5000/api/tasks/undo/${id}`
        );

      }

      else {

        await axios.put(

          `http://localhost:5000/api/tasks/complete/${id}`
        );
      }

      fetchTasks();

    }

    catch(error){

      console.log(error);

    }
  };

  // LOGOUT

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (

    <div className="student-dashboard">

      {/* NAVBAR */}

      <div className="student-navbar">

        <div className="navbar-left">

          <div className="logo-box">

            ✓

          </div>

          <h2>

            SmartFolio

          </h2>

        </div>

        <div className="navbar-right">

          {/* PROFILE IMAGE */}

          <img
            src={user?.profile}
            alt="profile"
            className="profile-img"
          />

          {/* NAME */}

          <span>

            {user?.name}

          </span>

          {/* LOGOUT */}

          <button
            className="logout-btn"
            onClick={logout}
          >

            Logout

          </button>

        </div>

      </div>

      {/* MAIN */}

      <div className="student-main">

        <div className="student-task-section">

          {/* HEADER */}

          <div className="task-header">

            <div className="task-icon">

              📋

            </div>

            <div>

              <h1>

                My Tasks

              </h1>

              <p>

                Manage your assigned tasks

              </p>

            </div>

          </div>

          {/* TASK LIST */}

          <div className="task-list">

            {
              tasks.length === 0
              ?
              <p className="no-task">

                No Tasks Assigned

              </p>

              :

              tasks.map((task) => (

                <div
                  className="task-card"
                  key={task.id}
                >

                  {/* LEFT */}

                  <div className="task-left">

                    <div
                      className={
                        task.completed
                        ?
                        "status-circle completed"
                        :
                        "status-circle"
                      }
                    >

                      {
                        task.completed
                        ?
                        "✓"
                        :
                        ""
                      }

                    </div>

                    <div>

                      <h3
                        className={
                          task.completed
                          ?
                          "completed-task"
                          :
                          ""
                        }
                      >

                        {task.task}

                      </h3>

                      <p
                        className={
                          task.completed
                          ?
                          "completed-text"
                          :
                          "pending-text"
                        }
                      >

                        {
                          task.completed
                          ?
                          "Completed"
                          :
                          "Pending"
                        }

                      </p>

                    </div>

                  </div>

                  {/* BUTTON */}

                  <button
                    className={
                      task.completed
                      ?
                      "undo-btn"
                      :
                      "complete-btn"
                    }

                    onClick={() =>
                      toggleComplete(
                        task.id,
                        task.completed
                      )
                    }
                  >

                    {
                      task.completed
                      ?
                      "Undo"
                      :
                      "Complete"
                    }

                  </button>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;