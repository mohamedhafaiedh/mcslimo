import React from "react";

interface SlashesDividerProps {
  className?: string;
  width?: string;
  color?: string;
  align?: "left" | "center" | "right";
}

export default function SlashesDivider({
  className = "",
  width = "80px",
  color = "%23C09E5B",
  align = "center",
}: SlashesDividerProps) {
  const encodedColor = color.includes("#") ? color.replace("#", "%23") : color;
  const patternUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 20 16' fill='none' stroke='${encodedColor}' stroke-width='1.5' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cg transform='translate(-12.000000, 0)'%3E%3Cpath d='M28,0L10,18'/%3E%3Cpath d='M18,0L0,18'/%3E%3Cpath d='M48,0L30,18'/%3E%3Cpath d='M38,0L20,18'/%3E%3C/g%3E%3C/svg%3E")`;

  const marginVal =
    align === "right" ? "0 0 0 auto" : align === "left" ? "0 auto 0 0" : "0 auto";
  const justifyVal =
    align === "right" ? "flex-end" : align === "left" ? "flex-start" : "center";

  return (
    <div
      className={`elementor-element elementor-widget-divider--separator-type-pattern elementor-widget-divider--view-line elementor-widget elementor-widget-divider ${className}`}
      data-element_type="widget"
      data-widget_type="divider.default"
      style={{ width: "100%" }}
    >
      <div className="elementor-widget-container" style={{ width: "100%" }}>
        <div
          className="elementor-divider"
          style={
            {
              "--divider-pattern-url": patternUrl,
              display: "flex",
              justifyContent: justifyVal,
              alignItems: "center",
              padding: "10px 0 15px 0",
              textAlign: align,
              width: "100%",
            } as React.CSSProperties
          }
        >
          <span
            className="elementor-divider-separator"
            style={{
              width: width,
              height: "15px",
              margin: marginVal,
              backgroundImage: patternUrl,
              backgroundRepeat: "repeat-x",
              backgroundSize: "20px 15px",
              backgroundColor: "transparent",
              display: "block",
              border: "none",
              WebkitMaskImage: "none",
              maskImage: "none",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}
