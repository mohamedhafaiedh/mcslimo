"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Navigation,
  Calendar,
  Clock,
  Car,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown
} from "lucide-react";

export interface ReservationFormProps {
  lang: "fr" | "en";
  redirectUrl?: string;
}

function getFormattedTimestamp(lang: "fr" | "en") {
  const now = new Date();
  if (lang === "fr") {
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
    formName: "reservation",
    fields: {
      pickup: "adresse_depart",
      dropoff: "adresse_arrivee",
      date: "date",
      time: "heure",
      vehicle: "vehicule",
      email: "email",
      phone: "telephone",
      message: "message"
    },
    floatingLabels: {
      pickup: "Lieu de prise en charge",
      dropoff: "Lieu de destination",
      date: "Date de prise en charge",
      time: "Heure de prise en charge",
      vehicle: "Catégorie de véhicule",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
      message: "Précisions ou demandes particulières"
    },
    placeholders: {
      pickup: "Ex. : Aéroport CDG Terminal 2E, Hôtel Le Bristol, Paris 8e...",
      dropoff: "Ex. : Gare de Lyon, Château de Versailles, Paris 16e...",
      date: "",
      time: "",
      email: "Ex. : contact@entreprise.com",
      phone: "Ex. : +33 6 12 34 56 78",
      message: "Ex. : Siège bébé requis, nombre de bagages volumineux..."
    },
    vehicleOptions: [
      { value: "Mercedes classe E (3pax)", label: "Mercedes classe E (3pax)" },
      { value: "Mercedes classe V (7pax)", label: "Mercedes classe V (7pax)" },
      { value: "Mercedes classe S (3pax)", label: "Mercedes classe S (3pax)" }
    ],
    phoneTitle: "Seuls les caractères de numéros de téléphone (#, -, *, etc.) sont acceptés.",
    submitButtonText: "J'obtiens mon devis gratuit en ligne",
    submittingText: "Envoi en cours...",
    errorMessage: "Une erreur est survenue lors de l'envoi de votre réservation. Veuillez réessayer.",
    redirectUrl: "/merci-reservation"
  },
  en: {
    formName: "reservation-en",
    fields: {
      pickup: "pickup_address",
      dropoff: "dropoff_address",
      date: "date",
      time: "time",
      vehicle: "vehicle",
      email: "email",
      phone: "phone",
      message: "message"
    },
    floatingLabels: {
      pickup: "Pickup location",
      dropoff: "Dropoff destination",
      date: "Pickup date",
      time: "Pickup time",
      vehicle: "Vehicle category",
      email: "Email address",
      phone: "Phone number",
      message: "Special requests or details"
    },
    placeholders: {
      pickup: "e.g., CDG Airport Terminal 2E, Hotel Le Bristol, Paris 8th...",
      dropoff: "e.g., Gare de Lyon, Versailles Palace, Paris 16th...",
      date: "",
      time: "",
      email: "e.g., contact@company.com",
      phone: "e.g., +33 6 12 34 56 78",
      message: "e.g., Baby seat required, oversize luggage..."
    },
    vehicleOptions: [
      { value: "Mercedes classe E (3pax)", label: "Mercedes-Benz E-Class (3 pax)" },
      { value: "Mercedes classe V (7pax)", label: "Mercedes-Benz V-Class (7 pax)" },
      { value: "Mercedes classe S (3pax)", label: "Mercedes-Benz S-Class (3 pax)" }
    ],
    phoneTitle: "Only numbers and phone characters (#, -, *, etc) are accepted.",
    submitButtonText: "Get my online free quote",
    submittingText: "Sending...",
    errorMessage: "An error occurred while submitting your quote request. Please try again.",
    redirectUrl: "/en/merci-reservation"
  }
};

export default function ReservationForm({ lang, redirectUrl }: ReservationFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [todayString, setTodayString] = useState("");

  // Values state to manage floating labels properly
  const [values, setValues] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: "Mercedes classe E (3pax)",
    email: "",
    phone: "",
    message: ""
  });

  // Focused state for active field highlight
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    try {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      setTodayString(`${yyyy}-${mm}-${dd}`);
    } catch {
      // ignore
    }
  }, []);

  const config = CONFIG[lang];
  const targetRedirectUrl = redirectUrl || config.redirectUrl;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("form-name", config.formName);

      const dateVal = formData.get(config.fields.date) || "";
      const timeVal = formData.get(config.fields.time) || "";
      const emailSubject =
        lang === "fr"
          ? `Nouvelle demande de réservation (${dateVal} - ${timeVal})`
          : `New Booking Request (${dateVal} - ${timeVal})`;
      formData.set("subject", emailSubject);

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
        router.push(targetRedirectUrl);
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
    <form
      className="elementor-form"
      method="post"
      name={config.formName}
      aria-label="Devis site"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={config.formName} />
      <input type="hidden" name="subject" value="" />
      <div className="elementor-form-fields-wrapper elementor-labels-">
        {/* Champ 1 : Adresse de départ */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_efe4dce elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === "pickup" ? "is-focused" : ""
            } ${values.pickup ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <MapPin size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_efe4dce" className="floating-label">
              {config.floatingLabels.pickup}
            </label>
            <input
              type="text"
              name={config.fields.pickup}
              id="form-field-field_efe4dce"
              className="floating-input-control"
              placeholder={config.placeholders.pickup}
              value={values.pickup}
              onChange={handleChange}
              onFocus={() => setFocusedField("pickup")}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={config.floatingLabels.pickup}
            />
          </div>
        </div>

        {/* Champ 2 : Adresse d'arrivée */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_2342981 elementor-col-50">
          <div
            className={`floating-input-wrapper ${
              focusedField === "dropoff" ? "is-focused" : ""
            } ${values.dropoff ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Navigation size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_2342981" className="floating-label">
              {config.floatingLabels.dropoff}
            </label>
            <input
              type="text"
              name={config.fields.dropoff}
              id="form-field-field_2342981"
              className="floating-input-control"
              placeholder={config.placeholders.dropoff}
              value={values.dropoff}
              onChange={handleChange}
              onFocus={() => setFocusedField("dropoff")}
              onBlur={() => setFocusedField(null)}
              aria-label={config.floatingLabels.dropoff}
            />
          </div>
        </div>

        {/* Champ 3 : Date */}
        <div className="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-field_491d849 elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === "date" ? "is-focused" : ""
            } ${values.date ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Calendar size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_491d849" className="floating-label">
              {config.floatingLabels.date}
            </label>
            <input
              type="date"
              name={config.fields.date}
              id="form-field-field_491d849"
              className="floating-input-control"
              value={values.date}
              min={todayString || undefined}
              onChange={handleChange}
              onFocus={() => setFocusedField("date")}
              onBlur={() => setFocusedField(null)}
              onClick={(e) => {
                try {
                  if ("showPicker" in e.currentTarget && typeof e.currentTarget.showPicker === "function") {
                    e.currentTarget.showPicker();
                  }
                } catch {
                  // ignore
                }
              }}
              required={true}
              aria-label={config.floatingLabels.date}
            />
          </div>
        </div>

        {/* Champ 4 : Heure */}
        <div className="elementor-field-type-time elementor-field-group elementor-column elementor-field-group-field_9961b70 elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === "time" ? "is-focused" : ""
            } ${values.time ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Clock size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_9961b70" className="floating-label">
              {config.floatingLabels.time}
            </label>
            <input
              type="time"
              name={config.fields.time}
              id="form-field-field_9961b70"
              className="floating-input-control"
              value={values.time}
              onChange={handleChange}
              onFocus={() => setFocusedField("time")}
              onBlur={() => setFocusedField(null)}
              onClick={(e) => {
                try {
                  if ("showPicker" in e.currentTarget && typeof e.currentTarget.showPicker === "function") {
                    e.currentTarget.showPicker();
                  }
                } catch {
                  // ignore
                }
              }}
              required={true}
              aria-label={config.floatingLabels.time}
            />
          </div>
        </div>

        {/* Champ 5 : Véhicule */}
        <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_fbb2aa6 elementor-col-100 elementor-field-required">
          <div
            className={`floating-input-wrapper has-value ${
              focusedField === "vehicle" ? "is-focused" : ""
            }`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Car size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_fbb2aa6" className="floating-label">
              {config.floatingLabels.vehicle}
            </label>
            <select
              name={config.fields.vehicle}
              id="form-field-field_fbb2aa6"
              className="floating-input-control floating-select-control"
              value={values.vehicle}
              onChange={handleChange}
              onFocus={() => setFocusedField("vehicle")}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={config.floatingLabels.vehicle}
            >
              {config.vehicleOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="floating-select-caret" aria-hidden="true">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Champ 6 : Email */}
        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === "email" ? "is-focused" : ""
            } ${values.email ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Mail size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-email" className="floating-label">
              {config.floatingLabels.email}
            </label>
            <input
              type="email"
              name={config.fields.email}
              id="form-field-email"
              className="floating-input-control"
              placeholder={config.placeholders.email}
              value={values.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={config.floatingLabels.email}
            />
          </div>
        </div>

        {/* Champ 7 : Téléphone */}
        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_b3cb97b elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === "phone" ? "is-focused" : ""
            } ${values.phone ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Phone size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_b3cb97b" className="floating-label">
              {config.floatingLabels.phone}
            </label>
            <input
              type="tel"
              name={config.fields.phone}
              id="form-field-field_b3cb97b"
              className="floating-input-control"
              placeholder={config.placeholders.phone}
              value={values.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              required={true}
              pattern="[0-9()#&+*-=.\s]+"
              title={config.phoneTitle}
              aria-label={config.floatingLabels.phone}
            />
          </div>
        </div>

        {/* Champ 8 : Message */}
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
          <div
            className={`floating-input-wrapper textarea-wrapper ${
              focusedField === "message" ? "is-focused" : ""
            } ${values.message ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <MessageSquare size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-message" className="floating-label">
              {config.floatingLabels.message}
            </label>
            <textarea
              name={config.fields.message}
              id="form-field-message"
              className="floating-input-control floating-textarea"
              rows={3}
              placeholder={config.placeholders.message}
              value={values.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              aria-label={config.floatingLabels.message}
            ></textarea>
          </div>
        </div>

        {/* Recaptcha & messages */}
        <div className="elementor-field-type-recaptcha_v3 elementor-field-group elementor-column elementor-field-group-field_d657737 elementor-col-100 recaptcha_v3-bottomright">
          <div className="elementor-field" id="form-field-field_d657737">
            <div
              className="elementor-g-recaptcha"
              data-sitekey="6Lfnb0UqAAAAAM3XWV1zid8EIGP4RMN_gLBRHfjm"
              data-type="v3"
              data-action="Form"
              data-badge="bottomright"
              data-size="invisible"
            ></div>
          </div>
        </div>

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

        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
          <button
            className={`elementor-button elementor-size-sm ${
              isSubmitting ? "btn-disabled" : ""
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-icon">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-angle-right"
                  viewBox="0 0 256 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                </svg>
              </span>
              <span className="elementor-button-text">
                {isSubmitting ? config.submittingText : config.submitButtonText}
              </span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
