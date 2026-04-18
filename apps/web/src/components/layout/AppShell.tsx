"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
    <nav className="flex flex-col gap-1 p-3">
      {mainNav.map(({ href, label, Icon }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={clsx(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-emerald-900 text-white shadow-sm"
                : "text-stone-700 hover:bg-stone-100",
            )}
          >
            <Icon className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
            {label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-stone-200 bg-white shadow-sm md:flex">
        <div className="border-b border-stone-100 px-5 py-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-900">
            Controle de gado
          </p>
          <p className="mt-1 text-sm text-stone-600">Gestão pecuária</p>
        </div>
        <NavLinks />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center gap-3 border-b border-stone-200 bg-white px-4 md:hidden">
          <button
            type="button"
            className="rounded-lg p-2 text-stone-700 hover:bg-stone-100"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="font-semibold text-stone-900">Controle de gado</span>
        </header>

        {mobileOpen ? (
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-100 px-4 py-4">
                <span className="font-semibold text-stone-900">Menu</span>
                <button
                  type="button"
                  className="rounded-lg p-2 text-stone-600 hover:bg-stone-100"
                  aria-label="Fechar"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <NavLinks onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        ) : null}

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-8">
          {children}
        </main>

        <footer className="border-t border-stone-200 bg-white px-4 py-4 text-center text-xs text-stone-500 md:px-8">
          Controle de gado · Interface em evolução junto com a API
        </footer>
      </div>
    </div>
  );
}
