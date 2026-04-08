import HB from '../assets/portfolio_logo_notxt_small_bee.png'
import  Card  from 'react-bootstrap/Card';
import './landing.css'



export default function Landing() {




    return (
<>
<div className="landing-wrapper" style={{}}>
     <p className="header-p" style={{}}>Honeybee Web Solutions</p>
     <p className="subheader-p"style={{}}>Websites That Help Small Businesses Grow</p>

<div className="landing-card-wrapper">
<Card className="landing-img-card" style={{}}>
    <Card.Img className="landing-img" src={HB} />
</Card>
<Card className="landing-text-card" style={{}}>

<Card.Body className="landing-card-body"  style={{}}>
    <Card.Text className="landing-body-text">
<p className="landing-p">Your website should do more than just exist–it should be an extension of you. 
        <p>That’s where I come in.</p> 
        I’m Helen, the force behind Honeybee Web Solutions.
<p></p>
Based in Saint Paul, Minnesota, I specialize in helping small business owners build confidence through thoughtful, personalized web design. I work closely with you to create digital experiences that reflect who you are and what makes your small business unique. From logo and brand identity to fully custom websites, I’ve got your back.<p></p>
</p>    
<p>With Honeybee, you’re not just hiring a developer–you’re getting a partner invested in your success. 
    <p></p></p>
    </Card.Text>
    </Card.Body>

</Card>
</div>
<div>
    <div className="landing-tag-lg" style={{marginTop: '5rem'}}>
<p>Build your brand. Grow your business. Stand out.</p>
    </div>
    <div className="landing-tag-sm" style={{marginTop: '3rem'}}>
        <p>Build your brand.</p>
    <p>Grow your business.</p>
    <p>Stand out.</p>
    </div>
</div>
</div>
</>


    )
}