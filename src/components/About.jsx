import { motion } from "framer-motion";
import "./../styles/about.css";
import bg from "../assets/about/about.jpg";

// REFINED ANIMATIONS
const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerParent = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="brand-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      {/* WRAPPER */}
      <motion.div
        className="brand-layout"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
        variants={staggerParent}
      >
        {/* LEFT SIDE */}
        <motion.div className="about-left" variants={fadeUp}>
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
            <motion.div className="card" variants={fadeUp}>
              <h2>01.</h2>
              <h3>Global Reach</h3>
              <p>
                Seamless cross-border freight services powered by our
                international logistics and supply chain network.
              </p>
            </motion.div>

            <motion.div className="card" variants={fadeUp}>
              <h2>02.</h2>
              <h3>Built on Precision</h3>
              <p>
                Every shipment is tracked, optimized and delivered with
                data-driven accuracy across all freight modes.
              </p>
            </motion.div>

            <motion.div className="card" variants={fadeUp}>
              <h2>03.</h2>
              <h3>Future Ready</h3>
              <p>
                Scalable, technology-driven logistics systems built to support
                next-generation global trade.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div className="about-right" variants={fadeRight}>
          <motion.div className="vm-block" variants={fadeUp}>
            <h3>Our Vision</h3>
            <p>
              To become a global leader in logistics and freight forwarding by
              enabling smooth, reliable and technology-driven trade across
              industries.
            </p>
          </motion.div>

          <motion.div className="vm-block" variants={fadeUp}>
            <h3>Our Mission</h3>
            <p>
              To deliver secure, efficient and cost-effective logistics
              solutions using modern supply chain practices, advanced technology
              and a dedicated professional team.
            </p>
          </motion.div>

          <motion.div className="vm-block" variants={fadeUp}>
            <h3>Our Values</h3>
            <p>
              Integrity, commitment, operational excellence and innovation to
              shape a sustainable logistics future.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
