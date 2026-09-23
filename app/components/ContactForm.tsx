"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation, getFormattedTimestamp, Locale } from "@/lib/useTranslation";

export interface ContactFormProps {
  lang?: Locale;
}

export default function ContactForm({ lang: propLang }: ContactFormProps) {
  const router = useRouter();
  const { t, lang: contextLang, localizeUrl } = useTranslation();
  const currentLang = propLang || contextLang;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isEn = currentLang === "en";
  const formName = isEn ? "contact-en" : currentLang === "ar" ? "contact-ar" : "contact";
  const emailSubject = t("contactForm.emailSubject", "Nouvelle demande de contact");

  const fields = isEn
    ? { name: "name", phone: "phone", email: "email", subject: "topic", message: "message" }
    : { name: "nom", phone: "telephone", email: "email", subject: "objet", message: "message" };

  const subjectOptions = [
    { value: isEn ? "Request Information" : "Demande d'information", label: t("contactForm.subjects.info", "Demande d'information") },
    { value: isEn ? "Request Quote" : "Demande de devis", label: t("contactForm.subjects.quote", "Demande de devis") },
    { value: isEn ? "Booking" : "Réservation", label: t("contactForm.subjects.reservation", "Réservation") }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("form-name", formName);
      formData.set("subject", emailSubject);
      if (typeof window !== "undefined") {
        formData.set("pageUrl", window.location.href);
        formData.set("timestamp", getFormattedTimestamp(currentLang));
      }

      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, value.toString());
      }

      const res = await fetch("/form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      });

      if (res.ok) {
        router.push(localizeUrl("/merci-contact"));
      } else {
        throw new Error("Erreur réseau");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage(t("contactForm.errorMessage", "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."));
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="elementor-form"
      method="post"
      name={formName}
      aria-label="Contact Form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value="" />
      <div className="elementor-form-fields-wrapper elementor-labels-">
        {/* Name */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50 elementor-field-required">
          <label htmlFor="form-field-name" className="elementor-field-label">
            {t("contactForm.nameLabel", "Nom")}
          </label>
          <input
            size={1}
            type="text"
            name={fields.name}
            id="form-field-name"
            className="elementor-field elementor-size-md elementor-field-textual"
            placeholder={t("contactForm.namePlaceholder", "Nom")}
            required
            aria-required="true"
          />
        </div>

        {/* Phone */}
        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-telephone elementor-col-50 elementor-field-required">
          <label htmlFor="form-field-telephone" className="elementor-field-label">
            {t("contactForm.phoneLabel", "Téléphone")}
          </label>
          <input
            size={1}
            type="tel"
            name={fields.phone}
            id="form-field-telephone"
            className="elementor-field elementor-size-md elementor-field-textual"
            placeholder={t("contactForm.phonePlaceholder", "Téléphone")}
            required
            aria-required="true"
            pattern="[0-9\s\+\-\(\)]*"
            title={t("contactForm.phoneTitle", "Seuls les caractères de numéros de téléphone (#, -, *, etc.) sont acceptés.")}
          />
        </div>

        {/* Email */}
        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
          <label htmlFor="form-field-email" className="elementor-field-label">
            {t("contactForm.emailLabel", "E-mail")}
          </label>
          <input
            size={1}
            type="email"
            name={fields.email}
            id="form-field-email"
            className="elementor-field elementor-size-md elementor-field-textual"
            placeholder={t("contactForm.emailPlaceholder", "E-mail")}
            required
            aria-required="true"
          />
        </div>

        {/* Subject */}
        <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_9c5a176 elementor-col-50">
          <label htmlFor="form-field-field_9c5a176" className="elementor-field-label">
            {t("contactForm.subjectLabel", "Objet de la demande")}
          </label>
          <div className="elementor-field elementor-select-wrapper remove-before">
            <div className="select-caret-down-wrapper">
              <svg aria-hidden="true" className="e-font-icon-svg e-eicon-caret-down" viewBox="0 0 571.4 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M571.4 392.9c0 14.3-5.4 28.6-16.1 39.3L298.1 689.3c-10.7 10.7-25 16.1-39.3 16.1s-28.6-5.4-39.3-16.1L16.1 432.1c-21.4-21.4-21.4-57.1 0-78.6s57.1-21.4 78.6 0l203.6 203.6 203.6-203.6c21.4-21.4 57.1-21.4 78.6 0 10.7 10.7 16.1 25 16.1 39.4z" />
              </svg>
            </div>
            <select
              name={fields.subject}
              id="form-field-field_9c5a176"
              className="elementor-field-textual elementor-size-md"
            >
              {subjectOptions.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
          <label htmlFor="form-field-message" className="elementor-field-label">
            {t("contactForm.messageLabel", "Message")}
          </label>
          <textarea
            className="elementor-field-textual elementor-field elementor-size-md"
            name={fields.message}
            id="form-field-message"
            rows={4}
            placeholder={t("contactForm.messagePlaceholder", "Message")}
            required
            aria-required="true"
          />
        </div>

        {/* Submit */}
        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
          <button
            type="submit"
            className="elementor-button elementor-size-md"
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
          >
            <span>
              <span className="elementor-button-icon"></span>
              <span className="elementor-button-text">
                {isSubmitting
                  ? t("contactForm.submitting", "Envoi en cours...")
                  : t("contactForm.submitBtn", "J'envoie ma demande")}
              </span>
            </span>
          </button>
        </div>

        {errorMessage && (
          <div
            className="elementor-message elementor-message-danger"
            role="alert"
            style={{ width: "100%", marginTop: "15px", color: "#d9534f" }}
          >
            {errorMessage}
          </div>
        )}
      </div>
    </form>
  );
}
