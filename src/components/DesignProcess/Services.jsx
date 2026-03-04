import About from "../About/About";
import "./Service.css";
function Service() {
  return (
    <div className="service-container">
      <About
        title={"Services"}
        description={
          "Helping businesses stand out with strategic brand identity and packaging solutions that captivate audiences, build trust, and convert customers into loyal brand advocates. From concept to execution, I craft visually compelling designs that communicate your story, elevate your market presence, and drive measurable growth."
        }
        skills={[
          "Product Design",
          "Brand Identity Design",
          "Branding",
          "Packging Design",
          "Mochup Design",
        ]}
      />
      <div className="service-right">
        <img
          src="/src/Images/RecentWork/JGI1jOpxUUfW0IRfPmx7eMGhc.avif"
          alt="service"
        />
      </div>
    </div>
  );
}

export default Service;
