# Prompt — iniciar criação do repositório (executar no agente)

Copie o bloco abaixo (entre as linhas `---`) e cole em um **novo chat do Cursor** na raiz do workspace, **depois** de revisar ou preencher `docs/stack-ambiente.md`.

---

## Prompt (cole a partir da próxima linha)

Você vai **iniciar o repositório** do sistema **Controle de gado** seguindo obrigatoriamente os documentos em `docs/` (README, `arquitetura.md`, `stack-ambiente.md`, `contratos-api.md`, `seguranca-lgpd.md`, `testes-qualidade.md`). Se algo estiver `[preencher]` em `stack-ambiente.md`, **pare e liste as decisões faltantes em até 5 bullets**; se eu já tiver preenchido a stack nesse arquivo, **use essa stack sem perguntar de novo**.

### Objetivo desta execução (somente scaffolding)

1. Monorepo com `apps/api`, `apps/web`, `packages/domain`, `packages/shared` (e `packages/application` apenas se fizer sentido na stack escolhida).
2. Camadas respeitando `docs/arquitetura.md`: domínio sem dependência de HTTP/ORM; API como adaptador.
3. **PostgreSQL** local via `docker-compose.yml` na raiz (ajuste portas se necessário), mais `.env.example` na raiz ou por app com `DATABASE_URL`, `JWT_SECRET` (placeholder), e demais variáveis listadas em `docs/stack-ambiente.md`.
4. Backend: projeto inicial com **health check** (`GET /health` ou `/api/v1/health`), estrutura de pastas por bounded context **Animals, Health, Breeding, Weighing, Pastures, Farms/Users** (pastas vazias ou módulos stub **sem** regra de negócio ainda).
5. Frontend: app **mínimo** que sobe e chama o health check (ou mostra status) para validar CORS/base URL.
6. Ferramentas de qualidade alinhadas a `docs/testes-qualidade.md`: lint + typecheck + um **teste de exemplo** (unitário no `packages/domain` ou equivalente).
7. Scripts na raiz: `dev` (sobe api + web em paralelo ou documenta dois terminais), `build`, `test`, `lint` (ou equivalentes da stack).
8. Atualize **apenas** o necessário em `docs/stack-ambiente.md` e `docs/deploy-operacao.md` com os comandos reais e portas usadas após o scaffold.
9. **Não** implemente CRUD de animais nem autenticação completa nesta rodada — só estrutura, Docker, health, convenções e README raiz explicando como rodar.

### Restrições

- Não refatore arquivos fora do escopo do scaffold.
- Não commitar segredos; use `.env.example` e `.gitignore` adequados.
- Nomes de código e rotas em **inglês**; comentários e README podem ser em português.

Ao terminar, resuma: estrutura de pastas criada, comandos para subir tudo, e próximos 3 passos recomendados (ex.: migrações, primeiro aggregate Animal, auth).

---

## Fim do prompt
