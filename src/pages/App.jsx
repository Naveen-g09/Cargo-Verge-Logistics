import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import CountUp from "react-countup";
import {
  Menu, X, ArrowRight, Linkedin, Instagram, Phone, Mail, MapPin
} from "lucide-react";

import {
  navItems, serviceCards, reasons, testimonials, highlights, routeIcon
} from "../components/data";

const RouteIcon = routeIcon;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });

  const year = useMemo(() => new Date().getFullYear(), []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success", message: "Message sent successfully." });
      setForm(initialForm);
    } catch {
      setStatus({ type: "error", message: "Failed to send. Try again." });
    }
  };

  return (
    <div className="overflow-x-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 font-bold text-primary">
            CargoVerge Logistics
          </a>

          <nav className="hidden lg:flex gap-6">
            {navItems.map(i => (
              <a key={i.id} href={`#${i.id}`} className="hover:text-primary">
                {i.label}
              </a>
            ))}
          </nav>

          <button onClick={() => setNavOpen(!navOpen)} className="lg:hidden">
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>

        {navOpen && (
          <div className="px-6 pb-4 lg:hidden">
            {navItems.map(i => (
              <a key={i.id} href={`#${i.id}`} className="block py-2">
                {i.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="bg-primary text-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-5xl font-bold">
            At the Edge of Global Trade
          </motion.h1>

          <p className="mt-6 max-w-2xl text-lg">
            Seamless freight forwarding across air, ocean, and land — engineered for global business scale.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-secondary px-6 py-3 rounded text-black font-semibold">
              Get a Quote
            </a>
            <a href="#services" className="border px-6 py-3 rounded">
              Services
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[50, 120, 500, 99].map((n, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold">
                  <CountUp end={n} duration={2} />+
                </h3>
                <p className="text-sm">Metric</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary">About</h2>
        <p className="mt-6 text-slate-600">
          CargoVerge Logistics delivers reliable, scalable global logistics solutions through strategic freight coordination.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {highlights.map(h => (
            <div key={h.title} className="p-6 shadow rounded-xl">
              <h3 className="font-semibold">{h.title}</h3>
              <p className="text-sm mt-2">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-100 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {serviceCards.map(s => (
            <motion.div key={s.title} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-xl shadow">
              <s.icon />
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="text-sm mt-2">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NETWORK */}
      <section id="network" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary">Global Network</h2>
        <p className="mt-4 text-slate-600">
          Strong global partnerships ensuring seamless cargo movement.
        </p>
      </section>

      {/* WHY US */}
      <section id="why-us" className="bg-primary text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">
          {reasons.map(r => (
            <div key={r.title}>
              <r.icon />
              <h3>{r.title}</h3>
              <p className="text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-primary">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {testimonials.map(t => (
            <div key={t.name} className="p-6 shadow rounded-xl">
              <p>"{t.quote}"</p>
              <p className="mt-4 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="space-y-4">
          {["name","company","phone","email"].map(f => (
            <input key={f} placeholder={f} value={form[f]} onChange={e=>setForm({...form,[f]:e.target.value})} className="w-full border p-3 rounded"/>
          ))}

          <button className="bg-primary text-white px-6 py-3 rounded">
            {status.type === "loading" ? "Sending..." : "Send"}
          </button>
        </form>

        <div>
          <p>+1 289-642-1947</p>
          <p>info@cargovergelogistics.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-10 text-center">
        © {year} CargoVerge Logistics
      </footer>

    </div>
  );
}