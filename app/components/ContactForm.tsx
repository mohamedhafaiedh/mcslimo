"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Phone,
  Mail,
  HelpCircle,
  MessageSquare,
  ChevronDown
} from "lucide-react";
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

  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({
    [fields.name]: "",
    [fields.phone]: "",
    [fields.email]: "",
    [fields.subject]: subjectOptions[0].value,
    [fields.message]: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFieldValues((prev) => ({ ...prev, [name]: value }));
  };

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

  const nameVal = fieldValues[fields.name] || "";
  const phoneVal = fieldValues[fields.phone] || "";
  const emailVal = fieldValues[fields.email] || "";
  const subjectVal = fieldValues[fields.subject] || subjectOptions[0].value;
  const messageVal = fieldValues[fields.message] || "";

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
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.name ? "is-focused" : ""
            } ${nameVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <User size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-name" className="floating-label">
              {t("contactForm.nameLabel", "Nom")}
            </label>
            <input
              type="text"
              name={fields.name}
              id="form-field-name"
              className="floating-input-control"
              placeholder={t("contactForm.namePlaceholder", "Nom")}
              value={nameVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.name)}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={t("contactForm.nameLabel", "Nom")}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-telephone elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.phone ? "is-focused" : ""
            } ${phoneVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Phone size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-telephone" className="floating-label">
              {t("contactForm.phoneLabel", "Téléphone")}
            </label>
            <input
              type="tel"
              name={fields.phone}
              id="form-field-telephone"
              className="floating-input-control"
              placeholder={t("contactForm.phonePlaceholder", "Téléphone")}
              value={phoneVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.phone)}
              onBlur={() => setFocusedField(null)}
              required={true}
              pattern="[0-9()#&+*-=.\s]+"
              title={t("contactForm.phoneTitle", "Seuls les caractères de numéros de téléphone (#, -, *, etc.) sont acceptés.")}
              aria-label={t("contactForm.phoneLabel", "Téléphone")}
            />
          </div>
        </div>

        {/* Email */}
        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.email ? "is-focused" : ""
            } ${emailVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Mail size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-email" className="floating-label">
              {t("contactForm.emailLabel", "E-mail")}
            </label>
            <input
              type="email"
              name={fields.email}
              id="form-field-email"
              className="floating-input-control"
              placeholder={t("contactForm.emailPlaceholder", "E-mail")}
              value={emailVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.email)}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={t("contactForm.emailLabel", "E-mail")}
            />
          </div>
        </div>

        {/* Subject */}
        <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_9c5a176 elementor-col-50">
          <div
            className={`floating-input-wrapper has-value ${
              focusedField === fields.subject ? "is-focused" : ""
            }`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <HelpCircle size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_9c5a176" className="floating-label">
              {t("contactForm.subjectLabel", "Objet de la demande")}
            </label>
            <select
              name={fields.subject}
              id="form-field-field_9c5a176"
              className="floating-input-control floating-select-control"
              value={subjectVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.subject)}
              onBlur={() => setFocusedField(null)}
              aria-label={t("contactForm.subjectLabel", "Objet de la demande")}
            >
              {subjectOptions.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="floating-select-caret" aria-hidden="true">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
          <div
            className={`floating-input-wrapper textarea-wrapper ${
              focusedField === fields.message ? "is-focused" : ""
            } ${messageVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <MessageSquare size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-message" className="floating-label">
              {t("contactForm.messageLabel", "Message")}
            </label>
            <textarea
              name={fields.message}
              id="form-field-message"
              className="floating-input-control floating-textarea"
              rows={4}
              placeholder={t("contactForm.messagePlaceholder", "Message")}
              value={messageVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.message)}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={t("contactForm.messageLabel", "Message")}
            ></textarea>
          </div>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div
            style={{
              color: "#d9534f",
              marginBottom: "15px",
              fontSize: "14px",
              fontWeight: "600",
              width: "100%"
            }}
          >
            {errorMessage}
          </div>
        )}

        {/* Submit */}
        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
          <button
            className={`elementor-button elementor-size-sm ${
              isSubmitting ? "btn-disabled" : ""
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                {isSubmitting
                  ? t("contactForm.submitting", "Envoi en cours...")
                  : t("contactForm.submitBtn", "J'envoie ma demande")}
              </span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
