import BaseLayout from "@/app/components/BaseLayout";

export default function FRLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="fr">{children}</BaseLayout>;
}
