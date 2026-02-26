import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

import "./../styles/contactUs/contactUs.css";

import Dubai from "../assets/Country/Dubai1.png";
import Saudi from "../assets/Country/Saudi1.png";
import India from "../assets/Country/India1.png";

import ServiceOffices from "../components/Services/ServiceOffices";

import { softSection, softItem } from "../animations/serviceAnimations";

function Contact_Us() {
  const { t: tComp, i18n } = useTranslation("contactUs");
  const { t: tCom } = useTranslation("servicesComponents");

  const isArabic = i18n.language === "ar";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    emailjs
      .send(
        "YOUR_SERVICE_ID", // EmailJS service id
        "YOUR_TEMPLATE_ID", // EmailJS template id
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY", // EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };

  return (
    <div style={{ direction: isArabic ? "rtl" : "ltr" }}>
      <div className="cu-wrapper">
        <div className="cu-left">
          <h1 className="cu-title">{tComp("contact.title")}</h1>
          <p className="cu-subtext">{tComp("contact.subtitle")}</p>
        </div>

        <div className="cu-right">
          <form className="cu-form" onSubmit={handleSubmit}>
            <label className="cu-label">{tComp("contact.name")}</label>
            <input
              className="cu-input"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <label className="cu-label">{tComp("contact.email")}</label>
            <input
              className="cu-input"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <label className="cu-label">{tComp("contact.message")}</label>
            <textarea
              className="cu-textarea"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>

            <div className="cu-checkbox">
              <input type="checkbox" required />
              <span>{tComp("contact.privacy")}</span>
            </div>

            <button type="submit" className="cu-btn">
              {tComp("contact.btn")}
            </button>

            <a href="https://wa.me/966553869253" className="cu-whatsapp-btn">
              {tComp("contact.whatsapp")}
            </a>
          </form>
        </div>
      </div>

      <ServiceOffices
        title1={tCom("offices.title1")}
        title2={tCom("offices.title2")}
        subtitle={tCom("offices.subtitle")}
        offices={[
          { img: Saudi, name: tCom("offices.saudi") },
          { img: India, name: tCom("offices.india") },
          { img: Dubai, name: tCom("offices.uae") },
        ]}
        softSection={softSection}
        softItem={softItem}
      />
    </div>
  );
}

export default Contact_Us;
