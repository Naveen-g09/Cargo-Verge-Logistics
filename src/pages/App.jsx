import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import CountUp from "react-countup";
import {
  Menu, X, ArrowRight, Linkedin, Instagram, Phone, Mail, MapPin
} from "lucide-react";
import {
  navItems, serviceCards, reasons, testimonials, highlights
} from "../components/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", company: "", phone: "", email: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="font-sans text-slate-800">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white z-50 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="font-bold text-lg text-primary">CargoVerge</h1>

          <nav className="hidden md:flex gap-6">
            {navItems.map(i => (
              <a key={i.id} href={`#${i.id}`} className="hover:text-primary">{i.label}</a>
            ))}
          </nav>

          <button onClick={() => setNavOpen(!navOpen)} className="md:hidden">
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden px-6 pb-4">
            {navItems.map(i => (
              <a key={i.id} href={`#${i.id}`} className="block py-2">{i.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="bg-primary text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            At the Edge of Global Trade
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            CargoVerge Logistics delivers seamless freight forwarding solutions across air, ocean, and land—empowering businesses to scale globally with precision, reliability, and speed.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-secondary text-black px-6 py-3 rounded-lg font-semibold">
              Get a Quote
            </a>
            <a href="#services" className="border px-6 py-3 rounded-lg">
              Services
            </a>
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: 50, label: "Partners" },
              { num: 120, label: "Countries" },
              { num: 500, label: "Shipments" },
              { num: 99, label: "Satisfaction %" }
            ].map((s, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold">
                  <CountUp end={s.num} duration={2} />+
                </h3>
                <p className="text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary">About Us</h2>

        <p className="mt-6 text-slate-600 leading-relaxed">
          CargoVerge Logistics is a forward-thinking freight forwarding company delivering reliable global logistics solutions. We coordinate seamless cargo movement across air, ocean, and land—ensuring efficiency, transparency, and performance.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {highlights.map(h => (
            <div key={h.title} className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-primary">{h.title}</h3>
              <p className="text-sm mt-2">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-primary">Services</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {serviceCards.map(s => (
              <motion.div
                key={s.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow"
              >
                <s.icon />
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="text-sm mt-2">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-black text-center py-16">
        <h2 className="text-2xl font-semibold">
          Ready to Move Your Business Globally?
        </h2>
        <a href="#contact" className="mt-4 inline-block bg-primary text-white px-6 py-3 rounded">
          Request Quote
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border p-3 rounded"/>
          <input placeholder="Company" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} className="w-full border p-3 rounded"/>
          <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full border p-3 rounded"/>
          <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full border p-3 rounded"/>

          <button className="bg-primary text-white px-6 py-3 rounded">
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </form>

        <div>
          <h3 className="font-semibold text-primary">Contact Info</h3>
          <p className="mt-3">+1 289-642-1947</p>
          <p>info@cargovergelogistics.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-10 text-center">
        <p>© 2026 CargoVerge Logistics</p>
      </footer>

    </div>
  );
}