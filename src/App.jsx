import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Education from "./Component/Education/Education";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Projects from "./Component/Projects/Projects";
import Skills from "./Component/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar></Navbar> 
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      
      <Footer></Footer>
    </>
  );
};

export default App;
