import { getPageMetadata } from "@/lib/pageMetadata";
import ReservationView from "@/app/views/ReservationView";

export const metadata = getPageMetadata("reservation", "en");

export default function Page() {
  return <ReservationView lang="en" />;
}
