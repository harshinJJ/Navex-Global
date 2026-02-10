import "./../styles/footer.css";
import { FiFacebook, FiInstagram, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation();

  // Reusable fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer>
      <hr className="footer-line" />

      <motion.section
        className="footer-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* TOP */}
        <motion.div className="footer-top" variants={fadeUp}>
          <h2 className="footer-logo">{t("footer.brand")}</h2>

          <nav className="footer-nav">
            <motion.a href="#hero" whileHover={{ x: 5 }}>
              {t("nav.home")}
            </motion.a>
            <motion.a href="#about" whileHover={{ x: 5 }}>
              {t("nav.about")}
            </motion.a>
            <motion.a href="#services" whileHover={{ x: 5 }}>
              {t("nav.services")}
            </motion.a>
            <motion.a href="#solutions" whileHover={{ x: 5 }}>
              {t("nav.solutions")}
            </motion.a>
            <motion.a href="#contact" whileHover={{ x: 5 }}>
              {t("nav.contact")}
            </motion.a>
          </nav>

          <motion.div className="footer-socials" variants={fadeUp}>
            <motion.a whileHover={{ scale: 1.15 }}>
              <FiFacebook />
            </motion.a>
            <motion.a whileHover={{ scale: 1.15 }}>
              <FiInstagram />
            </motion.a>
            <motion.a whileHover={{ scale: 1.15 }}>
              <FiX />
            </motion.a>
          </motion.div>
        </motion.div>

        <hr className="footer-line" />

        {/* BOTTOM */}
        <motion.div className="footer-bottom" variants={fadeUp}>
          <div className="footer-left">
            <p>{t("footer.copy")}</p>
            <p className="footer-small">{t("footer.tagline")}</p>
          </div>

          <motion.div className="footer-right">
            <h3 className="footer-news-title">{t("footer.subscribeTitle")}</h3>

            <motion.div className="footer-input-wrap">
              <input type="email" placeholder={t("footer.emailPlaceholder")} />

              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                {t("footer.submit")}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </footer>
  );
}
