import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanidade",
};

export default function HerdHealthPage() {
  return (
    <>
      <PageHeader
        title="Sanidade"
        subtitle="Vacinas, tratamentos, protocolos e alertas sanitários do rebanho."
      />
      <EmptyState
        title="Carteira sanitária em construção"
        description="Esta tela mostrará protocolos e eventos de sanidade por animal e por lote."
      />
    </>
  );
}
