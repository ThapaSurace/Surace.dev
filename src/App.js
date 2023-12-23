import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Typography } from "@material-tailwind/react";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <section id="project">
        <div className="h-screen flex justify-center items-center">
         <div className="w-full">
         <Typography variant="h1" className="text-center">Projects</Typography>
          <Projects />
         </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
