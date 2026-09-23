import { getPageMetadata } from "@/lib/pageMetadata";
import ReservationView from "@/app/views/ReservationView";

export const metadata = getPageMetadata("reservation", "ar");

export default function Page() {
  return <ReservationView lang="ar" />;
}
