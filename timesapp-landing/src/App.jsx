import React from "react";
import Hero from "./components/Hero";
import ScrollText from "./components/ScrollText";
import Features from "./components/Features";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-white text-black">
      <Hero />
      <ScrollText />
      <Features />
      <CTA />
    </div>
  );
}
