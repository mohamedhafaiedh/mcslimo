import { getPageMetadata } from "@/lib/pageMetadata";
import ReservationView from "@/app/views/ReservationView";

export const metadata = getPageMetadata("reservation", "it");

export default function Page() {
  return <ReservationView lang="it" />;
}
