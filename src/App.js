import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./i18n";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About_us from "./pages/About-us";
import ScrollToTop from "./components/ScrollToTop";
import AirFreight from "./pages/Freight-Forwarding/AirFreight";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* English */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/air-freight" element={<AirFreight />} />
        {/* Arabic */}
        <Route path="/ar" element={<Home />} />
        <Route path="/ar/about" element={<About_us />} />
        <Route path="/ar/air-freight" element={<AirFreight />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
