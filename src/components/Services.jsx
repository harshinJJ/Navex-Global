import "./../styles/services.css";
import img1 from "../assets/services/img1.jpg";
import img2 from "../assets/services/img2.jpg";
import img3 from "../assets/services/img3.jpg";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">
        Our <span>Services</span>
      </h2>

      <p className="services-subtitle">
        Reliable global logistics solutions built for speed, visibility and
        efficiency.
      </p>

      <div className="services-container">
        <FadeCard
          img={img1}
          title="Global Freight Solutions"
          desc="Reliable air, sea and land freight services designed to deliver cargo safely and on time across international destinations."
        />

        <FadeCard
          img={img2}
          title="Supply Chain Management"
          desc="End-to-end supply chain optimization that enhances visibility, improves efficiency and reduces logistics costs."
        />

        <FadeCard
          img={img3}
          title="Customs Clearance & Documentation"
          desc="Fast and compliant customs processing with complete documentation support for smooth cross-border cargo movement."
        />
      </div>
    </section>
  );
}

function FadeCard({ img, title, desc }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    margin: "-20% 0px -20% 0px",
    once: false,
  });

  return (
    <motion.div
      ref={cardRef}
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}
