const express = require("express");

const router = express.Router();

const db = require("../db");


/* ================= GET TASKS ================= */

router.get("/:userId", (req, res) => {

  const userId = req.params.userId;

  db.query(

    "SELECT * FROM tasks WHERE user_id=?",

    [userId],

    (err, result) => {

      if (err) {

        console.log(err);

        res.status(500).json(err);

      } else {

        res.json(result);

      }

    }
  );

});


/* ================= ADD TASK ================= */

router.post("/add", (req, res) => {

  const { task, userId } = req.body;

  db.query(

    "INSERT INTO tasks(task, completed, user_id) VALUES(?,?,?)",

    [task, 0, userId],

    (err, result) => {

      if (err) {

        console.log(err);

        res.status(500).json(err);

      } else {

        res.json({

          message: "Task Added"

        });

      }

    }
  );

});


/* ================= COMPLETE TASK ================= */

router.put("/complete/:id", (req, res) => {

  const id = req.params.id;

  db.query(

    "UPDATE tasks SET completed = 1 WHERE id=?",

    [id],

    (err, result) => {

      if (err) {

        console.log(err);

        res.status(500).json(err);

      } else {

        res.json({

          message: "Task Completed"

        });

      }

    }
  );

});


/* ================= UNDO TASK ================= */

router.put("/undo/:id", (req, res) => {

  const id = req.params.id;

  db.query(

    "UPDATE tasks SET completed = 0 WHERE id=?",

    [id],

    (err, result) => {

      if (err) {

        console.log(err);

        res.status(500).json(err);

      } else {

        res.json({

          message: "Task Undo Successful"

        });

      }

    }
  );

});


/* ================= EDIT TASK ================= */

router.put("/edit/:id", (req, res) => {

  const id = req.params.id;

  const { task } = req.body;

  db.query(

    "UPDATE tasks SET task=? WHERE id=?",

    [task, id],

    (err, result) => {

      if (err) {

        console.log(err);

        res.status(500).json(err);

      } else {

        res.json({

          message: "Task Updated"

        });

      }

    }
  );

});


/* ================= DELETE TASK ================= */

router.delete("/delete/:id", (req, res) => {

  const id = req.params.id;

  db.query(

    "DELETE FROM tasks WHERE id=?",

    [id],

    (err, result) => {

      if (err) {

        console.log(err);

        res.status(500).json(err);

      } else {

        res.json({

          message: "Task Deleted"

        });

      }

    }
  );

});

/* UNDO TASK */

router.put("/undo/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "UPDATE tasks SET completed=false WHERE id=?",
    [id],
    (err, result) => {

      if (err) {

        console.log(err);

        res.status(500).json(err);

      } else {

        res.json({
          message:"Task Undo"
        });

      }

    }
  );

});

module.exports = router;