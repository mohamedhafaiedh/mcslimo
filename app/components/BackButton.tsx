"use client";

import React from "react";

interface BackButtonProps {
  label: string;
  fallbackUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BackButton({
  label,
  fallbackUrl = "/",
  className = "elementor-button elementor-size-md",
  style,
}: BackButtonProps) {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else if (typeof window !== "undefined") {
      window.location.href = fallbackUrl;
    }
  };

  return (
    <a
      href={fallbackUrl}
      onClick={handleBack}
      className={className}
      style={{
        display: "inline-block",
        padding: "14px 28px",
        textDecoration: "none",
        cursor: "pointer",
        ...style,
      }}
    >
      <span className="elementor-button-text">{label}</span>
    </a>
  );
}
