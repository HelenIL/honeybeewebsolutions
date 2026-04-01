import HB from '../assets/portfolio_logo_notxt_small_bee.png'
import './landing.css'



export default function Landing() {




    return (


        <div className="landing-wrapper" style={{}}>
            <div className="landing-text-wrapper">
                <div className="landing-header-text">
                <p>Websites That Help Small Businesses Grow</p>
                </div>
          
                <div className="landing-body-text">
    <p>Your website should do more than just exist–it should be an extension of you. 
        <p>That’s where I come in.</p> 
        I’m Helen, the force behind Honeybee Web Solutions.
<p></p>
Based in Saint Paul, Minnesota, I specialize in helping small business owners build confidence through thoughtful, personalized web design. I work closely with you to create digital experiences that reflect who you are and what makes your small business unique. From logo and brand identity to fully custom websites, I’ve got your back.<p></p>
</p>
 
 <p>With Honeybee, you’re not just hiring a developer–you’re getting a partner invested in your success. 
    <p></p></p>
    </div>
 <br />
 <div className="landing-tag-lg"><p>Build your brand. Grow your business. Stand out.</p></div>
 <div className="landing-tag-sm">
    <p>Build your brand.</p>
    <p>Grow your business.</p>
    <p>Stand out.</p>
 </div>
            </div>
            <div className="landing-image-wrapper">
<img className="landing-image" src={HB} style={{ }} alt="HB Logo"  />
            </div>


        </div>
    )
}