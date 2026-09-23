import { getPageMetadata } from "@/lib/pageMetadata";
import HomeView from "@/app/views/HomeView";

export const metadata = getPageMetadata("", "en");

export default function Page() {
  return <HomeView lang="en" />;
}
