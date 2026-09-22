import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";

export const metadata: Metadata = {
  title: "Contact Request Submitted - MCS Limo",
  description: "Thank you for contacting us. The MCS Limo team will respond to you promptly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnMerciContactPage() {
  return (
    <div id="page" className="site">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <MainHeader lang="en" currentPath="/en/merci-contact" />

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
            Thank you for your message!
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
            Your message has been received by our team. We will get back to you very quickly.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              href="/en"
              className="elementor-button elementor-size-md"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              <span className="elementor-button-text">Back to Home</span>
            </Link>
          </div>
        </div>
      </main>

      <MainFooter lang="en" />
    </div>
  );
}
