export interface WatchTheme {
  name: string;
  collection: string;
  price: string;
  originalPrice?: string;
  accent: string;
  accentLight: string;
  accentDim: string;
  bg: string;
  cardBg: string;
  text: string;
  muted: string;
  image: string;
  images: string[];
  badge?: string;
  features: string[];
  colors: { name: string; hex: string }[];
}

export const watchThemes: WatchTheme[] = [
  {
    name: 'Skmei Dual Time',
    collection: 'skmei',
    price: 'Rs.3,999',
    accent: '#c9a84c',
    accentLight: '#e8c97a',
    accentDim: '#8a6e2f',
    bg: '#050507',
    cardBg: '#0a0a0e',
    text: '#e8e0d0',
    muted: '#7a7060',
    image: '/assets/watches/skmei/skmei-1.jpg',
    images: [
      '/assets/watches/skmei/skmei-1.jpg',
      '/assets/watches/skmei/skmei-3.jpg',
      '/assets/watches/skmei/skmei-4.jpg',
    ],
    features: [
      'Premium Stainless Steel',
      'Dual Time Display',
      'Quartz Movement',
      'Water Resistant',
    ],
    colors: [
      { name: 'Silver Black', hex: '#c0c0c0' },
      { name: 'Full Black', hex: '#1a1a1a' },
      { name: 'Silver Blue', hex: '#4a7fb5' },
    ],
  },
  {
    name: 'Patek Nautilus Automatic',
    collection: 'patek',
    price: 'Rs.18,500',
    accent: '#2a6b5e',
    accentLight: '#4a9b8a',
    accentDim: '#1a4a3e',
    bg: '#050708',
    cardBg: '#0a0d0c',
    text: '#e0e8e4',
    muted: '#6a7a74',
    image: '/assets/watches/patek/patek-1.jpg',
    images: [
      '/assets/watches/patek/patek-1.jpg',
      '/assets/watches/patek/patek-4.jpg',
    ],
    badge: 'Master Grade',
    features: [
      'Automatic Movement',
      'Stainless Steel Built',
      'Back Skeleton',
      'Same As Original',
      'Heavy Weight',
    ],
    colors: [
      { name: 'Green Dial', hex: '#2a6b5e' },
      { name: 'Blue Dial', hex: '#2a4b7a' },
      { name: 'Black Dial', hex: '#1a1a1a' },
    ],
  },
  {
    name: 'Patek Nautilus Quartz',
    collection: 'patek',
    price: 'Rs.3,500',
    accent: '#4a6b8a',
    accentLight: '#6a9bba',
    accentDim: '#2a4a5e',
    bg: '#07080a',
    cardBg: '#0a0c0e',
    text: '#e0e4e8',
    muted: '#6a7a8a',
    image: '/assets/watches/patek/patek-5.jpg',
    images: [
      '/assets/watches/patek/patek-5.jpg',
    ],
    features: [
      'Quartz Movement',
      'Stainless Steel Chain',
      'Premium Finish',
      'Everyday Elegance',
    ],
    colors: [
      { name: 'Black Dial', hex: '#1a1a1a' },
      { name: 'Blue Dial', hex: '#2a4b7a' },
      { name: 'Green Dial', hex: '#2a6b5e' },
    ],
  },
  {
    name: 'Patek Nautilus Down Second',
    collection: 'patek',
    price: 'Rs.4,200',
    originalPrice: 'Rs.4,800',
    accent: '#8a6a3a',
    accentLight: '#ba9a5a',
    accentDim: '#5a4a2a',
    bg: '#0a0805',
    cardBg: '#0e0c08',
    text: '#e8e4d8',
    muted: '#7a7060',
    image: '/assets/watches/patek/patek-4.jpg',
    images: [
      '/assets/watches/patek/patek-4.jpg',
    ],
    badge: 'On Sale',
    features: [
      'Down Second Working',
      'Leather Strap',
      'Two Tone Case',
      'Master Lock',
      'Quartz Movement',
      'Water Resistant',
    ],
    colors: [
      { name: 'Two Tone Black', hex: '#2a2a2a' },
    ],
  },
  {
    name: 'RLX Land Dweller 2025',
    collection: 'rlx',
    price: 'Rs.3,550',
    originalPrice: 'Rs.5,000',
    accent: '#8a7a4a',
    accentLight: '#baaa6a',
    accentDim: '#5a4e2a',
    bg: '#080705',
    cardBg: '#0c0b08',
    text: '#e8e4d8',
    muted: '#7a7460',
    image: '/assets/watches/rlx/rlx-1.jpg',
    images: [
      '/assets/watches/rlx/rlx-1.jpg',
    ],
    badge: 'On Sale',
    features: [
      'Date Adjust',
      'Fluted Bezel',
      'Stainless Steel',
      'Premium Finish',
    ],
    colors: [
      { name: 'Silver', hex: '#c0c0c0' },
    ],
  },
  {
    name: 'RLX Daytona Black',
    collection: 'rlx',
    price: 'Rs.3,200',
    accent: '#6a5a4a',
    accentLight: '#8a7a6a',
    accentDim: '#3a2a1a',
    bg: '#050505',
    cardBg: '#0a0806',
    text: '#e0dcd8',
    muted: '#6a6258',
    image: '/assets/watches/rlx/rlx-2.jpg',
    images: [
      '/assets/watches/rlx/rlx-2.jpg',
    ],
    features: [
      'Rotating Bezel',
      'High-Quality SS Case',
      'Scratch Resistant',
      'Precision Quartz',
    ],
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
    ],
  },
  {
    name: 'RLX GMT Master 2 Jubilee',
    collection: 'rlx',
    price: 'Rs.3,850',
    accent: '#4a6a5a',
    accentLight: '#6a9a7a',
    accentDim: '#2a4a3a',
    bg: '#060807',
    cardBg: '#0a0c0a',
    text: '#e0e8e0',
    muted: '#6a7a6e',
    image: '/assets/watches/rlx/rlx-1.jpg',
    images: [
      '/assets/watches/rlx/rlx-1.jpg',
      '/assets/watches/rlx/rlx-2.jpg',
    ],
    features: [
      'GMT Dual Time',
      'Rotating Bezel',
      'Jubilee Bracelet',
      'Quartz Movement',
    ],
    colors: [
      { name: 'Black-Green Bezel', hex: '#2a4a3a' },
      { name: 'Black-White Bezel', hex: '#3a3a3a' },
      { name: 'Coke Bezel', hex: '#4a2a2a' },
    ],
  },
  {
    name: 'Tissot Leather Chronograph',
    collection: 'tissot',
    price: 'Rs.3,999',
    originalPrice: 'Rs.5,500',
    accent: '#6a5a3a',
    accentLight: '#9a8a5a',
    accentDim: '#4a3a1a',
    bg: '#080705',
    cardBg: '#0c0b08',
    text: '#e8e4d8',
    muted: '#7a7460',
    image: '/assets/watches/tissot/tissot-1.jpg',
    images: [
      '/assets/watches/tissot/tissot-1.jpg',
    ],
    badge: 'On Sale',
    features: [
      'Chronograph',
      'Leather Strap',
      'Classic Design',
      'Perfect for Office',
    ],
    colors: [
      { name: 'Brown Leather', hex: '#6a5a3a' },
      { name: 'Black Leather', hex: '#2a2a2a' },
    ],
  },
  {
    name: 'Tissot PRX Automatic 38mm',
    collection: 'tissot',
    price: 'Rs.17,500',
    accent: '#3a6a8a',
    accentLight: '#5a9aba',
    accentDim: '#1a4a5a',
    bg: '#07080a',
    cardBg: '#0a0c0e',
    text: '#e0e4e8',
    muted: '#6a7a84',
    image: '/assets/watches/tissot/tissot-3.jpg',
    images: [
      '/assets/watches/tissot/tissot-3.jpg',
      '/assets/watches/tissot/tissot-2.jpg',
      '/assets/watches/tissot/tissot-4.jpg',
    ],
    features: [
      'Automatic Movement',
      'Waffle Dial',
      'Stainless Steel',
      'Slim Profile',
      'Iconic Design',
    ],
    colors: [
      { name: 'Blue Waffle', hex: '#2a5a8a' },
      { name: 'Black Waffle', hex: '#1a1a1a' },
      { name: 'Ice Blue', hex: '#8abada' },
      { name: 'Ice Green', hex: '#8abaaa' },
    ],
  },
];

export const collections = [
  { id: 'skmei', name: 'Skmei Dual Time', count: 4 },
  { id: 'patek', name: 'Patek Philippe', count: 6 },
  { id: 'rlx', name: 'Rolex', count: 7 },
  { id: 'tissot', name: 'Tissot', count: 7 },
];
