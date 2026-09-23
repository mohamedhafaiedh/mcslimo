import { getPageMetadata } from "@/lib/pageMetadata";
import CgvView from "@/app/views/CgvView";

export const metadata = getPageMetadata("cgv", "es");

export default function Page() {
  return <CgvView lang="es" />;
}
