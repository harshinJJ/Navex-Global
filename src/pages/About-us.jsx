import "./../styles/aboutPage.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutHero from "../assets/Aboutus/about-hero.png";

export default function About_us() {
  const { t } = useTranslation("aboutPage");

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <div className="about-wrapper">
      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="about-title"
        >
          {t("title")}
        </motion.h1>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="about-card"
        >
          <h2>{t("who.title")}</h2>
          <p>{t("who.text")}</p>
        </motion.div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="about-section">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="about-card"
        >
          <h2>{t("different.title")}</h2>
          <p>{t("different.text")}</p>
        </motion.div>
      </section>

      {/* STRENGTHS GRID */}
      <section className="strengths-grid">
        {["global", "tech", "support", "safety"].map((key) => (
          <motion.div
            key={key}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="strength-box"
          >
            <h3>{t(`strengths.${key}.title`)}</h3>
            <p>{t(`strengths.${key}.text`)}</p>
          </motion.div>
        ))}
      </section>

      {/* FUTURE */}
      <section className="future-section">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="future-card"
        >
          <h2>{t("future.title")}</h2>
          <p>{t("future.text")}</p>
        </motion.div>
      </section>
    </div>
  );
}
