# Controle de gado

Monorepo da gestão pecuária: API (**NestJS**), web (**Next.js**) e pacotes de domínio compartilhado. Documentação de decisões em `docs/`.

## Pré-requisitos

- Node.js **20+**
- npm (workspaces)
- Docker (para PostgreSQL local)

## Primeiro uso

1. Copie variáveis de ambiente:

   ```bash
   cp .env.example .env
   cp apps/web/.env.example apps/web/.env.local
   ```

2. Suba o banco:

   ```bash
   docker compose up -d
   ```

3. Instale dependências e suba API + web:

   ```bash
   npm install
   npm run dev
   ```

- API: `http://localhost:4000/api/v1/health`
- Web: `http://localhost:3000` (lê o health da API)

Portas: **4000** (API), **3000** (Next.js), **5432** (Postgres no host).

## Scripts (raiz)

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Compila pacotes internos e sobe API + web em paralelo |
| `npm run build` | Build de pacotes, API e web |
| `npm run test` | Testes do domínio (Vitest) + API (Jest) |
| `npm run lint` | ESLint em todo o monorepo |
| `npm run build:packages` | Apenas `domain`, `shared`, `application` |

## Estrutura

- `apps/api` — NestJS, prefixo global `api/v1`, módulos por bounded context em `src/contexts/*`
- `apps/web` — Next.js (App Router)
- `packages/domain` — regras puras (sem Nest/ORM)
- `packages/shared` — constantes compartilhadas (ex.: prefixo da API)
- `packages/application` — casos de uso (stubs por enquanto)

---

Próximos passos sugeridos: ORM + migrações (ex.: Prisma), agregado **Animal** e autenticação com escopo `farm_id`.
