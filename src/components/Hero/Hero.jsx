import Button1 from "../Buttons/Button1";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <span className="hero-subtitle">Crafting Unique Brand Identities</span>
      <h1 className="hero-title">
        Teonvo Branding <br /> that
        <span style={{ color: "#737373" }}>
          {" "}
          you need <br />
        </span>
        Indeed
      </h1>
      <p className="hero-description">
        Evlevate your brand with custom identity and package design. <br />{" "}
        Showcase your story through bold visuals and strategic design solutions.
      </p>
      <div className="hero-btns">
        <Button1 text={"Get Started Now"} />
        <Button1 text={"See Projects"} />
      </div>
      <div className="hero-scroll-indicator">
        <p>Scroll down to see projects</p>
      </div>
    </section>
  );
}

export default Hero;
