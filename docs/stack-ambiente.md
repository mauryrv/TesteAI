# Stack e ambiente

## Runtime e linguagens

| Item | Escolha | Versão |
|------|---------|--------|
| Linguagem backend | TypeScript | 5.8.x |
| Runtime backend | Node.js | 20+ |
| Linguagem frontend | TypeScript | 5.8.x |

## Frameworks e bibliotecas principais

| Camada | Tecnologia |
|--------|------------|
| API HTTP | NestJS 11 |
| Frontend | Next.js 15 (App Router), React 19 |
| ORM / acesso a dados | A definir na fase de persistência (ex.: Prisma) |
| Validação de entrada | `class-validator` / pipes Nest (a adicionar com DTOs) |
| Autenticação | JWT planejado — variável `JWT_SECRET` reservada |

## Dados e infraestrutura local

| Serviço | Tecnologia | Porta / notas |
|---------|------------|----------------|
| Banco relacional | PostgreSQL 16 (Docker) | **5432** — DB `controle_gado`, user/senha `postgres`/`postgres` (somente dev) |
| Cache | N/A no scaffold | |
| Mensageria | N/A no scaffold | |

## Variáveis de ambiente (referência)

Documente nomes **sem valores secretos**. Secrets ficam apenas em `.env` local ou gerenciador de secrets — **nunca** commitados.

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `DATABASE_URL` | sim (quando houver persistência) | URL PostgreSQL — já preparada para Prisma/SQL futuro |
| `JWT_SECRET` | sim (quando houver auth) | Segredo para assinatura de tokens |
| `PORT` | não | API — padrão **4000** |
| `CORS_ORIGIN` | não | Origem permitida — padrão `http://localhost:3000` |
| `NEXT_PUBLIC_API_URL` | não | URL pública da API para o Next — padrão `http://localhost:4000` |

## Ambiente de desenvolvimento

- Subir Postgres: `docker compose up -d` (raiz do repositório).
- Subir API + web: `npm install` e `npm run dev` (raiz).
- Migrações: a definir ao adotar ORM (ex.: `npx prisma migrate dev`).
- Seed: a definir.

## Ambientes

| Ambiente | Finalidade | URL / cluster |
|----------|------------|---------------|
| local | desenvolvimento | API: `http://localhost:4000`, Web: `http://localhost:3000` |
| staging | homologação | [preencher] |
| production | produção | [preencher] |
