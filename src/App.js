import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./i18n";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About_us from "./pages/About-us";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* English */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />

        {/* Arabic */}
        <Route path="/ar" element={<Home />} />
        <Route path="/ar/about" element={<About_us />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
