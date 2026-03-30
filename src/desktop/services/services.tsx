import DEV from "../../assets/code_color_edit_notxt.png";
import FIX from "../../assets/fix_color_edit_notxt.png";
import BRAND from "../../assets/branding_color_notxt.png";
import "./services.css";
import {develop, fix, branding} from '../../global/text'

export default function Services() {
  return (
    <div className="services-wrapper">
     
      <div style={{ display: 'flex', justifyContent: 'center',  marginLeft: '2rem', marginRight: '2rem', paddingBottom: '1rem', marginBottom: '50px' }}>
            <div style={{width: '15%', border: '5px solid #784415', backgroundColor: '#ffdf91'}}></div>
            <div style={{width: '10%', border: '5px solid #784415', backgroundColor: '#f7e1b7'}}></div>
            <div style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffdf91', border: '5px solid #784415' }}>
            <p className="contact-header">Services</p>
            </div>
            <div style={{width: '10%', border: '5px solid #784415', backgroundColor: '#f7e1b7'}}></div>
            <div style={{width: '15%', border: '5px solid #784415', backgroundColor: '#ffdf91'}}></div>
            </div>

      {/* Top Section */}
      <div className="top" style={{margin: '20px'}}>
        <div className="services-section" style={{}}>
          <div style={{}} className="services-card-inner">
            <img
            className="services-icons"
              style={{  }}
              src={DEV}
              alt="Development"
            />
          </div>
          <div
          className="services-text"
           
          >
            <h2>Web Design & Development</h2>
            <p style={{ fontSize: '1.3rem'}}>
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
      </div>

      {/* Middle Section */}
      <div className="middle" style={{margin: '50px'}}>
        <div className="services-section" style={{}}>
          <div
          className="branding services-text"
            style={{
              
            }}
          >
            <h2>Branding & Logo Design</h2>
        
            <p style={{ fontSize: '1.3rem'}}>
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
              cohesive, and ready to grow with you..
            </p>
          </div>

          <div className="services-card-inner branding-icon">
            <img
            className="services-icons"
              style={{  }}
              src={BRAND}
              alt="Branding"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      
      <div className="bottom" style={{margin: '50px'}}>
        <div className="services-section" style={{}}>
          <div style={{}} className="services-card-inner">
            <img
            className="services-icons"
              style={{  }}
              src={DEV}
              alt="Development"
            />
          </div>
          <div
          className="services-text"
            style={{
              
            }}
          >
            <h2>Site Maintainence & Hosting</h2>
            <p style={{ fontSize: '1.3rem'}}>
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
  );
}
