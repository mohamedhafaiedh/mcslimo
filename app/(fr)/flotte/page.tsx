import { getPageMetadata } from "@/lib/pageMetadata";
import FlotteView from "@/app/views/FlotteView";

export const metadata = getPageMetadata("flotte", "fr");

export default function Page() {
  return <FlotteView lang="fr" />;
}
