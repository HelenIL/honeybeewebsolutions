import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./contact.css";

const BACK = process.env.PUBLIC_URL + "/images/back.png";
const HB = process.env.PUBLIC_URL + "/images/hb_logo_coffee.jpg";
const CONTACT = process.env.PUBLIC_URL + "/images/contact.png";
const PHONE = process.env.PUBLIC_URL + "/images/hb_phone.png";

const CardOne = (props: any) => {
  return (
    <div className="contact-card-wrapper" style={{}}>
      <Card className="contact-image-div" style={{}}>
        <Card.Img src={HB} />
      </Card>
      <Card className="contact-text-div" style={{}}>
        <Card.Text className="contact-title" style={{}}>
          Let's Chat!
        </Card.Text>

        <Card.Body className="contact-body" style={{}}>
          <Card.Text className="contact-card-text" style={{}}>
            I start every project with a conversation. I want to understand your
            business, your goals, and your vision for your website. This is a
            chance for us to get to know each other and make sure we're a good
            fit. No pressure, just a friendly chat about how I can help you
            succeed online.
          </Card.Text>
          <br />
          <br />
          {/* <br /> */}
          <Card.Text className="contact-title-bottom" style={{}}>
            Get in touch today to schedule your free consultation!
          </Card.Text>
          {/* <br/>
        <br/> */}
          <div className="button-div" style={{}}>
            <Button
              id="contact-button"
              size="lg"
              onClick={props.onClick}
              style={{}}
            >
              Contact
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const Form = () => {
  return (
    <div className="contact-card-wrapper" style={{}}>
      <Card className="contact-image-div  " style={{}}>
        <Card.Img src={PHONE} />
      </Card>
      <Card className="contact-text-div " style={{}}>
        <Card.Text className="contact-title" style={{}}>
          Let's Chat!
        </Card.Text>

        <Card.Body className="contact-body" style={{}}>
          <form
            id="form"
            action="https://formsubmit.co/directconnect@honeybeewebsolutions.com"
            method="POST"
          >
            <br />
            <br />
            <input type="hidden" name="_captcha" value="false"></input>
            <label htmlFor="name">Name:</label>
            <input id="input" type="text" name="name" required />
            <label htmlFor="email">Email:</label>
            <input id="input" type="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="textarea" name="message" required></textarea>
            {/* <br/> */}
            <div className="button-div send" style={{}}>
              <Button
                size="lg"
                id="contact-button"
                type="submit"
                
                // className="contact-button"
                style={{}}
              >
                Send
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default function ContactTest() {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="contact-wrapper">
      <div>
        {isVisible ? <Form /> : <CardOne onClick={handleButtonClick} />}
      </div>
    </div>
  );
}
