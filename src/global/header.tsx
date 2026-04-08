
import BEE from "../assets/bee8.png";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function Header() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" style={{ paddingRight: '2rem', paddingLeft: '2rem'}}>
        
          <Navbar.Brand href="/">
            <img
              src={BEE}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Honeybee Logo"
              style={{ borderRadius: '50%' }}
            />
            {' '}
            <span className="d-none d-sm-inline ms-2">Honeybee Web Solutions</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{textAlign: 'right', paddingTop: '1rem'}}>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
       
      </Navbar>
      
    </>
  );
}
