import { getPageMetadata } from "@/lib/pageMetadata";
import MentionsLegalesView from "@/app/views/MentionsLegalesView";

export const metadata = getPageMetadata("mentions-legales", "ar");

export default function Page() {
  return <MentionsLegalesView lang="ar" />;
}
