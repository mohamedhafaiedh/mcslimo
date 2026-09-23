import { getPageMetadata } from "@/lib/pageMetadata";
import ChauffeurALanneeView from "@/app/views/ChauffeurALanneeView";

export const metadata = getPageMetadata("chauffeur-a-lannee", "es");

export default function Page() {
  return <ChauffeurALanneeView lang="es" />;
}
