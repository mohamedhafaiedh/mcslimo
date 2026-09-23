import { getPageMetadata } from "@/lib/pageMetadata";
import HomeView from "@/app/views/HomeView";

export const metadata = getPageMetadata("", "it");

export default function Page() {
  return <HomeView lang="it" />;
}
