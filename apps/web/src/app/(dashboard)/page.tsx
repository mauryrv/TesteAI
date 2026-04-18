import { ApiStatusCard } from "@/components/dashboard/ApiStatusCard";
import { ModuleCards } from "@/components/dashboard/ModuleCards";
import { QuickStats } from "@/components/dashboard/QuickStats";
import { PageHeader } from "@/components/ui/PageHeader";
import { fetchHealth } from "@/lib/api";

export default async function DashboardPage() {
  const { health, error } = await fetchHealth();

  return (
    <div className="space-y-10">
      <PageHeader
        title="Painel"
        subtitle="Visão geral do rebanho e atalhos para cada área do sistema. Os números abaixo serão preenchidos quando a API de negócio estiver disponível."
      />

      <QuickStats />

      <ApiStatusCard health={health} error={error} />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-stone-900">Módulos</h2>
        <ModuleCards />
      </section>
    </div>
  );
}
