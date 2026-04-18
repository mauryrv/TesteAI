import type { HealthPayload } from "@/lib/api";
import { getPublicApiBaseUrl } from "@/lib/api";

export function ApiStatusCard({
  health,
  error,
}: {
  health: HealthPayload | null;
  error: string | null;
}) {
  const base = getPublicApiBaseUrl();
  const ok = Boolean(health) && !error;

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            API
          </h2>
          <p className="mt-1 font-mono text-sm text-stone-700">{base}</p>
        </div>
        <span
          className={
            ok
              ? "inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900"
              : "inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800"
          }
        >
          {ok ? "Online" : "Indisponível"}
        </span>
      </div>

      {health ? (
        <dl className="mt-4 grid gap-2 text-sm text-stone-600 sm:grid-cols-2">
          <div>
            <dt className="text-stone-500">Serviço</dt>
            <dd className="font-medium text-stone-900">{health.service}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Prefixo</dt>
            <dd className="font-mono text-stone-900">{health.apiPrefix}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-stone-500">Última verificação</dt>
            <dd className="font-mono text-stone-900">{health.timestamp}</dd>
          </div>
        </dl>
      ) : null}

      {error ? (
        <p className="mt-4 text-sm text-red-700">
          Não foi possível contactar a API: {error}. Confira se a API está em
          execução e se <code className="rounded bg-stone-100 px-1">NEXT_PUBLIC_API_URL</code>{" "}
          está correto.
        </p>
      ) : null}
    </section>
  );
}
