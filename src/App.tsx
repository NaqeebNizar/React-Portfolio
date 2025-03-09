import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="portfolio-theme">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact-form">
        <ContactForm />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
