import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fazendas",
};

export default function FarmsPage() {
  return (
    <>
      <PageHeader
        title="Fazendas"
        subtitle="Propriedades, usuários e permissões (multi-fazenda)."
      />
      <EmptyState
        title="Configuração de fazendas"
        description="Gestão de tenants e equipe será integrada com autenticação e API de usuários."
      />
    </>
  );
}
