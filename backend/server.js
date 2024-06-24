const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const feedbackRouter = require('./routes/feedback'); // Import the feedbackRouter

const app = express();
const PORT = 5000;

const mongoURI =
  'mongodb+srv://huntedking150:Abhiseksah123@cluster0.sisoa3b.mongodb.net/Restaurant?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api/feedback', feedbackRouter); // Use the feedbackRouter

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
