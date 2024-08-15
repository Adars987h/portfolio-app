import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Design from "@/components/Design";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Design></Design>
      <Footer></Footer>
</div>
  );
}