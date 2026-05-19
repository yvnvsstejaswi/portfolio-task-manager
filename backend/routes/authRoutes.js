const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

const db = require("../db");


// ================= REGISTER =================

router.post("/register", async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role,
      profile
    } = req.body;

    // CHECK USER

    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    // USER EXISTS

    if (existingUser.length > 0) {

      return res.status(400).json({
        message: "User already exists"
      });
    }

    // HASH PASSWORD

    const hashedPassword =
      await bcrypt.hash(password, 10);

    // INSERT USER

    await db.query(

      "INSERT INTO users(name,email,password,role,profile) VALUES(?,?,?,?,?)",

      [
        name,
        email,
        hashedPassword,
        role,
        profile
      ]
    );

    res.json({
      message: "Registration Successful"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});


// ================= LOGIN =================

router.post("/login", async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    // CHECK USER

    const [result] = await db.query(

      "SELECT * FROM users WHERE email = ?",

      [email]
    );

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

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});

// ================= REGISTER =================

router.post("/register", async (req, res) => {

  try {

    const { name, email, password, role, profile } = req.body;

    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {

      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    await db.query(

      "INSERT INTO users(name,email,password,role,profile) VALUES(?,?,?,?,?)",

      [
        name,
        email,
        hashedPassword,
        role,
        profile
      ]
    );

    res.status(200).json({
      message: "Registration Successful"
    });

  }

  catch (error) {

    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});


// ================= LOGIN =================

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const [result] = await db.query(

      "SELECT * FROM users WHERE email = ?",

      [email]
    );

    if (result.length === 0) {

      return res.status(400).json({
        message: "Invalid Email"
      });
    }

    const user = result[0];

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

    res.status(200).json({

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

  catch (error) {

    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});


// ================= FORGOT PASSWORD =================

router.put("/forgot-password", async (req, res) => {

  try {

    const { email, newPassword } = req.body;

    const [user] = await db.query(

      "SELECT * FROM users WHERE email = ?",

      [email]
    );

    if (user.length === 0) {

      return res.status(400).json({
        message: "User not found"
      });
    }

    const hashedPassword =
      await bcrypt.hash(newPassword, 10);

    await db.query(

      "UPDATE users SET password = ? WHERE email = ?",

      [hashedPassword, email]
    );

    res.status(200).json({
      message: "Password Updated Successfully"
    });

  }

  catch (error) {

    console.log("FORGOT PASSWORD ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});


// ================= GET USERS =================

router.get("/users", async (req, res) => {

  try {

    const [result] =
      await db.query("SELECT * FROM users");

    res.status(200).json(result);

  }

  catch (error) {

    console.log("GET USERS ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});

module.exports = router;