// import CTA from "../Cta/Cta"
import FAQ from "../Faq/Faq"
import Features from "../Features/Features"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import LiveDemo from "../LiveDemo/LiveDemo"
import Navbar from "../Nav/Nav"
// import Navbar from "../navbar/component/Navbar"
import Security from "../Security/Security"
import HowItWorks from "../Works/HowItWorks"



const Home = () => {
  return (
    <div className="bmo-home">

    <Navbar/>
      <main>
        <Hero />

        <Features />

        <LiveDemo />

        <HowItWorks />


        <Security />

        <FAQ />

        {/* <CTA /> */}
      </main>

      <Footer />

    </div>
  )
}

export default Home