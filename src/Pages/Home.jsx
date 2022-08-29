import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import About from "./../components/About";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}
