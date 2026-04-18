import type { LucideIcon } from "lucide-react";
import {
  Beef,
  Building2,
  HeartHandshake,
  Home,
  Scale,
  Syringe,
  Trees,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  description: string;
  Icon: LucideIcon;
};

export const mainNav: NavItem[] = [
  {
    href: "/",
    label: "Início",
    description: "Resumo e status do sistema",
    Icon: Home,
  },
  {
    href: "/animals",
    label: "Animais",
    description: "Cadastro e ciclo de vida",
    Icon: Beef,
  },
  {
    href: "/herd-health",
    label: "Sanidade",
    description: "Vacinas e tratamentos",
    Icon: Syringe,
  },
  {
    href: "/breeding",
    label: "Reprodução",
    description: "Coberturas e partos",
    Icon: HeartHandshake,
  },
  {
    href: "/weighing",
    label: "Pesagens",
    description: "Pesos e ganho médio",
    Icon: Scale,
  },
  {
    href: "/pastures",
    label: "Pastos e lotes",
    description: "Movimentação e ocupação",
    Icon: Trees,
  },
  {
    href: "/farms",
    label: "Fazendas",
    description: "Propriedades e equipe",
    Icon: Building2,
  },
];
