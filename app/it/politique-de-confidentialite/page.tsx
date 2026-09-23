import { getPageMetadata } from "@/lib/pageMetadata";
import PrivacyView from "@/app/views/PrivacyView";

export const metadata = getPageMetadata("politique-de-confidentialite", "it");

export default function Page() {
  return <PrivacyView lang="it" />;
}
