import React from "react";
import type { Metadata } from "next";
import LandingHeader from "../../components/LandingHeader";
import MainFooter from "../../components/MainFooter";
import BackButton from "../../components/BackButton";

export const metadata: Metadata = {
  title: "Reservation Received - MCS Limo",
  description: "Thank you for booking your private chauffeur via our exclusive MCS Limo service.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnMerciLpReservationPage() {
  return (
    <div id="page" className="site">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <LandingHeader lang="en" currentPath="/en/merci-lp-reservation" />

      <main
        id="content"
        className="site-main"
        style={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "70px 20px",
          background: "#f9f9f9",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            width: "100%",
            textAlign: "center",
            background: "#ffffff",
            padding: "50px 32px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #ebebeb",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 24px",
              background: "#e8f7ee",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1bb35a",
            }}
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "#111111",
              lineHeight: 1.3,
            }}
          >
            Thank you for your quote request!
          </h1>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.65",
              color: "#555555",
              marginBottom: "32px",
              maxWidth: "540px",
              margin: "0 auto 32px",
            }}
          >
            Thank you for submitting your quote request. Our team will review your journey details and send you a personalized proposal promptly.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BackButton
              label="Back to Home"
              fallbackUrl="/en/lp-chauffeur-prive"
            />
          </div>
        </div>
      </main>

      <MainFooter lang="en" />
    </div>
  );
}
