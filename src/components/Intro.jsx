import { motion } from "framer-motion";
import "./../styles/intro.css";

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <motion.div
          className="intro-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="intro-heading">
            Built For <span>Global Movement</span>
          </h2>

          <p className="intro-subtext">
            Navex Global runs logistics operations engineered for speed,
            accuracy and worldwide reach — ensuring your cargo moves without
            delays, friction or uncertainty.
          </p>
          {/* 
            <div className="intro-stats">
              <div className="stat-box">
                <h3>40+</h3>
                <p>Countries Covered</p>
              </div>

              <div className="stat-box">
                <h3>12K+</h3>
                <p>Shipments Managed</p>
              </div>

              <div className="stat-box">
                <h3>24/7</h3>
                <p>Support & Tracking</p>
              </div>
            </div>
            */}
        </motion.div>

        <motion.div
          className="intro-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="intro-image"></div>
          <div className="floating-card">
            <h4>Trusted by Global Brands</h4>
            <p>Your cargo, handled with precision.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
