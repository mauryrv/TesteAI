# Arquitetura

## Estilo de organização

- **Monorepo** [confirmar]: raiz com `apps/` e `packages/` (ou equivalente).

Estrutura alvo (ajustar nomes à stack):

```
apps/
  api/          # HTTP, DI, adaptadores
  web/          # UI
packages/
  domain/       # Entidades, invariantes, políticas puras
  application/  # Casos de uso (opcional como pacote separado)
  shared/       # Tipos e utilitários comuns (evitar virar “lixo”)
```

## Camadas e dependências

1. **Domínio** — sem imports de framework web, ORM ou SDK externo.
2. **Aplicação** — orquestra repositórios e domínio; define DTOs de caso de uso.
3. **Infraestrutura** — implementa repositórios, HTTP clients, filas.
4. **Interface (API/UI)** — traduz HTTP/CLI/evento para casos de uso.

Regra: dependências apontam **para dentro** (infra implementa interfaces definidas pela aplicação/domínio).

## Bounded contexts (módulos de negócio)

| Contexto | Responsabilidade | Integração com outros |
|----------|------------------|------------------------|
| Animals | Ciclo de vida do animal, identificação | Referenciado por sanidade, pesagem |
| Health | Vacinas, tratamentos | Animal |
| Breeding | Eventos reprodutivos | Animal |
| Weighing | Pesagens, curvas | Animal |
| Pastures | Pastos, lotes, movimentação | Animal |
| Farms / Users | Fazendas, membros, permissões | Escopo global |
| Finance *(opcional)* | Custos/receitas | Animal / lote |

[Preencher: comunicação entre contextos — chamada direta vs eventos de domínio.]

## Fluxo de uma requisição típica

Cliente → middleware (auth, tenant) → controller/handler → caso de uso → repositório → banco.

## Migrações e schema

- Mudanças de banco apenas via **migrações versionadas** no repositório.
- Nomeação: [preencher: padrão do ORM].

## Observabilidade (alto nível)

- Logs estruturados com `requestId`/`correlationId` [definir implementação].
- Métricas e tracing: [preencher ou “fase 2”].
