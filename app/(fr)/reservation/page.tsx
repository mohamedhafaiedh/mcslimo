import { getPageMetadata } from "@/lib/pageMetadata";
import ReservationView from "@/app/views/ReservationView";

export const metadata = getPageMetadata("reservation", "fr");

export default function Page() {
  return <ReservationView lang="fr" />;
}
