import { getPageMetadata } from "@/lib/pageMetadata";
import LpChauffeurPriveView from "@/app/views/LpChauffeurPriveView";

export const metadata = getPageMetadata("lp-chauffeur-prive", "es");

export default function Page() {
  return <LpChauffeurPriveView lang="es" />;
}
