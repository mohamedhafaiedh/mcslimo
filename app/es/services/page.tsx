import { getPageMetadata } from "@/lib/pageMetadata";
import ServicesView from "@/app/views/ServicesView";

export const metadata = getPageMetadata("services", "es");

export default function Page() {
  return <ServicesView lang="es" />;
}
