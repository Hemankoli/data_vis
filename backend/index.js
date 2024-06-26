const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/artbox', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/data', require('./Routes/route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));
