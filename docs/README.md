# Documentação do projeto — Controle de gado

Este diretório concentra as decisões e padrões **antes e durante** o desenvolvimento. Cada arquivo cobre um aspecto específico; alterações importantes devem refletir aqui (e, quando couber, em `docs/adr/`).

## Ordem sugerida de leitura

| Documento | Conteúdo |
|-----------|----------|
| [visao-produto.md](./visao-produto.md) | Objetivo, escopo MVP, perfis de usuário |
| [stack-ambiente.md](./stack-ambiente.md) | Linguagens, frameworks, versões, variáveis de ambiente |
| [arquitetura.md](./arquitetura.md) | Monorepo, camadas, bounded contexts, fluxo de dados |
| [modelo-dominio.md](./modelo-dominio.md) | Glossário, entidades, invariantes |
| [contratos-api.md](./contratos-api.md) | REST/OpenAPI, erros, versionamento, paginação |
| [seguranca-lgpd.md](./seguranca-lgpd.md) | Auth, multi-tenant, dados pessoais |
| [testes-qualidade.md](./testes-qualidade.md) | Pirâmide de testes, cobertura esperada, DoD |
| [deploy-operacao.md](./deploy-operacao.md) | Docker, CI/CD, backups, observabilidade |

## Convenções

- Texto principal em **português**; nomes de código/API em **inglês** (definido por documento quando aplicável).
- Marcadores **`[preencher]`** indicam decisão pendente — remover após definir.

## ADRs (opcional)

Decisões difíceis de reverter ficam em `docs/adr/0001-titulo.md` seguindo o formato ADR.
