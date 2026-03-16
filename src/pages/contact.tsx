import React, { useState } from "react";
import Process from "../components/contact/process";
import ContactForm from "../components/contact/contactForm";
import "./index.css";

const CONTACT = process.env.PUBLIC_URL + "/images/contact.png";
const BACK = process.env.PUBLIC_URL + "/images/back.png";

const ComponentOne: React.FC<{ onSwap: () => void }> = ({ onSwap }) => (
  <div style={{}}>
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <p
        style={{
          fontSize: "3rem",
          color: "#CC5500",
          fontFamily: 'Caprasimo',
        }}
      >
        Let's Chat!
      </p>
    </div>
    <Process />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <button className="contact-button" onClick={onSwap} style={{}}>
        <img
          loading="lazy"
          className="contact-button-image"
          style={{}}
          src={CONTACT}
          alt="Contact"
        />
      </button>
    </div>
  </div>
);

const ComponentTwo: React.FC<{ onSwap: () => void }> = ({ onSwap }) => (
  <div>
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <p
        style={{
          fontSize: "3rem",
          color: "#CC5500",
          fontFamily: 'Caprasimo',
        }}
      >
        Let's Chat!
      </p>
    </div>
    <ContactForm />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
   
    
      }}
    >
      <button className="contact-button" onClick={onSwap} style={{}}>
        <img
          loading="lazy"
          className="back-button-image"
          style={{}}
          src={BACK}
          alt="Back"
        />
      </button>
    </div>
  </div>
);

const Contact = () => {
  // Use state to track which component to show (true for A, false for B)
  const [showA, setShowA] = useState(true); // Initial state shows Component A
  // Function to toggle the state value
  const toggleComponent = () => {

    setShowA(!showA);
   
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      {/* Conditionally render Component A or Component B */}
      {showA ? (
        <ComponentOne onSwap={toggleComponent} />
      ) : (
        <ComponentTwo onSwap={toggleComponent} />
      )}
    </div>
  );
};

export default Contact;
