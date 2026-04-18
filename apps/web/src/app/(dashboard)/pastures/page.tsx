import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastos e lotes",
};

export default function PasturesPage() {
  return (
    <>
      <PageHeader
        title="Pastos e lotes"
        subtitle="Pastos, capacidade, rotação e movimentação de animais."
      />
      <EmptyState
        title="Mapa de pastos"
        description="Aqui você poderá visualizar lotes por pasto e planejar movimentações."
      />
    </>
  );
}
