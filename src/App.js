import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carousel from "./components/carousel/carousel";
import Section from "./components/section/section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
