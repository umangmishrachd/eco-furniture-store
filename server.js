const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());



const features = [
  {
    id: 1,
    icon: '🌱',
    title: 'Eco-Friendly Materials',
    description: 'Made from sustainable, recyclable materials that don\'t harm the environment.'
  },
  {
    id: 2,
    icon: '🦠',
    title: 'Antifungal Treatment',
    description: 'All our fabrics and woods are treated with eco-friendly antifungal solutions.'
  },
  {
    id: 3,
    icon: '♻️',
    title: 'Recyclable & Reusable',
    description: 'Every piece is designed for longevity and can be fully recycled at end of life.'
  },
  {
    id: 4,
    icon: '🏠',
    title: 'Modern Design',
    description: 'Contemporary western modular designs with imported inspirations.'
  },
  {
    id: 5,
    icon: '🇮🇳',
    title: 'Made in India',
    description: 'Proudly manufactured in India, supporting local communities and employment.'
  },
  {
    id: 6,
    icon: '👥',
    title: 'Youth Employment',
    description: 'Creating opportunities for young talent and skilled craftspeople.'
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Eco Furniture Backend API');
    console.log("Root route accessed");
});

// API route for features
app.get('/api/features', (req, res) => {
  res.json(features);
  console.log("Features data sent to frontend");
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

