import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Contact from "./Component/Contact/Contact";
import Education from "./Component/Education/Education";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Projects from "./Component/Projects/Projects";
import Skills from "./Component/Skills/Skills";
import Blog from './Component/Blog/Blog';

const App = () => {
  return (
    <div className="text-white">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
