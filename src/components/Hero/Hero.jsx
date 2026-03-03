import Brands from "../Brand/Brands";
import Button1 from "../Buttons/Button1";
import "./Hero.css";
import heroVideo from "/src/Video/vecteezy_dark-liquid-beautiful-motion-flow-animation-black-wavy_6995865.mp4";

function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <span className="hero-subtitle">Crafting Unique Brand Identities</span>

        <h1 className="hero-title">
          Teonvo Branding <br />
          that{" "}
          <span style={{ color: "#737373" }}>
            you need <br />
          </span>
          Indeed
        </h1>

        <p className="hero-description">
          Elevate your brand with custom identity and package design. Showcase
          your story through bold visuals and strategic design solutions.
        </p>

        <div className="hero-btns">
          <Button1 text={"Get Started Now"} />
          <Button1 text={"See Projects"} />
        </div>
      </div>
      <Brands />
    </section>
  );
}

export default Hero;
