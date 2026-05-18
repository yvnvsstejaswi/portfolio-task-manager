const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

const db = require("../db");


// ================= REGISTER =================

router.post("/register", async (req, res) => {

  const {
    name,
    email,
    password,
    role,
    profile
  } = req.body;

  try {

    // CHECK USER

    db.query(

      "SELECT * FROM users WHERE email=?",

      [email],

      async (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({

            message: "Database Error"
          });
        }

        // USER EXISTS

        if (result.length > 0) {

          return res.status(400).json({

            message: "User already exists"
          });
        }

        // HASH PASSWORD

        const hashedPassword =
          await bcrypt.hash(password, 10);

        // INSERT USER

        db.query(

          "INSERT INTO users(name,email,password,role,profile) VALUES(?,?,?,?,?)",

          [
            name,
            email,
            hashedPassword,
            role,
            profile
          ],

          (err, result) => {

            if (err) {

              console.log(err);

              return res.status(500).json({

                message: "Registration Failed"
              });
            }

            res.json({

              message: "Registration Successful"
            });
          }
        );
      }
    );

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error"
    });
  }
});


// ================= LOGIN =================

router.post("/login", (req, res) => {

  const {
    email,
    password
  } = req.body;

  db.query(

    "SELECT * FROM users WHERE email=?",

    [email],

    async (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({

          message: "Database Error"
        });
      }

      // USER NOT FOUND

      if (result.length === 0) {

        return res.status(400).json({

          message: "Invalid Email"
        });
      }

      const user = result[0];

      // CHECK PASSWORD

      const validPassword =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!validPassword) {

        return res.status(400).json({

          message: "Invalid Password"
        });
      }

      // SUCCESS

      res.json({

        message: "Login Successful",

        user: {

          id: user.id,

          name: user.name,

          email: user.email,

          role: user.role,

          profile: user.profile
        }
      });
    }
  );
});


// ================= GET USERS =================

router.get("/users", (req, res) => {

  db.query(

    "SELECT * FROM users",

    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
});

module.exports = router;