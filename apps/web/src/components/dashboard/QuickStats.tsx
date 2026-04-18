export function QuickStats() {
  const items = [
    { label: "Animais ativos", value: "—", hint: "Após integração com a API" },
    { label: "Lotes em pasto", value: "—", hint: "Em desenvolvimento" },
    { label: "Alertas sanitários", value: "—", hint: "Em desenvolvimento" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium text-stone-500">{item.label}</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums text-stone-900">
            {item.value}
          </p>
          <p className="mt-1 text-xs text-stone-500">{item.hint}</p>
        </div>
      ))}
    </div>
  );
}
