import {
  Plane,
  Ship,
  Truck,
  Train,
  Warehouse,
  Car,
  Package,
  Globe,
  Clock3,
  ShieldCheck,
  Radar,
  DollarSign,
  Route,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Network', id: 'network' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export const serviceCards = [
  { icon: Plane, title: 'Air Freight', description: 'Time-critical air freight solutions with global airline partnerships for rapid international cargo movement.' },
  { icon: Ship, title: 'Ocean Freight', description: 'Reliable FCL and LCL ocean freight shipping with port-to-port and door delivery options.' },
  { icon: Truck, title: 'Land Transport', description: 'Cross-border and domestic trucking designed for safe, compliant, and on-time deliveries.' },
  { icon: Train, title: 'Rail Transport', description: 'Cost-effective multimodal rail corridors for large-scale cargo across key trade lanes.' },
  { icon: Warehouse, title: 'Warehousing', description: 'Secure warehousing, inventory visibility, and fulfillment support for supply chain continuity.' },
  { icon: Car, title: 'Vehicle Export & Import', description: 'End-to-end vehicle shipping, customs facilitation, and status coordination across continents.' },
  { icon: Package, title: 'Cargo Handling', description: 'Professional cargo handling, consolidation, and documentation for smooth cargo transfers.' },
  { icon: Globe, title: 'Logistics Services', description: 'Integrated international cargo services and supply chain solutions tailored to your business.' },
];

export const reasons = [
  { icon: Clock3, title: 'Fast Delivery', description: 'Optimized routes and responsive operations to reduce transit time.' },
  { icon: Globe, title: 'Global Coverage', description: 'Worldwide partners and agents supporting major trade corridors.' },
  { icon: ShieldCheck, title: 'Secure Handling', description: 'Strict handling protocols to protect sensitive and high-value freight.' },
  { icon: Radar, title: 'Real-Time Tracking', description: 'Tracking-ready workflows and milestone visibility interfaces.' },
  { icon: DollarSign, title: 'Cost Efficiency', description: 'Smart carrier selection and consolidation strategies that lower total shipping cost.' },
];

export const testimonials = [
  {
    name: 'Elena Rodriguez',
    role: 'Procurement Director, NorthScale Retail',
    quote: 'CargoVerge made our North America to Europe freight flow faster and more predictable. Their communication is exceptional.',
  },
  {
    name: 'Daniel Thompson',
    role: 'Operations Manager, Vertex Components',
    quote: 'From air freight to warehousing, the team brought structure and reliability to our entire logistics chain.',
  },
  {
    name: 'Maya Chen',
    role: 'Supply Chain Lead, Aurora Mobility',
    quote: 'The vehicle export support and cargo handling expertise saved us time and reduced customs bottlenecks.',
  },
];

export const highlights = [
  {
    title: 'Vision',
    text: 'To be the most trusted global logistics company empowering trade through reliable, transparent freight movement.',
  },
  {
    title: 'Mission',
    text: 'Deliver dependable freight forwarding services with operational precision, customer focus, and scalable logistics innovation.',
  },
  {
    title: 'Network',
    text: 'A growing international network of carriers, agents, and strategic partners across air, ocean, and land trade routes.',
  },
];

export const stats = [
  { label: 'Countries Connected', value: '80+' },
  { label: 'Trade Routes Served', value: '240+' },
  { label: 'Strategic Partners', value: '120+' },
];

export const routeIcon = Route;
