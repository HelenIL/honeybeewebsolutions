import React, { useState } from "react";
import ContactCard from "./contactCard";
import ContactForm from "./contactForm";
import "./contact.css";

const CONTACT = process.env.PUBLIC_URL + "/images/contact.png";
const BACK = process.env.PUBLIC_URL + "/images/back.png";

const ComponentOne: React.FC<{ onSwap: () => void }> = ({ onSwap }) => (
  <div className="contact-wrapper" style={{}}>
    
    <ContactCard />
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
  <div className="contact-wrapper">
    
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
    <div style={{ marginBottom: "2rem", marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center',  marginLeft: '2rem', marginRight: '2rem', paddingBottom: '1rem', height: '150px' }}>
            <div style={{width: '15%', border: '5px solid #784415', backgroundColor: '#ffdf91'}}></div>
            <div style={{width: '10%', border: '5px solid #784415', backgroundColor: '#f7e1b7'}}></div>
            <div style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffdf91', border: '5px solid #784415' }}>
            <p className="contact-header">Let's Chat!</p>
            </div>
            <div style={{width: '10%', border: '5px solid #784415', backgroundColor: '#f7e1b7'}}></div>
            <div style={{width: '15%', border: '5px solid #784415', backgroundColor: '#ffdf91'}}></div>
            </div>
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
