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
            Smart, reliable and globally connected logistics solutions crafted
            for modern business needs. We ensure every shipment moves with
            clarity, speed and absolute precision.
          </p>

          {/* THREE BLACK CARDS */}
          <motion.div
            className="info-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: false }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
          >
            <motion.div
              className="card"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>01.</h2>
              <h3>Global Reach</h3>
              <p>
                Seamless freight movement across borders supported by our strong
                international logistics network.
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
                Every shipment is monitored, optimized and executed with
                accurate, data-driven control.
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
                Scalable systems and technology-driven operations built for the
                next generation of global trade.
              </p>
            </motion.div>
          </motion.div>
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
              To emerge as a globally valuable logistics provider, enabling
              seamless trade through reliability, innovation and excellence.
            </p>
          </motion.div>

          <motion.div
            className="vm-block"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Mission</h3>
            <p>
              To provide efficient, secure and cost-effective logistics services
              by leveraging industry best practices, technology-driven processes
              and a highly dedicated professional team.
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
