import React from "react";
import Hero from "./components/Hero";
import ScrollText from "./components/ScrollText";
import Features from "./components/Features";
import CTA from "./components/CTA";

export default function App() {
  return (
    <main className="font-sans">
      <Hero />
      <ScrollText />
      <Features />
      <CTA />
    </main>
  );
}
