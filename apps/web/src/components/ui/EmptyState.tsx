export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center shadow-sm">
      <p className="text-lg font-medium text-stone-800">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
    </div>
  );
}
