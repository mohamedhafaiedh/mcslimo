import { getPageMetadata } from "@/lib/pageMetadata";
import FlotteView from "@/app/views/FlotteView";

export const metadata = getPageMetadata("flotte", "it");

export default function Page() {
  return <FlotteView lang="it" />;
}
