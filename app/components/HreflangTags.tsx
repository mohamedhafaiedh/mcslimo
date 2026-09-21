import React from "react";
import { SITE_URL } from "@/lib/seo";

export default function HreflangTags({
  slug = "",
}: {
  slug?: string;
}) {
  const cleanSlug = slug.replace(/^\/|\/$/g, "");
  const frPath = cleanSlug ? `/${cleanSlug}/` : "/";
  const enPath = cleanSlug ? `/en/${cleanSlug}/` : "/en/";

  return (
    <>
      <link rel="alternate" {...{ hreflang: "fr-FR" }} href={`${SITE_URL}${frPath}`} />
      <link rel="alternate" {...{ hreflang: "en-US" }} href={`${SITE_URL}${enPath}`} />
      <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE_URL}${frPath}`} />
    </>
  );
}
