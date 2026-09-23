import BaseLayout from "@/app/components/BaseLayout";

export default function ENLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
