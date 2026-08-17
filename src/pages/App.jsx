import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Menu,
  X,
  ArrowRight,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
} from 'lucide-react';
import hero0 from '../assets/hero.png';
import hero1 from '../assets/hero-1.webp';
import hero2 from '../assets/hero-2.webp';
import hero3 from '../assets/hero-3.webp';
import hero4 from '../assets/hero-4.webp';
import hero5 from '../assets/hero-5.webp';
import fmcIcon from '../assets/fmc-icon.webp';
import dunsIcon from '../assets/duns-icon.webp';
import glaIcon from '../assets/gla-icon.webp';
import {
  navItems,
  serviceCards,
  reasons,
  testimonials,
  highlights,
  stats,
  routeIcon,
  shipmentShowcase,
} from '../components/data';

const RouteIcon = routeIcon;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};


const initialForm = {
  name: '',
  company: '',
  phone: '',
  email: '',
  requirement: '',
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const [showTopBanner, setShowTopBanner] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowTopBanner(false);
  }, 10000); // 10 seconds

  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  const heroImages = [hero0, hero1, hero2, hero3, hero4, hero5];

const [currentHero, setCurrentHero] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentHero((prev) => (prev + 1) % heroImages.length);
  }, 3000); // change every 3 seconds

  return () => clearInterval(interval);
}, [heroImages.length]);

  const year = useMemo(() => new Date().getFullYear(), []);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.phone.trim()) nextErrors.phone = 'Contact number is required.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    return nextErrors;
  };

const onSubmit = async (event) => {
  event.preventDefault();

  const nextErrors = validate();
  setErrors(nextErrors);
  if (Object.keys(nextErrors).length) return;

  setStatus({ type: 'loading', message: 'Sending...' });

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        company_name: form.company || 'N/A',
        contact_number: form.phone,
        from_email: form.email,
        message: form.requirement,
      }
    );

    console.log("SUCCESS:", response);

    setStatus({
      type: 'success',
      message: 'Message sent successfully. We will contact you shortly.',
    });

    setForm(initialForm);
    setErrors({});
  } catch (error) {
    console.error("EMAILJS ERROR:", error);

    setStatus({
      type: 'error',
      message: 'Failed to send. Please try again or contact directly.',
    });
  }
};
  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-white">
  
  {/* LOGO */}
  <img
    src="/logo.png"
    alt="CargoVerge Logistics"
    className="w-24 h-24 mb-6 animate-pulse"
  />

  {/* TEXT */}
  <p className="font-heading text-xl font-semibold tracking-wide">
    CargoVerge Logistics
  </p>

  {/* SUBTEXT */}
  <p className="text-sm mt-2 opacity-80">
    Powering Global Freight
  </p>

  {/* LOADER */}
  <div className="mt-6 w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
</div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="section-shell flex h-28 items-center justify-between">
          <a href="#home" className="flex items-center gap-4 group">
  <img
    src="/logo.png"
    alt="CargoVerge Logistics logo"
    className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-contain transition-transform duration-300 group-hover:scale-105"
/>

  <div className="leading-tight">
    <p className="font-heading text-xl sm:text-2xl font-bold text-primary tracking-tight group-hover:text-secondary transition">
      CargoVerge Logistics
    </p>
    <p className="text-xs text-slate-500 transition group-hover:text-slate-600">
      At the Edge of Global Trade.
    </p>
  </div>
</a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-primary transition hover:text-secondary">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="rounded-md p-2 text-primary lg:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {navOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="section-shell grid py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setNavOpen(false)}
                  className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
{showTopBanner && (
  <motion.div
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -80, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="relative w-full"
  >
    <img
      src="/usa-canada-banner.png"
      alt="USA & Canada Freight"
      className="w-full h-auto object-contain"
    />
  </motion.div>
)}

      <main>
<section id="home" className="relative isolate bg-white">

  {/* FMC Badge */}
  <div className="flex justify-center pt-4 pb-2">
    <img
      src={fmcIcon}
      alt="Federal Maritime Commission"
      className="h-24 md:h-28 object-contain"
    />
  </div>
  
  {/* GRID BACKGROUND */}
  <div className="absolute inset-0 -z-10 bg-grid bg-[size:16px_16px] opacity-10" />

  {/* LOGO WATERMARK */}
  <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-[0.04] pointer-events-none">
    <img src="/logo.png" className="w-[400px] object-contain" />
  </div>
  
<div className="section-shell relative z-10 pt-2 pb-16 md:pb-24 lg:pb-28 grid lg:grid-cols-2 gap-10 items-center">
  {/* LEFT CONTENT */}
  <motion.div
    className="max-w-3xl text-slate-800 order-2 lg:order-1"
    variants={fadeUp}
    initial="hidden"
    animate="show"
    transition={{ duration: 0.6 }}
  >
    <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em]">
      Premium Global Freight Partner
    </p>
    <p className="mb-4 inline-block bg-secondary text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
  USA & Canada Freight Specialist
</p>
    <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
      Connecting Businesses Worldwide Through Reliable Logistics
    </h1>

    <p className="mt-6 max-w-2xl text-base text-slate-600 md:text-lg">
      CargoVerge Logistics delivers freight forwarding services across air, ocean, land, and warehousing so your business moves faster in global markets.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <a href="#contact" className="rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-slate-900 hover:brightness-95">
        Get a Quote
      </a>
      <a href="#services" className="rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-white/10">
        Our Services
      </a>
    </div>
  </motion.div>

  <div className="flex flex-col items-center">
  
  <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-[4/3]">
    <motion.img
      src={heroImages[currentHero]}
      alt="Global logistics"
      className="w-full h-full object-cover rounded-xl shadow-2xl"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    />
  </div>

  {/* DOTS */}
  <div className="flex justify-center mt-4 gap-2">
    {heroImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentHero(index)}
        className={`h-2.5 w-2.5 rounded-full transition ${
          currentHero === index
            ? 'bg-white scale-125'
            : 'bg-white/40'
        }`}
      />
    ))}
  </div>

</div>

</div>
        </section>

       <section id="about" className="section-shell py-16 md:py-24">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2 className="font-heading text-3xl font-semibold text-primary">
      About CargoVerge Logistics
    </h2>

    <div className="mt-5 max-w-4xl space-y-4 text-slate-600 leading-relaxed">
      <p>
        CargoVerge Logistics is a forward-thinking freight forwarding and logistics company dedicated to delivering reliable, efficient, and globally integrated supply chain solutions. Positioned at the intersection of precision and performance, we enable businesses to navigate the complexities of international trade with confidence and control.
      </p>

      <p>
        With deep expertise in global freight coordination, we specialize in managing the seamless movement of cargo across air, ocean, and land transportation networks. Every shipment is executed with meticulous planning, operational transparency, and a strong commitment to timeliness—ensuring goods reach their destination safely and without disruption.
      </p>

      <p>
        Leveraging a growing network of trusted international partners and industry best practices, CargoVerge Logistics delivers end-to-end solutions tailored to diverse business needs. From time-sensitive air freight to cost-efficient ocean shipping, inland transportation, and integrated cargo handling, we provide a comprehensive logistics ecosystem built for scalability and reliability.
      </p>

      <p>
        At CargoVerge Logistics, every shipment represents more than cargo—it reflects our clients’ ambitions. This drives our commitment to consistent communication, proactive problem-solving, and service excellence, empowering businesses to move faster, smarter, and further in the global marketplace.
      </p>
    </div>
  </motion.div>

  <div className="mt-10 grid gap-5 md:grid-cols-3">
    {highlights.map((item) => (
      <motion.article
        key={item.title}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
      >
        <h3 className="font-heading text-xl font-semibold text-primary">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {item.text}
        </p>
      </motion.article>
    ))}
  </div>
</section>

        <section id="services" className="bg-slate-100 py-16 md:py-24">
          <div className="section-shell">
            <h2 className="font-heading text-3xl font-semibold text-primary">Freight Forwarding Services</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Scalable international cargo services built for speed, compliance, and supply chain performance.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map(({ image, title, description }) => (
                <motion.article
  key={title}
  whileHover={{ y: -7 }}
  className="group rounded-2xl border border-slate-200 bg-white shadow-card transition overflow-hidden"
>
  {/* IMAGE */}
  <div className="overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-44 object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* CONTENT */}
  <div className="p-6">
    <h3 className="font-heading text-lg font-semibold text-primary">
      {title}
    </h3>
    <p className="mt-2 text-sm leading-6 text-slate-600">
      {description}
    </p>
  </div>
</motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="network" className="section-shell py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <h2 className="font-heading text-3xl font-semibold text-primary">Global Network</h2>
              <p className="mt-4 text-slate-600">
                Our international partnerships and multimodal network connect key manufacturing hubs, seaports, airports, and inland terminals for dependable global trade continuity.
              </p>
              <div className="mt-8 rounded-2xl bg-primary p-6 text-white">
                <div className="flex items-center gap-3">
                  <RouteIcon size={20} className="text-secondary" />
                  <h3 className="font-heading text-xl">Trade Route Visibility</h3>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Designed to support cross-border operations with milestone tracking-ready workflows and proactive communication.
                </p>
              </div>
            </motion.div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
              <svg viewBox="0 0 640 320" className="w-full">
                <rect width="640" height="320" fill="#eff6ff" />
                <path d="M43 163C115 113 189 117 257 151C320 184 380 180 447 143C511 108 564 109 616 136" fill="none" stroke="#0B3C5D" strokeWidth="2" className="route-line" />
                <circle cx="89" cy="133" r="7" fill="#F7931E" />
                <circle cx="229" cy="148" r="7" fill="#F7931E" />
                <circle cx="347" cy="175" r="7" fill="#F7931E" />
                <circle cx="491" cy="129" r="7" fill="#F7931E" />
                <circle cx="592" cy="124" r="7" fill="#F7931E" />
                <text x="62" y="120" fontSize="12" fill="#0B3C5D">North America</text>
                <text x="205" y="136" fontSize="12" fill="#0B3C5D">Europe</text>
                <text x="328" y="164" fontSize="12" fill="#0B3C5D">Middle East</text>
                <text x="465" y="116" fontSize="12" fill="#0B3C5D">Asia</text>
              </svg>
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-primary py-16 text-white md:py-24">
          <div className="section-shell">
            <h2 className="font-heading text-3xl font-semibold">Why Choose Us</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {reasons.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                  <Icon className="text-secondary" size={24} />
                  <h3 className="mt-3 font-heading font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-24" id="testimonials">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Client success stories</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-primary">Client Testimonials</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              Real project snapshots that show how CargoVerge moves complex freight with care, visibility, and dependable coordination.
            </p>
          </div>

          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card"
          >
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[420px] bg-slate-950 p-3 sm:p-4">
                <img
                  src={shipmentShowcase.images[2].src}
                  alt={shipmentShowcase.images[2].alt}
                  className="h-full min-h-[390px] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/20 bg-primary/90 p-5 text-white shadow-2xl backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{shipmentShowcase.eyebrow}</p>
                  <h3 className="mt-2 font-heading text-xl font-semibold">{shipmentShowcase.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-100">“{shipmentShowcase.quote}”</p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-sm font-semibold text-secondary">USA to Nigeria air freight</p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-primary">28 pallets moved from Shreveport to Lagos</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{shipmentShowcase.description}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {shipmentShowcase.details.map((detail) => (
                      <div key={detail.label} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                        <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{detail.label}</p>
                        <p className="mt-1 font-heading text-lg font-semibold text-primary">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {shipmentShowcase.images.map((image, index) => (
                    <img
                      key={image.alt}
                      src={image.src}
                      alt={image.alt}
                      className={`h-28 w-full rounded-2xl object-cover ring-2 ${index === 2 ? 'ring-secondary' : 'ring-slate-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <p className="text-sm leading-6 text-slate-600">“{item.quote}”</p>
                <p className="mt-5 font-heading text-primary">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Certifications & Associations */}
<section className="py-12 bg-white">
  <div className="section-shell">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center">
      
      <img
        src={fmcIcon}
        alt="Federal Maritime Commission"
        className="h-24 md:h-28 w-auto object-contain transition hover:scale-105"
      />

      <img
        src={dunsIcon}
        alt="D-U-N-S Registered"
        className="h-20 md:h-24 w-auto object-contain transition hover:scale-105"
      />

      <img
        src={glaIcon}
        alt="Global Logistics Alliance"
        className="h-20 md:h-24 w-auto object-contain transition hover:scale-105"
      />

    </div>
  </div>
</section>

        <section className="bg-slate-100 py-16 md:py-24" id="contact">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-primary">Get in Touch</h2>
              <p className="mt-3 text-slate-600">Request a quote and discuss your international cargo requirements with our logistics team.</p>

              <form className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Name *</label>
                  <input id="name" type="text" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary" />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">Company Name</label>
                  <input id="company" type="text" value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">Contact Number *</label>
                  <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary" />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email *</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary" />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
  <label htmlFor="requirement" className="mb-1 block text-sm font-medium text-slate-700">
    Requirement / Message *
  </label>
  <textarea
    id="requirement"
    rows="4"
    value={form.requirement || ''}
    onChange={(e) =>
      setForm((p) => ({ ...p, requirement: e.target.value }))
    }
    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary"
    placeholder="Describe your logistics requirement..."
  />
  {errors.requirement && (
    <p className="mt-1 text-xs text-red-600">{errors.requirement}</p>
  )}
</div>

                <button
  type="submit"
  disabled={status.type === 'loading'}
  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/95 disabled:opacity-60"
>
  {status.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
  <ArrowRight size={16} />
</button>

                {status.message && (
                  <p className={`text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="font-heading text-xl font-semibold text-primary">Contact Info</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                 <li className="flex items-start gap-3">
  <MessageCircle className="mt-0.5 text-secondary" size={16} />
  <a
    href="https://wa.me/12896421947"
    target="_blank"
    rel="noreferrer"
    className="hover:text-primary"
  >
    +1 289-642-1947
  </a>
</li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 text-secondary" size={16} /> info@cargovergelogistics.com</li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-secondary" size={16} /> USA: 16192 Coastal Highway, Lewes, Delaware 19958</li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-secondary" size={16} /> Canada: 15093 Danby Road, Georgetown Ontario, L7G 0B1</li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-secondary" size={16} /> India: Hari Niwas Plot No.81 202 Sector- 5 Taloja Navi Mumbai 410208 India</li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-secondary" size={16} /> UAE: The Iridium Building 2nd Floor 209 Unit 209-19 AL Barsha 1 Dubai UAE</li>
                </ul>
                <div className="mt-6 flex gap-3">
  <a
    aria-label="LinkedIn"
    href="https://www.linkedin.com/in/cargoverge-logistics-8256593b8"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-slate-200 p-2.5 text-primary transition hover:border-primary hover:bg-primary hover:text-white"
  >
    <Linkedin size={18} />
  </a>

  <a
    aria-label="Instagram"
    href="https://www.instagram.com/cargoverge"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-slate-200 p-2.5 text-primary transition hover:border-primary hover:bg-primary hover:text-white"
  >
    <Instagram size={18} />
  </a>

  <a
    aria-label="Facebook"
    href="https://www.facebook.com"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-slate-200 p-2.5 text-primary transition hover:border-primary hover:bg-primary hover:text-white"
  >
    <Facebook size={18} />
  </a>
</div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <iframe
                  title="CargoVerge Locations"
                  src="https://www.google.com/maps?q=16192%20Coastal%20Highway%20Lewes%20Delaware%2019958&output=embed"
                  loading="lazy"
                  className="h-56 w-full border-0"
                />
                <iframe
                  title="CargoVerge Canada"
                  src="https://www.google.com/maps?q=15093%20Danby%20Road%20Georgetown%20Ontario%20L7G%200B1&output=embed"
                  loading="lazy"
                  className="h-56 w-full border-0"
                />
                <iframe
                  title="CargoVerge India"
                  src="https://www.google.com/maps?q=Hari%20Niwas%20Plot%20No.81%20202%20Sector-%205%20Taloja%20Navi%20Mumbai%20410208%20India&output=embed"
                  loading="lazy"
                  className="h-56 w-full border-0"
                />
                <iframe
                  title="CargoVerge UAE"
                  src="https://www.google.com/maps?q=The%20Iridium%20Building%202nd%20Floor%20209%20Unit%20209-19%20AL%20Barsha%201%20Dubai%20UAE&output=embed"
                  loading="lazy"
                  className="h-56 w-full border-0"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-14 text-slate-200">
        <div className="section-shell grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
<img
  src="/logo.png"
  alt="CargoVerge Logistics logo"
  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
/>
              <div>
                <p className="font-heading text-lg font-semibold text-white">CargoVerge Logistics</p>
                <p className="text-xs text-slate-400">At the Edge of Global Trade.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">Trusted global logistics company delivering secure and efficient supply chain solutions.</p>
          </div>
          <div>
            <h3 className="font-heading text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {navItems.slice(0, 6).map((item) => (
                <li key={item.id}><a href={`#${item.id}`} className="hover:text-white">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {serviceCards.slice(0, 5).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-white">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>+1 289-642-1947</li>
              <li>info@cargovergelogistics.com</li>
              <li>USA & Canada Offices</li>
            </ul>
          </div>
        </div>
        <div className="section-shell mt-10 border-t border-white/10 pt-4 text-xs text-slate-500">
          © {year} CargoVerge Logistics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
