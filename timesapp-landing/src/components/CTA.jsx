import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="text-center py-32 bg-white">
      <motion.h2
        className="text-5xl md:text-6xl font-semibold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Join the new rhythm of time.
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-10 py-5 bg-black text-white text-xl rounded-full hover:opacity-80"
      >
        Pre-Order Now
      </motion.button>
    </section>
  );
}
