export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-stone-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
