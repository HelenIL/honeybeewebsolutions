import "./contact.css"


const PHONE = process.env.PUBLIC_URL + "/images/hb_phone.png";

const ContactForm = () => {
  return (
    <div style={{}}>
      <div
      className="contact"
        style={{
      
        }}
      >
        <div style={{}}>
          <img loading="lazy" className="process-image" src={PHONE} style={{}} alt="HB Logo" />
        </div>

        <div
          style={{
           
           
          
            height: '25rem'
          }}
          
          className="retro-card"
        >
          <div className=""> 
          <form
            id="form"
            action="https://formsubmit.co/directconnect@honeybeewebsolutions.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false"></input>
            <label htmlFor="name">Name:</label>
            <input id="input" type="text" name="name" required />
            <label htmlFor="email">Email:</label>
            <input id="input" type="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="textarea" name="message" required></textarea>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button id="send" type="submit">
                Send
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
