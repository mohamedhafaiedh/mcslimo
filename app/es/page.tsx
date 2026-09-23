import { getPageMetadata } from "@/lib/pageMetadata";
import HomeView from "@/app/views/HomeView";

export const metadata = getPageMetadata("", "es");

export default function Page() {
  return <HomeView lang="es" />;
}
