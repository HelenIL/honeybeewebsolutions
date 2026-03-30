import './test.css'
import { useState } from 'react';



const BACK = process.env.PUBLIC_URL + "/images/back.png";
const HB = process.env.PUBLIC_URL + "/images/hb_logo_coffee.jpg";
const CONTACT = process.env.PUBLIC_URL + "/images/contact.png";
const PHONE = process.env.PUBLIC_URL + "/images/hb_phone.png";

const Card = (props: any) => {
    return (
        <div className="contact-card-wrapper">
            <div className="contact-inner-wrapper" style={{}}>
            <div className="contact-image-div">
                <img className="contact-image" src={HB}></img>
            </div>


            <div className="contact-div" style={{}}>
               
                    
                    
                 
                        <div className="contact-text" style={{ }}>
                            <p className="title">Let's Chat!</p>
                          
                        <p className="contact-p-main" style={{  }}>
              I start every project with a conversation. I want to understand
              your business, your goals, and your vision for your website. This
              is a chance for us to get to know each other and make sure we're a
              good fit. No pressure, just a friendly chat about how I can help
              you succeed online.
            </p>
            <br />
            <p className="contact-p-main" style={{  }}>
              <strong>
                Get in touch today to schedule your free consultation!
              </strong>
            </p>
            <div style={{}}>
                        <button id="cb" onClick={props.onClick}>Contact</button>
                    </div>
            </div>
            </div>
                    </div>
                   
                </div>
     
    )
}

const Form = () => {
    return (
         <div className="form-wrapper">
            <div className="form-inner-wrapper">
                <div className="contact-image-div">
                <img className="contact-image" src={PHONE}></img>
            </div>
            <div className="form-div">
                
                <div className="form-text textTwo">
               
                <form
            id="form"
            action="https://formsubmit.co/directconnect@honeybeewebsolutions.com"
            method="POST"
          >
           
            <br/>
            <br/>
            <input type="hidden" name="_captcha" value="false"></input>
            <label htmlFor="name">Name:</label>
            <input id="input" type="text" name="name" required />
            <label htmlFor="email">Email:</label>
            <input id="input" type="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="textarea" name="message" required></textarea>
            <br/>
            <div style={{  marginTop: '100px'  }}>
            
              <button id="send" type="submit" className="contact-button" style={{}}>
         
        Send
              </button>
            </div>
          </form>
          </div>
            </div>
            </div>
               
            </div>
    )
}

export default function ContactTest() {
   
    const [isVisible, setIsVisible] = useState(false);

 const handleButtonClick = () => {
    setIsVisible(true);
  };

    return (

        <div className="contact-wrapper">

            <div>
                {isVisible ? (
                    <Form/>
                ) : ( <Card onClick={handleButtonClick}/>)}
            </div>

        </div>
    )
}