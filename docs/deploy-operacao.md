# Deploy e operação

## Artefatos

- **Desenvolvimento local**: `docker-compose.yml` na raiz sobe PostgreSQL 16 (porta **5432**).
- Container da API/web em produção: **não definido neste scaffold** — adicionar `Dockerfile` em `apps/api` e/ou `apps/web` quando houver deploy.

## Pipeline (resumo)

| Etapa | O que executa |
|-------|----------------|
| Build | `npm run build` na raiz (pacotes + `apps/api` + `apps/web`) |
| Test | `npm run test` na raiz |
| Deploy staging | [preencher] |
| Deploy production | [preencher] |

## Ambiente de produção

| Item | Valor / notas |
|------|----------------|
| Provedor | [preencher] |
| Região | [preencher] |
| Banco gerenciado | [preencher] |

## Banco de dados

- Backups automáticos: [definir no provedor].
- Restore testado: [preencher].
- Migrações em deploy: após adoção do ORM — rodar migrações antes do traffic switch (comando a definir, ex.: `npx prisma migrate deploy`).

## Observabilidade em produção

- Logs: [destino — definir].
- Alertas mínimos: erro 5xx elevado, latência, disco cheio.

## Custos e limites (opcional)

[Preencher orçamento ou alertas de billing.]
