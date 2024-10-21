import Hero from "@/component/home/hero"
import Overview from "@/component/home/overview"
import WhatService from "@/component/services/whatService"
import Testimonial from "@/component/testimonial";

export default function Home() {
  return (
    <main className="h-full md:pb-8">
      <Hero />
      <Overview />
      <WhatService />
      <Testimonial />
    </main>
  );
}