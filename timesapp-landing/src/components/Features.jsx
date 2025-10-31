import { motion } from "framer-motion";

const features = [
  {
    title: "32-Hour Day",
    text: "Experience a smoother flow of time with 8 extra hours to live, dream, and create.",
    img: "https://placehold.co/400x300?text=3D+Watch+1",
  },
  {
    title: "45-Minute Hours",
    text: "Each hour gives you just enough time to stay focused — and never feel rushed.",
    img: "https://placehold.co/400x300?text=3D+Watch+2",
  },
  {
    title: "Redefine Balance",
    text: "Structure your day with natural rhythm and harmony — powered by TimesApp.",
    img: "https://placehold.co/400x300?text=3D+Watch+3",
  },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6"
          whileHover={{ scale: 1.03 }}
        >
          <img src={f.img} alt={f.title} className="rounded-xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.text}</p>
        </motion.div>
      ))}
    </section>
  );
}
