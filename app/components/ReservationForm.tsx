"use client";

import React, { useState } from "react";
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
import { useTranslation, getFormattedTimestamp, Locale } from "@/lib/useTranslation";

export interface ReservationFormProps {
  lang?: Locale;
  redirectUrl?: string;
}

export default function ReservationForm({ lang: propLang, redirectUrl }: ReservationFormProps) {
  const router = useRouter();
  const { t, lang: contextLang, localizeUrl } = useTranslation();
  const currentLang = propLang || contextLang;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [todayString] = useState(() => {
    try {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    } catch {
      return "";
    }
  });

  const isEn = currentLang === "en";
  const formName = isEn ? "reservation-en" : currentLang === "ar" ? "reservation-ar" : "reservation";

  const fields = isEn
    ? {
        pickup: "pickup_address",
        dropoff: "dropoff_address",
        date: "date",
        time: "time",
        vehicle: "vehicle",
        email: "email",
        phone: "phone",
        message: "message"
      }
    : {
        pickup: "adresse_depart",
        dropoff: "adresse_arrivee",
        date: "date",
        time: "heure",
        vehicle: "vehicule",
        email: "email",
        phone: "telephone",
        message: "message"
      };

  const vehicleOptions = [
    { value: "Mercedes classe E (3pax)", label: t("reservationForm.vehicles.classeE", "Mercedes classe E (3pax)") },
    { value: "Mercedes classe V (7pax)", label: t("reservationForm.vehicles.classeV", "Mercedes classe V (7pax)") },
    { value: "Mercedes classe S (3pax)", label: t("reservationForm.vehicles.classeS", "Mercedes classe S (3pax)") },
    { value: "Mercedes classe S 580e (3pax)", label: t("reservationForm.vehicles.classeS580e", "Mercedes classe S 580e (3pax)") }
  ];

  const targetRedirectUrl = redirectUrl ? localizeUrl(redirectUrl) : localizeUrl("/merci-reservation");

  // Track values keyed by the actual field name sent in the form
  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({
    [fields.pickup]: "",
    [fields.dropoff]: "",
    [fields.date]: "",
    [fields.time]: "",
    [fields.vehicle]: "Mercedes classe E (3pax)",
    [fields.email]: "",
    [fields.phone]: "",
    [fields.message]: ""
  });

  // Focused field key
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

      const dateVal = (formData.get(fields.date) as string) || "";
      const timeVal = (formData.get(fields.time) as string) || "";
      const isFrench = currentLang === "fr";
      const emailSubjectPrefix = isFrench
        ? "Nouvelle demande de réservation"
        : "New Booking Request";
      formData.set("subject", `${emailSubjectPrefix} (${dateVal} - ${timeVal})`);

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
        router.push(targetRedirectUrl);
      } else {
        throw new Error("Erreur réseau");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage(t("reservationForm.errorMessage", "Une erreur est survenue lors de l'envoi de votre réservation. Veuillez réessayer."));
      setIsSubmitting(false);
    }
  };

  const pickupVal = fieldValues[fields.pickup] || "";
  const dropoffVal = fieldValues[fields.dropoff] || "";
  const dateVal = fieldValues[fields.date] || "";
  const timeVal = fieldValues[fields.time] || "";
  const vehicleVal = fieldValues[fields.vehicle] || "Mercedes classe E (3pax)";
  const emailVal = fieldValues[fields.email] || "";
  const phoneVal = fieldValues[fields.phone] || "";
  const messageVal = fieldValues[fields.message] || "";

  return (
    <form
      className="elementor-form"
      method="post"
      name={formName}
      aria-label="Devis site"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value="" />
      <div className="elementor-form-fields-wrapper elementor-labels-">
        {/* Champ 1 : Adresse de départ */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_efe4dce elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.pickup ? "is-focused" : ""
            } ${pickupVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <MapPin size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_efe4dce" className="floating-label">
              {t("reservationForm.pickupLabel", "Lieu de prise en charge")}
            </label>
            <input
              type="text"
              name={fields.pickup}
              id="form-field-field_efe4dce"
              className="floating-input-control"
              placeholder={t("reservationForm.pickupPlaceholder", "Ex. : Aéroport CDG Terminal 2E, Hôtel Le Bristol, Paris 8e...")}
              value={pickupVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.pickup)}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={t("reservationForm.pickupLabel", "Lieu de prise en charge")}
            />
          </div>
        </div>

        {/* Champ 2 : Adresse d'arrivée */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_2342981 elementor-col-50">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.dropoff ? "is-focused" : ""
            } ${dropoffVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Navigation size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_2342981" className="floating-label">
              {t("reservationForm.dropoffLabel", "Lieu de destination")}
            </label>
            <input
              type="text"
              name={fields.dropoff}
              id="form-field-field_2342981"
              className="floating-input-control"
              placeholder={t("reservationForm.dropoffPlaceholder", "Ex. : Gare de Lyon, Château de Versailles, Paris 16e...")}
              value={dropoffVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.dropoff)}
              onBlur={() => setFocusedField(null)}
              aria-label={t("reservationForm.dropoffLabel", "Lieu de destination")}
            />
          </div>
        </div>

        {/* Champ 3 : Date */}
        <div className="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-field_491d849 elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.date ? "is-focused" : ""
            } ${dateVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Calendar size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_491d849" className="floating-label">
              {t("reservationForm.dateLabel", "Date de prise en charge")}
            </label>
            <input
              type="date"
              name={fields.date}
              id="form-field-field_491d849"
              className="floating-input-control"
              min={todayString}
              value={dateVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.date)}
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
              aria-label={t("reservationForm.dateLabel", "Date de prise en charge")}
            />
          </div>
        </div>

        {/* Champ 4 : Heure */}
        <div className="elementor-field-type-time elementor-field-group elementor-column elementor-field-group-field_9961b70 elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.time ? "is-focused" : ""
            } ${timeVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Clock size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_9961b70" className="floating-label">
              {t("reservationForm.timeLabel", "Heure de prise en charge")}
            </label>
            <input
              type="time"
              name={fields.time}
              id="form-field-field_9961b70"
              className="floating-input-control"
              value={timeVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.time)}
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
              aria-label={t("reservationForm.timeLabel", "Heure de prise en charge")}
            />
          </div>
        </div>

        {/* Champ 5 : Véhicule */}
        <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_fbb2aa6 elementor-col-100 elementor-field-required">
          <div
            className={`floating-input-wrapper has-value ${
              focusedField === fields.vehicle ? "is-focused" : ""
            }`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Car size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_fbb2aa6" className="floating-label">
              {t("reservationForm.vehicleLabel", "Catégorie de véhicule")}
            </label>
            <select
              name={fields.vehicle}
              id="form-field-field_fbb2aa6"
              className="floating-input-control floating-select-control"
              value={vehicleVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.vehicle)}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={t("reservationForm.vehicleLabel", "Catégorie de véhicule")}
            >
              {vehicleOptions.map((opt) => (
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
              focusedField === fields.email ? "is-focused" : ""
            } ${emailVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Mail size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-email" className="floating-label">
              {t("reservationForm.emailLabel", "Adresse e-mail")}
            </label>
            <input
              type="email"
              name={fields.email}
              id="form-field-email"
              className="floating-input-control"
              placeholder={t("reservationForm.emailPlaceholder", "Ex. : contact@entreprise.com")}
              value={emailVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.email)}
              onBlur={() => setFocusedField(null)}
              required={true}
              aria-label={t("reservationForm.emailLabel", "Adresse e-mail")}
            />
          </div>
        </div>

        {/* Champ 7 : Téléphone */}
        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_b3cb97b elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.phone ? "is-focused" : ""
            } ${phoneVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Phone size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-field_b3cb97b" className="floating-label">
              {t("reservationForm.phoneLabel", "Numéro de téléphone")}
            </label>
            <input
              type="tel"
              name={fields.phone}
              id="form-field-field_b3cb97b"
              className="floating-input-control"
              placeholder={t("reservationForm.phonePlaceholder", "Ex. : +33 6 12 34 56 78")}
              value={phoneVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.phone)}
              onBlur={() => setFocusedField(null)}
              required={true}
              pattern="[0-9()#&+*-=.\s]+"
              title={t("reservationForm.phoneTitle", "Seuls les caractères de numéros de téléphone (#, -, *, etc.) sont acceptés.")}
              aria-label={t("reservationForm.phoneLabel", "Numéro de téléphone")}
            />
          </div>
        </div>

        {/* Champ 8 : Message */}
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
          <div
            className={`floating-input-wrapper textarea-wrapper ${
              focusedField === fields.message ? "is-focused" : ""
            } ${messageVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <MessageSquare size={18} strokeWidth={2} />
            </div>
            <label htmlFor="form-field-message" className="floating-label">
              {t("reservationForm.messageLabel", "Précisions ou demandes particulières")}
            </label>
            <textarea
              name={fields.message}
              id="form-field-message"
              className="floating-input-control floating-textarea"
              rows={3}
              placeholder={t("reservationForm.messagePlaceholder", "Ex. : Siège bébé requis, nombre de bagages volumineux...")}
              value={messageVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.message)}
              onBlur={() => setFocusedField(null)}
              aria-label={t("reservationForm.messageLabel", "Précisions ou demandes particulières")}
            ></textarea>
          </div>
        </div>

        {/* Recaptcha */}
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
              <span className="elementor-button-text">
                {isSubmitting
                  ? t("reservationForm.submitting", "Envoi en cours...")
                  : t("reservationForm.submitBtn", "J'obtiens mon devis gratuit en ligne")}
              </span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
