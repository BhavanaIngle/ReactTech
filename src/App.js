import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Work from "./components/work/Work";
import Publication from "./components/publications/Publications";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/publications" element={<Publication />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
