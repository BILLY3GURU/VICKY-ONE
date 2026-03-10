import { Service, GalleryImage } from './types';

export const SERVICES: Service[] = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and emotion. Full day coverage with high-end editing.',
    price: 'Starting at $1,500',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'portrait',
    title: 'Portrait Sessions',
    description: 'Professional portraits for individuals, couples, or families. Studio or outdoor locations.',
    price: 'Starting at $250',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'fashion',
    title: 'Fashion & Editorial',
    description: 'High-concept photography for brands, models, and magazines. Creative direction included.',
    price: 'Starting at $500',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event',
    title: 'Event Coverage',
    description: 'Corporate events, parties, and galas. Candid shots and key moments captured professionally.',
    price: 'Starting at $400',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Kenyan Wedding' },
  { id: '2', url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1200', category: 'Portrait', title: 'Soulful Portrait' },
  { id: '3', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200', category: 'Fashion', title: 'African Fashion' },
  { id: '4', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', category: 'Event', title: 'Corporate Event' },
  { id: '5', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Traditional Vows' },
  { id: '6', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200', category: 'Portrait', title: 'Natural Light' },
  { id: '7', url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1200', category: 'Fashion', title: 'Editorial Style' },
  { id: '8', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200', category: 'Event', title: 'Night Celebration' },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Bride',
    content: 'Vick captured our wedding day in a way that felt like a dream. Every photo tells a story and brings back the emotions of that day perfectly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Fashion Designer',
    content: 'Working with Vick on our latest collection was a game-changer. Her eye for detail and creative direction elevated our brand to a new level.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Model',
    content: 'The portrait session was relaxed and professional. Vick knows exactly how to work with light to create stunning, natural results.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    title: 'Consultation',
    description: 'We discuss your vision, style preferences, and the specific goals for your shoot.',
  },
  {
    id: '2',
    number: '02',
    title: 'Planning',
    description: 'Choosing locations, selecting outfits, and finalizing the creative direction.',
  },
  {
    id: '3',
    number: '03',
    title: 'The Session',
    description: 'A professional and relaxed environment where we capture the magic.',
  },
  {
    id: '4',
    number: '04',
    title: 'Delivery',
    description: 'Carefully edited high-resolution images delivered in a private online gallery.',
  },
];
