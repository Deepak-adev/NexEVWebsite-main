'use client';

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Results from '../components/sections/Results'
import Innovation from '../components/sections/Innovation'
import HowWeWork from '../components/sections/HowWeWork'
import Benefits from '../components/sections/Benefits'
import Testimonial from '../components/sections/Testimonial'
import FAQ from '../components/sections/FAQ'
import Features from '../components/sections/Features'
import Portfolio from '../components/sections/Portfolio'

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Results />
      <HowWeWork />
      <Benefits />
      <Portfolio />
      <Innovation />
      <Testimonial />
      <FAQ />
      <Features />
    </main>
  )
} 