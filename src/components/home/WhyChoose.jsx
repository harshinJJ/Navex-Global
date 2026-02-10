import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/whychoose.css";
import worldMap from "../../assets/whychoose/world-dark-lines.png";

export default function WhyChoose() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`next-section ${i18n.language === "ar" ? "rtl-mode" : ""}`}
    >
      <div className="next-wrapper">
        {/* LEFT */}
        <motion.div
          className="next-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="next-title">
            {t("why.heading1")}
            <br /> {t("why.heading2")}
          </motion.h2>

          <motion.p className="next-sub">{t("why.subtext")}</motion.p>

          <motion.button className="next-btn">
            {t("common.contact")}
          </motion.button>
        </motion.div>

        {/* RIGHT MAP */}
        <motion.div
          className="next-right"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img src={worldMap} alt="world map" className="next-map" />
        </motion.div>
      </div>
    </section>
  );
}
