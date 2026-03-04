function About({ title, description, skills }) {
  return (
    <div className="about-left">
      <h1 className="about-title">{title}</h1>

      <p className="about-desc">{description}</p>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;
