import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./i18n";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About_us from "./pages/About-us";
import ScrollToTop from "./components/ScrollToTop";
import AirFreight from "./pages/Freight-Forwarding/AirFreight";
import OceanFreight from "./pages/Freight-Forwarding/OceanFreight";
import RoadFreight from "./pages/Freight-Forwarding/RoadFreight";
import SeaAirFreight from "./pages/Freight-Forwarding/SeaAirFreight";
import LinerShipping from "./pages/Other-Services/LinerShipping";

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
        <Route path="/ocean-freight" element={<OceanFreight />} />
        <Route path="/road-freight" element={<RoadFreight />} />
        <Route path="/sea-air" element={<SeaAirFreight />} />
        <Route path="/liner-shipping" element={<LinerShipping />} />

        {/* Arabic */}
        <Route path="/ar" element={<Home />} />
        <Route path="/ar/about" element={<About_us />} />
        <Route path="/ar/air-freight" element={<AirFreight />} />
        <Route path="/ar/ocean-freight" element={<OceanFreight />} />
        <Route path="/ar/road-freight" element={<RoadFreight />} />
        <Route path="/ar/liner-shipping" element={<LinerShipping />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
