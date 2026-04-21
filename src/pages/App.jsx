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
} from 'lucide-react';
import {
  navItems,
  serviceCards,
  reasons,
  testimonials,
  highlights,
  stats,
  routeIcon,
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
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

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

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          company_name: form.company || 'N/A',
          contact_number: form.phone,
          from_email: form.email,
          to_email: 'info@cargovergelogistics.com',
          message: `New quote/contact request received from ${form.name}.`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus({ type: 'success', message: 'Message sent successfully. We will contact you shortly.' });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to send right now. Please try again shortly or email info@cargovergelogistics.com.',
      });
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 grid place-items-center bg-primary">
        <div className="text-center text-white">
          <div className="loader mx-auto mb-4" />
          <p className="font-heading text-lg">Loading CargoVerge Logistics</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="CargoVerge Logistics logo" className="h-12 w-12" loading="lazy" />
            <div>
              <p className="font-heading text-lg font-semibold text-primary">CargoVerge Logistics</p>
              <p className="text-xs text-slate-500">At the Edge of Global Trade.</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-slate-600 transition hover:text-primary">
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

      <main>
        <section id="home" className="hero-map relative isolate">
          <div className="absolute inset-0 -z-10 bg-grid bg-[size:16px_16px] opacity-20" />
          <div className="section-shell py-20 md:py-28">
            <motion.div
              className="max-w-3xl text-white"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em]">
                Premium Global Freight Partner
              </p>
              <h1 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">
                Connecting Businesses Worldwide Through Reliable Logistics
              </h1>
              <p className="mt-6 max-w-2xl text-base text-slate-100 md:text-lg">
                CargoVerge Logistics delivers freight forwarding services across air, ocean, land, and warehousing so your business moves faster in global markets.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-slate-900 transition hover:brightness-95">
                  Get a Quote
                </a>
                <a href="#services" className="rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Our Services
                </a>
              </div>
            </motion.div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/10 p-4 text-white backdrop-blur">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

import { motion } from "framer-motion";
import CountUp from "react-countup";

<section id="about" className="section-shell py-20 md:py-28">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary">
        About CargoVerge Logistics
      </h2>

      <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
        <p>
          CargoVerge Logistics is a forward-thinking freight forwarding and logistics company delivering reliable, efficient, and globally integrated supply chain solutions. Positioned at the intersection of precision and performance, we empower businesses to navigate international trade with confidence.
        </p>

        <p>
          We specialize in orchestrating seamless cargo movement across air, ocean, and land networks. Every shipment is handled with strategic planning, operational transparency, and unwavering commitment to timeliness.
        </p>

        <p>
          Through a growing network of global partners and logistics expertise, we provide scalable, end-to-end solutions—from urgent air freight to cost-efficient ocean shipping and inland coordination.
        </p>

        <p className="font-medium text-primary">
          We don’t just move cargo—we move business forward.
        </p>
      </div>
    </motion.div>

    {/* RIGHT VISUAL / IMAGE */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      <img
        src="/assets/logistics-world.jpg"
        alt="Global Logistics Network"
        className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
      />

      {/* Floating card */}
      <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg border border-slate-200">
        <p className="text-sm text-slate-500">Global Reach</p>
        <p className="text-xl font-semibold text-primary">Worldwide Network</p>
      </div>
    </motion.div>
  </div>

  {/* COUNTERS */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
  >
    <div>
      <h3 className="text-3xl font-bold text-primary">
        <CountUp end={50} duration={3} />+
      </h3>
      <p className="text-slate-600 text-sm mt-1">Global Partners</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-primary">
        <CountUp end={120} duration={3} />+
      </h3>
      <p className="text-slate-600 text-sm mt-1">Countries Served</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-primary">
        <CountUp end={500} duration={3} />+
      </h3>
      <p className="text-slate-600 text-sm mt-1">Shipments Delivered</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-primary">
        <CountUp end={99} duration={3} />%
      </h3>
      <p className="text-slate-600 text-sm mt-1">Client Satisfaction</p>
    </div>
  </motion.div>
</section>

        <section id="services" className="bg-slate-100 py-16 md:py-24">
          <div className="section-shell">
            <h2 className="font-heading text-3xl font-semibold text-primary">Freight Forwarding Services</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Scalable international cargo services built for speed, compliance, and supply chain performance.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map(({ icon: Icon, title, description }) => (
                <motion.article
                  key={title}
                  whileHover={{ y: -7 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition"
                >
                  <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-secondary/20 group-hover:text-secondary">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
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
          <h2 className="font-heading text-3xl font-semibold text-primary">Client Testimonials</h2>
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

                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/95">
                  Send Inquiry
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
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 text-secondary" size={16} /> +1 289-642-1947</li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 text-secondary" size={16} /> info@cargovergelogistics.com</li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-secondary" size={16} /> USA: 16192 Coastal Highway, Lewes, Delaware 19958</li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-secondary" size={16} /> Canada: 15093 Danby Road, Georgetown Ontario, L7G 0B1</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/in/cargoverge-logistics-8256593b8" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2.5 text-primary transition hover:border-primary hover:bg-primary hover:text-white">
                    <Linkedin size={18} />
                  </a>
                  <a aria-label="Instagram" href="https://www.instagram.com/cargoverge" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2.5 text-primary transition hover:border-primary hover:bg-primary hover:text-white">
                    <Instagram size={18} />
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
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-14 text-slate-200">
        <div className="section-shell grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="CargoVerge Logistics logo" className="h-12 w-12" loading="lazy" />
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
