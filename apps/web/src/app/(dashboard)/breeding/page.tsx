import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reprodução",
};

export default function BreedingPage() {
  return (
    <>
      <PageHeader
        title="Reprodução"
        subtitle="Coberturas, diagnósticos, partos e desmame."
      />
      <EmptyState
        title="Módulo reprodutivo"
        description="A linha do tempo reprodutiva aparecerá aqui após a API de reprodução estar disponível."
      />
    </>
  );
}
