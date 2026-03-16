import "./contact.css";

const HB = process.env.PUBLIC_URL + "/images/hb_logo_coffee.jpg";

export default function Process() {
  return (
    <div className="processContainer" style={{}}>
      <div className="process" style={{}}>
        <div style={{ }}>
          <img loading="lazy" className="process-image" src={HB} style={{}} alt="HB Logo" />
        </div>
    
        <div style={{  }} className="retro-card process-card">
          <div className="process-card-content" style={{  }}>
            <p style={{  }}>
              We start every project with a conversation. We want to understand
              your business, your goals, and your vision for your website. This
              is a chance for us to get to know each other and make sure we're a
              good fit. No pressure, just a friendly chat about how we can help
              you succeed online.
            </p>
            <br />
            <p style={{  }}>
              <strong>
                Get in touch today to schedule your free consultation!
              </strong>
            </p>
            <br />
            
         
        </div>
        </div>
      </div>
    </div>
  );
}
