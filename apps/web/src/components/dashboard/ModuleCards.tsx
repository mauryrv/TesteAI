import Link from "next/link";
import { mainNav } from "@/lib/nav";

/** Cards for every module except home (/) */
export function ModuleCards() {
  const modules = mainNav.filter((item) => item.href !== "/");

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map(({ href, label, description, Icon }) => (
        <Link
          key={href}
          href={href}
          className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-900 ring-1 ring-emerald-100 transition group-hover:bg-emerald-100">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-semibold text-stone-900">{label}</h3>
              <p className="mt-1 text-sm text-stone-600">{description}</p>
            </div>
          </div>
          <span className="mt-4 text-sm font-medium text-emerald-800 group-hover:underline">
            Abrir módulo →
          </span>
        </Link>
      ))}
    </div>
  );
}
