import AboutMe from "./components/AboutMe.js";
import CustomScrollbar from "./components/CustomScrollbar.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import MyStack from "./components/MyStack.js";
import Projects from "./components/Projects.js";
import ThemeProvider from "./theme/ThemeProvider.js";

function App() {
  return (<ThemeProvider>
    <Header />
    <CustomScrollbar />
    <Hero />
    <Projects />
    <MyStack />
    <AboutMe />
  </ThemeProvider>


  );
}

export default App;
