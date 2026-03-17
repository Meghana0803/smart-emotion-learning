const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/emotionDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ----------------- User Schema -----------------
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  emotion: String,        // store latest detected emotion
  score: Number,          // store latest quiz score
});

const User = mongoose.model("User", UserSchema);

// ----------------- Routes -----------------

// Register User
app.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send({ success: true, message: "User Registered" });
  } catch (error) {
    res.send({ success: false, message: "Error registering user" });
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (user) {
      res.send({ success: true, message: "Login Successful" });
    } else {
      res.send({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    res.send({ success: false, message: "Error logging in" });
  }
});

// Update latest emotion
app.post("/updateEmotion", async (req, res) => {
  const { email, emotion } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { emotion },
      { new: true }
    );
    res.send({ success: true, message: "Emotion updated", user });
  } catch (err) {
    res.send({ success: false, message: "Error updating emotion" });
  }
});

// Save quiz score
app.post("/saveScore", async (req, res) => {
  const { email, score } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { score },
      { new: true }
    );
    res.send({ success: true, message: "Score saved", user });
  } catch (err) {
    res.send({ success: false, message: "Error saving score" });
  }
});

// Analytics (Admin)
app.get("/analytics", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send({ error: "Error fetching analytics" });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});