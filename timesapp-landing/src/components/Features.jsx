import { motion } from "framer-motion";

const features = [
  {
    title: "32-Hour Day",
    text: "Experience a smoother flow of time with 8 extra hours to live, dream, and create.",
    img: "https://placehold.co/600x400/EEE/333?text=3D+Watch+1",
  },
  {
    title: "45-Minute Hours",
    text: "Each hour gives you just enough time to stay focused — and never feel rushed.",
    img: "https://placehold.co/600x400/EEE/333?text=3D+Watch+2",
  },
  {
    title: "Redefine Balance",
    text: "Structure your day with natural rhythm and harmony — powered by TimesApp.",
    img: "https://placehold.co/600x400/EEE/333?text=3D+Watch+3",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-3xl shadow-sm hover:shadow-xl overflow-hidden flex flex-col items-center text-center"
          >
            <img src={f.img} alt={f.title} className="w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-lg">{f.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
