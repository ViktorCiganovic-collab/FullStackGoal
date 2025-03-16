
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());

// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const registeredMember = new mongoose.Schema({
    name: String,
    email: String,    
    ssn: Number,
    number: Number,
});

const Visitor = mongoose.model('visitor', registeredMember);

app.post('/register', async (req, res) => {
    const { name, email, ssn, number } = req.body;
    const newVisitor = new Visitor({ name, email, ssn, number });
  
    try {
      const existingVisitor = await Visitor.findOne({ email, ssn });
  
      if (existingVisitor) {
        return res.status(400).json({ message: 'You have already registered for this event!' }); // JSON response
      }
  
      // If visitor is not registered, save them
      await newVisitor.save();
      res.status(200).json({ message: 'Registration successful!' }); // JSON response
  
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data' }); // JSON response
    }
  });

app.delete('/cancel-registration', async (req, res) => {
  
  const { email, ssn } = req.body;

  try {
    const deletedVisitor = await Visitor.findOneAndDelete({ email, ssn });

    if (!deletedVisitor) {
      return res.status(404).json({message: 'No registered member with the provided details found in our database'});
    }

    res.status(200).json({ message: 'Registration successfully canceled'});

  } catch (error) {
    console.error('Error deleting registered visitor:', error);
    res.status(500).json({ message: 'Error canceling visitor registration'});
  }
});

// Serve static files from the React frontend build directory
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Handle any route that does not match the API
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
  

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})