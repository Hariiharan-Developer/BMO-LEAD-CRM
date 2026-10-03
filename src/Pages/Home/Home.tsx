import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Problem from "../Problem/Problem";
import Features from "../Features/Features";
import Works from "../Works/Works";
import Difference from "../ProblemSolution/Difference";
import TargetAudience from "../TargetAudience/TargetAudience";
import FAQ from "../Faq/Faq";
import CTA from "../Cta/Cta";
import Navbar from "../Nav/Nav";
import SectionObserver from "../../components/SectionObserver";

const Home = () => {
  return (
    <div className="bmo-home">
      <SectionObserver />
      <Navbar />
      <main>
        {/* Hero has its own entrance animation */}
        <Hero />

        {/* All other sections use data-observe for scroll animation */}
        <div data-observe><Problem /></div>
        <div data-observe><Features /></div>
        <div data-observe><Works /></div>
        <div data-observe><Difference /></div>
        <div data-observe><TargetAudience /></div>
        <div data-observe><FAQ /></div>
        <div data-observe><CTA /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;