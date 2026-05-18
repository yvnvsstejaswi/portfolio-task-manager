// Dashboard.js

import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../styles/dashboard.css";

import profileImage from "../assets/images/admin.jpg";

function Dashboard() {

  const navigate = useNavigate();

  const admin =
    JSON.parse(localStorage.getItem("user"));

  const [users, setUsers] =
    useState([]);

  const [selectedUser, setSelectedUser] =
    useState(null);

  const [tasks, setTasks] =
    useState([]);

  const [task, setTask] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [editId, setEditId] =
    useState(null);

  const [editText, setEditText] =
    useState("");

  // FETCH USERS

  const fetchUsers = useCallback(async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/auth/users"
        );

      const filteredUsers =
        response.data.filter(
          (u) => u.role !== "admin"
        );

      setUsers(filteredUsers);

      if(filteredUsers.length > 0){

        setSelectedUser(
          filteredUsers[0]
        );

        fetchTasks(
          filteredUsers[0].id
        );
      }

    }

    catch(error){

      console.log(error);

    }

  }, []);

  useEffect(() => {

    fetchUsers();

  }, [fetchUsers]);

  // FETCH TASKS

  const fetchTasks = async (userId) => {

    try {

      const response =
        await axios.get(
          `http://localhost:5000/api/tasks/${userId}`
        );

      setTasks(response.data);

    }

    catch(error){

      console.log(error);

    }
  };

  // SELECT USER

  const selectUser = (user) => {

    setSelectedUser(user);

    fetchTasks(user.id);
  };

  // ADD TASK

  const addTask = async () => {

    if(task.trim() === ""){

      return;
    }

    try {

      await axios.post(
        "http://localhost:5000/api/tasks/add",
        {
          task,
          userId:selectedUser.id
        }
      );

      setTask("");

      setMessage(
        "Task Added Successfully!"
      );

      fetchTasks(selectedUser.id);

      setTimeout(() => {

        setMessage("");

      }, 2000);

    }

    catch(error){

      console.log(error);

    }
  };

  // COMPLETE TASK

  const completeTask = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/tasks/complete/${id}`
      );

      fetchTasks(selectedUser.id);

    }

    catch(error){

      console.log(error);

    }
  };

  // UNDO TASK

  const undoTask = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/tasks/undo/${id}`
      );

      fetchTasks(selectedUser.id);

    }

    catch(error){

      console.log(error);

    }
  };

  // DELETE TASK

  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/tasks/delete/${id}`
      );

      fetchTasks(selectedUser.id);

    }

    catch(error){

      console.log(error);

    }
  };

  // START EDIT

  const startEdit = (taskObj) => {

    setEditId(taskObj.id);

    setEditText(taskObj.task);
  };

  // SAVE EDIT

  const saveEdit = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/tasks/edit/${id}`,
        {
          task:editText
        }
      );

      setEditId(null);

      fetchTasks(selectedUser.id);

    }

    catch(error){

      console.log(error);

    }
  };

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (

    <div className="dashboard-container">

      {/* NAVBAR */}

      <div className="dashboard-navbar">

        <div className="navbar-left">

          <div className="logo-box">

            ✓

          </div>

          <h2>

            SmartFolio

          </h2>

        </div>

        <div className="navbar-right">

          <div className="profile-circle">

            <img
              src={profileImage}
              alt="profile"
              className="nav-profile-img"
            />

          </div>

          <span>

            {admin?.name}

          </span>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >

            Logout

          </button>

        </div>

      </div>

      {/* MAIN */}

      <div className="dashboard-main">

        {/* USERS */}

        <div className="users-section">

          <div className="users-header">

            <div className="users-icon">

              👥

            </div>

            <div>

              <h1>

                Users

              </h1>

              <p>

                Select a user to view tasks

              </p>

            </div>

          </div>

          <div className="users-list">

            {
              users.map((user) => (

                <div
                  key={user.id}
                  className={
                    selectedUser?.id === user.id
                    ?
                    "user-card active-user"
                    :
                    "user-card"
                  }
                  onClick={() =>
                    selectUser(user)
                  }
                >

                  <div className="user-left">

                    <div className="avatar">

                      {
                        user.name.charAt(0)
                      }

                    </div>

                    <div>

                      <h3>

                        {user.name}

                      </h3>

                      <p>

                        {user.email}

                      </p>

                    </div>

                  </div>

                  <div className="arrow">

                    ›

                  </div>

                </div>
              ))
            }

          </div>

          <div className="bottom-image">

            <img
              src="/task-image.png"
              alt=""
            />

          </div>

        </div>

        {/* TASKS */}

        <div className="tasks-section">

          <div className="tasks-header">

            <div className="task-icon">

              📋

            </div>

            <div>

              <h1>

                Tasks of {selectedUser?.name}

              </h1>

              <p>

                Manage tasks and track progress

              </p>

            </div>

          </div>

          {/* INPUT */}

          <div className="task-input-section">

            <input
              type="text"
              placeholder="Enter a new task..."
              value={task}
              onChange={(e) =>
                setTask(e.target.value)
              }
            />

            <button onClick={addTask}>

              + Add Task

            </button>

          </div>

          {/* SUCCESS */}

          {
            message && (

              <div className="success-message">

                {message}

              </div>
            )
          }

          {/* TASK LIST */}

          <div className="task-list">

            {
              tasks.map((t) => (

                <div
                  className="task-card"
                  key={t.id}
                >

                  <div className="task-left">

                    <div
                      className={
                        t.completed
                        ?
                        "status-circle completed"
                        :
                        "status-circle"
                      }
                    >

                      {
                        t.completed
                        ?
                        "✓"
                        :
                        ""
                      }

                    </div>

                    <div>

                      {
                        editId === t.id
                        ?
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) =>
                            setEditText(
                              e.target.value
                            )
                          }
                          className="edit-input"
                        />

                        :

                        <h3
                          className={
                            t.completed
                            ?
                            "completed-task"
                            :
                            ""
                          }
                        >

                          {t.task}

                        </h3>
                      }

                      <p
                        className={
                          t.completed
                          ?
                          "completed-text"
                          :
                          "pending-text"
                        }
                      >

                        {
                          t.completed
                          ?
                          "Completed"
                          :
                          "Pending"
                        }

                      </p>

                    </div>

                  </div>

                  {/* BUTTONS */}

                  <div className="task-buttons">

                    {
                      t.completed
                      ?
                      <button
                        className="undo-btn"
                        onClick={() =>
                          undoTask(t.id)
                        }
                      >

                        Undo

                      </button>

                      :

                      <button
                        className="complete-btn"
                        onClick={() =>
                          completeTask(t.id)
                        }
                      >

                        Complete

                      </button>
                    }

                    {
                      editId === t.id
                      ?
                      <>
                        <button
                          className="save-btn"
                          onClick={() =>
                            saveEdit(t.id)
                          }
                        >

                          Save

                        </button>

                        <button
                          className="cancel-btn"
                          onClick={() =>
                            setEditId(null)
                          }
                        >

                          Cancel

                        </button>
                      </>

                      :

                      <button
                        className="edit-btn"
                        onClick={() =>
                          startEdit(t)
                        }
                      >

                        Edit

                      </button>
                    }

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteTask(t.id)
                      }
                    >

                      Delete

                    </button>

                  </div>

                </div>
              ))
            }

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;