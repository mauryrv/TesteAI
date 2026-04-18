import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesagens",
};

export default function WeighingPage() {
  return (
    <>
      <PageHeader
        title="Pesagens"
        subtitle="Registro de pesos, curva de crescimento e GMD."
      />
      <EmptyState
        title="Pesagens e indicadores"
        description="Gráficos e tabelas de peso serão carregados a partir dos endpoints de pesagem."
      />
    </>
  );
}
