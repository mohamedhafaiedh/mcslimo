import { getPageMetadata } from "@/lib/pageMetadata";
import ServicesView from "@/app/views/ServicesView";

export const metadata = getPageMetadata("services", "fr");

export default function Page() {
  return <ServicesView lang="fr" />;
}
