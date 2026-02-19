import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/Services/services.css";
import serviceHero from "../../assets/services/Airfreight.png";
import whybg from "../../assets/services/logistics.png";

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

import { FaArrowRightLong } from "react-icons/fa6";

function AirFreight() {
  const { t, i18n } = useTranslation("airFreight");
  const isArabic = i18n.language === "ar";

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };
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

  const staggerParent = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const childFade = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
      className="services-wrapper"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ textAlign: isArabic ? "right" : "left" }}
    >
      {/* HERO */}
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
          {/* LEFT SIDE – paragraph-wise animation */}
          <motion.div
            className="services-left"
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 className="services-heading" variants={childFade}>
              {t("heading")}
            </motion.h2>

            <motion.h4 className="services-subheading" variants={childFade}>
              {t("subheading")}
            </motion.h4>

            <motion.p variants={childFade} transition={{ delay: 0.1 }}>
              {t("p1")}
            </motion.p>

            <motion.p variants={childFade} transition={{ delay: 0.25 }}>
              {t("p2")}
            </motion.p>

            <motion.p variants={childFade} transition={{ delay: 0.4 }}>
              {t("p3")}
            </motion.p>

            <motion.p variants={childFade} transition={{ delay: 0.55 }}>
              {t("p4")}
            </motion.p>

            <motion.p variants={childFade} transition={{ delay: 0.7 }}>
              {t("p5")}
            </motion.p>
          </motion.div>

          {/* PROCESS SECTION */}
          <motion.div
            className="process-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="process-label">{t("process.title")}</h3>

            <motion.div
              className="process-flow"
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div className="process-item" variants={childFade}>
                <FaCalendarCheck className="process-icon" />
                <p>{t("process.book")}</p>
              </motion.div>

              <motion.div variants={childFade}>
                <FaArrowRightLong className="process-arrow" />
              </motion.div>

              <motion.div className="process-item" variants={childFade}>
                <FaBoxOpen className="process-icon" />
                <p>{t("process.pack")}</p>
              </motion.div>

              <motion.div variants={childFade}>
                <FaArrowRightLong className="process-arrow" />
              </motion.div>

              <motion.div className="process-item" variants={childFade}>
                <FaTruckMoving className="process-icon" />
                <p>{t("process.move")}</p>
              </motion.div>

              <motion.div variants={childFade}>
                <FaArrowRightLong className="process-arrow" />
              </motion.div>

              <motion.div className="process-item" variants={childFade}>
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("why.title1")}{" "}
              <span className="brand-highlight">{t("why.title2")}</span>
            </motion.h3>

            <motion.div
              className="why-card-grid"
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div className="why-card" variants={childFade}>
                <div className="why-icon">
                  <FaCogs />
                </div>
                <h4>{t("why.card1.title")}</h4>
                <p>{t("why.card1.text")}</p>
              </motion.div>

              <motion.div className="why-card" variants={childFade}>
                <div className="why-icon">
                  <FaGlobe />
                </div>
                <h4>{t("why.card2.title")}</h4>
                <p>{t("why.card2.text")}</p>
              </motion.div>

              <motion.div className="why-card" variants={childFade}>
                <div className="why-icon">
                  <FaShieldAlt />
                </div>
                <h4>{t("why.card3.title")}</h4>
                <p>{t("why.card3.text")}</p>
              </motion.div>

              <motion.div className="why-card" variants={childFade}>
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
