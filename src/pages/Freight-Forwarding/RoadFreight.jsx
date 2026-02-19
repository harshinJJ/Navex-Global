import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/Services/services.css";
import aboutHero from "../../assets/services/Airfreight.png";

function AirFreight() {
  const { t } = useTranslation("airFreight");

  const smoothReveal = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="services-wrapper">
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <motion.h1
          className="services-title"
          variants={smoothReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {t("hero.title").split(" ")[0]}{" "}
          <span className="highlight">{t("hero.title").split(" ")[1]}</span>
        </motion.h1>
      </section>
    </div>
  );
}

export default AirFreight;
