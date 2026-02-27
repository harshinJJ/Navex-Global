import { motion } from "framer-motion";

function ServiceOffices({
  title1,
  title2,
  subtitle,
  offices,
  softSection,
  softItem,
}) {
  return (
    <section className="offices-section">
      <motion.div
        className="offices-title"
        variants={softSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>
          {title1} <span className="highlight">{title2}</span>
        </h2>
        <p>{subtitle}</p>
      </motion.div>

      <div className="offices-container">
        {offices.map((office, i) => (
          <motion.div
            className="office-card"
            key={i}
            variants={softItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <img src={office.img} alt={office.name} className="office-img" />
            <h3>{office.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServiceOffices;
