import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <motion.img
        src="/stacked_format_logo.png"
        alt="TimesApp Logo"
        className="w-28 md:w-32 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Redefine Time.
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover a world where every day lasts 32 hours. TimesApp is not just a watch —
        it’s a new rhythm for your life.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-8 py-4 bg-black text-white text-lg rounded-full shadow-md hover:opacity-80"
      >
        Discover the 32-Hour Day
      </motion.button>
    </section>
  );
}
