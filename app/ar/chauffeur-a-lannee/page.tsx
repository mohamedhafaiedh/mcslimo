import { getPageMetadata } from "@/lib/pageMetadata";
import ChauffeurALanneeView from "@/app/views/ChauffeurALanneeView";

export const metadata = getPageMetadata("chauffeur-a-lannee", "ar");

export default function Page() {
  return <ChauffeurALanneeView lang="ar" />;
}
