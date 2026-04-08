import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./global/main";
import Header from "./global/header";
import Footer from "./global/footer";

import Services from "./pages/services";
import Contact from "./pages/contact";
import "./index.css";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
