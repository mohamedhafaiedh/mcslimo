import BaseLayout from "@/app/components/BaseLayout";

export default function ESLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="es">{children}</BaseLayout>;
}
