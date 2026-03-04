import Button1 from "../Buttons/Button1";
import DesignCard from "./DesignCard";
import "./DesignProcess.css";
function DesignProcess() {
  return (
    <section className="design-container">
      <div className="design-img-container">
        <img
          src="/src/Images/Process/p2/p6Im6dfknHAI0ig4NqDcO4WNpc.avif"
          alt=""
        />
      </div>

      <div className="design-card-container">
        <div className="design-hero">
          {/* <button className="design-btn">Design Process</button> */}
          <h1>PROCESS</h1>
          <p>
            crafting bold visuals that inspire and elevate brands with thought
            process.
          </p>
          <div>
            <Button1 text={"Book a Free Call"} />
            <Button1 text={"See Project"} />
          </div>
          {/* <hr /> */}
        </div>
        <DesignCard
          cardIcon={<i class="fa-solid fa-lightbulb"></i>}
          cardTitle="Define Your Vision"
          cardDescription="Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly."
        />
        <DesignCard
          cardIcon={<i class="fa-solid fa-bars"></i>}
          cardTitle="Submit Your Request"
          cardDescription="Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity."
        />
        <DesignCard
          cardIcon={<i class="fa-solid fa-rocket"></i>}
          cardTitle="Project Delivered"
          cardDescription="As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations."
        />
      </div>
    </section>
  );
}

export default DesignProcess;
