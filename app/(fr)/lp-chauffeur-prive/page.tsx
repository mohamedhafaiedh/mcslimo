import { getPageMetadata } from "@/lib/pageMetadata";
import LpChauffeurPriveView from "@/app/views/LpChauffeurPriveView";

export const metadata = getPageMetadata("lp-chauffeur-prive", "fr");

export default function Page() {
  return <LpChauffeurPriveView lang="fr" />;
}
