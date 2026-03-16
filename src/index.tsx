import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages/main";
import ContactForm from "./components/contact/contactForm";
import Header from "./components/header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </BrowserRouter>,
);
