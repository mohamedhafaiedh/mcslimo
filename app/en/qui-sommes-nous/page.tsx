import { getPageMetadata } from "@/lib/pageMetadata";
import AboutView from "@/app/views/AboutView";

export const metadata = getPageMetadata("qui-sommes-nous", "en");

export default function Page() {
  return <AboutView lang="en" />;
}
