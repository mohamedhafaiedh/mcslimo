"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export interface ContactFormProps {
  lang: "fr" | "en" | "ar";
}

function getFormattedTimestamp(lang: "fr" | "en" | "ar") {
  const now = new Date();
  if (lang === "ar") {
    const dateStr = now.toLocaleDateString("fr-FR", {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    const timeStr = now.toLocaleTimeString("fr-FR", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    return `${dateStr} à ${timeStr} (توقيت باريس)`;
  } else if (lang === "fr") {
    const dateStr = now.toLocaleDateString("fr-FR", {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    const timeStr = now.toLocaleTimeString("fr-FR", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    return `${dateStr} à ${timeStr} (heure de Paris)`;
  } else {
    const dateStr = now.toLocaleDateString("en-US", {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    const timeStr = now.toLocaleTimeString("en-US", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    return `${dateStr}, ${timeStr} (Paris time)`;
  }
}

const CONFIG = {
  fr: {
    formName: "contact",
    emailSubject: "Nouvelle demande de contact",
    fields: {
      name: "nom",
      phone: "telephone",
      email: "email",
      subject: "objet",
      message: "message"
    },
    labels: {
      name: "Nom",
      phone: "Téléphone",
      email: "E-mail",
      subject: "Objet de la demande",
      message: "Message"
    },
    placeholders: {
      name: "Nom",
      phone: "Téléphone",
      email: "E-mail",
      message: "Message"
    },
    subjectOptions: [
      { value: "Demande d'information", label: "Demande d'information" },
      { value: "Demande de devis", label: "Demande de devis" },
      { value: "Réservation", label: "Réservation" }
    ],
    phoneTitle: "Seuls les caractères de numéros de téléphone (#, -, *, etc.) sont acceptés.",
    submitButtonText: "J'envoie ma demande",
    submittingText: "Envoi en cours...",
    errorMessage: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
    redirectUrl: "/merci-contact"
  },
  en: {
    formName: "contact-en",
    emailSubject: "New Contact Request",
    fields: {
      name: "name",
      phone: "phone",
      email: "email",
      subject: "topic",
      message: "message"
    },
    labels: {
      name: "Name",
      phone: "Phone",
      email: "E-mail",
      subject: "Subject",
      message: "Message"
    },
    placeholders: {
      name: "Name",
      phone: "Phone",
      email: "E-mail",
      message: "Message"
    },
    subjectOptions: [
      { value: "Request Information", label: "Request Information" },
      { value: "Request Quote", label: "Request Quote" },
      { value: "Booking", label: "Booking" }
    ],
    phoneTitle: "Only numbers and phone characters (#, -, *, etc) are accepted.",
    submitButtonText: "Send my request",
    submittingText: "Sending...",
    errorMessage: "An error occurred while sending your message. Please try again.",
    redirectUrl: "/en/merci-contact"
  },
  ar: {
    formName: "contact-ar",
    emailSubject: "طلب تواصل جديد",
    fields: {
      name: "nom",
      phone: "telephone",
      email: "email",
      subject: "objet",
      message: "message"
    },
    labels: {
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      subject: "موضوع الطلب",
      message: "الرسالة"
    },
    placeholders: {
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      message: "اكتب رسالتك أو استفسارك هنا..."
    },
    subjectOptions: [
      { value: "Demande d'information", label: "طلب معلومات" },
      { value: "Demande de devis", label: "طلب عرض أسعار" },
      { value: "Réservation", label: "حجز" }
    ],
    phoneTitle: "يُرجى إدخال أرقام ورموز هواتف صحيحة (#, -, *, +).",
    submitButtonText: "إرسال طلبي",
    submittingText: "جاري الإرسال...",
    errorMessage: "حدث خطأ أثناء إرسال رسالتك. يُرجى إعادة المحاولة.",
    redirectUrl: "/ar/merci-contact"
  }
};

export default function ContactForm({ lang }: ContactFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const config = CONFIG[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("form-name", config.formName);
      formData.set("subject", config.emailSubject);
      if (typeof window !== "undefined") {
        formData.set("pageUrl", window.location.href);
        formData.set("timestamp", getFormattedTimestamp(lang));
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
        router.push(config.redirectUrl);
      } else {
        throw new Error("Erreur réseau");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage(config.errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <form className="elementor-form" method="post" name={config.formName} aria-label="Nouveau formulaire" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value={config.formName} />
      <input type="hidden" name="subject" value={config.emailSubject} />
      <div className="elementor-form-fields-wrapper elementor-labels-">
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50">
          <label htmlFor="form-field-name" className="elementor-field-label elementor-screen-only">
            {config.labels.name}
          </label>
          <input
            size={1}
            type="text"
            name={config.fields.name}
            id="form-field-name"
            className="elementor-field elementor-size-md elementor-field-textual"
            placeholder={config.placeholders.name}
          />
        </div>
        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_1cab8d7 elementor-col-50">
          <label htmlFor="form-field-field_1cab8d7" className="elementor-field-label elementor-screen-only">
            {config.labels.phone}
          </label>
          <input
            size={1}
            type="tel"
            name={config.fields.phone}
            id="form-field-field_1cab8d7"
            className="elementor-field elementor-size-md elementor-field-textual"
            placeholder={config.placeholders.phone}
            pattern="[0-9()#&+*-=.]+"
            title={config.phoneTitle}
            aria-label={config.labels.phone}
          />
        </div>
        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
          <label htmlFor="form-field-email" className="elementor-field-label elementor-screen-only">
            {config.labels.email}
          </label>
          <input
            size={1}
            type="email"
            name={config.fields.email}
            id="form-field-email"
            className="elementor-field elementor-size-md elementor-field-textual"
            placeholder={config.placeholders.email}
            required={true}
          />
        </div>
        <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_9954fef elementor-col-50">
          <label htmlFor="form-field-field_9954fef" className="elementor-field-label elementor-screen-only">
            {config.labels.subject}
          </label>
          <div className="elementor-field elementor-select-wrapper remove-before">
            <div className="select-caret-down-wrapper">
              <svg aria-hidden="true" className="e-font-icon-svg e-eicon-caret-down" viewBox="0 0 571.4 571.4" xmlns="http://www.w3.org/2000/svg">
                <path d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z"></path>
              </svg>
            </div>
            <select name={config.fields.subject} id="form-field-field_9954fef" className="elementor-field-textual elementor-size-md">
              {config.subjectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
          <label htmlFor="form-field-message" className="elementor-field-label elementor-screen-only">
            {config.labels.message}
          </label>
          <textarea
            className="elementor-field-textual elementor-field elementor-size-md"
            name={config.fields.message}
            id="form-field-message"
            rows={4}
            placeholder={config.placeholders.message}
          ></textarea>
        </div>
        <div className="elementor-field-type-recaptcha_v3 elementor-field-group elementor-column elementor-field-group-field_4376589 elementor-col-100 recaptcha_v3-bottomright">
          <div className="elementor-field" id="form-field-field_4376589">
            <div className="elementor-g-recaptcha" data-sitekey="6Lfnb0UqAAAAAM3XWV1zid8EIGP4RMN_gLBRHfjm" data-type="v3" data-action="Form" data-badge="bottomright" data-size="invisible"></div>
          </div>
        </div>
        {errorMessage && (
          <div style={{ color: "#d9534f", marginBottom: "15px", fontSize: "14px", fontWeight: "600", width: "100%" }}>
            {errorMessage}
          </div>
        )}
        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
          <button className={`elementor-button elementor-size-sm ${isSubmitting ? "btn-disabled" : ""}`} type="submit" disabled={isSubmitting}>
            <span className="elementor-button-content-wrapper">
              {isSubmitting ? (
                <>
                  <svg className="btn-spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" fill="none" />
                    <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="elementor-button-text">{config.submittingText}</span>
                </>
              ) : (
                <span className="elementor-button-text">{config.submitButtonText}</span>
              )}
            </span>
          </button>
        </div>
      </div>
      <input type="hidden" name="pageUrl" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="timestamp" value={getFormattedTimestamp(lang)} />
    </form>
  );
}
