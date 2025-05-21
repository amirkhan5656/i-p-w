"use client";
import AboutPage from "@/components/About";
import Contact from "@/components/Contact";
import { HeroSection } from "@/components/HeroSection";
import PortfolioPage from "@/components/Projects";
import ServicesPage from "@/components/Services";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <PortfolioPage/>
      <AboutPage/>
      <Contact/>
      <ServicesPage/>

    </main>
  )
}
