require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
 
const app = express();
 
// 1) Middleware
app.use(cors());
app.use(express.json());
 
// 2) Connect to local MongoDB → Paiexcel DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected to Paiexcel'))
.catch(err => console.error('❌ MongoDB connection error:', err));
 
// 3) Define Mongoose schema & model for the "doubts" collection
const doubtSchema = new mongoose.Schema({
  name:    String,
  email:   String,
  message: String,
  created: { type: Date, default: Date.now }
});
const Doubt = mongoose.model('Doubt', doubtSchema, 'doubts');  
//                     ^ model name    ^ schema   ^ explicit collection name
 
// 4) POST endpoint to receive form submissions
app.post('/api/doubts', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newDoubt = new Doubt({ name, email, message });
    await newDoubt.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error('Error saving doubt:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});
 
// 5) Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
 