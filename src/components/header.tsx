import "./header.css";
import BEE from "../assets/bee7.png";

export default function Header() {
  return (
    <div className="header-wrapper" style={{}}>
      <img style={{height: '45px', borderRadius: '30%', marginLeft: '10px', backgroundColor: '#f7e1b7'  }} src={BEE} alt="Honeybee Logo" />
      <div style={{ height: '45px',alignItems: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <p className="header-p" style={{}}>
        Honeybee Web Solutions
      </p>
      </div>
    </div>
  );
}
