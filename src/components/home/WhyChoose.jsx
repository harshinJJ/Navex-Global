import { motion } from "framer-motion";
import "../../styles/whychoose.css";
import worldMap from "../../assets/whychoose/world-dark-lines.png";

export default function WhyChoose() {
  const items = [
    {
      title: "FAST DELIVERY",
      desc: "Association with us promises a faster delivery of your cargo via sea, air, and road.",
    },
    {
      title: "24 / 7 SUPPORT",
      desc: "Our throughout support helps customers to track their orders and other information.",
    },
    {
      title: "SECURED SERVICES",
      desc: "We ensure the transportation services we offer are highly secured and professional.",
    },
    {
      title: "AFFORDABLE PRICE",
      desc: "Our cost-effective logistics solutions help you realize your transportation needs.",
    },
  ];

  return (
    <section className="next-section">
      <div className="next-wrapper">
        {/* LEFT WITH ANIMATION */}
        <motion.div
          className="next-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="next-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ready To Get Started?
            <br /> Let's Talk Today
          </motion.h2>

          <motion.p
            className="next-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We make everything simple, fast, and reliable for businesses of all
            sizes.
          </motion.p>

          <motion.button
            className="next-btn"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* RIGHT MAP ANIMATION */}
        <motion.div
          className="next-right"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={worldMap}
            alt="world map"
            className="next-map"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 0.55, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
