import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import ThemeProvider from "./theme/ThemeProvider.js";

function App() {
  return (<ThemeProvider>
    <Header />
    <Hero />
  </ThemeProvider>


  );
}

export default App;
