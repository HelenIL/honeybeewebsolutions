import DEV from '../assets/code_color_edit.png'
import FIX from '../assets/fix_color_edit.png'
import BRAND from '../assets/branding_color.png'
import './index.css'


export default function Services() {   


    return (

        <>
        <div className="services-wrapper" style={{  }}>
          <p className="services-p" style={{ }}>Our Services</p>
        </div>
        <div className="flip-card-wrapper" style={{}}>
        <div className="flip-card">
  <div className="flip-card-inner ">
    <div className="flip-card-front">
      <img loading="lazy" className="flip-card-image" src={DEV} alt="Avatar" style={{}} />
    </div>
    <div className="flip-card-back" style={{alignContent: 'center', textAlign: 'center'}}>
      <p style={{ fontSize: '.85rem'}}>We believe great websites start with thoughtful design and intentional development. Every site we create is uniquely designed to reflect your brand, tell your story, and stand out from the crowd—never built from generic templates.
<br/>
<br/>
Behind the design is careful, strategic development that focuses on performance, usability, and long-term scalability. The result is a website that not only looks distinctive, but works seamlessly for your business and your users.</p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner ">
    <div className="flip-card-front">
      <img loading="lazy" className="flip-card-image" src={BRAND} alt="Avatar" style={{}} />
    </div>
    <div className="flip-card-back" style={{alignContent: 'center', textAlign: 'center'}}>
     
        <p style={{ fontSize: '.75rem'}}>Your brand is more than just a logo—it’s the first impression people have of your business. We help bring your brand to life with thoughtful branding and logo design that reflects your identity and connects with your audience. From custom logos to cohesive color palettes and typography, we create visuals that are distinctive, professional, and built to work seamlessly across your website and marketing materials. 
          <br/>
          <br/>
          We’ll help you build a visual identity that’s clear, memorable, and designed to grow with your business.</p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner ">
    <div className="flip-card-front">
      <img loading="lazy" className="flip-card-image" src={FIX} alt="Avatar" style={{}} />
    </div>
    <div className="flip-card-back" style={{alignContent: 'center', textAlign: 'center'}}>
      {/* <h1>Site Maintainance</h1> */}
        <p style={{ fontSize: '.75rem'}}>Keeping your website running smoothly shouldn’t be a full-time job for you—that’s where we come in. Our site maintenance and hosting management services ensure your website stays secure, up-to-date, and performing at its best. We handle software updates, domain registration, renewals, hosting management, and performance optimization-we manage the technical details so you don’t have to.
<br/>
<br/>
With reliable support and proactive care, you can focus on running your business while we keep your website fast, secure, and online.
</p>
    </div>
  </div>
</div>
</div>
        </>
    )
}