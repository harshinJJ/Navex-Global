import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/Services/services.css";
import serviceHero from "../../assets/services/Airfreight.png";
import whybg from "../../assets/services/logistics.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import {
  FaCogs,
  FaGlobe,
  FaShieldAlt,
  FaHeadset,
  FaCalendarCheck,
  FaBoxOpen,
  FaTruckMoving,
  FaCheckCircle,
} from "react-icons/fa";

function AirFreight() {
  const { t, i18n } = useTranslation("airFreight");
  const isArabic = i18n.language === "ar";

  /* ---------------- PREMIUM ANIMATIONS ---------------- */

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

  const softSection = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const softStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const softItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  /* ---------------- COMPONENT ---------------- */

  return (
    <div
      className="services-wrapper"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ textAlign: isArabic ? "right" : "left" }}
    >
      {/* HERO */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${serviceHero})` }}
      >
        <motion.h1
          className="services-title"
          variants={smoothReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {t("hero.title").split(" ")[0]}{" "}
          <span className="highlight">{t("hero.title").split(" ")[1]}</span>
        </motion.h1>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container services-grid">
          {/* LEFT SIDE */}
          <motion.div
            className="services-left"
            variants={softStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 className="services-heading" variants={softItem}>
              {t("heading")}
            </motion.h2>

            <motion.h4 className="services-subheading" variants={softItem}>
              {t("subheading")}
            </motion.h4>

            <motion.p variants={softItem}>{t("p1")}</motion.p>
            <motion.p variants={softItem}>{t("p2")}</motion.p>
            <motion.p variants={softItem}>{t("p3")}</motion.p>
            <motion.p variants={softItem}>{t("p4")}</motion.p>
            <motion.p variants={softItem}>{t("p5")}</motion.p>
          </motion.div>

          {/* PROCESS SECTION */}
          <motion.div
            className="process-box"
            variants={softSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="process-label">{t("process.title")}</h3>

            <motion.div
              className="process-flow"
              variants={softStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Step 1 */}
              <motion.div className="process-item" variants={softItem}>
                <FaCalendarCheck className="process-icon" />
                <p>{t("process.book")}</p>
              </motion.div>

              {/* Arrow */}
              <motion.div variants={softItem}>
                {isArabic ? (
                  <FaArrowLeftLong className="process-arrow" />
                ) : (
                  <FaArrowRightLong className="process-arrow" />
                )}
              </motion.div>

              {/* Step 2 */}
              <motion.div className="process-item" variants={softItem}>
                <FaBoxOpen className="process-icon" />
                <p>{t("process.pack")}</p>
              </motion.div>

              {/* Arrow */}
              <motion.div variants={softItem}>
                {isArabic ? (
                  <FaArrowLeftLong className="process-arrow" />
                ) : (
                  <FaArrowRightLong className="process-arrow" />
                )}
              </motion.div>

              {/* Step 3 */}
              <motion.div className="process-item" variants={softItem}>
                <FaTruckMoving className="process-icon" />
                <p>{t("process.move")}</p>
              </motion.div>

              {/* Arrow */}
              <motion.div variants={softItem}>
                {isArabic ? (
                  <FaArrowLeftLong className="process-arrow" />
                ) : (
                  <FaArrowRightLong className="process-arrow" />
                )}
              </motion.div>

              {/* Step 4 */}
              <motion.div className="process-item" variants={softItem}>
                <FaCheckCircle className="process-icon" />
                <p>{t("process.delivery")}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section
        className="why-card-section"
        style={{ backgroundImage: `url(${whybg})` }}
      >
        <div className="why-card-overlay">
          <div className="container">
            <motion.h3
              className="why-card-title"
              variants={softSection}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {t("why.title1")}{" "}
              <span className="brand-highlight">{t("why.title2")}</span>
            </motion.h3>

            <motion.div
              className="why-card-grid"
              variants={softStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div className="why-card" variants={softItem}>
                <div className="why-icon">
                  <FaCogs />
                </div>
                <h4>{t("why.card1.title")}</h4>
                <p>{t("why.card1.text")}</p>
              </motion.div>

              <motion.div className="why-card" variants={softItem}>
                <div className="why-icon">
                  <FaGlobe />
                </div>
                <h4>{t("why.card2.title")}</h4>
                <p>{t("why.card2.text")}</p>
              </motion.div>

              <motion.div className="why-card" variants={softItem}>
                <div className="why-icon">
                  <FaShieldAlt />
                </div>
                <h4>{t("why.card3.title")}</h4>
                <p>{t("why.card3.text")}</p>
              </motion.div>

              <motion.div className="why-card" variants={softItem}>
                <div className="why-icon">
                  <FaHeadset />
                </div>
                <h4>{t("why.card4.title")}</h4>
                <p>{t("why.card4.text")}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AirFreight;
