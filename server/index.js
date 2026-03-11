import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'wli-backend' });
});

// Example API route
app.get('/api/greeting', (_req, res) => {
  res.json({ message: 'Hello from WLI backend!' });
});

// MongoDB setup
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.warn('MONGODB_URI is not set. Set it in your environment to enable database features.');
}

// Models
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    schoolName: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', subscriberSchema);

async function start() {
  try {
    if (mongoUri) {
      await mongoose.connect(mongoUri, { dbName: process.env.MONGODB_DB || undefined });
      console.log('Connected to MongoDB');
    }

    // Routes
    app.post('/api/contact', async (req, res) => {
      const { name, email, schoolName, message } = req.body || {};
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'name, email, and message are required' });
      }
      try {
        const doc = await Contact.create({ name, email, schoolName, message });
        return res.status(201).json({ ok: true, id: doc._id });
      } catch (err) {
        if (err?.name === 'ValidationError') {
          return res.status(400).json({ error: 'Invalid data' });
        }
        console.error('Error saving contact', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });

    app.post('/api/subscribe', async (req, res) => {
      const { email } = req.body || {};
      if (!email) {
        return res.status(400).json({ error: 'email is required' });
      }
      try {
        const existing = await Subscriber.findOne({ email });
        if (existing) return res.status(200).json({ ok: true, subscribed: true });
        const doc = await Subscriber.create({ email });
        return res.status(201).json({ ok: true, id: doc._id });
      } catch (err) {
        if (err?.code === 11000) {
          return res.status(200).json({ ok: true, subscribed: true });
        }
        console.error('Error subscribing', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error('Failed to start server', e);
    process.exit(1);
  }
}

start();
