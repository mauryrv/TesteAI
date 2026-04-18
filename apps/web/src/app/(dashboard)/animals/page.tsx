import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animais",
};

export default function AnimalsPage() {
  return (
    <>
      <PageHeader
        title="Animais"
        subtitle="Cadastro individual, brinco, raça, lote e histórico do animal."
      />
      <EmptyState
        title="Nenhum dado carregado ainda"
        description="O cadastro de animais será listado aqui assim que o backend expuser os endpoints e o modelo de dados estiver migrado."
      />
    </>
  );
}
