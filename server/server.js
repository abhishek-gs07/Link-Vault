require('dotenv').config();
const { nanoid } = require('nanoid');
const Link = require('./models/link.js');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());          // allow frontend requests
app.use(express.json());  // read JSON from requests

app.get('/', (req, res) => res.send('LinkVault API running'));

// 1. Create a short link
app.post('/api/links', async (req, res) => {
  try {
    const { originalUrl } = req.body;
    new URL(originalUrl); // throws an error if the URL is invalid
    const link = await Link.create({ originalUrl, shortCode: nanoid(6) });
    res.status(201).json(link);
  } catch (err) {
    res.status(400).json({ error: 'Please enter a valid URL' });
  }
});

// 2. List all links with click counts
app.get('/api/links', async (req, res) => {
  const links = await Link.find().sort({ createdAt: -1 });
  res.json(links);
});

// 3. Redirect + count the click
app.get('/:code', async (req, res) => {
  const link = await Link.findOneAndUpdate(
    { shortCode: req.params.code },
    { $inc: { clicks: 1 } }
  );
  if (!link) return res.status(404).send('Link not found');
  res.redirect(link.originalUrl);
});
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log('Server on port ' + PORT));
  })
  .catch(err => console.error('DB error:', err.message));