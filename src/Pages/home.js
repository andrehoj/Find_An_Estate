import React from "react";
import Nav from "../Components/Nav";
import SectionTwo from "../Components/HomeSections/SectionTwo";
import SectionThree from "../Components/HomeSections/SectionThree";
import SectionOne from "../Components/HomeSections/SectionOne";
import About from "../Components/HomeSections/About";
import Hero from "../Components/HomeSections/Hero";

export default function Home() {
  return (
    <section style={{ position: "relative" }}>
      <Nav />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <About />
      <SectionThree />
    </section>
  );
}
