import AboutMe from "./components/AboutMe.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import MyStack from "./components/MyStack.js";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Services from "./components/Services.js";
import ThemeProvider from "./theme/ThemeProvider.js";
import CustomScrollbar from "./utility/CustomScrollbar.js";

function App() {
  return (<ThemeProvider>
    <Header />
    <CustomScrollbar />
    <Hero />
    <Projects />
    {/* <MyStack /> */}
    <AboutMe />
    <Services />
    <Resume />
    <Contact />
    <Footer />
  </ThemeProvider>


  );
}

export default App;
