const express = require("express");

const router = express.Router();

const db = require("../db");


/* ================= GET TASKS ================= */

router.get("/:userId", async (req, res) => {

  try {

    const userId = req.params.userId;

    const [tasks] = await db.query(

      "SELECT * FROM tasks WHERE user_id = ? ORDER BY id DESC",

      [userId]
    );

    res.status(200).json(tasks);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to fetch tasks"
    });
  }
});


/* ================= ADD TASK ================= */

router.post("/add", async (req, res) => {

  try {

    const { task, userId } = req.body;

    if (!task || !userId) {

      return res.status(400).json({
        message: "Task and User ID required"
      });
    }

    await db.query(

      "INSERT INTO tasks(task, completed, user_id) VALUES(?,?,?)",

      [task, 0, userId]
    );

    res.status(200).json({
      message: "Task Added Successfully"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to add task"
    });
  }
});


/* ================= COMPLETE TASK ================= */

router.put("/complete/:id", async (req, res) => {

  try {

    const id = req.params.id;

    await db.query(

      "UPDATE tasks SET completed = ? WHERE id = ?",

      [1, id]
    );

    res.status(200).json({
      message: "Task Marked Completed"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to complete task"
    });
  }
});


/* ================= UNDO TASK ================= */

router.put("/undo/:id", async (req, res) => {

  try {

    const id = req.params.id;

    await db.query(

      "UPDATE tasks SET completed = ? WHERE id = ?",

      [0, id]
    );

    res.status(200).json({
      message: "Task Undo Successful"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to undo task"
    });
  }
});


/* ================= EDIT TASK ================= */

router.put("/edit/:id", async (req, res) => {

  try {

    const id = req.params.id;

    const { task } = req.body;

    await db.query(

      "UPDATE tasks SET task = ? WHERE id = ?",

      [task, id]
    );

    res.status(200).json({
      message: "Task Updated Successfully"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to update task"
    });
  }
});


/* ================= DELETE TASK ================= */

router.delete("/delete/:id", async (req, res) => {

  try {

    const id = req.params.id;

    await db.query(

      "DELETE FROM tasks WHERE id = ?",

      [id]
    );

    res.status(200).json({
      message: "Task Deleted Successfully"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to delete task"
    });
  }
});


module.exports = router;