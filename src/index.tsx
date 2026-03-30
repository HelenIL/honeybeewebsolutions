import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./global/main";
import ContactForm from "./desktop/contact/contactForm";
import LandingTest from "./test/landingTest";
import Header from "./global/header";
import Footer from "./global/footer";
import Services from "./desktop/services/services";
import Contact from "./desktop/contact/contact";
import ServicesTest from "./test/servicesTest";
import ContactTest from "./test/contactTest";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/services" element={<ServicesTest />}/>
      <Route path="/contact" element={<ContactTest />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
