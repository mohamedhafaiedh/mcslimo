import { getPageMetadata } from "@/lib/pageMetadata";
import ContactView from "@/app/views/ContactView";

export const metadata = getPageMetadata("contact", "it");

export default function Page() {
  return <ContactView lang="it" />;
}
