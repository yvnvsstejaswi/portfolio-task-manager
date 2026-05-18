const express = require("express");

const router = express.Router();

const db = require("../db");


/* ================= GET TASKS ================= */

router.get("/:userId", async (req, res) => {

  try {

    const userId = req.params.userId;

    const [result] = await db.query(

      "SELECT * FROM tasks WHERE user_id = ?",

      [userId]
    );

    res.json(result);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});


/* ================= ADD TASK ================= */

router.post("/add", async (req, res) => {

  try {

    const { task, userId } = req.body;

    await db.query(

      "INSERT INTO tasks(task, completed, user_id) VALUES(?,?,?)",

      [task, 0, userId]
    );

    res.json({
      message: "Task Added"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});


/* ================= COMPLETE TASK ================= */

router.put("/complete/:id", async (req, res) => {

  try {

    const id = req.params.id;

    await db.query(

      "UPDATE tasks SET completed = 1 WHERE id = ?",

      [id]
    );

    res.json({
      message: "Task Completed"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});


/* ================= UNDO TASK ================= */

router.put("/undo/:id", async (req, res) => {

  try {

    const id = req.params.id;

    await db.query(

      "UPDATE tasks SET completed = 0 WHERE id = ?",

      [id]
    );

    res.json({
      message: "Task Undo Successful"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
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

    res.json({
      message: "Task Updated"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
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

    res.json({
      message: "Task Deleted"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});

module.exports = router;