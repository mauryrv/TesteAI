export function getPublicApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
}

export type HealthPayload = {
  status: string;
  service: string;
  apiPrefix: string;
  timestamp: string;
};

export async function fetchHealth(): Promise<{
  health: HealthPayload | null;
  error: string | null;
}> {
  const base = getPublicApiBaseUrl();
  try {
    const res = await fetch(`${base}/api/v1/health`, { cache: "no-store" });
    if (!res.ok) {
      return { health: null, error: `HTTP ${res.status}` };
    }
    const health = (await res.json()) as HealthPayload;
    return { health, error: null };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return { health: null, error: message };
  }
}
