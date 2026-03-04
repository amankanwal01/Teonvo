// import About from "./components/About/AboutMe";
import AboutMe from "./components/About/Aboutme";
import Brands from "./components/Brand/Brands";
import DesignProcess from "./components/DesignProcess/DesignProcess";
import Service from "./components/DesignProcess/Services";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Process from "./components/Process/Process";
import RecentWorks from "./components/RecentWorks/RecentWorks";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Process />
      <AboutMe />
      <RecentWorks />
      <DesignProcess />
      <Service />
    </div>
  );
}
export default App;
