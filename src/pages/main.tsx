import Home from "./home";
import Services from "./services";
import Contact from "./contact";

export default function Main() {
  return (
    <>
      <div style={{}}>
        <Home />
        <div className="divide"></div>
        <Services />
        <div className="divide"></div>

        <Contact />
      </div>
    </>
  );
}
