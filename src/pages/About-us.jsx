import "./../styles/aboutus/aboutPage.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutHero from "../assets/Aboutus/about-hero.png";
import aboutcard1 from "../assets/Aboutus/aboutuscard1.png";
import aboutusbg from "../assets/Aboutus/about-us-bg.png";

import { FaShip, FaBoxes, FaUsers } from "react-icons/fa";

export default function About_us() {
  const { t } = useTranslation("aboutPage");

  /* Premium Animation Variants */

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  /* Animated Progress Bar Component */

  const ProgressBar = ({ label, value }) => {
    return (
      <motion.div
        className="progress-item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <div className="progress-header">
          <span>{label}</span>
          <span>{value}%</span>
        </div>

        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            variants={{
              hidden: { width: 0 },
              visible: {
                width: `${value}%`,
                transition: {
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="about-wrapper">
      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <motion.h1
          className="about-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {t("title").split(" ")[0]}{" "}
          <span className="highlight">{t("title").split(" ")[1]}</span>
        </motion.h1>
      </section>

      {/* VALUES SECTION */}
      <section className="values-section">
        <div className="values-container">
          <motion.div
            className="values-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.span className="values-tag" variants={fadeUp}>
              {t("whoTag")}
            </motion.span>

            <motion.h2 className="values-title" variants={fadeUp}>
              {t("whoTitle")}
            </motion.h2>

            <motion.div className="values-list">
              <motion.div className="values-row" variants={fadeUp}>
                <div className="values-icon">
                  <FaShip />
                </div>
                <div>
                  <h3>{t("block1Title")}</h3>
                  <p>{t("block1Desc")}</p>
                </div>
              </motion.div>

              <motion.div className="values-row" variants={fadeUp}>
                <div className="values-icon">
                  <FaBoxes />
                </div>
                <div>
                  <h3>{t("block2Title")}</h3>
                  <p>{t("block2Desc")}</p>
                </div>
              </motion.div>

              <motion.div className="values-row" variants={fadeUp}>
                <div className="values-icon">
                  <FaUsers />
                </div>
                <div>
                  <h3>{t("block3Title")}</h3>
                  <p>{t("block3Desc")}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="values-right"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={aboutcard1} alt="Navex Team" />
          </motion.div>
        </div>
      </section>

      {/* PERFORMANCE SECTION */}
      <section
        className="performance-section"
        style={{ backgroundImage: `url(${aboutusbg})` }}
      >
        <div className="performance-overlay"></div>

        <div className="performance-container">
          {/* TOP ROW */}
          <motion.div
            className="performance-top"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <motion.h2
              className="performance-title"
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {t("performanceTitle")}
            </motion.h2>

            <motion.p
              className="performance-desc"
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {t("performanceDesc")}
            </motion.p>
          </motion.div>

          {/* PROGRESS AREA */}
          <div className="performance-progress-wrapper">
            <div className="progress-column">
              <ProgressBar label={t("metric1")} value={98} />
              <ProgressBar label={t("metric2")} value={94} />
              <ProgressBar label={t("metric3")} value={96} />
            </div>

            <div className="progress-column">
              <ProgressBar label={t("metric4")} value={99} />
              <ProgressBar label={t("metric5")} value={97} />
              <ProgressBar label={t("metric6")} value={95} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
