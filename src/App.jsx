import "./App.css";
import {
  About,
  Banner,
  ContactSection,
  FAQSection,
  Features,
  Footer,
  NavBar,
  Testimonials,
  VideoSection,
} from "./components";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Banner />
        <About />
        <VideoSection />
        <Features />
        <Testimonials />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
