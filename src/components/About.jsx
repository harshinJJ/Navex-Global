import { motion } from "framer-motion";
import "./../styles/about.css";
import bg from "../assets/about/about.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="brand-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <div className="brand-layout">
        {/* LEFT MAIN CONTENT */}
        <motion.div
          className="about-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            Moving Businesses <br /> <span>Beyond Borders</span>
          </h1>

          <p className="intro-text">
            We provide international logistics, freight forwarding and global
            cargo shipping solutions designed for modern businesses. Our team
            ensures every shipment is handled with clarity, speed and complete
            precision across air, sea and road networks.
          </p>

          {/* THREE BLACK CARDS */}
          <div className="info-cards">
            <motion.div
              className="card"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>01.</h2>
              <h3>Global Reach</h3>
              <p>
                Seamless cross-border freight services powered by our
                international logistics and supply chain network.
              </p>
            </motion.div>

            <motion.div
              className="card"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>02.</h2>
              <h3>Built on Precision</h3>
              <p>
                Every shipment is tracked, optimized and delivered with
                data-driven accuracy across all freight modes.
              </p>
            </motion.div>

            <motion.div
              className="card"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>03.</h2>
              <h3>Future Ready</h3>
              <p>
                Scalable, technology-driven logistics systems built to support
                next-generation global trade.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT VISION / MISSION / VALUES */}
        <motion.div
          className="about-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="vm-block"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Vision</h3>
            <p>
              To become a global leader in logistics and freight forwarding by
              enabling smooth, reliable and technology-driven trade across
              industries.
            </p>
          </motion.div>

          <motion.div
            className="vm-block"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Mission</h3>
            <p>
              To deliver secure, efficient and cost-effective logistics
              solutions using modern supply chain practices, advanced technology
              and a dedicated professional team.
            </p>
          </motion.div>

          <motion.div
            className="vm-block"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Values</h3>
            <p>
              Integrity, commitment, operational excellence and innovation to
              shape a sustainable logistics future.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
