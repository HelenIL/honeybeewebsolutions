import DEV from "../assets/code_color_edit_notxt.png";
import FIX from "../assets/fix_color_edit_notxt.png";
import BRAND from "../assets/branding_color_notxt.png";
import './pages.css'




export default function Services() {



    return(

        <div className="service-test-wrapper">
          
          <p className="service-header-p" style={{}}>Honeybee Web Solutions</p>
         <p className="services-subheader">Services</p>
        {/* <div className="contact-card-wrapper"></div> */}
            {/* <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop: '20px'}}></div> */}
<div className="services-wrapper" style={{}}>
            <div className="dev">
              
                
                <div className="image-wrapper">
                     
                    <img className="image" alt="Computer Icon" src={DEV}></img>
                </div>
                <div className="title"><p>Web <br/>Design & <br/>Development</p></div>
                
                <div className="dev-text">
                    <p className="text-p" style={{ }}>
              Your website is usually the first place people meet your
              business—so let’s make it count. A good site doesn’t just look
              nice, it helps turn visitors into customers and keeps them coming
              back.
            
           <br/>
            <br/>
              My process is simple: connect, design, develop, deploy. I start by
              getting to know you, your business, and what you’re trying to
              achieve. From there, I design something that actually feels like
              you. Once everything looks and feels right, I build it out and get
              it live.
            
           <br/>
           <br/>
              Whether you need a brand new site, a redesign, or just some
              updates to what you already have, I’ve got you covered. I work on
              everything from fully custom websites to CMS builds—whatever makes
              the most sense for you.
            </p>
                </div>
            </div>
            <div className="brand">
                <div className="branding-text">
                    <p className="text-p" style={{ }}>
             A strong brand helps people recognize your business, remember it,
              and trust it. For small businesses, that can make all the
              difference—especially when you’re competing with bigger, more
              established names.
           
            <br />
            <br/>
              I focus on creating branding that’s clear, approachable, and built
              to work in the real world. That means logos that look good
              everywhere, colors that feel consistent, and a style that actually
              reflects who you are—not something generic or overcomplicated.
            <br/>
            <br/>
              Every project starts with understanding your business and what
              makes it unique. From there, I create a visual identity that feels
              natural to you and easy to use across your website, social media,
              and everyday materials.
            <br/>
            <br/>
              Whether you’re launching something new or giving your current look
              a refresh, I’ll help you build a brand that feels professional,
              cohesive, and ready to grow with you.
            </p>
                </div>
                
        <div className="title branding-title"><p>Branding &<br/>Logo<br/>Design</p></div>
            <div className="image-wrapper brand-img">
                     
                    <img className="image " alt="Branding Icon" src={BRAND}></img>
                </div>
                
            </div>
            <div className="fix">
              
                <div className="image-wrapper">
                     
                    <img className="image" alt="Maintenance Icon" src={FIX}></img>
                </div>
                <div className="title"><p>Site<br/>Maintenance<br/>& Hosting</p></div>
              
                <div className="dev-text">
                    <p className="text-p" style={{ }}>
              Keeping your website up and running shouldn’t be something you
              have to think about. I offer simple, reliable hosting and ongoing
              support so you can focus on running your business—not dealing with
              technical issues.
            <br/>
            <br/>
              I handle the basics that keep everything running smoothly: hosting
              setup, domain management, renewals, and routine updates. If
              something needs attention, I take care of it so your site stays
              online, secure, and working the way it should.
            <br/>
            <br/>
              This is a great fit if you want a hands-off approach or just don’t
              want to deal with the backend side of things. No complicated plans
              or unnecessary extras—just straightforward support to keep your
              website in good shape.
            </p>
                </div>
            </div>
           </div>

        </div>
    )
}