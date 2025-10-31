import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen">
      <motion.img
        src="/stacked_format_logo.png"
        alt="TimesApp Logo"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-32 mb-8"
      />
      <motion.h1
        className="text-5xl md:text-6xl font-semibold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        Redefine Time.
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Discover a world where every day lasts 32 hours. TimesApp is not just a watch — it's a new rhythm for your life.
      </motion.p>
      <motion.button
        className="px-6 py-3 bg-black text-white rounded-full text-lg hover:opacity-80 transition"
        whileHover={{ scale: 1.05 }}
      >
        Discover the 32-Hour Day
      </motion.button>
    </section>
  );
}
