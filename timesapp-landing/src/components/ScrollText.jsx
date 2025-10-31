import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={ref} className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-white">
      <motion.div style={{ y }} className="absolute text-center space-y-24">
        <h2 className="text-5xl md:text-6xl font-semibold text-black">More time for what matters.</h2>
        <h2 className="text-5xl md:text-6xl font-semibold text-black">Balance your life like never before.</h2>
        <h2 className="text-5xl md:text-6xl font-semibold text-black">Time designed for humans, not machines.</h2>
      </motion.div>
    </section>
  );
}
