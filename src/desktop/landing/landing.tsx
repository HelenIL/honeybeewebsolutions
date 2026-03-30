import HB from '../../assets/portfolio_logo_notxt_small_bee.png'
import './landing.css'


export default function Landing() {


    return (
        <div>
        
{/* <div style={{ display: 'flex', justifyContent: 'center'}}>
    <p>Honeybee Web Solutions</p>
</div> */}
    <div className="home-wrapper" style={{}}>


<div  className="retro-card home-card-wrapper">
  <div className="home-card-content">
    <h2>Websites That Help Small Businesses Grow</h2>
    <p>Your website should do more than just exist–it should be an extension of you. 
        <p>That’s where I come in.</p> 
        I’m Helen, the force behind Honeybee Web Solutions.
<p></p>
Based in Saint Paul, Minnesota, I specialize in helping small business owners build confidence through thoughtful, personalized web design. I work closely with you to create digital experiences that reflect who you are and what makes your small business unique. From logo and brand identity to fully custom websites, I’ve got your back.<p></p>
</p>
 
 <p>With Honeybee, you’re not just hiring a developer–you’re getting a partner invested in your success. 
    <p></p></p>
 <br />
 <h3>Build your brand. Grow your business. Stand out.</h3>
  </div>
</div>
<div className="home-image-wrapper"style={{  }}>
<img className="home-image" src={HB} style={{ }} alt="HB Logo"  />
</div>

    </div>


        </div>
    )
}