import { getPageMetadata } from "@/lib/pageMetadata";
import ContactView from "@/app/views/ContactView";

export const metadata = getPageMetadata("contact", "ar");

export default function Page() {
  return <ContactView lang="ar" />;
}
