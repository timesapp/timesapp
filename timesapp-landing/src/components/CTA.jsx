import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="text-center py-32">
      <motion.h2
        className="text-5xl font-semibold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Join the new rhythm of time.
      </motion.h2>
      <motion.button
        className="px-8 py-4 bg-black text-white text-lg rounded-full hover:opacity-80 transition"
        whileHover={{ scale: 1.05 }}
      >
        Pre-Order Now
      </motion.button>
    </section>
  );
}
