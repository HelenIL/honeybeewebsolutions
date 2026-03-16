import HB from '../assets/portfolio_logo_notxt_small.png'
import './index.css'


export default function Home() {


    return (
        <>
        

    <div className="home-wrapper" style={{}}>


<div  className="retro-card home-card-wrapper">
  <div className="home-card-content">
    <h2>At Honeybee, We Build Websites That Help Small Businesses Grow</h2>
    <p>Your website should do more than exist—it should work for you. We specialize in helping small businesses build beautiful, effective websites that strengthen their brand and attract the right customers. From logo and brand identity to fully custom websites, we create digital experiences that reflect who you are and what makes your business unique.</p>
 <br />
 <p>Whether you're just starting out or ready to refresh your online presence, we focus on clean design, fast performance, and simple tools that make it easy to manage your site. No unnecessary complexity—just thoughtful design and reliable development built with small businesses in mind.</p>
 <br />
 <h3>Build your brand. Grow your business. Stand out online.</h3>
  </div>
</div>
<div className="home-image-wrapper"style={{  }}>
<img className="home-image" src={HB} style={{ }} alt="HB Logo"  />
</div>

    </div>


        </>
    )
}