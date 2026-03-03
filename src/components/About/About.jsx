import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* LEFT SIDE */}
      <div className="about-left">
        <h1 className="about-title">About Teonvo</h1>

        <p className="about-desc">
          I'm Meily, a passionate Brand Identity & Package Designer based in
          Tokyo. I specialize in crafting bold visual identities and packaging
          that captivate and inspire, blending creativity with strategy to
          elevate brands.
        </p>

        {/* Skills */}
        <div className="skills">
          {[
            "Product Design",
            "Brand Identity Design",
            "UX Design",
            "Branding",
            "Packaging Design",
            "Figma",
            "Photoshop",
          ].map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          ))}
        </div>

        {/* Experience */}
        <div className="experience">
          <div className="exp-row">
            <span>Freelance</span>
            <span>GreenLeaf Co</span>
            <span>Currently</span>
          </div>

          <div className="exp-row">
            <span>Brand Designer</span>
            <span>UrbanFit Studio</span>
            <span>2023-24</span>
          </div>

          <div className="exp-row">
            <span>Package Designer</span>
            <span>GreenK Studio</span>
            <span>2020-22</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <img
          src="/src/Images/aboutme/1pQuu3beVo9Qb0dmelr6VUCaxo.avif"
          alt="Profile"
        />
      </div>
    </section>
  );
};

export default About;
