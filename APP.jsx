import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaPaintBrush, FaPalette, FaLaptopCode, FaEnvelope } from "react-icons/fa";

export default function App() {
  useEffect(() => {
    document.title = "Coffeecup Design Studio";

    const canvas = document.getElementById("stars");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5,
      d: Math.random() * 50,
    }));

    const animate = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, false);
        ctx.fillStyle = "white";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Letterbox */}
      <div className="fixed top-0 w-full h-12 bg-black z-50"></div>
      <div className="fixed bottom-0 w-full h-12 bg-black z-50"></div>

      {/* Stars */}
      <canvas id="stars" className="fixed w-full h-full z-0 pointer-events-none" />

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900 via-indigo-900 to-black opacity-80 z-[-1]" />
      <img
        src="/background.jpg"
        className="fixed w-full h-full object-cover opacity-40 z-[-2]"
        style={{ mixBlendMode: "screen" }}
        alt="background"
      />

      {/* Logo Animation */}
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black">
        <motion.img
          src="/logo.png"
          alt="Coffeecup Logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="fixed inset-0 z-30 flex items-center justify-center text-white text-4xl md:text-6xl backdrop-blur-sm bg-black/70 text-center">
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3, delay: 2 }}>
          A Coffeecup Design Production
        </motion.div>
      </div>

      {/* Music */}
      <audio autoPlay loop className="hidden">
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center z-10 relative backdrop-blur-sm">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-bold drop-shadow-lg">
          Coffeecup Design Studio
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-lg max-w-xl text-gray-200">
          Where creativity brews like fine coffee ☕ — blending emotion and atmosphere like your favorite anime skies.
        </motion.p>
        <motion.button whileHover={{ scale: 1.1 }} className="mt-6 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg">
          Start Your Journey
        </motion.button>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-black/70 text-center z-10 relative">
        <h2 className="text-3xl text-rose-400 mb-6">About Us</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          At Coffeecup Design Studio, we infuse Japanese anime ambiance into every design. From magical skyscapes to characterful brands, our work feels alive and heartfelt.
        </p>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-black/60 text-center">
        <h2 className="text-3xl text-rose-400 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            Icon: FaPaintBrush, title: "Logo & Brand Design", text: "Crafting memorable brand identities with heart."
          }, {
            Icon: FaPalette, title: "Illustration & Art", text: "Stylized artwork echoing cinematic animation vibes."
          }, {
            Icon: FaLaptopCode, title: "Web & UI Design", text: "Immersive interfaces that feel like an anime dream."
          }].map(({ Icon, title, text }, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-xl backdrop-blur-md">
              <Icon className="text-3xl text-rose-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-200 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Art */}
      <section className="py-20 px-6 bg-black/80 text-center">
        <h2 className="text-3xl text-rose-400 mb-10">Featured Chibi Art</h2>
        <img src="/chibi-art.png" alt="Chibi Art" className="mx-auto rounded-2xl shadow-lg w-72 md:w-96" />
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center bg-black/70">
        <h2 className="text-3xl text-rose-400 mb-6">Contact Us</h2>
        <p className="text-gray-300 text-lg">Got a vision in your head? Let’s draw it to life together.</p>
        <div className="mt-4 flex justify-center items-center gap-3 text-rose-300">
          <FaEnvelope className="text-xl" />
          <a href="mailto:hello@coffeecupstudio.com" className="hover:underline">hello@coffeecupstudio.com</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 bg-black py-4">
        © {new Date().getFullYear()} Coffeecup Design Studio — All rights reserved.
      </footer>
    </main>
  );
}
