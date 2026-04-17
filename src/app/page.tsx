import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Programs from "@/components/Programs/Programs";
import Stats from "@/components/Stats/Stats";
import Articles from "@/components/Articles/Articles";
import Registration from "@/components/Registration/Registration";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Stats />
      <Articles />
      <Registration />
      <Contact />
      <Footer />
    </main>
  );
}
