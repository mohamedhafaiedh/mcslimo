import { getPageMetadata } from "@/lib/pageMetadata";
import FlotteView from "@/app/views/FlotteView";

export const metadata = getPageMetadata("flotte", "ar");

export default function Page() {
  return <FlotteView lang="ar" />;
}
