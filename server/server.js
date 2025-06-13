// require('dotenv').config();
// const express  = require('express');
// const mongoose = require('mongoose');
// const cors     = require('cors');
 
// const app = express();
 
// // 1) Middleware
// app.use(cors());
// app.use(express.json());
 
// // 2) Connect to local MongoDB → Paiexcel DB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB connected to Paiexcel'))
// .catch(err => console.error('❌ MongoDB connection error:', err));
 
// // 3) Define Mongoose schema & model for the "doubts" collection
// const doubtSchema = new mongoose.Schema({
//   name:    String,
//   email:   String,
//   message: String,
//   created: { type: Date, default: Date.now }
// });
// const Doubt = mongoose.model('Doubt', doubtSchema, 'doubts');  
// //                     ^ model name    ^ schema   ^ explicit collection name
 
// // 4) POST endpoint to receive form submissions
// app.post('/api/doubts', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     const newDoubt = new Doubt({ name, email, message });
//     await newDoubt.save();
//     res.status(201).json({ success: true });
//   } catch (err) {
//     console.error('Error saving doubt:', err);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// });
 
// // 5) Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
 

















require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// 1) Middleware
app.use(cors());
app.use(express.json());

// 2) Connect to MongoDB → Paiexcel DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Paiexcel", // ensure we use Paiexcel database
  })
  .then(() => console.log("✅ MongoDB connected to Paiexcel"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 3a) Existing “doubts” schema & model
const doubtSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  created: { type: Date, default: Date.now },
});
const Doubt = mongoose.model("Doubt", doubtSchema, "doubts");

// 3b) New “registration” schema & model
const registrationSchema = new mongoose.Schema(
  {
    course: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "registration", // explicitly store into “registration” collection
  }
);
const Registration = mongoose.model("Registration", registrationSchema, "registration");

// 4a) Existing POST endpoint for doubts
app.post("/api/doubts", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newDoubt = new Doubt({ name, email, message });
    await newDoubt.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Error saving doubt:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// 4b) NEW POST endpoint to receive registration form submissions
app.post("/api/register", async (req, res) => {
  try {
    const { course, name, email, phone } = req.body;

    // Basic validation
    if (!course || !name || !email) {
      return res.status(400).json({ success: false, error: "Missing required fields." });
    }

    // Save to “registration” collection
    const newRegistration = new Registration({ course, name, email, phone });
    await newRegistration.save();

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error("Error saving registration:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

// 5) Health-check endpoint (optional)
app.get("/api/health", (req, res) => {
  res.json({ status: "UP" });
});

// 6) Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
