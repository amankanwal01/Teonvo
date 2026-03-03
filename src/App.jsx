import About from "./components/About/About";
import Brands from "./components/Brand/Brands";
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
      <About />
      <RecentWorks />
    </div>
  );
}
export default App;
