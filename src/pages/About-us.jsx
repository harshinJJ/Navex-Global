import "./../styles/aboutus/aboutPage.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutHero from "../assets/Aboutus/about-hero.png";
import aboutcard1 from "../assets/Aboutus/aboutuscard1.png";
import aboutusbg from "../assets/Aboutus/about-us-bg.png";
import { FaShip, FaBoxes, FaUsers } from "react-icons/fa";

export default function About_us() {
  const { t } = useTranslation("aboutPage");

  /* ==============================
     ONE UNIFIED ANIMATION SYSTEM
  ============================== */

  const smoothReveal = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const smoothStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  /* ==============================
     PROGRESS BAR COMPONENT
  ============================== */

  const ProgressBar = ({ label, value }) => {
    return (
      <motion.div
        className="progress-item"
        variants={smoothReveal}
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
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: false }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="about-wrapper">
      {/* ================= HERO ================= */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <motion.h1
          className="about-title"
          variants={smoothReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {t("title").split(" ")[0]}{" "}
          <span className="highlight">{t("title").split(" ")[1]}</span>
        </motion.h1>
      </section>

      {/* ================= VALUES ================= */}
      <section className="about-values-section">
        <div className="about-values-container">
          <motion.div
            className="about-values-left"
            variants={smoothStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.span className="about-values-tag" variants={smoothReveal}>
              {t("whoTag")}
            </motion.span>

            <motion.h2 className="about-values-title" variants={smoothReveal}>
              {t("whoTitle")}
            </motion.h2>

            <motion.div className="about-values-list">
              {[
                {
                  icon: <FaShip />,
                  title: t("block1Title"),
                  desc: t("block1Desc"),
                },
                {
                  icon: <FaBoxes />,
                  title: t("block2Title"),
                  desc: t("block2Desc"),
                },
                {
                  icon: <FaUsers />,
                  title: t("block3Title"),
                  desc: t("block3Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="about-values-row"
                  variants={smoothReveal}
                >
                  <div className="about-values-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-values-right"
            variants={smoothReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={aboutcard1} alt="About" />
          </motion.div>
        </div>
      </section>

      {/* ================= PERFORMANCE ================= */}
      <section
        className="about-performance-section"
        style={{ backgroundImage: `url(${aboutusbg})` }}
      >
        <div className="about-performance-overlay"></div>

        <div className="about-performance-container">
          <motion.div
            className="about-performance-top"
            variants={smoothStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="about-performance-title"
              variants={smoothReveal}
            >
              {t("performanceTitle")}
            </motion.h2>

            <motion.p
              className="about-performance-desc"
              variants={smoothReveal}
            >
              {t("performanceDesc")}
            </motion.p>
          </motion.div>

          <div className="about-performance-progress-wrapper">
            <div className="about-progress-column">
              <ProgressBar label={t("metric1")} value={98} />
              <ProgressBar label={t("metric2")} value={94} />
              <ProgressBar label={t("metric3")} value={96} />
            </div>

            <div className="about-progress-column">
              <ProgressBar label={t("metric4")} value={99} />
              <ProgressBar label={t("metric5")} value={97} />
              <ProgressBar label={t("metric6")} value={95} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="about-team-section">
        <div className="about-team-container">
          <motion.div
            className="about-team-left"
            variants={smoothReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="about-team-tag">OUR TEAM</span>

            <h2 className="about-team-title">
              Meet With <br /> Expert Team
            </h2>

            <p className="about-team-desc">
              Our leadership team brings deep industry knowledge, operational
              precision, and global logistics expertise.
            </p>
          </motion.div>

          <motion.div
            className="about-team-grid"
            variants={smoothStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              { initial: "AF", name: "Abu Falah", role: "Operations Director" },
              { initial: "BA", name: "Badr", role: "Supply Chain Manager" },
              { initial: "AS", name: "Ashiq", role: "Logistics Coordinator" },
              { initial: "SH", name: "Shahin", role: "IT Support" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="about-team-card"
                variants={smoothReveal}
                whileHover={{ scale: 1.03 }}
              >
                <div className="about-team-initial">{member.initial}</div>

                <div className="about-team-content">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
