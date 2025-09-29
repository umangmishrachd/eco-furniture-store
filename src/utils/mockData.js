// Mock product data
export const mockProducts = [
  {
    id: 1,
    name: 'Eco Modern Sofa',
    price: 45999,
    originalPrice: 55999,
    category: 'Seating',
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: 'A beautifully crafted modern sofa made from sustainable materials with antifungal treatment.',
    features: ['Eco-friendly materials', 'Antifungal treatment', 'Modular design', 'Made in India'],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    colors: ['Green', 'Brown', 'Gray'],
    dimensions: '200cm x 90cm x 85cm'
  },
  {
    id: 2,
    name: 'Sustainable Dining Table',
    price: 32999,
    originalPrice: 39999,
    category: 'Dining',
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: 'Elegant dining table crafted from recycled wood with modern finishing.',
    features: ['Recycled wood', 'Water-resistant', 'Expandable', 'FSC certified'],
    inStock: true,
    rating: 4.7,
    reviews: 89,
    colors: ['Natural', 'Dark Walnut'],
    dimensions: '160cm x 90cm x 75cm'
  },
  {
    id: 3,
    name: 'Green Office Chair',
    price: 15999,
    originalPrice: 19999,
    category: 'Office',
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: 'Ergonomic office chair with sustainable foam and recyclable materials.',
    features: ['Ergonomic design', 'Recyclable materials', 'Adjustable height', 'Breathable fabric'],
    inStock: true,
    rating: 4.6,
    reviews: 67,
    colors: ['Black', 'Green', 'Blue'],
    dimensions: '65cm x 65cm x 110-120cm'
  },
  {
    id: 4,
    name: 'Eco Storage Unit',
    price: 22999,
    originalPrice: 27999,
    category: 'Storage',
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: 'Modular storage unit made from bamboo composite with natural finishes.',
    features: ['Bamboo composite', 'Modular design', 'Natural finish', 'Easy assembly'],
    inStock: true,
    rating: 4.9,
    reviews: 156,
    colors: ['Natural', 'Light Brown'],
    dimensions: '120cm x 40cm x 180cm'
  },
  {
    id: 5,
    name: 'Recycled Coffee Table',
    price: 18999,
    originalPrice: 22999,
    category: 'Living Room',
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: 'Stylish coffee table made from recycled plastic and sustainable wood.',
    features: ['Recycled plastic base', 'Sustainable wood top', 'Weather resistant', 'Modern design'],
    inStock: false,
    rating: 4.5,
    reviews: 43,
    colors: ['White', 'Black', 'Natural'],
    dimensions: '100cm x 60cm x 45cm'
  },
  {
    id: 6,
    name: 'Organic Bed Frame',
    price: 38999,
    originalPrice: 45999,
    category: 'Bedroom',
    image: '/api/placeholder/400/300',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: 'Premium bed frame made from certified organic wood with natural treatments.',
    features: ['Organic wood', 'Natural treatments', 'No harmful chemicals', 'King size'],
    inStock: true,
    rating: 4.8,
    reviews: 92,
    colors: ['Natural', 'Dark Brown'],
    dimensions: '200cm x 180cm x 100cm'
  }
];

export const certifications = [
  {
    id: 1,
    name: 'ISO 14001',
    description: 'Environmental Management System',
    image: '/api/placeholder/150/100',
    valid: '2024-2027'
  },
  {
    id: 2,
    name: 'FSC Certified',
    description: 'Forest Stewardship Council',
    image: '/api/placeholder/150/100',
    valid: '2024-2026'
  },
  {
    id: 3,
    name: 'Green Guard',
    description: 'Low Chemical Emissions',
    image: '/api/placeholder/150/100',
    valid: '2024-2025'
  },
  {
    id: 4,
    name: 'Made in India',
    description: 'Proudly Indian Manufacturing',
    image: '/api/placeholder/150/100',
    valid: 'Ongoing'
  }
];