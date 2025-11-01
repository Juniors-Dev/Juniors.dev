import { useEffect } from "react";
import "./styles/App.css";
import Header from "./components/ui/Header";
import Hero from "./sections/home/Hero";
import Mission from "./sections/home/Mission";
import Expect from "./sections/home/Expect";
import Roadmap from "./sections/home/Roadmap";
import Contact from "./sections/home/Contact";
import Footer from "./components/ui/Footer";
import LanguageToggle from "./components/ui/LanguageToggle";
import ThemeToggle from "./components/ui/ThemeToggle";

function App() {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Welcome to Juniors.Dev, a creative community and collaboration hub built to give junior developers real-world experience through teamwork, hands-on learning, and ship-worthy projects."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Welcome to Juniors.Dev, a creative community and collaboration hub built to give junior developers real-world experience through teamwork, hands-on learning, and ship-worthy projects.";
      document.head.appendChild(meta);
    }
  }, []);
  return (
    <>
      {/* Language Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Expect />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
