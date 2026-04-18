# Testes e qualidade

## Pirâmide alvo

1. **Unitários** — domínio e utilitários puros (rápidos, sem IO).
2. **Integração** — repositórios com banco real ou Testcontainers [definir].
3. **E2E** — poucos fluxos críticos (login, registrar pesagem, etc.) [ferramenta a definir].

## Ferramentas

| Tipo | Ferramenta |
|------|------------|
| Runner / framework | [preencher: Jest, pytest, vitest] |
| Mocks | [preencher] |
| E2E | [preencher: Playwright, Cypress] |

## Cobertura

- Meta mínima no domínio: [ex.: 80% lines — definir].
- Cobertura global como orientação, não substituto de testes relevantes.

## Convenções

- Nomes de teste descrevem comportamento: `should reject weighing when animal is archived`.
- Dados de teste: factories ou builders [padronizar pasta].
- Testes de API: **limpar estado** ou usar transação rollback por teste [definir].

## Definition of Done (feature)

- [ ] Regras novas no domínio com testes unitários ou justificativa escrita (UI-only).
- [ ] Caso integração novo para fluxo que envolve persistência multi-tenant.
- [ ] Migração incluída se schema mudou.
- [ ] Lint e typecheck passando no CI.

## CI

- Pipeline em: [GitHub Actions / outro — definir].
- Gates: [lint, test, build — listar].
